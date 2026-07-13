import Link from 'next/link';

const NotFound = () => {
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-7xl items-center justify-center bg-[var(--background)] px-4 py-16 text-[var(--foreground)]">
      <div className="w-full max-w-md rounded-2xl border border-slate-100 bg-white p-8 text-center shadow-sm">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-indigo-50 text-sm font-bold text-indigo-600">
          404
        </div>
        <p className="mt-5 text-sm font-semibold text-indigo-600">Page not found</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
          We could not find that page
        </h1>
        <p className="mt-3 text-sm leading-6 text-slate-500">
          The product or page you are looking for may have moved, expired, or never existed.
        </p>

        <Link
          href="/"
          className="mt-6 inline-flex h-11 items-center justify-center rounded-xl bg-indigo-600 px-5 text-sm font-medium text-white shadow-sm transition-all duration-200 ease-out hover:bg-indigo-500 active:scale-[0.98]"
        >
          Back to Products
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
