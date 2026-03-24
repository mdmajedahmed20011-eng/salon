interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
}

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="container-shell py-20 sm:py-24">
      <div className="premium-card bg-radial-premium px-6 py-12 sm:px-10 sm:py-16">
        <p className="section-label">{eyebrow}</p>
        <h1 className="section-heading max-w-4xl">{title}</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-text-secondary">{description}</p>
      </div>
    </section>
  );
}
