"use client"; // Necesario en Next.js para usar animaciones interactivas [cite: 61]

import { motion, Variants } from "framer-motion"; // Librería estándar de animaciones [cite: 58]
import Image from "next/image";

// Definimos la variante con el tipado correcto para evitar errores en Vercel [cite: 101]
const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  },
};

export default function HeroSection() {
  return (
    <section className="w-full py-16 md:py-24 bg-white flex items-center justify-center overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* COLUMNA IZQUIERDA: Texto y Botones */}
          <motion.div
            className="w-full lg:w-1/2 flex flex-col items-start text-left"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariant}
          >
            {/* Badge superior */}
            <span className="bg-green-50 text-green-600 font-semibold tracking-wider uppercase text-[10px] md:text-xs mb-6 px-4 py-2 rounded-full border border-green-100">
              Desarrollo de un postre gelificado funcional a base de colágeno e inulina, endulzado con miel de yacon
            </span>

            {/* Título Principal */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 mb-6 leading-[1.1]">
              <span className="text-green-500">Inti:</span> Gelatina en Polvo Biofilizada
            </h1>

            {/* Párrafo descriptivo */}
            <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-lg">
              El poder prebiótico del Yacón en una presentación práctica y duradera. Cuidamos tu digestión y tus articulaciones con ciencia y tradición.
            </p>

            {/* Botones de Acción */}
            <div className="flex flex-wrap gap-4 w-full sm:w-auto">
              <button className="bg-green-600 text-white font-bold py-3.5 px-8 rounded-full hover:bg-green-700 transition-all hover:-translate-y-1 hover:shadow-lg active:scale-95 w-full sm:w-auto text-center">
                Comprar ahora
              </button>
              {/* Botón secundario con efecto táctil  */}
              <button className="bg-slate-50 text-slate-800 font-bold py-3.5 px-8 rounded-full hover:bg-slate-200 transition-all hover:-translate-y-1 hover:shadow-lg active:scale-95 border border-slate-200 w-full sm:w-auto text-center">
                Ver Beneficios
              </button>
            </div>
          </motion.div>

          {/* COLUMNA DERECHA: Imagen y Tarjeta Flotante */}
          <motion.div
            className="w-full lg:w-1/2 relative mt-10 lg:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
          >
            {/* Contenedor de la Imagen Principal */}
            <div className="relative w-full aspect-square max-w-md mx-auto lg:max-w-none bg-slate-50 rounded-[2rem] overflow-hidden shadow-2xl flex flex-col items-center justify-center border border-slate-100">
              {/* Aquí puedes colocar el componente <Image /> de Next.js
                  usando la imagen del empaque que generamos anteriormente.
                  Por ahora, dejo la estructura de tu diseño:
               */}
              <svg className="w-16 h-16 text-slate-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
              <p className="text-slate-400 font-medium">Foto del empaque de Inti</p>
            </div>

            {/* Tarjeta Flotante: Animación infinita  */}
            <motion.div
              className="absolute -bottom-8 -left-4 md:-bottom-12 md:-left-12 bg-white p-4 md:p-5 rounded-2xl shadow-xl flex items-center gap-4 border border-slate-50 z-10"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="bg-yellow-100 text-yellow-500 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path></svg>
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium mb-0.5">Ingrediente Central</p>
                <p className="text-sm md:text-base font-extrabold text-slate-800">Yacón Natural</p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}