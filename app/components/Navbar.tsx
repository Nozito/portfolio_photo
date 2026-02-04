"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/portfolio", label: "Projets" },
  { href: "/about", label: "À propos" },
  { href: "/contact", label: "Contact" },
];

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
    href: "https://www.linkedin.com/in/noah-dkr/",
    icon: "/img/linkedin.png",
    label: "LinkedIn",
  },
];

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll for background opacity
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on escape key
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape" && isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  }, [isMobileMenuOpen]);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  // Close mobile menu on route change
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      role="navigation"
      aria-label="Navigation principale"
      className={`
        fixed top-4 left-1/2 -translate-x-1/2 z-50
        max-w-4xl w-[92%] rounded-xl
        transition-all duration-500 ease-out
        ${isScrolled
          ? "backdrop-blur-2xl bg-black/60 border-white/20 shadow-2xl"
          : "backdrop-blur-xl bg-white/5 border-white/10"
        }
        border
      `}
    >
      {/* Desktop Navigation */}
      <div className="hidden md:flex justify-between items-center px-6 py-3 text-white">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 transition-transform duration-300 hover:scale-105"
          aria-label="Noah Dekeyzer - Accueil"
        >
          <Image
            src="/img/Nb.png"
            alt=""
            width={44}
            height={44}
            className="rounded-full shadow-lg"
            priority
          />
        </Link>

        {/* Nav links */}
        <div className="flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative group py-1"
            >
              {link.label}
              <span
                className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 ease-out group-hover:w-full"
                aria-hidden="true"
              />
            </Link>
          ))}
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-3">
          {socialLinks.map((social) => (
            <a
              key={social.href}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-300 hover:scale-110 focus-visible:scale-110"
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
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden flex justify-between items-center px-4 py-3 text-white">
        <Link
          href="/"
          className="flex items-center gap-3"
          aria-label="Noah Dekeyzer - Accueil"
          onClick={handleLinkClick}
        >
          <Image
            src="/img/Nb.png"
            alt=""
            width={40}
            height={40}
            className="rounded-full shadow-lg"
            priority
          />
        </Link>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          className="relative w-8 h-8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded"
        >
          <span
            className={`
              absolute top-1/2 left-0 w-full h-[2px] bg-white
              transition-all duration-300 origin-center
              ${isMobileMenuOpen ? "rotate-45 translate-y-0" : "-translate-y-2"}
            `}
            aria-hidden="true"
          />
          <span
            className={`
              absolute top-1/2 left-0 w-full h-[2px] bg-white
              transition-all duration-300
              ${isMobileMenuOpen ? "opacity-0 scale-0" : "opacity-100 scale-100"}
            `}
            aria-hidden="true"
          />
          <span
            className={`
              absolute top-1/2 left-0 w-full h-[2px] bg-white
              transition-all duration-300 origin-center
              ${isMobileMenuOpen ? "-rotate-45 translate-y-0" : "translate-y-2"}
            `}
            aria-hidden="true"
          />
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden overflow-hidden"
          >
            <div className="bg-black/80 backdrop-blur-2xl text-white px-6 py-6 space-y-4 border-t border-white/10">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={handleLinkClick}
                    className="block py-2 text-lg font-medium transition-colors hover:text-gray-300 focus-visible:text-gray-300"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <hr className="border-white/20 my-4" />

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex justify-center gap-6 pt-2"
              >
                {socialLinks.map((social) => (
                  <a
                    key={social.href}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-transform duration-300 hover:scale-110"
                    aria-label={`Suivez-moi sur ${social.label}`}
                    onClick={handleLinkClick}
                  >
                    <Image
                      src={social.icon}
                      alt=""
                      width={28}
                      height={28}
                      aria-hidden="true"
                    />
                  </a>
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
