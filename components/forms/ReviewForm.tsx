export function ReviewForm() {
  return (
    <form className="space-y-4">
      <div>
        <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-text-secondary">
          Rating
        </label>
        <div className="flex gap-2 text-gold-300">
          {Array.from({ length: 5 }).map((_, index) => (
            <button key={index} className="text-2xl" type="button">
              *
            </button>
          ))}
        </div>
      </div>
      <div>
        <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-text-secondary">
          Title
        </label>
        <input
          className="w-full rounded-md border border-white/10 bg-background-tertiary px-4 py-3 text-text-primary outline-none transition focus:border-gold-400/60 focus:ring-2 focus:ring-gold-400/30"
          placeholder="Share your headline"
          type="text"
        />
      </div>
      <div>
        <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-text-secondary">
          Review
        </label>
        <textarea
          className="min-h-32 w-full rounded-md border border-white/10 bg-background-tertiary px-4 py-3 text-text-primary outline-none transition focus:border-gold-400/60 focus:ring-2 focus:ring-gold-400/30"
          placeholder="Tell us about the experience"
        />
      </div>
      <button
        className="rounded-md bg-gold-400 px-8 py-3.5 font-semibold text-black transition hover:bg-gold-500"
        type="submit"
      >
        Submit review
      </button>
    </form>
  );
}
