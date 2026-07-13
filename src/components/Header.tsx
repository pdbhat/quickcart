'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

import { APP_CONFIG } from '@/constants/appConfig';
import { useCartStore } from '@/store/useCartStore';

const Header = () => {
  const [mounted, setMounted] = useState(false);
  const totalItems = useCartStore((state) => state.getTotalItems());

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setMounted(true);
    }, 0);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <Link
          href="/"
          className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-xl font-extrabold tracking-tight text-transparent transition-opacity duration-200 ease-out hover:opacity-80"
        >
          {APP_CONFIG.SITE_NAME}
        </Link>

        <nav aria-label="Main navigation">
          <Link
            href="/cart"
            className="relative inline-flex items-center rounded-xl px-3 py-2 text-sm font-medium text-slate-600 transition-all duration-200 ease-out hover:bg-slate-100 hover:text-slate-950 active:scale-[0.98]"
          >
            Cart
            {mounted ? (
              <span className="ml-2 inline-flex min-h-5 min-w-5 scale-100 items-center justify-center rounded-full bg-indigo-600 px-1.5 text-xs font-medium text-white shadow-sm transition-transform duration-200 ease-out">
                {totalItems}
              </span>
            ) : null}
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
