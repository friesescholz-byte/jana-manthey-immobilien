import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import SearchModal from './components/SearchModal';
import EvaluationModal from './components/EvaluationModal';
import PropertyDetailModal from './components/PropertyDetailModal';

// Pages
import Home from './pages/Home';
import Immobilienangebote from './pages/Immobilienangebote';
import Bautraeger from './pages/Bautraeger';
import UeberMich from './pages/UeberMich';
import Aktuelles from './pages/Aktuelles';
import Impressum from './pages/Impressum';
import Datenschutz from './pages/Datenschutz';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [searchOpen, setSearchOpen] = useState(false);
  const [evaluationOpen, setEvaluationOpen] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState(null);

  const handleNavigate = (tabId) => {
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Keyboard shortcut: Cmd+K or Ctrl+K opens search
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Präsentationsmodus für die Kundin: Alle noch unfertigen Unterseiten temporär ausblenden
  const SHOW_SUBPAGES = false;

  return (
    <div className="min-h-screen flex flex-col bg-[#FBF9F5] text-slate-900 font-sans selection:bg-accent/20">
      
      {/* Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={handleNavigate}
        onOpenSearch={() => setSearchOpen(true)}
        onOpenEvaluation={() => setEvaluationOpen(true)}
      />

      {/* Main Content Area */}
      <main className={`flex-1 ${activeTab !== 'home' ? 'pt-20 sm:pt-24' : ''}`}>
        {activeTab === 'home' && (
          <Home
            onNavigate={handleNavigate}
            onSelectProperty={(prop) => setSelectedProperty(prop)}
            onOpenEvaluation={() => setEvaluationOpen(true)}
          />
        )}

        {/* Wenn Unterseiten aufgerufen werden, während sie noch in Arbeit sind: saubere weiße Fläche */}
        {activeTab !== 'home' && !SHOW_SUBPAGES && (
          <div className="min-h-[80vh] bg-[#FBF9F5]" />
        )}

        {/* Reguläre Unterseiten (aktivierbar sobald fertiggestellt) */}
        {SHOW_SUBPAGES && (
          <>
            {activeTab === 'angebote' && (
              <Immobilienangebote
                onSelectProperty={(prop) => setSelectedProperty(prop)}
                onOpenEvaluation={() => setEvaluationOpen(true)}
              />
            )}

            {activeTab === 'bautraeger' && (
              <Bautraeger />
            )}

            {activeTab === 'ueber-mich' && (
              <UeberMich onNavigate={handleNavigate} />
            )}

            {activeTab === 'aktuelles' && (
              <Aktuelles onNavigate={handleNavigate} />
            )}

            {activeTab === 'kontakt' && (
              <div className="pt-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
                  <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-slate-500 block mb-2">
                    Direkter Kontakt
                  </span>
                  <h1 className="font-serif text-4xl sm:text-5xl text-slate-950 font-normal">
                    Sprechen wir über Ihre Immobilie
                  </h1>
                </div>
                <Home
                  onNavigate={handleNavigate}
                  onSelectProperty={(prop) => setSelectedProperty(prop)}
                  onOpenEvaluation={() => setEvaluationOpen(true)}
                />
              </div>
            )}

            {activeTab === 'impressum' && (
              <Impressum onNavigate={handleNavigate} />
            )}

            {activeTab === 'datenschutz' && (
              <Datenschutz onNavigate={handleNavigate} />
            )}
          </>
        )}
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Global Modals */}
      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onSelectProperty={(prop) => setSelectedProperty(prop)}
        onNavigate={handleNavigate}
      />

      <EvaluationModal
        isOpen={evaluationOpen}
        onClose={() => setEvaluationOpen(false)}
      />

      <PropertyDetailModal
        property={selectedProperty}
        onClose={() => setSelectedProperty(null)}
      />

    </div>
  );
}
