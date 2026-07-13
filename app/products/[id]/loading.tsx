export default function Loading() {
  return (
    <section className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-4 py-12 md:grid-cols-2">
      <div className="aspect-square animate-pulse rounded-2xl bg-slate-200" />

      <div className="flex animate-pulse flex-col justify-center gap-6">
        <div className="space-y-4">
          <div className="h-10 w-4/5 rounded bg-slate-200" />
          <div className="space-y-3">
            <div className="h-4 w-full rounded bg-slate-200" />
            <div className="h-4 w-11/12 rounded bg-slate-200" />
            <div className="h-4 w-3/4 rounded bg-slate-200" />
          </div>
        </div>

        <div className="space-y-4 border-y border-slate-200 py-6">
          <div className="h-8 w-28 rounded bg-slate-200" />
          <div className="flex gap-3">
            <div className="h-7 w-24 rounded-md bg-slate-200" />
            <div className="h-7 w-16 rounded-md bg-slate-200" />
          </div>
        </div>

        <div className="h-12 w-full rounded-xl bg-slate-200 md:w-40" />
      </div>
    </section>
  );
}
