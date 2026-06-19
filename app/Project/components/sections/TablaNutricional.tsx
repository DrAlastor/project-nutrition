"use client";

import React from 'react';
import { motion } from 'framer-motion';

const nutrientes = [
  { nombre: "Energía", valor: "54 kcal", icono: "⚡" },
  { nombre: "Agua", valor: "86 g", icono: "💧" },
  { nombre: "Proteína", valor: "0.3 g", icono: "🔬" },
  { nombre: "Grasa total", valor: "0.03 g", icono: "🫒" },
  { nombre: "Carbohidratos", valor: "12.5 g", icono: "🌾" },
  { nombre: "Fibra", valor: "0.5 g", icono: "🌿" },
  { nombre: "Calcio", valor: "23 mg", icono: "🦴" },
  { nombre: "Fósforo", valor: "21 mg", icono: "⚗️" },
  { nombre: "Hierro", valor: "0.3 mg", icono: "🩸" },
  { nombre: "Retinol", valor: "12 mg", icono: "👁️" },
  { nombre: "Tiamina (B1)", valor: "0.02 mg", icono: "💊" },
  { nombre: "Riboflavina (B2)", valor: "0.11 mg", icono: "💊" },
  { nombre: "Niacina (B3)", valor: "0.34 mg", icono: "💊" },
  { nombre: "Vitamina C", valor: "13.1 mg", icono: "🍊" },
];

const propiedadesFOS = [
  { titulo: "Altamente solubles", detalle: "Hasta 85% p/p a temperatura ambiente", icono: "💧" },
  { titulo: "Bajo dulzor", detalle: "~1/3 del dulzor de la sacarosa", icono: "🍬" },
  { titulo: "No reductores", detalle: "No sufren reacción de Maillard", icono: "🔥" },
  { titulo: "Higroscópicos", detalle: "Retención de agua superior a la sacarosa", icono: "🌊" },
  { titulo: "Bajo calórico", detalle: "Ideal para dietas de control de peso", icono: "⚖️" },
  { titulo: "Sensibles al calor", detalle: "Se degradan a >120°C y pH <3.5", icono: "🌡️" },
];

export default function TablaNutricional() {
  return (
    <section id="informe" className="w-full bg-yaku-chocolate-dark text-yaku-white py-20 overflow-hidden relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-yaku-brown/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-yaku-green/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23FFFFFF' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Research Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-yaku-green-light font-bold tracking-wider uppercase text-sm mb-4 block flex items-center gap-2">
              <div className="w-8 h-px bg-yaku-green-light" />
              Respaldo Académico
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-yaku-cream">Investigación y Desarrollo</h2>
            <p className="text-yaku-cream/60 font-medium italic mb-6 border-l-4 border-yaku-brown pl-4 py-2 bg-yaku-brown/10 rounded-r-lg text-sm">
              &quot;DESARROLLO DE UN POSTRE GELIFICADO FUNCIONAL A BASE DE COLÁGENO E INULINA, ENDULZADO CON MIEL DE YACON&quot;
            </p>
            <p className="text-yaku-cream/70 mb-4 leading-relaxed text-sm">
              En Bolivia, el cultivo del yacón enfrenta un declive en municipios como Mocomoco (La Paz) debido a la falta de transformación industrial. Nuestro proyecto universitario de la <strong className="text-yaku-cream">Universidad Nacional Ecológica</strong> nace con la misión de revalorizar esta materia prima desarrollando un alimento sólido y funcional.
            </p>
            <p className="text-yaku-cream/70 mb-4 leading-relaxed text-sm">
              El desafío tecnológico central fue <strong className="text-yaku-cream">optimizar el proceso de elaboración</strong>. Los FOS se degradan rápidamente a altas temperaturas (&gt;120°C) y condiciones ácidas (pH &lt;3.5), por lo que estandarizamos rigurosamente la temperatura y el pH durante la biofilización para conservar íntegramente la inulina prebiótica.
            </p>

            {/* Methodology highlight */}
            <div className="bg-yaku-brown/15 p-5 rounded-2xl border border-yaku-brown/20 mt-6">
              <h4 className="font-serif font-bold text-yaku-cream mb-3 flex items-center gap-2">
                <svg className="w-5 h-5 text-yaku-green-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                Metodología
              </h4>
              <p className="text-yaku-cream/60 text-xs leading-relaxed mb-3">
                Diseño experimental factorial 2² con dos factores: concentración de colágeno hidrolizado (15g y 21g) y concentración de azúcar de yacón (21g y 29g), generando 4 tratamientos experimentales evaluados por 11 panelistas.
              </p>
              <div className="text-yaku-cream/50 text-[11px] font-mono bg-yaku-chocolate-dark/50 p-3 rounded-lg">
                𝑌ᵢⱼₖ = µ + Aᵢ + Bⱼ + (AB)ᵢⱼ + εᵢⱼₖ
              </div>
            </div>
          </motion.div>

          {/* Nutrition Table */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-yaku-chocolate/80 to-yaku-chocolate-dark/60 backdrop-blur-sm p-6 rounded-3xl border border-yaku-brown/20 shadow-2xl hover:border-yaku-brown/40 transition-colors duration-500"
          >
            <h3 className="font-serif text-xl font-bold text-yaku-green-light mb-5 flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-yaku-green to-yaku-green-leaf rounded-xl flex items-center justify-center shadow-md">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              Valor Nutricional del Yacón (100g)
            </h3>
            <div className="space-y-0">
              {nutrientes.map((nutriente, index) => (
                <motion.div
                  key={nutriente.nombre}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.3, delay: index * 0.04 }}
                  className="flex justify-between items-center py-2.5 border-b border-yaku-brown/15 hover:border-yaku-green-light/40 hover:bg-yaku-brown/5 px-3 rounded-lg transition-all duration-300 group"
                >
                  <span className="text-yaku-cream/70 group-hover:text-yaku-cream transition-colors flex items-center gap-2 text-sm">
                    <span className="text-xs">{nutriente.icono}</span>
                    {nutriente.nombre}
                  </span>
                  <span className="font-bold text-yaku-cream text-xs bg-yaku-brown/20 px-3 py-1 rounded-full group-hover:bg-yaku-green/20 transition-colors">{nutriente.valor}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* FOS Properties Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="font-serif text-2xl font-bold text-yaku-cream mb-8 text-center">Propiedades de los FOS del Yacón</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {propiedadesFOS.map((prop, i) => (
              <motion.div
                key={prop.titulo}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-yaku-brown/10 p-4 rounded-2xl border border-yaku-brown/15 hover:border-yaku-green-light/30 transition-all duration-300 group"
              >
                <span className="text-2xl mb-2 block">{prop.icono}</span>
                <h4 className="font-bold text-yaku-cream text-sm mb-1 group-hover:text-yaku-green-light transition-colors">{prop.titulo}</h4>
                <p className="text-yaku-cream/50 text-xs leading-relaxed">{prop.detalle}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

