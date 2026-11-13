import React, { useState, useRef } from 'react';
import { ArrowUpRight, Play, Sparkles, ChevronRight, Check, Shield, Cpu, Camera, Battery } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { formatCurrency } from '../../data/products';

export const Hero = ({ onExploreProduct, onOpenFilm }) => {
  const { addToCart, currency } = useCart();
  const [selectedFinishIndex, setSelectedFinishIndex] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const videoRef = useRef(null);

  const finishes = [
    {
      name: 'Black Titanium',
      hex: '#262626',
      badge: 'Obsidian Matte',
      image: '/assets/iphone-18-pro-black.jpg',
      specHighlight: 'Physical Vapor Deposition (PVD) dark titanium finish'
    },
    {
      name: 'Glacier White',
      hex: '#dce4ec',
      badge: 'Frost Reflective',
      image: '/assets/iphone-18-pro-glacier.jpg',
      specHighlight: 'Micro-blasted ceramic pearlescent coating'
    },
    {
      name: 'Burgundy Titanium',
      hex: '#6b3644',
      badge: 'Deep Lustre',
      image: '/assets/iphone-18-pro-burgundy.jpg',
      specHighlight: 'Deep anodized rich chromatic grade 5 titanium'
    },
    {
      name: 'Natural Silver',
      hex: '#d2d2d7',
      badge: 'Raw Precision',
      image: '/assets/iphone-18-pro-silver.jpg',
      specHighlight: 'Precision machined aerospace-grade natural sheen'
    }
  ];

  const currentFinish = finishes[selectedFinishIndex];

  const priceFormatted = currency === 'INR' ? '₹1,34,900' : '$1,199';
  const emiFormatted = currency === 'INR' ? '₹11,241/mo.' : '$99.91/mo.';

  const handleQuickBuy = () => {
    // Quick add default configuration to bag
    const dummyProduct = {
      id: 'iphone-18-pro',
      name: 'iPhone 18 Pro',
      category: 'iPhone',
      colors: finishes.map(f => ({ name: f.name, hex: f.hex, image: f.image })),
      storageOptions: [
        { size: '256GB', price: 1199, priceInr: 134900 },
        { size: '512GB', price: 1399, priceInr: 154900 },
        { size: '1TB', price: 1599, priceInr: 174900 }
      ],
      image: currentFinish.image
    };
    addToCart(dummyProduct, { name: currentFinish.name, hex: currentFinish.hex, image: currentFinish.image }, { size: '256GB', price: 1199, priceInr: 134900 });
  };

  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-black text-white">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[900px] h-[500px] bg-white/[0.04] blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-neutral-500/[0.03] blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Keynote Tagline & Eyebrow */}
        <div className="flex flex-col items-center text-center space-y-4 mb-8 md:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.07] border border-white/15 text-neutral-300 text-xs font-medium tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-white" />
            <span>Introducing iPhone 18 Pro</span>
            <span className="w-1 h-1 rounded-full bg-white/40"></span>
            <span className="text-white font-semibold">Apple Silicon A20 Pro</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white">
            Pro. In every way.
          </h1>

          <p className="max-w-2xl text-base sm:text-xl text-neutral-400 font-light tracking-wide leading-relaxed">
            Titanium unibody. Groundbreaking variable-aperture optics.
            Engineered from atomic scale to hardware acceleration for Apple Intelligence.
          </p>

          {/* Pricing & Quick Action Strip */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={handleQuickBuy}
              className="px-6 py-2.5 rounded-full bg-white text-black font-semibold text-sm hover:bg-neutral-200 transition-all duration-300 hover:scale-105 shadow-[0_0_25px_rgba(255,255,255,0.25)] flex items-center gap-2 cursor-pointer"
            >
              <span>Buy Now</span>
              <span className="text-xs font-normal text-neutral-700">From {priceFormatted}</span>
            </button>

            <button
              onClick={() => onExploreProduct('iphone-18-pro')}
              className="px-5 py-2.5 rounded-full bg-white/10 text-white font-medium text-sm border border-white/20 hover:bg-white/20 transition-all duration-300 flex items-center gap-1.5 cursor-pointer"
            >
              <span>Configure & Tech Specs</span>
              <ArrowUpRight className="w-4 h-4 text-neutral-400" />
            </button>
          </div>

          <p className="text-[12px] text-neutral-500 font-mono">
            Or {emiFormatted} for 12 mo. with 0% interest & instant trade-in savings
          </p>
        </div>

        {/* Hero Interactive Luxury Showcase Card */}
        <div className="relative rounded-3xl bg-neutral-950/70 border border-white/10 overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.9)] backdrop-blur-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            {/* Left Column: Interactive Finish Switcher & Precision Specs */}
            <div className="p-6 sm:p-10 lg:p-12 lg:col-span-5 flex flex-col justify-between h-full space-y-8">
              <div>
                <span className="text-xs uppercase tracking-widest text-neutral-400 font-semibold block mb-2">
                  Precision Craftsmanship
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
              {/* Device Showcase Container */}
              <div className="relative w-full max-w-lg aspect-square flex items-center justify-center">
                {/* Visual Glow */}
                <div
                  className="absolute inset-0 rounded-full blur-3xl opacity-25 transition-colors duration-700 pointer-events-none"
                  style={{ backgroundColor: currentFinish.hex }}
                />

                {/* Main Dynamic Video / Image */}
                <div className="relative z-10 w-full h-full flex items-center justify-center group">
                  <video
                    ref={videoRef}
                    className="w-full h-full object-contain filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)] rounded-2xl transition-transform duration-700 group-hover:scale-102"
                    src="/assets/iphone-18-pro/iphone-18-pro-hero-desktop.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster={currentFinish.image}
                  />

                  {/* Floating Finish Badge */}
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div className="p-6 rounded-2xl bg-neutral-950/50 border border-white/[0.08] backdrop-blur-sm flex items-start gap-4 hover:border-white/20 transition-colors">
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

          <div className="p-6 rounded-2xl bg-neutral-950/50 border border-white/[0.08] backdrop-blur-sm flex items-start gap-4 hover:border-white/20 transition-colors">
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

          <div className="p-6 rounded-2xl bg-neutral-950/50 border border-white/[0.08] backdrop-blur-sm flex items-start gap-4 hover:border-white/20 transition-colors">
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
