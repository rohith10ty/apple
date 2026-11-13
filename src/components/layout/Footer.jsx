import React from 'react';
import { AppleLogo } from '../common/AppleLogo';
import { Globe, Phone, Mail, MapPin } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export const Footer = () => {
  const { openContactModal } = useCart();

  return (
    <footer className="bg-neutral-950 text-neutral-400 text-[11px] border-t border-white/10 pt-12 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Footnotes & Legal Disclaimers */}
        <div className="space-y-2 border-b border-white/10 pb-8 text-neutral-500 leading-relaxed font-light">
          <p>
            1. Trade-in values vary based on the condition, year, and configuration of your eligible trade-in device. Not all devices are eligible for credit. You must be at least 18 years old to be eligible to trade in for credit or for an Apple Gift Card. Trade-in value may be applied toward qualifying new device purchase, or added to an Apple Gift Card. Actual value awarded is based on receipt of a qualifying device matching the description provided when estimate was made.
          </p>
          <p>
            2. Battery life claims depend on network configuration, carrier network, signal strength, and many other factors; actual results will vary. Fast charging testing conducted with paired 25W MagSafe Charger and Apple USB-C Power Adapter.
          </p>
          <p>
            3. Apple Intelligence is available in beta on all iPhone 18 and iPhone 17 models with Siri and device language set to English (U.S., UK, Australia, Canada, Ireland, New Zealand, South Africa, India).
          </p>
        </div>

        {/* Multi-Column Directory */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 py-4">
          {/* Col 1: Shop & Learn */}
          <div className="space-y-3">
            <h4 className="text-white font-semibold text-xs tracking-tight">Shop and Learn</h4>
            <ul className="space-y-2">
              <li><a href="#iphone-lineup" className="hover:text-white transition-colors">iPhone 18 Pro</a></li>
              <li><a href="#iphone-lineup" className="hover:text-white transition-colors">iPhone 17 Pro</a></li>
              <li><a href="#iphone-lineup" className="hover:text-white transition-colors">iPhone Air</a></li>
              <li><a href="#iphone-lineup" className="hover:text-white transition-colors">iPhone Duo</a></li>
              <li><a href="#iphone-lineup" className="hover:text-white transition-colors">iPhone 17</a></li>
              <li><a href="#accessories" className="hover:text-white transition-colors">AirPods Pro</a></li>
              <li><a href="#accessories" className="hover:text-white transition-colors">Apple Watch</a></li>
            </ul>
          </div>

          {/* Col 2: Apple Wallet & Account */}
          <div className="space-y-3">
            <h4 className="text-white font-semibold text-xs tracking-tight">Apple Wallet</h4>
            <ul className="space-y-2">
              <li><a href="#offers" className="hover:text-white transition-colors">Apple Card</a></li>
              <li><a href="#offers" className="hover:text-white transition-colors">Apple Pay</a></li>
              <li><a href="#offers" className="hover:text-white transition-colors">0% Installments</a></li>
              <li><a href="#offers" className="hover:text-white transition-colors">Apple Cash</a></li>
            </ul>

            <h4 className="text-white font-semibold text-xs tracking-tight pt-4">Account</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Manage Your Apple ID</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Apple Store Account</a></li>
              <li><a href="#" className="hover:text-white transition-colors">iCloud.com</a></li>
            </ul>
          </div>

          {/* Col 3: Entertainment & Business */}
          <div className="space-y-3">
            <h4 className="text-white font-semibold text-xs tracking-tight">Entertainment</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Apple TV+</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Apple Music</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Apple Arcade</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Apple Podcasts</a></li>
            </ul>

            <h4 className="text-white font-semibold text-xs tracking-tight pt-4">For Business</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Apple and Business</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Shop for Business</a></li>
            </ul>
          </div>

          {/* Col 4: Apple Store & Concierge */}
          <div className="space-y-3">
            <h4 className="text-white font-semibold text-xs tracking-tight">Apple Store</h4>
            <ul className="space-y-2">
              <li><button onClick={openContactModal} className="hover:text-white transition-colors text-left cursor-pointer">Find a Store</button></li>
              <li><button onClick={openContactModal} className="hover:text-white transition-colors text-left cursor-pointer">Genius Bar</button></li>
              <li><button onClick={openContactModal} className="hover:text-white transition-colors text-left cursor-pointer">Today at Apple</button></li>
              <li><button onClick={openContactModal} className="hover:text-white transition-colors text-left cursor-pointer">Apple Camp</button></li>
              <li><a href="#offers" className="hover:text-white transition-colors">Apple Trade In</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Order Status</a></li>
            </ul>
          </div>

          {/* Col 5: Apple Values & Contact */}
          <div className="space-y-3">
            <h4 className="text-white font-semibold text-xs tracking-tight">Apple Values</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Accessibility</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Education</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Environment</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Inclusion and Diversity</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
            </ul>

            <h4 className="text-white font-semibold text-xs tracking-tight pt-4">Contact Info</h4>
            <ul className="space-y-1.5 text-neutral-400">
              <li className="flex items-center gap-1.5">
                <Phone className="w-3 h-3 text-neutral-500" />
                <span>1-800-MY-APPLE</span>
              </li>
              <li className="flex items-center gap-1.5">
                <MapPin className="w-3 h-3 text-neutral-500" />
                <span>One Apple Park Way, Cupertino</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact info callout */}
        <div className="pt-4 border-t border-white/10 text-neutral-500 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <p>
            More ways to shop:{' '}
            <button onClick={openContactModal} className="text-white underline cursor-pointer">
              Find an Apple Store
            </button>{' '}
            or{' '}
            <button onClick={openContactModal} className="text-white underline cursor-pointer">
              other retailer
            </button>{' '}
            near you. Or call 1-800-MY-APPLE.
          </p>
          <div className="flex items-center gap-1 text-neutral-300">
            <Globe className="w-3.5 h-3.5" />
            <span>United States / India (English)</span>
          </div>
        </div>

        {/* Bottom Copyright & Legal Links */}
        <div className="pt-4 flex flex-col md:flex-row md:items-center justify-between gap-4 text-neutral-500 text-[10px]">
          <div>
            Copyright © 2026 Apple Inc. All rights reserved.
          </div>
          <div className="flex flex-wrap gap-x-4 gap-y-1">
            <a href="#" className="hover:text-neutral-300 transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-neutral-300 transition-colors">Terms of Use</a>
            <span>•</span>
            <a href="#" className="hover:text-neutral-300 transition-colors">Sales Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-neutral-300 transition-colors">Legal</a>
            <span>•</span>
            <a href="#" className="hover:text-neutral-300 transition-colors">Site Map</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
