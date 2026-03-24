import { NextResponse } from "next/server";
import { z } from "zod";

import { bookingHistory } from "@/lib/demo-data";
import { enforceRateLimit, handleApiError } from "@/lib/api";

const createBookingSchema = z.object({
  serviceIds: z.array(z.string()).min(1),
  stylistId: z.string().optional(),
  locationId: z.string(),
  date: z.string(),
  time: z.string(),
  notes: z.string().optional(),
});

export async function GET(request: Request) {
  const rateLimitResponse = enforceRateLimit(request);

  if (rateLimitResponse) {
    return rateLimitResponse;
  }

  return NextResponse.json({ data: bookingHistory }, { status: 200 });
}

export async function POST(request: Request) {
  const rateLimitResponse = enforceRateLimit(request);

  if (rateLimitResponse) {
    return rateLimitResponse;
  }

  try {
    const body = await request.json();
    const booking = createBookingSchema.parse(body);

    return NextResponse.json(
      {
        data: {
          id: `BOOK-${Date.now()}`,
          status: "CONFIRMED",
          ...booking,
        },
      },
      { status: 201 },
    );
  } catch (error) {
    return handleApiError(error);
  }
}
