import Link from "next/link";

import { Button } from "@/components/shared/Button";

export default function AuthVerifyEmailPage() {
  return (
    <div className="text-center">
      <p className="section-label justify-center">Verification</p>
      <h1 className="text-5xl">Check your inbox</h1>
      <p className="mt-6 text-base leading-8 text-text-secondary">
        We sent a secure sign-in link and verification instructions to your email address.
      </p>
      <div className="mt-8 flex justify-center">
        <Button asChild variant="secondary">
          <Link href="/auth/login">Back to login</Link>
        </Button>
      </div>
    </div>
  );
}
