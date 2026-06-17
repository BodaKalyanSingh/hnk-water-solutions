import { Phone } from "lucide-react";
import { BUSINESS_INFO, WHATSAPP_MESSAGES } from "../../lib/constants";
import { getWhatsAppLink } from "../../lib/whatsapp";
import { WhatsAppIcon } from "../ui/WhatsAppIcon";

interface ServiceCTAsProps {
  className?: string;
  layout?: "row" | "stack";
  onDark?: boolean;
  whatsappMessage?: string;
}

export function ServiceCTAs({
  className = "",
  layout = "row",
  onDark = false,
  whatsappMessage,
}: ServiceCTAsProps) {
  const whatsappLink = getWhatsAppLink(whatsappMessage ?? WHATSAPP_MESSAGES.default);
  const telLink = `tel:${BUSINESS_INFO.phoneRaw}`;

  const baseClass =
    layout === "row"
      ? "flex flex-wrap items-center gap-2"
      : "inline-flex flex-col items-stretch gap-2";

  const btnBase =
    layout === "stack"
      ? "inline-flex h-10 w-full items-center justify-center gap-1.5 rounded-md px-3 text-sm font-medium transition-colors"
      : "inline-flex h-8 items-center justify-center gap-1.5 rounded-md px-2.5 text-xs font-medium transition-colors";

  const whatsappClass = `${btnBase} bg-[#25D366] text-white hover:bg-[#1da851]`;
  const callClass = onDark
    ? `${btnBase} bg-white/15 text-white border border-white/25 hover:bg-white/25`
    : `${btnBase} bg-brand-primary text-white hover:bg-brand-primary/90`;

  return (
    <div className={`${baseClass} ${className}`}>
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp with Hanamkonda Water Service"
        className={whatsappClass}
      >
        <WhatsAppIcon size={16} />
        <span>WhatsApp</span>
      </a>
      <a href={telLink} aria-label={`Call ${BUSINESS_INFO.phone}`} className={callClass}>
        <Phone className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
        <span>Call Now</span>
      </a>
    </div>
  );
}
