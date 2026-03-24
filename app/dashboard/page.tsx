import { BookingStatusBadge } from "@/components/shared/BookingStatusBadge";
import { LoyaltyBadge } from "@/components/shared/LoyaltyBadge";
import { bookingHistory, dashboardStats, stylists } from "@/lib/demo-data";
import { formatCurrency, getTier } from "@/lib/utils";

export default function DashboardHomePage() {
  const tier = getTier(dashboardStats.loyaltyPoints);

  return (
    <div className="space-y-8">
      <div className="premium-card p-8">
        <p className="section-label">Dashboard</p>
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h1 className="text-5xl">Good morning, Majed</h1>
            <p className="mt-4 text-base leading-8 text-text-secondary">
              Saturday, March 14, 2026. Your next appointment is already lined up.
            </p>
          </div>
          <LoyaltyBadge tier={tier} />
        </div>
      </div>

      <div className="premium-card p-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="text-sm uppercase tracking-[0.16em] text-gold-300">Upcoming booking</div>
            <h2 className="mt-3 text-4xl">{bookingHistory[0].serviceNames.join(" + ")}</h2>
            <p className="mt-4 text-base leading-8 text-text-secondary">
              {bookingHistory[0].dateLabel} with {bookingHistory[0].stylistName} at{" "}
              {bookingHistory[0].locationName}
            </p>
          </div>
          <BookingStatusBadge status={bookingHistory[0].status} />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <div className="premium-card p-6">
          <div className="text-sm uppercase tracking-[0.14em] text-text-secondary">Total bookings</div>
          <div className="mt-4 text-4xl">{dashboardStats.totalBookings}</div>
        </div>
        <div className="premium-card p-6">
          <div className="text-sm uppercase tracking-[0.14em] text-text-secondary">Loyalty points</div>
          <div className="mt-4 text-4xl">{dashboardStats.loyaltyPoints}</div>
        </div>
        <div className="premium-card p-6">
          <div className="text-sm uppercase tracking-[0.14em] text-text-secondary">Avg rating given</div>
          <div className="mt-4 text-4xl">{dashboardStats.averageRating}</div>
        </div>
        <div className="premium-card p-6">
          <div className="text-sm uppercase tracking-[0.14em] text-text-secondary">Total spent</div>
          <div className="mt-4 text-4xl">{formatCurrency(dashboardStats.totalSpent)}</div>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-[1fr_0.9fr]">
        <div className="premium-card p-8">
          <h2 className="text-3xl">Recent bookings</h2>
          <div className="mt-6 space-y-4">
            {bookingHistory.map((booking) => (
              <div
                key={booking.id}
                className="flex flex-col gap-4 rounded-[24px] border border-white/10 bg-white/[0.03] p-5 lg:flex-row lg:items-center lg:justify-between"
              >
                <div>
                  <div className="text-lg">{booking.serviceNames.join(", ")}</div>
                  <div className="mt-2 text-sm text-text-secondary">{booking.dateLabel}</div>
                </div>
                <BookingStatusBadge status={booking.status} />
              </div>
            ))}
          </div>
        </div>
        <div className="premium-card p-8">
          <h2 className="text-3xl">Favorite stylists</h2>
          <div className="mt-6 space-y-4">
            {stylists.slice(0, 4).map((stylist) => (
              <div
                key={stylist.id}
                className="flex items-center justify-between gap-4 rounded-[24px] border border-white/10 bg-white/[0.03] p-4"
              >
                <div>
                  <div className="text-lg">{stylist.name}</div>
                  <div className="text-sm text-text-secondary">{stylist.title}</div>
                </div>
                <div className="rounded-full border border-gold-400/20 bg-gold-400/10 px-3 py-1 text-xs uppercase tracking-[0.14em] text-gold-200">
                  Book again
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
