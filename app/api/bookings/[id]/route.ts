import { NextResponse } from "next/server";
import { z } from "zod";

import { bookingHistory } from "@/lib/demo-data";
import { enforceRateLimit, handleApiError } from "@/lib/api";

const patchSchema = z.object({
  status: z
    .enum(["PENDING", "CONFIRMED", "IN_PROGRESS", "COMPLETED", "CANCELLED", "NO_SHOW", "RESCHEDULED"])
    .optional(),
  notes: z.string().optional(),
});

export async function GET(
  request: Request,
  context: { params: { id: string } },
) {
  const rateLimitResponse = enforceRateLimit(request);

  if (rateLimitResponse) {
    return rateLimitResponse;
  }

  const booking = bookingHistory.find((item) => item.id === context.params.id);

  if (!booking) {
    return NextResponse.json({ error: "Booking not found." }, { status: 404 });
  }

  return NextResponse.json({ data: booking }, { status: 200 });
}

export async function PATCH(
  request: Request,
  context: { params: { id: string } },
) {
  const rateLimitResponse = enforceRateLimit(request);

  if (rateLimitResponse) {
    return rateLimitResponse;
  }

  try {
    const body = await request.json();
    const patch = patchSchema.parse(body);

    return NextResponse.json(
      {
        data: {
          id: context.params.id,
          ...patch,
        },
      },
      { status: 200 },
    );
  } catch (error) {
    return handleApiError(error);
  }
}

export async function DELETE(
  request: Request,
  context: { params: { id: string } },
) {
  const rateLimitResponse = enforceRateLimit(request);

  if (rateLimitResponse) {
    return rateLimitResponse;
  }

  return NextResponse.json(
    {
      data: {
        id: context.params.id,
        deleted: true,
      },
    },
    { status: 200 },
  );
}
