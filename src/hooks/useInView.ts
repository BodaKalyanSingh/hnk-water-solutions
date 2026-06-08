import { useState, useEffect, useRef } from "react";

interface UseInViewOptions extends IntersectionObserverInit {
  once?: boolean;
}

export function useInView(options?: UseInViewOptions) {
  const ref = useRef<HTMLElement | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        if (options?.once) {
          observer.unobserve(el);
        }
      } else if (!options?.once) {
        setIsInView(false);
      }
    }, options);

    observer.observe(el);

    return () => {
      if (el) {
        try {
          observer.unobserve(el);
        } catch {
          // ignore already unobserved
        }
      }
    };
  }, [options?.threshold, options?.root, options?.rootMargin, options?.once]);

  return [ref, isInView] as const;
}
