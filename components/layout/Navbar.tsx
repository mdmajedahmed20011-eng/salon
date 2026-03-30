"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { Button } from "@/components/shared/Button";
import { AnimatePresence, motion } from "@/components/shared/Motion";
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

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-background-primary/85 backdrop-blur-xl">
      <div className="container-shell flex h-20 items-center justify-between gap-3 sm:gap-4">
        <Link className="flex items-center gap-3" href="/">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gold-400/30 bg-gold-400/10 font-heading text-base font-bold text-gold-300 sm:text-lg">
            L
          </span>
          <div className="min-w-0">
            <div className="truncate font-heading text-xl font-semibold tracking-tight sm:text-2xl">
              LuxeSalon
            </div>
            <div className="hidden text-[11px] uppercase tracking-[0.18em] text-text-secondary sm:block">
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
          <Button asChild variant="ghost">
            <Link href="/auth/login">Login</Link>
          </Button>
          <Button asChild>
            <Link href="/book">Book Appointment</Link>
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <Button asChild className="px-4 py-2.5 text-xs" size="sm">
            <Link href="/book">Book</Link>
          </Button>
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
            <div className="ml-auto flex h-full w-full max-w-sm flex-col border-l border-white/10 bg-background-secondary p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-heading text-2xl">LuxeSalon</div>
                  <div className="mt-1 text-[11px] uppercase tracking-[0.18em] text-gold-300">
                    Navigate the experience
                  </div>
                </div>
                <Button aria-label="Close menu" onClick={() => setOpen(false)} variant="icon">
                  <X className="h-5 w-5" />
                </Button>
              </div>
              <div className="mt-8 rounded-[24px] border border-gold-400/15 bg-gold-400/10 p-4">
                <div className="text-xs uppercase tracking-[0.16em] text-gold-200">Today</div>
                <p className="mt-2 text-sm leading-6 text-text-secondary">
                  Same-day styling and facial slots are available. Reserve in under 60 seconds.
                </p>
              </div>
              <div className="mt-8 space-y-3">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    className="block rounded-2xl border border-white/5 bg-white/5 px-5 py-4 text-lg text-text-primary transition hover:border-gold-400/25 hover:bg-gold-400/10"
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
                <div className="rounded-[20px] border border-white/10 bg-white/[0.03] px-4 py-4 text-sm text-text-secondary">
                  Gulshan branch open until 9:00 PM
                </div>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
