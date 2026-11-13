import React from 'react';
import { X, Trash2, Plus, Minus, ArrowRight, ShieldCheck, ShoppingBag, Sparkles } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { formatCurrency } from '../../data/products';

export const CartDrawer = () => {
  const {
    cart,
    isCartOpen,
    closeCart,
    removeFromCart,
    updateQuantity,
    itemCount,
    subtotal,
    estimatedTax,
    total,
    openCheckout,
    currency
  } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/75 backdrop-blur-md transition-opacity">
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-neutral-950 border-l border-white/10 shadow-2xl flex flex-col justify-between">
          {/* Header */}
          <div className="p-6 border-b border-white/10 flex items-center justify-between bg-neutral-900/50">
            <div className="flex items-center gap-2.5">
              <ShoppingBag className="w-5 h-5 text-white" />
              <h2 className="text-lg font-bold text-white tracking-tight">Review your Bag</h2>
              <span className="text-xs font-mono bg-white/10 text-white px-2 py-0.5 rounded-full">
                {itemCount}
              </span>
            </div>
            <button
              onClick={closeCart}
              className="p-1.5 rounded-full text-neutral-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {cart.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mx-auto text-neutral-500">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-medium text-white">Your Bag is empty.</h3>
                <p className="text-xs text-neutral-400 max-w-xs mx-auto">
                  Explore our newest iPhone models and accessories to find your perfect fit.
                </p>
                <button
                  onClick={closeCart}
                  className="mt-4 px-5 py-2.5 rounded-full bg-white text-black font-semibold text-xs hover:bg-neutral-200 transition-colors cursor-pointer"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <>
                {/* Free shipping ribbon */}
                <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 flex items-center gap-2 text-xs text-neutral-300">
                  <Sparkles className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Your order qualifies for <strong>FREE 2-Day Express Delivery</strong></span>
                </div>

                <div className="space-y-4">
                  {cart.map(item => (
                    <div
                      key={item.key}
                      className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex gap-4 items-center justify-between"
                    >
                      <div className="w-16 h-16 rounded-xl bg-neutral-900 border border-white/5 p-1 shrink-0 flex items-center justify-center overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-contain"
                        />
                      </div>

                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-semibold text-white truncate">{item.name}</h4>
                        <div className="flex items-center gap-2 mt-1 text-[11px] text-neutral-400">
                          <span
                            className="w-2.5 h-2.5 rounded-full border border-white/30"
                            style={{ backgroundColor: item.colorHex }}
                          />
                          <span>{item.color}</span>
                          <span>•</span>
                          <span>{item.storage}</span>
                        </div>
                        <div className="text-xs font-semibold text-white mt-1.5 font-mono">
                          {formatCurrency(item.price * item.quantity, currency)}
                        </div>
                      </div>

                      {/* Quantity Stepper & Delete */}
                      <div className="flex flex-col items-end gap-2 shrink-0">
                        <button
                          onClick={() => removeFromCart(item.key)}
                          className="text-neutral-500 hover:text-red-400 transition-colors p-1 cursor-pointer"
                          title="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                        <div className="flex items-center gap-1.5 bg-neutral-900 border border-white/15 rounded-lg px-2 py-0.5">
                          <button
                            onClick={() => updateQuantity(item.key, -1)}
                            className="text-neutral-400 hover:text-white transition-colors cursor-pointer"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-xs font-semibold text-white px-1 font-mono">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.key, 1)}
                            className="text-neutral-400 hover:text-white transition-colors cursor-pointer"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Footer Order Summary & Checkout */}
          {cart.length > 0 && (
            <div className="p-6 border-t border-white/10 bg-neutral-950 space-y-4">
              <div className="space-y-2 text-xs">
                <div className="flex items-center justify-between text-neutral-400">
                  <span>Subtotal</span>
                  <span className="text-white font-mono">{formatCurrency(subtotal, currency)}</span>
                </div>
                <div className="flex items-center justify-between text-neutral-400">
                  <span>Express Shipping</span>
                  <span className="text-emerald-400 font-medium">FREE</span>
                </div>
                <div className="flex items-center justify-between text-neutral-400">
                  <span>Estimated Tax (8%)</span>
                  <span className="text-white font-mono">{formatCurrency(estimatedTax, currency)}</span>
                </div>
                <div className="pt-2 border-t border-white/10 flex items-center justify-between text-sm font-bold text-white">
                  <span>Total</span>
                  <span className="font-mono text-lg">{formatCurrency(total, currency)}</span>
                </div>
              </div>

              <button
                onClick={openCheckout}
                className="w-full py-3.5 rounded-full bg-white text-black font-bold text-sm hover:bg-neutral-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Check Out</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-2 text-[10px] text-neutral-500">
                <ShieldCheck className="w-3.5 h-3.5 text-neutral-400" />
                <span>256-Bit SSL Encrypted & Apple Pay Ready</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
