import type {
  AdminMetric,
  BeforeAfterItem,
  BookingSummary,
  LocationItem,
  LoyaltyTransactionView,
  Promotion,
  Service,
  ServiceCategory,
  Stylist,
  Testimonial,
} from "@/types";

export const serviceCategories: ServiceCategory[] = [
  {
    id: "cat-hair",
    name: "Hair & Color",
    slug: "hair-color",
    icon: "scissors",
    description: "Editorial cuts, dimensional color, and restorative rituals.",
    image:
      "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "cat-facial",
    name: "Facial & Skincare",
    slug: "facial-skincare",
    icon: "sparkles",
    description: "Clinical facials and glow-restoring skin programs.",
    image:
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "cat-makeup",
    name: "Makeup & Bridal",
    slug: "makeup-bridal",
    icon: "gem",
    description: "Red carpet artistry, bridal beauty, and event glam.",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "cat-spa",
    name: "Spa & Massage",
    slug: "spa-massage",
    icon: "flower-2",
    description: "Deep relaxation with modern wellness rituals.",
    image:
      "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "cat-nails",
    name: "Nail Art",
    slug: "nail-art",
    icon: "hand-metal",
    description: "Refined manicure experiences with custom art direction.",
    image:
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "cat-brows",
    name: "Brows & Lashes",
    slug: "brows-lash",
    icon: "eye",
    description: "Precision brow shaping and lash enhancement.",
    image:
      "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=900&q=80",
  },
];

