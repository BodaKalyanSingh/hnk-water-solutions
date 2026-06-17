import { SERVICE_PAGES as PART1 } from "./service-pages-part1";
import { SERVICE_PAGES_PART2 as PART2 } from "./service-pages-part2";
import { SERVICE_PAGES_PART3 as PART3 } from "./service-pages-part3";

export const SERVICE_PAGES = {
  ...PART1,
  ...PART2,
  ...PART3,
};

export type { SeoServicePageData } from "./types";
