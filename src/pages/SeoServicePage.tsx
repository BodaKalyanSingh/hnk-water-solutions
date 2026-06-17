import { SERVICE_PAGES } from "../data/seo/service-pages";
import { ServicePageLayout } from "../components/seo/ServicePageLayout";

interface SeoServicePageProps {
  slug: string;
}

export default function SeoServicePage({ slug }: SeoServicePageProps) {
  const data = SERVICE_PAGES[slug];
  if (!data) return null;
  return <ServicePageLayout data={data} />;
}
