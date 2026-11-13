import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export const Toast = () => {
  const { toastMessage } = useCart();

  if (!toastMessage) return null;

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 animate-bounce-short">
      <div className="px-5 py-3 rounded-full bg-neutral-900/95 border border-white/20 text-white text-xs font-medium shadow-2xl backdrop-blur-xl flex items-center gap-2.5">
        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
        <span>{toastMessage}</span>
      </div>
    </div>
  );
};
