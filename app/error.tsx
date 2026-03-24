"use client";

import { useEffect } from "react";

import { Button } from "@/components/shared/Button";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <body className="flex min-h-screen items-center justify-center bg-background-primary p-6">
        <div className="premium-card max-w-xl p-10 text-center">
          <p className="section-label justify-center">Unexpected issue</p>
          <h1 className="font-heading text-5xl">Something interrupted the experience</h1>
          <p className="mt-5 text-base leading-7 text-text-secondary">
            The team has been nudged. Try reloading this section, and if it continues, please return
            to the homepage.
          </p>
          <div className="mt-8 flex justify-center gap-3">
            <Button onClick={reset}>Try again</Button>
            <Button asChild variant="secondary">
              <a href="/">Go home</a>
            </Button>
          </div>
        </div>
      </body>
    </html>
  );
}
