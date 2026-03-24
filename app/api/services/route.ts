import { NextResponse } from "next/server";

import { services } from "@/lib/demo-data";
import { enforceRateLimit } from "@/lib/api";

export async function GET(request: Request) {
  const rateLimitResponse = enforceRateLimit(request);

  if (rateLimitResponse) {
    return rateLimitResponse;
  }

  return NextResponse.json({ data: services }, { status: 200 });
}
