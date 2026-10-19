import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Compass, Layers, LineChart, Target, ShieldCheck, Phone } from 'lucide-react';

export default function Bautraeger() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [form, setForm] = useState({ company: '', contact: '', email: '', phone: '', projectInfo: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const services = [
    {
      icon: Target,
      title: "Zielgruppen- & Mikromarktanalyse",
      desc: "Wer kauft an diesem Standort? Wir analysieren die lokale Nachfrage, Preiselastizitäten und Zielgruppenbedürfnisse noch vor Einreichung der Bauanträge."
    },
    {
      icon: Layers,
      title: "Produkt- & Grundrissoptimierung",
      desc: "Wir prüfen Wohnungsgrößen, Raumaufteilungen und Ausstattungsstandards aus Vertriebs- und Nutzersicht. Ein optimaler Grundriss verkauft sich doppelt so schnell."
    },
    {
      icon: LineChart,
      title: "Differenzierte Preisstrategie",
      desc: "Keine pauschalen Quadratmeterpreise: Wir staffeln Preise nach Lage im Baukörper, Sonnenausrichtung, Etage und Freiraumqualitäten für maximale Gesamterlöse."
    },
    {
      icon: Compass,
      title: "Objekt-Storytelling & Exposé-Marketing",
      desc: "Vom aussagekräftigen Projektnamen über fotorealistische Visualisierungen bis zu ansprechenden Broschüren schaffen wir eine unverwechselbare Markenidentität."
    },
    {
      icon: ShieldCheck,
      title: "Lückenlose Verkaufsabwicklung",
      desc: "Käuferqualifizierung, Bonitätsprüfungen vor Reservierung, Koordination von Sonderwünschen und persönliche Begleitung zur Beurkundung beim Notar."
    }
  ];

  return (
    <div className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section */}
        <div className="max-w-4xl mb-20">
          <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-slate-500 block mb-3">
            B2B-Spezialkompetenz • Region Hannover & Niedersachsen
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-slate-950 font-normal leading-[1.08] tracking-tight mb-6">
            Bauträger & Neubauvertrieb: <br />
            <span className="italic text-slate-700">Erfolg beginnt vor dem ersten Spatenstich.</span>
          </h1>
          <p className="text-slate-600 text-base sm:text-lg font-light leading-relaxed max-w-3xl mb-8">
            Die meisten Neubauprojekte scheitern nicht an der Architektur, sondern am verspäteten Vertrieb. Wir verbinden über 20 Jahre Vertriebsleitung mit tiefem Verständnis für Projektentwickler, Finanzierungspartner und anspruchsvolle Käufer.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#anfrage"
              className="inline-flex items-center gap-2 bg-slate-900 text-white hover:bg-slate-800 px-6 py-3.5 rounded-lg text-sm font-medium transition-all shadow-subtle"
            >
              <span>Projekt anfragen & Kennenlernen vereinbaren</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="tel:05114371677"
              className="inline-flex items-center gap-2 border border-sand-400 bg-white hover:border-slate-900 text-slate-800 px-6 py-3.5 rounded-lg text-sm font-medium transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Direkt durchwählen: 0511 . 43 71 677</span>
            </a>
          </div>
        </div>

        {/* 5-Phasen-Matrix */}
        <div className="mb-24">
          <div className="text-left mb-12">
            <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-slate-500 block mb-2">
              Leistungsspektrum
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-slate-950 font-normal">
              Unser systematischer Vertriebsansatz
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-8 rounded-2xl bg-white border border-sand-300 shadow-subtle hover:shadow-card transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-sand-100 flex items-center justify-center text-slate-900 mb-6">
                      <Icon className="w-6 h-6" strokeWidth={1.5} />
                    </div>
                    <h3 className="font-serif text-2xl text-slate-950 font-normal mb-3">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-sm font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}

            {/* Vertrauens-Box */}
            <div className="p-8 rounded-2xl bg-[#171E1B] text-white flex flex-col justify-between">
              <div>
                <span className="text-xs uppercase tracking-widest text-sand-300 block mb-4">
                  Erfolgsbilanz
                </span>
                <p className="font-serif text-3xl sm:text-4xl font-normal leading-snug mb-4">
                  Über 30 begleitete Bauvorhaben
                </p>
                <p className="text-white/70 text-sm font-light leading-relaxed">
                  Von der innerstädtischen Nachverdichtung mit 6 Wohneinheiten bis zum Quartier mit über 60 Eigentumswohnungen.
                </p>
              </div>
              <div className="pt-6 border-t border-white/10 text-xs text-sand-300">
                Verbindlich. Termintreu. Inhabergeführt.
              </div>
            </div>
          </div>
        </div>

        {/* Bauträger-Kontaktformular */}
        <div id="anfrage" className="bg-white rounded-3xl p-8 sm:p-12 lg:p-16 border border-sand-300 shadow-card">
          <div className="max-w-2xl mb-10">
            <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-slate-500 block mb-2">
              Direkter Draht
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-slate-950 font-normal mb-3">
              Erstgespräch für Ihr Neubauvorhaben
            </h2>
            <p className="text-slate-600 text-sm font-light leading-relaxed">
              Sie planen ein Wohnungsbauprojekt in Hannover, der Region oder Niedersachsen? Sprechen wir unverbindlich über Potenzial, Zielgruppen und Vertriebsstrategie.
            </p>
          </div>

          {formSubmitted ? (
            <div className="py-10 text-center">
              <CheckCircle2 className="w-10 h-10 text-slate-900 mx-auto mb-3" />
              <h3 className="font-serif text-2xl text-slate-950 mb-1">Vielen Dank für Ihre Projektanfrage</h3>
              <p className="text-slate-600 text-sm font-light">
                Ich melde mich zeitnah für ein persönliches Kennenlernen bei Ihnen.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-4xl">
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">Unternehmen / Bauträger *</label>
                <input
                  type="text"
                  required
                  placeholder="z. B. Muster Bauträger GmbH"
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-sand-300 bg-sand-50/50 text-sm text-slate-900 focus:outline-none focus:border-slate-900 focus:bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">Ansprechpartner *</label>
                <input
                  type="text"
                  required
                  placeholder="Vor- und Nachname"
                  value={form.contact}
                  onChange={(e) => setForm({ ...form, contact: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-sand-300 bg-sand-50/50 text-sm text-slate-900 focus:outline-none focus:border-slate-900 focus:bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">E-Mail-Adresse *</label>
                <input
                  type="email"
                  required
                  placeholder="name@unternehmen.de"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-sand-300 bg-sand-50/50 text-sm text-slate-900 focus:outline-none focus:border-slate-900 focus:bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">Telefonnummer *</label>
                <input
                  type="tel"
                  required
                  placeholder="0511 1234567"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-sand-300 bg-sand-50/50 text-sm text-slate-900 focus:outline-none focus:border-slate-900 focus:bg-white"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-medium text-slate-700 mb-1">Eckdaten zum Projekt (Ort, geplante Einheiten, Status)</label>
                <textarea
                  rows={4}
                  placeholder="z. B. 12 Eigentumswohnungen in Hannover-List, Baubeginn Q2/2027..."
                  value={form.projectInfo}
                  onChange={(e) => setForm({ ...form, projectInfo: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-sand-300 bg-sand-50/50 text-sm text-slate-900 focus:outline-none focus:border-slate-900 focus:bg-white resize-none"
                />
              </div>

              <div className="sm:col-span-2 pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-xs text-slate-500 font-light">
                  Vertraulichkeit und Diskretion sind selbstverständlich garantiert.
                </p>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 bg-slate-900 text-white hover:bg-slate-800 px-7 py-3.5 rounded-lg text-sm font-medium transition-all shadow-subtle"
                >
                  <span>Anfrage senden</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
