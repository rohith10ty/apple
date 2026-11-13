import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { LenisScroll } from './components/common/LenisScroll';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/home/Hero';
import { CraftsmanshipSection } from './components/home/CraftsmanshipSection';
import { ProductListing } from './components/shop/ProductListing';
import { AccessoriesSection } from './components/home/AccessoriesSection';
import { OffersSection } from './components/home/OffersSection';
import { Footer } from './components/layout/Footer';
import { ProductDetailModal } from './components/product/ProductDetailModal';
import { CartDrawer } from './components/cart/CartDrawer';
import { CheckoutModal } from './components/cart/CheckoutModal';
import { SearchModal } from './components/common/SearchModal';
import { ContactModal } from './components/common/ContactModal';
import { FilmModal } from './components/common/FilmModal';
import { Toast } from './components/common/Toast';

export function AppContent() {
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [isFilmOpen, setIsFilmOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-neutral-100 flex flex-col selection:bg-neutral-800 selection:text-white">
      {/* Lenis Smooth Scroll Engine */}
      <LenisScroll />

      {/* Luxury Frosted Apple Navbar */}
      <Navbar />

      {/* Main Content Flow */}
      <main className="flex-1">
        {/* Fullscreen Keynote Hero Section */}
        <Hero
          onExploreProduct={(id) => setSelectedProductId(id)}
          onOpenFilm={() => setIsFilmOpen(true)}
        />

        {/* Dedicated Titanium Precision Craftsmanship Section */}
        <CraftsmanshipSection
          onOpenFilm={() => setIsFilmOpen(true)}
        />

        {/* Full iPhone Lineup & Filterable Grid */}
        <ProductListing
          onSelectProduct={(id) => setSelectedProductId(id)}
        />

        {/* Audio & Wearable Accessories Showcase */}
        <AccessoriesSection
          onSelectProduct={(id) => setSelectedProductId(id)}
        />

        {/* Apple Trade In & Exclusive Offers */}
        <OffersSection />
      </main>

      {/* Official Multi-Column Apple Footer */}
      <Footer />

      {/* Interactive Product Details Studio Modal */}
      {selectedProductId && (
        <ProductDetailModal
          productId={selectedProductId}
          onClose={() => setSelectedProductId(null)}
        />
      )}

      {/* Apple Bag Slide-Over Drawer */}
      <CartDrawer />

      {/* Secure Apple Pay Checkout Flow */}
      <CheckoutModal />

      {/* Live Search Modal */}
      <SearchModal
        onSelectProduct={(id) => setSelectedProductId(id)}
      />

      {/* Apple Specialist Concierge & Live Chat */}
      <ContactModal />

      {/* Keynote Reveal Video Film Modal */}
      <FilmModal
        isOpen={isFilmOpen}
        onClose={() => setIsFilmOpen(false)}
      />

      {/* Real-Time Toast Notifications */}
      <Toast />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <AppContent />
      </CartProvider>
    </BrowserRouter>
  );
}
