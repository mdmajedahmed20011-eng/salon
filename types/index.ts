export type BookingStatus =
  | "PENDING"
  | "CONFIRMED"
  | "IN_PROGRESS"
  | "COMPLETED"
  | "CANCELLED"
  | "NO_SHOW"
  | "RESCHEDULED";

export type Tier = "Bronze" | "Silver" | "Gold" | "Platinum";

export interface ServiceCategory {
  id: string;
  name: string;
  slug: string;
  icon: string;
  description: string;
  image: string;
}

export interface Service {
  id: string;
  categoryId: string;
  categorySlug: string;
  name: string;
  slug: string;
  description: string;
  duration: number;
  basePrice: number;
  discountPrice?: number;
  image: string;
  features: string[];
  popular?: boolean;
  featured?: boolean;
}

export interface Stylist {
  id: string;
  slug: string;
  name: string;
  title: string;
  bio: string;
  avatar: string;
  images: string[];
  specialties: string[];
  rating: number;
  reviewCount: number;
  experience: number;
  priceModifier: number;
  availableToday: boolean;
  instagramUrl?: string;
}

export interface LocationItem {
  id: string;
  slug: string;
  name: string;
  address: string;
  city: string;
  phone: string;
  email: string;
  latitude: number;
  longitude: number;
  hours: string;
  heroImage: string;
}

export interface Testimonial {
  id: string;
  name: string;
  quote: string;
  rating: number;
  verified: boolean;
  treatment: string;
}

export interface BeforeAfterItem {
  id: string;
  title: string;
  before: string;
  after: string;
}

export interface Promotion {
  id: string;
  title: string;
  description: string;
  code: string;
  expiresAt: string;
  badge: string;
}

export interface BookingSummary {
  id: string;
  status: BookingStatus;
  serviceNames: string[];
  stylistName: string;
  locationName: string;
  dateLabel: string;
  amount: number;
}

export interface AdminMetric {
  id: string;
  label: string;
  value: string;
  delta: string;
  trend: "up" | "down";
}

export interface LoyaltyTransactionView {
  id: string;
  type: string;
  description: string;
  points: number;
  dateLabel: string;
}
