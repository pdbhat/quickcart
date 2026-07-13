const skeletonCards = Array.from({ length: 8 }, (_, index) => index);

export default function Loading() {
  return (
    <section className="mx-auto max-w-7xl space-y-8 px-4 py-8">
      <div className="space-y-1">
        <h1 className="text-3xl font-bold tracking-tight text-slate-950">Products</h1>
        <p className="text-sm text-slate-500">Browse our latest picks.</p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {skeletonCards.map((card) => (
          <div
            key={card}
            className="animate-pulse overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm"
          >
            <div className="aspect-square bg-slate-200" />

            <div className="space-y-4 p-4">
              <div className="space-y-2">
                <div className="h-4 w-4/5 rounded bg-slate-200" />
                <div className="h-4 w-3/5 rounded bg-slate-200" />
              </div>

              <div className="flex items-center justify-between">
                <div className="h-5 w-16 rounded bg-slate-200" />
                <div className="h-4 w-12 rounded bg-slate-200" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
