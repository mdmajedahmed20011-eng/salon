"use client";

import {
  BarChart3,
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
    <aside className="rounded-[28px] border border-white/10 bg-white/[0.03] p-5">
      <div className="rounded-[24px] border border-white/10 bg-black/20 p-5">
        <div className="font-heading text-3xl">LuxeSalon</div>
        <div className="mt-2 text-sm uppercase tracking-[0.16em] text-gold-300">Admin panel</div>
      </div>
      <nav className="mt-6 space-y-2">
        {links.map((link) => {
          const Icon = link.icon;
          const active = pathname === link.href || pathname.startsWith(`${link.href}/`);

          return (
            <Link
              key={link.href}
              className={cn(
                "flex items-center gap-3 rounded-2xl border px-4 py-3 text-sm transition",
                active
                  ? "border-gold-400/25 bg-gold-400/10 text-gold-300"
                  : "border-transparent text-text-secondary hover:border-white/10 hover:bg-white/[0.03] hover:text-text-primary",
              )}
              href={link.href}
            >
              <Icon className="h-4 w-4" />
              {link.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
