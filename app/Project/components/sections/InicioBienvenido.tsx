"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { fadeUpVariant, whatsappLink } from '../../data/constants';
import Image from 'next/image'; // Preparado para usar imágenes locales luego

export default function InicioBienvenido() {
  return (
    <section className="relative w-full bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 flex flex-col lg:flex-row items-center gap-12">

        {/* Columna de Texto Animada */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUpVariant}
          className="w-full lg:w-1/2 flex flex-col items-start text-left"
        >
          <span className="text-green-600 font-bold tracking-wider uppercase text-xs mb-4 bg-green-50 px-3 py-1 rounded-full border border-green-100 max-w-full leading-snug">
            DESARROLLO DE UN POSTRE GELIFICADO FUNCIONAL A BASE DE COLÁGENO E INULINA, ENDULZADO CON MIEL DE YACON
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
            <span className="text-green-600">Inti:</span> Gelatina en Polvo Biofilizada
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-lg">
            El poder prebiótico del Yacón en una presentación práctica y duradera. Cuidamos tu digestión y tus articulaciones con ciencia y tradición.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="bg-green-600 hover:bg-green-700 active:scale-95 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center gap-2">
              Comprar ahora
            </a>
            <a href="#beneficios" className="bg-slate-100 hover:bg-slate-200 active:scale-95 text-slate-700 px-8 py-4 rounded-full font-bold text-lg hover:-translate-y-1 transition-all flex items-center justify-center gap-2">
              Ver Beneficios
            </a>
          </div>
        </motion.div>

        {/* Columna de Imagen Animada */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="w-full lg:w-1/2 relative group"
        >
          <div className="aspect-square bg-gradient-to-tr from-green-100 to-amber-50 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] -z-10 blur-3xl opacity-60 group-hover:scale-110 transition-transform duration-700"></div>
          <div className="w-full aspect-square bg-slate-100 rounded-3xl shadow-xl flex items-center justify-center overflow-hidden border-8 border-white relative hover:shadow-2xl transition-shadow duration-500">
            <div className="text-center p-8 group-hover:scale-105 transition-transform duration-500">
              {/* Aquí se puede usar next/image más adelante, ej: 
                  <Image src="/empaque-inti.png" alt="Empaque de Inti" width={500} height={500} className="object-cover" /> 
              */}
              <svg className="w-16 h-16 text-slate-300 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p className="text-slate-400 font-medium">Foto del empaque de Inti</p>
            </div>
          </div>
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            className="absolute -bottom-6 -left-6 bg-white p-5 rounded-2xl shadow-xl flex items-center gap-4 hover:scale-105 transition-transform"
          >
            <div className="bg-amber-100 p-3 rounded-full text-amber-600">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <p className="text-sm text-slate-500 font-medium">Ingrediente Central</p>
              <p className="font-bold text-slate-800">Yacón Natural</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
