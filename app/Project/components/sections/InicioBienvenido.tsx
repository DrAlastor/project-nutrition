"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { whatsappLink } from '../../data/constants';

const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" }
  },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function HeroSection() {
  return (                                  //(pt-20) bg-gradient
    <section className="w-full min-h-[90vh] pt-20 bg-gradient-to-br from-yaku-cream-light via-yaku-cream to-yaku-beige/40 flex items-center justify-center overflow-hidden relative">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-yaku-green/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-yaku-brown/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />

      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%235C3A2E' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10 py-16 md:py-24">
        <motion.div
          className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={staggerContainer}
        >
          {/* LEFT COLUMN: Text */}
          <motion.div
            className="w-full lg:w-1/2 flex flex-col items-start text-left"
            variants={fadeUpVariant}
          >
            {/* Badge */}
            <span className="bg-yaku-green/10 text-yaku-green font-semibold tracking-wider uppercase text-[10px] md:text-xs mb-6 px-4 py-2 rounded-full border border-yaku-green/20 inline-flex items-center gap-2">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z" />
              </svg>
              100% Natural · Fortificada con Colágeno
            </span>

            {/* Main title */}
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-extrabold text-yaku-chocolate-dark mb-6 leading-[1.1]">
              <span className="text-yaku-green">YAKU</span>
              <br />
              <span className="text-yaku-brown text-3xl md:text-4xl lg:text-5xl font-bold">Gelatina Saludable de Yacón</span>
            </h1>

            {/* Description */}
            <p className="text-lg text-yaku-chocolate/70 mb-8 leading-relaxed max-w-lg">
              El poder prebiótico del Yacón en una presentación práctica y duradera. Cuidamos tu digestión y tus articulaciones con ciencia y tradición andina.
            </p>

            {/* Stats row */}
            <div className="flex gap-8 mb-10">
              <div className="text-center">
                <p className="font-serif text-2xl font-bold text-yaku-chocolate-dark">250gr</p>
                <p className="text-xs text-yaku-brown-warm uppercase tracking-wider">Contenido</p>
              </div>
              <div className="w-px bg-yaku-beige" />
              <div className="text-center">
                <p className="font-serif text-2xl font-bold text-yaku-green">100%</p>
                <p className="text-xs text-yaku-brown-warm uppercase tracking-wider">Natural</p>
              </div>
              <div className="w-px bg-yaku-beige" />
              <div className="text-center">
                <p className="font-serif text-2xl font-bold text-yaku-chocolate-dark">FOS</p>
                <p className="text-xs text-yaku-brown-warm uppercase tracking-wider">Prebiótico</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 w-full sm:w-auto">
              <motion.a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="bg-yaku-green hover:bg-yaku-green-dark text-white font-bold py-3.5 px-8 rounded-full transition-all shadow-lg shadow-yaku-green/20 hover:shadow-xl hover:shadow-yaku-green/30 w-full sm:w-auto text-center flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Comprar ahora
              </motion.a>
              <motion.a
                href="#beneficios"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="bg-yaku-white text-yaku-chocolate-dark font-bold py-3.5 px-8 rounded-full transition-all hover:shadow-lg border-2 border-yaku-beige hover:border-yaku-brown-warm w-full sm:w-auto text-center"
              >
                Ver Beneficios
              </motion.a>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Product Image */}
          <motion.div
            className="w-full lg:w-1/2 relative mt-10 lg:mt-0"
            variants={fadeUpVariant}
          >
            {/* Glow behind image */}
            <div className="absolute inset-0 bg-gradient-to-br from-yaku-brown/20 via-yaku-cream to-yaku-green/10 rounded-[2rem] blur-2xl scale-95" />

            {/* Main Product Image */}
            <div className="relative w-full aspect-[4/5] max-w-md mx-auto lg:max-w-none rounded-[2rem] overflow-hidden shadow-2xl">
              <Image
                src="/yaku-producto.jpg"
                alt="YAKU - Gelatina Saludable a base de Yacón Fortificada con Colágeno - 250gr - 100% Natural"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                preload
              />
            </div>

            {/* Floating card: Ingredient */}
            <motion.div
              className="absolute -bottom-6 -left-2 md:-bottom-8 md:-left-8 bg-yaku-white/95 backdrop-blur-sm p-4 md:p-5 rounded-2xl shadow-xl flex items-center gap-4 border border-yaku-beige/50 z-10"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="bg-gradient-to-br from-yaku-brown to-yaku-chocolate w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                <svg className="w-6 h-6 text-yaku-cream" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-yaku-brown-warm font-medium mb-0.5">Ingrediente Central</p>
                <p className="text-sm md:text-base font-extrabold text-yaku-chocolate-dark">Yacón Natural</p>
              </div>
            </motion.div>

            {/* Floating card: Collagen */}
            <motion.div
              className="absolute -top-4 -right-2 md:-top-6 md:-right-6 bg-yaku-white/95 backdrop-blur-sm p-3 md:p-4 rounded-2xl shadow-xl flex items-center gap-3 border border-yaku-beige/50 z-10"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <div className="bg-gradient-to-br from-yaku-green to-yaku-green-leaf w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-yaku-brown-warm font-medium mb-0.5">Fortificada con</p>
                <p className="text-sm font-extrabold text-yaku-chocolate-dark">Colágeno</p>
              </div>
            </motion.div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
