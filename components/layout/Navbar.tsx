"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { Button } from "@/components/shared/Button";
import { AnimatePresence, motion } from "@/components/shared/Motion";
import { ThemeToggle } from "@/components/shared/ThemeToggle";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/stylists", label: "Stylists" },
  { href: "/locations", label: "Locations" },
  { href: "/ai-advisor", label: "AI Advisor" },
  { href: "/promotions", label: "Promotions" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-background-primary/85 backdrop-blur-xl">
      <div className="container-shell flex h-20 items-center justify-between gap-4">
        <Link className="flex items-center gap-3" href="/">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gold-400/30 bg-gold-400/10 font-heading text-lg font-bold text-gold-300">
            L
          </span>
          <div>
            <div className="font-heading text-2xl font-semibold tracking-tight">LuxeSalon</div>
            <div className="text-[11px] uppercase tracking-[0.18em] text-text-secondary">
              Premium salon and spa
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((link) => {
            const active = pathname === link.href || pathname.startsWith(`${link.href}/`);

            return (
              <Link
                key={link.href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm transition-colors duration-150 hover:text-text-primary",
                  active ? "bg-white/5 text-gold-300" : "text-text-secondary",
                )}
                href={link.href}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <Button asChild variant="ghost">
            <Link href="/auth/login">Login</Link>
          </Button>
          <Button asChild>
            <Link href="/book">Book Appointment</Link>
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <Button aria-label="Open menu" onClick={() => setOpen(true)} variant="icon">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            animate={{ opacity: 1, x: 0 }}
            className="fixed inset-0 z-50 flex bg-black/70 backdrop-blur-sm"
            exit={{ opacity: 0, x: "100%" }}
            initial={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.25 }}
          >
            <div className="ml-auto flex h-full w-full max-w-sm flex-col bg-background-secondary p-6">
              <div className="flex items-center justify-between">
                <div className="font-heading text-2xl">LuxeSalon</div>
                <Button aria-label="Close menu" onClick={() => setOpen(false)} variant="icon">
                  <X className="h-5 w-5" />
                </Button>
              </div>
              <div className="mt-10 space-y-3">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    className="block rounded-2xl border border-white/5 bg-white/5 px-5 py-4 text-lg text-text-primary"
                    href={link.href}
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <div className="mt-auto space-y-3">
                <Button asChild className="w-full">
                  <Link href="/book" onClick={() => setOpen(false)}>
                    Book Appointment
                  </Link>
                </Button>
                <Button asChild className="w-full" variant="secondary">
                  <Link href="/auth/login" onClick={() => setOpen(false)}>
                    Login
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
