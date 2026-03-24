import type { ButtonHTMLAttributes, ReactElement } from "react";
import { cloneElement, isValidElement } from "react";

import { cn } from "@/lib/utils";

const baseClasses =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400/50 disabled:pointer-events-none disabled:opacity-50";

const variantClasses = {
  primary: "bg-gold-400 px-8 py-3.5 text-black shadow-gold hover:bg-gold-500 active:scale-[0.97]",
  secondary: "border border-gold-400/40 px-8 py-3.5 text-gold-400 hover:bg-gold-400/10",
  ghost: "px-6 py-3 text-text-secondary hover:bg-white/5 hover:text-text-primary",
  danger: "border border-error/30 bg-error/15 px-6 py-3 text-error hover:bg-error/25",
  icon: "h-10 w-10 rounded-full border border-border hover:bg-white/5",
} as const;

const sizeClasses = {
  base: "",
  sm: "px-4 py-2.5 text-xs",
  lg: "px-10 py-4 text-base",
} as const;

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  variant?: keyof typeof variantClasses;
  size?: keyof typeof sizeClasses;
}

export function Button({
  className,
  variant = "primary",
  size = "base",
  asChild = false,
  children,
  ...props
}: ButtonProps) {
  const buttonClassName = cn(baseClasses, variantClasses[variant], sizeClasses[size], className);

  if (asChild && isValidElement(children)) {
    const child = children as ReactElement<{ className?: string }>;

    return cloneElement(child, {
      className: cn(buttonClassName, child.props.className),
    });
  }

  return (
    <button className={buttonClassName} {...props}>
      {children}
    </button>
  );
}
