'use client';

import React from 'react';
import Head from 'next/head';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import BlurText from '../components/BlurText';

export default function Concerts() {
  const concerts = [
    { 
      title: "High Five Festival", 
      date: "29 Sept - 1 Oct 2023", 
      location: "Annecy, France",
      image: "/img/hgfv23.png", 
      link: "/high-five",
      photos: "25+ photos"
    },
    { 
      title: "Bientôt disponible", 
      date: "À venir", 
      location: "TBA",
      image: "/img/concert2.jpg", 
      link: "#",
      photos: "Soon",
      disabled: true
    },
    { 
      title: "Bientôt disponible", 
      date: "À venir", 
      location: "TBA",
      image: "/img/concert3.jpg", 
      link: "#",
      photos: "Soon",
      disabled: true
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      <Head>
        <title>Concerts - Noah Dekeyzer</title>
        <meta name="description" content="Découvrez mes photos de concerts" />
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
              text="CONCERTS"
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
            Capturez l'énergie brute et l'émotion des performances live.
            <br className="hidden md:block" />
            Des moments uniques figés dans le temps.
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
            <p className="text-3xl md:text-4xl font-bold text-white mb-1">{concerts.filter(c => !c.disabled).length}</p>
            <p className="text-sm text-gray-500 uppercase tracking-wider">Concerts</p>
          </div>
          <div className="h-12 w-px bg-gray-800" />
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-white mb-1">25+</p>
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

      {/* Concerts Grid */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {concerts.map((concert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.6, 
                delay: idx * 0.15,
                ease: [0.16, 1, 0.3, 1]
              }}
            >
              {concert.disabled ? (
                <div className="relative overflow-hidden rounded-2xl bg-gray-900 opacity-60 cursor-not-allowed">
                  <div className="relative aspect-[3/4]">
                    <Image
                      src={concert.image}
                      alt={concert.title}
                      fill
                      className="object-cover grayscale"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20" />
                    
                    {/* Badge "Bientôt" */}
                    <div className="absolute top-6 right-6 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium border border-white/20">
                      Bientôt
                    </div>

                    {/* Numéro */}
                    <div className="absolute top-6 left-6 text-6xl font-bold text-white/10 select-none">
                      {String(idx + 1).padStart(2, '0')}
                    </div>

                    {/* Contenu */}
                    <div className="absolute inset-0 flex flex-col justify-end p-6">
                      <div className="h-px w-12 bg-white/30 mb-4" />
                      <h3 className="text-2xl font-bold text-white mb-2">{concert.title}</h3>
                      <p className="text-gray-400 text-sm">{concert.date}</p>
                    </div>
                  </div>
                </div>
              ) : (
                <Link href={concert.link} className="block group">
                  <motion.div
                    className="relative overflow-hidden rounded-2xl bg-gray-900"
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="relative aspect-[3/4]">
                      <Image
                        src={concert.image}
                        alt={concert.title}
                        fill
                        className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                      />
                      
                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20 opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                      
                      {/* Compteur de photos */}
                      <motion.div
                        className="absolute top-6 right-6 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium border border-white/20 opacity-0 group-hover:opacity-100"
                        initial={{ y: -10 }}
                        whileHover={{ y: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {concert.photos}
                      </motion.div>

                      {/* Numéro */}
                      <div className="absolute top-6 left-6 text-6xl font-bold text-white/10 select-none">
                        {String(idx + 1).padStart(2, '0')}
                      </div>

                      {/* Contenu */}
                      <div className="absolute inset-0 flex flex-col justify-end p-6">
                        {/* Ligne décorative */}
                        <motion.div 
                          className="h-px w-12 bg-white/50 mb-4"
                          initial={{ scaleX: 0 }}
                          whileInView={{ scaleX: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.15 + 0.3, duration: 0.6 }}
                        />

                        <motion.h3 
                          className="text-2xl md:text-3xl font-bold text-white mb-2"
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.3 }}
                        >
                          {concert.title}
                        </motion.h3>
                        
                        <div className="mb-4">
                          <p className="text-gray-300 text-sm mb-1">{concert.date}</p>
                          <p className="text-gray-400 text-xs flex items-center gap-1">
                            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            {concert.location}
                          </p>
                        </div>

                        {/* Bouton avec animation */}
                        <motion.div 
                          className="inline-flex items-center gap-2 text-white text-sm"
                          whileHover={{ gap: "0.75rem" }}
                          transition={{ duration: 0.3 }}
                        >
                          <span className="font-medium uppercase tracking-wider">Voir les photos</span>
                          <motion.div
                            className="w-8 h-8 rounded-full border-2 border-white/50 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all duration-300"
                            whileHover={{ rotate: 45 }}
                          >
                            <svg 
                              className="w-4 h-4 group-hover:text-black transition-colors" 
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
                      <div className="absolute inset-0 border-2 border-white/0 group-hover:border-white/40 rounded-2xl transition-all duration-500 pointer-events-none" />
                    </div>
                  </motion.div>
                </Link>
              )}
            </motion.div>
          ))}
        </div>

        {/* Message si concerts à venir */}
        {concerts.filter(c => c.disabled).length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-16 text-center"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
              <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-gray-400 text-sm">D'autres concerts seront bientôt disponibles</span>
            </div>
          </motion.div>
        )}
      </section>

      <Footer />
    </div>
  );
}
