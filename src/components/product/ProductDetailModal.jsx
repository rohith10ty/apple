import React, { useState, useEffect } from 'react';
import {
  X, Check, ShoppingBag, ArrowLeft, Shield, Zap, Sparkles,
  ChevronRight, Award, Truck, RotateCcw, Cpu, Camera, Battery, Smartphone
} from 'lucide-react';
import { products, formatCurrency } from '../../data/products';
import { useCart } from '../../context/CartContext';

export const ProductDetailModal = ({ productId, onClose }) => {
  const { addToCart, currency } = useCart();
  const product = products.find(p => p.id === productId) || products[0];

  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedStorage, setSelectedStorage] = useState(product.storageOptions[0]);
  const [selectedModelSize, setSelectedModelSize] = useState('standard'); // 'standard' (6.3") or 'max' (6.9")
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [hasTradeIn, setHasTradeIn] = useState(false);
  const [hasAppleCare, setHasAppleCare] = useState(false);

  // Sync state if productId changes
  useEffect(() => {
    setSelectedColor(product.colors[0]);
    setSelectedStorage(product.storageOptions[0]);
    setActiveImageIndex(0);
  }, [productId, product]);

  // Gallery images combined: specific color image first, then gallery items
  const galleryImages = [
    selectedColor.image || product.image,
    ...(product.gallery || [])
  ].filter((v, i, a) => a.indexOf(v) === i); // unique

  const activeImage = galleryImages[activeImageIndex] || product.image;

  // Price calculation
  const basePrice = currency === 'INR' ? selectedStorage.priceInr : selectedStorage.price;
  const sizeSurcharge = selectedModelSize === 'max' ? (currency === 'INR' ? 12000 : 100) : 0;
  const appleCarePrice = hasAppleCare ? (currency === 'INR' ? 19900 : 199) : 0;
  const tradeInCredit = hasTradeIn ? (currency === 'INR' ? 25000 : 250) : 0;
  const finalPrice = Math.max(0, basePrice + sizeSurcharge + appleCarePrice - tradeInCredit);

  const handleAddToCart = () => {
    addToCart(
      {
        ...product,
        name: selectedModelSize === 'max' && product.category === 'iPhone' ? `${product.name} Max` : product.name
      },
      selectedColor,
      {
        size: selectedStorage.size,
        price: finalPrice,
        priceInr: finalPrice
      }
    );
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-2xl flex items-center justify-center p-2 sm:p-4 md:p-6 animate-fadeIn">
      <div className="relative w-full max-w-6xl bg-neutral-950 rounded-3xl border border-white/15 shadow-[0_25px_80px_rgba(0,0,0,0.95)] overflow-hidden my-auto">
        {/* Top Header bar with back / close */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-neutral-950/80 sticky top-0 z-20 backdrop-blur-md">
          <button
            onClick={onClose}
            className="flex items-center gap-2 text-xs font-medium text-neutral-400 hover:text-white transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Products</span>
          </button>

          <div className="flex items-center gap-3">
            <span className="text-xs uppercase tracking-wider text-neutral-400 font-mono hidden sm:inline">
              Apple Studio Configurator
            </span>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full bg-white/10 text-neutral-300 hover:text-white hover:bg-white/20 transition-all cursor-pointer"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Studio Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 max-h-[85vh] overflow-y-auto">
          {/* Left Column: Interactive Image Gallery & Specs */}
          <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/10 bg-neutral-900/30">
            {/* Main Image Stage */}
            <div className="relative aspect-square max-h-[460px] w-full flex items-center justify-center p-4 rounded-2xl bg-black/40 border border-white/5 overflow-hidden">
              <img
                src={activeImage}
                alt={product.name}
                className="max-h-full max-w-full object-contain filter drop-shadow-[0_25px_45px_rgba(0,0,0,0.9)] transition-all duration-500 hover:scale-105"
              />

              {/* Floating Color Badge */}
              <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 text-xs text-white flex items-center gap-2">
                <span
                  className="w-3 h-3 rounded-full border border-white/40"
                  style={{ backgroundColor: selectedColor.hex }}
                />
                <span>{selectedColor.name}</span>
              </div>
            </div>

            {/* Thumbnail Carousel */}
            <div className="mt-4 flex items-center gap-2.5 overflow-x-auto pb-2 scrollbar-none">
              {galleryImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`relative w-16 h-16 rounded-xl overflow-hidden shrink-0 border transition-all cursor-pointer bg-neutral-900/60 p-1 ${
                    activeImageIndex === idx
                      ? 'border-white ring-2 ring-white/50 scale-105'
                      : 'border-white/10 opacity-60 hover:opacity-100'
                  }`}
                >
                  <img
                    src={img}
                    alt={`${product.name} thumbnail ${idx}`}
                    className="w-full h-full object-contain"
                  />
                </button>
              ))}
            </div>

            {/* Highlight Badges */}
            <div className="grid grid-cols-3 gap-3 mt-6 pt-6 border-t border-white/10">
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 text-center">
                <Truck className="w-4 h-4 text-neutral-300 mx-auto mb-1" />
                <span className="text-[11px] text-neutral-300 block font-medium">Free Delivery</span>
                <span className="text-[9px] text-neutral-500">2 business days</span>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 text-center">
                <RotateCcw className="w-4 h-4 text-neutral-300 mx-auto mb-1" />
                <span className="text-[11px] text-neutral-300 block font-medium">Free Returns</span>
                <span className="text-[9px] text-neutral-500">Within 14 days</span>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 text-center">
                <Award className="w-4 h-4 text-neutral-300 mx-auto mb-1" />
                <span className="text-[11px] text-neutral-300 block font-medium">1-Year Warranty</span>
                <span className="text-[9px] text-neutral-500">Apple Official</span>
              </div>
            </div>
          </div>

          {/* Right Column: Configuration Options (Model, Finish, Storage, Add to Cart) */}
          <div className="lg:col-span-5 p-6 sm:p-8 space-y-6">
            <div>
              <span className="text-xs uppercase tracking-widest text-neutral-400 font-semibold block mb-1">
                {product.badge}
              </span>
              <h2 className="text-3xl font-bold text-white tracking-tight">
                {product.name}
              </h2>
              <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                {product.tagline}
              </p>
              <div className="mt-3 text-2xl font-bold text-white font-mono">
                {formatCurrency(finalPrice, currency)}
                {hasTradeIn && (
                  <span className="text-xs font-normal text-emerald-400 block font-sans">
                    Includes trade-in discount of -{formatCurrency(tradeInCredit, currency)}
                  </span>
                )}
              </div>
            </div>

            {/* Model Display Size (For iPhones) */}
            {product.category === 'iPhone' && (
              <div className="space-y-2.5">
                <span className="text-xs font-semibold text-neutral-300 uppercase tracking-wider block">
                  1. Select Display Size
                </span>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setSelectedModelSize('standard')}
                    className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer ${
                      selectedModelSize === 'standard'
                        ? 'border-white bg-white/10 ring-1 ring-white'
                        : 'border-white/15 bg-white/[0.02] hover:border-white/30'
                    }`}
                  >
                    <div className="text-sm font-semibold text-white">6.3-inch Display</div>
                    <div className="text-[11px] text-neutral-400 mt-0.5">Super Retina XDR</div>
                  </button>

                  <button
                    onClick={() => setSelectedModelSize('max')}
                    className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer ${
                      selectedModelSize === 'max'
                        ? 'border-white bg-white/10 ring-1 ring-white'
                        : 'border-white/15 bg-white/[0.02] hover:border-white/30'
                    }`}
                  >
                    <div className="text-sm font-semibold text-white">6.9-inch Display</div>
                    <div className="text-[11px] text-neutral-400 mt-0.5">
                      +{formatCurrency(currency === 'INR' ? 12000 : 100, currency)}
                    </div>
                  </button>
                </div>
              </div>
            )}

            {/* Finish / Color Selection */}
            <div className="space-y-2.5">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-neutral-300 uppercase tracking-wider">
                  2. Select Finish
                </span>
                <span className="text-white font-medium">{selectedColor.name}</span>
              </div>
              <div className="flex flex-wrap gap-3">
                {product.colors.map(color => (
                  <button
                    key={color.name}
                    onClick={() => {
                      setSelectedColor(color);
                      setActiveImageIndex(0);
                    }}
                    className={`flex items-center gap-2.5 px-3.5 py-2 rounded-xl border text-xs transition-all cursor-pointer ${
                      selectedColor.name === color.name
                        ? 'border-white bg-white/10 ring-1 ring-white text-white font-semibold'
                        : 'border-white/15 bg-white/[0.02] hover:border-white/30 text-neutral-300'
                    }`}
                  >
                    <span
                      className="w-4 h-4 rounded-full border border-white/30 shadow-inner"
                      style={{ backgroundColor: color.hex }}
                    />
                    <span>{color.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Storage Selection */}
            <div className="space-y-2.5">
              <span className="text-xs font-semibold text-neutral-300 uppercase tracking-wider block">
                3. Select Storage Capacity
              </span>
              <div className="grid grid-cols-3 gap-2.5">
                {product.storageOptions.map(option => (
                  <button
                    key={option.size}
                    onClick={() => setSelectedStorage(option)}
                    className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                      selectedStorage.size === option.size
                        ? 'border-white bg-white/10 ring-1 ring-white'
                        : 'border-white/15 bg-white/[0.02] hover:border-white/30'
                    }`}
                  >
                    <div className="text-sm font-bold text-white">{option.size}</div>
                    <div className="text-[10px] text-neutral-400 mt-0.5">
                      {formatCurrency(currency === 'INR' ? option.priceInr : option.price, currency)}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Trade-In Toggle */}
            <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs font-semibold text-white">Apple Trade In</div>
                  <div className="text-[11px] text-neutral-400">
                    Get up to {formatCurrency(currency === 'INR' ? 25000 : 250, currency)} instant credit
                  </div>
                </div>
                <button
                  onClick={() => setHasTradeIn(!hasTradeIn)}
                  className={`w-11 h-6 rounded-full transition-colors relative cursor-pointer ${
                    hasTradeIn ? 'bg-white' : 'bg-neutral-800'
                  }`}
                >
                  <span
                    className={`absolute top-1 left-1 w-4 h-4 rounded-full transition-transform ${
                      hasTradeIn ? 'translate-x-5 bg-black' : 'bg-neutral-400'
                    }`}
                  />
                </button>
              </div>
            </div>

            {/* AppleCare+ Protection */}
            <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs font-semibold text-white">AppleCare+ Coverage</div>
                  <div className="text-[11px] text-neutral-400">
                    Unlimited accidental damage protection (+{formatCurrency(currency === 'INR' ? 19900 : 199, currency)})
                  </div>
                </div>
                <button
                  onClick={() => setHasAppleCare(!hasAppleCare)}
                  className={`w-11 h-6 rounded-full transition-colors relative cursor-pointer ${
                    hasAppleCare ? 'bg-white' : 'bg-neutral-800'
                  }`}
                >
                  <span
                    className={`absolute top-1 left-1 w-4 h-4 rounded-full transition-transform ${
                      hasAppleCare ? 'translate-x-5 bg-black' : 'bg-neutral-400'
                    }`}
                  />
                </button>
              </div>
            </div>

            {/* Add to Bag CTA */}
            <div className="pt-2">
              <button
                onClick={handleAddToCart}
                className="w-full py-3.5 px-6 rounded-full bg-white text-black font-bold text-sm hover:bg-neutral-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.25)] flex items-center justify-center gap-2 cursor-pointer"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Add to Bag — {formatCurrency(finalPrice, currency)}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
