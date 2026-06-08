import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { categories } from "../../data/categories";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { Card } from "../ui/Card";
import { ArrowRight } from "lucide-react";
import * as Icons from "lucide-react";

export function Categories() {
  const { viewport, variants, containerVariants } = useScrollReveal();

  return (
    <section className="py-20 bg-surface-1">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-text-primary tracking-tight font-display">
            Explore Our Verticals
          </h2>
          <p className="text-text-secondary text-sm md:text-base">
            Smart solutions and premium home services tailored for families in Hanamkonda.
          </p>
        </div>

        {/* Categories Grid */}
        <motion.div
          variants={containerVariants(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6"
        >
          {categories.map((category) => {
            const IconComponent = (Icons as Record<string, any>)[category.iconName];

            return (
              <Link
                key={category.id}
                to={`/products?category=${category.id}`}
                className="block group"
              >
                <Card
                  variants={variants}
                  className="h-full flex flex-col justify-between p-6 bg-white border border-brandBorder shadow-sm"
                >
                  <div className="space-y-4">
                    {/* Icon with hover rotation/scaling */}
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all duration-300">
                      {IconComponent && (
                        <motion.div
                          whileHover={{ scale: 1.15, rotate: 5 }}
                          transition={{ type: "spring", stiffness: 300, damping: 15 }}
                        >
                          <IconComponent className="h-6 w-6" />
                        </motion.div>
                      )}
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-base font-bold font-display text-text-primary group-hover:text-brand-primary transition-colors">
                        {category.title}
                      </h3>
                      <p className="text-xs text-text-secondary leading-relaxed line-clamp-2">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  {/* Arrow CTA */}
                  <div className="flex items-center space-x-1 text-xs font-bold text-brand-primary mt-6">
                    <span>Explore Solutions</span>
                    <ArrowRight className="h-3.5 w-3.5 transform transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </Card>
              </Link>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
