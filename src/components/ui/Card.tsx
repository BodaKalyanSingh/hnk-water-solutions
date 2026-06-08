import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "../../lib/cn";

export interface CardProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, keyof HTMLMotionProps<"div">>,
    HTMLMotionProps<"div"> {
  glass?: boolean;
  hoverEffect?: boolean;
}

const MotionDiv = motion.div;

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, glass = false, hoverEffect = true, children, ...props }, ref) => {
    return (
      <MotionDiv
        ref={ref}
        whileHover={
          hoverEffect
            ? {
                y: -6,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.12)",
                transition: { duration: 0.2, ease: "easeOut" }
              }
            : undefined
        }
        className={cn(
          "rounded-xl border border-brandBorder shadow-sm overflow-hidden",
          glass ? "glassmorphism" : "bg-white",
          className
        )}
        {...props}
      >
        {children}
      </MotionDiv>
    );
  }
);

Card.displayName = "Card";
