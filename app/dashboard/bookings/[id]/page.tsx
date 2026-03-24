import { notFound } from "next/navigation";

import { BookingStatusBadge } from "@/components/shared/BookingStatusBadge";
import { bookingHistory } from "@/lib/demo-data";
import { formatCurrency } from "@/lib/utils";

export default function DashboardBookingDetailPage({ params }: { params: { id: string } }) {
  const booking = bookingHistory.find((item) => item.id === params.id);

  if (!booking) {
    notFound();
  }

  return (
    <div className="premium-card p-8">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="section-label">Booking detail</p>
          <h1 className="text-5xl">{booking.id}</h1>
        </div>
        <BookingStatusBadge status={booking.status} />
      </div>
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5">
          <div className="text-xs uppercase tracking-[0.14em] text-text-secondary">Services</div>
          <div className="mt-3 text-xl">{booking.serviceNames.join(", ")}</div>
        </div>
        <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5">
          <div className="text-xs uppercase tracking-[0.14em] text-text-secondary">Amount</div>
          <div className="mt-3 text-xl text-gold-300">{formatCurrency(booking.amount)}</div>
        </div>
        <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5">
          <div className="text-xs uppercase tracking-[0.14em] text-text-secondary">Stylist</div>
          <div className="mt-3 text-xl">{booking.stylistName}</div>
        </div>
        <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5">
          <div className="text-xs uppercase tracking-[0.14em] text-text-secondary">Visit time</div>
          <div className="mt-3 text-xl">{booking.dateLabel}</div>
        </div>
      </div>
    </div>
  );
}
