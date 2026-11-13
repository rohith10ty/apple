import React, { useState } from 'react';
import { Check, Cpu, Camera, Shield, Battery, Play, Sparkles } from 'lucide-react';

export const CraftsmanshipSection = ({ onOpenFilm }) => {
  const [selectedFinishIndex, setSelectedFinishIndex] = useState(0);

  const finishes = [
    {
      name: 'Black Titanium',
      hex: '#262626',
      badge: 'Obsidian Matte',
      image: '/assets/iphone-18-pro-black.jpg',
      specHighlight: 'Physical Vapor Deposition (PVD) dark titanium finish with diamond-like carbon layer.'
    },
    {
      name: 'Glacier White',
      hex: '#dce4ec',
      badge: 'Frost Reflective',
      image: '/assets/iphone-18-pro-glacier.jpg',
      specHighlight: 'Micro-blasted ceramic pearlescent coating with sub-micron reflective crystalline texture.'
    },
    {
      name: 'Burgundy Titanium',
      hex: '#6b3644',
      badge: 'Deep Lustre',
      image: '/assets/iphone-18-pro-burgundy.jpg',
      specHighlight: 'Deep anodized rich chromatic grade 5 titanium with metallic depth.'
    },
    {
      name: 'Natural Silver',
      hex: '#d2d2d7',
      badge: 'Raw Precision',
      image: '/assets/iphone-18-pro-silver.jpg',
      specHighlight: 'Precision machined aerospace-grade titanium unibody with satin hairline brush finish.'
    }
  ];

  const currentFinish = finishes[selectedFinishIndex];

  return (
    <section id="craftsmanship" className="py-24 md:py-32 bg-neutral-950/80 relative border-t border-white/10">
      {/* Subtle ambient light */}
      <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-white/[0.02] blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.06] border border-white/10 text-neutral-300 text-xs font-semibold tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5 text-white" />
            <span>Precision Craftsmanship</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Forged in Grade 5 Titanium.
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base font-light max-w-xl mx-auto leading-relaxed">
            The highest strength-to-weight ratio of any metal. Sculpted with precision unibody architecture and thermal vapor chamber cooling.
          </p>
        </div>

        {/* Interactive Luxury Showcase Card */}
        <div className="relative rounded-3xl bg-black/60 border border-white/10 overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.9)] backdrop-blur-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            {/* Left Column: Interactive Finish Switcher & Specs */}
            <div className="p-6 sm:p-10 lg:p-12 lg:col-span-5 flex flex-col justify-between h-full space-y-8">
              <div>
                <span className="text-xs uppercase tracking-widest text-neutral-400 font-semibold block mb-2">
                  Finish & Architecture
                </span>
                <h3 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
                  {currentFinish.name}
                </h3>
                <p className="text-sm text-neutral-400 mt-2 leading-relaxed">
                  {currentFinish.specHighlight}
                </p>
              </div>

              {/* Finish Switcher Swatches */}
              <div className="space-y-3 bg-white/[0.03] p-4 rounded-2xl border border-white/10">
                <div className="flex items-center justify-between text-xs text-neutral-400">
                  <span>Select Titanium Finish:</span>
                  <span className="text-white font-medium">{currentFinish.name}</span>
                </div>
                <div className="flex items-center gap-3">
                  {finishes.map((finish, idx) => (
                    <button
                      key={finish.name}
                      onClick={() => setSelectedFinishIndex(idx)}
                      className={`relative w-9 h-9 rounded-full transition-all duration-300 p-0.5 cursor-pointer ${
                        selectedFinishIndex === idx
                          ? 'ring-2 ring-white ring-offset-2 ring-offset-black scale-110 shadow-[0_0_15px_rgba(255,255,255,0.4)]'
                          : 'opacity-70 hover:opacity-100 hover:scale-105'
                      }`}
                      style={{ backgroundColor: finish.hex }}
                      title={finish.name}
                      aria-label={`Select ${finish.name}`}
                    >
                      {selectedFinishIndex === idx && (
                        <Check className="w-4 h-4 text-white mx-auto drop-shadow" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Key Specs Matrix Capsules */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-white/[0.04] border border-white/[0.08]">
                  <Cpu className="w-4 h-4 text-neutral-300 mb-1.5" />
                  <div className="text-xs font-semibold text-white">A20 Pro Silicon</div>
                  <div className="text-[11px] text-neutral-400">3nm architecture</div>
                </div>

                <div className="p-3.5 rounded-xl bg-white/[0.04] border border-white/[0.08]">
                  <Camera className="w-4 h-4 text-neutral-300 mb-1.5" />
                  <div className="text-xs font-semibold text-white">Variable Aperture</div>
                  <div className="text-[11px] text-neutral-400">f/1.4 - f/4.0 optics</div>
                </div>

                <div className="p-3.5 rounded-xl bg-white/[0.04] border border-white/[0.08]">
                  <Shield className="w-4 h-4 text-neutral-300 mb-1.5" />
                  <div className="text-xs font-semibold text-white">Grade 5 Titanium</div>
                  <div className="text-[11px] text-neutral-400">Aerospace unibody</div>
                </div>

                <div className="p-3.5 rounded-xl bg-white/[0.04] border border-white/[0.08]">
                  <Battery className="w-4 h-4 text-neutral-300 mb-1.5" />
                  <div className="text-xs font-semibold text-white">33h Video Playback</div>
                  <div className="text-[11px] text-neutral-400">Fast 50% in 30min</div>
                </div>
              </div>

              {/* Watch Keynote Link */}
              <button
                onClick={onOpenFilm}
                className="inline-flex items-center gap-2 text-xs tracking-wider uppercase text-neutral-300 hover:text-white transition-colors cursor-pointer group"
              >
                <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
                  <Play className="w-3 h-3 fill-current ml-0.5" />
                </div>
                <span>Watch the iPhone 18 Pro reveal film</span>
              </button>
            </div>

            {/* Right Column: High-Res Dynamic Device / Video Frame */}
            <div className="p-6 sm:p-10 lg:p-12 lg:col-span-7 flex flex-col items-center justify-center relative min-h-[380px] sm:min-h-[480px]">
              <div className="relative w-full max-w-lg aspect-square flex items-center justify-center">
                <div
                  className="absolute inset-0 rounded-full blur-3xl opacity-25 transition-colors duration-700 pointer-events-none"
                  style={{ backgroundColor: currentFinish.hex }}
                />

                <div className="relative z-10 w-full h-full flex items-center justify-center group">
                  <img
                    src={currentFinish.image}
                    alt={currentFinish.name}
                    className="w-full h-full object-contain filter drop-shadow-[0_20px_45px_rgba(0,0,0,0.85)] rounded-2xl transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/15 text-[11px] text-white flex items-center gap-2 shadow-lg">
                    <span
                      className="w-2.5 h-2.5 rounded-full border border-white/40"
                      style={{ backgroundColor: currentFinish.hex }}
                    />
                    <span>{currentFinish.name}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Three Key Features Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          <div className="p-6 rounded-2xl bg-neutral-900/40 border border-white/[0.08] backdrop-blur-sm flex items-start gap-4 hover:border-white/20 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
              <Camera className="w-5 h-5 text-white" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">Physical Variable Aperture</h4>
              <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                Step-less optical aperture mechanically expands in low light and contracts for razor-sharp landscape depth.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-neutral-900/40 border border-white/[0.08] backdrop-blur-sm flex items-start gap-4 hover:border-white/20 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
              <Cpu className="w-5 h-5 text-white" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">Neural Engine Acceleration</h4>
              <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                Over 45 trillion operations per second running generative multi-modal language models locally with privacy.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-neutral-900/40 border border-white/[0.08] backdrop-blur-sm flex items-start gap-4 hover:border-white/20 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">Laser-Welded Vapour Chamber</h4>
              <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                Sub-millimeter sealed thermal loop with deionized fluid for sustained frame rates in AAA console games.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
