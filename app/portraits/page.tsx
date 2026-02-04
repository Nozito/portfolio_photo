'use client';

import React, { useState, useEffect } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import BlurText from "../components/BlurText";
import Head from "next/head";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const Portraits: React.FC = () => {
  const portraits = [
    {
      name: "Daëlle",
      description: "Série florale et intimiste",
      photos: ["/img/Daelle-Fleurs-04.jpg", "/img/Daelle-Fleurs-11.jpg", "/img/DaelleAnge-03.jpg", "/img/DaelleAnge-04.jpg", "/img/DaelleRingl-09.jpg", "/img/DaelleRingl-11.jpg", "/img/DaelleSalon-06.jpg", "/img/DaelleSalon-01.jpg"],
    },
    {
      name: "Elisa",
      description: "Ambiances nocturnes et poétiques",
      photos: ["/img/ElisaAnge-18.jpg", "/img/ElisaAnge-15.jpg", "/img/Elisa-SalonNuit-12.jpg", "/img/Elisa-SalonNuit-29.jpg"],
    },
    {
      name: "Eliott",
      description: "Portraits contemporains",
      photos: ["/img/Eliott1.jpg", "/img/Eliott6.jpg", "/img/Eliott4.jpg", "/img/Eliott5.jpg"],
    }
  ];

  const formatPortraitText = (name: string) => {
    const firstLetter = name.charAt(0).toLowerCase();
    const vowels = ["a", "e", "i", "o", "u"];
    return vowels.includes(firstLetter) ? `d'${name}` : `de ${name}`;
  };

  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [currentPersonPhotos, setCurrentPersonPhotos] = useState<string[]>([]);
  const [currentPersonName, setCurrentPersonName] = useState<string>("");

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

  const handlePhotoClick = (photo: string, photos: string[], personName: string) => {
    setSelectedPhoto(photo);
    setCurrentPersonPhotos(photos);
    setCurrentPersonName(personName);
    setCurrentIndex(photos.indexOf(photo));
  };

  const handleNext = () => {
    if (currentIndex < currentPersonPhotos.length - 1) {
      const newIndex = currentIndex + 1;
      setCurrentIndex(newIndex);
      setSelectedPhoto(currentPersonPhotos[newIndex]);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      const newIndex = currentIndex - 1;
      setCurrentIndex(newIndex);
      setSelectedPhoto(currentPersonPhotos[newIndex]);
    }
  };

  // Fonction pour déterminer quelles photos doivent être étirées
  const shouldStretch = (index: number, totalPhotos: number) => {
    const cols = 3; // Nombre de colonnes
    const remainder = totalPhotos % cols; // Nombre de photos dans la dernière rangée incomplète
    
    if (remainder === 0) return false; // Pas de trou, pas d'étirement
    
    // Nombre de photos à étirer = nombre de places vides
    const photosToStretch = cols - remainder;
    
    // On étire les dernières photos de l'avant-dernière rangée
    const lastCompleteRowEnd = totalPhotos - remainder;
    const stretchStartIndex = lastCompleteRowEnd - photosToStretch;
    
    return index >= stretchStartIndex && index < lastCompleteRowEnd;
  };

  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Navbar />

      <Head>
        <title>Galerie Portraits - Noah Dekeyzer</title>
        <meta name="description" content="Découvrez mes portraits photographiques" />
      </Head>

      {/* Header épuré */}
      <motion.header 
        className="relative flex flex-col items-center justify-center min-h-[50vh] px-6"
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
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            <BlurText
              text="Portraits"
              delay={150}
              animateBy="words"
              direction="top"
            />
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            Des moments capturés, des émotions révélées
          </p>
        </motion.div>
      </motion.header>

      {/* Main Content */}
      <main className="flex-grow px-6 lg:px-12 py-16 max-w-7xl mx-auto w-full">
        <div className="space-y-32">
          {portraits.map((person, personIndex) => (
            <motion.section
              key={personIndex}
              className="relative"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: personIndex * 0.1 }}
            >
              {/* En-tête de section */}
              <div className="mb-12">
                <div className="flex items-center gap-6 mb-4">
                  <motion.div 
                    className="h-px bg-gradient-to-r from-transparent via-white to-transparent flex-1"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 }}
                  />
                  <motion.span
                    className="text-gray-500 text-sm tracking-[0.3em] uppercase"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                  >
                    {String(personIndex + 1).padStart(2, '0')}
                  </motion.span>
                </div>

                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                  <div>
                    <motion.h2 
                      className="text-4xl md:text-6xl font-bold text-white mb-2"
                      whileHover={{ x: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      {person.name}
                    </motion.h2>
                    <p className="text-gray-400 text-lg">{person.description}</p>
                  </div>

                  <motion.div
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                  >
                    <div className="h-px w-12 bg-gray-700" />
                    <span className="text-gray-500 text-sm font-medium">
                      {person.photos.length} photos
                    </span>
                  </motion.div>
                </div>
              </div>

              {/* Grille 3 colonnes avec étirement intelligent */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {person.photos.map((photo, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ 
                      duration: 0.6, 
                      delay: idx * 0.08,
                      ease: [0.16, 1, 0.3, 1]
                    }}
                    className={`${shouldStretch(idx, person.photos.length) ? 'md:row-span-2' : ''}`}
                  >
                    <motion.div
                      className="group relative overflow-hidden rounded-xl bg-gray-900 cursor-pointer h-full"
                      onClick={() => handlePhotoClick(photo, person.photos, person.name)}
                      whileHover={{ scale: 1.02, y: -5 }}
                      transition={{ duration: 0.4 }}
                    >
                      <div className="relative w-full h-full min-h-[400px]">
                        <Image
                          src={photo}
                          alt={`Portrait ${formatPortraitText(person.name)} ${idx + 1}`}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                        />
                        
                        {/* Overlay dégradé */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                        
                        {/* Numéro de la photo en haut à droite */}
                        <motion.div
                          className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium opacity-0 group-hover:opacity-100"
                          initial={{ y: -10 }}
                          whileHover={{ y: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          {idx + 1}
                        </motion.div>

                        {/* Icône loupe au centre */}
                        <motion.div
                          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100"
                          initial={{ scale: 0.8 }}
                          whileHover={{ scale: 1 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/30 shadow-xl">
                            <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                            </svg>
                          </div>
                        </motion.div>

                        {/* Nom en bas au hover */}
                        <motion.div
                          className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500"
                        >
                          <p className="text-white text-lg font-medium">
                            {person.name}
                          </p>
                        </motion.div>

                        {/* Bordure au hover */}
                        <div className="absolute inset-0 border-2 border-white/0 group-hover:border-white/40 rounded-xl transition-all duration-500" />
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          ))}
        </div>
      </main>

      <Footer />

      {/* Modal (identique à avant) */}
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
              <p className="text-gray-400 text-sm mb-1">Portrait {formatPortraitText(currentPersonName)}</p>
              <p className="text-white text-lg font-medium">{currentIndex + 1} / {currentPersonPhotos.length}</p>
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

            {currentIndex < currentPersonPhotos.length - 1 && (
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
                  height={1600}
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
};

export default Portraits;
