"use client";

import Link from "next/link";
import Image from "next/image";

import { APP_CONFIG } from "@/constants/appConfig";
import type { Product } from "@/types/product";

type TProductCardProps = {
  product: Product;
};

const ProductCard = ({ product }: TProductCardProps) => {
  return (
    <Link
      href={`/products/${product.id}`}
      className="group block overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:shadow-md"
    >
      <div className="relative aspect-square bg-slate-100">
        <Image
          src={product.thumbnail}
          alt={product.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover transition-transform duration-300 ease-out group-hover:scale-105"
          loading="eager"
        />
      </div>

      <div className="space-y-3 p-4">
        <h2 className="line-clamp-2 min-h-12 text-base font-bold text-slate-950">
          {product.title}
        </h2>
        <div className="flex items-center justify-between gap-3">
          <p className="text-lg font-semibold text-slate-900">
            {APP_CONFIG.CURRENCY_SYMBOL}
            {product.price}
          </p>
          <p className="inline-flex items-center gap-1 text-sm font-medium text-slate-500">
            <span className="text-yellow-400">★</span>
            {product.rating}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
