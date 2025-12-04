import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Section from "../components/Section";
import ProjectCard from "../components/ProjectCard";
import Footer from "../components/Footer";

import luciernaga1 from "../assets/luciernaga1.jpg";
import luciernaga2 from "../assets/luciernaga2.jpg";
import luciernaga3 from "../assets/luciernaga3.jpg";

// ... imports iguales ...
import { motion } from "framer-motion"; // Importa framer-motion si quieres animar títulos también

export default function Home() {
  return (
    <div className="bg-slate-50 overflow-x-hidden"> {/* Previene scroll horizontal accidental */}
      <Header />
      <Hero /> 

      {/* Secciones Informativas (Fondo Claro) */}
      <main className="max-w-4xl mx-auto px-6 py-24 space-y-32">
        <Section
          id="quienes-somos"
          title="Nuestra Misión"
          text="BioAuralis es una organización dedicada a la conservación de los hábitats naturales..."
        />
        <Section
          id="como-ayudar"
          title="Tu impacto importa"
          text="Podés participar en programas de restauración, apadrinar hábitats..."
        />
      </main>

      {/* Sección Proyectos (Fondo OSCURO para resaltar las fotos) */}
      <div id="proyectos" className="bg-slate-900 py-24 mt-16 relative">
        {/* Decoración de luz de fondo (opcional) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full bg-emerald-500/5 blur-[120px] pointer-events-none" />
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-lime-300 mb-4">
              Nuestros Proyectos
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Descubre cómo estamos devolviendo la luz a nuestros bosques.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <ProjectCard
              image={luciernaga1}
              title="Santuarios de Luz"
              text="Creamos zonas libres de contaminación lumínica para proteger el apareamiento de las luciérnagas."
            />
            <ProjectCard
              image={luciernaga2}
              title="Aula Nocturna"
              text="Talleres educativos bajo las estrellas para reconectar con la biodiversidad nocturna."
            />
            <ProjectCard
              image={luciernaga3}
              title="Ciencia Ciudadana"
              text="Una red de voluntarios que monitorea poblaciones de luciérnagas en tiempo real."
            />
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 pt-16">
         {/* Aquí irá el Contacto renderizado por App.jsx o muévelo aquí dentro si prefieres */}
      </div>

      <Footer />
    </div>
  );
}