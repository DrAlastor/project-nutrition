"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { fadeUpVariant } from '../../data/constants';

const beneficios = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    titulo: "Salud Digestiva",
    descripcion: "Alto contenido en inulina y FOS. Actúan como prebióticos que promueven bacterias benéficas en el colon, mejorando el metabolismo y previniendo el estreñimiento.",
    gradientFrom: "from-yaku-green",
    gradientTo: "to-yaku-green-leaf",
    bgLight: "bg-yaku-green/5",
    borderColor: "border-yaku-green/10",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    titulo: "Control Metabólico",
    descripcion: "Ideal para dietas saludables y control de peso. Los FOS proveen un bajo contenido calórico y ayudan a evitar la elevación abrupta de la glucosa en la sangre.",
    gradientFrom: "from-yaku-brown",
    gradientTo: "to-yaku-brown-warm",
    bgLight: "bg-yaku-brown/5",
    borderColor: "border-yaku-brown/10",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    titulo: "Piel y Articulaciones",
    descripcion: "Enriquecido con colágeno hidrolizado. Al estar hidrolizado, el organismo absorbe los péptidos eficientemente, fortaleciendo los tejidos conectivos, cartílagos y la firmeza de la piel.",
    gradientFrom: "from-yaku-chocolate",
    gradientTo: "to-yaku-brown",
    bgLight: "bg-yaku-chocolate/5",
    borderColor: "border-yaku-chocolate/10",
  },
];

export default function Beneficios() {
  return (
    <section id="beneficios" className="w-full scroll-mt-20 bg-gradient-to-b from-yaku-cream-light to-yaku-cream/30 py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yaku-green/[0.02] rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={fadeUpVariant}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-yaku-brown-warm font-semibold tracking-wider uppercase text-xs mb-4 block">Lo que nos hace únicos</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-yaku-chocolate-dark mb-4">Beneficios Funcionales</h2>
          <p className="text-yaku-chocolate/60">Nuestra gelatina no es solo un postre, es un alimento diseñado científicamente para cuidar tu bienestar diario.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {beneficios.map((beneficio, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`${beneficio.bgLight} p-8 rounded-3xl border ${beneficio.borderColor} hover:shadow-xl hover:-translate-y-2 transition-all duration-500 cursor-default group relative overflow-hidden`}
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-yaku-cream/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className={`w-14 h-14 bg-gradient-to-br ${beneficio.gradientFrom} ${beneficio.gradientTo} rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {beneficio.icon}
                </div>
                <h3 className="font-serif text-xl font-bold text-yaku-chocolate-dark mb-3 group-hover:text-yaku-green transition-colors duration-300">{beneficio.titulo}</h3>
                <p className="text-yaku-chocolate/60 leading-relaxed">{beneficio.descripcion}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


