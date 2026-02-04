"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "./ui/Container";

const socialLinks = [
  {
    href: "https://www.instagram.com/noahdkr_",
    icon: "/img/instagram.png",
    label: "Instagram",
  },
  {
    href: "https://www.tiktok.com/@noahdkr_",
    icon: "/img/tiktok.png",
    label: "TikTok",
  },
  {
    href: "https://www.linkedin.com/in/noah-dekeyzer/",
    icon: "/img/linkedin.png",
    label: "LinkedIn",
  },
];

const footerLinks = [
  { href: "/portfolio", label: "Projets" },
  { href: "/about", label: "À propos" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      role="contentinfo"
      className="bg-black border-t border-white/10"
    >
      <Container className="py-12 md:py-16">
        <div className="flex flex-col items-center gap-8">
          {/* Logo */}
          <Link
            href="/"
            className="transition-transform duration-300 hover:scale-105"
            aria-label="Noah Dekeyzer - Accueil"
          >
            <Image
              src="/img/Nb.png"
              alt=""
              width={80}
              height={80}
              className="rounded-full"
            />
          </Link>

          {/* Navigation Links */}
          <nav aria-label="Navigation secondaire">
            <ul className="flex flex-wrap justify-center gap-6 md:gap-8">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social Media Links */}
          <div className="flex items-center gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all duration-300 hover:scale-110 opacity-70 hover:opacity-100"
                aria-label={`Suivez-moi sur ${social.label}`}
              >
                <Image
                  src={social.icon}
                  alt=""
                  width={24}
                  height={24}
                  aria-hidden="true"
                />
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="w-24 h-px bg-white/20" aria-hidden="true" />

          {/* Copyright */}
          <div className="text-center text-sm text-gray-500">
            <p>
              &copy; {currentYear} Noah Dekeyzer. Tous droits réservés.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
