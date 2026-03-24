import Link from "next/link";

import { Button } from "@/components/shared/Button";

export default function NotFound() {
  return (
    <div className="container-shell flex min-h-[70vh] items-center justify-center py-20">
      <div className="premium-card max-w-2xl p-10 text-center">
        <p className="section-label justify-center">Page not found</p>
        <h1 className="text-6xl">The experience you wanted has moved.</h1>
        <p className="mt-5 text-base leading-8 text-text-secondary">
          Try heading back to the homepage, browsing the service menu, or starting a fresh booking.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button asChild>
            <Link href="/">Home</Link>
          </Button>
          <Button asChild variant="secondary">
            <Link href="/services">View services</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
