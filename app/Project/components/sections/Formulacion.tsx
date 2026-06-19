"use client";

import React from 'react';
import { motion } from 'framer-motion';

const ingredientes = [
  { nombre: "Azúcar de Yacón", cantidad: "88g", porcion: "8.80g", color: "from-yaku-brown to-yaku-brown-warm", desc: "Aporte principal de FOS y dulzor basal. Prebiótico natural." },
  { nombre: "Azúcar de Coco", cantidad: "61g", porcion: "6.10g", color: "from-yaku-brown-warm to-yaku-sand", desc: "Co-edulcorante natural con IG bajo (~35). Notas de caramelo." },
  { nombre: "Colágeno Hidrolizado", cantidad: "46g", porcion: "4.60g", color: "from-yaku-green to-yaku-green-leaf", desc: "Fortificación proteica para tejidos conectivos y articulaciones." },
  { nombre: "Azúcar Blanca", cantidad: "25g", porcion: "2.50g", color: "from-yaku-beige to-yaku-cream", desc: "Agente técnico de masa (9.58%). Estabiliza la textura del gel." },
  { nombre: "Gelatina sin Sabor", cantidad: "15g", porcion: "1.50g", color: "from-yaku-chocolate to-yaku-brown", desc: "Hidrocoloide para gelificación y red tridimensional elástica." },
  { nombre: "Inulina", cantidad: "13g", porcion: "1.30g", color: "from-yaku-green-leaf to-yaku-green-light", desc: "Fibra prebiótica soluble. Estimula bifidobacterias intestinales." },
  { nombre: "Ácido Cítrico", cantidad: "1.22g", porcion: "0.12g", color: "from-yaku-sand to-yaku-brown-warm", desc: "Regulador de acidez. Controla pH para preservar los FOS." },
  { nombre: "Saborizante", cantidad: "0.59g", porcion: "0.06g", color: "from-yaku-chocolate to-yaku-chocolate-dark", desc: "Optimiza el perfil sensorial del producto final." },
];

// Calculate total for donut chart
const totalLote = 249.81;
const segmentos = [
  { nombre: "Yacón", porcentaje: (88 / totalLote) * 100, color: "#8B5E3C" },
  { nombre: "Coco", porcentaje: (61 / totalLote) * 100, color: "#A0845C" },
  { nombre: "Colágeno", porcentaje: (46 / totalLote) * 100, color: "#2D5A27" },
  { nombre: "Azúcar", porcentaje: (25 / totalLote) * 100, color: "#D4C4A8" },
  { nombre: "Gelatina", porcentaje: (15 / totalLote) * 100, color: "#5C3A2E" },
  { nombre: "Inulina", porcentaje: (13 / totalLote) * 100, color: "#4A7C44" },
  { nombre: "Otros", porcentaje: (1.81 / totalLote) * 100, color: "#E8D5C0" },
];

function DonutChart() {
  let cumulativePercentage = 0;
  const radius = 80;
  const circumference = 2 * Math.PI * radius;

  return (
    <div className="relative w-52 h-52 mx-auto">
      <svg viewBox="0 0 200 200" className="w-full h-full -rotate-90">
        {segmentos.map((seg, i) => {
          const strokeDasharray = `${(seg.porcentaje / 100) * circumference} ${circumference}`;
          const strokeDashoffset = -((cumulativePercentage / 100) * circumference);
          cumulativePercentage += seg.porcentaje;

          return (
            <circle
              key={i}
              cx="100"
              cy="100"
              r={radius}
              fill="none"
              stroke={seg.color}
              strokeWidth="24"
              strokeDasharray={strokeDasharray}
              strokeDashoffset={strokeDashoffset}
              className="transition-all duration-1000"
            />
          );
        })}
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="font-serif text-2xl font-bold text-yaku-chocolate-dark">250g</span>
        <span className="text-[10px] text-yaku-brown-warm uppercase tracking-wider">por lote</span>
      </div>
    </div>
  );
}

export default function Formulacion() {
  return (
    <section id="formulacion" className="w-full bg-yaku-white py-20 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-yaku-cream rounded-full blur-3xl opacity-40 -translate-x-1/3 -translate-y-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <span className="text-yaku-brown-warm font-semibold tracking-wider uppercase text-xs mb-4 block">Formulación Científica</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-yaku-chocolate-dark mb-4">Composición del Producto</h2>
          <p className="text-yaku-chocolate/60">
            Dosificación multicomponente optimizada mediante diseño factorial 2², con la formulación T4 seleccionada por su mayor aceptación sensorial (8.6/9).
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          {/* Donut chart */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-yaku-cream-light to-yaku-cream/40 p-6 rounded-3xl border border-yaku-beige/30 lg:sticky lg:top-28"
          >
            <h3 className="font-serif text-lg font-bold text-yaku-chocolate-dark mb-6 text-center">Distribución por Ingrediente</h3>
            <DonutChart />
            <div className="mt-6 space-y-2">
              {segmentos.map((seg) => (
                <div key={seg.nombre} className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: seg.color }} />
                    <span className="text-yaku-chocolate/70">{seg.nombre}</span>
                  </div>
                  <span className="font-bold text-yaku-chocolate-dark">{seg.porcentaje.toFixed(1)}%</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Ingredients list */}
          <div className="lg:col-span-2 space-y-3">
            {ingredientes.map((ing, index) => (
              <motion.div
                key={ing.nombre}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="bg-yaku-cream-light/50 p-4 rounded-2xl border border-yaku-beige/20 hover:border-yaku-beige/50 hover:shadow-md transition-all duration-300 group"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 bg-gradient-to-br ${ing.color} rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm group-hover:scale-110 transition-transform`}>
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z"/>
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-bold text-yaku-chocolate-dark text-sm">{ing.nombre}</h4>
                      <div className="flex items-center gap-3 text-xs">
                        <span className="text-yaku-brown-warm"><strong className="text-yaku-chocolate-dark">{ing.cantidad}</strong>/lote</span>
                        <span className="text-yaku-green bg-yaku-green/10 px-2 py-0.5 rounded-full font-semibold">{ing.porcion}/porción</span>
                      </div>
                    </div>
                    <p className="text-xs text-yaku-chocolate/50 leading-relaxed">{ing.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

