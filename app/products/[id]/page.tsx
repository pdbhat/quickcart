import Image from 'next/image';
import { notFound } from 'next/navigation';

import AddToCartButton from '@/components/AddToCartButton';
import { APP_CONFIG } from '@/constants/appConfig';
import { productService } from '@/services/productService';
import type { Product } from '@/types/product';

type TProductDetailsPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ProductDetailsPage({ params }: TProductDetailsPageProps) {
  const { id } = await params;
  const productId = Number(id);

  if (Number.isNaN(productId)) {
    notFound();
  }

  let product: Product;

  try {
    product = await productService.getProductById(productId);
  } catch {
    notFound();
  }

  return (
    <section className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-4 py-12 md:grid-cols-2">
      <div className="relative aspect-square overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm">
        <Image
          src={product.thumbnail}
          alt={product.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
          priority
        />
      </div>

      <div className="flex flex-col justify-center gap-6">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight text-slate-950">{product.title}</h1>
          <p className="text-base leading-7 text-slate-600">{product.description}</p>
        </div>

        <div className="space-y-4 border-y border-slate-200 py-6">
          <p className="text-3xl font-semibold text-slate-950">
            {APP_CONFIG.CURRENCY_SYMBOL}
            {product.price}
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-md bg-emerald-50 px-2.5 py-1 text-sm font-semibold text-emerald-700">
              {product.discountPercentage}% off
            </span>
            <span className="inline-flex items-center gap-1 text-sm font-medium text-slate-600">
              <span className="text-yellow-400">★</span>
              {product.rating}
            </span>
          </div>
        </div>

        <AddToCartButton product={product} />
      </div>
    </section>
  );
}
