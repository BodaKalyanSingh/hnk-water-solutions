import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/cn";

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-brand-accent/30",
  {
    variants: {
      variant: {
        default: "border-transparent bg-brand-primary/10 text-brand-primary",
        accent: "border-transparent bg-brand-accent/10 text-brand-accent",
        cta: "border-transparent bg-brand-cta/10 text-brand-cta",
        outline: "border border-brandBorder text-text-secondary",
        success: "border-transparent bg-emerald-100 text-emerald-800",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}
