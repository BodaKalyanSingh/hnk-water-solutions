import { Variants } from "framer-motion";

export const defaultRevealVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1], // easeOut
    },
  },
};

export const staggerContainerVariants = (staggerDelay: number = 0.1): Variants => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: staggerDelay,
    },
  },
});

export function useScrollReveal() {
  return {
    viewport: { once: true, margin: "-100px" },
    variants: defaultRevealVariants,
    containerVariants: staggerContainerVariants,
  };
}
