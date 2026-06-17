import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { categories } from "../../data/categories";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { Card } from "../ui/Card";
import { ArrowRight } from "lucide-react";
import { CATEGORY_IMAGES } from "../../lib/images";
import * as Icons from "lucide-react";

export function Categories() {
  const { viewport, variants, containerVariants } = useScrollReveal();

  return (
    <section className="py-20 bg-surface-1">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-text-primary tracking-tight font-display">
            Explore Our Verticals
          </h2>
          <p className="text-text-secondary text-sm md:text-base">
            Smart solutions and premium home services tailored for families in Hanamkonda.
          </p>
        </div>

        <motion.div
          variants={containerVariants(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6"
        >
          {categories.map((category) => {
            const IconComponent = (Icons as Record<string, any>)[category.iconName];
            const categoryImage = CATEGORY_IMAGES[category.id];

            return (
              <Link
                key={category.id}
                to={`/products?category=${category.id}`}
                className="block group"
              >
                <Card
                  variants={variants}
                  className="h-full flex flex-col justify-between p-0 bg-white border border-brandBorder shadow-sm overflow-hidden"
                >
                  {categoryImage ? (
                    <div className="relative h-32 overflow-hidden bg-surface-2">
                      <img
                        src={categoryImage}
                        alt={`${category.title} — Hanamkonda Water Service`}
                        width={400}
                        height={240}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  ) : (
                    <div className="p-6 pb-0">
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all duration-300">
                        {IconComponent && <IconComponent className="h-6 w-6" />}
                      </div>
                    </div>
                  )}

                  <div className="p-6 space-y-4 flex-grow flex flex-col justify-between">
                    <div className="space-y-2">
                      <h3 className="text-base font-bold font-display text-text-primary group-hover:text-brand-primary transition-colors">
                        {category.title}
                      </h3>
                      <p className="text-xs text-text-secondary leading-relaxed line-clamp-2">
                        {category.description}
                      </p>
                    </div>

                    <div className="flex items-center space-x-1 text-xs font-bold text-brand-primary pt-2">
                      <span>Explore Solutions</span>
                      <ArrowRight className="h-3.5 w-3.5 transform transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
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
