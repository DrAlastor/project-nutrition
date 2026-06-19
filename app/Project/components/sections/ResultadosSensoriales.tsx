"use client";

import React from 'react';
import { motion } from 'framer-motion';

// Data from the sensory evaluation
const atributos = [
  { nombre: "Aceptación General", t1: 7.1, t2: 7.7, t3: 8.1, t4: 8.6, significativo: true, p: 0.003 },
  { nombre: "Sabor", t1: 6.5, t2: 7.2, t3: 7.9, t4: 8.4, significativo: true, p: 0.02 },
  { nombre: "Aroma", t1: 6.4, t2: 6.1, t3: 6.9, t4: 8.2, significativo: true, p: 0.02 },
  { nombre: "Apariencia", t1: 6.6, t2: 6.5, t3: 6.9, t4: 7.7, significativo: false, p: 0.1 },
  { nombre: "Color", t1: 6.5, t2: 6.2, t3: 6.9, t4: 7.3, significativo: false, p: 0.5 },
  { nombre: "Consistencia", t1: 7.4, t2: 7.3, t3: 7.6, t4: 8.3, significativo: false, p: 0.4 },
];

const tratamientos = [
  { codigo: "T1", desc: "15g colágeno + 21g yacón", color: "bg-yaku-sand" },
  { codigo: "T2", desc: "15g colágeno + 29g yacón", color: "bg-yaku-brown-warm" },
  { codigo: "T3", desc: "21g colágeno + 21g yacón", color: "bg-yaku-green-light" },
  { codigo: "T4", desc: "21g colágeno + 29g yacón", color: "bg-yaku-green" },
];

