import React from 'react';
import { ArrowLeft } from 'lucide-react';

export default function Datenschutz({ onNavigate }) {
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
          Datenschutzerklärung
        </h1>

        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-sand-300 shadow-subtle space-y-8 text-slate-700 font-light text-sm leading-relaxed">
          
          <div>
            <h2 className="font-serif text-2xl text-slate-950 mb-2">1. Datenschutz auf einen Blick</h2>
            <p>Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften (DSGVO, BDSG) sowie dieser Datenschutzerklärung.</p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-slate-950 mb-2">2. Verantwortliche Stelle</h2>
            <p className="font-medium text-slate-900">JANA MANTHEY IMMOBILIEN</p>
            <p>Inhaberin: Jana Manthey</p>
            <p>Hannover, Deutschland</p>
            <p>E-Mail: info@jana-manthey-immobilien.de</p>
            <p>Telefon: 0511 . 43 71 677</p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-slate-950 mb-2">3. Datenerfassung auf dieser Website</h2>
            <h3 className="font-medium text-slate-900 mt-2 mb-1">Kontakt- und Anfrageformulare</h3>
            <p>Wenn Sie uns per Kontaktformular, Exposé-Anforderung oder Wertermittlung Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.</p>
            
            <h3 className="font-medium text-slate-900 mt-4 mb-1">Server-Log-Dateien</h3>
            <p>Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt (Browsertyp, Betriebssystem, Referrer URL, Hostname des zugreifenden Rechners, Uhrzeit der Serveranfrage).</p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-slate-950 mb-2">4. Ihre Rechte</h2>
            <p>Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit an uns wenden.</p>
          </div>

        </div>

      </div>
    </div>
  );
}
