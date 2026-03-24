"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";
import { useState } from "react";

import { Button } from "@/components/shared/Button";

export function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") ?? "/dashboard";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setIsSubmitting(true);

    const fallbackUrl = email.toLowerCase().includes("admin") ? "/admin" : callbackUrl;
    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
      callbackUrl: fallbackUrl,
    });

    setIsSubmitting(false);

    if (result?.error) {
      setError("Could not sign in. Use admin@luxesalon.com / Admin123! for admin access.");
      return;
    }

    router.push(result?.url ?? fallbackUrl);
    router.refresh();
  }

  return (
    <div>
      <p className="section-label">Welcome back</p>
      <h1 className="text-5xl">Sign in to continue</h1>
      <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-text-secondary">
            Email
          </label>
          <input
            className="w-full rounded-md border border-white/10 bg-background-tertiary px-4 py-3 text-text-primary outline-none transition focus:border-gold-400/60 focus:ring-2 focus:ring-gold-400/30"
            onChange={(event) => setEmail(event.target.value)}
            placeholder="admin@luxesalon.com"
            type="email"
            value={email}
          />
        </div>
        <div>
          <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-text-secondary">
            Password
          </label>
          <input
            className="w-full rounded-md border border-white/10 bg-background-tertiary px-4 py-3 text-text-primary outline-none transition focus:border-gold-400/60 focus:ring-2 focus:ring-gold-400/30"
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Admin123!"
            type="password"
            value={password}
          />
        </div>
        {error ? (
          <p className="rounded-2xl border border-error/30 bg-error/10 px-4 py-3 text-sm text-error">
            {error}
          </p>
        ) : null}
        <div className="rounded-2xl border border-gold-400/20 bg-gold-400/10 px-4 py-3 text-sm text-gold-200">
          Demo admin: <span className="font-semibold">admin@luxesalon.com</span> /{" "}
          <span className="font-semibold">Admin123!</span>
        </div>
        <Button className="w-full" disabled={isSubmitting} type="submit">
          {isSubmitting ? "Signing in..." : "Sign in"}
        </Button>
      </form>
      <p className="mt-6 text-sm text-text-secondary">
        No account yet?{" "}
        <Link className="text-gold-300 hover:text-gold-200" href="/auth/register">
          Create one
        </Link>
      </p>
    </div>
  );
}
