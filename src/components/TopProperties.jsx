import React from 'react';
import { motion } from 'framer-motion';
import { properties } from '../data/properties';
import { ArrowRight, MapPin, Maximize2, BedDouble } from 'lucide-react';

const ease = [0.22, 1, 0.36, 1];

export default function TopProperties({ onSelectProperty, onNavigate }) {
  return (
    <section className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div>
            <span className="text-[11px] uppercase tracking-[0.28em] font-semibold text-slate-500 block mb-3">
              Portfolio & Angebote
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-slate-950 font-normal tracking-tight">
              Aktuelle Top-Objekte
            </h2>
          </div>
          <button
            onClick={() => onNavigate('angebote')}
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-800 hover:text-accent transition-colors self-start md:self-auto group"
          >
            <span>Alle Angebote im Portfolio ansehen</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>

        {/* 2x2 Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {properties.slice(0, 4).map((prop, idx) => (
            <motion.div
              key={prop.id}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: idx * 0.08, ease }}
              onClick={() => onSelectProperty(prop)}
              className="group cursor-pointer rounded-2xl overflow-hidden bg-white border border-sand-300/80 shadow-subtle hover:shadow-card hover:border-sand-400 transition-all flex flex-col"
            >
              {/* Image Frame */}
              <div className="relative aspect-[16/10] overflow-hidden bg-sand-200">
                <img
                  src={prop.image}
                  alt={prop.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* Diskrete Kategorie-Kennzeichnung (links oben, schlicht) */}
                <div className="absolute top-4 left-4">
                  <span className="bg-slate-950/75 backdrop-blur-md text-white text-[11px] font-medium tracking-wide uppercase px-3 py-1.5 rounded-md">
                    {prop.type}
                  </span>
                </div>

                {/* Preis-Kennzeichnung (rechts unten, ruhig) */}
                <div className="absolute bottom-4 right-4">
                  <span className="bg-white/95 backdrop-blur-md text-slate-950 text-sm font-semibold px-3.5 py-1.5 rounded-lg shadow-sm">
                    {prop.price}
                  </span>
                </div>
              </div>

              {/* Inhaltsbereich */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-slate-500 text-xs mb-2">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{prop.location}</span>
                  </div>

                  <h3 className="font-serif text-2xl text-slate-950 font-normal mb-3 group-hover:text-accent transition-colors">
                    {prop.title}
                  </h3>

                  <p className="text-slate-600 text-sm font-light leading-relaxed line-clamp-2 mb-6">
                    {prop.description}
                  </p>
                </div>

                {/* Eckdaten - Ruhig & Funktional */}
                <div className="pt-5 border-t border-sand-200 flex items-center justify-between text-xs text-slate-700">
                  <div className="flex items-center gap-1.5">
                    <Maximize2 className="w-3.5 h-3.5 text-slate-400" />
                    <span>{prop.area}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <BedDouble className="w-3.5 h-3.5 text-slate-400" />
                    <span>{prop.rooms}</span>
                  </div>
                  <span className="text-slate-950 font-medium group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
                    Details ansehen &rarr;
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
