'use client';

import React, { useState } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import BlurText from "../components/BlurText";
import Head from "next/head";
import Image from "next/image";

const Portraits: React.FC = () => {
  const portraits = [
    {
      name: "Daëlle",
      photos: ["/img/Daelle-Fleurs-04.jpg", "/img/Daelle-Fleurs-11.jpg", "/img/DaelleAnge-03.jpg", "/img/DaelleAnge-04.jpg", "/img/DaelleRingl-09.jpg", "/img/DaelleRingl-11.jpg", "/img/DaelleSalon-06.jpg", "/img/DaelleSalon-01.jpg"],
    },
    {
        name: "Elisa",
        photos: ["/img/ElisaAnge-18.jpg", "/img/ElisaAnge-15.jpg", "/img/Elisa-SalonNuit-12.jpg", "/img/Elisa-SalonNuit-29.jpg"],
      },
    {
        name: "Eliott",
        photos: ["/img/Eliott1.jpg", "/img/Eliott6.jpg", "/img/Eliott4.jpg", "/img/Eliott5.jpg"],
    }
  ];

    const formatPortraitText = (name: string) => {
    const firstLetter = name.charAt(0).toLowerCase();

    const vowels = ["a", "e", "i", "o", "u"];

    if (vowels.includes(firstLetter)) {
      return `Portrait d'${name}`;
    } else {
      return `Portrait de ${name}`;
    }
  };

  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Head Section */}
      <Head>
        <title>Galerie Portraits</title>
        <meta name="description" content="Découvrez nos portraits organisés par personne" />
        <link rel="icon" href="/img/favicon.ico" />
      </Head>

      {/* Header Section */}
      <header className="flex items-center justify-center h-[40vh] black-500">
        <h1 className="text-5xl font-bold text-white">
          <BlurText
            text="Galerie Portraits"
            delay={150}
            animateBy="words"
            direction="top"
          />
        </h1>
      </header>

      {/* Main Content */}
      <main className="flex-grow px-6 py-12 bg-gray-100">
        {portraits.map((person, index) => (
          <div key={index} className="mb-16">

            {/* Titre de la section */}
            <h2 className="text-4xl font-semibold text-gray-800 mb-6 text-center">
              {formatPortraitText(person.name)}
            </h2>

            {/* Grille des photos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {person.photos.map((photo, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedPhoto(photo)}
                  className="cursor-pointer relative group overflow-hidden rounded-lg shadow-xl hover:shadow-2xl transform transition-all duration-300"
                >
                  {/* Image */}
                  <Image
                    src={photo}
                    alt={`Portrait de ${person.name} ${idx + 1}`}
                    width={400}
                    height={600}
                    priority={person.name === "Daëlle" && idx === 0}
                    className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-500 flex items-end justify-center p-4">
                    <h3 className="text-lg font-bold text-white text-center">
                      {formatPortraitText(person.name)}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </main>

      {/* Footer */}
      <Footer />
      {/* Modal Overlay for Selected Photo */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm"
          onClick={() => setSelectedPhoto(null)}
        >
          <div className="relative max-w-4xl w-full px-4" onClick={e => e.stopPropagation()}>
            <button
              className="absolute top-4 right-4 text-white text-3xl font-bold"
              onClick={() => setSelectedPhoto(null)}
            >
              &times;
            </button>
            <Image
              src={selectedPhoto}
              alt="Aperçu"
              width={800}
              height={1000}
              className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Portraits;