import React from 'react';
import Navegacion from './Project/components/layout/Navegacion';
import CreditoEnlace from './Project/components/layout/CreditoEnlace';
import InicioBienvenido from './Project/components/sections/InicioBienvenido';
import Informacion from './Project/components/sections/Informacion';
import Beneficios from './Project/components/sections/Beneficios';
import Formulacion from './Project/components/sections/Formulacion';
import TablaNutricional from './Project/components/sections/TablaNutricional';
import ResultadosSensoriales from './Project/components/sections/ResultadosSensoriales';
import Equipo from './Project/components/sections/Equipo';

export default function Home() {
  return (
    <main className="min-h-screen bg-yaku-white font-sans text-yaku-chocolate-dark overflow-hidden">
      <Navegacion />
      <InicioBienvenido />
      <Informacion />
      <Beneficios />
      <Formulacion />
      <TablaNutricional />
      <ResultadosSensoriales />
      <Equipo />
      <CreditoEnlace />
    </main>
  );
}