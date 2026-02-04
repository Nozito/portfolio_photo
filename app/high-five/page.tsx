'use client';

import '../globals.css';
import './style.css';
import Head from 'next/head';
import React from 'react';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';
import Image from 'next/image';

export default function HighFive() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Head */}
      <Head>
        <title>High Five</title>
        <meta name="description" content="High Five gallery showcasing various artists." />
      </Head>

      <div className="bg-black text-white">
        {/* Hero Section */}
        <div className="flex justify-center items-center flex-col bg-black h-screen">
          <h1 className="mb-4 text-4xl font-bold">HIGH FIVE</h1>
        </div>

        {/* Gallery Section 1: Josman */}
        <div className="relative mx-auto">
          <h2 className="text-6xl font-bold mb-2 justify-start ml-24">Josman</h2>
          <div className="cssportal-grid">
            <div id="div1">
              <Image
                src="/img/jos2.JPG"
                alt="Josman"
                width={1000}
                height={1000}
              />
            </div>
            <div id="div2">
              <Image
                src="/img/jos1.JPG"
                alt="Josman"
                width={1000}
                height={1000}
              />
            </div>
            <div id="div3">
              <Image
                src="/img/jos5.JPG"
                alt="Josman"
                width={1000}
                height={1000}
              />
            </div>
            <div id="div4">
              <Image
                src="/img/jos4.JPG"
                alt="Josman"
                width={1000}
                height={1000}
              />
            </div>
            <div id="div5">
              <Image
                src="/img/jos3.JPG"
                alt="Josman"
                width={1000}
                height={1000}
              />
            </div>
          </div>
        </div>

        {/* Gallery Section 2: 99 Rocky */}
        <div className="flex justify-center items-center min-h-screen mt-60">
          <div className="flex flex-col items-end">
            <h2 className="text-6xl font-bold mb-4 mr-24">99 Rocky</h2>
            <div className="cssportal-grid flex justify-center">
              <div id="div6" className="flex-shrink-0">
                <Image
                  src="/img/993.JPG"
                  alt="99 Rocky"
                  width={1000}
                  height={1000}
                />
              </div>
              <div id="div7" className="flex-shrink-0">
                <Image
                  src="/img/991.JPG"
                  alt="99 Rocky"
                  width={1000}
                  height={1000}
                />
              </div>
              <div id="div8" className="flex-shrink-0">
                <Image
                  src="/img/994.JPG"
                  alt="99 Rocky"
                  width={1000}
                  height={1000}
                />
              </div>
              <div id="div9" className="flex-shrink-0">
                <Image
                  src="/img/992.JPG"
                  alt="99 Rocky"
                  width={1000}
                  height={1000}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Gallery Section 3: Karmen */}
        <div className="flex justify-center items-center min-h-screen mt-60">
          <div className="flex flex-col items-end">
          <h2 className="text-6xl font-bold mb-2 justify-start ml-24">Karmen</h2>
            <div className="cssportal-grid flex justify-center">
              <div id="div10" className="flex-shrink-0">
                <Image
                  src="/img/Karmen3.JPG"
                  alt="Karmen"
                  width={1000}
                  height={1000}
                />
              </div>
              <div id="div11" className="flex-shrink-0">
                <Image
                  src="/img/Karmen2.JPG"
                  alt="Karmen"
                  width={1000}
                  height={1000}
                />
              </div>
              <div id="div12" className="flex-shrink-0">
                <Image
                  src="/img/Karmen1.JPG"
                  alt="Karmen"
                  width={1000}
                  height={1000}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Gallery Section 4: Le Juiice */}
        {/* Gallery Section 3: Karmen */}
        <div className="flex justify-center items-center min-h-screen mt-60">
          <div className="flex flex-col items-end">
            <h2 className="text-6xl font-bold mb-4 mr-24">Le JUIICE</h2>
            <div className="cssportal-grid flex justify-center">
              <div id="div13" className="flex-shrink-0">
                <Image
                  src="/img/Juiice1.JPG"
                  alt="Le Juiice"
                  width={1000}
                  height={1000}
                />
              </div>
              <div id="div14" className="flex-shrink-0">
                <Image
                  src="/img/Juiice2.JPG"
                  alt="Le Juiice"
                  width={1000}
                  height={1000}
                />
              </div>
              <div id="div15" className="flex-shrink-0">
                <Image
                  src="/img/Juiice3.JPG"
                  alt="Le Juiice"
                  width={1000}
                  height={1000}
                />
              </div>
            </div>
          </div>
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
    </div>
  );
}
