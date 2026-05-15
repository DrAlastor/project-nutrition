"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function TablaNutricional() {
  return (
    <section id="informe" className="w-full bg-slate-900 text-white py-20 border-t border-slate-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-green-400 font-bold tracking-wider uppercase text-sm mb-4 block">Respaldo Académico</span>
            <h2 className="text-3xl font-bold mb-4">Investigación y Desarrollo</h2>
            <p className="text-slate-400 font-medium italic mb-6 border-l-4 border-green-500 pl-4">
              "DESARROLLO DE UN POSTRE GELIFICADO FUNCIONAL A BASE DE COLÁGENO E INULINA, ENDULZADO CON MIEL DE YACON"
            </p>
            <p className="text-slate-300 mb-4 leading-relaxed">
              En Bolivia, el cultivo del yacón enfrenta un declive en municipios como Mocomoco (La Paz) debido a la falta de transformación industrial. Nuestro proyecto universitario nace con la misión de revalorizar esta materia prima desarrollando un alimento sólido y funcional.
            </p>
            <p className="text-slate-300 mb-6 leading-relaxed">
              El desafío tecnológico central fue <strong>optimizar el proceso de elaboración</strong>. Dado que los FOS se degradan rápidamente a altas temperaturas y condiciones muy ácidas, estandarizamos rigurosamente la temperatura y el pH durante la biofilización para garantizar la conservación íntegra de la inulina prebiótica.
            </p>
          </motion.div>

          {/* Tabla Nutricional Animada */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-slate-800 p-8 rounded-3xl border border-slate-700 shadow-2xl hover:border-slate-500 transition-colors duration-300"
          >
            <h3 className="text-xl font-bold text-green-400 mb-6 flex items-center gap-2">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Valor Nutricional del Yacón (100g)
            </h3>
            <div className="grid grid-cols-2 gap-x-8 gap-y-3 text-sm text-slate-300">
              <div className="flex justify-between border-b border-slate-700 hover:border-green-400 transition-colors pb-1"><span>Energía</span> <span className="font-bold text-white">54 kcal</span></div>
              <div className="flex justify-between border-b border-slate-700 hover:border-green-400 transition-colors pb-1"><span>Agua</span> <span className="font-bold text-white">86 g</span></div>
              <div className="flex justify-between border-b border-slate-700 hover:border-green-400 transition-colors pb-1"><span>Proteína</span> <span className="font-bold text-white">0.3 g</span></div>
              <div className="flex justify-between border-b border-slate-700 hover:border-green-400 transition-colors pb-1"><span>Grasa total</span> <span className="font-bold text-white">0.03 g</span></div>
              <div className="flex justify-between border-b border-slate-700 hover:border-green-400 transition-colors pb-1"><span>Carbohidratos</span> <span className="font-bold text-white">12.5 g</span></div>
              <div className="flex justify-between border-b border-slate-700 hover:border-green-400 transition-colors pb-1"><span>Fibra</span> <span className="font-bold text-white">0.5 g</span></div>
              <div className="flex justify-between border-b border-slate-700 hover:border-green-400 transition-colors pb-1"><span>Calcio</span> <span className="font-bold text-white">23 mg</span></div>
              <div className="flex justify-between border-b border-slate-700 hover:border-green-400 transition-colors pb-1"><span>Fósforo</span> <span className="font-bold text-white">21 mg</span></div>
              <div className="flex justify-between border-b border-slate-700 hover:border-green-400 transition-colors pb-1"><span>Vitamina C</span> <span className="font-bold text-white">13.1 mg</span></div>
              <div className="flex justify-between border-b border-slate-700 hover:border-green-400 transition-colors pb-1"><span>Hierro</span> <span className="font-bold text-white">0.3 mg</span></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
