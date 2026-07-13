'use client';

import Image from 'next/image';

import { APP_CONFIG } from '@/constants/appConfig';
import { useCartStore } from '@/store/useCartStore';
import type { CartItem as TCartItem } from '@/types/product';

type TCartItemProps = {
  item: TCartItem;
};

const CartItem = ({ item }: TCartItemProps) => {
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const updateQuantity = useCartStore((state) => state.updateQuantity);

  const handleRemove = () => {
    removeFromCart(item.id);
  };

  const handleDecrement = () => {
    updateQuantity(item.id, 'decrement');
  };

  const handleIncrement = () => {
    updateQuantity(item.id, 'increment');
  };

  return (
    <div className="mb-4 flex items-center justify-between gap-4 rounded-xl border border-slate-100 bg-white p-4 shadow-sm">
      <div className="flex min-w-0 items-center gap-4">
        <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg bg-slate-100">
          <Image
            src={item.thumbnail}
            alt={item.title}
            fill
            sizes="80px"
            className="object-cover"
          />
        </div>

        <div className="min-w-0">
          <h2 className="truncate text-base font-semibold text-slate-950">{item.title}</h2>
          <p className="text-sm text-slate-600">
            {APP_CONFIG.CURRENCY_SYMBOL}
            {item.price.toFixed(2)}
          </p>
          <div className="mt-2 inline-flex items-center overflow-hidden rounded-lg border border-slate-200 bg-white">
            <button
              type="button"
              onClick={handleDecrement}
              className="flex h-8 w-8 items-center justify-center text-base font-medium text-slate-500 transition-colors duration-200 ease-out hover:bg-slate-50 hover:text-slate-950"
              aria-label={`Decrease quantity of ${item.title}`}
            >
              -
            </button>
            <span className="flex h-8 min-w-10 items-center justify-center border-x border-slate-200 px-3 text-sm font-semibold text-slate-900">
              {item.quantity}
            </span>
            <button
              type="button"
              onClick={handleIncrement}
              className="flex h-8 w-8 items-center justify-center text-base font-medium text-slate-500 transition-colors duration-200 ease-out hover:bg-slate-50 hover:text-slate-950"
              aria-label={`Increase quantity of ${item.title}`}
            >
              +
            </button>
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={handleRemove}
        className="shrink-0 text-sm font-medium text-slate-400 transition-colors duration-200 ease-out hover:text-red-500"
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem;
