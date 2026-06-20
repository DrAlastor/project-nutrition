"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { fadeUpVariant } from '../../data/constants';

const conceptos = [
  {
    titulo: "¿Qué es la Inulina/FOS?",
    texto: "La inulina es un polisacárido presente de forma natural en el yacón. Los fructooligosacáridos (FOS) son oligosacáridos de fructosa con un grado de polimerización menor a 10, altamente solubles y con capacidad prebiótica. Son fermentados por bacterias benéficas en el colon, liberando ácidos grasos de cadena corta (AGCC) que mantienen la barrera intestinal.",
    icono: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z" />
      </svg>
    ),
    gradient: "from-yaku-green to-yaku-green-leaf",
  },
  {
    titulo: "Prebióticos Naturales",
    texto: "Los prebióticos son alimentos no digeribles que favorecen el crecimiento de bacterias beneficiosas en el intestino. Los AGCC liberados ayudan a mantener la barrera intestinal, controlar el azúcar en sangre, reducir la inflamación y mejorar la sensibilidad a la insulina.",
    icono: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    gradient: "from-yaku-brown to-yaku-brown-warm",
  },
  {
    titulo: "Colágeno Hidrolizado",
    texto: "Es la proteína estructural más abundante del cuerpo. A partir de los 25 años, nuestros niveles disminuyen 1-2% cada año. Al estar hidrolizado, los péptidos bioactivos se absorben eficientemente, fortaleciendo la piel, articulaciones y tejidos conectivos.",
    icono: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    gradient: "from-yaku-chocolate to-yaku-brown",
  },
  {
    titulo: "Liofilización (Biofilización)",
    texto: "Técnica avanzada de criodesecación que elimina entre 88% y 99% de la humedad. Opera congelando el producto y reduciendo la presión para sublimar el agua directamente de sólido a gas, preservando el 100% de los nutrientes y propiedades organolépticas.",
    icono: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    gradient: "from-yaku-green-leaf to-yaku-green-light",
  },
];

export default function Informacion() {
  return (
    <section id="acerca-de" className="w-full scroll-mt-20 bg-yaku-white py-20 relative overflow-hidden">
      {/* Decorative corner */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-yaku-cream rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          variants={fadeUpVariant}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="text-yaku-brown-warm font-semibold tracking-wider uppercase text-xs mb-4 block">Sobre nuestro producto</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-yaku-chocolate-dark mb-4">
            Acerca de <span className="text-yaku-green">YAKU</span> y el Yacón
          </h2>
          <p className="text-yaku-chocolate/60">
            El yacón (Smallanthus sonchifolius) es un tubérculo andino de origen prehispánico, cultivado en los Andes desde Colombia hasta Argentina. Es considerado un superalimento funcional por su riqueza en fructooligosacáridos (FOS), con efectos prebióticos, antioxidantes e hipoglucemiantes.
          </p>
        </motion.div>

        {/* About card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-yaku-cream-light to-yaku-cream/50 p-8 md:p-10 rounded-3xl shadow-sm border border-yaku-beige/30 mb-14 relative overflow-hidden"
        >
          {/* Watermark */}
          <div className="absolute -bottom-8 -right-8 opacity-[0.04]">
            <svg className="w-40 h-40 text-yaku-green" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z" />
            </svg>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-yaku-brown to-yaku-chocolate rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5 text-yaku-cream" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z" />
                  </svg>
                </div>
                <h3 className="font-serif text-lg font-bold text-yaku-chocolate-dark">¿Por qué Yacón?</h3>
              </div>
              <p className="text-yaku-chocolate/65 leading-relaxed text-sm">
                El yacón es un superalimento andino rico en Fructooligosacáridos (FOS), una fibra prebiótica que nuestro cuerpo no digiere, pero que sirve como alimento para las bacterias beneficiosas del intestino. Esto mejora profundamente la salud digestiva y ayuda a evitar elevaciones de glucosa en la sangre. Almacena entre 9% y 12% de FOS en base húmeda.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-yaku-green to-yaku-green-leaf rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="font-serif text-lg font-bold text-yaku-chocolate-dark">Liofilización</h3>
              </div>
              <p className="text-yaku-chocolate/65 leading-relaxed text-sm">
                <strong className="text-yaku-chocolate-dark">YAKU</strong> se presenta en polvo mediante biofilización (liofilización). Este proceso elimina entre 88-99% de la humedad mediante sublimación, conservando intactos los componentes funcionales del yacón y el colágeno, garantizando un producto con mayor durabilidad y el 100% de sus propiedades.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Concepts grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {conceptos.map((concepto, index) => (
            <motion.div
              key={concepto.titulo}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-yaku-cream-light/50 p-6 rounded-2xl border border-yaku-beige/20 hover:shadow-lg hover:border-yaku-beige/40 transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 bg-gradient-to-br ${concepto.gradient} rounded-xl flex items-center justify-center flex-shrink-0 text-white shadow-md group-hover:scale-110 transition-transform`}>
                  {concepto.icono}
                </div>
                <div>
                  <h3 className="font-serif font-bold text-yaku-chocolate-dark mb-2 group-hover:text-yaku-green transition-colors">{concepto.titulo}</h3>
                  <p className="text-yaku-chocolate/55 text-sm leading-relaxed">{concepto.texto}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


