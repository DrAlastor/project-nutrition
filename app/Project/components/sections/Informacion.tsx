"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { fadeUpVariant } from '../../data/constants';

export default function Informacion() {
  return (
    <section id="acerca-de" className="w-full bg-slate-50 py-20 border-t border-slate-200">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUpVariant}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <h2 className="text-3xl font-bold text-slate-900 mb-6">Acerca de Inti y el Yacón</h2>
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm hover:shadow-lg transition-shadow duration-300 text-left border border-slate-100">
          <h3 className="text-xl font-bold text-green-700 mb-4">¿Por qué Yacón?</h3>
          <p className="text-slate-600 mb-6 leading-relaxed">
            El yacón es un superalimento andino rico en Fructooligosacáridos (FOS), una fibra prebiótica que nuestro cuerpo no digiere, pero que sirve como alimento para las bacterias beneficiosas del intestino. Esto mejora profundamente la salud digestiva y ayuda a evitar elevaciones de glucosa en la sangre.
          </p>
          <h3 className="text-xl font-bold text-green-700 mb-4">Innovación Tecnológica: Biofilización</h3>
          <p className="text-slate-600 leading-relaxed">
            <strong>Inti</strong> se presenta en polvo mediante biofilización. Este proceso extrae la humedad conservando intactos los componentes funcionales del yacón y el colágeno, garantizando un producto con mayor durabilidad y el 100% de sus propiedades funcionales.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
