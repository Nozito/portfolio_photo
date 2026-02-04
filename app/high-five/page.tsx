'use client';

import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import BlurText from '../components/BlurText';

export default function HighFive() {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [currentArtistPhotos, setCurrentArtistPhotos] = useState<string[]>([]);
  const [currentArtistName, setCurrentArtistName] = useState<string>("");
  const [showScrollTop, setShowScrollTop] = useState(false);

  const artists = [
    {
      name: "Josman",
      photos: ["/img/jos2.JPG", "/img/jos1.JPG", "/img/jos5.JPG", "/img/jos4.JPG", "/img/jos3.JPG"],
      layout: "default"
    },
    {
      name: "99 Rocky",
      photos: ["/img/993.JPG", "/img/991.JPG", "/img/994.JPG", "/img/992.JPG"],
      layout: "custom-rocky"
    },
    {
      name: "Karmen",
      photos: ["/img/Karmen3.JPG", "/img/Karmen2.JPG", "/img/Karmen1.JPG"],
      layout: "custom-karmen"
    },
    {
      name: "Le JUIICE",
      photos: ["/img/Juiice2.JPG", "/img/Juiice1.JPG", "/img/Juiice3.JPG"],
      layout: "custom-juiice"
    },
  ];

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

  const handlePhotoClick = (photo: string, photos: string[], artistName: string) => {
    setSelectedPhoto(photo);
    setCurrentArtistPhotos(photos);
    setCurrentArtistName(artistName);
    setCurrentIndex(photos.indexOf(photo));
  };

  const handleNext = () => {
    if (currentIndex < currentArtistPhotos.length - 1) {
      const newIndex = currentIndex + 1;
      setCurrentIndex(newIndex);
      setSelectedPhoto(currentArtistPhotos[newIndex]);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      const newIndex = currentIndex - 1;
      setCurrentIndex(newIndex);
      setSelectedPhoto(currentArtistPhotos[newIndex]);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Composant pour rendre la grille selon le layout
  const renderGallery = (artist: typeof artists[0], artistIndex: number) => {
    const PhotoCard = ({ photo, idx }: { photo: string; idx: number }) => (
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ 
          duration: 0.6, 
          delay: idx * 0.08,
          ease: [0.16, 1, 0.3, 1]
        }}
        className="h-full w-full"
      >
        <motion.div
          className="group relative overflow-hidden rounded-xl bg-gray-900 cursor-pointer h-full w-full"
          onClick={() => handlePhotoClick(photo, artist.photos, artist.name)}
          whileHover={{ scale: 1.02, y: -5 }}
          transition={{ duration: 0.4 }}
        >
          <div className="relative w-full h-full min-h-[200px] sm:min-h-[250px]">
            <Image
              src={photo}
              alt={`${artist.name} ${idx + 1}`}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
            
            <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-black/50 backdrop-blur-sm text-white px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs font-medium opacity-0 group-hover:opacity-100 transition-all duration-300">
              {idx + 1}
            </div>

            <motion.div
              className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100"
              initial={{ scale: 0.8 }}
              whileHover={{ scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/30">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                </svg>
              </div>
            </motion.div>

            <div className="absolute inset-0 border-2 border-white/0 group-hover:border-white/40 rounded-xl transition-all duration-500" />
          </div>
        </motion.div>
      </motion.div>
    );

    // Layout par défaut (Josman)
    if (artist.layout === "default") {
      return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 auto-rows-[200px] sm:auto-rows-[250px]">
          {/* Photo 1 : grande (2x2) */}
          <div className="md:col-span-2 md:row-span-2">
            <PhotoCard photo={artist.photos[0]} idx={0} />
          </div>
          {/* Photos 2-5 : normales */}
          {artist.photos.slice(1).map((photo, idx) => (
            <div key={idx + 1} className="col-span-1 row-span-1">
              <PhotoCard photo={photo} idx={idx + 1} />
            </div>
          ))}
        </div>
      );
    }

    // Layout 99 Rocky : Photo 3 en large, 1-2-4 en dessous
    if (artist.layout === "custom-rocky") {
      return (
        <div className="grid grid-cols-1 gap-3 sm:gap-4 md:gap-6">
          {/* Photo 3 en large */}
          <div className="w-full h-[300px] sm:h-[400px] md:h-[500px]">
            <PhotoCard photo={artist.photos[2]} idx={2} />
          </div>
          {/* Photos 1-2-4 en dessous */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
            <div className="h-[250px] sm:h-[300px] md:h-[350px]">
              <PhotoCard photo={artist.photos[0]} idx={0} />
            </div>
            <div className="h-[250px] sm:h-[300px] md:h-[350px]">
              <PhotoCard photo={artist.photos[1]} idx={1} />
            </div>
            <div className="h-[250px] sm:h-[300px] md:h-[350px]">
              <PhotoCard photo={artist.photos[3]} idx={3} />
            </div>
          </div>
        </div>
      );
    }

    // Layout Karmen : Photo 1 en large, 2-3 en dessous
    if (artist.layout === "custom-karmen") {
      return (
        <div className="grid grid-cols-1 gap-3 sm:gap-4 md:gap-6">
          {/* Photo 1 en large */}
          <div className="w-full h-[300px] sm:h-[400px] md:h-[500px]">
            <PhotoCard photo={artist.photos[0]} idx={0} />
          </div>
          {/* Photos 2-3 en dessous */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
            <div className="h-[250px] sm:h-[300px] md:h-[400px]">
              <PhotoCard photo={artist.photos[1]} idx={1} />
            </div>
            <div className="h-[250px] sm:h-[300px] md:h-[400px]">
              <PhotoCard photo={artist.photos[2]} idx={2} />
            </div>
          </div>
        </div>
      );
    }

    // Layout Le JUIICE : Photo 1 horizontale en haut, Photo 2 large à gauche, Photo 3 verticale à droite
    if (artist.layout === "custom-juiice") {
      return (
        <div className="grid grid-cols-1 gap-3 sm:gap-4 md:gap-6">
          {/* Photo 1 horizontale en haut */}
          <div className="w-full h-[250px] sm:h-[300px] md:h-[350px]">
            <PhotoCard photo={artist.photos[0]} idx={0} />
          </div>
          {/* Photo 2 large + Photo 3 verticale */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
            {/* Photo 2 en large (2 colonnes) */}
            <div className="md:col-span-2 h-[350px] sm:h-[400px] md:h-[500px]">
              <PhotoCard photo={artist.photos[1]} idx={1} />
            </div>
            {/* Photo 3 verticale */}
            <div className="h-[350px] sm:h-[400px] md:h-[500px]">
              <PhotoCard photo={artist.photos[2]} idx={2} />
            </div>
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />

      <Head>
        <title>High Five Festival - Noah Dekeyzer</title>
        <meta name="description" content="Photos du High Five Festival 2023 à Annecy" />
      </Head>

      {/* Hero Section - Responsive */}
      <motion.header 
        className="relative flex flex-col items-center justify-center min-h-[50vh] sm:min-h-[60vh] md:min-h-[70vh] px-4 sm:px-6"
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
            Festival 2023
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 sm:mb-6 px-4">
            <BlurText
              text="HIGH FIVE"
              delay={150}
              animateBy="words"
              direction="top"
            />
          </h1>
          <motion.p 
            className="text-gray-400 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-3 sm:mb-4 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            29 septembre - 1er octobre 2023 • Annecy, France
          </motion.p>
          <motion.div
            className="flex items-center justify-center gap-2 text-gray-500 text-xs sm:text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Annecy
          </motion.div>
        </motion.div>

        {/* Stats - Responsive */}
        <motion.div
          className="mt-12 sm:mt-16 flex items-center gap-4 sm:gap-6 md:gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <div className="text-center">
            <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1">{artists.length}</p>
            <p className="text-xs sm:text-sm text-gray-500 uppercase tracking-wider">Artistes</p>
          </div>
          <div className="h-8 sm:h-12 w-px bg-gray-800" />
          <div className="text-center">
            <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1">
              {artists.reduce((acc, artist) => acc + artist.photos.length, 0)}
            </p>
            <p className="text-xs sm:text-sm text-gray-500 uppercase tracking-wider">Photos</p>
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

      {/* Artists Galleries - Responsive */}
      <main className="px-4 sm:px-6 lg:px-12 py-12 sm:py-16 max-w-7xl mx-auto">
        <div className="space-y-20 sm:space-y-24 md:space-y-32">
          {artists.map((artist, artistIndex) => (
            <motion.section
              key={artistIndex}
              className="relative"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: artistIndex * 0.1 }}
            >
              {/* En-tête artiste - Responsive */}
              <div className={`mb-8 sm:mb-12 ${artistIndex % 2 === 0 ? 'text-left' : 'text-right'}`}>
                <div className="flex items-center gap-3 sm:gap-4 md:gap-6 mb-3 sm:mb-4">
                  {artistIndex % 2 === 0 ? (
                    <>
                      <motion.span
                        className="text-gray-500 text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] uppercase"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                      >
                        {String(artistIndex + 1).padStart(2, '0')}
                      </motion.span>
                      <motion.div 
                        className="h-px bg-gradient-to-r from-white via-white/50 to-transparent flex-1"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 }}
                      />
                    </>
                  ) : (
                    <>
                      <motion.div 
                        className="h-px bg-gradient-to-l from-white via-white/50 to-transparent flex-1"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 }}
                      />
                      <motion.span
                        className="text-gray-500 text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] uppercase"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                      >
                        {String(artistIndex + 1).padStart(2, '0')}
                      </motion.span>
                    </>
                  )}
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-3 sm:gap-0">
                  <motion.h2 
                    className={`text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white ${artistIndex % 2 === 0 ? '' : 'sm:ml-auto'}`}
                    whileHover={{ x: artistIndex % 2 === 0 ? 10 : -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    {artist.name}
                  </motion.h2>

                  <motion.div
                    className={`flex items-center gap-2 sm:gap-3 ${artistIndex % 2 === 0 ? 'sm:ml-auto' : 'sm:mr-auto sm:order-first'}`}
                    initial={{ opacity: 0, x: artistIndex % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                  >
                    <div className="h-px w-8 sm:w-12 bg-gray-700" />
                    <span className="text-gray-500 text-xs sm:text-sm font-medium whitespace-nowrap">
                      {artist.photos.length} photos
                    </span>
                  </motion.div>
                </div>
              </div>

              {/* Grille photos avec layout personnalisé */}
              {renderGallery(artist, artistIndex)}
            </motion.section>
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
            className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 w-12 h-12 sm:w-14 sm:h-14 bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 hover:border-white/30 text-white rounded-full flex items-center justify-center transition-all z-40 group"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg 
              className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:-translate-y-1" 
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

      {/* Modal - Responsive */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/98 backdrop-blur-xl p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
          >
            <motion.div
              className="absolute top-4 left-4 sm:top-8 sm:left-8 text-left z-50"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-gray-400 text-xs sm:text-sm mb-1">{currentArtistName}</p>
              <p className="text-white text-base sm:text-lg font-medium">{currentIndex + 1} / {currentArtistPhotos.length}</p>
            </motion.div>

            <motion.button
              className="absolute top-4 right-4 sm:top-8 sm:right-8 text-white z-50 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all group"
              onClick={() => setSelectedPhoto(null)}
              initial={{ scale: 0, rotate: -90 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 90 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </motion.button>

            {currentIndex > 0 && (
              <motion.button
                className="absolute left-2 sm:left-8 top-1/2 -translate-y-1/2 text-white w-10 h-10 sm:w-14 sm:h-14 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all z-50"
                onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                initial={{ x: -30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -30, opacity: 0 }}
                whileHover={{ scale: 1.1, x: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </motion.button>
            )}

            {currentIndex < currentArtistPhotos.length - 1 && (
              <motion.button
                className="absolute right-2 sm:right-8 top-1/2 -translate-y-1/2 text-white w-10 h-10 sm:w-14 sm:h-14 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all z-50"
                onClick={(e) => { e.stopPropagation(); handleNext(); }}
                initial={{ x: 30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 30, opacity: 0 }}
                whileHover={{ scale: 1.1, x: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.button>
            )}

            <motion.div 
              className="relative max-w-6xl max-h-[85vh] w-full" 
              onClick={e => e.stopPropagation()}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              key={selectedPhoto}
            >
              <div className="relative inline-block w-full">
                <Image
                  src={selectedPhoto}
                  alt="Aperçu"
                  width={1200}
                  height={1600}
                  className="max-h-[85vh] w-full sm:w-auto object-contain rounded-lg shadow-2xl mx-auto"
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
              className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 sm:gap-4 bg-white/5 backdrop-blur-sm px-4 py-2 sm:px-6 sm:py-3 rounded-full border border-white/10"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="flex items-center gap-1 sm:gap-2 text-white/60 text-[10px] sm:text-xs">
                <kbd className="px-1.5 py-0.5 sm:px-2 sm:py-1 bg-white/10 rounded text-[8px] sm:text-[10px] font-mono">←</kbd>
                <span className="hidden sm:inline">Préc.</span>
              </div>
              <div className="w-px h-3 sm:h-4 bg-white/20" />
              <div className="flex items-center gap-1 sm:gap-2 text-white/60 text-[10px] sm:text-xs">
                <kbd className="px-1.5 py-0.5 sm:px-2 sm:py-1 bg-white/10 rounded text-[8px] sm:text-[10px] font-mono">→</kbd>
                <span className="hidden sm:inline">Suiv.</span>
              </div>
              <div className="w-px h-3 sm:h-4 bg-white/20" />
              <div className="flex items-center gap-1 sm:gap-2 text-white/60 text-[10px] sm:text-xs">
                <kbd className="px-1.5 py-0.5 sm:px-2 sm:py-1 bg-white/10 rounded text-[8px] sm:text-[10px] font-mono">ESC</kbd>
                <span className="hidden sm:inline">Fermer</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
