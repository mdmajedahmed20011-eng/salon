import { NextResponse } from "next/server";
import { z } from "zod";

import { enforceRateLimit, handleApiError } from "@/lib/api";

const notificationSchema = z.object({
  bookingId: z.string(),
  email: z.string().email().optional(),
  phone: z.string().optional(),
});

export async function POST(request: Request) {
  const rateLimitResponse = enforceRateLimit(request);

  if (rateLimitResponse) {
    return rateLimitResponse;
  }

  try {
    const body = await request.json();
    const payload = notificationSchema.parse(body);

    return NextResponse.json(
      {
        data: {
          bookingId: payload.bookingId,
          channels: ["EMAIL", "SMS", "WHATSAPP"],
          queued: true,
        },
      },
      { status: 200 },
    );
  } catch (error) {
    return handleApiError(error);
  }
}
