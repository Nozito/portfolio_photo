"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Container } from "./components/ui/Container";
import { GlassPanel } from "./components/ui/GlassPanel";
import { Button } from "./components/ui/Button";
import { BentoGrid, BentoItem } from "./components/layout/BentoGrid";
import { OptimizedImage } from "./components/media/OptimizedImage";
import { ScrollIndicator } from "./components/animations/ScrollIndicator";
import { BlurFade } from "./components/BlurFade";
import { useRef } from "react";

const featuredProjects = [
  {
    title: "Concerts",
    description: "L'énergie pure de la musique live",
    image: "/img/jos4.jpg",
    link: "/concerts",
    span: "default" as const,
  },
  {
    title: "Portraits",
    description: "Un regard, une émotion",
    image: "/img/DSC052772.jpg",
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
    span: "default" as const,
  },
];

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  return (
    <div className="bg-black min-h-screen">
      <Navbar />

      {/* Hero Section avec Parallax */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden"
      >
        {/* Background avec effet parallax */}
        <motion.div
          className="absolute inset-0 z-0 w-full h-full"
          style={{ opacity, scale }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />
        </motion.div>

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
            <span className="inline-block">
              Dekeyzer
            </span>
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
            <Button href="/portfolio" size="lg">
              Voir mes projets
            </Button>
            <Button href="/contact" variant="secondary" size="lg">
              Me contacter
            </Button>
          </motion.div>
        </Container>

        {/* Scroll indicator avec bounce */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <ScrollIndicator />
          </motion.div>
        </motion.div>
      </section>

      {/* Featured Projects Section */}
      <section className="section bg-black">
        <Container>
          <BlurFade delay={0.1} inView>
            <div className="text-center mb-16">
              <motion.span
                className="text-sm tracking-[0.3em] uppercase text-gray-500 mb-4 block"
                whileHover={{ letterSpacing: "0.4em", transition: { duration: 0.3 } }}
              >
                Portfolio
              </motion.span>
              <h2 className="text-heading text-white mb-4">
                Projets en vedette
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Découvrez une sélection de mes travaux photographiques à travers
                différentes catégories.
              </p>
            </div>
          </BlurFade>

          <BentoGrid columns={2} gap="md">
            {featuredProjects.map((project, index) => (
              <BentoItem key={project.title} span={project.span} index={index}>
                <Link href={project.link} className="block h-full group">
                  <motion.div
                    className="relative w-full h-full"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    <OptimizedImage
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />

                    {/* Overlay avec animation */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-70 group-hover:opacity-90 transition-all duration-500 z-10" />

                    {/* Border animation au hover */}
                    <div className="absolute inset-0 border-2 border-white/0 group-hover:border-white/20 transition-all duration-500 rounded-2xl z-20" />

                    {/* Content avec slide up */}
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 z-20 p-6"
                      initial={false}
                    >
                      <motion.h3
                        className="text-2xl md:text-3xl font-bold text-white mb-2"
                        whileHover={{ x: 5, transition: { duration: 0.2 } }}
                      >
                        {project.title}
                      </motion.h3>
                      <p className="text-gray-300 text-sm md:text-base mb-4 transform transition-all duration-300 group-hover:translate-y-0 translate-y-2 opacity-0 group-hover:opacity-100">
                        {project.description}
                      </p>
                      <motion.span
                        className="inline-flex items-center gap-2 text-sm font-medium text-white/80 group-hover:text-white transition-colors"
                        whileHover={{ gap: "0.75rem" }}
                      >
                        Voir plus
                        <motion.svg
                          className="w-4 h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                          animate={{ x: [0, 5, 0] }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            repeatDelay: 1
                          }}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </motion.svg>
                      </motion.span>
                    </motion.div>

                    {/* Effet de brillance au hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30 pointer-events-none">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    </div>
                  </motion.div>
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
              <motion.div
                className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden group"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              >
                <OptimizedImage
                  src="/img/Nb.png"
                  alt="Noah Dekeyzer"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  hoverZoom={false}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Border glow au hover */}
                <div className="absolute inset-0 border-2 border-white/0 group-hover:border-white/30 transition-all duration-500 rounded-2xl" />
              </motion.div>
            </BlurFade>

            <BlurFade delay={0.2} inView>
              <div>
                <motion.span
                  className="text-sm tracking-[0.3em] uppercase text-gray-500 mb-4 block"
                  whileHover={{ letterSpacing: "0.4em", transition: { duration: 0.3 } }}
                >
                  À propos
                </motion.span>
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
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
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
            </motion.div>
          </BlurFade>
        </Container>
      </section>

      <Footer />
    </div>
  );
}
