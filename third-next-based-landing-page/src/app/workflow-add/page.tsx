import type { Metadata } from "next";
import {
  WorkflowAdLandscape,
  WorkflowAdSquare,
} from "@/components/workflow/WorkflowLinkedInAds";

export const metadata: Metadata = {
  title: "Workflow LinkedIn Ads — ET Logic",
  robots: { index: false, follow: false },
};

export default function WorkflowAddPage() {
  return (
    <div className="min-h-screen bg-zinc-700">
      <div className="mx-auto max-w-[1280px] px-8 py-10">
        <header className="mb-10 max-w-2xl text-white/80">
          <h1 className="text-lg font-semibold text-white mb-2">
            LinkedIn ad screenshots
          </h1>
          <p className="text-sm leading-relaxed text-white/60">
            Crop to the ad frame below each label. In Chrome DevTools, use the
            element picker on{" "}
            <code className="rounded bg-black/30 px-1.5 py-0.5 text-white/80">
              #ad-square
            </code>{" "}
            or{" "}
            <code className="rounded bg-black/30 px-1.5 py-0.5 text-white/80">
              #ad-landscape
            </code>
            , then screenshot the node (Ctrl+Shift+P → “Capture node screenshot”).
          </p>
        </header>

        <div className="space-y-14">
          <section>
            <p className="mb-3 text-xs font-medium uppercase tracking-wider text-white/50">
              Square — 1080 × 1080 (best for mobile)
            </p>
            <div className="inline-block overflow-auto rounded-lg ring-2 ring-white/20">
              <WorkflowAdSquare />
            </div>
          </section>

          <section>
            <p className="mb-3 text-xs font-medium uppercase tracking-wider text-white/50">
              Landscape — 1200 × 628
            </p>
            <div className="inline-block overflow-auto rounded-lg ring-2 ring-white/20">
              <WorkflowAdLandscape />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
