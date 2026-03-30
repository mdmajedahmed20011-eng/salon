import type { ReactNode } from "react";
import Link from "next/link";

import { ArrowLeft, LaptopMinimalCheck } from "lucide-react";

import { AdminSidebar } from "@/components/layout/AdminSidebar";
import { Button } from "@/components/shared/Button";

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <main className="container-shell py-6 sm:py-10">
      <div className="premium-card p-6 sm:hidden">
        <div className="flex h-14 w-14 items-center justify-center rounded-full border border-gold-400/20 bg-gold-400/10 text-gold-300">
          <LaptopMinimalCheck className="h-6 w-6" />
        </div>
        <p className="section-label mt-6">Admin access</p>
        <h1 className="text-4xl">Please use a larger screen for the admin panel</h1>
        <p className="mt-4 text-sm leading-7 text-text-secondary">
          The operational workspace is optimized for tablet and desktop so calendars, charts, and
          customer records stay clear and accurate.
        </p>
        <div className="mt-6 flex flex-col gap-3">
          <Button asChild>
            <Link href="/">
              <ArrowLeft className="h-4 w-4" />
              Return to website
            </Link>
          </Button>
          <Button asChild variant="secondary">
            <Link href="/dashboard">Open client dashboard</Link>
          </Button>
        </div>
      </div>

      <div className="hidden gap-6 sm:grid sm:grid-cols-[88px_1fr] xl:grid-cols-[280px_1fr] xl:gap-8">
        <div className="sm:sticky sm:top-24 sm:self-start">
          <AdminSidebar />
        </div>
        <div className="space-y-8">{children}</div>
      </div>
    </main>
  );
}
