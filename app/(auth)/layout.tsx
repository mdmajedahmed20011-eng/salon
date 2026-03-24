import type { ReactNode } from "react";
import Link from "next/link";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <main className="flex min-h-screen items-center justify-center px-4 py-12">
      <div className="absolute inset-0 -z-10 bg-radial-premium opacity-80" />
      <div className="premium-card grid w-full max-w-5xl overflow-hidden lg:grid-cols-[1.1fr_0.9fr]">
        <div className="hidden bg-premium-panel p-12 lg:block">
          <p className="section-label">Luxe entry</p>
          <h1 className="font-heading text-6xl leading-none">
            Access the private side of your beauty ritual.
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-8 text-text-secondary">
            Manage appointments, track loyalty status, revisit your favorite artists, and move
            through checkout without friction.
          </p>
        </div>
        <div className="p-6 sm:p-10">
          <Link className="font-heading text-3xl" href="/">
            LuxeSalon
          </Link>
          <div className="mt-8">{children}</div>
        </div>
      </div>
    </main>
  );
}