export const services: Service[] = [
  {
    id: "srv-signature-cut",
    categoryId: "cat-hair",
    categorySlug: "hair-color",
    name: "Signature Precision Cut",
    slug: "signature-precision-cut",
    description: "A tailored cut with consultation, cleansing ritual, and finishing style.",
    duration: 75,
    basePrice: 3200,
    image:
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=900&q=80",
    features: ["Consultation", "Luxury wash", "Signature blowout"],
    popular: true,
    featured: true,
  },
  {
    id: "srv-dimension-color",
    categoryId: "cat-hair",
    categorySlug: "hair-color",
    name: "Dimensional Color Gloss",
    slug: "dimensional-color-gloss",
    description: "Multi-tonal color placement with gloss finish and bond care.",
    duration: 150,
    basePrice: 7800,
    image:
      "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=900&q=80",
    features: ["Bond protection", "Gloss seal", "Custom tone mapping"],
    featured: true,
  },
  {
    id: "srv-scalp-ritual",
    categoryId: "cat-hair",
    categorySlug: "hair-color",
    name: "Scalp Renewal Ritual",
    slug: "scalp-renewal-ritual",
    description: "Detoxifying scalp therapy with massage and hydration.",
    duration: 60,
    basePrice: 2600,
    image:
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=900&q=80",
    features: ["Deep cleanse", "Massage", "Hydration infusion"],
  },
  {
    id: "srv-glow-facial",
    categoryId: "cat-facial",
    categorySlug: "facial-skincare",
    name: "Luminous Glow Facial",
    slug: "luminous-glow-facial",
    description: "Hydration-forward facial for immediate radiance and smoothness.",
    duration: 70,
    basePrice: 4200,
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
    features: ["Enzyme polish", "LED therapy", "Barrier serum infusion"],
    popular: true,
  },
  {
    id: "srv-peptide-lift",
    categoryId: "cat-facial",
    categorySlug: "facial-skincare",
    name: "Peptide Lift Treatment",
    slug: "peptide-lift-treatment",
    description: "Firming facial with peptide infusion and sculpting massage.",
    duration: 90,
    basePrice: 5900,
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=80",
    features: ["Peptide mask", "Sculpt massage", "Firming ampoule"],
  },
  {
    id: "srv-acne-reset",
    categoryId: "cat-facial",
    categorySlug: "facial-skincare",
    name: "Clarity Acne Reset",
    slug: "clarity-acne-reset",
    description: "Refining treatment designed to calm congestion and rebalance skin.",
    duration: 80,
    basePrice: 4400,
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80",
    features: ["Clarifying peel", "Blue light", "Extraction care"],
  },
  {
    id: "srv-red-carpet",
    categoryId: "cat-makeup",
    categorySlug: "makeup-bridal",
    name: "Red Carpet Glam",
    slug: "red-carpet-glam",
    description: "Editorial full-face makeup with complexion perfection and lashes.",
    duration: 90,
    basePrice: 6500,
    image:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=900&q=80",
    features: ["Skin prep", "Lash application", "Photography finish"],
    featured: true,
  },
  {
    id: "srv-bridal-preview",
    categoryId: "cat-makeup",
    categorySlug: "makeup-bridal",
    name: "Bridal Preview Session",
    slug: "bridal-preview-session",
    description: "A wedding trial session to refine the full beauty direction.",
    duration: 120,
    basePrice: 9800,
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80",
    features: ["Consultation", "Hair concept", "Look chart"],
  },
  {
    id: "srv-soft-glam",
    categoryId: "cat-makeup",
    categorySlug: "makeup-bridal",
    name: "Soft Glam Express",
    slug: "soft-glam-express",
    description: "Refined event makeup with luminous skin and sculpted eyes.",
    duration: 60,
    basePrice: 3900,
    image:
      "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?auto=format&fit=crop&w=900&q=80",
    features: ["Quick prep", "Event finish", "Lip retouch kit"],
  },
  {
    id: "srv-aroma-massage",
    categoryId: "cat-spa",
    categorySlug: "spa-massage",
    name: "Aromatherapy Body Massage",
    slug: "aromatherapy-body-massage",
    description: "Full-body aromatherapy massage designed for deep calm.",
    duration: 90,
    basePrice: 5200,
    image:
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=900&q=80",
    features: ["Essential oil blend", "Warm towels", "Neck release"],
  },
  {
    id: "srv-hot-stone",
    categoryId: "cat-spa",
    categorySlug: "spa-massage",
    name: "Hot Stone Escape",
    slug: "hot-stone-escape",
    description: "Grounding hot stone therapy for muscle relief and recovery.",
    duration: 100,
    basePrice: 6200,
    image:
      "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=900&q=80",
    features: ["Stone therapy", "Deep pressure zones", "Recovery balm"],
  },
  {
    id: "srv-head-to-toe",
    categoryId: "cat-spa",
    categorySlug: "spa-massage",
    name: "Head-to-Toe Serenity",
    slug: "head-to-toe-serenity",
    description: "A premium spa journey across scalp, shoulders, back, and feet.",
    duration: 120,
    basePrice: 8400,
    image:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=900&q=80",
    features: ["Scalp ritual", "Back massage", "Foot therapy"],
  },
  {
    id: "srv-gel-manicure",
    categoryId: "cat-nails",
    categorySlug: "nail-art",
    name: "Gel Couture Manicure",
    slug: "gel-couture-manicure",
    description: "High-gloss gel manicure with cuticle care and finish options.",
    duration: 60,
    basePrice: 2400,
    image:
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=900&q=80",
    features: ["Shape and buff", "Gel polish", "Cuticle therapy"],
  },
  {
    id: "srv-nail-art-deluxe",
    categoryId: "cat-nails",
    categorySlug: "nail-art",
    name: "Deluxe Nail Art Set",
    slug: "deluxe-nail-art-set",
    description: "Custom art design curated to your palette and event.",
    duration: 95,
    basePrice: 4100,
    image:
      "https://images.unsplash.com/photo-1610992231273-1e2aa26b0f49?auto=format&fit=crop&w=900&q=80",
    features: ["Custom design", "Crystal accents", "Luxury hand mask"],
  },
  {
    id: "srv-pedicure-ritual",
    categoryId: "cat-nails",
    categorySlug: "nail-art",
    name: "Velvet Pedicure Ritual",
    slug: "velvet-pedicure-ritual",
    description: "Exfoliating foot ritual and polish finish with spa-grade care.",
    duration: 75,
    basePrice: 2900,
    image:
      "https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?auto=format&fit=crop&w=900&q=80",
    features: ["Foot soak", "Mask and massage", "Long-wear polish"],
  },
  {
    id: "srv-brow-design",
    categoryId: "cat-brows",
    categorySlug: "brows-lash",
    name: "Signature Brow Design",
    slug: "signature-brow-design",
    description: "Precision mapping, shaping, and tinting for balanced definition.",
    duration: 45,
    basePrice: 1800,
    image:
      "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=900&q=80",
    features: ["Brow mapping", "Tint match", "Finishing serum"],
  },
  {
    id: "srv-lash-lift",
    categoryId: "cat-brows",
    categorySlug: "brows-lash",
    name: "Lash Lift and Tint",
    slug: "lash-lift-and-tint",
    description: "Lifted, defined lashes with glossy tint for a longer eye line.",
    duration: 70,
    basePrice: 3200,
    image:
      "https://images.unsplash.com/photo-1583001809807-8e2fb4f93af2?auto=format&fit=crop&w=900&q=80",
    features: ["Lash lift", "Tint", "Aftercare set"],
  },
  {
    id: "srv-eye-revive",
    categoryId: "cat-brows",
    categorySlug: "brows-lash",
    name: "Eye Revival Duo",
    slug: "eye-revival-duo",
    description: "Combined brow and lash treatment for an instantly polished look.",
    duration: 80,
    basePrice: 4300,
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
    features: ["Brow shape", "Lash tint", "Cooling eye mask"],
  },
];

