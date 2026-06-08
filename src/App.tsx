import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { FloatingActions } from "./components/layout/FloatingActions";
import { PageWrapper } from "./components/layout/PageWrapper";
import { LeadModal } from "./components/sections/LeadModal";
import { ROUTES } from "./lib/constants";

// Lazy-load every page as requested
const Home = React.lazy(() => import("./pages/Home"));
const About = React.lazy(() => import("./pages/About"));
const Products = React.lazy(() => import("./pages/Products"));
const Services = React.lazy(() => import("./pages/Services"));
const Contact = React.lazy(() => import("./pages/Contact"));
const WaterPurifierSolutions = React.lazy(() => import("./pages/WaterPurifierSolutions"));
const WaterSoftenerSolutions = React.lazy(() => import("./pages/WaterSoftenerSolutions"));
const RoboVacuumSolutions = React.lazy(() => import("./pages/RoboVacuumSolutions"));

// Loading Skeleton Fallback
function PageSkeleton() {
  return (
    <div className="pt-28 pb-16 min-h-screen flex flex-col items-center justify-center bg-surface-1">
      <div className="space-y-6 w-full max-w-5xl px-4 md:px-8 animate-pulse">
        <div className="h-10 bg-slate-200 rounded-2xl w-1/3" />
        <div className="h-4 bg-slate-200 rounded-xl w-full" />
        <div className="h-4 bg-slate-200 rounded-xl w-5/6" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
          <div className="h-56 bg-slate-200 rounded-2xl" />
          <div className="h-56 bg-slate-200 rounded-2xl" />
          <div className="h-56 bg-slate-200 rounded-2xl" />
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header />
          
          <div className="flex-grow">
            <Suspense fallback={<PageSkeleton />}>
              <Routes>
                <Route
                  path={ROUTES.HOME}
                  element={
                    <PageWrapper>
                      <Home />
                    </PageWrapper>
                  }
                />
                <Route
                  path={ROUTES.ABOUT}
                  element={
                    <PageWrapper>
                      <About />
                    </PageWrapper>
                  }
                />
                <Route
                  path={ROUTES.PRODUCTS}
                  element={
                    <PageWrapper>
                      <Products />
                    </PageWrapper>
                  }
                />
                <Route
                  path={ROUTES.SERVICES}
                  element={
                    <PageWrapper>
                      <Services />
                    </PageWrapper>
                  }
                />
                <Route
                  path={ROUTES.CONTACT}
                  element={
                    <PageWrapper>
                      <Contact />
                    </PageWrapper>
                  }
                />
                <Route
                  path={ROUTES.SEO_WATER_PURIFIER}
                  element={
                    <PageWrapper>
                      <WaterPurifierSolutions />
                    </PageWrapper>
                  }
                />
                <Route
                  path={ROUTES.SEO_WATER_SOFTENER}
                  element={
                    <PageWrapper>
                      <WaterSoftenerSolutions />
                    </PageWrapper>
                  }
                />
                <Route
                  path={ROUTES.SEO_ROBO_VACUUM}
                  element={
                    <PageWrapper>
                      <RoboVacuumSolutions />
                    </PageWrapper>
                  }
                />
                {/* Fallback route */}
                <Route
                  path="*"
                  element={
                    <PageWrapper>
                      <Home />
                    </PageWrapper>
                  }
                />
              </Routes>
            </Suspense>
          </div>

          <Footer />
          <FloatingActions />
          <LeadModal />
        </div>
      </Router>
    </HelmetProvider>
  );
}
