"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Container } from "./components/ui/Container";
import { GlassPanel } from "./components/ui/GlassPanel";
import { Button } from "./components/ui/Button";
import { BentoGrid, BentoItem } from "./components/layout/BentoGrid";
import { OptimizedImage } from "./components/media/OptimizedImage";
import { ScrollIndicator } from "./components/animations/ScrollIndicator";
import { BlurFade } from "./components/BlurFade";

const featuredProjects = [
  {
    title: "Concerts",
    description: "L'énergie pure de la musique live",
    image: "/img/hgfv23.png",
    link: "/concerts",
    span: "large" as const,
  },
  {
    title: "Portraits",
    description: "Un regard, une émotion",
    image: "/img/DSC052772.JPG",
    link: "/portraits",
    span: "default" as const,
  },
  {
    title: "Voitures",
    description: "L'art automobile",
    image: "/img/bannerp.JPG",
    link: "/voitures",
    span: "default" as const,
  },
  {
    title: "Voyages",
    description: "Découvrir le monde",
    image: "/img/Malmo-1.jpg",
    link: "/voyages",
    span: "wide" as const,
  },
];

export default function Home() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden">
        {/* Background image with parallax effect */}
        <div className="absolute inset-0 z-0 w-full h-full relative">
          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />
        </div>

        {/* Hero content */}
        <Container className="relative z-10 text-center pt-32 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-sm md:text-base tracking-[0.3em] uppercase text-gray-400 mb-6 block">
              Photographe
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-hero text-white mb-6"
          >
            Noah
            <br />
            <span className="text-gradient">Dekeyzer</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl text-gray-300 max-w-xl mx-auto mb-10"
          >
            Capturer l&apos;instant, révéler l&apos;émotion.
            <br />
            Concerts, portraits, automobiles et voyages.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button href="/portfolio" size="lg" className="text-black">
              Voir mes projets
            </Button>
            <Button href="/contact" variant="secondary" size="lg">
              Me contacter
            </Button>
          </motion.div>
        </Container>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
        >
          <ScrollIndicator />
        </motion.div>
      </section>

      {/* Featured Projects Section */}
      <section className="section bg-black">
        <Container>
          <BlurFade delay={0.1} inView>
            <div className="text-center mb-16">
              <span className="text-sm tracking-[0.3em] uppercase text-gray-500 mb-4 block">
                Portfolio
              </span>
              <h2 className="text-heading text-white mb-4">
                Projets en vedette
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Découvrez une sélection de mes travaux photographiques à travers
                différentes catégories.
              </p>
            </div>
          </BlurFade>

          <BentoGrid columns={3} gap="md">
            {featuredProjects.map((project, index) => (
              <BentoItem key={project.title} span={project.span} index={index}>
                <Link href={project.link} className="block h-full group">
                  <div className="relative w-full h-full min-h-[280px]">
                    <OptimizedImage
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500 z-10" />
                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-300 text-sm mb-4">
                        {project.description}
                      </p>
                      <span className="inline-flex items-center gap-2 text-sm font-medium text-white/80 group-hover:text-white transition-colors">
                        Voir plus
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-center mt-12"
          >
            <Button href="/portfolio" variant="secondary">
              Voir tous les projets
            </Button>
          </motion.div>
        </Container>
      </section>

      {/* About Preview Section */}
      <section className="section bg-gradient-to-b from-black to-gray-950">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <BlurFade delay={0.1} inView>
              <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden">
                <OptimizedImage
                  src="/img/Nb.png"
                  alt="Noah Dekeyzer"
                  fill
                  className="object-cover"
                  hoverZoom={false}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </BlurFade>

            <BlurFade delay={0.2} inView>
              <div>
                <span className="text-sm tracking-[0.3em] uppercase text-gray-500 mb-4 block">
                  À propos
                </span>
                <h2 className="text-heading text-white mb-6">
                  Passionné par l&apos;image
                </h2>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Photographe passionné, je capture l&apos;essence des moments à
                  travers mon objectif. Des concerts électrisants aux portraits
                  intimes, en passant par l&apos;automobile et les voyages, chaque
                  cliché raconte une histoire unique.
                </p>
                <p className="text-gray-400 mb-8 leading-relaxed">
                  Mon approche se veut authentique et spontanée, cherchant
                  toujours à révéler l&apos;émotion et la beauté de l&apos;instant
                  présent.
                </p>
                <Button href="/about" variant="secondary">
                  En savoir plus
                </Button>
              </div>
            </BlurFade>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="section bg-black">
        <Container size="narrow">
          <BlurFade delay={0.1} inView>
            <GlassPanel
              blur="strong"
              padding="xl"
              hover={false}
              className="text-center"
            >
              <h2 className="text-subheading text-white mb-4">
                Un projet en tête ?
              </h2>
              <p className="text-gray-300 mb-8 max-w-md mx-auto">
                Je suis disponible pour vos projets photographiques. Discutons
                ensemble de vos idées et donnons-leur vie.
              </p>
              <Button href="/contact" size="lg">
                Contactez-moi
              </Button>
            </GlassPanel>
          </BlurFade>
        </Container>
      </section>

      <Footer />
    </div>
  );
}
