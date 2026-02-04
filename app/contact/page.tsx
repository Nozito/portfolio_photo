import type { Metadata } from "next";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Container } from "../components/ui/Container";
import { ContactForm } from "../components/forms/ContactForm";
import { BlurFade } from "../components/BlurFade";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez Noah Dekeyzer pour vos projets photographiques. Concerts, portraits, automobile, voyages - je suis à votre écoute.",
  openGraph: {
    title: "Contact | Noah Dekeyzer",
    description:
      "Contactez Noah Dekeyzer pour vos projets photographiques.",
  },
};

export default function Contact() {
  return (
    <div className="bg-black min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section with subtle animated background */}
      <section className="relative flex flex-col justify-center items-center pt-32 pb-8 md:pt-40 md:pb-12 text-center px-4 overflow-hidden">
        {/* Subtle gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-black to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.02)_0%,transparent_50%)]" />

        <div className="relative z-10">
          <BlurFade delay={0.1}>
            <span className="text-sm tracking-[0.3em] uppercase text-gray-500 mb-4 block">
              Contact
            </span>
          </BlurFade>
          <BlurFade delay={0.2}>
            <h1 className="text-heading text-white mb-4">
              Discutons ensemble
            </h1>
          </BlurFade>
          <BlurFade delay={0.3}>
            <p className="text-lg text-gray-300 max-w-xl mx-auto">
              Vous avez un projet ou une question ? Je suis à votre écoute et vous
              répondrai dans les plus brefs délais.
            </p>
          </BlurFade>
        </div>
      </section>

      {/* Form Section */}
      <section className="flex-grow pb-20 px-4">
        <Container size="default">
          <BlurFade delay={0.4}>
            <ContactForm />
          </BlurFade>
        </Container>
      </section>

      {/* Additional Contact Info */}
      <section className="py-16 border-t border-white/10 bg-gradient-to-b from-black to-gray-950">
        <Container>
          <BlurFade delay={0.1} inView>
            <h2 className="text-xl font-semibold text-white text-center mb-12">
              Autres moyens de me contacter
            </h2>
          </BlurFade>

          <div className="grid md:grid-cols-3 gap-6">
            <BlurFade delay={0.2} inView>
              <div className="group p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300">
                <div className="w-14 h-14 mx-auto mb-5 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-7 h-7 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-white font-semibold mb-2 text-center text-lg">Email</h3>
                <p className="text-gray-400 text-sm text-center">
                  Réponse garantie sous 24-48h
                </p>
              </div>
            </BlurFade>

            <BlurFade delay={0.3} inView>
              <div className="group p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300">
                <div className="w-14 h-14 mx-auto mb-5 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-7 h-7 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-white font-semibold mb-2 text-center text-lg">Localisation</h3>
                <p className="text-gray-400 text-sm text-center">
                  Basé sur Annecy, disponible partout
                </p>
              </div>
            </BlurFade>

            <BlurFade delay={0.4} inView>
              <div className="group p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300">
                <div className="w-14 h-14 mx-auto mb-5 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-7 h-7 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-white font-semibold mb-2 text-center text-lg">Services</h3>
                <p className="text-gray-400 text-sm text-center">
                  Concerts, Portraits, Automobile...
                </p>
              </div>
            </BlurFade>
          </div>
        </Container>
      </section>

      <Footer />
    </div>
  );
}
