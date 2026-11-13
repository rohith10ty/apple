import React, { useRef } from 'react';
import { ArrowUpRight, ChevronDown } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export const Hero = ({ onExploreProduct }) => {
  const { addToCart, currency } = useCart();
  const videoRef = useRef(null);

  const priceFormatted = currency === 'INR' ? '₹1,34,900' : '$1,199';
  const emiFormatted = currency === 'INR' ? '₹11,241/mo.' : '$99.91/mo.';

  const handleQuickBuy = () => {
    const dummyProduct = {
      id: 'iphone-18-pro',
      name: 'iPhone 18 Pro',
      category: 'iPhone',
      colors: [
        { name: 'Black Titanium', hex: '#262626', image: '/assets/iphone-18-pro-black.jpg' },
        { name: 'Glacier White', hex: '#dce4ec', image: '/assets/iphone-18-pro-glacier.jpg' },
        { name: 'Burgundy Titanium', hex: '#6b3644', image: '/assets/iphone-18-pro-burgundy.jpg' },
        { name: 'Natural Silver', hex: '#d2d2d7', image: '/assets/iphone-18-pro-silver.jpg' }
      ],
      storageOptions: [
        { size: '256GB', price: 1199, priceInr: 134900 },
        { size: '512GB', price: 1399, priceInr: 154900 },
        { size: '1TB', price: 1599, priceInr: 174900 }
      ],
      image: '/assets/iphone-18-pro-black.jpg'
    };
    addToCart(
      dummyProduct,
      { name: 'Black Titanium', hex: '#262626', image: '/assets/iphone-18-pro-black.jpg' },
      { size: '256GB', price: 1199, priceInr: 134900 }
    );
  };

  const handleScrollToCraftsmanship = () => {
    const el = document.getElementById('craftsmanship');
    if (el) {
      if (window.lenis) window.lenis.scrollTo(el, { offset: -50 });
      else el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative w-full h-[100dvh] min-h-[580px] max-h-[1000px] bg-black text-white flex flex-col justify-between items-center text-center pt-16 sm:pt-20 pb-4 px-4 overflow-hidden"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] md:w-[800px] h-[350px] bg-white/[0.04] blur-[140px] pointer-events-none rounded-full" />

      {/* Top Header & Tagline - Clean, Compact & Shifted Up */}
      <div className="flex flex-col items-center space-y-1.5 max-w-2xl relative z-10 shrink-0">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight">
          Pro. In every way.
        </h1>

        <p className="max-w-lg text-xs sm:text-sm text-neutral-400 font-light tracking-wide leading-normal">
          Titanium unibody. Groundbreaking variable-aperture optics. Engineered for Apple Intelligence.
        </p>
      </div>

      {/* Center Cinematic Video / Visual - Scaled cleanly to avoid crowding */}
      <div className="relative w-full max-w-2xl flex-1 min-h-0 flex items-center justify-center my-1 overflow-hidden z-10 group">
        <video
          ref={videoRef}
          className="h-full max-h-[30vh] sm:max-h-[34vh] md:max-h-[38vh] w-auto object-contain filter drop-shadow-[0_15px_35px_rgba(0,0,0,0.85)] rounded-2xl transition-transform duration-500 group-hover:scale-[1.02]"
          src="/assets/iphone-18-pro/iphone-18-pro-hero-desktop.mp4"
          autoPlay
          loop
          muted
          playsInline
          poster="/assets/iphone-18-pro-hero.jpg"
        />
      </div>

      {/* Bottom Action Area - Comfortably visible above viewport */}
      <div className="flex flex-col items-center space-y-2 relative z-10 shrink-0 pb-2">
        <div className="flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={handleQuickBuy}
            className="px-5 py-2 rounded-full bg-white text-black font-semibold text-xs sm:text-sm hover:bg-neutral-200 transition-all duration-200 hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.25)] flex items-center gap-2 cursor-pointer"
          >
            <span>Buy Now</span>
            <span className="text-xs font-normal text-neutral-700">From {priceFormatted}</span>
          </button>

          <button
            onClick={() => onExploreProduct('iphone-18-pro')}
            className="px-4 py-2 rounded-full bg-white/10 text-white font-medium text-xs sm:text-sm border border-white/20 hover:bg-white/20 transition-all duration-200 flex items-center gap-1.5 cursor-pointer"
          >
            <span>Configure & Tech Specs</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400" />
          </button>
        </div>

        <p className="text-[11px] text-neutral-400 font-mono tracking-tight">
          Or {emiFormatted} for 12 mo. with 0% interest & instant trade-in savings
        </p>

        {/* Explore Titanium Craftsmanship link - Prominently visible above bottom viewport */}
        <button
          onClick={handleScrollToCraftsmanship}
          className="mt-0.5 text-neutral-300 hover:text-white transition-colors cursor-pointer flex items-center gap-1.5 text-xs font-medium tracking-wide bg-white/5 hover:bg-white/10 px-3.5 py-1 rounded-full border border-white/15"
          aria-label="Scroll to explore craftsmanship"
        >
          <span>Explore Titanium Craftsmanship</span>
          <ChevronDown className="w-3.5 h-3.5 animate-bounce text-white" />
        </button>
      </div>
    </section>
  );
};
