import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#000000",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://noahdekeyzer.com"),
  title: {
    default: "Noah Dekeyzer | Photographe",
    template: "%s | Noah Dekeyzer",
  },
  description:
    "Photographe passionné capturant concerts, portraits, automobiles et voyages. Découvrez mon univers visuel unique à travers des clichés authentiques et vibrants.",
  keywords: [
    "photographe",
    "photographie",
    "concerts",
    "portraits",
    "automobile",
    "voyages",
    "Noah Dekeyzer",
    "photographe français",
    "photo événementielle",
    "photo artistique",
  ],
  authors: [{ name: "Noah Dekeyzer" }],
  creator: "Noah Dekeyzer",
  publisher: "Noah Dekeyzer",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://noahdekeyzer.com",
    siteName: "Noah Dekeyzer Photographie",
    title: "Noah Dekeyzer | Photographe",
    description:
      "Photographe passionné capturant concerts, portraits, automobiles et voyages. Découvrez mon univers visuel unique.",
    images: [
      {
        url: "/img/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Noah Dekeyzer - Photographe",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Noah Dekeyzer | Photographe",
    description:
      "Photographe passionné capturant concerts, portraits, automobiles et voyages.",
    images: ["/img/og-image.jpg"],
    creator: "@noahdkr_",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/img/favicon.ico",
    shortcut: "/img/favicon.ico",
    apple: "/img/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
  alternates: {
    canonical: "https://noahdekeyzer.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        {/* Skip to main content link for accessibility */}
        <a href="#main-content" className="skip-link">
          Aller au contenu principal
        </a>

        <main id="main-content">
          {children}
        </main>
      </body>
    </html>
  );
}
