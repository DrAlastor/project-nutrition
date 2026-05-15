"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { fadeUpVariant } from '../../data/constants';

export default function Beneficios() {
  return (
    <section id="beneficios" className="w-full bg-white py-20 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariant}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Beneficios Funcionales</h2>
          <p className="text-slate-600">Nuestra gelatina no es solo un postre, es un alimento diseñado científicamente para cuidar tu bienestar diario.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Beneficio 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-green-50 p-8 rounded-3xl border border-green-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-default"
          >
            <div className="w-14 h-14 bg-green-600 rounded-2xl flex items-center justify-center text-white mb-6">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Salud Digestiva</h3>
            <p className="text-slate-600">Alto contenido en inulina y FOS. Actúan como prebióticos que promueven bacterias benéficas en el colon, mejorando el metabolismo y previniendo el estreñimiento.</p>
          </motion.div>

          {/* Beneficio 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-amber-50 p-8 rounded-3xl border border-amber-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-default"
          >
            <div className="w-14 h-14 bg-amber-500 rounded-2xl flex items-center justify-center text-white mb-6">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Control Metabólico</h3>
            <p className="text-slate-600">Ideal para dietas saludables y control de peso. Los FOS proveen un bajo contenido calórico y ayudan a evitar la elevación abrupta de la glucosa en la sangre.</p>
          </motion.div>

          {/* Beneficio 3 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-blue-50 p-8 rounded-3xl border border-blue-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-default"
          >
            <div className="w-14 h-14 bg-blue-500 rounded-2xl flex items-center justify-center text-white mb-6">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Piel y Articulaciones</h3>
            <p className="text-slate-600">Enriquecido con colágeno hidrolizado. Al estar hidrolizado, el organismo absorbe los péptidos eficientemente, fortaleciendo los tejidos conectivos, cartílagos y la firmeza de la piel.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
