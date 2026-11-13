import React, { useState } from 'react';
import { X, CheckCircle2, ShieldCheck, CreditCard, Lock, Sparkles, ArrowRight } from 'lucide-react';
import { AppleLogo } from '../common/AppleLogo';
import { useCart } from '../../context/CartContext';
import { formatCurrency } from '../../data/products';

export const CheckoutModal = () => {
  const { isCheckoutOpen, closeCheckout, total, cart, handleCheckoutSuccess, currency } = useCart();
  const [paymentMethod, setPaymentMethod] = useState('applepay'); // 'applepay' | 'card' | 'emi'
  const [formData, setFormData] = useState({
    name: 'Rohit Sharma',
    email: 'rohit@example.com',
    address: '100 Infinite Loop, Apple Campus',
    city: 'Bengaluru',
    postalCode: '560001'
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [orderId, setOrderId] = useState('');

  if (!isCheckoutOpen) return null;

  const handleSubmitOrder = (e) => {
    e.preventDefault();
    setIsProcessing(true);

    setTimeout(() => {
      setIsProcessing(false);
      setOrderConfirmed(true);
      const randomId = 'APL-' + Math.floor(100000 + Math.random() * 900000);
      setOrderId(randomId);
      handleCheckoutSuccess();
    }, 1200);
  };

  const handleFinish = () => {
    setOrderConfirmed(false);
    closeCheckout();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-2xl flex items-center justify-center p-4">
      <div className="relative w-full max-w-xl bg-neutral-950 rounded-3xl border border-white/15 shadow-[0_25px_80px_rgba(0,0,0,0.95)] overflow-hidden my-auto p-6 sm:p-8">
        {/* Close Button */}
        <button
          onClick={closeCheckout}
          className="absolute top-5 right-5 p-1.5 rounded-full text-neutral-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {!orderConfirmed ? (
          <div>
            {/* Header */}
            <div className="text-center space-y-2 mb-6">
              <div className="w-10 h-10 rounded-full bg-white/10 border border-white/15 flex items-center justify-center mx-auto text-white">
                <AppleLogo className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-bold text-white tracking-tight">Apple Store Checkout</h2>
              <p className="text-xs text-neutral-400">
                Complete your order securely with Apple Pay or credit card
              </p>
            </div>

            {/* Total Callout */}
            <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-between mb-6">
              <div>
                <span className="text-xs text-neutral-400 block">Total Amount Due</span>
                <span className="text-xl font-bold text-white font-mono">
                  {formatCurrency(total, currency)}
                </span>
              </div>
              <div className="text-right text-[11px] text-neutral-400">
                <span className="text-emerald-400 font-semibold block">Free Express Delivery</span>
                <span>Includes applicable taxes</span>
              </div>
            </div>

            <form onSubmit={handleSubmitOrder} className="space-y-4">
              {/* Shipping Information */}
              <div className="space-y-3">
                <span className="text-xs uppercase tracking-wider font-semibold text-neutral-400 block">
                  1. Shipping Information
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] text-neutral-400 block mb-1">Full Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/15 text-white text-xs focus:outline-none focus:border-white transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] text-neutral-400 block mb-1">Email for Receipt</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/15 text-white text-xs focus:outline-none focus:border-white transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[11px] text-neutral-400 block mb-1">Delivery Street Address</label>
                  <input
                    type="text"
                    required
                    value={formData.address}
                    onChange={e => setFormData({ ...formData, address: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/15 text-white text-xs focus:outline-none focus:border-white transition-colors"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] text-neutral-400 block mb-1">City</label>
                    <input
                      type="text"
                      required
                      value={formData.city}
                      onChange={e => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/15 text-white text-xs focus:outline-none focus:border-white transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] text-neutral-400 block mb-1">Postal Code</label>
                    <input
                      type="text"
                      required
                      value={formData.postalCode}
                      onChange={e => setFormData({ ...formData, postalCode: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/15 text-white text-xs focus:outline-none focus:border-white transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Payment Methods */}
              <div className="space-y-3 pt-2">
                <span className="text-xs uppercase tracking-wider font-semibold text-neutral-400 block">
                  2. Payment Method
                </span>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('applepay')}
                    className={`py-3 px-2 rounded-xl border text-center transition-all cursor-pointer flex flex-col items-center justify-center gap-1 ${
                      paymentMethod === 'applepay'
                        ? 'border-white bg-white/15 ring-1 ring-white'
                        : 'border-white/10 bg-white/5 hover:border-white/20'
                    }`}
                  >
                    <AppleLogo className="w-4 h-4 text-white" />
                    <span className="text-xs font-semibold text-white">Apple Pay</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`py-3 px-2 rounded-xl border text-center transition-all cursor-pointer flex flex-col items-center justify-center gap-1 ${
                      paymentMethod === 'card'
                        ? 'border-white bg-white/15 ring-1 ring-white'
                        : 'border-white/10 bg-white/5 hover:border-white/20'
                    }`}
                  >
                    <CreditCard className="w-4 h-4 text-white" />
                    <span className="text-xs font-semibold text-white">Card</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('emi')}
                    className={`py-3 px-2 rounded-xl border text-center transition-all cursor-pointer flex flex-col items-center justify-center gap-1 ${
                      paymentMethod === 'emi'
                        ? 'border-white bg-white/15 ring-1 ring-white'
                        : 'border-white/10 bg-white/5 hover:border-white/20'
                    }`}
                  >
                    <Sparkles className="w-4 h-4 text-white" />
                    <span className="text-xs font-semibold text-white">0% EMI</span>
                  </button>
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isProcessing}
                  className="w-full py-3.5 rounded-full bg-white text-black font-bold text-sm hover:bg-neutral-200 transition-all shadow-[0_0_25px_rgba(255,255,255,0.3)] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isProcessing ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 rounded-full border-2 border-black border-t-transparent animate-spin" />
                      Authorizing with Apple Pay...
                    </span>
                  ) : (
                    <>
                      <Lock className="w-4 h-4" />
                      <span>Authorize Payment — {formatCurrency(total, currency)}</span>
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[10px] text-neutral-500 pt-2">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Your transaction is encrypted with Apple Pay Secure Enclave</span>
              </div>
            </form>
          </div>
        ) : (
          /* Order Confirmation View */
          <div className="text-center py-6 space-y-5 animate-fadeIn">
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-1">
              <h3 className="text-2xl font-bold text-white tracking-tight">Order Confirmed!</h3>
              <p className="text-xs text-neutral-400">
                Thank you for your purchase. We have sent the confirmation to{' '}
                <strong className="text-white">{formData.email}</strong>.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 text-left space-y-2 text-xs">
              <div className="flex justify-between text-neutral-400">
                <span>Order Reference Number:</span>
                <span className="text-white font-mono font-semibold">{orderId}</span>
              </div>
              <div className="flex justify-between text-neutral-400">
                <span>Estimated Delivery:</span>
                <span className="text-white font-medium">Within 2 Business Days</span>
              </div>
              <div className="flex justify-between text-neutral-400">
                <span>Shipping Address:</span>
                <span className="text-white">{formData.address}, {formData.city}</span>
              </div>
              <div className="flex justify-between text-neutral-400 pt-2 border-t border-white/5">
                <span>Paid via Apple Pay:</span>
                <span className="text-white font-mono font-bold">{formatCurrency(total, currency)}</span>
              </div>
            </div>

            <button
              onClick={handleFinish}
              className="px-8 py-3 rounded-full bg-white text-black font-bold text-xs hover:bg-neutral-200 transition-colors cursor-pointer"
            >
              Continue to Apple Store
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
