export default function DashboardNotificationsPage() {
  return (
    <div className="premium-card p-8">
      <p className="section-label">Notifications</p>
      <h1 className="text-5xl">Stay on top of every update</h1>
      <div className="mt-8 space-y-4">
        {[
          "Your booking for March 22 is confirmed.",
          "A loyalty reward is ready to redeem.",
          "A new promotion has been added for facial treatments.",
        ].map((item) => (
          <div
            key={item}
            className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5 text-sm leading-7 text-text-secondary"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
