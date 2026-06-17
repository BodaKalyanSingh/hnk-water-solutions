import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { ROUTES } from "../../lib/constants";
import type { BreadcrumbItem } from "../../lib/seo";

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  variant?: "default" | "light";
}

export function Breadcrumbs({ items, variant = "default" }: BreadcrumbsProps) {
  const allItems: BreadcrumbItem[] = [{ name: "Home", path: ROUTES.HOME }, ...items];
  const isLight = variant === "light";

  return (
    <nav aria-label="Breadcrumb" className={`text-xs mb-6 ${isLight ? "text-slate-200" : "text-text-secondary"}`}>
      <ol className="flex flex-wrap items-center gap-1">
        {allItems.map((item, index) => {
          const isLast = index === allItems.length - 1;
          return (
            <li key={`${item.name}-${index}`} className="flex items-center gap-1">
              {index > 0 && (
                <ChevronRight className={`h-3 w-3 ${isLight ? "text-slate-400" : "text-slate-400"}`} aria-hidden="true" />
              )}
              {isLast || !item.path ? (
                <span
                  className={`font-semibold ${isLight ? "text-white" : "text-text-primary"}`}
                  aria-current="page"
                >
                  {item.name}
                </span>
              ) : (
                <Link
                  to={item.path}
                  className={`transition-colors ${isLight ? "hover:text-white" : "hover:text-brand-primary"}`}
                >
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
