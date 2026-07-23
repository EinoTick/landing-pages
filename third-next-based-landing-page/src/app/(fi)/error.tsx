"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center px-4 text-center">
      <p className="text-sm font-semibold uppercase tracking-widest text-red-400 mb-4">
        Virhe
      </p>
      <h1 className="text-3xl font-bold text-white mb-3">
        Jokin meni pieleen
      </h1>
      <p className="text-white/60 max-w-sm mb-8">
        Tapahtui odottamaton virhe. Yritä uudelleen.
      </p>
      <button
        onClick={reset}
        className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-white hover:bg-white/10 transition-colors"
      >
        Yritä uudelleen
      </button>
    </div>
  );
}
