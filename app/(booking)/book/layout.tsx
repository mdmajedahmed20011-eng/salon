import type { ReactNode } from "react";
import Link from "next/link";

import { BookingWizard } from "@/components/booking/BookingWizard";

export default function BookLayout({ children }: { children: ReactNode }) {
  return (
    <main className="container-shell py-10 sm:py-12">
      <div className="mb-10 flex items-center justify-between gap-4">
        <Link className="font-heading text-3xl" href="/">
          LuxeSalon
        </Link>
        <div className="text-sm uppercase tracking-[0.16em] text-text-secondary">Book appointment</div>
      </div>
      <BookingWizard>{children}</BookingWizard>
    </main>
  );
}
