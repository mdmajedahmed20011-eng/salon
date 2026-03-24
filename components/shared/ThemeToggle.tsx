"use client";

import { Moon, SunMedium } from "lucide-react";

import { Button } from "@/components/shared/Button";
import { useTheme } from "@/components/shared/ThemeProvider";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const isLight = theme === "light";

  return (
    <Button
      aria-label="Toggle theme"
      variant="icon"
      onClick={() => setTheme(isLight ? "dark" : "light")}
      type="button"
    >
      {isLight ? <Moon className="h-4 w-4" /> : <SunMedium className="h-4 w-4" />}
    </Button>
  );
}
