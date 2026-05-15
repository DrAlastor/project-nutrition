import React from 'react';
import Navegacion from './Project/components/layout/Navegacion';
import CreditoEnlace from './Project/components/layout/CreditoEnlace';
import InicioBienvenido from './Project/components/sections/InicioBienvenido';
import Informacion from './Project/components/sections/Informacion';
import Beneficios from './Project/components/sections/Beneficios';
import TablaNutricional from './Project/components/sections/TablaNutricional';
import Equipo from './Project/components/sections/Equipo';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-800 overflow-hidden">
      <Navegacion />
      <InicioBienvenido />
      <Informacion />
      <Beneficios />
      <TablaNutricional />
      <Equipo />
      <CreditoEnlace />
    </main>
  );
}