export default function Loading() {
  return (
    <div className="container-shell flex min-h-screen items-center justify-center">
      <div className="premium-card w-full max-w-lg p-8">
        <div className="h-3 w-24 animate-pulse rounded-full bg-gold-400/20" />
        <div className="mt-6 h-16 animate-pulse rounded-3xl bg-white/5" />
        <div className="mt-4 h-4 animate-pulse rounded-full bg-white/5" />
        <div className="mt-3 h-4 w-4/5 animate-pulse rounded-full bg-white/5" />
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="h-36 animate-pulse rounded-[24px] bg-white/5" />
          ))}
        </div>
      </div>
    </div>
  );
}
