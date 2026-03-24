export default function AdminReviewsPage() {
  return (
    <div className="premium-card p-8">
      <p className="section-label">Reviews</p>
      <h1 className="text-5xl">Moderation and replies</h1>
      <div className="mt-8 space-y-4">
        {[
          "5.0 • Nadia Karim • Signature Precision Cut",
          "4.8 • Tania Reza • Bridal Preview Session",
          "5.0 • Sharmeen Hossain • Dimensional Color Gloss",
        ].map((review) => (
          <div
            key={review}
            className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5 text-sm text-text-secondary"
          >
            {review}
          </div>
        ))}
      </div>
    </div>
  );
}
