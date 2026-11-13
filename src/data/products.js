export const products = [
  {
    id: 'iphone-18-pro',
    name: 'iPhone 18 Pro',
    category: 'iPhone',
    series: 'pro',
    price: 1199,
    priceInr: 134900,
    tagline: 'Titanium. So strong. So light. So Pro.',
    description: 'Forged in aerospace-grade titanium with the groundbreaking A20 Pro chip, a revolutionary variable-aperture 48MP camera system, and built from the ground up for Apple Intelligence.',
    specs: {
      display: '6.3" or 6.9" Super Retina XDR ProMotion 120Hz',
      chip: 'A20 Pro chip with 6-core GPU & Neural Engine',
      camera: '48MP Fusion with physical step-less aperture & 5x Telephoto',
      battery: 'Up to 33 hours video playback, 50% charge in 30 min',
      chassis: 'Grade 5 Titanium unibody with ceramic shield front',
      weight: '199 grams'
    },
    colors: [
      { name: 'Black Titanium', hex: '#262626', image: '/assets/iphone-18-pro-black.jpg' },
      { name: 'Glacier White', hex: '#dce4ec', image: '/assets/iphone-18-pro-glacier.jpg' },
      { name: 'Burgundy Titanium', hex: '#6b3644', image: '/assets/iphone-18-pro-burgundy.jpg' },
      { name: 'Natural Silver', hex: '#d2d2d7', image: '/assets/iphone-18-pro-silver.jpg' }
    ],
    storageOptions: [
      { size: '256GB', price: 1199, priceInr: 134900 },
      { size: '512GB', price: 1399, priceInr: 154900 },
      { size: '1TB', price: 1599, priceInr: 174900 }
    ],
    badge: 'Latest Flagship',
    image: '/assets/iphone-18-pro-card.jpg',
    hero: '/assets/iphone-18-pro-hero.jpg',
    video: '/assets/iphone-18-pro/iphone-18-pro-hero-desktop.mp4',
    gallery: [
      '/assets/iphone-18-pro-view-0.jpg',
      '/assets/iphone-18-pro-view-1.jpg',
      '/assets/iphone-18-pro-view-2.jpg',
      '/assets/iphone-18-pro-view-3.jpg',
      '/assets/iphone-18-pro-view-4.jpg',
      '/assets/iphone-18-pro-view-5.jpg',
      '/assets/supplied/iphone-18-pro-lineup.jpg',
      '/assets/supplied/iphone-18-pro-chip.jpg',
      '/assets/supplied/iphone-18-pro-design.jpg'
    ],
    features: [
      {
        title: 'Variable Aperture Optics',
        desc: 'Groundbreaking physical mechanical aperture adapts smoothly between f/1.4 and f/4.0 for true cinematic optical bokeh.',
        icon: 'Camera'
      },
      {
        title: 'A20 Pro Silicon',
        desc: 'Dual 16-core Neural Accelerators capable of running multi-modal generative AI models entirely on-device with zero latency.',
        icon: 'Cpu'
      },
      {
        title: 'Vapor Chamber Architecture',
        desc: 'Laser-welded thermal dissipation grid with deionized water structure delivering up to 30% higher sustained gaming performance.',
        icon: 'Zap'
      },
      {
        title: 'Customizable Action & Camera Control',
        desc: 'Tactile sapphire crystal button with dual-stage force sensor for instant focal length changes, exposure zoom, and shutter trigger.',
        icon: 'Sliders'
      }
    ]
  },
  {
    id: 'iphone-17-pro',
    name: 'iPhone 17 Pro',
    category: 'iPhone',
    series: 'pro',
    price: 999,
    priceInr: 119900,
    tagline: 'All in. All Pro.',
    description: 'Precision sculpted aerospace unibody, tactile Camera Control, and the powerhouse A19 Pro chip with ProMotion display.',
    specs: {
      display: '6.1" Super Retina XDR OLED ProMotion 120Hz',
      chip: 'A19 Pro chip with hardware ray tracing',
      camera: '48MP Main + 12MP Ultra Wide + 12MP 5x Telephoto',
      battery: 'Up to 29 hours video playback',
      chassis: 'Aerospace-grade titanium unibody',
      weight: '187 grams'
    },
    colors: [
      { name: 'White Titanium', hex: '#e3e4e8', image: '/assets/iphone-17-pro/1a.jpg' },
      { name: 'Cosmic Orange', hex: '#df6a2a', image: '/assets/iphone-17-pro/1c.jpg' },
      { name: 'Deep Slate', hex: '#2b2f38', image: '/assets/iphone-17-pro/1b.jpg' }
    ],
    storageOptions: [
      { size: '128GB', price: 999, priceInr: 119900 },
      { size: '256GB', price: 1099, priceInr: 129900 },
      { size: '512GB', price: 1299, priceInr: 149900 },
      { size: '1TB', price: 1499, priceInr: 169900 }
    ],
    badge: 'Pro Performance',
    image: '/assets/iphone-17-pro/1c.jpg',
    hero: '/assets/iphone-17-pro/1c.jpg',
    video: '/assets/iphone-18-pro/large_2x.mp4',
    gallery: [
      '/assets/iphone-17-pro/1c.jpg',
      '/assets/iphone-17-pro/1a.jpg',
      '/assets/iphone-17-pro/1b.jpg',
      '/assets/iphone-17-pro/2.jpg',
      '/assets/iphone-17-pro/3.jpg',
      '/assets/iphone-17-pro/4.jpg',
      '/assets/iphone-17-pro/5.jpg',
      '/assets/iphone-17-pro/6.jpg',
      '/assets/iphone-17-pro/7.jpg'
    ],
    features: [
      {
        title: 'Laser-Welded Chamber',
        desc: 'Advanced cooling geometry for peak sustained gaming and ProRAW burst capture.',
        icon: 'Flame'
      },
      {
        title: 'ProMotion Display',
        desc: 'Smooth 1 to 120Hz adaptive refresh rates with 2,500 nits peak outdoor brightness.',
        icon: 'Smartphone'
      },
      {
        title: 'Next-Gen Ceramic Shield',
        desc: 'Dual-ion exchange glass that is 4x tougher than conventional smartphone glass.',
        icon: 'ShieldCheck'
      }
    ]
  },
  {
    id: 'iphone-air',
    name: 'iPhone Air',
    category: 'iPhone',
    series: 'flagship',
    price: 899,
    priceInr: 99900,
    tagline: 'Impossibly thin. Unbelievably capable.',
    description: 'At only 5.1mm thin, iPhone Air redefines what a smartphone feels like in your hand. Packed with full-day battery life and an advanced single-lens computational powerhouse.',
    specs: {
      display: '6.55" Liquid Retina XDR with ultrathin bezels',
      chip: 'A19 Bionic Silicon with high-efficiency cores',
      camera: '48MP Computational Fusion with Spatial Photo capture',
      battery: 'Up to 26 hours video playback',
      chassis: 'Featherweight 100% recycled titanium frame (5.1mm)',
      weight: '145 grams'
    },
    colors: [
      { name: 'Obsidian Black', hex: '#1c1c1e', image: '/assets/iphone-air-card.jpg' },
      { name: 'Pure White', hex: '#f2f2f7', image: '/assets/iphone-air-view-0.jpg' },
      { name: 'Sky Titanium', hex: '#a5b4fc', image: '/assets/iphone-air-view-1.jpg' }
    ],
    storageOptions: [
      { size: '256GB', price: 899, priceInr: 99900 },
      { size: '512GB', price: 1099, priceInr: 119900 },
      { size: '1TB', price: 1299, priceInr: 139900 }
    ],
    badge: 'Ultrathin Concept',
    image: '/assets/iphone-air-card.jpg',
    hero: '/assets/iphone-air-hero.jpg',
    video: '',
    gallery: [
      '/assets/iphone-air-card.jpg',
      '/assets/iphone-air-hero.jpg',
      '/assets/iphone-air-view-0.jpg',
      '/assets/iphone-air-view-1.jpg',
      '/assets/iphone-air-view-2.jpg',
      '/assets/iphone-air-view-3.jpg',
      '/assets/iphone-air-view-4.jpg',
      '/assets/iphone-air-view-5.jpg'
    ],
    features: [
      {
        title: 'Only 5.1mm Profile',
        desc: 'Engineered with a high-density stacked motherboard to achieve the thinnest iPhone ever built.',
        icon: 'Feather'
      },
      {
        title: 'Air Flow Architecture',
        desc: 'Passive structural thermal conductivity that stays cool to the touch even during 4K ProRes capture.',
        icon: 'Wind'
      }
    ]
  },
  {
    id: 'iphone-duo',
    name: 'iPhone Duo',
    category: 'iPhone',
    series: 'flagship',
    price: 1599,
    priceInr: 179900,
    tagline: 'Two screens. Endless dimension.',
    description: 'The ultra-premium dual-screen flexible OLED flagship. Seamless book-fold hinge engineered from liquid metal and titanium alloy.',
    specs: {
      display: '7.8" Foldable Inner Ultra Retina + 6.3" Outer Cover OLED',
      chip: 'A20 Pro Silicon dual-die architecture',
      camera: 'Triple 48MP system with 360-degree Spatial Capture',
      battery: 'Dual battery cells providing 36 hours continuous use',
      chassis: 'Liquidmetal hinge mechanism rated for 500,000 folds',
      weight: '235 grams'
    },
    colors: [
      { name: 'Space Black', hex: '#18181b', image: '/assets/iphone-duo-card.jpg' },
      { name: 'Platinum Silver', hex: '#e4e4e7', image: '/assets/iphone-duo-view-0.jpg' }
    ],
    storageOptions: [
      { size: '512GB', price: 1599, priceInr: 179900 },
      { size: '1TB', price: 1899, priceInr: 209900 }
    ],
    badge: 'Revolutionary Foldable',
    image: '/assets/iphone-duo-card.jpg',
    hero: '/assets/iphone-duo-hero.jpg',
    video: '/assets/iphone-duo-hero.mp4',
    gallery: [
      '/assets/iphone-duo-card.jpg',
      '/assets/iphone-duo-hero.jpg',
      '/assets/iphone-duo-view-0.jpg',
      '/assets/iphone-duo-view-1.jpg',
      '/assets/iphone-duo-view-2.jpg',
      '/assets/iphone-duo-view-3.jpg',
      '/assets/iphone-duo-view-4.jpg',
      '/assets/iphone-duo-view-5.jpg'
    ],
    features: [
      {
        title: 'Zero-Crease Liquidmetal Hinge',
        desc: 'Micro-gear fluid motion provides multi-angle flex stop with zero visible display gap.',
        icon: 'Layers'
      },
      {
        title: 'Dual Tasking Canvas',
        desc: 'Run desktop-class apps side by side with drag-and-drop file interoperability.',
        icon: 'Layout'
      }
    ]
  },
  {
    id: 'iphone-17',
    name: 'iPhone 17',
    category: 'iPhone',
    series: 'standard',
    price: 799,
    priceInr: 89900,
    tagline: 'Colour that speaks. Power that moves.',
    description: 'Vibrant color-infused back glass, A19 Bionic power, 48MP 2x Telephoto camera, and all-day battery life.',
    specs: {
      display: '6.1" Super Retina XDR OLED with Dynamic Island',
      chip: 'A19 Bionic chip with 5-core GPU',
      camera: '48MP Main with 2x optical zoom + 12MP Ultra Wide',
      battery: 'Up to 26 hours video playback',
      chassis: 'Color-infused matte glass with aerospace aluminum frame',
      weight: '170 grams'
    },
    colors: [
      { name: 'Mist Blue', hex: '#93c5fd', image: '/assets/iphone-17-mist-blue.jpg' },
      { name: 'Lavender', hex: '#c4b5fd', image: '/assets/iphone-17-lavender.jpg' },
      { name: 'Sage Green', hex: '#86efac', image: '/assets/iphone-17-sage.jpg' },
      { name: 'Midnight Black', hex: '#18181b', image: '/assets/iphone-17-black.jpg' },
      { name: 'Starlight White', hex: '#f4f4f5', image: '/assets/iphone-17-white.jpg' }
    ],
    storageOptions: [
      { size: '128GB', price: 799, priceInr: 89900 },
      { size: '256GB', price: 899, priceInr: 99900 },
      { size: '512GB', price: 1099, priceInr: 119900 }
    ],
    badge: 'Popular Choice',
    image: '/assets/iphone-17-card.jpg',
    hero: '/assets/iphone-17-hero.jpg',
    video: '',
    gallery: [
      '/assets/iphone-17-card.jpg',
      '/assets/iphone-17-hero.jpg',
      '/assets/iphone-17-view-0.jpg',
      '/assets/iphone-17-view-1.jpg',
      '/assets/iphone-17-view-2.jpg',
      '/assets/iphone-17-view-3.jpg',
      '/assets/iphone-17-view-4.jpg',
      '/assets/iphone-17-view-5.jpg'
    ],
    features: [
      {
        title: 'Color-Infused Back Glass',
        desc: 'Super-fine metallic ions baked directly into the crystalline structure of the rear glass.',
        icon: 'Palette'
      },
      {
        title: 'Dynamic Island',
        desc: 'Bubbles up alerts and Live Activities so you never miss a food delivery, flight, or score.',
        icon: 'CircleDot'
      }
    ]
  },
  {
    id: 'iphone-17e',
    name: 'iPhone 17e',
    category: 'iPhone',
    series: 'standard',
    price: 599,
    priceInr: 59900,
    tagline: 'Essential iPhone. Incredible value.',
    description: 'Everything you love about iPhone. Blazing fast A18 chip, vibrant OLED display, and USB-C speed at an accessible price point.',
    specs: {
      display: '6.1" OLED Retina display with True Tone',
      chip: 'A18 Bionic Silicon',
      camera: '48MP Wide Camera with Photonic Engine',
      battery: 'Up to 22 hours video playback',
      chassis: '100% recycled aluminum enclosure',
      weight: '165 grams'
    },
    colors: [
      { name: 'Midnight', hex: '#1c1917', image: '/assets/iphone-17e-card.jpg' },
      { name: 'Starlight', hex: '#fafaf9', image: '/assets/iphone-17e-view-0.jpg' }
    ],
    storageOptions: [
      { size: '128GB', price: 599, priceInr: 59900 },
      { size: '256GB', price: 699, priceInr: 69900 }
    ],
    badge: 'Best Value',
    image: '/assets/iphone-17e-card.jpg',
    hero: '/assets/iphone-17e-hero.jpg',
    video: '',
    gallery: [
      '/assets/iphone-17e-card.jpg',
      '/assets/iphone-17e-hero.jpg',
      '/assets/iphone-17e-view-0.jpg',
      '/assets/iphone-17e-view-1.jpg',
      '/assets/iphone-17e-view-2.jpg',
      '/assets/iphone-17e-view-3.jpg',
      '/assets/iphone-17e-view-4.jpg'
    ],
    features: [
      {
        title: 'All-Day Battery',
        desc: 'Smart power management ensures you can stream, chat, and game from morning to night.',
        icon: 'BatteryCharging'
      }
    ]
  },
  {
    id: 'airpods-pro-2',
    name: 'AirPods Pro (2nd Gen)',
    category: 'Accessories',
    series: 'accessories',
    price: 249,
    priceInr: 24900,
    tagline: 'Adaptive Audio. Now playing.',
    description: 'Up to 2x more Active Noise Cancellation, Transparency mode, and Personalized Spatial Audio with dynamic head tracking.',
    specs: {
      display: 'H2 Apple Silicon Chip with U1 MagSafe Case',
      chip: 'H2 headphone chip + U1 chip in case',
      camera: 'Acoustic Mesh with beamforming microphones',
      battery: 'Up to 6 hours listening on one charge (30 hours with case)',
      chassis: 'IP54 dust, sweat, and water resistant',
      weight: '5.3 grams per bud'
    },
    colors: [
      { name: 'Gloss White', hex: '#ffffff', image: '/assets/airpods-pro-card.jpg' }
    ],
    storageOptions: [
      { size: 'Standard Case (USB-C)', price: 249, priceInr: 24900 }
    ],
    badge: 'Top Accessory',
    image: '/assets/airpods-pro-card.jpg',
    hero: '/assets/airpods-pro-hero.jpg',
    video: '',
    gallery: [
      '/assets/airpods-pro-card.jpg',
      '/assets/airpods-pro-hero.jpg',
      '/assets/airpods-pro-view-0.jpg',
      '/assets/airpods-pro-view-1.jpg',
      '/assets/airpods-pro-view-2.jpg',
      '/assets/airpods-pro-view-3.jpg',
      '/assets/airpods-pro-view-4.jpg',
      '/assets/airpods-pro-view-5.jpg'
    ],
    features: [
      {
        title: '2x Active Noise Cancellation',
        desc: 'Acoustic algorithms silence unwanted ambient roar on airplanes and city streets.',
        icon: 'Volume2'
      },
      {
        title: 'Personalized Spatial Audio',
        desc: 'Uses TrueDepth camera to map your ear anatomy for bespoke 3D surround sound.',
        icon: 'Headphones'
      }
    ]
  },
  {
    id: 'airpods-max',
    name: 'AirPods Max',
    category: 'Accessories',
    series: 'accessories',
    price: 549,
    priceInr: 59900,
    tagline: 'High-fidelity audio. Pure luxury.',
    description: 'A perfect balance of exhilarating high-fidelity audio and the effortless magic of AirPods. Anodized aluminum ear cups and breathable mesh canopy.',
    specs: {
      display: 'Dual H1 Apple headphone chips (one in each ear cup)',
      chip: 'Apple-designed 40mm dynamic driver',
      camera: '9 microphones total with Computational Audio',
      battery: 'Up to 20 hours listening with ANC enabled',
      chassis: 'Stainless steel frame with knit-mesh canopy',
      weight: '384 grams'
    },
    colors: [
      { name: 'Space Gray', hex: '#374151', image: '/assets/airpods-max-card.jpg' },
      { name: 'Silver', hex: '#e5e7eb', image: '/assets/airpods-max-view-0.jpg' }
    ],
    storageOptions: [
      { size: 'USB-C Edition', price: 549, priceInr: 59900 }
    ],
    badge: 'Studio Sound',
    image: '/assets/airpods-max-card.jpg',
    hero: '/assets/airpods-max-hero.jpg',
    video: '',
    gallery: [
      '/assets/airpods-max-card.jpg',
      '/assets/airpods-max-hero.jpg',
      '/assets/airpods-max-view-0.jpg',
      '/assets/airpods-max-view-1.jpg'
    ],
    features: [
      {
        title: 'Lossless Audio via USB-C',
        desc: 'Studio master audio streaming with ultra-low total harmonic distortion.',
        icon: 'Music'
      }
    ]
  },
  {
    id: 'apple-watch-se',
    name: 'Apple Watch SE',
    category: 'Accessories',
    series: 'accessories',
    price: 249,
    priceInr: 29900,
    tagline: 'Heavy on features. Light on price.',
    description: 'Essential fitness tracking, Crash Detection, Heart rate notifications, and seamless cellular connectivity on your wrist.',
    specs: {
      display: 'Retina LTPO OLED display up to 1000 nits',
      chip: 'S8 SiP with 64-bit dual-core processor',
      camera: 'Optical heart sensor & High-g accelerometer',
      battery: 'Up to 18 hours normal battery life',
      chassis: '100% recycled aluminum case',
      weight: '32.9 grams'
    },
    colors: [
      { name: 'Midnight', hex: '#1e293b', image: '/assets/apple-watch-se-midnight.jpg' },
      { name: 'Starlight', hex: '#fef3c7', image: '/assets/apple-watch-se-starlight.jpg' }
    ],
    storageOptions: [
      { size: '40mm GPS', price: 249, priceInr: 29900 },
      { size: '44mm GPS + Cellular', price: 329, priceInr: 37900 }
    ],
    badge: 'Fitness Companion',
    image: '/assets/apple-watch-se-card.png',
    hero: '/assets/apple-watch-se-hero.jpg',
    video: '',
    gallery: [
      '/assets/apple-watch-se-card.png',
      '/assets/apple-watch-se-hero.jpg',
      '/assets/apple-watch-se-midnight.jpg',
      '/assets/apple-watch-se-starlight.jpg',
      '/assets/apple-watch-se-view-0.jpg',
      '/assets/apple-watch-se-view-1.jpg'
    ],
    features: [
      {
        title: 'Emergency SOS & Crash Detection',
        desc: 'Detects severe car crashes and automatically connects you with emergency responders.',
        icon: 'Activity'
      }
    ]
  }
];

export const formatCurrency = (amount, currency = 'USD') => {
  if (currency === 'INR') {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  }
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0
  }).format(amount);
};
