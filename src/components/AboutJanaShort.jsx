import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';

const ease = [0.22, 1, 0.36, 1];

export default function AboutJanaShort({ onNavigate }) {
  return (
    <section className="relative pt-10 pb-24 sm:pt-14 sm:pb-32 bg-[#EFECE6] text-slate-900 border-b border-sand-300">
      
      {/* Feiner architektonischer Linien-Übergang vom Hero */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 mb-14 sm:mb-20">
        <div className="flex items-center justify-center gap-4 sm:gap-6">
          <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-[#D0C9BD] to-[#C5A880]/60" />
          <div className="flex items-center gap-2.5 text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-slate-500 font-medium">
            <span className="w-1.5 h-1.5 rotate-45 border border-[#C5A880] bg-transparent inline-block" />
            <span className="font-serif italic text-xs sm:text-sm text-slate-700">Persönliche Immobilienberatung</span>
            <span className="w-1.5 h-1.5 rotate-45 border border-[#C5A880] bg-transparent inline-block" />
          </div>
          <div className="flex-1 h-[1px] bg-gradient-to-l from-transparent via-[#D0C9BD] to-[#C5A880]/60" />
        </div>
        <div className="w-44 sm:w-72 h-[1px] bg-[#DDD8CC] mx-auto mt-2.5" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Bild: Porträt von Jana Manthey im blauen Blazer - 5 Spalten */}
          <motion.div 
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.85, ease }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-card border border-[#D5D0C5] bg-[#DDD8CC] aspect-[3/4] max-w-md mx-auto lg:max-w-none">
              <img
                src="https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/Jana%20Manthey%20Immobilien/Jana-Manthey-Reportage-2025_c_Simona-Bednarek_WEB-19_04.webp"
                alt="Jana Manthey – Geprüfte Immobilienkauffrau Hannover"
                className="w-full h-full object-cover object-top"
                loading="lazy"
              />

              {/* Dezent platziertes Logo oben rechts mit weichem Schatten */}
              <div className="absolute top-4 right-4 sm:top-5 sm:right-5 z-10 pointer-events-none">
                <img
                  src="https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/Jana%20Manthey%20Immobilien/JM_Logo_dark.webp"
                  alt="Jana Manthey Immobilien Logo"
                  className="w-24 sm:w-28 h-auto object-contain drop-shadow-[0_2px_8px_rgba(0,0,0,0.16)]"
                />
              </div>
            </div>
          </motion.div>

          {/* Text: Kurz, clean & hochklassig (7 Spalten) */}
          <motion.div 
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.85, delay: 0.1, ease }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            {/* Headline in Sorts Mill Goudy */}
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-[54px] text-slate-950 font-normal leading-[1.14] tracking-tight mb-6 sm:mb-8">
              „Hinter jeder Immobilie stehen Menschen, <br className="hidden sm:inline" />
              <span className="italic text-slate-700">Erinnerungen und Zukunftsträume.“</span>
            </h2>

            {/* Prägnanter, gestraffter Fließtext */}
            <p className="text-slate-700 text-sm sm:text-base font-light leading-relaxed mb-8 max-w-2xl">
              Makeln ist für mich keine Massenabfertigung, sondern eine sehr persönliche Aufgabe. Seit über zwei Jahrzehnten begleite ich Eigentümer und Sucher in Hannover und ganz Niedersachsen mit fundierter Marktkenntnis und echter Verbindlichkeit auf Augenhöhe.
            </p>

            {/* 3 klare Kernpunkte – clean & editorial im Raster */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 pb-2 border-t border-[#D5D0C5] mb-8">
              <div>
                <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-slate-500 block mb-1">
                  Persönlich
                </span>
                <span className="text-xs sm:text-[13px] text-slate-800 leading-snug block">
                  Feste Begleitung von der Wertermittlung bis zum Notar
                </span>
              </div>
              <div>
                <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-slate-500 block mb-1">
                  Fundiert
                </span>
                <span className="text-xs sm:text-[13px] text-slate-800 leading-snug block">
                  Zielgerichtete Strategie & tiefe Marktkenntnis vor Ort
                </span>
              </div>
              <div>
                <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-slate-500 block mb-1">
                  Erfahren
                </span>
                <span className="text-xs sm:text-[13px] text-slate-800 leading-snug block">
                  Über 20 Jahre Praxis & mehr als 30 Bauvorhaben
                </span>
              </div>
            </div>

            {/* Aktionen im Canva-Button-Stil */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => onNavigate('ueber-mich')}
                className="px-7 py-3.5 border border-slate-900 bg-slate-900 text-white hover:bg-slate-800 text-xs sm:text-sm font-medium tracking-[0.2em] uppercase transition-all shadow-subtle flex items-center gap-2 group"
              >
                <span>Mehr erfahren</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => onNavigate('kontakt')}
                className="px-7 py-3.5 border border-slate-400 hover:border-slate-900 text-slate-800 hover:text-slate-950 text-xs sm:text-sm font-medium tracking-[0.2em] uppercase transition-all"
              >
                Kennenlerngespräch
              </button>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
