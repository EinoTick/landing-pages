import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-hairline border-t py-16">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-6 lg:flex-row lg:justify-between lg:px-10">
        <Link
          href="/"
          className="font-serif text-lg tracking-luxury uppercase text-slate-900"
        >
          Niveus
        </Link>

        <nav className="flex gap-8">
          {["Collection", "Materials", "Philosophy", "Contact"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-xs tracking-luxury uppercase text-slate-400 transition-colors hover:text-slate-900"
            >
              {item}
            </Link>
          ))}
        </nav>

        <p className="text-xs text-slate-300">
          &copy; {new Date().getFullYear()} Niveus. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
