import React, { useState } from 'react';
import { Tag, Sparkles, ArrowRight, ShieldCheck, CreditCard, GraduationCap, RefreshCw, Check } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { formatCurrency } from '../../data/products';

export const OffersSection = () => {
  const { currency } = useCart();
  const [selectedDevice, setSelectedDevice] = useState('iphone-15-pro');

  const tradeInEstimates = {
    'iphone-15-pro': { name: 'iPhone 15 Pro Max', creditUsd: 650, creditInr: 58000 },
    'iphone-14-pro': { name: 'iPhone 14 Pro', creditUsd: 460, creditInr: 42000 },
    'iphone-13': { name: 'iPhone 13', creditUsd: 300, creditInr: 28000 },
    'other-android': { name: 'Samsung / Pixel Flagship', creditUsd: 380, creditInr: 35000 }
  };

  const currentEstimate = tradeInEstimates[selectedDevice];
  const creditValue = currency === 'INR' ? currentEstimate.creditInr : currentEstimate.creditUsd;

  return (
    <section id="offers" className="py-20 md:py-28 bg-black relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.07] border border-white/15 text-neutral-300 text-xs font-medium tracking-wider uppercase">
            <Tag className="w-3.5 h-3.5 text-white" />
            <span>Exclusive Apple Offers & Trade-In</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Ways to Save & Upgrade.
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base font-light">
            Turn the device you have into the device you want with instant trade-in credit and flexible monthly installments.
          </p>
        </div>

        {/* 3 Luxury Offer Banners */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Banner 1: Apple Trade In Interactive */}
          <div className="rounded-3xl bg-neutral-950/80 border border-white/15 p-6 sm:p-8 flex flex-col justify-between hover:border-white/30 transition-all">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white">
                <RefreshCw className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight">Apple Trade In</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Get up to {formatCurrency(currency === 'INR' ? 65000 : 650, currency)} in credit when you trade in your current smartphone.
              </p>

              {/* Quick Trade-in selector */}
              <div className="pt-2 space-y-2">
                <span className="text-[11px] text-neutral-400 block font-medium">Select your current device:</span>
                <select
                  value={selectedDevice}
                  onChange={e => setSelectedDevice(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/15 text-white text-xs focus:outline-none focus:border-white transition-colors cursor-pointer"
                >
                  <option value="iphone-15-pro" className="bg-neutral-900">iPhone 15 Pro Max</option>
                  <option value="iphone-14-pro" className="bg-neutral-900">iPhone 14 Pro</option>
                  <option value="iphone-13" className="bg-neutral-900">iPhone 13</option>
                  <option value="other-android" className="bg-neutral-900">Samsung / Pixel Flagship</option>
                </select>

                <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 mt-3 flex items-center justify-between">
                  <span className="text-xs text-neutral-400">Estimated Value:</span>
                  <span className="text-sm font-bold text-emerald-400 font-mono">
                    +{formatCurrency(creditValue, currency)}
                  </span>
                </div>
              </div>
            </div>

            <a
              href="#iphone-lineup"
              className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold text-white hover:text-neutral-300 transition-colors"
            >
              <span>Apply Credit to New iPhone</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Banner 2: 0% Interest Financing & Apple Card */}
          <div className="rounded-3xl bg-neutral-950/80 border border-white/15 p-6 sm:p-8 flex flex-col justify-between hover:border-white/30 transition-all">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white">
                <CreditCard className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight">0% No-Cost EMI</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Spread the cost over 12 or 24 months with zero interest and zero down payment on qualifying credit cards.
              </p>

              <div className="space-y-2 pt-2">
                <div className="flex items-center gap-2 text-xs text-neutral-300">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>3% Daily Cash back with Apple Card</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-neutral-300">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Instant online approval with zero paperwork</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-neutral-300">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Flexible tenure options (3 to 24 months)</span>
                </div>
              </div>
            </div>

            <a
              href="#iphone-lineup"
              className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold text-white hover:text-neutral-300 transition-colors"
            >
              <span>Explore Monthly Plans</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Banner 3: Education & Student Pricing */}
          <div className="rounded-3xl bg-neutral-950/80 border border-white/15 p-6 sm:p-8 flex flex-col justify-between hover:border-white/30 transition-all">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight">Education Savings</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Save on a new iPhone, Mac, or iPad with Apple Education pricing. Available to current and newly accepted college students and faculty.
              </p>

              <div className="space-y-2 pt-2">
                <div className="flex items-center gap-2 text-xs text-neutral-300">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Up to 10% off retail pricing</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-neutral-300">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>20% discount on AppleCare+ protection</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-neutral-300">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Free personal laser engraving included</span>
                </div>
              </div>
            </div>

            <a
              href="#iphone-lineup"
              className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold text-white hover:text-neutral-300 transition-colors"
            >
              <span>Shop Education Store</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
