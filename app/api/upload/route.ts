import { NextResponse } from "next/server";

import { enforceRateLimit } from "@/lib/api";

export async function POST(request: Request) {
  const rateLimitResponse = enforceRateLimit(request);

  if (rateLimitResponse) {
    return rateLimitResponse;
  }

  await request.formData();

  return NextResponse.json(
    {
      data: {
        url: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f",
      },
    },
    { status: 200 },
  );
}
