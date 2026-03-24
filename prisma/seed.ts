import { addDays, addHours, subDays } from "date-fns";
import {
  BookingStatus,
  NotificationType,
  PaymentStatus,
  PrismaClient,
  Role,
} from "@prisma/client";

const prisma = new PrismaClient();

const openingHours = {
  monday: { open: "09:00", close: "20:00", closed: false },
  tuesday: { open: "09:00", close: "20:00", closed: false },
  wednesday: { open: "09:00", close: "20:00", closed: false },
  thursday: { open: "09:00", close: "20:00", closed: false },
  friday: { open: "09:00", close: "21:00", closed: false },
  saturday: { open: "10:00", close: "21:00", closed: false },
  sunday: { open: "10:00", close: "19:00", closed: false },
};

const categorySeeds = [
  {
    id: "cat-hair",
    name: "Hair & Color",
    slug: "hair-color",
    icon: "scissors",
    description: "Editorial cuts, dimensional color, and restorative rituals.",
    sortOrder: 1,
  },
  {
    id: "cat-facial",
    name: "Facial & Skincare",
    slug: "facial-skincare",
    icon: "sparkles",
    description: "Clinical facials and glow-restoring skin programs.",
    sortOrder: 2,
  },
  {
    id: "cat-makeup",
    name: "Makeup & Bridal",
    slug: "makeup-bridal",
    icon: "gem",
    description: "Red carpet artistry, bridal beauty, and event glam.",
    sortOrder: 3,
  },
  {
    id: "cat-spa",
    name: "Spa & Massage",
    slug: "spa-massage",
    icon: "flower-2",
    description: "Deep relaxation with modern wellness rituals.",
    sortOrder: 4,
  },
  {
    id: "cat-nails",
    name: "Nail Art",
    slug: "nail-art",
    icon: "hand-metal",
    description: "Refined manicure experiences with custom art direction.",
    sortOrder: 5,
  },
  {
    id: "cat-brows",
    name: "Brows & Lashes",
    slug: "brows-lash",
    icon: "eye",
    description: "Precision brow shaping and lash enhancement.",
    sortOrder: 6,
  },
];

const serviceSeeds = [
  ["srv-01", "cat-hair", "Signature Precision Cut", "signature-precision-cut", 75, 3200, true, true],
  ["srv-02", "cat-hair", "Dimensional Color Gloss", "dimensional-color-gloss", 150, 7800, false, true],
  ["srv-03", "cat-hair", "Scalp Renewal Ritual", "scalp-renewal-ritual", 60, 2600, false, false],
  ["srv-04", "cat-facial", "Luminous Glow Facial", "luminous-glow-facial", 70, 4200, true, false],
  ["srv-05", "cat-facial", "Peptide Lift Treatment", "peptide-lift-treatment", 90, 5900, false, false],
  ["srv-06", "cat-facial", "Clarity Acne Reset", "clarity-acne-reset", 80, 4400, false, false],
  ["srv-07", "cat-makeup", "Red Carpet Glam", "red-carpet-glam", 90, 6500, false, true],
  ["srv-08", "cat-makeup", "Bridal Preview Session", "bridal-preview-session", 120, 9800, false, false],
  ["srv-09", "cat-makeup", "Soft Glam Express", "soft-glam-express", 60, 3900, false, false],
  ["srv-10", "cat-spa", "Aromatherapy Body Massage", "aromatherapy-body-massage", 90, 5200, false, false],
  ["srv-11", "cat-spa", "Hot Stone Escape", "hot-stone-escape", 100, 6200, false, false],
  ["srv-12", "cat-spa", "Head-to-Toe Serenity", "head-to-toe-serenity", 120, 8400, false, false],
  ["srv-13", "cat-nails", "Gel Couture Manicure", "gel-couture-manicure", 60, 2400, false, false],
  ["srv-14", "cat-nails", "Deluxe Nail Art Set", "deluxe-nail-art-set", 95, 4100, false, false],
  ["srv-15", "cat-nails", "Velvet Pedicure Ritual", "velvet-pedicure-ritual", 75, 2900, false, false],
  ["srv-16", "cat-brows", "Signature Brow Design", "signature-brow-design", 45, 1800, false, false],
  ["srv-17", "cat-brows", "Lash Lift and Tint", "lash-lift-and-tint", 70, 3200, false, false],
  ["srv-18", "cat-brows", "Eye Revival Duo", "eye-revival-duo", 80, 4300, false, false],
] as const;

