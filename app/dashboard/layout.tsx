import type { ReactNode } from "react";

import { DashboardSidebar } from "@/components/layout/DashboardSidebar";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <main className="container-shell py-10 sm:py-12">
      <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
        <DashboardSidebar />
        <div className="space-y-8">{children}</div>
      </div>
    </main>
  );
}
