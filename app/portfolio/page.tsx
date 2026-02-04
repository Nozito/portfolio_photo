"use client";

import type { Metadata } from "next";
import Link from "next/link";
import { motion } from "framer-motion";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Container } from "../components/ui/Container";
import { OptimizedImage } from "../components/media/OptimizedImage";
import { BlurFade } from "../components/BlurFade";
import BlurText from "../components/BlurText";

const categories = [
  {
    title: "Concerts",
    description: "L'énergie pure et l'intensité de la musique live capturées dans l'instant",
    image: "/img/hgfv23.png",
    link: "/concerts",
    count: "25+ photos",
  },
  {
    title: "Portraits",
    description: "Un regard, une émotion, un instant figé dans le temps",
    image: "/img/DSC052772.jpg",
    link: "/portraits",
    count: "16 photos",
  },
  {
    title: "Voitures",
    description: "L'univers automobile à travers mon objectif",
    image: "/img/bannerp.JPG",
    link: "/voitures",
    count: "30+ photos",
  },
  {
    title: "Voyages",
    description: "Explorez le monde à travers mes photographies de voyage",
    image: "/img/Malmo-1.jpg",
    link: "/voyages",
    count: "40+ photos",
  },
];

export default function Portfolio() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />

      {/* Hero Section épuré */}
      <motion.header
        className="relative flex flex-col items-center justify-center min-h-[60vh] px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center"
        >
          <span className="text-sm md:text-base tracking-[0.3em] uppercase text-gray-500 mb-6 block">
            Portfolio
          </span>
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6">
            <BlurText
              text="PROJETS"
              delay={150}
              animateBy="words"
              direction="top"
            />
          </h1>
          <motion.p
            className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Explorez mon univers photographique à travers quatre catégories distinctes.
            <br className="hidden md:block" />
            Chaque image raconte une histoire unique.
          </motion.p>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          className="mt-16 flex flex-wrap items-center justify-center gap-8 md:gap-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-white mb-1">4</p>
            <p className="text-sm text-gray-500 uppercase tracking-wider">Catégories</p>
          </div>
          <div className="h-12 w-px bg-gray-800" />
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-white mb-1">100+</p>
            <p className="text-sm text-gray-500 uppercase tracking-wider">Photos</p>
          </div>
          <div className="h-12 w-px bg-gray-800" />
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-white mb-1">3</p>
            <p className="text-sm text-gray-500 uppercase tracking-wider">Ans d'expérience</p>
          </div>
        </motion.div>
      </motion.header>

      {/* Séparateur élégant */}
      <motion.div
        className="flex justify-center py-12"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="h-px w-32 bg-gradient-to-r from-transparent via-white/50 to-transparent" />
      </motion.div>

      {/* Categories Grid */}
      <section className="px-6 lg:px-12 py-16 max-w-7xl mx-auto">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: [0.16, 1, 0.3, 1]
              }}
              className={`${index === 0 ? 'md:col-span-2' : ''
                }`}
            >
              <Link
                href={category.link}
                className="block group"
              >
                <motion.div
                  className="relative overflow-hidden rounded-2xl bg-gray-900"
                  whileHover={{ scale: 1.01, y: -5 }}
                  transition={{ duration: 0.4 }}
                >
                  {/* Image */}
                  <div className={`relative ${index === 0
                      ? 'aspect-[21/9]'
                      : 'aspect-[4/3]'
                    }`}>
                    <OptimizedImage
                      src={category.image}
                      alt={category.title}
                      fill
                      className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                      sizes={index === 0 ? "100vw" : "(max-width: 768px) 100vw, 50vw"}
                    />

                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20 opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

                    {/* Compteur en haut */}
                    <motion.div
                      className="absolute top-6 right-6 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium border border-white/20 opacity-0 group-hover:opacity-100"
                      initial={{ y: -10 }}
                      whileHover={{ y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {category.count}
                    </motion.div>

                    {/* Numéro de catégorie */}
                    <div className="absolute top-6 left-6 text-6xl md:text-8xl font-bold text-white/10 select-none">
                      {String(index + 1).padStart(2, '0')}
                    </div>

                    {/* Contenu */}
                    <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 lg:p-10">
                      {/* Ligne décorative */}
                      <motion.div
                        className="h-px w-16 bg-white/50 mb-4"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15 + 0.3, duration: 0.6 }}
                      />

                      <motion.h2
                        className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-3"
                        whileHover={{ x: 10 }}
                        transition={{ duration: 0.3 }}
                      >
                        {category.title}
                      </motion.h2>

                      <p className="text-gray-200 text-base md:text-lg mb-6 max-w-2xl leading-relaxed">
                        {category.description}
                      </p>

                      {/* Bouton avec animation */}
                      <motion.div
                        className="inline-flex items-center gap-3 text-white"
                        whileHover={{ gap: "1rem" }}
                        transition={{ duration: 0.3 }}
                      >
                        <span className="text-sm font-medium uppercase tracking-wider">
                          Explorer la galerie
                        </span>
                        <motion.div
                          className="w-10 h-10 rounded-full border-2 border-white/50 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all duration-300"
                          whileHover={{ rotate: 45 }}
                        >
                          <svg
                            className="w-5 h-5 group-hover:text-black transition-colors"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </motion.div>
                      </motion.div>
                    </div>

                    {/* Bordure au hover */}
                    <div className="absolute inset-0 border-2 border-white/0 group-hover:border-white/30 rounded-2xl transition-all duration-500 pointer-events-none" />
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA Section améliorée */}
      <section className="px-6 py-24">
        <Container size="narrow">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            {/* Icône décorative */}
            <motion.div
              className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/5 border border-white/10 mb-8"
              whileHover={{ scale: 1.1, rotate: 180 }}
              transition={{ duration: 0.6 }}
            >
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Intéressé par mon travail ?
            </h2>
            <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
              N'hésitez pas à me contacter pour discuter de votre projet photographique ou pour toute collaboration.
            </p>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl relative overflow-hidden"
              >
                {/* Effet de brillance au survol */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-black/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />

                <span className="relative z-10 text-black">Me contacter</span>

                <svg
                  className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1 text-black"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </motion.div>

          </motion.div>
        </Container>
      </section>

      <Footer />
    </div>
  );
}
