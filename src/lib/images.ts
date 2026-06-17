import happyFamily from "../assets/happy_family.png";
import purifier from "../assets/purifier.png";
import softner from "../assets/softner.png";
import robo from "../assets/robo.png";
import comparison from "../assets/comparison.png";
import whatsappIcon from "../assets/whatsapp_log.png";

export const IMAGES = {
  happyFamily,
  purifier,
  softner,
  robo,
  comparison,
  whatsapp: whatsappIcon,
} as const;

export const CATEGORY_IMAGES: Record<string, string> = {
  "water-purifiers": purifier,
  "water-softeners": softner,
  "robo-vacuums": robo,
};

export const SERVICE_HERO_IMAGES: Record<string, string> = {
  "Water Purification": purifier,
  "Water Softening": softner,
  "Smart Home Cleaning": robo,
};
