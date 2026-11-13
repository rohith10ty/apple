import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X, ArrowUpRight } from 'lucide-react';
import { AppleLogo } from '../common/AppleLogo';
import { useCart } from '../../context/CartContext';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { itemCount, openCart, openSearch, openContactModal, currency, setCurrency } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'iPhone', path: '/#iphone-lineup' },
    { name: 'Accessories', path: '/#accessories' },
    { name: 'Offers', path: '/#offers', badge: 'NEW' },
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
          window.lenis.scrollTo(element, { offset: -60 });
        } else {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-black/85 backdrop-blur-2xl border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.8)]'
            : 'bg-black/60 backdrop-blur-xl border-b border-white/[0.06]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-12 md:h-14 flex items-center justify-between">
          {/* Logo with Apple text beside it */}
          <Link
            to="/"
            className="flex items-center gap-2 text-white/95 hover:text-white transition-opacity focus:outline-none py-1 group"
            aria-label="Apple Home"
          >
            <AppleLogo className="w-5 h-5 md:w-[22px] md:h-[22px] transition-transform duration-200 group-hover:scale-105" />
            <span className="font-semibold text-base md:text-lg tracking-tight text-white group-hover:text-neutral-200 transition-colors">
              Apple
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path || '#'}
                onClick={(e) => handleLinkClick(link, e)}
                className="text-[12px] lg:text-[13px] font-normal tracking-tight text-neutral-300 hover:text-white transition-colors duration-150 flex items-center gap-1.5 cursor-pointer"
              >
                <span>{link.name}</span>
                {link.badge && (
                  <span className="text-[9px] uppercase tracking-wider font-semibold px-1.5 py-0.2 rounded-full bg-white/10 text-neutral-200 border border-white/15">
                    {link.badge}
                  </span>
                )}
              </a>
            ))}
          </nav>

          {/* Right Action Icons: Search, Cart, Currency, CTA */}
          <div className="flex items-center gap-2 sm:gap-3.5">
            {/* Currency toggle */}
            <button
              onClick={() => setCurrency(currency === 'USD' ? 'INR' : 'USD')}
              className="hidden lg:flex items-center text-[10px] font-mono text-neutral-400 hover:text-white transition-colors px-2 py-0.5 rounded bg-white/5 border border-white/10 cursor-pointer"
              title="Toggle Currency"
            >
              {currency}
            </button>

            {/* Quick Search trigger */}
            <button
              onClick={openSearch}
              className="p-1.5 rounded-full text-neutral-300 hover:text-white hover:bg-white/10 transition-colors focus:outline-none cursor-pointer"
              aria-label="Search Store"
              title="Search (⌘K)"
            >
              <Search className="w-3.5 h-3.5" />
            </button>

            {/* Shopping Bag Button with live count */}
            <button
              onClick={openCart}
              className="relative p-1.5 rounded-full text-neutral-300 hover:text-white hover:bg-white/10 transition-colors focus:outline-none cursor-pointer group"
              aria-label="Shopping Bag"
            >
              <ShoppingBag className="w-3.5 h-3.5 transition-transform group-hover:scale-110" />
              {itemCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-white text-black text-[9px] font-bold flex items-center justify-center shadow-md">
                  {itemCount}
                </span>
              )}
            </button>

            {/* Premium Explore Store CTA */}
            <a
              href="#iphone-lineup"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById('iphone-lineup');
                if (el) {
                  if (window.lenis) window.lenis.scrollTo(el, { offset: -60 });
                  else el.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1 text-[11px] font-medium tracking-tight text-black bg-white rounded-full hover:bg-neutral-200 transition-all duration-200 hover:shadow-[0_0_15px_rgba(255,255,255,0.25)] cursor-pointer"
            >
              <span>Explore Store</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 rounded-full text-neutral-300 hover:text-white hover:bg-white/10 transition-colors focus:outline-none cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed inset-0 z-40 bg-black/95 backdrop-blur-3xl pt-20 px-6 pb-8 transition-all duration-300 md:hidden flex flex-col justify-between ${
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
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path || '#'}
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  handleLinkClick(link, e);
                }}
                className="text-2xl font-light tracking-tight text-neutral-200 hover:text-white flex items-center justify-between py-1 transition-colors"
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
