import { LanguageSwitcher } from "@/components/i18n/LanguageSwitcher";
import type { Locale } from "@/lib/site";

type HomeTopBarProps = {
  locale: Locale;
};

export function HomeTopBar({ locale }: HomeTopBarProps) {
  return (
    <div className="fixed top-0 inset-x-0 z-[60] pointer-events-none">
      <div className="flex justify-end max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <div className="pointer-events-auto rounded-lg bg-slate-950/70 backdrop-blur-md shadow-lg shadow-black/20">
          <LanguageSwitcher locale={locale} page="home" />
        </div>
      </div>
    </div>
  );
}
