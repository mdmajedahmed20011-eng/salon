import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  label,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div className={cn("max-w-3xl", centered && "mx-auto text-center", className)}>
      <div className={cn("section-label", centered && "justify-center")}>{label}</div>
      <h2 className="section-heading text-balance">{title}</h2>
      {description ? (
        <p className="mt-5 max-w-2xl text-base leading-7 text-text-secondary sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
