'use client';

import React from 'react';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';
import Image from 'next/image';
import Head from 'next/head';
import { motion } from 'framer-motion';
import BlurText from '../components/BlurText';

export default function About() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      
      <Head>
        <title>À Propos - Noah Dekeyzer</title>
        <meta name="description" content="Photographe et vidéaste amateur" />
      </Head>

      {/* Hero Section - Optimisé mobile */}
      <motion.header 
        className="relative flex flex-col items-center justify-center min-h-[50vh] md:min-h-[60vh] px-4 sm:px-6"
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
          <span className="text-xs sm:text-sm md:text-base tracking-[0.2em] sm:tracking-[0.3em] uppercase text-gray-500 mb-4 sm:mb-6 block">
            Portfolio
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 sm:mb-6 px-4">
            <BlurText
              text="À PROPOS"
              delay={150}
              animateBy="words"
              direction="top"
            />
          </h1>
          <motion.p 
            className="text-gray-400 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Photographe et vidéaste amateur.
            <br className="hidden sm:block" />
            Étudiant en BUT GEA, passionné de création visuelle.
          </motion.p>
        </motion.div>

        {/* Stats - Responsive */}
        <motion.div
          className="mt-12 sm:mt-16 flex items-center gap-4 sm:gap-6 md:gap-8 flex-wrap justify-center px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <div className="text-center">
            <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1">6</p>
            <p className="text-xs sm:text-sm text-gray-500 uppercase tracking-wider">Ans d'expérience</p>
          </div>
          <div className="h-8 sm:h-12 w-px bg-gray-800" />
          <div className="text-center">
            <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1">3</p>
            <p className="text-xs sm:text-sm text-gray-500 uppercase tracking-wider">Courts métrages</p>
          </div>
          <div className="h-8 sm:h-12 w-px bg-gray-800" />
          <div className="text-center">
            <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1">∞</p>
            <p className="text-xs sm:text-sm text-gray-500 uppercase tracking-wider">Passion</p>
          </div>
        </motion.div>
      </motion.header>

      {/* Séparateur */}
      <motion.div 
        className="flex justify-center py-8 sm:py-12"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="h-px w-24 sm:w-32 bg-gradient-to-r from-transparent via-white/50 to-transparent" />
      </motion.div>

      {/* Profile Section - Optimisé mobile */}
      <main className="px-4 sm:px-6 lg:px-12 py-12 sm:py-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">
          {/* Photo - Responsive */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full max-w-md mx-auto lg:max-w-none"
          >
            <div className="relative overflow-hidden rounded-2xl">
              <Image
                src="/img/Noah.JPG"
                alt="Noah Dekeyzer"
                width={600}
                height={800}
                className="w-full h-auto object-cover rounded-2xl"
                priority
              />
              {/* Overlay décoratif */}
              <div className="absolute inset-0 border-2 border-white/10 rounded-2xl pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl pointer-events-none" />
            </div>
            
            {/* Badge décoratif - Positionné différemment sur mobile */}
            <motion.div
              className="absolute -bottom-4 sm:-bottom-6 -right-4 sm:-right-6 bg-white text-black px-4 py-3 sm:px-6 sm:py-4 rounded-full font-bold text-xs sm:text-sm shadow-2xl"
              initial={{ scale: 0, rotate: -45 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, type: "spring" }}
            >
              📸 Photographe
            </motion.div>
          </motion.div>

          {/* Texte - Responsive */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-5 sm:space-y-6 mt-8 lg:mt-0"
          >
            <div>
              <motion.div 
                className="h-1 w-12 sm:w-16 bg-white mb-4 sm:mb-6 rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              />
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-white">
                Bonjour,
              </h2>
            </div>

            <div className="space-y-4 sm:space-y-5 text-gray-300 text-base sm:text-lg leading-relaxed">
              <p>
                Je suis <span className="text-white font-semibold">Noah</span>, photographe et vidéaste amateur. J'étudie en parallèle en BUT GEA.
              </p>
              
              <p>
                Avant de prendre mon indépendance en photos et en vidéos, j'ai suivi pendant <span className="text-white font-semibold">3 ans</span>, en parallèle de mes cours, une option cinéma-audiovisuel. J'ai pu réaliser, avec des collègues, 3 courts métrages, ainsi que d'autres projets que vous retrouverez dans mon portfolio.
              </p>
              
              <p>
                À travers ce portfolio, vous pourrez suivre mon <span className="text-white font-semibold">évolution</span> depuis mes débuts, que ce soit en photo ou en cinématographie.
              </p>
              
              <p>
                Je n'ai pas de spécialisation particulière en matière de photographie. Je préfère explorer <span className="text-white font-semibold">divers sujets</span> pour rester polyvalent. Ainsi, vous découvrirez une variété de photos, toutes animées par ma passion.
              </p>
              
              <p className="text-white font-medium pt-2 sm:pt-4">
                Merci de prendre le temps de découvrir mon travail. J'espère que ces images vous transporteront et vous inspireront autant qu'elles m'inspirent.
              </p>
            </div>

            {/* Signature stylisée - Responsive */}
            <motion.div
              className="pt-6 sm:pt-8 flex items-center gap-3 sm:gap-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
            >
              <div className="h-px flex-1 bg-gradient-to-r from-white/50 to-transparent" />
              <span className="text-xl sm:text-2xl font-bold text-white italic">Noah</span>
              <div className="h-px flex-1 bg-gradient-to-l from-white/50 to-transparent" />
            </motion.div>
          </motion.div>
        </div>

        {/* Section compétences/domaines - Responsive */}
        <motion.div
          className="mt-16 sm:mt-20 lg:mt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {[
            {
              icon: "📸",
              title: "Photographie",
              description: "Concerts, voyages, automobile - Une approche variée et polyvalente"
            },
            {
              icon: "🎬",
              title: "Vidéographie",
              description: "Courts métrages et projets audiovisuels créatifs"
            },
            {
              icon: "🎓",
              title: "Formation",
              description: "3 ans d'option cinéma-audiovisuel + BTS SIO + BUT GEA"
            }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className="group relative p-6 sm:p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300"
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">{item.icon}</div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3">{item.title}</h3>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed">{item.description}</p>
              
              {/* Bordure animée */}
              <div className="absolute inset-0 border-2 border-white/0 group-hover:border-white/20 rounded-2xl transition-all duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
