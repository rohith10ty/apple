import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X, ArrowUpRight, Sparkles, PhoneCall, Tag } from 'lucide-react';
import { AppleLogo } from '../common/AppleLogo';
import { useCart } from '../../context/CartContext';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { itemCount, openCart, openSearch, openContactModal, currency, setCurrency } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'iPhone', path: '/#iphone-lineup' },
    { name: 'Accessories', path: '/#accessories' },
    { name: 'Offers', path: '/#offers', badge: 'New' },
    { name: 'Contact', action: openContactModal }
  ];

  const handleLinkClick = (link, e) => {
    if (link.action) {
      e.preventDefault();
      link.action();
      return;
    }

    if (link.path.startsWith('/#')) {
      const targetId = link.path.replace('/#', '');
      const element = document.getElementById(targetId);
      if (element) {
        e.preventDefault();
        if (window.lenis) {
          window.lenis.scrollTo(element, { offset: -70 });
        } else {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-black/85 backdrop-blur-2xl border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.8)]'
            : 'bg-black/50 backdrop-blur-md border-b border-white/5'
        }`}
      >
        {/* Subtle top notification ribbon */}
        <div className="hidden md:flex justify-between items-center px-8 py-1 bg-neutral-950/80 border-b border-white/[0.04] text-[11px] text-neutral-400 font-light">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Complimentary 2-Day Express Shipping & Free Personal Engraving</span>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setCurrency(currency === 'USD' ? 'INR' : 'USD')}
              className="text-neutral-300 hover:text-white transition-colors cursor-pointer flex items-center gap-1 font-mono text-[10px] uppercase bg-white/5 px-2 py-0.5 rounded border border-white/10"
              title="Toggle Currency"
            >
              Currency: <span className="text-white font-semibold">{currency}</span>
            </button>
            <button
              onClick={openContactModal}
              className="hover:text-white transition-colors flex items-center gap-1 cursor-pointer"
            >
              <PhoneCall className="w-3 h-3 text-neutral-400" />
              <span>Apple Concierge</span>
            </button>
          </div>
        </div>

        {/* Main luxury navbar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 md:h-16 flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            to="/"
            className="flex items-center gap-2.5 text-white group focus:outline-none"
            aria-label="Apple Home"
          >
            <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-300 group-hover:bg-white/15 group-hover:border-white/30 group-hover:scale-105">
              <AppleLogo className="w-4 h-4 text-white transition-transform group-hover:scale-110" />
            </div>
            <span className="font-semibold text-lg tracking-tight text-white group-hover:text-neutral-200 transition-colors">
              Apple
            </span>
          </Link>

          {/* Desktop Navigation Menu Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path || '#'}
                onClick={(e) => handleLinkClick(link, e)}
                className="relative px-3.5 py-1.5 text-[13.5px] font-normal tracking-wide text-neutral-300 hover:text-white rounded-full hover:bg-white/[0.06] transition-all duration-200 flex items-center gap-1.5 group cursor-pointer"
              >
                <span>{link.name}</span>
                {link.badge && (
                  <span className="text-[9px] uppercase tracking-wider font-semibold px-1.5 py-0.2 rounded-full bg-white/10 text-white border border-white/20 group-hover:bg-white group-hover:text-black transition-colors">
                    {link.badge}
                  </span>
                )}
              </a>
            ))}
          </nav>

          {/* Right Action Icons: Search, Cart, CTA */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Quick Search trigger */}
            <button
              onClick={openSearch}
              className="p-2 rounded-full text-neutral-300 hover:text-white hover:bg-white/10 transition-colors focus:outline-none cursor-pointer relative"
              aria-label="Search Store"
              title="Search (⌘K)"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Shopping Bag Button with live count */}
            <button
              onClick={openCart}
              className="relative p-2 rounded-full text-neutral-300 hover:text-white hover:bg-white/10 transition-colors focus:outline-none cursor-pointer group"
              aria-label="Shopping Bag"
            >
              <ShoppingBag className="w-4 h-4 transition-transform group-hover:scale-110" />
              {itemCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-white text-black text-[10px] font-bold flex items-center justify-center animate-pulse shadow-md">
                  {itemCount}
                </span>
              )}
            </button>

            {/* Premium Buy CTA */}
            <a
              href="#iphone-lineup"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById('iphone-lineup');
                if (el) {
                  if (window.lenis) window.lenis.scrollTo(el, { offset: -70 });
                  else el.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-medium tracking-tight text-black bg-white rounded-full hover:bg-neutral-200 transition-all duration-200 hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <span>Explore Store</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-full text-neutral-300 hover:text-white hover:bg-white/10 transition-colors focus:outline-none cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed inset-0 z-40 bg-black/95 backdrop-blur-3xl pt-24 px-6 pb-8 transition-all duration-500 md:hidden flex flex-col justify-between ${
          mobileMenuOpen
            ? 'opacity-100 pointer-events-auto translate-y-0'
            : 'opacity-0 pointer-events-none -translate-y-4'
        }`}
      >
        <div className="space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <span className="text-xs uppercase tracking-widest text-neutral-500 font-semibold">
              Navigation
            </span>
            <button
              onClick={() => setCurrency(currency === 'USD' ? 'INR' : 'USD')}
              className="text-xs text-neutral-300 bg-white/10 px-2.5 py-1 rounded-full border border-white/20 font-mono"
            >
              Currency: {currency}
            </button>
          </div>

          <div className="flex flex-col space-y-4">
            {navLinks.map((link, idx) => (
              <a
                key={link.name}
                href={link.path || '#'}
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  handleLinkClick(link, e);
                }}
                className="text-2xl font-light tracking-tight text-neutral-200 hover:text-white flex items-center justify-between py-1 transition-colors"
                style={{ transitionDelay: `${idx * 40}ms` }}
              >
                <span>{link.name}</span>
                {link.badge ? (
                  <span className="text-xs uppercase px-2 py-0.5 rounded-full bg-white text-black font-semibold">
                    {link.badge}
                  </span>
                ) : (
                  <ArrowUpRight className="w-4 h-4 text-neutral-600" />
                )}
              </a>
            ))}
          </div>

          {/* Quick search input in mobile drawer */}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              openSearch();
            }}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-neutral-400 text-sm hover:text-white hover:bg-white/10 transition-all text-left"
          >
            <Search className="w-4 h-4 text-neutral-400" />
            <span>Search iPhone models, accessories...</span>
          </button>
        </div>

        {/* Mobile footer CTA */}
        <div className="pt-6 border-t border-white/10 space-y-3">
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              openContactModal();
            }}
            className="w-full py-3 rounded-full text-center text-sm font-medium text-white border border-white/20 hover:bg-white/10 transition-colors"
          >
            Speak with an Apple Specialist
          </button>
          <a
            href="#iphone-lineup"
            onClick={(e) => {
              setMobileMenuOpen(false);
              const el = document.getElementById('iphone-lineup');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-full py-3 rounded-full text-center text-sm font-medium text-black bg-white hover:bg-neutral-200 transition-colors block"
          >
            View All iPhone Models
          </a>
        </div>
      </div>
    </>
  );
};
