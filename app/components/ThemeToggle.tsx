"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Initial class is set by the pre-paint script in layout; mirror it after mount.
  useEffect(() => {
    setMounted(true);
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.theme = next ? "dark" : "light";
  };

  return (
    <button
      onClick={toggle}
      aria-label="Toggle dark mode"
      className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white/40 text-zinc-700 shadow-lg backdrop-blur-md transition-colors hover:bg-white/60 dark:border-white/20 dark:bg-white/10 dark:text-white dark:hover:bg-white/20"
    >
      {/* Gate on mounted to avoid hydration mismatch with the pre-paint class. */}
      {mounted && (dark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />)}
      {!mounted && <span className="block h-5 w-5" />}
    </button>
  );
}
