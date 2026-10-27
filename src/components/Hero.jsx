import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const ease = [0.22, 1, 0.36, 1];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease },
  },
};

export default function Hero({ onNavigate }) {
  const heroRef = useRef(null);

  // Subtiler, ultra-cleaner Parallax-Scroll-Effekt
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '14%']);
  const scale = useTransform(scrollYProgress, [0, 1], [1.02, 1.07]);

  return (
    <section ref={heroRef} className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-950">
      
      {/* Hintergrundbild mit sanftem Parallax-Scroll-Effekt: Diagonaler Split (Links: Bauträger / Rechts: Jana im Wohnraum) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div 
          style={{ y, scale }}
          className="w-full h-full relative"
        >
          <img
            src="https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/Jana%20Manthey%20Immobilien/jana_hero_split_diagonal.webp"
            alt="Jana Manthey Immobilien – Bauträger- & Wohnimmobilienberatung"
            className="w-full h-full object-cover object-center"
          />
        </motion.div>
        {/* Warmer Kontrast-Filter für optimale Text- und Button-Lesbarkeit */}
        <div className="absolute inset-0 bg-slate-950/40 backdrop-brightness-[0.93]" />
      </div>

      {/* Zentrierter Hero-Inhalt mit ruhiger Canva-Einfluganimation */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 sm:pt-44 pb-24 sm:pb-28 text-center text-[#F1EFE9]">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center justify-center"
        >
          
          {/* Pretitle / Kicker (Canva Style: THOMAS LARSON GROUP -> JANA MANTHEY IMMOBILIEN) */}
          <motion.div variants={itemVariants} className="mb-6 sm:mb-8">
            <span className="text-[12px] sm:text-[13px] uppercase tracking-[0.3em] font-medium text-[#F1EFE9] block drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]">
              Jana Manthey Immobilien
            </span>
          </motion.div>

          {/* Monumentale Überschrift in Sorts Mill Goudy mit dezentem Schatten/Abdunklung für perfekte Lesbarkeit */}
          <div className="relative mb-12 sm:mb-16 max-w-4xl mx-auto">
            {/* Sanfter, diffuser Schattenhintergrund genau hinter der Schrift */}
            <div 
              className="absolute -inset-x-8 sm:-inset-x-16 -inset-y-6 sm:-inset-y-10 bg-black/45 rounded-full blur-2xl sm:blur-3xl pointer-events-none -z-10" 
              aria-hidden="true"
            />
            
            <motion.h1
              variants={itemVariants}
              className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-[84px] font-normal leading-[1.08] text-[#F1EFE9] tracking-tight relative z-10 [text-shadow:_0_3px_24px_rgba(0,0,0,0.85),_0_1px_4px_rgba(0,0,0,0.95)]"
            >
              Ich begleite Sie <br className="hidden sm:inline" />
              bei Ihrem nächsten Schritt.
            </motion.h1>
          </div>

          {/* Zugehörige Button-Platzierung auf den jeweiligen visuellen Hälften */}
          <motion.div
            variants={itemVariants}
            className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 items-start"
          >
            {/* Linke Seite: Zugehörig zum Bauträger-Bereich */}
            <div className="flex flex-col items-center">
              <button
                onClick={() => onNavigate('bautraeger')}
                className="w-[260px] max-w-full h-[54px] flex items-center justify-center border-[1.5px] border-[#F1EFE9] text-[#F1EFE9] bg-black/30 hover:bg-[#F1EFE9] hover:text-slate-950 backdrop-blur-md text-xs sm:text-[13px] font-medium tracking-[0.22em] uppercase transition-all duration-300 shadow-md group"
              >
                <span>Bauträger & Neubau</span>
              </button>
            </div>

            {/* Rechte Seite: Zugehörig zum aktuellen Wohnraum-Bild (Immobilie finden & darunter verkaufen) */}
            <div className="flex flex-col items-center">
              <button
                onClick={() => onNavigate('angebote')}
                className="w-[260px] max-w-full h-[54px] flex items-center justify-center border-[1.5px] border-[#F1EFE9] text-[#F1EFE9] bg-black/30 hover:bg-[#F1EFE9] hover:text-slate-950 backdrop-blur-md text-xs sm:text-[13px] font-medium tracking-[0.22em] uppercase transition-all duration-300 shadow-md group"
              >
                <span>Immobilie finden</span>
              </button>

              {/* Darunter: Dezenter Schriftzug mit Verkaufen */}
              <div className="mt-4 flex items-center justify-center">
                <button
                  onClick={() => onNavigate('kontakt')}
                  className="inline-flex items-center gap-2 text-[11px] sm:text-xs tracking-[0.22em] uppercase font-normal text-[#F1EFE9]/85 hover:text-white transition-all duration-300 group py-1 border-b border-[#F1EFE9]/30 hover:border-[#F1EFE9]"
                >
                  <span>Immobilie verkaufen</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C5A880] transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.5} />
                </button>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>

      {/* Sanfter, feiner architektonischer Übergang zum nächsten Abschnitt */}
      <div className="absolute bottom-0 inset-x-0 z-20 flex flex-col items-center pointer-events-none">
        <div className="w-48 sm:w-80 h-[1px] bg-gradient-to-r from-transparent via-[#C5A880]/60 to-transparent" />
        <div className="w-[1px] h-6 sm:h-8 bg-gradient-to-b from-[#C5A880]/70 via-[#C5A880]/30 to-transparent" />
      </div>

    </section>
  );
}