const locationSeeds = [
  {
    id: "loc-gulshan",
    name: "Dhaka - Gulshan Branch",
    slug: "gulshan-branch",
    address: "Road 62, Gulshan 2",
    city: "Dhaka",
    state: "Dhaka",
    zipCode: "1212",
    phone: "+8801700000001",
    email: "gulshan@luxesalon.com",
    latitude: 23.7925,
    longitude: 90.4078,
    images: ["https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1200&q=80"],
  },
  {
    id: "loc-dhanmondi",
    name: "Dhaka - Dhanmondi Branch",
    slug: "dhanmondi-branch",
    address: "Road 27, Dhanmondi",
    city: "Dhaka",
    state: "Dhaka",
    zipCode: "1209",
    phone: "+8801700000002",
    email: "dhanmondi@luxesalon.com",
    latitude: 23.7465,
    longitude: 90.376,
    images: ["https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80"],
  },
];

const staffSeeds = [
  ["staff-01", "Amira Rahman", "amira-rahman", "Creative Director", 12, ["Luxury color", "Transformations"], 4.9, 228],
  ["staff-02", "Nabila Haque", "nabila-haque", "Senior Skin Therapist", 9, ["Barrier repair", "LED facials"], 4.8, 174],
  ["staff-03", "Sadia Khan", "sadia-khan", "Bridal Artist", 10, ["Bridal glam", "Soft glam"], 4.9, 195],
  ["staff-04", "Israt Jahan", "israt-jahan", "Wellness Therapist", 8, ["Hot stone", "Aromatherapy"], 4.7, 120],
  ["staff-05", "Farhana Yasmin", "farhana-yasmin", "Master Colorist", 11, ["Balayage", "Glossing"], 4.8, 164],
  ["staff-06", "Maria Sultana", "maria-sultana", "Nail Artist", 7, ["Gel couture", "Nail art"], 4.8, 109],
  ["staff-07", "Tasnia Ahmed", "tasnia-ahmed", "Lash and Brow Specialist", 6, ["Brow design", "Lash lift"], 4.9, 137],
  ["staff-08", "Jannat Alam", "jannat-alam", "Senior Stylist", 8, ["Signature cuts", "Volume styling"], 4.7, 141],
] as const;

const customerSeeds = [
  ["user-001", "Nadia Karim", "nadia@luxesalon.com", "+8801700001001", 4120, 84300],
  ["user-002", "Tania Reza", "tania@luxesalon.com", "+8801700001002", 3350, 63100],
  ["user-003", "Sharmeen Hossain", "sharmeen@luxesalon.com", "+8801700001003", 2840, 58700],
  ["user-004", "Maliha Noor", "maliha@luxesalon.com", "+8801700001004", 1980, 41400],
  ["user-005", "Raisa Ahmed", "raisa@luxesalon.com", "+8801700001005", 1120, 26700],
] as const;

const reviewBodies = [
  "Everything felt polished from the welcome to the final result. The stylist listened carefully and delivered exactly what I hoped for.",
  "A beautifully calm visit with strong technical skill. The finish held for days and the team was warm throughout.",
  "This was the kind of luxury service that feels thoughtful rather than theatrical. I would confidently book again.",
  "The consultation was sharp, the treatment felt personalized, and the end result photographed exceptionally well.",
  "I appreciated how smooth the whole journey felt. Booking was easy and the in-salon experience lived up to the brand.",
];

function addMinutesToTime(time: string, minutes: number) {
  const [hours, mins] = time.split(":").map(Number);
  const total = hours * 60 + mins + minutes;
  const nextHours = Math.floor(total / 60)
    .toString()
    .padStart(2, "0");
  const nextMinutes = (total % 60).toString().padStart(2, "0");

  return `${nextHours}:${nextMinutes}`;
}

