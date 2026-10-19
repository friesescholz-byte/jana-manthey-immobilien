import React, { useState } from 'react';
import { X, MapPin, Maximize2, BedDouble, Calendar, Zap, Check, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function PropertyDetailModal({ property, onClose }) {
  const [inquirySent, setInquirySent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', note: '' });

  if (!property) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setInquirySent(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative w-full max-w-4xl bg-[#FBF9F5] rounded-3xl shadow-2xl border border-sand-300 overflow-hidden z-10 max-h-[90vh] flex flex-col animate-fadeIn">
        
        {/* Sticky Header with Close Button */}
        <div className="flex items-center justify-between px-6 py-4 bg-white border-b border-sand-300">
          <div>
            <span className="text-[10px] uppercase tracking-wider font-semibold text-accent">
              {property.type}
            </span>
            <h3 className="font-serif text-xl sm:text-2xl text-slate-950 font-normal">
              {property.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-900 rounded-full hover:bg-sand-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
          
          {/* Main Photo */}
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-sand-200 shadow-subtle border border-sand-300">
            <img
              src={property.image}
              alt={property.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-4">
              <span className="bg-slate-950/80 backdrop-blur-md text-white text-base sm:text-lg font-semibold px-4 py-2 rounded-lg">
                {property.price}
              </span>
            </div>
          </div>

          {/* Quick Specs Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-2xl bg-white border border-sand-300/80">
            <div>
              <p className="text-[11px] text-slate-500 uppercase tracking-wider">Standort</p>
              <p className="text-sm font-semibold text-slate-900 mt-0.5">{property.location}</p>
            </div>
            <div>
              <p className="text-[11px] text-slate-500 uppercase tracking-wider">Wohnfläche</p>
              <p className="text-sm font-semibold text-slate-900 mt-0.5">{property.area}</p>
            </div>
            <div>
              <p className="text-[11px] text-slate-500 uppercase tracking-wider">Zimmer</p>
              <p className="text-sm font-semibold text-slate-900 mt-0.5">{property.rooms}</p>
            </div>
            <div>
              <p className="text-[11px] text-slate-500 uppercase tracking-wider">Verfügbarkeit</p>
              <p className="text-sm font-semibold text-slate-900 mt-0.5">{property.completion}</p>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="font-serif text-xl text-slate-950 mb-3">Objektbeschreibung</h4>
            <p className="text-slate-600 text-sm sm:text-base font-light leading-relaxed">
              {property.description}
            </p>
          </div>

          {/* Features / Highlights */}
          {property.features && (
            <div>
              <h4 className="font-serif text-xl text-slate-950 mb-3">Ausstattungs-Highlights</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {property.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700">
                    <div className="w-4 h-4 rounded-full bg-sand-200 flex items-center justify-center text-slate-900 shrink-0">
                      <Check className="w-2.5 h-2.5" />
                    </div>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Energetische Daten & Provision */}
          {property.details && (
            <div className="p-5 rounded-2xl bg-sand-200/50 border border-sand-300 space-y-2 text-xs text-slate-700">
              <div className="flex justify-between py-1 border-b border-sand-300/50">
                <span className="text-slate-500">Energieeffizienzklasse:</span>
                <span className="font-semibold text-slate-900">{property.details.energyRating}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-sand-300/50">
                <span className="text-slate-500">Heizungsart:</span>
                <span className="font-semibold text-slate-900">{property.details.heatingType}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-sand-300/50">
                <span className="text-slate-500">Baujahr:</span>
                <span className="font-semibold text-slate-900">{property.details.yearBuilt}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-slate-500">Käuferprovision:</span>
                <span className="font-semibold text-slate-900">{property.details.commission}</span>
              </div>
            </div>
          )}

          {/* Exposé anfragen Formular */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white border border-sand-300 shadow-subtle">
            <h4 className="font-serif text-xl text-slate-950 mb-2">
              Ausführliches Exposé anfordern oder Besichtigung vereinbaren
            </h4>
            <p className="text-slate-500 text-xs font-light mb-6">
              Hinterlassen Sie Ihre Kontaktdaten. Ich sende Ihnen unverzüglich alle Unterlagen zu diesem Objekt.
            </p>

            {inquirySent ? (
              <div className="py-6 text-center">
                <CheckCircle2 className="w-8 h-8 text-slate-900 mx-auto mb-2" />
                <p className="font-medium text-slate-900 text-sm">Vielen Dank für Ihre Anfrage!</p>
                <p className="text-xs text-slate-500 mt-1">Das Exposé und die Grundrisse werden für Sie vorbereitet.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    required
                    placeholder="Ihr Name *"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-sand-300 bg-sand-50/50 text-xs text-slate-900 focus:outline-none focus:border-slate-900 focus:bg-white"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Ihre E-Mail *"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-sand-300 bg-sand-50/50 text-xs text-slate-900 focus:outline-none focus:border-slate-900 focus:bg-white"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="tel"
                    placeholder="Telefonnummer"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-sand-300 bg-sand-50/50 text-xs text-slate-900 focus:outline-none focus:border-slate-900 focus:bg-white"
                  />
                  <input
                    type="text"
                    placeholder="Anmerkung (z. B. Besichtigungswunsch)"
                    value={form.note}
                    onChange={(e) => setForm({ ...form, note: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-sand-300 bg-sand-50/50 text-xs text-slate-900 focus:outline-none focus:border-slate-900 focus:bg-white"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-slate-900 text-white hover:bg-slate-800 py-3 rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors shadow-subtle"
                >
                  <span>Exposé kostenfrei anfordern</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
