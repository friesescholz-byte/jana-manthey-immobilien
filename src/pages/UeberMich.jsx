import React from 'react';
import { ArrowRight, Check, Heart, Shield, Sparkles } from 'lucide-react';

export default function UeberMich({ onNavigate }) {
  return (
    <div className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
          <div className="lg:col-span-6">
            <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-slate-500 block mb-3">
              Über Jana Manthey
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl text-slate-950 font-normal leading-[1.08] tracking-tight mb-6">
              „Makeln ist für mich keine Massenabfertigung, <br />
              <span className="italic text-slate-700">sondern eine sehr persönliche Aufgabe.“</span>
            </h1>
            <p className="text-slate-600 text-base sm:text-lg font-light leading-relaxed mb-6">
              Hinter jeder Immobilie stehen Menschen, Erinnerungen und Zukunftsträume. Ich nehme mir die Zeit, die es braucht, damit Käufer ihr Glück finden, Verkäufer den verdienten Gegenwert erhalten und Bauträger einen verlässlichen Vertrieb erleben.
            </p>
            <div className="p-4 rounded-xl bg-sand-200/70 border border-sand-300 text-slate-800 text-sm font-medium">
              Geprüfte Immobilienkauffrau • Über 20 Jahre Markterfahrung • Hannover & ganz Niedersachsen
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-card border border-sand-300 aspect-[4/5] bg-sand-200">
              <img
                src="https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/Jana%20Manthey%20Immobilien/Jana-Manthey-2025_c_Simona-Bednarek_col_WEB-03_02.webp"
                alt="Jana Manthey Porträt"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Werdegang & Philosophie */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-24 pb-20 border-b border-sand-300">
          <div className="lg:col-span-5">
            <div className="rounded-2xl overflow-hidden shadow-card border border-sand-300 aspect-[3/4] bg-sand-200 mb-6">
              <img
                src="https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/Jana%20Manthey%20Immobilien/Jana-Manthey-Reportage-2025_c_Simona-Bednarek_WEB-19_04.webp"
                alt="Jana Manthey authentische Reportage"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-xs text-slate-500 italic">
              Fotografie: Simona Bednarek Fotografie
            </p>
          </div>

          <div className="lg:col-span-7 space-y-6 text-slate-600 text-base font-light leading-relaxed">
            <h2 className="font-serif text-3xl sm:text-4xl text-slate-950 font-normal">
              Fundiertes Fachwissen trifft auf echte Vertriebserfahrung
            </h2>
            <p>
              Seit über zwei Jahrzehnten beschäftige ich mich intensiv mit Immobilien. Durch fundierte Ausbildung, Studium und langjährige Erfahrung als Führungskraft im Immobilienvertrieb verbinde ich fachliche Solidität mit praktischer Umsetzungsstärke.
            </p>
            <p>
              Dabei bin ich kein Fan von Standardlösungen. Ich hinterfrage, denke mit und spreche Dinge offen an. Wenn es bessere Wege gibt, zeige ich sie auf. Denn eine Immobilie ist weit mehr als Quadratmeter und Mauern: Sie ist Lebensraum, Neuanfang oder die wichtigste Investition des Lebens.
            </p>

            <div className="pt-6">
              <h3 className="font-serif text-2xl text-slate-950 font-normal mb-4">
                Meine vier Grundwerte
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-white border border-sand-300/80">
                  <div className="flex items-center gap-2 font-semibold text-slate-900 text-sm mb-1">
                    <Shield className="w-4 h-4 text-accent" />
                    <span>Verbindlichkeit</span>
                  </div>
                  <p className="text-xs text-slate-500 font-light">Was vereinbart ist, gilt. Feste Zusagen und transparente Kommunikation zu jedem Zeitpunkt.</p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-sand-300/80">
                  <div className="flex items-center gap-2 font-semibold text-slate-900 text-sm mb-1">
                    <Heart className="w-4 h-4 text-accent" />
                    <span>Echte Nahbarkeit</span>
                  </div>
                  <p className="text-xs text-slate-500 font-light">Keine anonymen Hierarchien. Sie haben mich persönlich als feste Ansprechpartnerin.</p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-sand-300/80">
                  <div className="flex items-center gap-2 font-semibold text-slate-900 text-sm mb-1">
                    <Sparkles className="w-4 h-4 text-accent" />
                    <span>Detailgenauigkeit</span>
                  </div>
                  <p className="text-xs text-slate-500 font-light">Sorgfältige Aufbereitung aller Dokumente, Grundrisse und rechtlichen Grundlagen.</p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-sand-300/80">
                  <div className="flex items-center gap-2 font-semibold text-slate-900 text-sm mb-1">
                    <Check className="w-4 h-4 text-accent" />
                    <span>Marktfokus</span>
                  </div>
                  <p className="text-xs text-slate-500 font-light">Wir kalkulieren realistisch und datenbasiert – für planbare Abschlüsse ohne Überraschungen.</p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <button
                onClick={() => onNavigate('kontakt')}
                className="inline-flex items-center gap-2 bg-slate-900 text-white hover:bg-slate-800 px-6 py-3.5 rounded-lg text-sm font-medium transition-colors"
              >
                <span>Persönliches Erstgespräch vereinbaren</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
