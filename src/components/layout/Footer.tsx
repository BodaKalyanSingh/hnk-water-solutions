import { Link } from "react-router-dom";
import { Droplet, MapPin, Phone, Mail, Clock, ArrowUpRight } from "lucide-react";
import { BUSINESS_INFO, ROUTES } from "../../lib/constants";
import { categories } from "../../data/categories";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      {/* Top Footer Section */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4 lg:gap-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="bg-brand-primary p-2 rounded-lg text-white group-hover:bg-brand-accent transition-colors duration-300">
                <Droplet className="h-5 w-5" />
              </div>
              <div>
                <span className="font-display text-base md:text-xl font-extrabold text-white tracking-tight block leading-none">
                  HNK Water
                </span>
                <span className="text-[9px] md:text-[10px] uppercase font-mono tracking-widest text-brand-accent font-bold">
                  Purifier Solutions
                </span>
              </div>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed">
              Providing premium water purifiers, softeners, and smart home cleaning solutions to Hanamkonda since 2016. High-quality sales and same-day maintenance services.
            </p>
            <div className="space-y-3">
              <div className="flex items-start space-x-2 text-sm text-slate-400">
                <Clock className="h-4 w-4 text-brand-accent mt-0.5 flex-shrink-0" />
                <span>{BUSINESS_INFO.openingHours}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to={ROUTES.HOME} className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to={ROUTES.ABOUT} className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to={ROUTES.PRODUCTS} className="hover:text-white transition-colors">
                  Our Products
                </Link>
              </li>
              <li>
                <Link to={ROUTES.SERVICES} className="hover:text-white transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to={ROUTES.CONTACT} className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Product Categories / SEO Pages */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-6">
              Our Solutions
            </h4>
            <ul className="space-y-3 text-sm">
              {categories.map((cat) => (
                <li key={cat.id}>
                  <Link
                    to={`${ROUTES.PRODUCTS}?category=${cat.id}`}
                    className="hover:text-white transition-colors flex items-center space-x-1"
                  >
                    <span>{cat.title}</span>
                  </Link>
                </li>
              ))}
              <li className="pt-2 border-t border-slate-800">
                <Link
                  to={ROUTES.SEO_WATER_PURIFIER}
                  className="hover:text-brand-accent text-xs transition-colors flex items-center space-x-1 text-slate-400"
                >
                  <span>RO Purifiers Hanamkonda</span>
                  <ArrowUpRight className="h-3 w-3" />
                </Link>
              </li>
              <li>
                <Link
                  to={ROUTES.SEO_WATER_SOFTENER}
                  className="hover:text-brand-accent text-xs transition-colors flex items-center space-x-1 text-slate-400"
                >
                  <span>Water Softeners Hanamkonda</span>
                  <ArrowUpRight className="h-3 w-3" />
                </Link>
              </li>
              <li>
                <Link
                  to={ROUTES.SEO_ROBO_VACUUM}
                  className="hover:text-brand-accent text-xs transition-colors flex items-center space-x-1 text-slate-400"
                >
                  <span>Robo Vacuums Hanamkonda</span>
                  <ArrowUpRight className="h-3 w-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-6">
              Get in Touch
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3 text-slate-400">
                <MapPin className="h-5 w-5 text-brand-accent mt-0.5 flex-shrink-0" />
                <span>{BUSINESS_INFO.address}</span>
              </li>
              <li className="flex items-center space-x-3 text-slate-400">
                <Phone className="h-5 w-5 text-brand-accent flex-shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="hover:text-white transition-colors">
                  {BUSINESS_INFO.phone}
                </a>
              </li>
              <li className="flex items-center space-x-3 text-slate-400">
                <Mail className="h-5 w-5 text-brand-accent flex-shrink-0" />
                <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-white transition-colors">
                  {BUSINESS_INFO.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-slate-800 text-center md:flex md:justify-between md:text-left">
          <p className="text-xs text-slate-500">
            &copy; {currentYear} {BUSINESS_INFO.name}. All rights reserved.
          </p>
          <p className="text-xs text-slate-600 mt-2 md:mt-0">
            Designed for local home services in Hanamkonda, Telangana.
          </p>
        </div>
      </div>
    </footer>
  );
}
