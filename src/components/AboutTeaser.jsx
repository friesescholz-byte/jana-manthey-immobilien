import React from 'react';
import { ArrowRight, Award, Check } from 'lucide-react';

export default function AboutTeaser({ onNavigate }) {
  return (
    <section className="py-24 sm:py-32 bg-[#F5F2EB] border-y border-sand-300/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Bildkomposition (Reportage-Fotografie Simona Bednarek) - 5 Spalten */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-card border border-sand-300 aspect-[3/4] bg-sand-200">
              <img
                src="https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/Jana%20Manthey%20Immobilien/Jana-Manthey-Reportage-2025_c_Simona-Bednarek_WEB-01_03.webp"
                alt="Jana Manthey im Gespräch"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            
            {/* Minimalistischer Trust-Badge */}
            <div className="absolute -bottom-6 -right-6 hidden sm:block bg-white p-5 rounded-xl border border-sand-300 shadow-card max-w-[220px]">
              <div className="flex items-center gap-2 mb-1 text-slate-900">
                <Award className="w-4 h-4 text-accent" />
                <span className="text-xs font-semibold uppercase tracking-wider">Qualifikation</span>
              </div>
              <p className="text-[12px] text-slate-600 font-light leading-snug">
                Geprüfte Immobilienkauffrau & Vertriebsführung
              </p>
            </div>
          </div>

          {/* Textbereich - 7 Spalten */}
          <div className="lg:col-span-7">
            <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-slate-500 block mb-3">
              Ihre Ansprechpartnerin
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-slate-950 font-normal tracking-tight mb-6 leading-[1.1]">
              Immobilienvermittlung ist Vertrauenssache.
            </h2>

            <div className="space-y-4 text-slate-600 text-sm sm:text-base font-light leading-relaxed mb-8">
              <p>
                Seit über zwei Jahrzehnten begleite ich Menschen und Projekte in der Region Hannover und ganz Niedersachsen. Für mich ist eine Immobilie kein abstraktes Produkt – sie ist ein Lebensraum, ein Neuanfang oder das Fundament einer soliden Vermögensanlage.
              </p>
              <p>
                Genau deshalb verzichte ich bewusst auf Großbüro-Anonymität: Bei mir haben Sie vom ersten Kennenlernen bis zum Notartermin eine feste, hochqualifizierte Ansprechpartnerin. Ich hinterfrage, denke mit und spreche Dinge offen an – für ein Ergebnis, das auf ganzer Linie überzeugt.
              </p>
            </div>

            {/* 3 klare Differenzierungsmerkmale */}
            <div className="space-y-3 mb-10 text-sm text-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-sand-200 flex items-center justify-center text-slate-900 shrink-0">
                  <Check className="w-3 h-3" />
                </div>
                <span>Keine wechselnden Assistenten: Persönliche Betreuung durch die Inhaberin</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-sand-200 flex items-center justify-center text-slate-900 shrink-0">
                  <Check className="w-3 h-3" />
                </div>
                <span>Fundierte Wertermittlung & zielgenaue Vermarktungsstrategie</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-sand-200 flex items-center justify-center text-slate-900 shrink-0">
                  <Check className="w-3 h-3" />
                </div>
                <span>Gewachsenes Netzwerk zu Notaren, Banken, Architekten & Handwerkern</span>
              </div>
            </div>

            {/* Button */}
            <button
              onClick={() => onNavigate('ueber-mich')}
              className="inline-flex items-center gap-2 bg-slate-900 text-white hover:bg-slate-800 px-6 py-3.5 rounded-lg text-sm font-medium transition-all shadow-subtle group"
            >
              <span>Werdegang & Philosophie kennenlernen</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
