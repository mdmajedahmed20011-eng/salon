export function BookingCalendar() {
  return (
    <div className="premium-card p-6">
      <div className="text-sm uppercase tracking-[0.16em] text-gold-300">Schedule</div>
      <h2 className="mt-3 text-3xl">Today&apos;s bookings</h2>
      <div className="mt-6 space-y-4">
        {[
          "09:00 • Signature Precision Cut • Amira Rahman",
          "11:30 • Luminous Glow Facial • Nabila Haque",
          "14:00 • Bridal Preview Session • Sadia Khan",
          "17:30 • Hot Stone Escape • Israt Jahan",
        ].map((item) => (
          <div
            key={item}
            className="rounded-[24px] border border-white/10 bg-white/[0.03] px-4 py-4 text-sm text-text-secondary"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
