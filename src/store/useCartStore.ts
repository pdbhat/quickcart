import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import type { CartItem, Product } from '@/types/product';

interface CartState {
  cartItems: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, action: 'increment' | 'decrement') => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      cartItems: [],

      addToCart: (product: Product): void => {
        set((state) => {
          const existingCartItem = state.cartItems.find((item) => item.id === product.id);

          if (existingCartItem) {
            return {
              cartItems: state.cartItems.map((item) =>
                item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item,
              ),
            };
          }

          return {
            cartItems: [...state.cartItems, { ...product, quantity: 1 }],
          };
        });
      },

      removeFromCart: (productId: number): void => {
        set((state) => ({
          cartItems: state.cartItems.filter((item) => item.id !== productId),
        }));
      },

      updateQuantity: (productId: number, action: 'increment' | 'decrement'): void => {
        set((state) => ({
          cartItems: state.cartItems
            .map((item) => {
              if (item.id !== productId) {
                return item;
              }

              if (action === 'increment') {
                return { ...item, quantity: item.quantity + 1 };
              }

              if (item.quantity > 1) {
                return { ...item, quantity: item.quantity - 1 };
              }

              return null;
            })
            .filter((item): item is CartItem => item !== null),
        }));
      },

      clearCart: (): void => {
        set({ cartItems: [] });
      },

      getTotalItems: (): number =>
        get().cartItems.reduce((total, item) => total + item.quantity, 0),

      getTotalPrice: (): number =>
        get().cartItems.reduce((total, item) => total + item.price * item.quantity, 0),
    }),
    {
      name: 'quickcart-storage',
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
