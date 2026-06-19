"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { whatsappLink } from '../../data/constants';

export default function Navegacion() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (                  // sticky
    <header className="w-full fixed top-0 z-50 backdrop-blur-md bg-yaku-white/90 border-b border-yaku-beige/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <motion.a
          href="#"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 cursor-pointer group"
        >
          {/* Leaf icon as logo */}
          <div className="w-11 h-11 bg-gradient-to-br from-yaku-green to-yaku-green-leaf rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:scale-105 transition-all duration-300">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="font-serif font-extrabold text-2xl text-yaku-chocolate-dark tracking-tight leading-none">YAKU</span>
            <span className="text-[9px] text-yaku-brown-warm tracking-[0.2em] uppercase font-medium leading-none mt-0.5">100% Natural</span>
          </div>
        </motion.a>

        <nav className="hidden md:flex gap-8">
          {[
            { href: "#acerca-de", label: "Acerca de" },
            { href: "#beneficios", label: "Beneficios" },
            { href: "#formulacion", label: "Formulación" },
            { href: "#informe", label: "Investigación" },
            { href: "#resultados", label: "Resultados" },
            { href: "#equipo", label: "Equipo" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-yaku-chocolate/80 hover:text-yaku-green font-medium transition-all duration-300 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-yaku-green after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <motion.a
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex bg-yaku-green hover:bg-yaku-green-dark text-white px-5 py-2.5 rounded-full font-medium transition-all duration-300 shadow-md hover:shadow-lg items-center gap-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            Contáctanos
          </motion.a>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-yaku-cream transition-colors"
            aria-label="Menú"
          >
            <svg className="w-6 h-6 text-yaku-chocolate" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="md:hidden absolute top-20 left-0 w-full bg-yaku-white/95 backdrop-blur-xl border-b border-yaku-beige/50 shadow-2xl origin-top"
          >
            <div className="px-6 py-6 flex flex-col gap-2">
              {[
                { href: "#acerca-de", label: "Acerca de" },
                { href: "#beneficios", label: "Beneficios" },
                { href: "#formulacion", label: "Formulación" },
                { href: "#informe", label: "Investigación" },
                { href: "#resultados", label: "Resultados" },
                { href: "#equipo", label: "Equipo" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-yaku-chocolate-dark hover:text-yaku-green font-semibold py-3 px-4 rounded-xl hover:bg-yaku-cream-light active:bg-yaku-cream transition-all text-base border border-transparent hover:border-yaku-beige/30"
                >
                  {link.label}
                </a>
              ))}
              <div className="h-px w-full bg-yaku-beige/30 my-2" />
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="bg-gradient-to-r from-yaku-green to-yaku-green-leaf text-white px-5 py-4 rounded-xl font-bold text-center flex items-center justify-center gap-3 shadow-md active:scale-95 transition-transform"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Contáctanos
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
