export default function AdminSettingsPage() {
  return (
    <div className="premium-card p-8">
      <p className="section-label">Settings</p>
      <h1 className="text-5xl">Salon configuration</h1>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {[
          "Salon name",
          "Primary color",
          "Booking advance days",
          "Cancellation hours",
          "Loyalty points per dollar",
          "Tax rate",
        ].map((field) => (
          <div key={field}>
            <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-text-secondary">
              {field}
            </label>
            <input
              className="w-full rounded-md border border-white/10 bg-background-tertiary px-4 py-3 text-text-primary outline-none"
              placeholder={field}
              type="text"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
