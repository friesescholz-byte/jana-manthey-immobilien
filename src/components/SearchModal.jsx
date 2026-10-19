import React, { useState } from 'react';
import { Search, X, MapPin, ArrowRight } from 'lucide-react';
import { properties } from '../data/properties';
import { articles } from '../data/ratgeber';

export default function SearchModal({ isOpen, onClose, onSelectProperty, onNavigate }) {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const filteredProperties = properties.filter((p) =>
    p.title.toLowerCase().includes(query.toLowerCase()) ||
    p.location.toLowerCase().includes(query.toLowerCase()) ||
    p.type.toLowerCase().includes(query.toLowerCase()) ||
    p.description.toLowerCase().includes(query.toLowerCase())
  );

  const filteredArticles = articles.filter((a) =>
    a.title.toLowerCase().includes(query.toLowerCase()) ||
    a.summary.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 sm:px-6">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />

      {/* Modal Box */}
      <div className="relative w-full max-w-2xl bg-[#FBF9F5] rounded-2xl shadow-2xl border border-sand-300 overflow-hidden z-10 animate-fadeIn">
        
        {/* Search Input Bar */}
        <div className="flex items-center px-5 py-4 border-b border-sand-300 bg-white">
          <Search className="w-5 h-5 text-slate-400 mr-3 shrink-0" strokeWidth={1.75} />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Immobilien, Orte (z. B. List, Zooviertel) oder Ratgeber suchen..."
            className="w-full bg-transparent text-slate-900 text-sm focus:outline-none placeholder:text-slate-400"
          />
          <button 
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-900 rounded-md transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results Area */}
        <div className="p-6 max-h-[60vh] overflow-y-auto space-y-6">
          
          {/* Quick Filters when query is empty */}
          {!query && (
            <div>
              <p className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold mb-3">
                Häufig gesucht
              </p>
              <div className="flex flex-wrap gap-2">
                {['Hannover List', 'Zooviertel', 'Neubau', 'Einfamilienhaus', 'Mietwohnung', 'Marktbericht'].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setQuery(tag)}
                    className="text-xs px-3 py-1.5 rounded-md bg-sand-200/80 hover:bg-sand-300 text-slate-800 transition-colors"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Properties Result */}
          <div>
            <p className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold mb-3">
              Immobilienangebote ({filteredProperties.length})
            </p>
            {filteredProperties.length === 0 ? (
              <p className="text-xs text-slate-500 italic">Keine Immobilien zu diesem Suchbegriff gefunden.</p>
            ) : (
              <div className="space-y-2">
                {filteredProperties.map((p) => (
                  <div
                    key={p.id}
                    onClick={() => {
                      onSelectProperty(p);
                      onClose();
                    }}
                    className="flex items-center justify-between p-3 rounded-lg bg-white border border-sand-300/80 hover:border-slate-400 cursor-pointer transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <img src={p.image} alt={p.title} className="w-12 h-12 rounded-md object-cover" />
                      <div>
                        <p className="text-xs font-semibold text-slate-900 group-hover:text-accent transition-colors">
                          {p.title}
                        </p>
                        <p className="text-[11px] text-slate-500 flex items-center gap-1 mt-0.5">
                          <MapPin className="w-3 h-3" />
                          <span>{p.location}</span> • <span>{p.area}</span>
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xs font-semibold text-slate-900">{p.price}</p>
                      <span className="text-[10px] text-slate-400">{p.type}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Articles Result */}
          {filteredArticles.length > 0 && (
            <div>
              <p className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold mb-3">
                Aktuelles & Ratgeber ({filteredArticles.length})
              </p>
              <div className="space-y-2">
                {filteredArticles.map((a) => (
                  <div
                    key={a.id}
                    onClick={() => {
                      onNavigate('aktuelles');
                      onClose();
                    }}
                    className="p-3 rounded-lg bg-white border border-sand-300/80 hover:border-slate-400 cursor-pointer transition-colors"
                  >
                    <p className="text-xs font-semibold text-slate-900 mb-1">{a.title}</p>
                    <p className="text-[11px] text-slate-500 line-clamp-1">{a.summary}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-sand-300 bg-sand-100 flex items-center justify-between text-[11px] text-slate-500">
          <span>Tipp: Klicken Sie auf ein Objekt für vollständige Eckdaten</span>
          <button 
            onClick={() => {
              onNavigate('angebote');
              onClose();
            }}
            className="font-medium text-slate-900 hover:text-accent flex items-center gap-1"
          >
            Alle Angebote <ArrowRight className="w-3 h-3" />
          </button>
        </div>

      </div>
    </div>
  );
}
