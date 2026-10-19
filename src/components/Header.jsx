import React, { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';

export default function Header({ activeTab, setActiveTab, onOpenEvaluation }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll-Erkennung: Wechsel von transparent zu solidem, schmalem Header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Startseite' },
    { id: 'angebote', label: 'Immobilien' },
    { id: 'bautraeger', label: 'Bauträger & Neubau' },
    { id: 'ueber-mich', label: 'Über mich' },
    { id: 'aktuelles', label: 'Ratgeber' },
    { id: 'kontakt', label: 'Kontakt' },
  ];

  const handleNavClick = (id) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Header ist nur ganz oben auf der Startseite transparent mit dunklem Vignette-Verlauf für perfekte Lesbarkeit
  const isTransparent = activeTab === 'home' && !isScrolled;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        isTransparent
          ? 'bg-gradient-to-b from-black/80 via-black/35 to-black/0 py-5 sm:py-6 border-none'
          : 'shadow-md border-b border-[#E5E0D5] py-2.5 sm:py-3'
      }`}
      style={{
        backgroundColor: isTransparent ? 'transparent' : '#FBF9F5',
        borderBottom: isTransparent ? 'none' : '1px solid #E5E0D5',
        boxShadow: isTransparent ? 'none' : '0 4px 6px -1px rgba(0, 0, 0, 0.07)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo – Groß am Anfang (weiß), kompakt beim Scrollen (dunkel) */}
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center text-left focus:outline-none group transition-transform"
          >
            {isTransparent ? (
              <img 
                src="https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/Jana%20Manthey%20Immobilien/JM_Logo_white_05.webp" 
                alt="Jana Manthey Immobilien" 
                className="h-13 sm:h-15 md:h-16 w-auto object-contain transition-all duration-300 drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]"
              />
            ) : (
              <img 
                src="https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/Jana%20Manthey%20Immobilien/JM_Logo_dark.webp" 
                alt="Jana Manthey Immobilien" 
                className="h-9 sm:h-10 md:h-11 w-auto object-contain transition-all duration-300"
              />
            )}
          </button>

          {/* Aufgeräumte Desktop Navigation mit maximalem Kontrast */}
          <nav className="hidden lg:flex items-center space-x-7 xl:space-x-8">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-[13.5px] tracking-wide transition-colors py-1 relative ${
                    isTransparent
                      ? isActive
                        ? 'text-white font-semibold drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]'
                        : 'text-[#F1EFE9] hover:text-white font-medium drop-shadow-[0_1px_3px_rgba(0,0,0,0.7)]'
                      : isActive
                        ? 'text-slate-950 font-bold'
                        : 'text-slate-700 hover:text-slate-950 font-medium'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span 
                      className={`absolute bottom-0 left-0 w-full h-[2px] rounded-full ${
                        isTransparent ? 'bg-white shadow-sm' : 'bg-slate-950'
                      }`} 
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Aufgeräumte Aktionen (Ohne Suchleiste) */}
          <div className="hidden sm:flex items-center space-x-3.5">
            {/* Wertermittlung Quick CTA */}
            <button
              onClick={onOpenEvaluation}
              className={`hidden xl:inline-flex text-[12.5px] uppercase tracking-[0.16em] font-medium px-3.5 py-2 rounded-md transition-colors ${
                isTransparent 
                  ? 'text-white/95 hover:text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.7)]' 
                  : 'text-slate-700 hover:text-slate-950 hover:bg-sand-200/80'
              }`}
            >
              Immobilienbewertung
            </button>

            {/* Direktanruf Button */}
            <a
              href="tel:05114371677"
              className={`inline-flex items-center gap-2 text-[12.5px] font-semibold tracking-[0.15em] uppercase px-4 py-2.5 rounded-full transition-all duration-300 ${
                isTransparent
                  ? 'border border-white/60 text-white bg-black/40 backdrop-blur-md hover:bg-white hover:text-slate-950 shadow-md'
                  : 'bg-slate-900 text-white hover:bg-slate-800 shadow-md'
              }`}
            >
              <Phone className="w-3.5 h-3.5 text-sand-300" strokeWidth={2} />
              <span>0511 . 43 71 677</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 focus:outline-none transition-colors rounded-lg ${
                isTransparent 
                  ? 'text-white bg-black/40 backdrop-blur-sm' 
                  : 'text-slate-900 hover:bg-sand-200'
              }`}
              aria-label="Menü öffnen"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-sand-300 bg-[#FBF9F5] px-4 pt-3 pb-6 space-y-2 shadow-2xl animate-fadeIn">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`block w-full text-left px-3.5 py-2.5 rounded-md text-[15px] ${
                activeTab === item.id 
                  ? 'bg-sand-200 text-slate-950 font-semibold' 
                  : 'text-slate-800 hover:bg-sand-200/60'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-3 border-t border-sand-300/80 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEvaluation();
              }}
              className="w-full text-center text-[13.5px] font-semibold text-slate-900 py-2.5 bg-sand-200/90 rounded-md tracking-wide"
            >
              Kostenlose Immobilienbewertung
            </button>
            <a
              href="tel:05114371677"
              className="w-full inline-flex justify-center items-center gap-2 bg-slate-900 text-white text-[13.5px] font-semibold py-2.5 rounded-md tracking-wide"
            >
              <Phone className="w-4 h-4 text-sand-300" />
              <span>0511 . 43 71 677 anrufen</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
