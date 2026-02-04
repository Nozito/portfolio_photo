'use client';

import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';
import Link from 'next/link';
import { motion } from 'framer-motion';
import BlurText from '../components/BlurText';

export default function Voitures() {
  const voitures = [
    {
      title: "Porsche",
      description: "L'excellence allemande et la performance pure",
      image: "/img/bannerp.JPG",
      link: "/porsche",
      photos: "30+ photos"
    },
    {
      title: "Peugeot",
      description: "L'élégance française au quotidien",
      image: "/img/308JL-48.jpg",
      link: "/peugeot",
      photos: "20+ photos"
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      <Head>
        <title>Galerie Voitures - Noah Dekeyzer</title>
        <meta name="description" content="Découvrez ma collection de photos automobiles" />
      </Head>

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
            Galerie
          </span>
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6">
            <BlurText
              text="VOITURES"
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
            L'art automobile capturé à travers mon objectif.
            <br className="hidden md:block" />
            Performance, design et passion.
          </motion.p>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="mt-16 flex items-center gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-white mb-1">{voitures.length}</p>
            <p className="text-sm text-gray-500 uppercase tracking-wider">Marques</p>
          </div>
          <div className="h-12 w-px bg-gray-800" />
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-white mb-1">50+</p>
            <p className="text-sm text-gray-500 uppercase tracking-wider">Photos</p>
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

      {/* Voitures Grid */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {voitures.map((voiture, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.6,
                delay: idx * 0.15,
                ease: [0.16, 1, 0.3, 1]
              }}
            >
              <Link href={voiture.link} className="block group">
                <motion.div
                  className="relative overflow-hidden rounded-2xl bg-gray-900"
                  whileHover={{ scale: 1.01, y: -5 }}
                  transition={{ duration: 0.4 }}
                >
                  {/* Image */}
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={voiture.image}
                      alt={voiture.title}
                      fill
                      className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                      sizes="(max-width: 768px) 100vw, 50vw"
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
                      {voiture.photos}
                    </motion.div>

                    {/* Numéro de catégorie */}
                    <div className="absolute top-6 left-6 text-6xl md:text-8xl font-bold text-white/10 select-none">
                      {String(idx + 1).padStart(2, '0')}
                    </div>

                    {/* Contenu */}
                    <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                      {/* Ligne décorative */}
                      <motion.div
                        className="h-px w-16 bg-white/50 mb-4"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.15 + 0.3, duration: 0.6 }}
                      />

                      <motion.h2
                        className="text-4xl md:text-5xl font-bold text-white mb-3"
                        whileHover={{ x: 10 }}
                        transition={{ duration: 0.3 }}
                      >
                        {voiture.title}
                      </motion.h2>

                      <p className="text-gray-200 text-base md:text-lg mb-6 leading-relaxed">
                        {voiture.description}
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
        </div>

        {/* Message informatif */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
            <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-gray-400 text-sm">D'autres marques seront bientôt ajoutées</span>
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-24">
        <div className="max-w-2xl mx-auto">
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Vous avez une voiture à photographier ?
            </h2>
            <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
              Je serais ravi de capturer l'essence et la beauté de votre véhicule.
            </p>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-2xl relative overflow-hidden"
              >
                {/* Effet de brillance au survol */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-black/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />

                <span className="relative z-10 text-black">Me contacter</span>

                <svg
                  className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1 text-black"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </motion.div>

          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}