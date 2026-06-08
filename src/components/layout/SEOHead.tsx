import { Helmet } from "react-helmet-async";
import { BUSINESS_INFO } from "../../lib/constants";

interface SEOHeadProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  ogType?: "website" | "article" | "product";
  ogImage?: string;
  schemaMarkup?: Record<string, unknown> | Record<string, unknown>[];
}

export function SEOHead({
  title,
  description,
  canonicalUrl,
  ogType = "website",
  ogImage = "https://waterpurifiersolutions.in/og-image.jpg",
  schemaMarkup,
}: SEOHeadProps) {
  // Use window.location.href safely or fallback to placeholder
  const currentUrl = canonicalUrl || (typeof window !== "undefined" ? window.location.origin + window.location.pathname : "https://waterpurifiersolutions.in");

  return (
    <Helmet>
      {/* Basic Title & Meta */}
      <title>{title} | {BUSINESS_INFO.name}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={currentUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={`${title} | ${BUSINESS_INFO.name}`} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={BUSINESS_INFO.name} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`${title} | ${BUSINESS_INFO.name}`} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Structured Schema Markup */}
      {schemaMarkup && (
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      )}
    </Helmet>
  );
}
