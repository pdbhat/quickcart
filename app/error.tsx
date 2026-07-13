'use client';

type TErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

const Error = ({ error, reset }: TErrorProps) => {
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-7xl items-center justify-center bg-[var(--background)] px-4 py-16 text-[var(--foreground)]">
      <div className="w-full max-w-md rounded-2xl border border-slate-100 bg-white p-8 text-center shadow-sm">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-indigo-50 text-lg font-semibold text-indigo-600">
          !
        </div>
        <p className="mt-5 text-sm font-semibold text-indigo-600">Processing issue</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
          Something went wrong
        </h1>
        <p className="mt-3 text-sm leading-6 text-slate-500">
          We could not complete this request. Please try again, or return to the previous page.
        </p>

        {error.digest ? (
          <p className="mt-5 rounded-xl border border-slate-100 bg-slate-50 px-3 py-2 text-xs text-slate-400">
            Error reference: {error.digest}
          </p>
        ) : null}

        <button
          type="button"
          onClick={reset}
          className="mt-6 inline-flex h-11 items-center justify-center rounded-xl bg-indigo-600 px-5 text-sm font-medium text-white shadow-sm transition-all duration-200 ease-out hover:bg-indigo-500 active:scale-[0.98]"
        >
          Try Again
        </button>
      </div>
    </section>
  );
};

export default Error;
