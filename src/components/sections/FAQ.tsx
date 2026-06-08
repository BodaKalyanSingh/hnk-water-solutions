import { faqs } from "../../data/faqs";
import { Accordion } from "../ui/Accordion";

export function FAQ() {
  return (
    <section className="py-20 bg-surface-1">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-text-primary tracking-tight font-display">
            Frequently Asked Questions
          </h2>
          <p className="text-text-secondary text-sm md:text-base">
            Find answers to common questions about water purification, installation, and AMC plans.
          </p>
        </div>

        {/* Accordion Wrapper */}
        <div className="max-w-3xl mx-auto bg-white p-6 md:p-8 rounded-2xl border border-brandBorder shadow-sm">
          <Accordion items={faqs} />
        </div>
      </div>
    </section>
  );
}
