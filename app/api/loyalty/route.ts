import { NextResponse } from "next/server";

import { dashboardStats, loyaltyHistory } from "@/lib/demo-data";
import { enforceRateLimit } from "@/lib/api";

export async function GET(request: Request) {
  const rateLimitResponse = enforceRateLimit(request);

  if (rateLimitResponse) {
    return rateLimitResponse;
  }

  return NextResponse.json(
    {
      data: {
        points: dashboardStats.loyaltyPoints,
        history: loyaltyHistory,
      },
    },
    { status: 200 },
  );
}
