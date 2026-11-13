import React, { useState, useEffect } from 'react';
import { Search, X, ArrowUpRight, ShoppingBag } from 'lucide-react';
import { products, formatCurrency } from '../../data/products';
import { useCart } from '../../context/CartContext';

export const SearchModal = ({ onSelectProduct }) => {
  const { isSearchOpen, closeSearch, currency } = useCart();
  const [query, setQuery] = useState('');

  // Keyboard shortcut listener (Cmd+K / Ctrl+K and Esc)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        // toggle search if handled in context
      }
      if (e.key === 'Escape') {
        closeSearch();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [closeSearch]);

  if (!isSearchOpen) return null;

  const results = products.filter(p => {
    if (!query.trim()) return false;
    const q = query.toLowerCase();
    return (
      p.name.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.tagline.toLowerCase().includes(q) ||
      p.specs.display.toLowerCase().includes(q) ||
      p.specs.chip.toLowerCase().includes(q) ||
      p.specs.camera.toLowerCase().includes(q)
    );
  });

  const popularSearches = ['iPhone 18 Pro', 'Titanium', 'AirPods Pro', 'A20 Pro', 'iPhone Air', 'Foldable'];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-2xl flex items-start justify-center pt-20 p-4 animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-neutral-950 rounded-3xl border border-white/15 shadow-[0_25px_80px_rgba(0,0,0,0.95)] overflow-hidden">
        {/* Search Input Bar */}
        <div className="p-4 sm:p-6 border-b border-white/10 flex items-center gap-3">
          <Search className="w-5 h-5 text-neutral-400 shrink-0" />
          <input
            type="text"
            autoFocus
            placeholder="Search iPhone models, chip silicon, accessories..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            className="w-full bg-transparent text-white text-base sm:text-lg focus:outline-none placeholder-neutral-500"
          />
          <button
            onClick={closeSearch}
            className="p-1.5 rounded-full text-neutral-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results or Suggestions */}
        <div className="p-6 max-h-96 overflow-y-auto">
          {query.trim() === '' ? (
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-wider text-neutral-500 font-semibold block">
                Popular Searches
              </span>
              <div className="flex flex-wrap gap-2">
                {popularSearches.map(item => (
                  <button
                    key={item}
                    onClick={() => setQuery(item)}
                    className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-neutral-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          ) : results.length > 0 ? (
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-wider text-neutral-500 font-semibold block">
                Products ({results.length})
              </span>
              <div className="space-y-2">
                {results.map(product => {
                  const price = currency === 'INR' ? product.priceInr : product.price;
                  return (
                    <div
                      key={product.id}
                      onClick={() => {
                        closeSearch();
                        onSelectProduct(product.id);
                      }}
                      className="p-3 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/20 hover:bg-white/5 transition-all flex items-center justify-between cursor-pointer group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-neutral-900 border border-white/5 p-1 flex items-center justify-center shrink-0">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-white group-hover:text-neutral-200">
                            {product.name}
                          </h4>
                          <span className="text-xs text-neutral-400 font-mono">
                            {formatCurrency(price, currency)}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 text-xs text-neutral-400 group-hover:text-white">
                        <span>Configure</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            <div className="text-center py-12 text-neutral-500 text-xs">
              No matching products found for "{query}".
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