async function main() {
  await prisma.notification.deleteMany();
  await prisma.loyaltyTransaction.deleteMany();
  await prisma.couponUsage.deleteMany();
  await prisma.favoriteStaff.deleteMany();
  await prisma.review.deleteMany();
  await prisma.bookingService.deleteMany();
  await prisma.booking.deleteMany();
  await prisma.staffBreak.deleteMany();
  await prisma.staffAvailability.deleteMany();
  await prisma.staffLocation.deleteMany();
  await prisma.staffService.deleteMany();
  await prisma.staff.deleteMany();
  await prisma.locationService.deleteMany();
  await prisma.service.deleteMany();
  await prisma.serviceCategory.deleteMany();
  await prisma.coupon.deleteMany();
  await prisma.location.deleteMany();
  await prisma.salonSettings.deleteMany();
  await prisma.verificationToken.deleteMany();
  await prisma.session.deleteMany();
  await prisma.account.deleteMany();
  await prisma.user.deleteMany();

  await prisma.serviceCategory.createMany({
    data: categorySeeds.map((category) => ({ ...category, isActive: true })),
  });

  await prisma.service.createMany({
    data: serviceSeeds.map(
      ([id, categoryId, name, slug, duration, basePrice, isPopular, isFeatured], index) => ({
        id,
        categoryId,
        name,
        slug,
        description: `${name} is crafted for guests who want premium results with a highly personalized finish.`,
        duration,
        basePrice,
        images: [
          "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1200&q=80",
        ],
        features: [
          "Consultation",
          "Luxury product ritual",
          "Signature finish",
        ],
        isPopular,
        isFeatured,
        sortOrder: index + 1,
      }),
    ),
  });

  await prisma.location.createMany({
    data: locationSeeds.map((location) => ({
      ...location,
      country: "BD",
      openingHours,
      isActive: true,
    })),
  });

  await prisma.locationService.createMany({
    data: locationSeeds.flatMap((location, locationIndex) =>
      serviceSeeds.map(([serviceId]) => ({
        locationId: location.id,
        serviceId,
        price: undefined,
      })),
    ),
  });

  await prisma.user.createMany({
    data: [
      {
        id: "user-admin",
        email: "admin@luxesalon.com",
        name: "LuxeSalon Admin",
        phone: "+8801700009999",
        role: Role.ADMIN,
        loyaltyPoints: 0,
        totalSpent: 0,
      },
      ...customerSeeds.map(([id, name, email, phone, loyaltyPoints, totalSpent], index) => ({
        id,
        name,
        email,
        phone,
        role: Role.CUSTOMER,
        loyaltyPoints,
        totalSpent,
        preferredLocation: locationSeeds[index % locationSeeds.length].id,
      })),
    ],
  });

  await prisma.staff.createMany({
    data: staffSeeds.map(([id, name, slug, title, experience, specialties, rating, reviewCount], index) => ({
      id,
      name,
      slug,
      title,
      bio: `${name} is known for combining technical accuracy with a calm, premium guest experience.`,
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80",
      images: [],
      specialties: [...specialties],
      rating,
      reviewCount,
      experience,
      isActive: true,
      instagramUrl: "https://instagram.com/luxesalon",
      createdAt: subDays(new Date("2026-03-14T00:00:00Z"), 120 + index),
    })),
  });

  await prisma.staffService.createMany({
    data: staffSeeds.flatMap(([staffId], index) =>
      serviceSeeds.slice(index % 3, index % 3 + 3).map(([serviceId], offset) => ({
        staffId,
        serviceId,
        priceOverride: offset === 0 ? 250 * (index + 1) : null,
      })),
    ),
  });

  await prisma.staffLocation.createMany({
    data: staffSeeds.flatMap(([staffId], index) =>
      locationSeeds
        .filter((_, locationIndex) => locationIndex === index % 2 || index < 2)
        .map((location) => ({
          staffId,
          locationId: location.id,
        })),
    ),
  });

  await prisma.staffAvailability.createMany({
    data: staffSeeds.flatMap(([staffId]) =>
      [1, 2, 3, 4, 5, 6].map((dayOfWeek) => ({
        staffId,
        dayOfWeek,
        startTime: dayOfWeek === 6 ? "10:00" : "09:00",
        endTime: "18:00",
        isWorking: true,
      })),
    ),
  });

  await prisma.staffBreak.createMany({
    data: staffSeeds.map(([staffId]) => ({
      staffId,
      startTime: "13:00",
      endTime: "14:00",
      dayOfWeek: null,
    })),
  });

  await prisma.coupon.createMany({
    data: [
      {
        id: "coupon-01",
        code: "WELCOME20",
        description: "20 percent off your first LuxeSalon visit.",
        discountType: "PERCENT",
        discountValue: 20,
        minOrderAmount: 2000,
        maxDiscount: 500,
        usageLimit: 1000,
        usedCount: 1,
        validFrom: new Date("2026-01-01T00:00:00Z"),
        validUntil: new Date("2026-12-31T23:59:59Z"),
        isActive: true,
        applicableServices: [],
      },
      {
        id: "coupon-02",
        code: "LUXE50",
        description: "Flat 500 BDT off select midweek bookings.",
        discountType: "FIXED",
        discountValue: 500,
        minOrderAmount: 3000,
        maxDiscount: 500,
        usageLimit: 500,
        usedCount: 1,
        validFrom: new Date("2026-01-01T00:00:00Z"),
        validUntil: new Date("2026-12-31T23:59:59Z"),
        isActive: true,
        applicableServices: ["srv-04", "srv-05", "srv-06"],
      },
      {
        id: "coupon-03",
        code: "VIPSPA",
        description: "Premium spa perk for longer bodywork bookings.",
        discountType: "PERCENT",
        discountValue: 15,
        minOrderAmount: 5000,
        maxDiscount: 700,
        usageLimit: 250,
        usedCount: 1,
        validFrom: new Date("2026-01-01T00:00:00Z"),
        validUntil: new Date("2026-12-31T23:59:59Z"),
        isActive: true,
        applicableServices: ["srv-10", "srv-11", "srv-12"],
      },
    ],
  });

  await prisma.salonSettings.create({
    data: {
      id: "settings-main",
      salonName: "LuxeSalon",
      primaryColor: "#D4A017",
      bookingAdvanceDays: 30,
      cancellationHours: 24,
      loyaltyPointsPerDollar: 10,
      taxRate: 0.05,
      whatsappNumber: "+8801700000000",
    },
  });

  const startTimes = ["09:00", "10:30", "12:00", "14:00", "16:00", "17:30"];
  const bookings = Array.from({ length: 22 }).map((_, index) => {
    const customer = customerSeeds[index % customerSeeds.length];
    const staff = staffSeeds[index % staffSeeds.length];
    const location = locationSeeds[index % locationSeeds.length];
    const primaryService = serviceSeeds[index % serviceSeeds.length];
    const secondaryService = index % 3 === 0 ? serviceSeeds[(index + 5) % serviceSeeds.length] : null;
    const serviceIds = secondaryService ? [primaryService[0], secondaryService[0]] : [primaryService[0]];
    const subtotal = serviceIds.reduce((sum, serviceId) => {
      const service = serviceSeeds.find(([id]) => id === serviceId);
      return sum + (service?.[5] ?? 0);
    }, 0);
    const totalDuration = serviceIds.reduce((sum, serviceId) => {
      const service = serviceSeeds.find(([id]) => id === serviceId);
      return sum + (service?.[4] ?? 0);
    }, 0);
    const discountAmount = index < 3 ? 500 : 0;
    const taxAmount = Math.round(subtotal * 0.05);
    const startTime = startTimes[index % startTimes.length];
    const status =
      index < 20 ? BookingStatus.COMPLETED : index === 20 ? BookingStatus.CONFIRMED : BookingStatus.CANCELLED;
    const appointmentDate =
      index < 20
        ? subDays(new Date("2026-03-14T12:00:00Z"), 35 - index)
        : addDays(new Date("2026-03-14T12:00:00Z"), index - 18);
    const couponId = index === 0 ? "coupon-01" : index === 1 ? "coupon-02" : index === 2 ? "coupon-03" : null;
    const totalAmount = subtotal + taxAmount - discountAmount;

    return {
      id: `booking-${String(index + 1).padStart(3, "0")}`,
      userId: customer[0],
      staffId: staff[0],
      locationId: location.id,
      status,
      paymentStatus: status === BookingStatus.CANCELLED ? PaymentStatus.UNPAID : PaymentStatus.PAID,
      appointmentDate,
      startTime,
      endTime: addMinutesToTime(startTime, totalDuration),
      totalDuration,
      subtotal,
      discountAmount,
      taxAmount,
      totalAmount,
      stripePaymentId: status === BookingStatus.CANCELLED ? null : `pi_mock_${index + 1}`,
      couponId,
      notes: index % 4 === 0 ? "Please prepare a quiet station if possible." : null,
      cancelledAt: status === BookingStatus.CANCELLED ? addHours(appointmentDate, -12) : null,
      cancelReason: status === BookingStatus.CANCELLED ? "Schedule conflict" : null,
      serviceIds,
    };
  });

  await prisma.booking.createMany({
    data: bookings.map(({ serviceIds, ...booking }) => booking),
  });

  await prisma.bookingService.createMany({
    data: bookings.flatMap((booking) =>
      booking.serviceIds.map((serviceId) => {
        const service = serviceSeeds.find(([id]) => id === serviceId);

        return {
          bookingId: booking.id,
          serviceId,
          price: service?.[5] ?? 0,
          duration: service?.[4] ?? 0,
        };
      }),
    ),
  });

  await prisma.review.createMany({
    data: bookings
      .filter((booking) => booking.status === BookingStatus.COMPLETED)
      .map((booking, index) => ({
        id: `review-${String(index + 1).padStart(3, "0")}`,
        userId: booking.userId,
        staffId: booking.staffId,
        bookingId: booking.id,
        rating: [5, 4.8, 4.7, 5, 4.9][index % 5],
        title: ["Obsessed with the result", "A calm luxury visit", "Beautifully handled", "Worth every minute", "Will book again"][index % 5],
        body: reviewBodies[index % reviewBodies.length],
        images: [],
        isVerified: true,
        isPublic: true,
        adminReply:
          index % 4 === 0
            ? "Thank you for trusting us with your visit. We are thrilled you loved the result."
            : null,
        createdAt: addHours(booking.appointmentDate, 2),
      })),
  });

  await prisma.favoriteStaff.createMany({
    data: customerSeeds.map(([userId], index) => ({
      userId,
      staffId: staffSeeds[index % staffSeeds.length][0],
    })),
  });

  await prisma.couponUsage.createMany({
    data: [
      { id: "coupon-usage-01", couponId: "coupon-01", userId: "user-001" },
      { id: "coupon-usage-02", couponId: "coupon-02", userId: "user-002" },
      { id: "coupon-usage-03", couponId: "coupon-03", userId: "user-003" },
    ],
  });

  await prisma.loyaltyTransaction.createMany({
    data: bookings
      .filter((booking) => booking.status === BookingStatus.COMPLETED)
      .flatMap((booking, index) => {
        const earnedPoints = Math.floor(booking.totalAmount / 100) * 10;

        const baseTransaction = {
          id: `loyalty-${String(index + 1).padStart(3, "0")}`,
          userId: booking.userId,
          points: earnedPoints,
          type: "BOOKING_EARN",
          description: `Points earned from ${booking.id}`,
          bookingId: booking.id,
        };

        if (index < customerSeeds.length) {
          return [
            baseTransaction,
            {
              id: `loyalty-bonus-${String(index + 1).padStart(3, "0")}`,
              userId: booking.userId,
              points: 100,
              type: "BONUS",
              description: "First booking bonus",
              bookingId: booking.id,
            },
          ];
        }

        return [baseTransaction];
      }),
  });

  await prisma.notification.createMany({
    data: bookings.map((booking, index) => ({
      id: `notification-${String(index + 1).padStart(3, "0")}`,
      userId: booking.userId,
      bookingId: booking.id,
      type: NotificationType.EMAIL,
      subject: `Booking update for ${booking.id}`,
      content: "Your LuxeSalon appointment has been updated in the system.",
      isSent: booking.status !== BookingStatus.CANCELLED,
      sentAt: booking.status !== BookingStatus.CANCELLED ? addHours(booking.appointmentDate, -24) : null,
    })),
  });

  console.log("LuxeSalon seed complete.");
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
