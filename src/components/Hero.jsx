import React, { useRef, useState } from 'react';
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
  const [hoveredSide, setHoveredSide] = useState(null); // 'left' | 'right' | null

  // Subtiler, ultra-cleaner Parallax-Scroll-Effekt beim Scrollen
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '14%']);

  return (
    <section 
      ref={heroRef} 
      onMouseLeave={() => setHoveredSide(null)}
      className="relative min-h-screen min-h-[100dvh] flex items-center justify-center overflow-hidden bg-slate-950 select-none"
    >
      
      {/* Hintergrundbild mit festem Diagonalsplit & sanftem Bild-Zoom der gehoverten Hälfte */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div 
          style={{ y }}
          className="w-full h-full relative"
        >
          {/* Linke Seite: Mehrfamilienhaus im Bau (Bauträger & Neubau) mit sauberem Zoom */}
          <div
            className="absolute inset-0 overflow-hidden"
            style={{
              clipPath: 'polygon(0% 0%, 58.2% 0%, 42.2% 100%, 0% 100%)',
              WebkitClipPath: 'polygon(0% 0%, 58.2% 0%, 42.2% 100%, 0% 100%)',
            }}
          >
            <motion.img
              src="https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/Jana%20Manthey%20Immobilien/bautraeger_hero_exterior.webp"
              alt="Bauträger & Neubauprojekte – Jana Manthey Immobilien"
              className="w-full h-full object-cover object-center will-change-transform"
              initial={false}
              animate={{
                scale: hoveredSide === 'left' ? 1.06 : 1.00,
              }}
              transition={{ duration: 0.8, ease }}
            />
          </div>

          {/* Rechte Seite: Jana Manthey im Wohnraum (Immobilie finden & verkaufen) mit sauberem Zoom */}
          <div
            className="absolute inset-0 overflow-hidden"
            style={{
              clipPath: 'polygon(57.8% 0%, 100% 0%, 100% 100%, 41.8% 100%)',
              WebkitClipPath: 'polygon(57.8% 0%, 100% 0%, 100% 100%, 41.8% 100%)',
            }}
          >
            <motion.img
              src="https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/Jana%20Manthey%20Immobilien/jana_hero_interior.webp"
              alt="Jana Manthey Immobilien – Wohnimmobilienberatung Hannover"
              className="w-full h-full object-cover object-center will-change-transform"
              initial={false}
              animate={{
                scale: hoveredSide === 'right' ? 1.06 : 1.00,
              }}
              transition={{ duration: 0.8, ease }}
            />
          </div>

          {/* Feste, elegante champagnergoldene Trennlinie (bleibt ruhig und stabil an Ort und Stelle) */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-10 overflow-hidden"
            preserveAspectRatio="none"
          >
            {/* Weicher Schattenschleier hinter der Trennlinie */}
            <line
              x1="58%"
              y1="0%"
              x2="42%"
              y2="100%"
              stroke="rgba(0, 0, 0, 0.45)"
              strokeWidth="8"
            />
            {/* Hauptlinie in Champagnergold */}
            <line
              x1="58%"
              y1="0%"
              x2="42%"
              y2="100%"
              stroke="#C5A880"
              strokeWidth="2.5"
            />
            {/* Subtiler Glanzkern */}
            <line
              x1="58%"
              y1="0%"
              x2="42%"
              y2="100%"
              stroke="#F5EAD7"
              strokeWidth="1"
              strokeOpacity="0.75"
            />
          </svg>

          {/* Warmer Kontrast-Filter für optimale Text- und Button-Lesbarkeit */}
          <div className="absolute inset-0 bg-slate-950/40 backdrop-brightness-[0.93] pointer-events-none z-10" />
        </motion.div>
      </div>

      {/* Interaktive Hover-Zonen für die beiden Seitenhälften (exakt entlang der Diagonale geschnitten) */}
      <div className="absolute inset-0 z-0 pointer-events-auto">
        {/* Linke Diagonale Hälfte */}
        <div
          className="absolute inset-0"
          style={{
            clipPath: 'polygon(0% 0%, 58% 0%, 42% 100%, 0% 100%)',
            WebkitClipPath: 'polygon(0% 0%, 58% 0%, 42% 100%, 0% 100%)',
          }}
          onMouseEnter={() => setHoveredSide('left')}
        />
        {/* Rechte Diagonale Hälfte */}
        <div
          className="absolute inset-0"
          style={{
            clipPath: 'polygon(58% 0%, 100% 0%, 100% 100%, 42% 100%)',
            WebkitClipPath: 'polygon(58% 0%, 100% 0%, 100% 100%, 42% 100%)',
          }}
          onMouseEnter={() => setHoveredSide('right')}
        />
      </div>

      {/* Zentrierter Hero-Inhalt mit ruhiger Canva-Einfluganimation */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 sm:pt-44 pb-32 sm:pb-40 text-center text-[#F1EFE9] pointer-events-none">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center justify-center pointer-events-auto"
        >
          
          {/* Pretitle / Kicker (Canva Style: THOMAS LARSON GROUP -> JANA MANTHEY IMMOBILIEN) */}
          <motion.div variants={itemVariants} className="mb-6 sm:mb-8">
            <span className="text-[12px] sm:text-[13px] uppercase tracking-[0.3em] font-medium text-[#F1EFE9] block drop-shadow-[0_2px_8px_rgba(0,0,0,0.65)]">
              Jana Manthey Immobilien
            </span>
          </motion.div>

          {/* Monumentale Überschrift in Sorts Mill Goudy mit deutlich hellerem, dezentem Schatten */}
          <div className="relative mb-12 sm:mb-16 max-w-4xl mx-auto">
            {/* Wesentlich hellerer, diffuser Schattenhintergrund (kein dunkler Fleck mehr) */}
            <div 
              className="absolute -inset-x-8 sm:-inset-x-16 -inset-y-6 sm:-inset-y-10 bg-black/15 rounded-full blur-2xl sm:blur-3xl pointer-events-none -z-10" 
              aria-hidden="true"
            />
            
            <motion.h1
              variants={itemVariants}
              className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-[84px] font-normal leading-[1.08] text-[#F1EFE9] tracking-tight relative z-10 [text-shadow:_0_2px_14px_rgba(0,0,0,0.35),_0_1px_3px_rgba(0,0,0,0.45)]"
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
            <div className="flex flex-col items-center w-[260px] mx-auto">
              <button
                onClick={() => onNavigate('bautraeger')}
                onMouseEnter={() => setHoveredSide('left')}
                className="w-[260px] max-w-full h-[54px] flex items-center justify-center border-[1.5px] border-[#F1EFE9] text-[#F1EFE9] bg-black/30 hover:bg-[#F1EFE9] hover:text-slate-950 backdrop-blur-md text-xs sm:text-[13px] font-medium tracking-[0.22em] uppercase transition-all duration-300 shadow-md group"
              >
                <span>Bauträger & Neubau</span>
              </button>
            </div>

            {/* Rechte Seite: Zugehörig zum aktuellen Wohnraum-Bild (Immobilie finden & darunter verkaufen) */}
            <div className="flex flex-col items-center w-[260px] mx-auto">
              <button
                onClick={() => onNavigate('angebote')}
                onMouseEnter={() => setHoveredSide('right')}
                className="w-[260px] max-w-full h-[54px] flex items-center justify-center border-[1.5px] border-[#F1EFE9] text-[#F1EFE9] bg-black/30 hover:bg-[#F1EFE9] hover:text-slate-950 backdrop-blur-md text-xs sm:text-[13px] font-medium tracking-[0.22em] uppercase transition-all duration-300 shadow-md group"
              >
                <span>Immobilie finden</span>
              </button>

              {/* Darunter: Dezenter Schriftzug mit Verkaufen */}
              <div className="mt-4 flex items-center justify-center">
                <button
                  onClick={() => onNavigate('kontakt')}
                  onMouseEnter={() => setHoveredSide('right')}
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

      {/* Geschwungener, wellenförmiger Übergang mit sich kreuzenden feinen Goldlinien zur Verzierung */}
      <div className="absolute bottom-0 inset-x-0 z-20 pointer-events-none translate-y-[1px] overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-16 sm:h-24 md:h-28 block"
        >
          <defs>
            {/* Primärer Champagnergold-Verlauf */}
            <linearGradient id="goldWavePrimary" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#C5A880" stopOpacity="0.4" />
              <stop offset="25%" stopColor="#C5A880" stopOpacity="0.9" />
              <stop offset="50%" stopColor="#F5EAD7" stopOpacity="1" />
              <stop offset="75%" stopColor="#C5A880" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#C5A880" stopOpacity="0.4" />
            </linearGradient>

            {/* Sekundärer feiner Gold-Verlauf für Web-Linien */}
            <linearGradient id="goldWaveSecondary" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#EAD8BE" stopOpacity="0.2" />
              <stop offset="35%" stopColor="#C5A880" stopOpacity="0.75" />
              <stop offset="65%" stopColor="#F5EAD7" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#C5A880" stopOpacity="0.2" />
            </linearGradient>

            {/* Subtiler Tiefenschatten hinter der Hauptkante */}
            <filter id="waveShadow" x="-5%" y="-30%" width="110%" height="160%">
              <feDropShadow dx="0" dy="-1.5" stdDeviation="2.5" floodColor="rgba(0,0,0,0.35)" />
            </filter>
          </defs>

          {/* Geschwungene, wellenförmige Füllfläche im Sand-Farbton des folgenden Abschnitts (#EFECE6) */}
          <path
            d="M 0,55 C 280,18 480,88 740,52 C 1000,16 1220,86 1440,48 L 1440,105 L 0,105 Z"
            fill="#EFECE6"
          />

          {/* 1. Haupt-Wellenlinie in edlem Champagnergold */}
          <path
            d="M 0,55 C 280,18 480,88 740,52 C 1000,16 1220,86 1440,48"
            fill="none"
            stroke="url(#goldWavePrimary)"
            strokeWidth="1.5"
            strokeLinecap="round"
            filter="url(#waveShadow)"
          />

          {/* 2. Zarte, sich kreuzende Goldlinie A (schwingt sanft über und unter die Hauptkante) */}
          <path
            d="M 0,42 C 220,78 520,26 800,66 C 1020,96 1260,26 1440,58"
            fill="none"
            stroke="url(#goldWaveSecondary)"
            strokeWidth="0.85"
            strokeLinecap="round"
            opacity="0.85"
          />

          {/* 3. Feine, gegenläufig schwingende Goldlinie B (schneidet die Linien an mehreren Punkten) */}
          <path
            d="M 0,68 C 340,30 580,72 860,34 C 1100,8 1300,74 1440,38"
            fill="none"
            stroke="url(#goldWavePrimary)"
            strokeWidth="0.75"
            strokeLinecap="round"
            opacity="0.65"
          />

          {/* 4. Subtile, filigrane Begleitlinie C für zusätzliche architektonische Tiefe */}
          <path
            d="M 0,48 C 300,62 600,40 900,68 C 1140,88 1320,44 1440,64"
            fill="none"
            stroke="url(#goldWaveSecondary)"
            strokeWidth="0.6"
            strokeLinecap="round"
            opacity="0.5"
          />
        </svg>
      </div>

    </section>
  );
}
