import { AvailabilityScheduler } from "@/components/admin/AvailabilityScheduler";

export function StaffForm() {
  return (
    <div className="space-y-6">
      <form className="grid gap-4 md:grid-cols-2">
        {["Name", "Title", "Experience", "Instagram URL"].map((field) => (
          <div key={field}>
            <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-text-secondary">
              {field}
            </label>
          <input
            className="w-full rounded-md border border-white/10 bg-background-tertiary px-4 py-3 text-text-primary outline-none transition focus:border-gold-400/40 focus:ring-2 focus:ring-gold-400/20"
            placeholder={field}
            type="text"
          />
          </div>
        ))}
        <div className="md:col-span-2">
          <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-text-secondary">
            Bio
          </label>
          <textarea className="min-h-32 w-full rounded-md border border-white/10 bg-background-tertiary px-4 py-3 text-text-primary outline-none transition focus:border-gold-400/40 focus:ring-2 focus:ring-gold-400/20" />
        </div>
      </form>
      <AvailabilityScheduler />
    </div>
  );
}
