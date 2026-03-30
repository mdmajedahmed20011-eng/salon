const todaysBookings = [
  {
    time: "09:00",
    service: "Signature Precision Cut",
    stylist: "Amira Rahman",
    location: "Gulshan",
    status: "Checked in",
  },
  {
    time: "11:30",
    service: "Luminous Glow Facial",
    stylist: "Nabila Haque",
    location: "Dhanmondi",
    status: "Confirmed",
  },
  {
    time: "14:00",
    service: "Bridal Preview Session",
    stylist: "Sadia Khan",
    location: "Gulshan",
    status: "VIP",
  },
  {
    time: "17:30",
    service: "Hot Stone Escape",
    stylist: "Israt Jahan",
    location: "Gulshan",
    status: "Awaiting arrival",
  },
];

export function BookingCalendar() {
  return (
    <div className="premium-card p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-sm uppercase tracking-[0.16em] text-gold-300">Schedule</div>
          <h2 className="mt-3 text-3xl">Today&apos;s bookings</h2>
        </div>
        <div className="rounded-full border border-gold-400/20 bg-gold-400/10 px-3 py-2 text-xs uppercase tracking-[0.14em] text-gold-200">
          4 priority arrivals
        </div>
      </div>
      <div className="mt-6 space-y-4">
        {todaysBookings.map((item) => (
          <div
            key={`${item.time}-${item.service}`}
            className="rounded-[24px] border border-white/10 bg-white/[0.03] px-4 py-4"
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-gold-400/20 bg-gold-400/10 text-sm font-semibold text-gold-300">
                  {item.time}
                </div>
                <div>
                  <div className="text-base text-text-primary">{item.service}</div>
                  <div className="mt-2 text-sm text-text-secondary">
                    {item.stylist} • {item.location}
                  </div>
                </div>
              </div>
              <div className="rounded-full border border-white/10 bg-black/20 px-3 py-2 text-xs uppercase tracking-[0.14em] text-text-secondary">
                {item.status}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
