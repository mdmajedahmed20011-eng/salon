import { NextResponse } from "next/server";
import { z } from "zod";

import { enforceRateLimit, handleApiError } from "@/lib/api";

const couponSchema = z.object({
  code: z.string().min(1),
});

const coupons = {
  WELCOME20: { valid: true, discountType: "PERCENT", discountValue: 20, maxDiscount: 500 },
  LUXE50: { valid: true, discountType: "FIXED", discountValue: 500, maxDiscount: 500 },
  VIPSPA: { valid: true, discountType: "PERCENT", discountValue: 15, maxDiscount: 700 },
};

export async function POST(request: Request) {
  const rateLimitResponse = enforceRateLimit(request);

  if (rateLimitResponse) {
    return rateLimitResponse;
  }

  try {
    const body = await request.json();
    const payload = couponSchema.parse(body);
    const code = payload.code.toUpperCase() as keyof typeof coupons;

    if (!coupons[code]) {
      return NextResponse.json({ valid: false, error: "Invalid coupon code." }, { status: 404 });
    }

    return NextResponse.json(coupons[code], { status: 200 });
  } catch (error) {
    return handleApiError(error);
  }
}
