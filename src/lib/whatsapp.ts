import { BUSINESS_INFO } from "./constants";

export function getWhatsAppLink(message: string): string {
  return `https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${encodeURIComponent(message)}`;
}