function BarChart({ data, maxVal = 9 }: { data: typeof atributos[0]; maxVal?: number }) {
  const bars = [
    { key: "T1", val: data.t1, color: "#D4C4A8" },
    { key: "T2", val: data.t2, color: "#A0845C" },
    { key: "T3", val: data.t3, color: "#6B9E64" },
    { key: "T4", val: data.t4, color: "#2D5A27" },
  ];

  return (
    <div className="flex items-end gap-2 h-32 justify-center">
      {bars.map((bar, i) => (
        <motion.div
          key={bar.key}
          className="flex flex-col items-center gap-1"
          initial={{ height: 0 }}
          whileInView={{ height: "auto" }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
        >
          <span className="text-[10px] font-bold text-yaku-chocolate-dark">{bar.val}</span>
          <motion.div
            className="w-8 md:w-10 rounded-t-md"
            style={{ backgroundColor: bar.color }}
            initial={{ height: 0 }}
            whileInView={{ height: `${(bar.val / maxVal) * 100}px` }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
          />
          <span className="text-[9px] font-semibold text-yaku-brown-warm">{bar.key}</span>
        </motion.div>
      ))}
    </div>
  );
}

export default function ResultadosSensoriales() {
  return (
    <section id="resultados" className="w-full bg-gradient-to-b from-yaku-cream-light to-yaku-white py-20 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-yaku-green/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="text-yaku-brown-warm font-semibold tracking-wider uppercase text-xs mb-4 block">Resultados Científicos</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-yaku-chocolate-dark mb-4">Evaluación Sensorial</h2>
          <p className="text-yaku-chocolate/60">
            Se evaluaron 4 formulaciones experimentales (T1-T4) con 11 panelistas, variando las concentraciones de colágeno hidrolizado y azúcar de yacón. Escala hedónica de 1-9.
          </p>
        </motion.div>

        {/* Tratamientos legend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {tratamientos.map((t) => (
            <div key={t.codigo} className="flex items-center gap-2 bg-yaku-white/80 backdrop-blur-sm px-3 py-1.5 rounded-full border border-yaku-beige/30">
              <div className={`w-3 h-3 rounded-full ${t.color}`} />
              <span className="text-xs font-semibold text-yaku-chocolate-dark">{t.codigo}</span>
              <span className="text-[10px] text-yaku-brown-warm hidden sm:inline">({t.desc})</span>
            </div>
          ))}
        </motion.div>

        {/* Charts grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {atributos.map((attr, index) => (
            <motion.div
              key={attr.nombre}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="bg-yaku-white/80 backdrop-blur-sm p-5 rounded-2xl border border-yaku-beige/30 hover:shadow-lg hover:border-yaku-beige/60 transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-serif text-sm font-bold text-yaku-chocolate-dark">{attr.nombre}</h3>
                {attr.significativo ? (
                  <span className="text-[9px] bg-yaku-green/10 text-yaku-green font-bold px-2 py-0.5 rounded-full">
                    p={attr.p} ✓
                  </span>
                ) : (
                  <span className="text-[9px] bg-yaku-brown-warm/10 text-yaku-brown-warm font-bold px-2 py-0.5 rounded-full">
                    p={attr.p}
                  </span>
                )}
              </div>
              <BarChart data={attr} />
            </motion.div>
          ))}
        </div>

        {/* Winner highlight */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-yaku-green/10 to-yaku-green/5 p-6 md:p-8 rounded-3xl border border-yaku-green/15 max-w-3xl mx-auto"
        >
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-16 h-16 bg-gradient-to-br from-yaku-green to-yaku-green-leaf rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 className="font-serif text-xl font-bold text-yaku-chocolate-dark mb-2">Formulación Ganadora: T4</h3>
              <p className="text-yaku-chocolate/60 text-sm leading-relaxed">
                La formulación <strong className="text-yaku-green">T4 (21g colágeno + 29g azúcar de yacón)</strong> obtuvo los mayores puntajes en todos los atributos sensoriales evaluados, con una aceptación general de <strong className="text-yaku-chocolate-dark">8.6/9</strong>. El ANOVA confirmó diferencias significativas (p&lt;0.05) en aceptación general, sabor y aroma.
              </p>
            </div>
          </div>
        </motion.div>

        {/* ANOVA Summary table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 max-w-4xl mx-auto"
        >
          <h3 className="font-serif text-lg font-bold text-yaku-chocolate-dark mb-4 text-center">Resumen ANOVA (α = 0.05)</h3>
          <div className="overflow-x-auto rounded-2xl border border-yaku-beige/30">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-yaku-cream/60">
                  <th className="text-left py-3 px-4 font-bold text-yaku-chocolate-dark">Atributo</th>
                  <th className="text-center py-3 px-3 font-bold text-yaku-chocolate-dark">F calc.</th>
                  <th className="text-center py-3 px-3 font-bold text-yaku-chocolate-dark">F crítico</th>
                  <th className="text-center py-3 px-3 font-bold text-yaku-chocolate-dark">p-valor</th>
                  <th className="text-center py-3 px-3 font-bold text-yaku-chocolate-dark">Resultado</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { attr: "Aceptación General", f: 5.4, fc: 2.8, p: 0.003, sig: true },
                  { attr: "Sabor", f: 3.5, fc: 2.8, p: 0.02, sig: true },
                  { attr: "Aroma", f: 3.7, fc: 2.8, p: 0.02, sig: true },
                  { attr: "Apariencia", f: 2.3, fc: 2.8, p: 0.1, sig: false },
                  { attr: "Color", f: 0.8, fc: 2.8, p: 0.5, sig: false },
                  { attr: "Consistencia", f: 1.1, fc: 2.8, p: 0.4, sig: false },
                ].map((row, i) => (
                  <tr key={row.attr} className={`border-t border-yaku-beige/20 ${i % 2 === 0 ? "bg-yaku-white" : "bg-yaku-cream-light/30"} hover:bg-yaku-cream/40 transition-colors`}>
                    <td className="py-2.5 px-4 font-medium text-yaku-chocolate-dark">{row.attr}</td>
                    <td className="text-center py-2.5 px-3 text-yaku-chocolate/70">{row.f}</td>
                    <td className="text-center py-2.5 px-3 text-yaku-chocolate/70">{row.fc}</td>
                    <td className="text-center py-2.5 px-3 font-semibold text-yaku-chocolate-dark">{row.p}</td>
                    <td className="text-center py-2.5 px-3">
                      {row.sig ? (
                        <span className="text-xs bg-yaku-green/10 text-yaku-green font-bold px-2 py-1 rounded-full">Significativo</span>
                      ) : (
                        <span className="text-xs bg-yaku-brown-warm/10 text-yaku-brown-warm font-bold px-2 py-1 rounded-full">No signif.</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

