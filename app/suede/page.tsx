"use client";

import Head from "next/head";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import Image from "next/image";

export default function Suede() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const data = [
    { id: 1, image: "/img/Stockholm-04.jpg", height: 800 },
    { id: 2, image: "/img/Stockholm-84.jpg", height: 800 },
    { id: 3, image: "/img/Stockholm-53.jpg", height: 800 },
    { id: 4, image: "/img/Stockholm-28.jpg", height: 300 },
    { id: 5, image: "/img/Stockholm-82.jpg", height: 300 },
    { id: 6, image: "/img/Malmo-2.jpg", height: 300 },
    { id: 7, image: "/img/Malmo-1.jpg", height: 700 },
    { id: 8, image: "/img/Malmo-3.jpg", height: 700 },
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />

      <Head>
        <title>Suède</title>
        <meta name="description" content="Suede Trip" />
        <link rel="icon" href="/img/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <div className="flex justify-center items-center flex-col bg-black h-screen">
        <h1 className="mb-4 text-4xl font-bold">SUEDE</h1>
      </div>

      {/* Image Gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-6">
        {data.map((item) => (
          <div key={item.id} className="overflow-hidden rounded-lg">
            <Image
              src={item.image}
              alt={`Suede ${item.id}`}
              width={500}
              height={item.height}
              className="transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-4 right-4 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-600 transition"
        title="Retour en haut"
      >
        ↑
      </button>

      <Footer />
    </div>
  );
}