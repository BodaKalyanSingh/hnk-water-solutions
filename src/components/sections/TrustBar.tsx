import * as React from "react";
import { useInView } from "../../hooks/useInView";
import { useCounter } from "../../hooks/useCounter";

interface TrustStatProps {
  target: number;
  suffix: string;
  label: string;
  trigger: boolean;
}

function TrustStat({ target, suffix, label, trigger }: TrustStatProps) {
  const count = useCounter(target, 2000, trigger);
  return (
    <div className="text-center px-4 py-6 md:py-8 flex flex-col items-center">
      <span className="text-3xl md:text-5xl font-extrabold text-brand-primary tracking-tight font-mono">
        {count}
        {suffix}
      </span>
      <span className="text-xs md:text-sm font-semibold uppercase tracking-wider text-text-secondary mt-2 font-sans">
        {label}
      </span>
    </div>
  );
}

export function TrustBar() {
  const [ref, inView] = useInView({ once: true, threshold: 0.1 });

  return (
    <section
      ref={ref as React.RefObject<HTMLDivElement>}
      className="bg-white border-y border-brandBorder py-2 relative z-10"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-y divide-x-0 md:divide-y-0 md:divide-x divide-brandBorder max-w-5xl mx-auto">
          <div className="border-b border-brandBorder md:border-b-0">
            <TrustStat target={10} suffix="+" label="Years Experience" trigger={inView} />
          </div>
          <div className="border-b border-brandBorder md:border-b-0">
            <TrustStat target={500} suffix="+" label="Customers Served" trigger={inView} />
          </div>
          <div>
            <TrustStat target={1000} suffix="+" label="Installations" trigger={inView} />
          </div>
          <div>
            <TrustStat target={2000} suffix="+" label="Service Requests" trigger={inView} />
          </div>
        </div>
      </div>
    </section>
  );
}
