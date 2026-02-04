"use server";

import { z } from "zod";

// Validation schema using Zod
const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Le nom doit contenir au moins 2 caractères")
    .max(100, "Le nom ne peut pas dépasser 100 caractères")
    .regex(
      /^[a-zA-ZÀ-ÿ\s'-]+$/,
      "Le nom ne peut contenir que des lettres, espaces, apostrophes et tirets"
    ),
  email: z
    .string()
    .email("Adresse email invalide")
    .max(254, "L'adresse email est trop longue"),
  phone: z
    .string()
    .max(20, "Le numéro de téléphone est trop long")
    .regex(
      /^[\d\s\-+()]*$/,
      "Le numéro de téléphone contient des caractères invalides"
    )
    .optional()
    .or(z.literal("")),
  subject: z
    .string()
    .min(3, "L'objet doit contenir au moins 3 caractères")
    .max(200, "L'objet ne peut pas dépasser 200 caractères"),
  message: z
    .string()
    .min(10, "Le message doit contenir au moins 10 caractères")
    .max(5000, "Le message ne peut pas dépasser 5000 caractères"),
  // Honeypot field - should always be empty
  website: z.string().max(0, "").optional(),
});

export type ContactFormData = z.infer<typeof contactSchema>;

export type ContactFormState = {
  success: boolean;
  message: string;
  errors?: {
    name?: string[];
    email?: string[];
    phone?: string[];
    subject?: string[];
    message?: string[];
  };
};

// Sanitize string to prevent XSS attacks
function sanitizeString(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;")
    .trim();
}

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  // Extract form data
  const rawData = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    phone: (formData.get("phone") as string) || "",
    subject: formData.get("subject") as string,
    message: formData.get("message") as string,
    website: (formData.get("website") as string) || "", // Honeypot
  };

  // Check honeypot - if filled, it's a bot
  if (rawData.website && rawData.website.length > 0) {
    // Silently reject but return success to fool bots
    console.log("Honeypot triggered, likely bot submission");
    return {
      success: true,
      message: "Message envoyé avec succès !",
    };
  }

  // Validate form data
  const validationResult = contactSchema.safeParse(rawData);

  if (!validationResult.success) {
    const errors = validationResult.error.flatten().fieldErrors;
    return {
      success: false,
      message: "Veuillez corriger les erreurs ci-dessous.",
      errors: {
        name: errors.name,
        email: errors.email,
        phone: errors.phone,
        subject: errors.subject,
        message: errors.message,
      },
    };
  }

  // Sanitize validated data
  const sanitizedData = {
    name: sanitizeString(validationResult.data.name),
    email: sanitizeString(validationResult.data.email),
    phone: validationResult.data.phone
      ? sanitizeString(validationResult.data.phone)
      : "",
    subject: sanitizeString(validationResult.data.subject),
    message: sanitizeString(validationResult.data.message),
  };

  // Get access key from environment variable
  const accessKey = process.env.WEB3FORMS_ACCESS_KEY;

  if (!accessKey) {
    console.error("WEB3FORMS_ACCESS_KEY is not configured");
    return {
      success: false,
      message:
        "Erreur de configuration du serveur. Veuillez réessayer plus tard.",
    };
  }

  try {
    // Submit to Web3Forms API
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: accessKey,
        from_name: "Portfolio Photo",
        subject: `Nouveau message: ${sanitizedData.subject}`,
        name: sanitizedData.name,
        email: sanitizedData.email,
        phone: sanitizedData.phone || "Non renseigné",
        message: sanitizedData.message,
      }),
    });

    const result = await response.json();

    if (result.success) {
      return {
        success: true,
        message: "Message envoyé avec succès ! Je vous répondrai rapidement.",
      };
    } else {
      console.error("Web3Forms error:", result);
      return {
        success: false,
        message: "Erreur lors de l'envoi du message. Veuillez réessayer.",
      };
    }
  } catch (error) {
    console.error("Contact form submission error:", error);
    return {
      success: false,
      message: "Erreur de connexion. Veuillez réessayer plus tard.",
    };
  }
}
