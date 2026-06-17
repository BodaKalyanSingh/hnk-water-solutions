import { Helmet } from "react-helmet-async";
import { BUSINESS_INFO, GOOGLE_SITE_VERIFICATION } from "../../lib/constants";
import { canonicalUrl } from "../../lib/seo";

interface SEOHeadProps {
  title: string;
  description: string;
  path?: string;
  canonicalUrl?: string;
  ogType?: "website" | "article";
  ogImage?: string;
  schemaMarkup?: Record<string, unknown> | Record<string, unknown>[];
  /** When true, title is used exactly as provided (no business name suffix) */
  fullTitle?: boolean;
}

export function SEOHead({
  title,
  description,
  path = "/",
  canonicalUrl: canonicalOverride,
  ogType = "website",
  ogImage = BUSINESS_INFO.ogImage,
  schemaMarkup,
  fullTitle = true,
}: SEOHeadProps) {
  const pageTitle = fullTitle ? title : `${title} | ${BUSINESS_INFO.name}`;
  const currentUrl = canonicalOverride ?? canonicalUrl(path);

  const schemas = schemaMarkup
    ? Array.isArray(schemaMarkup)
      ? schemaMarkup
      : [schemaMarkup]
    : [];

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={currentUrl} />
      <meta name="google-site-verification" content={GOOGLE_SITE_VERIFICATION} />

      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:site_name" content={BUSINESS_INFO.name} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {schemas.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
}
