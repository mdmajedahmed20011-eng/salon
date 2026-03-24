const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export function AvailabilityScheduler() {
  return (
    <div className="grid gap-3">
      {days.map((day) => (
        <div
          key={day}
          className="grid gap-3 rounded-[20px] border border-white/10 bg-white/[0.03] p-4 sm:grid-cols-[80px_1fr_1fr]"
        >
          <div className="text-sm font-semibold text-text-primary">{day}</div>
          <input
            className="rounded-md border border-white/10 bg-background-tertiary px-4 py-3 text-sm text-text-primary outline-none"
            defaultValue="09:00"
            type="text"
          />
          <input
            className="rounded-md border border-white/10 bg-background-tertiary px-4 py-3 text-sm text-text-primary outline-none"
            defaultValue="18:00"
            type="text"
          />
        </div>
      ))}
    </div>
  );
}
