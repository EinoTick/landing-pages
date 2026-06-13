import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center px-4 text-center">
      <p className="text-sm font-semibold uppercase tracking-widest text-green-400 mb-4">
        404
      </p>
      <h1 className="text-3xl font-bold text-white mb-3">Page not found</h1>
      <p className="text-white/60 max-w-sm mb-8">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-white hover:bg-white/10 transition-colors"
      >
        Go home
      </Link>
    </div>
  );
}
