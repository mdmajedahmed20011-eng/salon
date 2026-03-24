import { ProfileForm } from "@/components/forms/ProfileForm";

export default function DashboardProfilePage() {
  return (
    <div className="premium-card p-8">
      <p className="section-label">Profile settings</p>
      <h1 className="text-5xl">Manage your preferences</h1>
      <div className="mt-8">
        <ProfileForm />
      </div>
    </div>
  );
}
