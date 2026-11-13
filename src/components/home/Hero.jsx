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
      className="relative w-full h-[100dvh] min-h-[640px] max-h-[1080px] bg-black text-white flex flex-col justify-between items-center text-center pt-20 pb-6 px-4 sm:px-6 overflow-hidden"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[900px] h-[450px] bg-white/[0.04] blur-[150px] pointer-events-none rounded-full" />

      {/* Top Header & Tagline */}
      <div className="flex flex-col items-center space-y-3 max-w-4xl relative z-10 shrink-0">
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight text-white leading-none">
          Pro. In every way.
        </h1>

        <p className="max-w-xl text-xs sm:text-sm md:text-base text-neutral-400 font-light tracking-wide leading-relaxed">
          Titanium unibody. Groundbreaking variable-aperture optics.
          Engineered from atomic scale to hardware acceleration for Apple Intelligence.
        </p>
      </div>

      {/* Center Cinematic Video / Visual (Fills screen cleanly without pushing buttons off) */}
      <div className="relative w-full max-w-3xl flex-1 min-h-0 flex items-center justify-center my-auto overflow-hidden z-10 group">
        <video
          ref={videoRef}
          className="max-h-[40vh] sm:max-h-[44vh] md:max-h-[48vh] w-auto object-contain filter drop-shadow-[0_20px_45px_rgba(0,0,0,0.85)] rounded-2xl transition-transform duration-700 group-hover:scale-[1.02]"
          src="/assets/iphone-18-pro/iphone-18-pro-hero-desktop.mp4"
          autoPlay
          loop
          muted
          playsInline
          poster="/assets/iphone-18-pro-hero.jpg"
        />
      </div>

      {/* Bottom Action Area (Always comfortably above the bottom viewport) */}
      <div className="flex flex-col items-center space-y-2 relative z-10 shrink-0 mb-1">
        <div className="flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={handleQuickBuy}
            className="px-6 py-2.5 rounded-full bg-white text-black font-semibold text-xs sm:text-sm hover:bg-neutral-200 transition-all duration-200 hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.25)] flex items-center gap-2 cursor-pointer"
          >
            <span>Buy Now</span>
            <span className="text-xs font-normal text-neutral-700">From {priceFormatted}</span>
          </button>

          <button
            onClick={() => onExploreProduct('iphone-18-pro')}
            className="px-5 py-2.5 rounded-full bg-white/10 text-white font-medium text-xs sm:text-sm border border-white/20 hover:bg-white/20 transition-all duration-200 flex items-center gap-1.5 cursor-pointer"
          >
            <span>Configure & Tech Specs</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400" />
          </button>
        </div>

        <p className="text-[11px] text-neutral-400 font-mono tracking-tight">
          Or {emiFormatted} for 12 mo. with 0% interest & instant trade-in savings
        </p>

        {/* Scroll hint */}
        <button
          onClick={handleScrollToCraftsmanship}
          className="pt-1 text-neutral-500 hover:text-white transition-colors cursor-pointer flex items-center gap-1 text-[10px] uppercase tracking-widest"
          aria-label="Scroll to explore craftsmanship"
        >
          <span>Explore Titanium Craftsmanship</span>
          <ChevronDown className="w-3.5 h-3.5 animate-bounce" />
        </button>
      </div>
    </section>
  );
};
