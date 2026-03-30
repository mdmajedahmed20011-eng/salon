import type { ReactNode } from "react";

interface AdminPageHeaderProps {
  label: string;
  title: string;
  description: string;
  badges?: string[];
  actions?: ReactNode;
}

export function AdminPageHeader({
  label,
  title,
  description,
  badges = [],
  actions,
}: AdminPageHeaderProps) {
  return (
    <div className="premium-card overflow-hidden p-6 sm:p-8">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl">
          <p className="section-label">{label}</p>
          <h1 className="text-4xl sm:text-5xl">{title}</h1>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-text-secondary sm:text-base">
            {description}
          </p>
          {badges.length > 0 ? (
            <div className="mt-6 flex flex-wrap gap-2">
              {badges.map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-gold-400/20 bg-gold-400/10 px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-gold-200"
                >
                  {badge}
                </span>
              ))}
            </div>
          ) : null}
        </div>
        {actions ? <div className="flex flex-wrap gap-3">{actions}</div> : null}
      </div>
    </div>
  );
}
