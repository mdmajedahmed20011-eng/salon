import type { Metadata } from "next";

import "@/app/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000"),
  title: "LuxeSalon - Premium Hair, Spa and Beauty Salon | Book Online",
  description:
    "Experience world-class hair, facial, spa, and makeup services at LuxeSalon. Book your appointment online in 60 seconds.",
  keywords: ["salon booking", "hair salon", "spa", "facial", "makeup artist"],
  openGraph: {
    title: "LuxeSalon - Where Beauty Becomes Art",
    description: "Book your luxury beauty experience today.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

const salonJsonLd = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  name: "LuxeSalon",
  description: "Premium luxury salon and spa",
  url: "https://luxesalon.com",
  telephone: "+880-1700-000000",
  priceRange: "BDT BDT BDT",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "2400",
  },
  hasMap: "https://maps.google.com/?q=LuxeSalon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html data-theme="dark" lang="en">
      <body>
        {children}
        <script
          dangerouslySetInnerHTML={{ __html: JSON.stringify(salonJsonLd) }}
          type="application/ld+json"
        />
      </body>
    </html>
  );
}
