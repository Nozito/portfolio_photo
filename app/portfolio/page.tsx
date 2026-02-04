import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Container } from "../components/ui/Container";
import { BentoGrid, BentoItem } from "../components/layout/BentoGrid";
import { OptimizedImage } from "../components/media/OptimizedImage";
import { BlurFade } from "../components/BlurFade";
import { ScrollIndicator } from "../components/animations/ScrollIndicator";

export const metadata: Metadata = {
  title: "Projets",
  description:
    "Explorez le portfolio photographique de Noah Dekeyzer : concerts, portraits, automobile et voyages. Des clichés authentiques qui racontent des histoires.",
  openGraph: {
    title: "Projets | Noah Dekeyzer",
    description:
      "Explorez le portfolio photographique de Noah Dekeyzer.",
  },
};

const categories = [
  {
    title: "Concerts",
    description: "L'énergie pure et l'intensité de la musique live capturées dans l'instant.",
    image: "/img/hgfv23.png",
    link: "/concerts",
    span: "large" as const,
  },
  {
    title: "Portraits",
    description: "Un regard, une émotion, un instant figé dans le temps.",
    image: "/img/DSC052772.JPG",
    link: "/portraits",
    span: "tall" as const,
  },
  {
    title: "Voitures",
    description: "L'univers automobile à travers mon objectif.",
    image: "/img/bannerp.JPG",
    link: "/voitures",
    span: "default" as const,
  },
  {
    title: "Voyages",
    description: "Explorez le monde à travers mes photographies de voyage.",
    image: "/img/Malmo-1.jpg",
    link: "/voyages",
    span: "wide" as const,
  },
];

export default function Portfolio() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative flex flex-col justify-center items-center min-h-[70vh] overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.05)_0%,transparent_70%)]" />

        <Container className="relative z-10 text-center pt-32 pb-16">
          <BlurFade delay={0.1}>
            <span className="text-sm tracking-[0.3em] uppercase text-gray-500 mb-4 block">
              Portfolio
            </span>
          </BlurFade>

          <BlurFade delay={0.2}>
            <h1 className="text-display text-white mb-6">
              MES PROJETS
            </h1>
          </BlurFade>

          <BlurFade delay={0.3}>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Explorez toutes mes catégories et plongez dans mon univers
              photographique. Chaque image raconte une histoire unique.
            </p>
          </BlurFade>
        </Container>

        {/* Scroll indicator */}
        <BlurFade delay={0.5}>
          <ScrollIndicator className="absolute bottom-8" />
        </BlurFade>
      </section>

      {/* Decorative divider */}
      <div className="flex justify-center py-8">
        <div className="h-px w-24 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
      </div>

      {/* Categories Grid */}
      <section className="section pt-8">
        <Container>
          <BentoGrid columns={3} gap="lg">
            {categories.map((category, index) => (
              <BentoItem
                key={category.title}
                span={category.span}
                index={index}
              >
                <Link
                  href={category.link}
                  className="block h-full group"
                  aria-label={`Voir la galerie ${category.title}`}
                >
                  <div className="relative h-full min-h-[320px]">
                    <OptimizedImage
                      src={category.image}
                      alt={category.title}
                      className="absolute inset-0"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 drop-shadow-lg">
                        {category.title}
                      </h2>
                      <p className="text-gray-200 mb-6 drop-shadow-md max-w-md">
                        {category.description}
                      </p>
                      <span className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white border border-white/50 rounded-full backdrop-blur-sm bg-white/5 group-hover:bg-white group-hover:text-black transition-all duration-300">
                        Voir la galerie
                        <svg
                          className="w-4 h-4 transition-transform group-hover:translate-x-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              </BentoItem>
            ))}
          </BentoGrid>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="section">
        <Container size="narrow" className="text-center">
          <BlurFade delay={0.1} inView>
            <h2 className="text-subheading text-white mb-4">
              Vous aimez ce que vous voyez ?
            </h2>
            <p className="text-gray-400 mb-8 max-w-md mx-auto">
              N&apos;hésitez pas à me contacter pour discuter de votre projet
              photographique.
            </p>
            <Link
              href="/contact"
              className="btn btn-primary btn-lg"
            >
              Me contacter
            </Link>
          </BlurFade>
        </Container>
      </section>

      <Footer />
    </div>
  );
}
