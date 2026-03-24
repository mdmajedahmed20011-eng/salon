import { NextResponse } from "next/server";
import { z } from "zod";

import { availableSlots } from "@/lib/demo-data";
import { enforceRateLimit, handleApiError } from "@/lib/api";

const querySchema = z.object({
  staffId: z.string().optional(),
  date: z.string(),
});

export async function GET(request: Request) {
  const rateLimitResponse = enforceRateLimit(request);

  if (rateLimitResponse) {
    return rateLimitResponse;
  }

  try {
    const { searchParams } = new URL(request.url);
    querySchema.parse({
      staffId: searchParams.get("staffId") ?? undefined,
      date: searchParams.get("date"),
    });

    return NextResponse.json(
      {
        data: availableSlots,
        warning: availableSlots.length < 3 ? "Only 2 slots left today!" : null,
      },
      { status: 200 },
    );
  } catch (error) {
    return handleApiError(error);
  }
}
