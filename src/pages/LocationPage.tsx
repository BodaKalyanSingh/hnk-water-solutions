import { useParams, Navigate } from "react-router-dom";
import { getLocationPage, LocationPageLayout } from "../components/seo/LocationPageLayout";
import { ROUTES } from "../lib/constants";

export default function LocationPage() {
  const { slug } = useParams<{ slug: string }>();

  if (!slug) {
    return <Navigate to={ROUTES.HOME} replace />;
  }

  const data = getLocationPage(slug);
  if (!data) {
    return <Navigate to={ROUTES.HOME} replace />;
  }

  return <LocationPageLayout data={data} />;
}
