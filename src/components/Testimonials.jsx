import React from 'react';
import { Quote } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      quote: "Frau Manthey hat unser Einfamilienhaus in Hannover-Kirchrode innerhalb von nur sechs Wochen zu unserem Wunschpreis vermittelt. Ihre Marktkenntnis und die diskrete Vorbereitung der Unterlagen waren herausragend.",
      author: "Familie Dr. Lindemann",
      role: "Verkäufer in Hannover-Kirchrode",
      project: "Einfamilienhaus"
    },
    {
      quote: "Für unser Neubauprojekt in der List war Frau Manthey ein echter Glücksgriff. Sie hat bereits bei der Grundrissgestaltung mitgedacht – der anschließende Vorabverkauf lief reibungslos und planmäßig.",
      author: "Michael W. Bruns",
      role: "Projektentwickler & Bauträger",
      project: "14 Neubau-Einheiten"
    },
    {
      quote: "Als Erstkäufer hatten wir viele Fragen zu Finanzierung, Kaufvertrag und Notartermin. Frau Manthey hat uns mit unendlicher Geduld und fachlicher Souveränität durch den gesamten Prozess geführt.",
      author: "Sarah & Johannes K.",
      role: "Käufer Eigentumswohnung",
      project: "Hannover-Südstadt"
    }
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#FBF9F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-slate-500 block mb-3">
            Kundenstimmen & Referenzen
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-slate-950 font-normal tracking-tight">
            Vertrauen entsteht durch Ergebnisse.
          </h2>
        </div>

        {/* 3 Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-white border border-sand-300/80 shadow-subtle flex flex-col justify-between"
            >
              <div>
                <Quote className="w-8 h-8 text-sand-400 mb-6" strokeWidth={1.5} />
                <p className="text-slate-700 text-sm sm:text-base font-light leading-relaxed mb-6 italic">
                  „{rev.quote}“
                </p>
              </div>

              <div className="pt-6 border-t border-sand-200">
                <p className="font-semibold text-slate-950 text-sm">{rev.author}</p>
                <p className="text-slate-500 text-xs font-light mt-0.5">{rev.role}</p>
                <p className="text-accent text-[11px] font-medium mt-1 uppercase tracking-wider">{rev.project}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