export const stylists: Stylist[] = [
  {
    id: "stylist-1",
    slug: "amira-rahman",
    name: "Amira Rahman",
    title: "Creative Director",
    bio: "Amira blends editorial precision with deeply personal consultations for modern, wearable luxury.",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80",
    images: [],
    specialties: ["Luxury color", "Image consulting", "Transformations"],
    rating: 4.9,
    reviewCount: 228,
    experience: 12,
    priceModifier: 900,
    availableToday: true,
    instagramUrl: "https://instagram.com/luxesalon",
  },
  {
    id: "stylist-2",
    slug: "nabila-haque",
    name: "Nabila Haque",
    title: "Senior Skin Therapist",
    bio: "Known for glow-restoring facials that balance clinical results with spa-level calm.",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=900&q=80",
    images: [],
    specialties: ["Barrier repair", "LED facials", "Hydration"],
    rating: 4.8,
    reviewCount: 174,
    experience: 9,
    priceModifier: 600,
    availableToday: true,
  },
  {
    id: "stylist-3",
    slug: "sadia-khan",
    name: "Sadia Khan",
    title: "Bridal Artist",
    bio: "Sadia crafts camera-ready bridal beauty with softness, structure, and long-wear confidence.",
    avatar:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80",
    images: [],
    specialties: ["Bridal glam", "Soft glam", "Event beauty"],
    rating: 4.9,
    reviewCount: 195,
    experience: 10,
    priceModifier: 800,
    availableToday: false,
  },
  {
    id: "stylist-4",
    slug: "israt-jahan",
    name: "Israt Jahan",
    title: "Wellness Therapist",
    bio: "Israt leads restorative bodywork sessions that feel both grounding and elevated.",
    avatar:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=900&q=80",
    images: [],
    specialties: ["Hot stone", "Aromatherapy", "Body rituals"],
    rating: 4.7,
    reviewCount: 120,
    experience: 8,
    priceModifier: 450,
    availableToday: true,
  },
  {
    id: "stylist-5",
    slug: "farhana-yasmin",
    name: "Farhana Yasmin",
    title: "Master Colorist",
    bio: "Farhana is sought after for dimensional brunettes, lived-in blondes, and precision glossing.",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=900&q=80",
    images: [],
    specialties: ["Balayage", "Glossing", "Bond repair"],
    rating: 4.8,
    reviewCount: 164,
    experience: 11,
    priceModifier: 700,
    availableToday: true,
  },
  {
    id: "stylist-6",
    slug: "maria-sultana",
    name: "Maria Sultana",
    title: "Nail Artist",
    bio: "Maria builds polished nail stories with couture finishes and detailed art direction.",
    avatar:
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80",
    images: [],
    specialties: ["Gel couture", "Nail art", "Pedicure rituals"],
    rating: 4.8,
    reviewCount: 109,
    experience: 7,
    priceModifier: 300,
    availableToday: false,
  },
  {
    id: "stylist-7",
    slug: "tasnia-ahmed",
    name: "Tasnia Ahmed",
    title: "Lash and Brow Specialist",
    bio: "Tasnia creates clean, lifted eye framing with exacting detail and calm execution.",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80",
    images: [],
    specialties: ["Brow design", "Lash lift", "Tinting"],
    rating: 4.9,
    reviewCount: 137,
    experience: 6,
    priceModifier: 250,
    availableToday: true,
  },
  {
    id: "stylist-8",
    slug: "jannat-alam",
    name: "Jannat Alam",
    title: "Senior Stylist",
    bio: "Jannat balances classic technique and contemporary silhouettes for guests who want confident polish.",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=80",
    images: [],
    specialties: ["Signature cuts", "Volume styling", "Occasion hair"],
    rating: 4.7,
    reviewCount: 141,
    experience: 8,
    priceModifier: 500,
    availableToday: true,
  },
];

export const locations: LocationItem[] = [
  {
    id: "loc-gulshan",
    slug: "gulshan-branch",
    name: "Dhaka - Gulshan Branch",
    address: "Road 62, Gulshan 2",
    city: "Dhaka",
    phone: "+880 1700 000001",
    email: "gulshan@luxesalon.com",
    latitude: 23.7925,
    longitude: 90.4078,
    hours: "09:00 - 21:00",
    heroImage:
      "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "loc-dhanmondi",
    slug: "dhanmondi-branch",
    name: "Dhaka - Dhanmondi Branch",
    address: "Road 27, Dhanmondi",
    city: "Dhaka",
    phone: "+880 1700 000002",
    email: "dhanmondi@luxesalon.com",
    latitude: 23.7465,
    longitude: 90.376,
    hours: "10:00 - 22:00",
    heroImage:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
  },
];

