import { ReviewForm } from "@/components/forms/ReviewForm";

export default function DashboardReviewsPage() {
  return (
    <div className="premium-card p-8">
      <p className="section-label">Reviews</p>
      <h1 className="text-5xl">Share your latest experience</h1>
      <div className="mt-8">
        <ReviewForm />
      </div>
    </div>
  );
}
