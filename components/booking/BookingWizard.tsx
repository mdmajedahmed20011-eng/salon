"use client";

import { Check } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

const steps = [
  { href: "/book", label: "Select services" },
  { href: "/book/stylist", label: "Choose stylist" },
  { href: "/book/datetime", label: "Pick date and time" },
  { href: "/book/confirm", label: "Confirm and pay" },
];

export function BookingWizard({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const currentIndex = steps.findIndex((step) => pathname === step.href);

  return (
    <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
      <aside className="hidden rounded-[28px] border border-white/10 bg-white/[0.03] p-6 lg:block">
        <div className="text-sm uppercase tracking-[0.16em] text-gold-300">Booking progress</div>
        <div className="mt-8 space-y-6">
          {steps.map((step, index) => {
            const active = index === currentIndex;
            const complete = index < currentIndex;

            return (
              <div key={step.href} className="relative pl-12">
                {index < steps.length - 1 ? (
                  <span className="absolute left-[14px] top-8 h-[54px] w-px bg-white/10" />
                ) : null}
                <span
                  className={cn(
                    "absolute left-0 top-0 flex h-7 w-7 items-center justify-center rounded-full border text-xs font-semibold",
                    active && "border-gold-400 bg-gold-400 text-black",
                    complete && "border-gold-400 bg-gold-400/10 text-gold-300",
                    !active && !complete && "border-white/10 text-text-secondary",
                  )}
                >
                  {complete ? <Check className="h-3.5 w-3.5" /> : index + 1}
                </span>
                <Link
                  className={cn(
                    "block text-sm uppercase tracking-[0.14em]",
                    active ? "text-gold-300" : "text-text-secondary",
                  )}
                  href={step.href}
                >
                  {step.label}
                </Link>
              </div>
            );
          })}
        </div>
      </aside>
      <div>{children}</div>
    </div>
  );
}
