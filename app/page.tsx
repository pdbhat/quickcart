import ProductCard from '@/components/ProductCard';
import { productService } from '@/services/productService';

export default async function Home() {
  const products = await productService.getProducts();

  return (
    <section className="mx-auto max-w-7xl space-y-8 px-4 py-8">
      <div className="space-y-1">
        <h1 className="text-3xl font-bold tracking-tight text-slate-950">Products</h1>
        <p className="text-sm text-slate-500">Browse our latest picks.</p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
