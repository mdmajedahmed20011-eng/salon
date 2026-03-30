export function CustomerDrawer() {
  return (
    <div className="premium-card p-6">
      <div className="text-sm uppercase tracking-[0.16em] text-gold-300">Customer profile</div>
      <h2 className="mt-3 text-3xl">Nadia Karim</h2>
      <div className="mt-4 flex flex-wrap gap-2">
        <span className="rounded-full border border-gold-400/20 bg-gold-400/10 px-3 py-1 text-[11px] uppercase tracking-[0.14em] text-gold-200">
          Gold tier
        </span>
        <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] uppercase tracking-[0.14em] text-text-secondary">
          Last seen 25 days ago
        </span>
      </div>
      <div className="mt-6 space-y-4 text-sm text-text-secondary">
        <div>Total bookings: 18</div>
        <div>Total spent: 84,300 BDT</div>
        <div>Loyalty points: 4,120</div>
        <div>Last visit: March 5, 2026</div>
      </div>
      <div className="mt-6 rounded-[24px] border border-white/10 bg-black/20 p-4 text-sm text-text-secondary">
        Prefers evening appointments, WhatsApp reminders, and senior stylists for color sessions.
      </div>
    </div>
  );
}
