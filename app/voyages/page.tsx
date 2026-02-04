'use client';

import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import BlurText from '../components/BlurText';

export default function Voyages() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  const destinations = [
    {
      title: "Suède",
      description: "Stockholm et ses archipels",
      image: "/img/Stockholm-84.jpg",
      href: "/suede",
      available: true,
      photos: "50+ photos"
    },
    {
      title: "Danemark",
      description: "Copenhague, la ville vélo",
      image: "/img/Copenhague-1.jpg",
      href: "#",
      available: false,
      photos: "Bientôt"
    },
    {
      title: "Paris",
      description: "La ville lumière",
      image: "/img/Paris-1.jpg",
      href: "#",
      available: false,
      photos: "Bientôt"
    }
  ];

  // Gestion du scroll
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />

      <Head>
        <title>Voyages - Noah Dekeyzer</title>
        <meta name="description" content="Mes voyages à travers l'Europe" />
      </Head>

      {/* Hero Section */}
      <motion.header 
        className="relative flex flex-col items-center justify-center min-h-[70vh] px-6"
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
            Portfolio Voyage
          </span>
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6">
            <BlurText
              text="VOYAGES"
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
            Découvrez mes aventures à travers l'Europe.
            <br className="hidden md:block" />
            Chaque destination, une nouvelle histoire à raconter.
          </motion.p>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="mt-16 flex items-center gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-white mb-1">{destinations.length}</p>
            <p className="text-sm text-gray-500 uppercase tracking-wider">Destinations</p>
          </div>
          <div className="h-12 w-px bg-gray-800" />
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-white mb-1">
              {destinations.filter(d => d.available).length}
            </p>
            <p className="text-sm text-gray-500 uppercase tracking-wider">Disponibles</p>
          </div>
        </motion.div>
      </motion.header>

      {/* Séparateur */}
      <motion.div 
        className="flex justify-center py-12"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="h-px w-32 bg-gradient-to-r from-transparent via-white/50 to-transparent" />
      </motion.div>

      {/* Destinations Grid */}
      <main className="px-6 lg:px-12 py-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, idx) => (
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
              {destination.available ? (
                <Link href={destination.href}>
                  <DestinationCard destination={destination} idx={idx} />
                </Link>
              ) : (
                <div className="cursor-not-allowed">
                  <DestinationCard destination={destination} idx={idx} />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </main>

      {/* Scroll to top button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 w-14 h-14 bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 hover:border-white/30 text-white rounded-full flex items-center justify-center transition-all z-40 group"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg 
              className="w-6 h-6 transition-transform group-hover:-translate-y-1" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}

// Composant carte de destination
function DestinationCard({ destination, idx }: { destination: any; idx: number }) {
  return (
    <motion.div
      className={`group relative overflow-hidden rounded-2xl bg-gray-900 h-[500px] ${
        !destination.available ? 'opacity-60' : ''
      }`}
      whileHover={destination.available ? { y: -10 } : {}}
      transition={{ duration: 0.4 }}
    >
      {/* Image */}
      <div className="relative h-full w-full">
        <Image
          src={destination.image}
          alt={destination.title}
          fill
          className={`object-cover transition-all duration-700 ${
            destination.available ? 'group-hover:scale-110 group-hover:brightness-110' : 'brightness-75'
          }`}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20 opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

        {/* Badge */}
        {!destination.available && (
          <motion.div
            className="absolute top-6 right-6 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider border border-white/20"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.15 + 0.3 }}
          >
            Bientôt
          </motion.div>
        )}

        {/* Compteur photos */}
        <motion.div
          className={`absolute top-6 left-6 bg-black/50 backdrop-blur-sm text-white px-4 py-2 rounded-full text-xs font-medium border border-white/20 ${
            destination.available ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'
          } transition-opacity duration-300`}
        >
          {destination.photos}
        </motion.div>

        {/* Numéro décoratif */}
        <div className="absolute top-6 left-6 text-8xl font-bold text-white/5 select-none">
          {String(idx + 1).padStart(2, '0')}
        </div>

        {/* Contenu */}
        <div className="absolute inset-0 flex flex-col justify-end p-8">
          {/* Ligne décorative */}
          <motion.div 
            className="h-px w-16 bg-white/50 mb-6"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.15 + 0.4, duration: 0.6 }}
          />

          <motion.h2 
            className="text-5xl md:text-6xl font-bold text-white mb-3"
            whileHover={destination.available ? { x: 10 } : {}}
            transition={{ duration: 0.3 }}
          >
            {destination.title}
          </motion.h2>
          
          <p className="text-gray-200 text-lg mb-6 leading-relaxed">
            {destination.description}
          </p>

          {/* Bouton/Indication */}
          {destination.available ? (
            <motion.div 
              className="inline-flex items-center gap-3 text-white"
              whileHover={{ gap: "1rem" }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-sm font-medium uppercase tracking-wider">
                Découvrir la galerie
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
          ) : (
            <div className="inline-flex items-center gap-3 text-gray-400">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span className="text-sm font-medium uppercase tracking-wider">
                Galerie en préparation
              </span>
            </div>
          )}
        </div>

        {/* Bordure au hover */}
        {destination.available && (
          <div className="absolute inset-0 border-2 border-white/0 group-hover:border-white/40 rounded-2xl transition-all duration-500 pointer-events-none" />
        )}
      </div>
    </motion.div>
  );
}
