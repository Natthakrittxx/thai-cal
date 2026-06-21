import PaymentSplitCalculator from "./components/PaymentSplitCalculator";

export default function Home() {
  return (
    <div className="relative flex flex-1 items-center justify-center overflow-hidden px-4 py-12">
      {/* Colorful backdrop so the frosted-glass blur has something to refract */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900" />
      <div className="pointer-events-none absolute -left-24 top-8 -z-10 h-72 w-72 rounded-full bg-indigo-600/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-8 -z-10 h-72 w-72 rounded-full bg-blue-500/25 blur-3xl" />
      <PaymentSplitCalculator />
    </div>
  );
}
