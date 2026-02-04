'use client';

import React from 'react';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';
import '../globals.css';
import Image from 'next/image';
import Head from 'next/head';
import BlurText from '../components/BlurText';

export default function About() {
  return (
    <div className="relative pb-16 bg-black text-white min-h-screen">
      <Navbar />
      <main className="px-8 pt-20 mx-auto max-w-5xl space-y-12 lg:px-12 md:pt-24 lg:pt-32">
        {/* Hero Section */}
        <Head>
          <title>À PROPOS</title>
        </Head>
        <div className="flex justify-center items-center flex-col h-[50vh] bg-black">
          <h1 className="text-5xl font-bold mb-4 text-zinc-100">
            <BlurText
            text="À PROPOS"
            delay={150}
            animateBy="words"
            direction="top"
          />
          </h1>
        </div>

        {/* Profile Section */}
        <section className="pt-8 border-t border-zinc-800">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            {/* Profile Photo */}
            <div className="w-full md:w-auto md:h-full">
              <Image
                src="/img/Noah.jpeg"
                alt="Photo de profil"
                className="rounded-lg shadow-lg mt-4 object-cover"
                width={450}
                height={650}
              />
            </div>
            {/* Profile Text */}
            <div className="flex-1 text-lg leading-relaxed">
              <h2 className="text-4xl font-semibold mb-4 text-zinc-100">Bonjour,</h2>
              <p className="mb-4 text-zinc-300">
                Je suis <strong>Noah</strong>, photographe et vidéaste amateur, j&apos;étudie en parallèle en BUT GEA
              </p>
              <p className="mb-4 text-zinc-300">
                Avant de prendre mon indépendance en photos et en vidéos, j&apos;ai suivi pendant 3 ans, en parallèle de mes
                cours, une option cinéma-audiovisuel. J&apos;ai pu réaliser, avec des collègues, 3 courts métrages, ainsi que
                d&apos;autres projets que vous retrouverez dans mon portfolio.
              </p>
              <p className="mb-4 text-zinc-300">
                À travers ce portfolio, vous pourrez suivre mon évolution depuis mes débuts, que ce soit en photo ou en
                cinématographie.
              </p>
              <p className="mb-4 text-zinc-300">
                Je n&apos;ai pas de spécialisation particulière en matière de photographie. Je préfère explorer divers sujets
                pour rester polyvalent. Ainsi, vous découvrirez une variété de photos, toutes animées par ma passion. Ces
                images reflètent mon intérêt pour la photographie, et vous invitent à plonger dans leur univers comme si
                vous en faisiez partie !
              </p>
              <p className="mb-4 text-zinc-300">
                Merci de prendre le temps de découvrir mon travail. J&apos;espère que ces images vous transporteront et vous
                inspireront autant qu&apos;elles m&apos;inspirent.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}