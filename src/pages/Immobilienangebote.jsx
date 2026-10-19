import React, { useState } from 'react';
import { properties } from '../data/properties';
import { MapPin, Maximize2, BedDouble, Filter } from 'lucide-react';

export default function Immobilienangebote({ onSelectProperty, onOpenEvaluation }) {
  const [filter, setFilter] = useState('all');

  const filtered = properties.filter((p) => {
    if (filter === 'all') return true;
    if (filter === 'kauf') return p.category === 'kauf' && !p.isNeubau;
    if (filter === 'miete') return p.category === 'miete';
    if (filter === 'neubau') return p.isNeubau;
    return true;
  });

  return (
    <div className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-slate-500 block mb-3">
            Aktuelles Portfolio
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl text-slate-950 font-normal tracking-tight mb-4">
            Immobilienangebote
          </h1>
          <p className="text-slate-600 text-base sm:text-lg font-light leading-relaxed">
            Häuser, Eigentumswohnungen und Neubau-Einheiten in der Region Hannover und ganz Niedersachsen. Geprüfte Qualität, transparente Daten und persönliche Begleitung.
          </p>
        </div>

        {/* Filter Bar (Ruhig & Clean, keine bunte Kachelflut) */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-8 mb-10 border-b border-sand-300">
          <div className="flex items-center gap-2">
            {[
              { id: 'all', label: 'Alle Objekte' },
              { id: 'kauf', label: 'Kaufen' },
              { id: 'miete', label: 'Mieten' },
              { id: 'neubau', label: 'Neubauprojekte' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`px-4 py-2 rounded-lg text-xs font-medium transition-all ${
                  filter === tab.id
                    ? 'bg-slate-900 text-white shadow-subtle'
                    : 'bg-sand-200/80 text-slate-700 hover:bg-sand-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <span className="text-xs text-slate-500">
            {filtered.length} {filtered.length === 1 ? 'Angebot gefunden' : 'Angebote gefunden'}
          </span>
        </div>

        {/* Property Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((prop) => (
            <div
              key={prop.id}
              onClick={() => onSelectProperty(prop)}
              className="group cursor-pointer rounded-2xl overflow-hidden bg-white border border-sand-300/80 shadow-subtle hover:shadow-card hover:border-sand-400 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-sand-200">
                  <img
                    src={prop.image}
                    alt={prop.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-slate-950/75 backdrop-blur-md text-white text-[10px] font-medium tracking-wide uppercase px-2.5 py-1 rounded-md">
                      {prop.type}
                    </span>
                  </div>
                  <div className="absolute bottom-3 right-3">
                    <span className="bg-white/95 backdrop-blur-md text-slate-950 text-xs font-semibold px-3 py-1 rounded-md shadow-sm">
                      {prop.price}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-1.5 text-slate-500 text-xs mb-2">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{prop.location}</span>
                  </div>

                  <h3 className="font-serif text-xl text-slate-950 font-normal mb-2 group-hover:text-accent transition-colors">
                    {prop.title}
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm font-light leading-relaxed line-clamp-2 mb-4">
                    {prop.description}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-4 border-t border-sand-200 flex items-center justify-between text-xs text-slate-700">
                <div className="flex items-center gap-1.5">
                  <Maximize2 className="w-3.5 h-3.5 text-slate-400" />
                  <span>{prop.area}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <BedDouble className="w-3.5 h-3.5 text-slate-400" />
                  <span>{prop.rooms}</span>
                </div>
                <span className="text-slate-950 font-medium group-hover:translate-x-0.5 transition-transform">
                  Details &rarr;
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Teaser für Suchauftrag / Eigentümer */}
        <div className="mt-20 p-8 sm:p-12 rounded-3xl bg-[#F5F2EB] border border-sand-300 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-serif text-2xl text-slate-950 mb-2">
              Nicht das passende Objekt gefunden?
            </h3>
            <p className="text-slate-600 text-sm font-light max-w-xl">
              Viele unserer Immobilien vermitteln wir diskret vor dem öffentlichen Erscheinen. Legen Sie jetzt Ihren kostenfreien Suchauftrag bei uns an.
            </p>
          </div>
          <button
            onClick={onOpenEvaluation}
            className="inline-flex items-center gap-2 bg-slate-900 text-white hover:bg-slate-800 px-6 py-3 rounded-lg text-sm font-medium transition-colors shrink-0"
          >
            Suchauftrag anlegen
          </button>
        </div>

      </div>
    </div>
  );
}
