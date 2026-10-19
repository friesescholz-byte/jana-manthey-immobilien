import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageSquare, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function ContactSection() {
  const [inquiryType, setInquiryType] = useState('kauf');
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="kontakt" className="py-24 sm:py-32 bg-[#F5F2EB] border-t border-sand-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Linke Spalte: Kontaktdaten & Direkter Draht (5 Spalten) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-slate-500 block mb-3">
                Erstgespräch & Beratung
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl text-slate-950 font-normal tracking-tight mb-6 leading-[1.1]">
                Möchten Sie eine Immobilie kaufen, verkaufen oder planen?
              </h2>
              <p className="text-slate-600 text-sm sm:text-base font-light leading-relaxed mb-10">
                Vereinbaren Sie jetzt ein unverbindliches Erstgespräch. Ich nehme mir die Zeit für Ihr Anliegen und bespreche mit Ihnen die nächsten Schritte.
              </p>

              {/* Kontakt-Kacheln */}
              <div className="space-y-4 text-sm">
                <a
                  href="tel:05114371677"
                  className="flex items-center gap-4 p-4 rounded-xl bg-white border border-sand-300/80 hover:border-slate-400 transition-colors shadow-subtle group"
                >
                  <div className="w-10 h-10 rounded-lg bg-sand-200 flex items-center justify-center text-slate-800 group-hover:bg-slate-900 group-hover:text-white transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-light">Festnetz Hannover</p>
                    <p className="font-medium text-slate-950">0511 . 43 71 677</p>
                  </div>
                </a>

                <a
                  href="tel:016098164344"
                  className="flex items-center gap-4 p-4 rounded-xl bg-white border border-sand-300/80 hover:border-slate-400 transition-colors shadow-subtle group"
                >
                  <div className="w-10 h-10 rounded-lg bg-sand-200 flex items-center justify-center text-slate-800 group-hover:bg-slate-900 group-hover:text-white transition-colors">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-light">Mobil & WhatsApp</p>
                    <p className="font-medium text-slate-950">0160 . 98 164 344</p>
                  </div>
                </a>

                <a
                  href="mailto:info@jana-manthey-immobilien.de"
                  className="flex items-center gap-4 p-4 rounded-xl bg-white border border-sand-300/80 hover:border-slate-400 transition-colors shadow-subtle group"
                >
                  <div className="w-10 h-10 rounded-lg bg-sand-200 flex items-center justify-center text-slate-800 group-hover:bg-slate-900 group-hover:text-white transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-light">E-Mail</p>
                    <p className="font-medium text-slate-950">info@jana-manthey-immobilien.de</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-white border border-sand-300/80 shadow-subtle">
                  <div className="w-10 h-10 rounded-lg bg-sand-200 flex items-center justify-center text-slate-800">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-light">Standort & Wirkungskreis</p>
                    <p className="font-medium text-slate-950">Hannover & ganz Niedersachsen</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Rechte Spalte: Anfrageformular (7 Spalten) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-sand-300 shadow-card">
              
              <h3 className="font-serif text-2xl text-slate-950 font-normal mb-2">
                Nachricht senden oder Suchauftrag anlegen
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm font-light mb-8">
                Füllen Sie die folgenden Zeilen aus – ich melde mich zeitnah bei Ihnen zurück.
              </p>

              {submitted ? (
                <div className="py-12 text-center">
                  <div className="w-12 h-12 bg-sand-200 text-slate-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif text-2xl text-slate-950 mb-2">Nachricht erfolgreich gesendet</h4>
                  <p className="text-slate-600 text-sm font-light">
                    Vielen Dank für Ihre Kontaktaufnahme. Ich werde Ihr Anliegen schnellstmöglich prüfen und mich bei Ihnen melden.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  
                  {/* Art der Anfrage */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">
                      Anliegen
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {[
                        { id: 'kauf', label: 'Immobilie kaufen/mieten' },
                        { id: 'verkauf', label: 'Immobilie verkaufen' },
                        { id: 'bautraeger', label: 'Bauträger & Neubau' },
                        { id: 'sonstiges', label: 'Allgemeine Anfrage' },
                      ].map((item) => (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setInquiryType(item.id)}
                          className={`py-2.5 px-2 rounded-lg text-xs font-medium border text-center transition-all ${
                            inquiryType === item.id
                              ? 'bg-slate-900 text-white border-slate-900'
                              : 'bg-sand-50 text-slate-700 border-sand-300 hover:border-slate-400'
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1.5">
                        Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Ihr vollständiger Name"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-sand-300 bg-sand-50/50 text-slate-900 text-sm focus:outline-none focus:border-slate-900 focus:bg-white transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1.5">
                        E-Mail *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="ihre@email.de"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-sand-300 bg-sand-50/50 text-slate-900 text-sm focus:outline-none focus:border-slate-900 focus:bg-white transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1.5">
                      Telefonnummer (optional für schnellere Rückmeldung)
                    </label>
                    <input
                      type="tel"
                      placeholder="0511 123456"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-sand-300 bg-sand-50/50 text-slate-900 text-sm focus:outline-none focus:border-slate-900 focus:bg-white transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1.5">
                      Ihre Nachricht oder Ihr Suchprofil
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Beschreiben Sie kurz Ihr Vorhaben oder Ihre Suchkriterien (z. B. Stadtteil, Zimmeranzahl, Budget)..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-sand-300 bg-sand-50/50 text-slate-900 text-sm focus:outline-none focus:border-slate-900 focus:bg-white transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <p className="text-slate-500 text-xs font-light">
                      Mit Absenden erklären Sie sich mit der Kontaktaufnahme einverstanden.
                    </p>
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-2 bg-slate-900 text-white hover:bg-slate-800 px-6 py-3.5 rounded-lg text-sm font-medium transition-all shadow-subtle group"
                    >
                      <span>Nachricht absenden</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
