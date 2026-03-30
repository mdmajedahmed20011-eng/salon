import Link from "next/link";

const quickLinks = [
  { href: "/book", label: "Book appointment" },
  { href: "/services", label: "Services" },
  { href: "/stylists", label: "Stylists" },
  { href: "/locations", label: "Locations" },
];

const serviceLinks = [
  { href: "/services/hair-color", label: "Hair and color" },
  { href: "/services/facial-skincare", label: "Facial and skincare" },
  { href: "/services/makeup-bridal", label: "Makeup and bridal" },
  { href: "/services/spa-massage", label: "Spa and massage" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-black/30">
      <div className="container-shell grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="font-heading text-3xl">LuxeSalon</div>
          <p className="mt-4 max-w-sm text-sm leading-7 text-text-secondary">
            Luxury hair, skin, and wellness experiences crafted for clients who expect polish,
            warmth, and consistency at every touchpoint.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-gold-300">
            Quick links
          </h3>
          <div className="mt-5 space-y-3">
            {quickLinks.map((link) => (
              <Link
                key={link.href}
                className="block text-sm text-text-secondary transition-colors hover:text-text-primary"
                href={link.href}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-gold-300">
            Signature services
          </h3>
          <div className="mt-5 space-y-3">
            {serviceLinks.map((link) => (
              <Link
                key={link.href}
                className="block text-sm text-text-secondary transition-colors hover:text-text-primary"
                href={link.href}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-gold-300">
            Contact
          </h3>
          <div className="mt-5 space-y-3 text-sm text-text-secondary">
            <p>Road 62, Gulshan 2, Dhaka</p>
            <p>hello@luxesalon.com</p>
            <p>+880 1700 000000</p>
          </div>
          <div className="mt-6 flex items-center gap-3">
            <Link className="text-sm text-text-secondary hover:text-text-primary" href="#">
              Instagram
            </Link>
            <Link className="text-sm text-text-secondary hover:text-text-primary" href="#">
              Facebook
            </Link>
            <Link className="text-sm text-text-secondary hover:text-text-primary" href="#">
              TikTok
            </Link>
            <Link className="text-sm text-text-secondary hover:text-text-primary" href="#">
              YouTube
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-white/5">
        <div className="container-shell flex flex-col gap-4 py-5 text-sm text-text-secondary md:flex-row md:items-center md:justify-between">
          <p>Copyright 2026 LuxeSalon. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
