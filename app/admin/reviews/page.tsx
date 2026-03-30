import { AdminPageHeader } from "@/components/admin/AdminPageHeader";

export default function AdminReviewsPage() {
  return (
    <div className="space-y-8">
      <AdminPageHeader
        badges={["2 replies pending", "4.9 average public rating", "Image uploads enabled"]}
        description="Stay close to guest feedback, protect the brand voice, and close review loops with thoughtful replies."
        label="Reviews"
        title="Moderation and replies"
      />
      <div className="space-y-4">
        {[
          "5.0 • Nadia Karim • Signature Precision Cut",
          "4.8 • Tania Reza • Bridal Preview Session",
          "5.0 • Sharmeen Hossain • Dimensional Color Gloss",
        ].map((review) => (
          <div
            key={review}
            className="premium-card p-5 text-sm text-text-secondary"
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <span>{review}</span>
              <span className="rounded-full border border-white/10 bg-black/20 px-3 py-2 text-[11px] uppercase tracking-[0.14em]">
                Reply suggested
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
