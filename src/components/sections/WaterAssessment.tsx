import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "../ui/Card";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";
import { useLeadStore } from "../../store/leadStore";
import { Droplet, ArrowRight, ArrowLeft, CheckCircle, Home, Layers, Users } from "lucide-react";

export function WaterAssessment() {
  const { openLeadModal } = useLeadStore();
  const [step, setStep] = React.useState<number>(1);
  const [waterSource, setWaterSource] = React.useState<"municipal" | "borewell" | "tanker" | "">("");
  const [familySize, setFamilySize] = React.useState<"1-2" | "3-5" | "6+" | "">("");
  const [location, setLocation] = React.useState<string>("");
  const [locationError, setLocationError] = React.useState<string>("");

  const handleNextStep = () => {
    if (step === 1 && !waterSource) return;
    if (step === 2 && !familySize) return;
    if (step === 3) {
      if (location.trim().length < 3) {
        setLocationError("Please enter your local area (at least 3 characters)");
        return;
      }
      setLocationError("");
    }
    setStep(step + 1);
  };

  const handlePrevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const resetForm = () => {
    setWaterSource("");
    setFamilySize("");
    setLocation("");
    setStep(1);
  };

  const getRecommendation = () => {
    if (waterSource === "municipal") {
      return {
        title: "AquaPure UV + UF Slim Compact",
        desc: "Since municipal supply water in Hanamkonda has relatively lower TDS, a UV+UF filtration system is ideal to remove biological contaminants and particulates without wasting mineral content.",
        sourceLabel: "Municipal Supply"
      };
    } else {
      const isBigFamily = familySize === "3-5" || familySize === "6+";
      if (isBigFamily) {
        return {
          title: "AquaShield Pro RO + UV + Alkaline",
          desc: "Borewell or Tanker water in Warangal usually contains high mineral hardness. An advanced multi-stage RO system with Alkaline booster will reduce heavy scaling and balance taste perfectly for your family.",
          sourceLabel: "Borewell / Tanker Hard Water"
        };
      } else {
        return {
          title: "AquaSmart Compact RO Purifier",
          desc: "Borewell/Tanker supply requires RO filtration. This compact space-saving model will fulfill drinking and cooking needs efficiently for small households while removing chemical scaling.",
          sourceLabel: "Borewell / Tanker (Small Family)"
        };
      }
    }
  };

  const recommendation = getRecommendation();

  const handleConsultationCTA = () => {
    openLeadModal(
      `Water Assessment Recommendation: ${recommendation.title}`,
      `Water Assessment Wizard: Source=${waterSource}, Family=${familySize}, Loc=${location}`
    );
  };

  const slideVariants = {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
  };

  return (
    <section className="py-20 bg-white border-b border-brandBorder">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10 space-y-4">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-accent/15 text-brand-primary mb-2">
              <Layers className="h-6 w-6" />
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-text-primary tracking-tight font-display">
              Water Quality Assessment Wizard
            </h2>
            <p className="text-text-secondary text-sm md:text-base">
              Get an instant recommendation on the best water purification configuration for your home.
            </p>
          </div>

          {/* Wizard Card */}
          <Card className="bg-surface-1 border border-brandBorder shadow-xl p-6 md:p-10 relative overflow-hidden" hoverEffect={false}>
            {/* Progress Bar */}
            {step <= 3 && (
              <div className="w-full h-1 bg-slate-200 absolute top-0 left-0">
                <div
                  className="h-full bg-brand-primary transition-all duration-300"
                  style={{ width: `${(step / 3) * 100}%` }}
                />
              </div>
            )}

            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="step1"
                  variants={slideVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="space-y-6"
                >
                  <div className="flex items-center space-x-2 text-brand-primary">
                    <Home className="h-5 w-5" />
                    <span className="text-xs font-mono font-bold uppercase tracking-wider">Step 1 of 3: Water Source</span>
                  </div>
                  <h3 className="text-xl font-bold text-text-primary font-display">
                    Where does your home get raw water supply from?
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                    {[
                      { value: "municipal", title: "Municipal Taps", desc: "Government supply, low scaling" },
                      { value: "borewell", title: "Borewell Water", desc: "High mineral hardness & salty taste" },
                      { value: "tanker", title: "Private Tankers", desc: "Variable quality, scaling deposits" }
                    ].map((opt) => (
                      <button
                        key={opt.value}
                        type="button"
                        onClick={() => setWaterSource(opt.value as "municipal" | "borewell" | "tanker")}
                        className={`p-5 rounded-xl border text-left transition-all duration-200 cursor-pointer ${
                          waterSource === opt.value
                            ? "bg-brand-primary/5 border-brand-primary ring-2 ring-brand-primary/20"
                            : "bg-white border-brandBorder hover:border-text-secondary/35"
                        }`}
                      >
                        <span className="font-bold text-text-primary block text-sm">{opt.title}</span>
                        <span className="text-xs text-text-secondary mt-1 block leading-normal">{opt.desc}</span>
                      </button>
                    ))}
                  </div>

                  <div className="flex justify-end pt-4">
                    <Button
                      variant="primary"
                      onClick={handleNextStep}
                      disabled={!waterSource}
                      className="flex items-center space-x-1"
                    >
                      <span>Next Step</span>
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="step2"
                  variants={slideVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="space-y-6"
                >
                  <div className="flex items-center space-x-2 text-brand-primary">
                    <Users className="h-5 w-5" />
                    <span className="text-xs font-mono font-bold uppercase tracking-wider">Step 2 of 3: Family Size</span>
                  </div>
                  <h3 className="text-xl font-bold text-text-primary font-display">
                    How many members are in your household?
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                    {[
                      { value: "1-2", title: "1 - 2 Persons", desc: "Low daily water footprint" },
                      { value: "3-5", title: "3 - 5 Persons", desc: "Average medium family needs" },
                      { value: "6+", title: "6+ Persons", desc: "High volume drinking & cooking" }
                    ].map((opt) => (
                      <button
                        key={opt.value}
                        type="button"
                        onClick={() => setFamilySize(opt.value as "1-2" | "3-5" | "6+")}
                        className={`p-5 rounded-xl border text-left transition-all duration-200 cursor-pointer ${
                          familySize === opt.value
                            ? "bg-brand-primary/5 border-brand-primary ring-2 ring-brand-primary/20"
                            : "bg-white border-brandBorder hover:border-text-secondary/35"
                        }`}
                      >
                        <span className="font-bold text-text-primary block text-sm">{opt.title}</span>
                        <span className="text-xs text-text-secondary mt-1 block leading-normal">{opt.desc}</span>
                      </button>
                    ))}
                  </div>

                  <div className="flex justify-between pt-4">
                    <Button
                      variant="outline"
                      onClick={handlePrevStep}
                      className="flex items-center space-x-1"
                    >
                      <ArrowLeft className="h-4 w-4" />
                      <span>Back</span>
                    </Button>
                    <Button
                      variant="primary"
                      onClick={handleNextStep}
                      disabled={!familySize}
                      className="flex items-center space-x-1"
                    >
                      <span>Next Step</span>
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  key="step3"
                  variants={slideVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="space-y-6"
                >
                  <div className="flex items-center space-x-2 text-brand-primary">
                    <Droplet className="h-5 w-5" />
                    <span className="text-xs font-mono font-bold uppercase tracking-wider">Step 3 of 3: Location</span>
                  </div>
                  <h3 className="text-xl font-bold text-text-primary font-display">
                    Where is your home located in Hanamkonda?
                  </h3>
                  
                  <div className="pt-2">
                    <Input
                      label="Your Neighborhood / Area *"
                      placeholder="e.g. Subedari, Hunter Road, Naimnagar"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      error={locationError}
                    />
                  </div>

                  <div className="flex justify-between pt-4">
                    <Button
                      variant="outline"
                      onClick={handlePrevStep}
                      className="flex items-center space-x-1"
                    >
                      <ArrowLeft className="h-4 w-4" />
                      <span>Back</span>
                    </Button>
                    <Button
                      variant="primary"
                      onClick={handleNextStep}
                      disabled={!location}
                      className="flex items-center space-x-1"
                    >
                      <span>Generate Report</span>
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </motion.div>
              )}

              {step === 4 && (
                <motion.div
                  key="report"
                  variants={slideVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="space-y-6 text-center"
                >
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-primary/10 text-brand-primary">
                    <CheckCircle className="h-8 w-8 animate-pulse" />
                  </div>
                  <div className="space-y-2">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-accent">Personalized Recommendation</span>
                    <h3 className="text-xl md:text-2xl font-bold text-text-primary font-display">
                      {recommendation.title}
                    </h3>
                  </div>

                  <div className="bg-white border border-brandBorder rounded-2xl p-5 text-left space-y-3 max-w-xl mx-auto shadow-sm">
                    <div className="flex justify-between text-xs font-mono border-b border-brandBorder pb-2">
                      <span className="text-text-secondary">Source: {recommendation.sourceLabel}</span>
                      <span className="text-brand-primary font-bold">{location}</span>
                    </div>
                    <p className="text-xs md:text-sm text-text-secondary leading-relaxed pt-1">
                      {recommendation.desc}
                    </p>
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                    <Button
                      variant="cta"
                      onClick={handleConsultationCTA}
                      className="flex items-center justify-center"
                    >
                      Get Free Expert Callback
                    </Button>
                    <Button
                      variant="outline"
                      onClick={resetForm}
                      className="flex items-center justify-center"
                    >
                      Restart Assessment
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </Card>
        </div>
      </div>
    </section>
  );
}
