"use client"; // Necesario para usar Framer Motion y hooks en Next.js App Router

import React from 'react';
import { motion, Variants } from 'framer-motion';

export default function Home() {
  // Número de WhatsApp de la líder
  const whatsappNumber = "59169926759";
  const whatsappMessage = "¡Hola! Vengo de la página web y estoy interesado/a en comprar la gelatina funcional Inti.";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  // Lista de integrantes del equipo
  const equipo = [
    { nombre: "Evangelina Katherin Guzman Andrade", rol: "Investigación y Desarrollo", instagram: "https://instagram.com/" },
    { nombre: "Brehidy Milenka Pinto Robles", rol: "Investigación y Desarrollo", instagram: "https://instagram.com/" },
    { nombre: "Nathaly Ribera Macedo", rol: "Investigación y Desarrollo", instagram: "https://instagram.com/" },
    { nombre: "Linnzy Valdez Rivero", rol: "Investigación y Desarrollo", instagram: "https://www.instagram.com/linnzy_y/" },
  ];

  // Configuración base para la animación de aparición (Fade In + Slide Up)
  // Configuración base para la animación de aparición
  const fadeUpVariant: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-800 overflow-hidden">

      {/* NAVEGACIÓN (Header) */}
      <header className="w-full bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 cursor-pointer"
          >
            <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center border-2 border-green-500 overflow-hidden hover:scale-110 transition-transform duration-300">
              <span className="text-xs text-slate-400 font-bold">LOGO</span>
            </div>
            <span className="font-extrabold text-2xl text-green-800 tracking-tight">Inti</span>
          </motion.div>

          <nav className="hidden md:flex gap-6">
            <a href="#acerca-de" className="text-slate-600 hover:text-green-600 hover:-translate-y-1 transition-all font-medium">Acerca de Inti</a>
            <a href="#beneficios" className="text-slate-600 hover:text-green-600 hover:-translate-y-1 transition-all font-medium">Beneficios</a>
            <a href="#informe" className="text-slate-600 hover:text-green-600 hover:-translate-y-1 transition-all font-medium">Investigación</a>
            <a href="#equipo" className="text-slate-600 hover:text-green-600 hover:-translate-y-1 transition-all font-medium">Equipo</a>
          </nav>

          <motion.a
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-full font-medium transition-colors shadow-md flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            Contáctanos
          </motion.a>
        </div>
      </header>

      {/* SECCIÓN HERO */}
      <section className="relative w-full bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 flex flex-col lg:flex-row items-center gap-12">

          {/* Columna de Texto Animada */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUpVariant}
            className="w-full lg:w-1/2 flex flex-col items-start text-left"
          >
            <span className="text-green-600 font-bold tracking-wider uppercase text-xs mb-4 bg-green-50 px-3 py-1 rounded-full border border-green-100 max-w-full leading-snug">
              DESARROLLO DE UN POSTRE GELIFICADO FUNCIONAL A BASE DE COLÁGENO E INULINA, ENDULZADO CON MIEL DE YACON
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
              <span className="text-green-600">Inti:</span> Gelatina en Polvo Biofilizada
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-lg">
              El poder prebiótico del Yacón en una presentación práctica y duradera. Cuidamos tu digestión y tus articulaciones con ciencia y tradición.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="bg-green-600 hover:bg-green-700 active:scale-95 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center gap-2">
                Comprar ahora
              </a>
              <a href="#beneficios" className="bg-slate-100 hover:bg-slate-200 active:scale-95 text-slate-700 px-8 py-4 rounded-full font-bold text-lg hover:-translate-y-1 transition-all flex items-center justify-center gap-2">
                Ver Beneficios
              </a>
            </div>
          </motion.div>

          {/* Columna de Imagen Animada */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="w-full lg:w-1/2 relative group"
          >
            <div className="aspect-square bg-gradient-to-tr from-green-100 to-amber-50 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] -z-10 blur-3xl opacity-60 group-hover:scale-110 transition-transform duration-700"></div>
            <div className="w-full aspect-square bg-slate-100 rounded-3xl shadow-xl flex items-center justify-center overflow-hidden border-8 border-white relative hover:shadow-2xl transition-shadow duration-500">
              <div className="text-center p-8 group-hover:scale-105 transition-transform duration-500">
                <svg className="w-16 h-16 text-slate-300 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-slate-400 font-medium">Foto del empaque de Inti</p>
              </div>
            </div>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 bg-white p-5 rounded-2xl shadow-xl flex items-center gap-4 hover:scale-105 transition-transform"
            >
              <div className="bg-amber-100 p-3 rounded-full text-amber-600">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-slate-500 font-medium">Ingrediente Central</p>
                <p className="font-bold text-slate-800">Yacón Natural</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SECCIÓN ACERCA DE (Animada al hacer scroll) */}
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

      {/* SECCIÓN BENEFICIOS */}
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

      {/* SECCIÓN INFORME DE INVESTIGACIÓN */}
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

      {/* SECCIÓN EQUIPO */}
      <section id="equipo" className="w-full bg-slate-50 py-20 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Nuestro Equipo</h2>
            <p className="text-slate-600 mb-12 max-w-2xl mx-auto">
              Conoce a las estudiantes e investigadoras de nutrición detrás del desarrollo de Inti.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {equipo.map((miembro, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.15 }} // Delay dinámico para que aparezcan uno por uno
                className="flex flex-col items-center group cursor-pointer"
              >
                <div className="w-32 h-32 bg-slate-200 rounded-full mb-4 overflow-hidden border-4 border-white shadow-lg group-hover:border-green-400 group-hover:scale-105 transition-all duration-300">
                  <svg className="w-full h-full text-slate-400 p-6 group-hover:text-green-500 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-lg text-slate-800 text-center group-hover:text-green-700 transition-colors">{miembro.nombre}</h3>
                <p className="text-sm text-green-600 mb-3 font-medium text-center">{miembro.rol}</p>
                <a href={miembro.instagram} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-pink-600 hover:scale-110 transition-all flex items-center gap-1">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm font-medium">Perfil</span>
                </a>
              </motion.div>
            ))}

          </div>
        </div>
      </section>
      {/* FOOTER: Derechos de autor y Desarrollador */}
      <footer className="w-full bg-slate-900 text-slate-400 py-10 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">

          {/* Derechos de Autor y Proyecto */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
              <div className="w-6 h-6 bg-slate-700 rounded-full flex items-center justify-center border border-green-500 overflow-hidden">
                <span className="text-[8px] text-slate-300 font-bold">LOGO</span>
              </div>
              <span className="font-bold text-lg text-white tracking-tight">Inti</span>
            </div>
            <p className="text-sm">© {new Date().getFullYear()} Gelatina Funcional de Yacón.</p>
            <p className="text-xs mt-1 text-slate-500">Proyecto académico de la Carrera de Nutrición. Todos los derechos reservados.</p>
          </div>

          {/* Créditos del Desarrollador Web */}
          <div className="text-center md:text-right flex flex-col items-center md:items-end">
            <p className="text-sm">
              Diseño y Desarrollo Web por{' '}
              <span className="text-green-400 font-medium hover:text-green-300 transition-colors">
                [Alessandro Yevara Ponce]
              </span>
            </p>
            <div className="flex gap-4 mt-3">
              <a href="https://github.com/DrAlastor" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors text-sm flex items-center gap-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/alessandro-yevara-ponce-286876407/" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors text-sm flex items-center gap-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
                LinkedIn
              </a>
              <a href="https://alessandro-portafolio.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors text-sm flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
                Portafolio
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}