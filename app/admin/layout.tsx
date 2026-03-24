import type { ReactNode } from "react";

import { AdminSidebar } from "@/components/layout/AdminSidebar";

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <main className="container-shell py-10 sm:py-12">
      <div className="grid gap-8 lg:grid-cols-[260px_1fr]">
        <AdminSidebar />
        <div className="space-y-8">{children}</div>
      </div>
    </main>
  );
}
