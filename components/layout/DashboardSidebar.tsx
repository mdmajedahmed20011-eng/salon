"use client";

import {
  CalendarRange,
  Heart,
  Home,
  LogOut,
  MessageSquareText,
  Settings,
  Sparkles,
  UserRound,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { LoyaltyBadge } from "@/components/shared/LoyaltyBadge";
import { cn, getTier, getNextTier } from "@/lib/utils";

const links = [
  { href: "/dashboard", label: "Dashboard", icon: Home },
  { href: "/dashboard/bookings", label: "My Bookings", icon: CalendarRange },
  { href: "/dashboard/profile", label: "Profile", icon: UserRound },
  { href: "/dashboard/favorites", label: "Favorites", icon: Heart },
  { href: "/dashboard/loyalty", label: "Loyalty Points", icon: Sparkles },
  { href: "/dashboard/reviews", label: "Reviews", icon: MessageSquareText },
  { href: "/dashboard/notifications", label: "Notifications", icon: Settings },
];

export function DashboardSidebar() {
  const pathname = usePathname();
  const points = 3240;
  const tier = getTier(points);
  const nextTier = getNextTier(points);
  const progress = Math.min((points / nextTier.target) * 100, 100);

  return (
    <aside className="rounded-[28px] border border-white/10 bg-white/[0.03] p-3 lg:p-4 xl:p-5">
      <div className="rounded-[24px] border border-white/10 bg-black/20 p-4 xl:p-5">
        <div className="flex h-14 w-14 items-center justify-center rounded-full border border-gold-400/20 bg-gold-400/10 text-xl font-semibold text-gold-300">
          MR
        </div>
        <div className="mt-4 lg:hidden xl:block">
          <div className="text-xl font-semibold">Majed Rahman</div>
          <div className="mt-3">
            <LoyaltyBadge tier={tier} />
          </div>
        </div>
      </div>
      <nav className="mt-6 space-y-2">
        {links.map((link) => {
          const active = pathname === link.href || pathname.startsWith(`${link.href}/`);
          const Icon = link.icon;

          return (
            <Link
              key={link.href}
              className={cn(
                "flex items-center justify-center gap-3 rounded-2xl border px-4 py-3 text-sm transition xl:justify-start",
                active
                  ? "border-gold-400/25 bg-gold-400/10 text-gold-300"
                  : "border-transparent text-text-secondary hover:border-white/10 hover:bg-white/[0.03] hover:text-text-primary",
              )}
              href={link.href}
              title={link.label}
            >
              <Icon className="h-4 w-4" />
              <span className="hidden xl:inline">{link.label}</span>
            </Link>
          );
        })}
        <button
          className="flex w-full items-center justify-center gap-3 rounded-2xl px-4 py-3 text-sm text-text-secondary transition hover:bg-white/[0.03] hover:text-text-primary xl:justify-start"
          title="Logout"
          type="button"
        >
          <LogOut className="h-4 w-4" />
          <span className="hidden xl:inline">Logout</span>
        </button>
      </nav>
      <div className="mt-6 hidden rounded-[24px] border border-white/10 bg-black/20 p-5 xl:block">
        <div className="text-xs uppercase tracking-[0.14em] text-gold-300">Tier progress</div>
        <div className="mt-4 h-2 rounded-full bg-white/10">
          <div className={`h-full rounded-full bg-gold-400 ${progress >= 60 ? "w-[64%]" : "w-[32%]"}`} />
        </div>
        <p className="mt-4 text-sm leading-7 text-text-secondary">
          {nextTier.target - points} points until {nextTier.tier}
        </p>
      </div>
    </aside>
  );
}
