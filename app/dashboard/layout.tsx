import type { ReactNode } from "react";

import { DashboardSidebar } from "@/components/layout/DashboardSidebar";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <main className="container-shell py-6 sm:py-10">
      <div className="grid gap-6 md:grid-cols-[88px_1fr] xl:grid-cols-[280px_1fr] xl:gap-8">
        <DashboardSidebar />
        <div className="space-y-8">{children}</div>
      </div>
    </main>
  );
}
