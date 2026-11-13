import React, { useState } from 'react';
import { ArrowUpRight, ShoppingBag, Check, Sparkles, SlidersHorizontal, ChevronRight } from 'lucide-react';
import { products, formatCurrency } from '../../data/products';
import { useCart } from '../../context/CartContext';

export const ProductListing = ({ onSelectProduct }) => {
  const { addToCart, currency } = useCart();
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedColorMap, setSelectedColorMap] = useState({});

  const filterTabs = [
    { id: 'all', label: 'All Models' },
    { id: 'pro', label: 'Pro Series' },
    { id: 'standard', label: 'Standard Series' },
    { id: 'flagship', label: 'Innovation & Fold' },
    { id: 'accessories', label: 'Accessories' }
  ];

  const filteredProducts = products.filter(p => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'accessories') return p.category === 'Accessories';
    return p.series === activeFilter;
  });

  const handleColorSelect = (productId, colorObj) => {
    setSelectedColorMap(prev => ({
      ...prev,
      [productId]: colorObj
    }));
  };

  const handleQuickBuy = (product) => {
    const activeColor = selectedColorMap[product.id] || product.colors[0];
    const defaultStorage = product.storageOptions[0];
    addToCart(product, activeColor, defaultStorage);
  };

  return (
    <section id="iphone-lineup" className="py-20 md:py-28 bg-black relative">
      {/* Background illumination */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-white/[0.02] blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-white/10 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-2">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              <span>Which iPhone is right for you?</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
              Explore the Lineup.
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base mt-2 max-w-xl">
              Engineered with relentless attention to detail. Compare power, camera optics, battery endurance, and materials.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1 rounded-full bg-neutral-900/90 border border-white/10 mt-6 md:mt-0 overflow-x-auto scrollbar-none">
            {filterTabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all whitespace-nowrap cursor-pointer ${
                  activeFilter === tab.id
                    ? 'bg-white text-black shadow-md font-semibold'
                    : 'text-neutral-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProducts.map(product => {
            const activeColor = selectedColorMap[product.id] || product.colors[0];
            const currentImg = activeColor.image || product.image;
            const price = currency === 'INR' ? product.priceInr : product.price;

            return (
              <div
                key={product.id}
                className="group relative rounded-3xl bg-neutral-950/70 border border-white/10 hover:border-white/30 transition-all duration-500 p-6 sm:p-7 flex flex-col justify-between overflow-hidden hover:shadow-[0_15px_45px_rgba(0,0,0,0.9)] hover:-translate-y-1"
              >
                {/* Top Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/10 text-white border border-white/15">
                    {product.badge}
                  </span>
                  <span className="text-xs text-neutral-500 font-mono">
                    {product.category}
                  </span>
                </div>

                {/* Device Visual Image Frame */}
                <div
                  className="relative aspect-square w-full my-4 flex items-center justify-center cursor-pointer overflow-hidden rounded-2xl bg-neutral-900/40 p-4"
                  onClick={() => onSelectProduct(product.id)}
                >
                  <img
                    src={currentImg}
                    alt={product.name}
                    className="w-full h-full object-contain filter drop-shadow-[0_10px_25px_rgba(0,0,0,0.8)] transition-transform duration-700 group-hover:scale-108"
                    loading="lazy"
                  />

                  {/* Quick color indicator overlay */}
                  <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] text-neutral-300 border border-white/10">
                    {activeColor.name}
                  </div>
                </div>

                {/* Color Swatches */}
                <div className="flex items-center justify-center gap-2 mb-4">
                  {product.colors.map(color => (
                    <button
                      key={color.name}
                      onClick={() => handleColorSelect(product.id, color)}
                      className={`w-5 h-5 rounded-full transition-all duration-200 cursor-pointer p-0.5 ${
                        activeColor.name === color.name
                          ? 'ring-2 ring-white ring-offset-2 ring-offset-black scale-110'
                          : 'opacity-70 hover:opacity-100 hover:scale-105'
                      }`}
                      style={{ backgroundColor: color.hex }}
                      title={color.name}
                      aria-label={color.name}
                    />
                  ))}
                </div>

                {/* Product Info */}
                <div className="space-y-2 mb-6">
                  <div className="flex items-baseline justify-between">
                    <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-neutral-200 transition-colors">
                      {product.name}
                    </h3>
                    <div className="text-right">
                      <span className="text-sm font-semibold text-white">
                        {formatCurrency(price, currency)}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-neutral-400 font-light line-clamp-2">
                    {product.tagline}
                  </p>

                  {/* Specs Quick Matrix */}
                  <div className="pt-3 border-t border-white/5 space-y-1.5 text-[11px] text-neutral-400">
                    <div className="flex items-center justify-between">
                      <span className="text-neutral-500">Display:</span>
                      <span className="text-neutral-300 font-medium truncate max-w-[190px]">
                        {product.specs.display}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-neutral-500">Silicon:</span>
                      <span className="text-neutral-300 font-medium truncate max-w-[190px]">
                        {product.specs.chip}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-neutral-500">Camera:</span>
                      <span className="text-neutral-300 font-medium truncate max-w-[190px]">
                        {product.specs.camera}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Actions: Explore More & Buy Now */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <button
                    onClick={() => onSelectProduct(product.id)}
                    className="py-2.5 px-3 rounded-full text-xs font-medium text-white bg-white/10 hover:bg-white/20 border border-white/15 transition-all flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <span>Explore More</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400" />
                  </button>

                  <button
                    onClick={() => handleQuickBuy(product)}
                    className="py-2.5 px-3 rounded-full text-xs font-semibold text-black bg-white hover:bg-neutral-200 transition-all flex items-center justify-center gap-1.5 shadow-[0_0_15px_rgba(255,255,255,0.15)] cursor-pointer"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>Buy Now</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
