import { Service } from "../types";

export const services: Service[] = [
  {
    id: "installation",
    title: "Professional Installation",
    description: "Secure, leakage-free installation of water purifiers and softeners by expert technicians.",
    iconName: "Wrench",
    benefits: [
      "Inlet pressure verification",
      "Proper bracket mounting and tube routing",
      "Immediate post-installation flow testing"
    ],
    steps: [
      "Site assessment for electricity and drainage inlet",
      "Mounting brackets and physical unit placement",
      "Water tube connections with leakproof locking clamps",
      "First flush cycle and system calibration check"
    ]
  },
  {
    id: "repairs",
    title: "On-Demand Repairs",
    description: "Quick resolution of leakages, motor failures, electronic issues, or poor flow rates.",
    iconName: "Settings",
    benefits: [
      "Genuine manufacturer spare parts",
      "Multi-point diagnostic system checks",
      "30-day service warranty on parts"
    ],
    steps: [
      "Symptom reporting and technician allocation",
      "Complete system diagnostics and electrical tests",
      "Faulty part replacement (pumps, adapters, sensors)",
      "Flow rate and water quality assurance test"
    ]
  },
  {
    id: "amc",
    title: "Annual Maintenance Contracts (AMC)",
    description: "Worry-free maintenance packages covering scheduled services and filter replacements.",
    iconName: "ShieldCheck",
    benefits: [
      "Unlimited breakdown calls included",
      "Four scheduled preventive maintenance visits",
      "Free replacement of filters and worn gaskets"
    ],
    steps: [
      "Select an AMC plan aligned with purifier model",
      "Automated scheduling of quarterly service visits",
      "Technician inspection, deep sanitation and cleaning",
      "Preemptive replacements of filters and consumable parts"
    ]
  },
  {
    id: "filter-replacement",
    title: "Filter & Membrane Replacement",
    description: "Periodic replacement of sediment filters, carbon blocks, and RO/UF membranes.",
    iconName: "RefreshCw",
    benefits: [
      "High-rejection original RO membranes",
      "Removes chlorine, heavy metals, and odors",
      "Restores pure taste and clean flow rate"
    ],
    steps: [
      "Inlet water quality checking (TDS measurement)",
      "Sanitizing housing filters and clean system run",
      "Installing original sediment, carbon and RO membrane",
      "Verifying TDS output level and water taste"
    ]
  },
  {
    id: "free-water-testing",
    title: "Free Water Quality Testing",
    description: "Get your home tap water tested for TDS, hardness, and chlorine levels, completely free.",
    iconName: "FileSpreadsheet",
    benefits: [
      "Digital TDS meter check on-site",
      "Hardness titration verification",
      "Expert purifier suggestion based on water source"
    ],
    steps: [
      "Schedule a testing appointment online or by phone",
      "Technician visits and collects raw water sample",
      "Runs multi-parameter digital chemical/TDS analysis",
      "Provides water report and suggestions (No obligation)"
    ]
  }
];
