"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

import type { ReactNode } from "react";

type Theme = "dark" | "light";

interface ThemeContextValue {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("dark");

  useEffect(() => {
    const storedTheme = window.localStorage.getItem("luxesalon-theme") as Theme | null;
    const nextTheme = storedTheme ?? "dark";

    document.documentElement.setAttribute("data-theme", nextTheme);
    setThemeState(nextTheme);
  }, []);

  function setTheme(nextTheme: Theme) {
    document.documentElement.setAttribute("data-theme", nextTheme);
    window.localStorage.setItem("luxesalon-theme", nextTheme);
    setThemeState(nextTheme);
  }

  const value = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used inside ThemeProvider.");
  }

  return context;
}
