"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { whatsappLink } from '../../data/constants';

export default function Navegacion() {
  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 cursor-pointer"
        >
          <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center border-2 border-green-500 overflow-hidden hover:scale-110 transition-transform duration-300">
            <span className="text-xs text-slate-400 font-bold">LOGO</span>
          </div>
          <span className="font-extrabold text-2xl text-green-800 tracking-tight">Inti</span>
        </motion.div>

        <nav className="hidden md:flex gap-6">
          <a href="#acerca-de" className="text-slate-600 hover:text-green-600 hover:-translate-y-1 transition-all font-medium">Acerca de Inti</a>
          <a href="#beneficios" className="text-slate-600 hover:text-green-600 hover:-translate-y-1 transition-all font-medium">Beneficios</a>
          <a href="#informe" className="text-slate-600 hover:text-green-600 hover:-translate-y-1 transition-all font-medium">Investigación</a>
          <a href="#equipo" className="text-slate-600 hover:text-green-600 hover:-translate-y-1 transition-all font-medium">Equipo</a>
        </nav>

        <motion.a
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-full font-medium transition-colors shadow-md flex items-center gap-2"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
        Contáctanos
      </motion.a>
    </div>
  </header>
  );
}
