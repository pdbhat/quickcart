'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

import CartItem from '@/components/CartItem';
import { APP_CONFIG } from '@/constants/appConfig';
import { useCartStore } from '@/store/useCartStore';

const CartPage = () => {
  const [mounted, setMounted] = useState(false);
  const cartItems = useCartStore((state) => state.cartItems);
  const totalItems = useCartStore((state) => state.getTotalItems());
  const totalPrice = useCartStore((state) => state.getTotalPrice());
  const clearCart = useCartStore((state) => state.clearCart);

  const handleClearCart = () => {
    clearCart();
  };

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setMounted(true);
    }, 0);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, []);

  if (!mounted) {
    return (
      <section className="mx-auto max-w-7xl px-4 py-8">
        <p className="text-slate-500">Loading cart...</p>
      </section>
    );
  }

  if (cartItems.length === 0) {
    return (
      <section className="mx-auto max-w-xl space-y-5 px-4 py-16 text-center">
        <h1 className="text-3xl font-bold tracking-tight text-slate-950">Your cart is empty</h1>
        <p className="text-sm text-slate-500">Add a few products and they will show up here.</p>
        <Link
          href="/"
          className="inline-flex h-11 items-center justify-center rounded-xl bg-slate-900 px-5 text-sm font-medium text-white shadow-sm transition-all duration-200 ease-out hover:bg-slate-800 active:scale-[0.98]"
        >
          Continue Shopping
        </Link>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-7xl space-y-8 px-4 py-8">
      <div className="flex items-center justify-between gap-4">
        <h1 className="text-3xl font-bold tracking-tight text-slate-950">Cart</h1>
        <button
          type="button"
          onClick={handleClearCart}
          className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-500 shadow-sm transition-all duration-200 ease-out hover:border-red-200 hover:text-red-500 active:scale-[0.98]"
        >
          Clear Cart
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_320px]">
        <div>
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>

        <aside className="sticky top-24 h-fit space-y-4 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-950">Summary</h2>
          <div className="space-y-3 text-sm text-slate-600">
            <div className="flex items-center justify-between">
              <span>Total items</span>
              <span className="font-medium text-slate-950">{totalItems}</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Total price</span>
              <span className="font-semibold text-slate-950">
                {APP_CONFIG.CURRENCY_SYMBOL}
                {Math.abs(totalPrice).toFixed(2)}
              </span>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default CartPage;
