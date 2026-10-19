import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const ease = [0.22, 1, 0.36, 1];

export default function BautraegerSection({ onNavigate }) {
  const phases = [
    {
      num: "01",
      title: "Vor dem ersten Spatenstich",
      focus: "Markt- & Grundrissoptimierung",
      desc: "Zielgruppen- und Mikromarktanalyse, praxisnahe Überprüfung von Raumaufteilungen, Wohnungsgrößen und Ausstattungsstandards aus Nutzersicht sowie marktgerechte Preisfindung vor Baubeginn."
    },
    {
      num: "02",
      title: "Positionierung & Vorvermarktung",
      focus: "Identität & qualifizierte Käufer",
      desc: "Entwicklung eines eigenständigen Objekt-Storytellings, hochwertige Exposé-Kreation und gezielte Vorabansprache bonitätsgeprüfter Vormerkkunden – ganz ohne Streuverluste."
    },
    {
      num: "03",
      title: "Planungssicherer Abverkauf",
      focus: "Koordination bis zum Notar",
      desc: "Strukturierte Verkaufssteuerung, diskrete Bonitäts- und Finanzierungsprüfung, professionelle Verhandlungsführung und lückenlose persönliche Begleitung aller Käufer bis zur Beurkundung."
    }
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#F6F4EE] text-slate-900 border-t border-b border-[#E3DDD1] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-18">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-6 h-[1px] bg-[#C5A880]" />
            <span className="text-[11px] sm:text-xs uppercase tracking-[0.28em] font-medium text-[#8C6D42]">
              Für Bauträger & Projektentwickler
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-[52px] font-normal leading-[1.12] text-slate-950 tracking-tight mb-6">
            Wer Vertrieb erst zur Vermarktung hinzuzieht,{' '}
            <span className="italic text-[#8C6D42]">verschenkt wertvolles Potenzial.</span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg font-light leading-relaxed">
            Neubauprojekte brauchen von der ersten Skizze an eine klare Marktperspektive. Mit über zwei Jahrzehnten Vertriebserfahrung und mehr als 30 begleiteten Bauvorhaben in Hannover und Niedersachsen verbindet Jana Manthey architektonisches Gespür mit planungssicherem Vertrieb.
          </p>
        </div>

        {/* 2-Spalten Layout: Großes Neubau-Editorial-Bild mit Jana Manthey links & 3 klare Phasen rechts */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Linke Spalte: Hochwertiges Neubau-Foto mit Jana Manthey */}
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.85, ease }}
            className="lg:col-span-6"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-[#DCD5C8] bg-[#EBE7DE]">
              <img
                src="https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/Jana%20Manthey%20Immobilien/jana_neubau_bautraeger.webp"
                alt="Jana Manthey – Professioneller Neubau- und Projektvertrieb für Bauträger"
                className="w-full h-auto aspect-[16/10] sm:aspect-[16/10] object-cover object-center"
                loading="lazy"
              />

              {/* Dezent gestaltetes Architektur-Badge */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5 sm:right-auto bg-[#FBF9F5]/95 backdrop-blur-md border border-[#E5E0D5] py-2.5 px-4 rounded-xl shadow-sm">
                <p className="text-[11px] uppercase tracking-[0.2em] font-semibold text-slate-900">
                  Neubau & Projektvertrieb
                </p>
                <p className="text-xs text-slate-600 font-light">
                  30+ Bauvorhaben in Hannover & Niedersachsen
                </p>
              </div>
            </div>
          </motion.div>

          {/* Rechte Spalte: Die 3 übersichtlichen Phasen ohne Kachel-Überladung */}
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.85, ease, delay: 0.1 }}
            className="lg:col-span-6 flex flex-col justify-between space-y-6 sm:space-y-8"
          >
            <div className="divide-y divide-[#E2DCD1]">
              {phases.map((phase) => (
                <div key={phase.num} className="py-5 first:pt-0 last:pb-0 group">
                  <div className="flex items-baseline gap-4 mb-2">
                    <span className="font-serif text-2xl sm:text-3xl text-[#C5A880] font-light">
                      {phase.num}
                    </span>
                    <div>
                      <h3 className="text-lg sm:text-xl font-serif text-slate-950 font-normal">
                        {phase.title}
                      </h3>
                      <span className="text-[11px] uppercase tracking-[0.18em] font-medium text-slate-500 block">
                        {phase.focus}
                      </span>
                    </div>
                  </div>
                  <p className="text-slate-600 text-sm sm:text-[14.5px] font-light leading-relaxed pl-10 sm:pl-11">
                    {phase.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-2 pl-0 sm:pl-11">
              <button
                onClick={() => onNavigate('bautraeger')}
                className="inline-flex items-center gap-2.5 bg-slate-950 text-[#F1EFE9] hover:bg-slate-800 px-6 py-3.5 rounded-lg text-xs sm:text-sm font-medium tracking-[0.14em] uppercase transition-all shadow-md group"
              >
                <span>Projektvertrieb anfragen</span>
                <ArrowRight className="w-4 h-4 text-[#C5A880] transition-transform group-hover:translate-x-1" strokeWidth={1.5} />
              </button>
            </div>
          </motion.div>

        </div>

        {/* Bauträger-Kennzahlen – Ruhig, klar & großzügig formatiert */}
        <div className="mt-16 sm:mt-20 pt-10 border-t border-[#E2DCD1] grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <p className="font-serif text-3xl sm:text-4xl lg:text-5xl text-slate-950 font-normal">30+</p>
            <p className="text-slate-600 text-xs sm:text-sm font-light mt-1.5">Erfolgreich begleitete Neubauprojekte</p>
          </div>
          <div>
            <p className="font-serif text-3xl sm:text-4xl lg:text-5xl text-slate-950 font-normal">20+ Jahre</p>
            <p className="text-slate-600 text-xs sm:text-sm font-light mt-1.5">Vertriebserfahrung im Raum Hannover</p>
          </div>
          <div>
            <p className="font-serif text-3xl sm:text-4xl lg:text-5xl text-slate-950 font-normal">100%</p>
            <p className="text-slate-600 text-xs sm:text-sm font-light mt-1.5">Persönliche Inhaberbetreuung</p>
          </div>
          <div>
            <p className="font-serif text-3xl sm:text-4xl lg:text-5xl text-slate-950 font-normal">0%</p>
            <p className="text-slate-600 text-xs sm:text-sm font-light mt-1.5">Streuverlust bei der Käuferzielgruppe</p>
          </div>
        </div>

      </div>
    </section>
  );
}
