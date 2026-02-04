'use client';

import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Voitures() {
  const voitures = [
    { title: "Porsche", description: "Découvrez les modèles Porsche", image: "/img/bannerp.JPG", link: "/porsche" },
    { title: "Peugeot", description: "Découvrez les modèles Peugeot", image: "/img/308JL-48.jpg", link: "/peugeot" },
  ];

  return (

    <div className="bg-black text-white">
      <Head>
        <title>Gallerie Voitures</title>
        <meta name="description" content="Collection de voitures" />
        <link rel="icon" href="/img/favicon.ico" />
      </Head>

      <Navbar />

      {/* Hero Section */}
      <section className="relative flex flex-col justify-center items-center h-screen overflow-hidden bg-gradient-to-tr from-gray-900 via-gray-700 to-gray-900">
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
        <div className="relative z-10 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-5xl sm:text-6xl font-extrabold mb-4 drop-shadow-lg">VOITURES</h1>
          <p className="text-lg sm:text-xl text-gray-200 mb-6 max-w-xl">
            Découvrez ma collection de voitures et plongez dans l’univers automobile.
          </p>
          {/* Scroll indicator */}
          <div className="animate-bounce mt-4">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </section>

      {/* Decorative underline */}
      <div className="max-w-6xl mx-auto px-6 mt-6">
        <div className="h-1 w-24 bg-white rounded-full mx-auto opacity-80 animate-pulse"></div>
      </div>

      {/* Voitures Grid */}
      <section className="max-w-6xl mx-auto px-6 py-20 ">
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 ${voitures.length === 2 ? 'justify-items-center' : ''}`}>
          {voitures.map((voiture, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative group rounded-2xl overflow-hidden shadow-lg cursor-pointer hover:scale-105 hover:shadow-2xl transition-transform duration-300"
            >
              <div className="relative h-64 w-full rounded-2xl overflow-hidden">
                <Image
                  src={voiture.image}
                  alt={voiture.title}
                  width={500}
                  height={400}
                  className="h-full w-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-90 group-hover:opacity-100 transition-opacity rounded-2xl flex flex-col justify-end p-6">
                  <h3 className="text-white text-2xl font-bold drop-shadow-lg">{voiture.title}</h3>
                  <p className="text-gray-300 mb-3 drop-shadow-md">{voiture.description}</p>
                  <Link
                    href={voiture.link}
                    className="inline-block text-sm font-semibold text-white border border-white px-4 py-2 rounded-md hover:bg-white hover:text-black transition"
                  >
                    Voir plus
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}