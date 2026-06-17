import { Link } from "react-router-dom";
import { Droplet, MapPin, Phone, Mail, Clock } from "lucide-react";
import {
  ALL_LOCATION_ROUTES,
  ALL_SERVICE_ROUTES,
  BUSINESS_INFO,
  ROUTES,
} from "../../lib/constants";

const SERVICE_LABELS: Record<string, string> = {
  [ROUTES.WATER_PURIFIER_SALES]: "Water Purifier Sales",
  [ROUTES.WATER_PURIFIER_REPAIR]: "Water Purifier Repair",
  [ROUTES.WATER_SOFTENER_SALES]: "Water Softener Sales",
  [ROUTES.HARD_WATER_TREATMENT]: "Hard Water Treatment",
  [ROUTES.ROBOT_VACUUM_SALES]: "Robot Vacuum Sales",
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 max-md:mb-9">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4 lg:gap-12">
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2 group" aria-label="Hanamkonda Water Service — Home">
              <div className="bg-brand-primary p-2 rounded-lg text-white group-hover:bg-brand-accent transition-colors duration-300">
                <Droplet className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <span className="font-display text-base font-extrabold text-white tracking-tight block leading-none">
                  Hanamkonda Water
                </span>
                <span className="text-[9px] uppercase font-mono tracking-widest text-brand-accent font-bold">
                  Service
                </span>
              </div>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed">
              Water purifier, water softener, and robot vacuum cleaner sales, installation, repair, and maintenance in Hanamkonda, Warangal, and Kazipet since 2016.
            </p>
            <p className="text-xs font-semibold text-brand-accent leading-relaxed">
              {BUSINESS_INFO.eurekaForbesPartnerLabel} — {BUSINESS_INFO.dealerName}
            </p>
            <div className="flex items-start space-x-2 text-sm text-slate-400">
              <Clock className="h-4 w-4 text-brand-accent mt-0.5 flex-shrink-0" aria-hidden="true" />
              <span>{BUSINESS_INFO.openingHours}</span>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to={ROUTES.HOME} className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to={ROUTES.SERVICES} className="hover:text-white transition-colors">All Services</Link></li>
              <li><Link to={ROUTES.ABOUT} className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to={ROUTES.FAQ} className="hover:text-white transition-colors">FAQ</Link></li>
              <li><Link to={ROUTES.CONTACT} className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-6">Our Services</h4>
            <ul className="space-y-3 text-sm">
              {ALL_SERVICE_ROUTES.slice(0, 6).map((path) => (
                <li key={path}>
                  <Link to={path} className="hover:text-white transition-colors">
                    {SERVICE_LABELS[path] ?? path.replace(/\//g, "").replace(/-/g, " ")}
                  </Link>
                </li>
              ))}
              <li>
                <Link to={ROUTES.SERVICES} className="text-brand-accent hover:text-white transition-colors text-xs font-semibold">
                  View all services →
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-6">Contact &amp; Locations</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3 text-slate-400">
                <MapPin className="h-5 w-5 text-brand-accent mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span>{BUSINESS_INFO.address}</span>
              </li>
              <li className="flex items-center space-x-3 text-slate-400">
                <Phone className="h-5 w-5 text-brand-accent flex-shrink-0" aria-hidden="true" />
                <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="hover:text-white transition-colors">
                  {BUSINESS_INFO.phone}
                </a>
              </li>
              <li className="flex items-center space-x-3 text-slate-400">
                <Mail className="h-5 w-5 text-brand-accent flex-shrink-0" aria-hidden="true" />
                <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-white transition-colors">
                  {BUSINESS_INFO.email}
                </a>
              </li>
              {ALL_LOCATION_ROUTES.map((path) => (
                <li key={path}>
                  <Link to={path} className="hover:text-white transition-colors text-slate-400">
                    Service in {path.split("/").pop()}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-800 text-center md:flex md:justify-between md:text-left">
          <p className="text-xs text-slate-500">
            &copy; {currentYear} {BUSINESS_INFO.name}. All rights reserved.
          </p>
          <p className="text-xs text-slate-600 mt-2 md:mt-0">
            Water Purifier, Softener &amp; Robot Vacuum Services in Hanamkonda, Warangal &amp; Kazipet.
          </p>
        </div>
      </div>
    </footer>
  );
}
