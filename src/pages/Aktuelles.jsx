import React, { useState } from 'react';
import { articles } from '../data/ratgeber';
import { Calendar, Clock, ArrowRight, ArrowLeft } from 'lucide-react';

export default function Aktuelles({ onNavigate }) {
  const [selectedArticle, setSelectedArticle] = useState(null);

  return (
    <div className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-slate-500 block mb-3">
            Wissen & Einblicke
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl text-slate-950 font-normal tracking-tight mb-4">
            Aktuelles & Ratgeber
          </h1>
          <p className="text-slate-600 text-base sm:text-lg font-light leading-relaxed">
            Marktberichte, Zinseinschätzungen und praxiserprobte Tipps rund um Kauf, Verkauf und Neubauvertrieb in Hannover und Niedersachsen.
          </p>
        </div>

        {selectedArticle ? (
          /* Ausführliche Artikelansicht */
          <div className="max-w-3xl mx-auto bg-white rounded-3xl p-8 sm:p-12 border border-sand-300 shadow-card">
            <button
              onClick={() => setSelectedArticle(null)}
              className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-slate-950 mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Zurück zu allen Beiträgen
            </button>

            <div className="flex items-center gap-4 text-xs text-slate-500 mb-4">
              <span className="bg-sand-200 text-slate-800 px-3 py-1 rounded-md font-medium">
                {selectedArticle.category}
              </span>
              <span>{selectedArticle.date}</span>
              <span>•</span>
              <span>{selectedArticle.readTime}</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl text-slate-950 font-normal mb-8 leading-tight">
              {selectedArticle.title}
            </h2>

            <div className="prose prose-slate max-w-none text-slate-700 font-light text-base leading-relaxed space-y-5">
              {selectedArticle.content.split('\n\n').map((par, i) => (
                <p key={i}>{par.trim()}</p>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-sand-300 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-slate-500">
                Haben Sie Fragen zu diesem Thema oder einer konkreten Immobilie?
              </p>
              <button
                onClick={() => onNavigate('kontakt')}
                className="inline-flex items-center gap-2 bg-slate-900 text-white px-5 py-2.5 rounded-lg text-xs font-medium hover:bg-slate-800 transition-colors"
              >
                <span>Persönlich nachfragen</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ) : (
          /* Artikelliste */
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articles.map((art) => (
              <article
                key={art.id}
                onClick={() => {
                  setSelectedArticle(art);
                  window.scrollTo({ top: 200, behavior: 'smooth' });
                }}
                className="group cursor-pointer rounded-2xl bg-white border border-sand-300 p-8 shadow-subtle hover:shadow-card hover:border-slate-400 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-4">
                    <span className="bg-sand-200/80 text-slate-800 px-2.5 py-1 rounded text-[11px] font-medium">
                      {art.category}
                    </span>
                    <span className="flex items-center gap-1 text-[11px]">
                      <Clock className="w-3 h-3" />
                      {art.readTime}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl text-slate-950 font-normal mb-3 group-hover:text-accent transition-colors leading-snug">
                    {art.title}
                  </h3>

                  <p className="text-slate-600 text-sm font-light leading-relaxed mb-6">
                    {art.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-sand-200 flex items-center justify-between text-xs font-medium text-slate-900 group-hover:text-accent transition-colors">
                  <span>Artikel lesen</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </article>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
