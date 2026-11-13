import React, { createContext, useContext, useState, useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';
import { products } from '../data/products';

const CartContext = createContext(null);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem('apple_store_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);
  const [currency, setCurrency] = useState('USD'); // 'USD' or 'INR'
  const toastTimerRef = useRef(null);

  // Sync with LocalStorage
  useEffect(() => {
    try {
      localStorage.setItem('apple_store_cart', JSON.stringify(cart));
    } catch (err) {
      console.error('Failed to save cart to localStorage', err);
    }
  }, [cart]);

  const showToast = (message) => {
    if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
    setToastMessage(message);
    toastTimerRef.current = setTimeout(() => {
      setToastMessage(null);
    }, 3200);
  };

  const addToCart = (product, selectedColor = null, selectedStorage = null) => {
    const color = selectedColor || product.colors[0];
    const storage = selectedStorage || product.storageOptions[0];
    const itemPrice = currency === 'INR' ? storage.priceInr : storage.price;
    const key = `${product.id}-${color.name}-${storage.size}`;

    setCart(prev => {
      const existsIndex = prev.findIndex(item => item.key === key);
      if (existsIndex > -1) {
        const next = [...prev];
        next[existsIndex].quantity += 1;
        return next;
      }
      return [
        ...prev,
        {
          key,
          id: product.id,
          name: product.name,
          category: product.category,
          color: color.name,
          colorHex: color.hex,
          storage: storage.size,
          price: itemPrice,
          image: color.image || product.image,
          quantity: 1,
          product
        }
      ];
    });

    showToast(`${product.name} (${color.name}, ${storage.size}) added to Bag`);
    setIsCartOpen(true);
  };

  const removeFromCart = (key) => {
    setCart(prev => prev.filter(item => item.key !== key));
    showToast('Item removed from Bag');
  };

  const updateQuantity = (key, delta) => {
    setCart(prev => {
      return prev
        .map(item => {
          if (item.key === key) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean);
    });
  };

  const clearCart = () => {
    setCart([]);
  };

  const handleCheckoutSuccess = () => {
    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#ffffff', '#a1a1aa', '#71717a', '#d4d4d8']
    });
    clearCart();
    setIsCheckoutOpen(false);
    showToast('Order confirmed! Check your email for receipt.');
  };

  // Calculations
  const itemCount = cart.reduce((total, item) => total + item.quantity, 0);
  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const estimatedTax = Math.round(subtotal * 0.08); // 8% simulated tax
  const total = subtotal + estimatedTax;

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        itemCount,
        subtotal,
        estimatedTax,
        total,
        isCartOpen,
        openCart: () => setIsCartOpen(true),
        closeCart: () => setIsCartOpen(false),
        isSearchOpen,
        openSearch: () => setIsSearchOpen(true),
        closeSearch: () => setIsSearchOpen(false),
        isCheckoutOpen,
        openCheckout: () => {
          setIsCartOpen(false);
          setIsCheckoutOpen(true);
        },
        closeCheckout: () => setIsCheckoutOpen(false),
        isContactModalOpen,
        openContactModal: () => setIsContactModalOpen(true),
        closeContactModal: () => setIsContactModalOpen(false),
        handleCheckoutSuccess,
        toastMessage,
        showToast,
        currency,
        setCurrency
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
