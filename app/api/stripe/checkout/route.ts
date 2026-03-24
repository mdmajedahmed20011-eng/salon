import { NextResponse } from "next/server";
import { z } from "zod";

import { enforceRateLimit, handleApiError } from "@/lib/api";

const checkoutSchema = z.object({
  amount: z.number().positive(),
  currency: z.string().default("bdt"),
});

export async function POST(request: Request) {
  const rateLimitResponse = enforceRateLimit(request);

  if (rateLimitResponse) {
    return rateLimitResponse;
  }

  try {
    const body = await request.json();
    checkoutSchema.parse(body);

    return NextResponse.json(
      { data: { clientSecret: "pi_mock_client_secret" } },
      { status: 200 },
    );
  } catch (error) {
    return handleApiError(error);
  }
}
