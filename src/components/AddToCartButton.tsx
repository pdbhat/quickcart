'use client';

import { useEffect, useRef, useState } from 'react';

import { useCartStore } from '@/store/useCartStore';
import type { Product } from '@/types/product';

type TAddToCartButtonProps = {
  product: Product;
};

const AddToCartButton = ({ product }: TAddToCartButtonProps) => {
  const [added, setAdded] = useState(false);
  const timeoutRef = useRef<number | null>(null);
  const addToCart = useCartStore((state) => state.addToCart);

  const handleAddToCart = () => {
    addToCart(product);
    setAdded(true);

    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = window.setTimeout(() => {
      setAdded(false);
      timeoutRef.current = null;
    }, 2000);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <button
      type="button"
      onClick={handleAddToCart}
      className="inline-flex w-full items-center justify-center rounded-xl bg-slate-900 px-8 py-3.5 text-sm font-medium text-white shadow-sm transition-all duration-200 ease-out hover:bg-slate-800 active:scale-[0.98] md:w-auto"
    >
      {added ? 'Added! ✓' : 'Add to Cart'}
    </button>
  );
};

export default AddToCartButton;
