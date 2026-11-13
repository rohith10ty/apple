# Apple — Premium iPhone Store Website

An ultra-modern, luxury, responsive iPhone Store website inspired by Apple's official design system and keynote presentations.

Built with **React.js (Vite)**, **Tailwind CSS v4**, **Outfit font typography**, and **Lenis smooth scrolling**.

---

## 🌟 Key Features

### 1. Luxury Black & White / Obsidian Aesthetic
- Deep obsidian `#000000` & `#080808` surfaces with precision titanium borders and translucent 24px backdrop-blur glass panels.
- Sleek monochromatic typography using the **Outfit** Google Font family.
- Completely hidden scrollbars across all modern browsers (`scrollbar-width: none` & `::-webkit-scrollbar { display: none }`).
- Inertial smooth momentum scrolling powered by **Lenis**.

### 2. Bespoke Keynote Hero & Navigation
- **Frosted Translucent Navbar**: Apple logo icon, links (`Home`, `iPhone`, `Accessories`, `Offers`, `Contact`), quick `⌘K` search trigger, shopping bag with live animated badge counter, currency switcher (USD / INR), and mobile drawer menu.
- **Keynote Hero Stage**: Dynamic high-definition video showcase (`iphone-18-pro-hero-desktop.mp4`), interactive titanium finish switcher (Black Titanium, Glacier White, Burgundy Titanium, Natural Silver) updating color badges in real time, floating luxury spec capsules (A20 Pro 3nm Silicon, Variable-Aperture Optics, Grade 5 Titanium, 33h Battery), and reveal film modal.

### 3. Product Lineup & Interactive Studio Configurator
- **Lineup Filter**: Filter across All Models, Pro Series, Standard Series, Innovation & Fold, and Accessories.
- **Product Details Modal**: Multi-angle image gallery with thumbnail previews, display size switcher (6.3" vs 6.9"), storage options (128GB, 256GB, 512GB, 1TB) with live price recalculation, interactive Apple Trade-In estimator discount (-$250 / -₹25,000), and optional AppleCare+ coverage.

### 4. Shopping Cart & 1-Click Apple Pay Checkout
- **Slide-Over Bag Drawer**: Add, update quantity, or remove items. Displays free express shipping badge, subtotal, tax calculation, and order total.
- **Persisted State**: Saved to `localStorage` (`apple_store_cart`) so bag contents persist across reloads.
- **Apple Checkout Modal**: Simulated Apple Pay & card authorization with celebratory confetti explosion and instant order receipt generation.

### 5. Concierge & Live Chat
- **Apple Specialist Live Chat**: Simulated interactive specialist with context-aware responses on camera, battery, silicon, and trade-in.
- **Genius Bar Booking**: Reserve 1:1 sessions at Apple BKC, Saket, or Fifth Ave.
- **Toll-Free Support**: 1-800-MY-APPLE directory.

---

## 🚀 Quick Start

### Prerequisites
- Node.js (v18+)
- npm or pnpm

### Installation
```bash
# Clone the repository
git clone <repository-url>
cd "apple website"

# Install dependencies
npm install

# Start development server
npm run dev
```

### Production Build
```bash
npm run build
npm run preview
```

---

## 📦 Deployment

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod
```

Or connect the GitHub repository directly to Vercel/Netlify with build command `npm run build` and publish directory `dist`.
