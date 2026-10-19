import React from 'react';
import { X } from 'lucide-react';
import EvaluationSection from './EvaluationSection';

export default function EvaluationModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div 
        className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />
      <div className="relative w-full max-w-4xl bg-[#FBF9F5] rounded-3xl shadow-2xl border border-sand-300 overflow-hidden z-10 animate-fadeIn max-h-[92vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-slate-400 hover:text-slate-900 rounded-full hover:bg-sand-200 transition-colors z-20"
        >
          <X className="w-6 h-6" />
        </button>
        <EvaluationSection />
      </div>
    </div>
  );
}
