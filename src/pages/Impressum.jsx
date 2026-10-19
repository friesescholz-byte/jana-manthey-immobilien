import React from 'react';
import { ArrowLeft } from 'lucide-react';

export default function Impressum({ onNavigate }) {
  return (
    <div className="py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <button
          onClick={() => onNavigate('home')}
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-slate-950 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Zurück zur Startseite
        </button>

        <h1 className="font-serif text-4xl sm:text-5xl text-slate-950 font-normal mb-8">
          Impressum
        </h1>

        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-sand-300 shadow-subtle space-y-8 text-slate-700 font-light text-sm leading-relaxed">
          
          <div>
            <h2 className="font-serif text-2xl text-slate-950 mb-2">Angaben gemäß § 5 TMG</h2>
            <p className="font-medium text-slate-900">JANA MANTHEY IMMOBILIEN</p>
            <p>Inhaberin: Jana Manthey</p>
            <p>Based in Hannover • Tätig in ganz Niedersachsen</p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-slate-950 mb-2">Kontakt</h2>
            <p>Telefon: 0511 . 43 71 677</p>
            <p>Mobil: 0160 . 98 164 344</p>
            <p>E-Mail: info@jana-manthey-immobilien.de</p>
            <p>Website: www.jana-manthey-immobilien.de</p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-slate-950 mb-2">Aufsichtsbehörde & Berufsrechtliche Regelungen</h2>
            <p>Gewerbeerlaubnis nach § 34c Abs. 1 GewO erteilt durch die zuständige Aufsichtsbehörde der Landeshauptstadt Hannover.</p>
            <p className="mt-1">Berufsbezeichnung: Immobilienkauffrau (Bundesrepublik Deutschland)</p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-slate-950 mb-2">Streitschlichtung</h2>
            <p>Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: https://ec.europa.eu/consumers/odr. Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-slate-950 mb-2">Haftung für Inhalte und Links</h2>
            <p>Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen.</p>
          </div>

        </div>

      </div>
    </div>
  );
}
