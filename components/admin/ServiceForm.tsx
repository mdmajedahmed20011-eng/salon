export function ServiceForm() {
  return (
    <form className="grid gap-4 md:grid-cols-2">
      {["Name", "Category", "Duration", "Price"].map((field) => (
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
      <div className="md:col-span-2">
        <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-text-secondary">
          Description
        </label>
        <textarea className="min-h-32 w-full rounded-md border border-white/10 bg-background-tertiary px-4 py-3 text-text-primary outline-none" />
      </div>
    </form>
  );
}
