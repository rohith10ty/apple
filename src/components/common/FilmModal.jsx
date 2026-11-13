import React from 'react';
import { X } from 'lucide-react';

export const FilmModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/95 backdrop-blur-3xl flex items-center justify-center p-4 sm:p-8 animate-fadeIn">
      <div className="relative w-full max-w-5xl aspect-video rounded-3xl overflow-hidden border border-white/20 shadow-2xl bg-black">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors cursor-pointer border border-white/20"
          aria-label="Close film"
        >
          <X className="w-5 h-5" />
        </button>

        <video
          src="/assets/iphone-18-pro/iphone-18-pro-hero-desktop.mp4"
          autoPlay
          controls
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
};
