import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "../../lib/cn";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-lg font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent/50 disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
  {
    variants: {
      variant: {
        primary: "bg-brand-primary text-white hover:bg-brand-primary/95 shadow-premium hover:shadow-premium-hover",
        accent: "bg-brand-accent text-white hover:bg-brand-accent/90 shadow-md",
        cta: "cta-sweep text-white shadow-premium hover:shadow-premium-hover font-bold",
        secondary: "bg-surface-2 text-text-primary hover:bg-surface-1",
        outline: "border border-brandBorder bg-transparent text-text-primary hover:bg-surface-1",
        link: "text-brand-primary underline-offset-4 hover:underline bg-transparent p-0",
      },
      size: {
        default: "h-11 px-6 text-sm",
        sm: "h-9 px-4 text-xs",
        lg: "h-13 px-8 text-base",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

// We omit standard HTML button props that conflict with motion props
export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof HTMLMotionProps<"button">>,
    VariantProps<typeof buttonVariants> {}

const MotionButton = motion.button;

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps & HTMLMotionProps<"button">>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <MotionButton
        ref={ref}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
