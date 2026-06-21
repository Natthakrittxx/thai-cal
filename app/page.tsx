import PaymentSplitCalculator from "./components/PaymentSplitCalculator";
import ThemeToggle from "./components/ThemeToggle";

export default function Home() {
  return (
    <div className="relative flex flex-1 items-center justify-center overflow-hidden px-4 py-12">
      <div className="absolute right-[max(1rem,env(safe-area-inset-right))] top-[max(1rem,env(safe-area-inset-top))] z-10">
        <ThemeToggle />
      </div>
      {/* Colorful backdrop so the frosted-glass blur has something to refract */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-slate-100 via-indigo-100 to-slate-200 dark:from-slate-950 dark:via-indigo-950 dark:to-slate-900" />
      <div className="pointer-events-none absolute -left-24 top-8 -z-10 h-72 w-72 rounded-full bg-indigo-300/40 blur-3xl dark:bg-indigo-600/30" />
      <div className="pointer-events-none absolute -right-20 bottom-8 -z-10 h-72 w-72 rounded-full bg-sky-300/40 blur-3xl dark:bg-blue-500/25" />
      <PaymentSplitCalculator />
    </div>
  );
}
