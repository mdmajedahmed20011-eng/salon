"use client";

import { useSession } from "next-auth/react";

export function useAuth() {
  const session = useSession();

  return {
    ...session,
    role: session.data?.user?.role ?? "CUSTOMER",
  };
}
