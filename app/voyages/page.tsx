"use client";

import "../globals.css";
import React from "react";
import Head from "next/head";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { Carousel } from "../components/Carousel";

export default function Voyages() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const slides = [
    {
      title: "Suède",
      button: "Explore",
      src: "/img/Stockholm-84.jpg",
      href: "/suede",
    },
    {
      title: "Danemark",
      button: "Bientôt..",
      src: "/img/Copenhague-1.jpg",
    },
    {
      title: "Paris",
      button: "Bientôt..",
      src: "/img/Paris-1.jpg",
    }
  ];

  return (
    <div className="bg-black text-white">
      <Navbar />

      {/* Head */}
      <Head>
        <title>Voyages</title>
        <meta name="description" content="Voyage" />
        <link rel="icon" href="/img/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <div className="flex justify-center items-center flex-col bg-black pt-20 pb-8 md:pt-32 md:pb-12">
      </div>

      {/* Carousel Section */}
      <div className="flex justify-center items-center py-10">
        <Carousel slides={slides} />
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-4 right-4 bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-600 transition"
        title="Retour en haut"
      >
        ↑
      </button>

      {/* Footer */}
      <Footer />
    </div>
  );
}
