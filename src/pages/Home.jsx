import React from 'react';
import Hero from '../components/Hero';
import AboutJanaShort from '../components/AboutJanaShort';
import TopProperties from '../components/TopProperties';
import BautraegerSection from '../components/BautraegerSection';
import EvaluationSection from '../components/EvaluationSection';
import Testimonials from '../components/Testimonials';
import ContactSection from '../components/ContactSection';

export default function Home({ onNavigate, onSelectProperty, onOpenEvaluation }) {
  return (
    <div>
      {/* 1. Hero mit sanfter Einfluganimation & monumentalem Schriftbild */}
      <Hero 
        onNavigate={onNavigate} 
      />

      {/* 2. Zweiter Abschnitt: Jana Manthey – kurz, clean & modern */}
      <AboutJanaShort 
        onNavigate={onNavigate} 
      />

      {/* 3. Top-Objekte – Clean & Hochwertig */}
      <TopProperties 
        onSelectProperty={onSelectProperty} 
        onNavigate={onNavigate} 
      />

      {/* 4. Bauträger & Neubauvertrieb – Diskrete B2B-Kompetenz */}
      <BautraegerSection 
        onNavigate={onNavigate} 
      />

      {/* 5. Kostenlose Wertermittlung für Eigentümer */}
      <EvaluationSection />

      {/* 6. Kundenstimmen & Vertrauen */}
      <Testimonials />

      {/* 7. Kontakt & Suchauftrag */}
      <ContactSection />
    </div>
  );
}
