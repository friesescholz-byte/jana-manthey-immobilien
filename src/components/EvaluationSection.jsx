import React, { useState } from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export default function EvaluationSection() {
  const [propertyType, setPropertyType] = useState('haus');
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    location: '',
    area: '',
    name: '',
    email: '',
    phone: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-24 sm:py-32 bg-[#FBF9F5]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white rounded-3xl p-8 sm:p-12 lg:p-16 border border-sand-300 shadow-card">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-slate-500 block mb-3">
              Für Eigentümer & Verkäufer
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-slate-950 font-normal tracking-tight mb-4">
              Was ist Ihre Immobilie aktuell wert?
            </h2>
            <p className="text-slate-600 text-sm sm:text-base font-light leading-relaxed">
              Erhalten Sie eine fundierte, realistische Marktwert-Einschätzung Ihres Hauses oder Ihrer Wohnung. Kostenfrei, diskret und persönlich von Ihrer geprüften Immobilienkauffrau.
            </p>
          </div>

          {submitted ? (
            <div className="text-center py-12 px-4 max-w-md mx-auto">
              <div className="w-14 h-14 bg-sand-200 text-slate-900 rounded-full flex items-center justify-center mx-auto mb-5">
                <CheckCircle2 className="w-7 h-7" strokeWidth={1.75} />
              </div>
              <h3 className="font-serif text-2xl text-slate-950 mb-2">
                Vielen Dank für Ihre Anfrage
              </h3>
              <p className="text-slate-600 text-sm font-light leading-relaxed">
                Ich habe Ihre Angaben erhalten und melde mich innerhalb von 24 Stunden persönlich bei Ihnen zur Abstimmung der Bewertung.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-3xl mx-auto space-y-6">
              
              {/* Objektart-Auswahl (Segmented Control) */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-3">
                  1. Um welche Art von Immobilie handelt es sich?
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {[
                    { id: 'haus', label: 'Einfamilienhaus' },
                    { id: 'wohnung', label: 'Eigentumswohnung' },
                    { id: 'mfh', label: 'Mehrfamilienhaus' },
                    { id: 'grundstueck', label: 'Grundstück' },
                  ].map((t) => (
                    <button
                      type="button"
                      key={t.id}
                      onClick={() => setPropertyType(t.id)}
                      className={`py-3 px-3 rounded-lg text-xs font-medium border text-center transition-all ${
                        propertyType === t.id
                          ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                          : 'bg-sand-50 text-slate-700 border-sand-300 hover:border-slate-400'
                      }`}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Eckdaten */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1.5">
                    Standort / PLZ & Ort *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="z. B. 30161 Hannover"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-sand-300 bg-sand-50/50 text-slate-900 text-sm focus:outline-none focus:border-slate-900 focus:bg-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1.5">
                    Ungefähre Wohnfläche (m²)
                  </label>
                  <input
                    type="text"
                    placeholder="z. B. ca. 140 m²"
                    value={formData.area}
                    onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-sand-300 bg-sand-50/50 text-slate-900 text-sm focus:outline-none focus:border-slate-900 focus:bg-white transition-colors"
                  />
                </div>
              </div>

              {/* Kontaktdaten */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1.5">
                    Ihr Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Vor- und Nachname"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-sand-300 bg-sand-50/50 text-slate-900 text-sm focus:outline-none focus:border-slate-900 focus:bg-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1.5">
                    E-Mail-Adresse *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="ihre@email.de"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-sand-300 bg-sand-50/50 text-slate-900 text-sm focus:outline-none focus:border-slate-900 focus:bg-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1.5">
                    Telefonnummer für Rückfragen
                  </label>
                  <input
                    type="tel"
                    placeholder="0170 1234567"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-sand-300 bg-sand-50/50 text-slate-900 text-sm focus:outline-none focus:border-slate-900 focus:bg-white transition-colors"
                  />
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <p className="text-slate-500 text-xs font-light">
                  100% kostenfrei & unverbindlich. Ihre Daten werden streng vertraulich behandelt.
                </p>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 bg-slate-900 text-white hover:bg-slate-800 px-7 py-3.5 rounded-lg text-sm font-medium transition-all shadow-subtle group"
                >
                  <span>Kostenlose Bewertung starten</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
}
