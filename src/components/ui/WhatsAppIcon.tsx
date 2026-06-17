import { IMAGES } from "../../lib/images";
import { cn } from "../../lib/cn";

interface WhatsAppIconProps {
  className?: string;
  size?: number;
}

export function WhatsAppIcon({ className, size = 18 }: WhatsAppIconProps) {
  return (
    <img
      src={IMAGES.whatsapp}
      alt=""
      width={size}
      height={size}
      className={cn("object-contain shrink-0", className)}
      aria-hidden="true"
      loading="lazy"
      decoding="async"
    />
  );
}
