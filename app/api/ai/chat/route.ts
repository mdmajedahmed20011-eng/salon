import { NextResponse } from "next/server";
import { z } from "zod";

import { enforceRateLimit, handleApiError } from "@/lib/api";

const chatSchema = z.object({
  message: z.string().min(1),
});

export async function POST(request: Request) {
  const rateLimitResponse = enforceRateLimit(request);

  if (rateLimitResponse) {
    return rateLimitResponse;
  }

  try {
    const body = await request.json();
    const payload = chatSchema.parse(body);
    const lower = payload.message.toLowerCase();

    const reply = lower.includes("book")
      ? "You can start a reservation at /book and move from services to payment in one flow."
      : lower.includes("hours")
        ? "Gulshan is open 09:00 to 21:00 and Dhanmondi is open 10:00 to 22:00."
        : "I can help with services, pricing, promotions, and booking guidance.";

    return NextResponse.json({ data: { reply } }, { status: 200 });
  } catch (error) {
    return handleApiError(error);
  }
}
