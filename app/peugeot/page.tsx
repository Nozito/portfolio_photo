'use client';

import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import BlurText from '../components/BlurText';

export default function Peugeot() {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const photos = [
    "/img/308JL-43-SP.jpg",  // 0 - Grande (2x2)
    "/img/308JL-10.jpg",     // 1 - Verticale
    "/img/308JL-33.jpg",     // 2 - Verticale
    "/img/308JL-36-SP.jpg",  // 3 - Verticale
    "/img/308JL-19.jpg",     // 4 - Verticale
    "/img/308JL-44.jpg",     // 5 - Grande (2x2)
    "/img/308JL-48.jpg",     // 6 - FULL WIDTH
  ];

  const getGridClass = (idx: number) => {
    if (idx === 0) return 'md:col-span-2 md:row-span-2'; // Première grande
    if (idx === 5) return 'md:col-span-2 md:row-span-2'; // Photo 6 grande
    if (idx === 6) return 'md:col-span-4 md:row-span-2'; // Dernière prend toute la largeur
    return 'md:row-span-2'; // Les autres verticales
  };

  // Gestion du scroll
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Gestion du clavier pour la modal
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!selectedPhoto) return;
      
      if (e.key === "Escape") {
        setSelectedPhoto(null);
      } else if (e.key === "ArrowRight") {
        handleNext();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [selectedPhoto, currentIndex]);

  const handlePhotoClick = (photo: string) => {
    setSelectedPhoto(photo);
    setCurrentIndex(photos.indexOf(photo));
  };

  const handleNext = () => {
    if (currentIndex < photos.length - 1) {
      const newIndex = currentIndex + 1;
      setCurrentIndex(newIndex);
      setSelectedPhoto(photos[newIndex]);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      const newIndex = currentIndex - 1;
      setCurrentIndex(newIndex);
      setSelectedPhoto(photos[newIndex]);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />

      <Head>
        <title>Peugeot - Noah Dekeyzer</title>
        <meta name="description" content="Photos de Peugeot 308" />
      </Head>

      {/* Hero Section */}
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
            Collection Automobile
          </span>
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6">
            <BlurText
              text="PEUGEOT"
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
            L'élégance française incarnée.
            <br className="hidden md:block" />
            Style, confort et performance au quotidien.
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
            <p className="text-3xl md:text-4xl font-bold text-white mb-1">{photos.length}</p>
            <p className="text-sm text-gray-500 uppercase tracking-wider">Photos</p>
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

      {/* Galerie */}
      <main className="px-6 lg:px-12 py-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[250px]">
          {photos.map((photo, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.6, 
                delay: idx * 0.05,
                ease: [0.16, 1, 0.3, 1]
              }}
              className={getGridClass(idx)}
            >
              <motion.div
                className="group relative overflow-hidden rounded-xl bg-gray-900 cursor-pointer h-full"
                onClick={() => handlePhotoClick(photo)}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.4 }}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={photo}
                    alt={`Peugeot 308 ${idx + 1}`}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

                  {/* Numéro */}
                  <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium opacity-0 group-hover:opacity-100 transition-all duration-300">
                    {idx + 1}
                  </div>

                  {/* Icône loupe */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100"
                    initial={{ scale: 0.8 }}
                    whileHover={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/30">
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                      </svg>
                    </div>
                  </motion.div>

                  {/* Bordure */}
                  <div className="absolute inset-0 border-2 border-white/0 group-hover:border-white/40 rounded-xl transition-all duration-500" />
                </div>
              </motion.div>
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

      {/* Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/98 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
          >
            <motion.div
              className="absolute top-8 left-8 text-left z-50"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-gray-400 text-sm mb-1">Peugeot 308</p>
              <p className="text-white text-lg font-medium">{currentIndex + 1} / {photos.length}</p>
            </motion.div>

            <motion.button
              className="absolute top-8 right-8 text-white z-50 w-12 h-12 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all group"
              onClick={() => setSelectedPhoto(null)}
              initial={{ scale: 0, rotate: -90 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 90 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-6 h-6 transition-transform group-hover:rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </motion.button>

            {currentIndex > 0 && (
              <motion.button
                className="absolute left-8 top-1/2 -translate-y-1/2 text-white w-14 h-14 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all z-50"
                onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                initial={{ x: -30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -30, opacity: 0 }}
                whileHover={{ scale: 1.1, x: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </motion.button>
            )}

            {currentIndex < photos.length - 1 && (
              <motion.button
                className="absolute right-8 top-1/2 -translate-y-1/2 text-white w-14 h-14 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all z-50"
                onClick={(e) => { e.stopPropagation(); handleNext(); }}
                initial={{ x: 30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 30, opacity: 0 }}
                whileHover={{ scale: 1.1, x: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.button>
            )}

            <motion.div 
              className="relative max-w-6xl max-h-[85vh] px-4" 
              onClick={e => e.stopPropagation()}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              key={selectedPhoto}
            >
              <div className="relative inline-block">
                <Image
                  src={selectedPhoto}
                  alt="Aperçu"
                  width={1200}
                  height={800}
                  className="max-h-[85vh] w-auto object-contain rounded-lg shadow-2xl"
                  style={{ display: 'block' }}
                />
                
                <motion.div
                  className="absolute inset-0 border-2 border-white/40 rounded-lg pointer-events-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                />
                
                <div className="absolute inset-0 rounded-lg shadow-[0_0_50px_rgba(255,255,255,0.1)] pointer-events-none" />
              </div>
            </motion.div>

            <motion.div
              className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-white/5 backdrop-blur-sm px-6 py-3 rounded-full border border-white/10"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="flex items-center gap-2 text-white/60 text-xs">
                <kbd className="px-2 py-1 bg-white/10 rounded text-[10px] font-mono">←</kbd>
                <span>Préc.</span>
              </div>
              <div className="w-px h-4 bg-white/20" />
              <div className="flex items-center gap-2 text-white/60 text-xs">
                <kbd className="px-2 py-1 bg-white/10 rounded text-[10px] font-mono">→</kbd>
                <span>Suiv.</span>
              </div>
              <div className="w-px h-4 bg-white/20" />
              <div className="flex items-center gap-2 text-white/60 text-xs">
                <kbd className="px-2 py-1 bg-white/10 rounded text-[10px] font-mono">ESC</kbd>
                <span>Fermer</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
