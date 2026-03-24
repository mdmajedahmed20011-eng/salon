import Link from "next/link";

import { BookingStatusBadge } from "@/components/shared/BookingStatusBadge";
import { Button } from "@/components/shared/Button";
import { bookingHistory } from "@/lib/demo-data";
import { formatCurrency } from "@/lib/utils";

export default function DashboardBookingsPage() {
  return (
    <div className="premium-card p-8">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="section-label">My bookings</p>
          <h1 className="text-5xl">Past and upcoming appointments</h1>
        </div>
        <Button asChild>
          <Link href="/book">Book again</Link>
        </Button>
      </div>
      <div className="mt-10 space-y-4">
        {bookingHistory.map((booking) => (
          <article
            key={booking.id}
            className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6"
          >
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <div className="text-2xl">{booking.serviceNames.join(", ")}</div>
                <p className="mt-3 text-sm leading-7 text-text-secondary">
                  {booking.stylistName} • {booking.locationName} • {booking.dateLabel}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-sm text-gold-300">{formatCurrency(booking.amount)}</div>
                <BookingStatusBadge status={booking.status} />
                <Button asChild variant="secondary">
                  <Link href={`/dashboard/bookings/${booking.id}`}>View details</Link>
                </Button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