export const beforeAfterGallery: BeforeAfterItem[] = [
  {
    id: "ba-1",
    title: "Gloss and contour refresh",
    before:
      "https://images.unsplash.com/photo-1506863530036-1efeddceb993?auto=format&fit=crop&w=900&q=80",
    after:
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "ba-2",
    title: "Bridal skin glow plan",
    before:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
    after:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "ba-3",
    title: "Luxury blowout transformation",
    before:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80",
    after:
      "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=900&q=80",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "test-1",
    name: "Nadia Karim",
    quote: "The entire booking journey felt seamless, and the salon experience itself was pure theater in the best way.",
    rating: 5,
    verified: true,
    treatment: "Signature Precision Cut",
  },
  {
    id: "test-2",
    name: "Tania Reza",
    quote: "My stylist understood exactly how to make luxury feel effortless. The result photographed beautifully.",
    rating: 5,
    verified: true,
    treatment: "Bridal Preview Session",
  },
  {
    id: "test-3",
    name: "Sharmeen Hossain",
    quote: "The AI advisor gave surprisingly accurate recommendations, and the team made them real.",
    rating: 5,
    verified: true,
    treatment: "Dimensional Color Gloss",
  },
  {
    id: "test-4",
    name: "Maliha Noor",
    quote: "It feels like the sort of place where every detail has been rehearsed. Calm, polished, memorable.",
    rating: 4.8,
    verified: true,
    treatment: "Luminous Glow Facial",
  },
];

export const promotions: Promotion[] = [
  {
    id: "promo-1",
    title: "Welcome Luxury Ritual",
    description: "20 percent off your first visit across hair, skin, or spa services.",
    code: "WELCOME20",
    expiresAt: "May 30, 2026",
    badge: "New Guest",
  },
  {
    id: "promo-2",
    title: "Midweek Glow Credit",
    description: "Flat 500 BDT off facial treatments on Tuesday and Wednesday appointments.",
    code: "LUXE50",
    expiresAt: "April 15, 2026",
    badge: "Facial Focus",
  },
  {
    id: "promo-3",
    title: "VIP Spa Escape",
    description: "Enjoy a premium spa add-on with any 90-minute massage reservation.",
    code: "VIPSPA",
    expiresAt: "June 12, 2026",
    badge: "Spa Exclusive",
  },
];

export const bookingHistory: BookingSummary[] = [
  {
    id: "BOOK-4021",
    status: "CONFIRMED",
    serviceNames: ["Dimensional Color Gloss", "Scalp Renewal Ritual"],
    stylistName: "Farhana Yasmin",
    locationName: "Dhaka - Gulshan Branch",
    dateLabel: "March 22, 2026 at 2:30 PM",
    amount: 10400,
  },
  {
    id: "BOOK-3982",
    status: "COMPLETED",
    serviceNames: ["Luminous Glow Facial"],
    stylistName: "Nabila Haque",
    locationName: "Dhaka - Dhanmondi Branch",
    dateLabel: "March 05, 2026 at 6:00 PM",
    amount: 4200,
  },
  {
    id: "BOOK-3904",
    status: "CANCELLED",
    serviceNames: ["Hot Stone Escape"],
    stylistName: "Israt Jahan",
    locationName: "Dhaka - Gulshan Branch",
    dateLabel: "February 17, 2026 at 5:30 PM",
    amount: 6200,
  },
];

export const adminMetrics: AdminMetric[] = [
  {
    id: "metric-revenue",
    label: "Today revenue",
    value: "BDT 186,400",
    delta: "+12.6%",
    trend: "up",
  },
  {
    id: "metric-bookings",
    label: "Today bookings",
    value: "48",
    delta: "+8.4%",
    trend: "up",
  },
  {
    id: "metric-customers",
    label: "New customers",
    value: "13",
    delta: "+4.2%",
    trend: "up",
  },
  {
    id: "metric-aov",
    label: "Avg booking value",
    value: "BDT 5,780",
    delta: "-1.1%",
    trend: "down",
  },
];

export const loyaltyHistory: LoyaltyTransactionView[] = [
  {
    id: "loy-1",
    type: "BOOKING_EARN",
    description: "Points earned from Signature Precision Cut",
    points: 320,
    dateLabel: "March 5, 2026",
  },
  {
    id: "loy-2",
    type: "BONUS",
    description: "Birthday bonus",
    points: 200,
    dateLabel: "March 1, 2026",
  },
  {
    id: "loy-3",
    type: "REDEEM",
    description: "Applied at checkout",
    points: -500,
    dateLabel: "February 15, 2026",
  },
];

export const dashboardStats = {
  totalBookings: 26,
  loyaltyPoints: 3240,
  averageRating: 4.9,
  totalSpent: 98400,
};

export const availableSlots = [
  "09:00",
  "09:30",
  "10:00",
  "11:30",
  "12:00",
  "14:00",
  "14:30",
  "16:00",
  "17:30",
];

export const faqQuickReplies = [
  "Book an appointment",
  "View services",
  "Salon hours",
  "Contact us",
];
