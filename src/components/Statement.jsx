import React from 'react';
import { motion } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1];

export default function Statement({ onNavigate }) {
  return (
    <section className="py-24 sm:py-32 bg-[#F5F2EB] border-y border-sand-300/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Kicker */}
        <div className="text-center mb-8">
          <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-slate-500">
            Haltung & Positionierung
          </span>
        </div>

        {/* Zitat / Großes Statement */}
        <blockquote className="text-center mb-12">
          <p className="font-serif text-3xl sm:text-5xl lg:text-6xl text-slate-950 font-normal leading-[1.15] max-w-4xl mx-auto tracking-tight">
            „Eine Immobilie kauft man mit Kopf und Bauch. <br />
            <span className="italic font-light text-slate-700">
              Makeln ist für mich keine Massenabfertigung.“
            </span>
          </p>
        </blockquote>

        {/* 2-Spaltige redaktionelle Vertiefung */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-14 text-slate-700 text-sm sm:text-base font-light leading-relaxed pt-6 border-t border-sand-300">
          <div>
            <h4 className="font-medium text-slate-900 mb-2 font-serif text-xl">
              Erfolg braucht Vertrieb.
            </h4>
            <p>
              Warum funktioniert die eine Immobilie sofort am Markt – und die andere bleibt trotz guter Lage und hohem Budget hinter ihren Möglichkeiten zurück? Die Antwort liegt selten allein im Bauwerk. Sie liegt in der Vertriebsstrategie. Ich denke Immobilienvertrieb vom Ende her: Wer wird hier leben? Welcher Preis ist marktrealistisch? Und wie wird aus Interesse eine überzeugte Entscheidung?
            </p>
          </div>

          <div>
            <h4 className="font-medium text-slate-900 mb-2 font-serif text-xl">
              Persönlich von Mensch zu Mensch.
            </h4>
            <p>
              Hinter jeder Immobilie stehen persönliche Erinnerungen, Neuanfänge oder bedeutende finanzielle Weichenstellungen. Ob Sie Ihr langjähriges Familiendomizil veräußern oder als Bauträger ein Großprojekt kalkulieren: Sie sprechen bei mir immer direkt mit der Inhaberin. Ohne wechselnde Sachbearbeiter, sondern mit verbindlicher Betreuung bis zum Notar.
            </p>
          </div>
        </div>

        {/* Signatur */}
        <div className="mt-12 text-center">
          <p className="font-serif text-2xl text-slate-900 italic">Jana Manthey</p>
          <p className="text-xs uppercase tracking-widest text-slate-500 mt-1">Inhaberin & Geprüfte Immobilienkauffrau</p>
        </div>

      </div>
    </section>
  );
}
