export function ProfileForm() {
  return (
    <form className="grid gap-4 md:grid-cols-2">
      {[
        "Full name",
        "Email",
        "Phone",
        "Date of birth",
        "Gender",
        "Preferred location",
      ].map((field) => (
        <div key={field}>
          <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-text-secondary">
            {field}
          </label>
          <input
            className="w-full rounded-md border border-white/10 bg-background-tertiary px-4 py-3 text-text-primary outline-none transition focus:border-gold-400/60 focus:ring-2 focus:ring-gold-400/30"
            placeholder={field}
            type="text"
          />
        </div>
      ))}
      <div className="md:col-span-2">
        <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-text-secondary">
          Communication preferences
        </label>
        <div className="flex flex-wrap gap-3">
          {["Email", "SMS", "WhatsApp"].map((option) => (
            <label
              key={option}
              className="flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-text-secondary"
            >
              <input className="accent-gold-400" defaultChecked type="checkbox" />
              {option}
            </label>
          ))}
        </div>
      </div>
      <div className="md:col-span-2">
        <button
          className="rounded-md bg-gold-400 px-8 py-3.5 font-semibold text-black transition hover:bg-gold-500"
          type="submit"
        >
          Save profile
        </button>
      </div>
    </form>
  );
}
