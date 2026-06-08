import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";

const adBackgroundStyle = {
  background:
    "radial-gradient(ellipse 90% 70% at 50% 0%, rgba(99, 102, 241, 0.22) 0%, rgba(139, 92, 246, 0.1) 40%, transparent 70%), radial-gradient(ellipse 70% 50% at 50% 100%, rgba(34, 197, 94, 0.1) 0%, transparent 65%), #020617",
};

const dotGridStyle = {
  backgroundImage:
    "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.85) 1px, transparent 0)",
  backgroundSize: "28px 28px",
};

const bullets = [
  "Approvals, routing & audit trails",
  "Replaces spreadsheets & email chains",
  "Built by one senior engineer",
];

function AdBackground() {
  return (
    <>
      <div
        aria-hidden
        className="absolute inset-0"
        style={adBackgroundStyle}
      />
      <div
        aria-hidden
        className="absolute inset-6 rounded-2xl opacity-[0.04] pointer-events-none"
        style={dotGridStyle}
      />
      <div
        aria-hidden
        className="absolute top-0 right-0 w-72 h-72 rounded-full bg-green-400/10 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-indigo-500/10 blur-3xl"
      />
    </>
  );
}

function AdBullets({ className }: { className?: string }) {
  return (
    <ul className={className}>
      {bullets.map((item) => (
        <li key={item} className="flex items-start gap-3 text-white/85">
          <Check className="w-5 h-5 shrink-0 text-green-400 mt-0.5" strokeWidth={2.5} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function AdCta() {
  return (
    <div className="inline-flex items-center gap-2 rounded-md bg-green-400 px-6 py-3 text-lg font-semibold text-slate-950">
      Discuss your workflow
      <ArrowRight className="w-5 h-5" />
    </div>
  );
}

/** LinkedIn square — 1080 × 1080 */
export function WorkflowAdSquare() {
  return (
    <div
      id="ad-square"
      className="relative overflow-hidden bg-slate-950 shrink-0"
      style={{ width: 1080, height: 1080 }}
    >
      <AdBackground />

      <div className="relative z-10 flex h-full flex-col justify-between p-20">
        <Image
          src="/images/et-logic-logo-svg.svg"
          alt=""
          width={200}
          height={134}
          className="h-14 w-auto"
          aria-hidden
        />

        <div className="space-y-10">
          <div className="space-y-6">
            <p className="inline-flex rounded-full border border-white/15 bg-white/5 px-5 py-2 text-lg font-medium text-white/75">
              Workflow software
            </p>
            <h1
              className="text-[72px] font-bold leading-[1.05] tracking-tight text-white"
              style={{ maxWidth: 900 }}
            >
              Custom workflow software for teams outgrowing spreadsheets.
            </h1>
            <p className="text-2xl leading-relaxed text-white/65 max-w-[820px]">
              Clear states, ownership, and hand-offs—without enterprise bloat.
            </p>
          </div>

          <AdBullets className="space-y-4 text-xl" />
        </div>

        <div className="flex items-end justify-between gap-8">
          <AdCta />
          <p className="text-lg font-medium text-white/45">ET Logic</p>
        </div>
      </div>
    </div>
  );
}

/** LinkedIn landscape — 1200 × 628 */
export function WorkflowAdLandscape() {
  return (
    <div
      id="ad-landscape"
      className="relative overflow-hidden bg-slate-950 shrink-0"
      style={{ width: 1200, height: 628 }}
    >
      <AdBackground />

      <div className="relative z-10 flex h-full items-stretch p-14 gap-12">
        <div className="flex w-[42%] flex-col justify-between">
          <Image
            src="/images/et-logic-logo-svg.svg"
            alt=""
            width={180}
            height={120}
            className="h-12 w-auto"
            aria-hidden
          />
          <div className="space-y-5">
            <p className="inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-base font-medium text-white/75">
              Workflow software
            </p>
            <h1 className="text-[46px] font-bold leading-[1.08] tracking-tight text-white">
              Stop running your business on spreadsheets.
            </h1>
          </div>
          <p className="text-lg text-white/45 font-medium">ET Logic</p>
        </div>

        <div className="flex w-[58%] flex-col justify-center space-y-8 border-l border-white/10 pl-12">
          <p className="text-xl leading-relaxed text-white/65">
            I build workflow systems with approvals, notifications, and audit
            trails—shaped around how your team actually works.
          </p>
          <AdBullets className="space-y-3 text-lg" />
          <AdCta />
        </div>
      </div>
    </div>
  );
}
