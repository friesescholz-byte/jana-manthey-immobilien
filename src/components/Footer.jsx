import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer({ onNavigate }) {
  return (
    <footer className="bg-[#121715] text-[#FBF9F5] pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Logo & Markenclaim - 2 Spalten */}
          <div className="lg:col-span-2">
            <img
              src="https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/Jana%20Manthey%20Immobilien/JM_Logo_white_05.webp"
              alt="Jana Manthey Immobilien"
              className="h-12 w-auto object-contain mb-5"
            />
            <p className="text-white/65 text-xs sm:text-sm font-light leading-relaxed max-w-sm mb-6">
              Klare, fundierte Immobilienberatung und verlässlicher Neubauvertrieb für Hannover und ganz Niedersachsen. Transparent, persönlich und verbindlich.
            </p>
            <p className="text-white/40 text-[11px] font-light">
              Inhaberin: Jana Manthey (Geprüfte Immobilienkauffrau)
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-sand-400 mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-white/70">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-white transition-colors">
                  Startseite
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('angebote')} className="hover:text-white transition-colors">
                  Immobilienangebote
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('bautraeger')} className="hover:text-white transition-colors">
                  Bauträger & Neubauvertrieb
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('ueber-mich')} className="hover:text-white transition-colors">
                  Über Jana Manthey
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('aktuelles')} className="hover:text-white transition-colors">
                  Aktuelles & Ratgeber
                </button>
              </li>
            </ul>
          </div>

          {/* Schwerpunkte */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-sand-400 mb-4">
              Leistungen
            </h4>
            <ul className="space-y-2.5 text-xs text-white/70">
              <li>Wohnimmobilien Verkauf</li>
              <li>Eigentumswohnungen & Häuser</li>
              <li>Projektentwicklung & Neubau</li>
              <li>Diskrete Vermarktung</li>
              <li>Kostenlose Marktwertermittlung</li>
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-sand-400 mb-4">
              Direktkontakt
            </h4>
            <ul className="space-y-3 text-xs text-white/70">
              <li className="flex items-center gap-2.5">
                <Phone className="w-3.5 h-3.5 text-sand-400" />
                <a href="tel:05114371677" className="hover:text-white transition-colors">
                  0511 . 43 71 677
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-3.5 h-3.5 text-sand-400" />
                <a href="tel:016098164344" className="hover:text-white transition-colors">
                  0160 . 98 164 344
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-3.5 h-3.5 text-sand-400" />
                <a href="mailto:info@jana-manthey-immobilien.de" className="hover:text-white transition-colors">
                  info@jana-manthey-immobilien.de
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-white/50 pt-1">
                <MapPin className="w-3.5 h-3.5 text-sand-400 shrink-0 mt-0.5" />
                <span>Hannover & ganz Niedersachsen</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-white/50">
          <p>© {new Date().getFullYear()} Jana Manthey Immobilien. Alle Rechte vorbehalten.</p>
          <div className="flex items-center space-x-6">
            <button onClick={() => onNavigate('impressum')} className="hover:text-white transition-colors">
              Impressum
            </button>
            <button onClick={() => onNavigate('datenschutz')} className="hover:text-white transition-colors">
              Datenschutz
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
