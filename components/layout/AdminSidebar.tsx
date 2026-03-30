"use client";

import {
  BarChart3,
  Bell,
  CalendarClock,
  ImagePlus,
  LayoutDashboard,
  MapPinned,
  MessageSquare,
  Settings,
  Sparkles,
  UsersRound,
  WandSparkles,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

const links = [
  { href: "/admin", label: "Overview", icon: LayoutDashboard },
  { href: "/admin/bookings", label: "Bookings", icon: CalendarClock },
  { href: "/admin/services", label: "Services", icon: Sparkles },
  { href: "/admin/staff", label: "Staff", icon: WandSparkles },
  { href: "/admin/customers", label: "Customers", icon: UsersRound },
  { href: "/admin/analytics", label: "Analytics", icon: BarChart3 },
  { href: "/admin/locations", label: "Locations", icon: MapPinned },
  { href: "/admin/promotions", label: "Promotions", icon: ImagePlus },
  { href: "/admin/reviews", label: "Reviews", icon: MessageSquare },
  { href: "/admin/settings", label: "Settings", icon: Settings },
];

export function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="rounded-[28px] border border-white/10 bg-white/[0.03] p-3 lg:p-5">
      <div className="rounded-[24px] border border-white/10 bg-black/20 p-4 lg:p-5">
        <div className="flex items-center justify-between gap-3">
          <div className="flex min-w-0 items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-gold-400/20 bg-gold-400/10 font-heading text-xl text-gold-300">
              L
            </div>
            <div className="hidden min-w-0 lg:block">
              <div className="truncate font-heading text-3xl">LuxeSalon</div>
              <div className="mt-1 text-sm uppercase tracking-[0.16em] text-gold-300">
                Admin panel
              </div>
            </div>
          </div>
          <button
            aria-label="Notifications"
            className="relative hidden h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-text-secondary transition hover:text-text-primary lg:inline-flex"
            type="button"
          >
            <Bell className="h-4 w-4" />
            <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-rose-400" />
          </button>
        </div>
        <div className="mt-4 hidden rounded-[20px] border border-gold-400/15 bg-gold-400/10 p-4 lg:block">
          <div className="text-xs uppercase tracking-[0.16em] text-gold-200">Live operations</div>
          <p className="mt-2 text-sm leading-6 text-text-secondary">
            48 bookings tracked today across Gulshan and Dhanmondi.
          </p>
        </div>
      </div>
      <nav className="mt-6 space-y-2">
        {links.map((link) => {
          const Icon = link.icon;
          const active = pathname === link.href || pathname.startsWith(`${link.href}/`);

          return (
            <Link
              key={link.href}
              className={cn(
                "flex items-center justify-center gap-3 rounded-2xl border px-4 py-3 text-sm transition lg:justify-start",
                active
                  ? "border-gold-400/25 bg-gold-400/10 text-gold-300"
                  : "border-transparent text-text-secondary hover:border-white/10 hover:bg-white/[0.03] hover:text-text-primary",
              )}
              href={link.href}
              title={link.label}
            >
              <Icon className="h-4 w-4" />
              <span className="hidden lg:inline">{link.label}</span>
            </Link>
          );
        })}
      </nav>
      <div className="mt-6 hidden rounded-[24px] border border-white/10 bg-black/20 p-5 lg:block">
        <div className="text-xs uppercase tracking-[0.14em] text-gold-300">System health</div>
        <div className="mt-4 flex items-center justify-between text-sm text-text-secondary">
          <span>Realtime sync</span>
          <span className="text-success">Healthy</span>
        </div>
        <div className="mt-2 flex items-center justify-between text-sm text-text-secondary">
          <span>Payment queue</span>
          <span className="text-success">Stable</span>
        </div>
      </div>
    </aside>
  );
}
