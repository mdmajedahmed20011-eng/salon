import Link from "next/link";

import { Button } from "@/components/shared/Button";

export default function AuthRegisterPage() {
  return (
    <div>
      <p className="section-label">Create account</p>
      <h1 className="text-5xl">Join LuxeSalon</h1>
      <form className="mt-8 space-y-4">
        <div>
          <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-text-secondary">
            Full name
          </label>
          <input
            className="w-full rounded-md border border-white/10 bg-background-tertiary px-4 py-3 text-text-primary outline-none transition focus:border-gold-400/60 focus:ring-2 focus:ring-gold-400/30"
            placeholder="Your full name"
            type="text"
          />
        </div>
        <div>
          <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-text-secondary">
            Email
          </label>
          <input
            className="w-full rounded-md border border-white/10 bg-background-tertiary px-4 py-3 text-text-primary outline-none transition focus:border-gold-400/60 focus:ring-2 focus:ring-gold-400/30"
            placeholder="you@example.com"
            type="email"
          />
        </div>
        <div>
          <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-text-secondary">
            Password
          </label>
          <input
            className="w-full rounded-md border border-white/10 bg-background-tertiary px-4 py-3 text-text-primary outline-none transition focus:border-gold-400/60 focus:ring-2 focus:ring-gold-400/30"
            placeholder="Create a password"
            type="password"
          />
        </div>
        <Button className="w-full" type="submit">
          Create account
        </Button>
      </form>
      <p className="mt-6 text-sm text-text-secondary">
        Already registered?{" "}
        <Link className="text-gold-300 hover:text-gold-200" href="/auth/login">
          Sign in
        </Link>
      </p>
    </div>
  );
}
