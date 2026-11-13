import React from 'react';
import { ArrowUpRight, ShoppingBag, Volume2, Music, Watch, Sparkles } from 'lucide-react';
import { products, formatCurrency } from '../../data/products';
import { useCart } from '../../context/CartContext';

export const AccessoriesSection = ({ onSelectProduct }) => {
  const { addToCart, currency } = useCart();
  const accessories = products.filter(p => p.category === 'Accessories');

  const handleQuickAdd = (item) => {
    addToCart(item, item.colors[0], item.storageOptions[0]);
  };

  return (
    <section id="accessories" className="py-20 md:py-28 bg-neutral-950 relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-2">
              <Sparkles className="w-3.5 h-3.5 text-white" />
              <span>Engineered to Pair Seamlessly</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
              Accessories & Audio.
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base mt-2 max-w-xl">
              Elevate your iPhone experience with studio-grade spatial acoustic listening and precision health tracking.
            </p>
          </div>
        </div>

        {/* Accessories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {accessories.map(item => {
            const price = currency === 'INR' ? item.priceInr : item.price;
            return (
              <div
                key={item.id}
                className="group relative rounded-3xl bg-black/60 border border-white/10 hover:border-white/30 transition-all duration-500 p-6 sm:p-8 flex flex-col justify-between hover:shadow-[0_20px_50px_rgba(0,0,0,0.8)] hover:-translate-y-1"
              >
                {/* Top Badge */}
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/10 text-white border border-white/15">
                    {item.badge}
                  </span>
                  <span className="text-sm font-semibold text-white font-mono">
                    {formatCurrency(price, currency)}
                  </span>
                </div>

                {/* Image Stage */}
                <div
                  onClick={() => onSelectProduct(item.id)}
                  className="aspect-square w-full my-6 flex items-center justify-center p-4 rounded-2xl bg-neutral-900/40 border border-white/5 cursor-pointer overflow-hidden group"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-contain filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.9)] transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>

                {/* Details */}
                <div className="space-y-2 mb-6">
                  <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-neutral-200 transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-xs text-neutral-400 font-light line-clamp-2">
                    {item.tagline}
                  </p>
                  <div className="pt-2 text-[11px] text-neutral-500">
                    <span>{item.specs.battery}</span>
                  </div>
                </div>

                {/* Buttons */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <button
                    onClick={() => onSelectProduct(item.id)}
                    className="py-2.5 px-3 rounded-full text-xs font-medium text-white bg-white/10 hover:bg-white/20 border border-white/15 transition-all flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <span>Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400" />
                  </button>

                  <button
                    onClick={() => handleQuickAdd(item)}
                    className="py-2.5 px-3 rounded-full text-xs font-semibold text-black bg-white hover:bg-neutral-200 transition-all flex items-center justify-center gap-1.5 shadow-[0_0_15px_rgba(255,255,255,0.15)] cursor-pointer"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>Add to Bag</span>
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
