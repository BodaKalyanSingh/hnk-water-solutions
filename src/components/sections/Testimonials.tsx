import * as React from "react";
import { testimonials } from "../../data/testimonials";
import { Card } from "../ui/Card";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isPaused, setIsPaused] = React.useState(false);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  React.useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      handleNext();
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused, currentIndex]);

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-text-primary tracking-tight font-display">
            Customer Testimonials
          </h2>
          <p className="text-text-secondary text-sm md:text-base">
            Hear from homeowners and doctors who trust our same-day solutions in Hanamkonda.
          </p>
        </div>

        {/* Slider Container */}
        <div
          className="relative max-w-3xl mx-auto px-4 md:px-12"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Slides Carousel */}
          <div className="overflow-hidden min-h-[260px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="w-full"
              >
                {/* Active Card */}
                {(() => {
                  const item = testimonials[currentIndex];
                  return (
                    <Card className="bg-surface-1 border border-brandBorder shadow-xl p-6 md:p-10 relative flex flex-col justify-between" hoverEffect={false}>
                      <Quote className="absolute top-6 right-6 h-12 w-12 text-brand-primary/5 pointer-events-none" />
                      
                      {/* Quote Text */}
                      <p className="text-sm md:text-lg text-text-primary italic font-medium leading-relaxed mb-6 font-display">
                        "{item.text}"
                      </p>

                      {/* User Info & Rating */}
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-6 border-t border-brandBorder">
                        <div className="flex items-center space-x-3">
                          {/* Avatar Initials */}
                          <div className="h-10 w-10 rounded-full bg-brand-primary text-white flex items-center justify-center font-bold text-sm tracking-wider shadow-inner">
                            {getInitials(item.name)}
                          </div>
                          <div>
                            <h4 className="text-sm font-bold text-text-primary">{item.name}</h4>
                            <p className="text-xs text-text-secondary">{item.location}</p>
                          </div>
                        </div>

                        {/* Star Rating */}
                        <div className="flex space-x-1">
                          {Array.from({ length: 5 }).map((_, idx) => (
                            <Star
                              key={idx}
                              className={`h-4 w-4 ${
                                idx < item.rating ? "text-amber-400 fill-amber-400" : "text-slate-300"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </Card>
                  );
                })()}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Left Arrow Button */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-6 h-10 w-10 rounded-full border border-brandBorder bg-white flex items-center justify-center text-text-secondary hover:text-brand-primary hover:bg-surface-2 shadow-md hover:shadow-lg transition-all cursor-pointer z-10"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-6 h-10 w-10 rounded-full border border-brandBorder bg-white flex items-center justify-center text-text-secondary hover:text-brand-primary hover:bg-surface-2 shadow-md hover:shadow-lg transition-all cursor-pointer z-10"
            aria-label="Next Slide"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex items-center justify-center space-x-2 mt-8">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                currentIndex === idx ? "w-5 bg-brand-primary" : "w-2 bg-slate-300 hover:bg-slate-400"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
