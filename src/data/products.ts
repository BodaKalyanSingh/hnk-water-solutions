import { Product } from "../types";

export const products: Product[] = [
  {
    id: "aquashield-pro-ro",
    name: "AquaShield Pro RO+UV+Copper",
    image: "aquashield-pro",
    benefits: [
      "10-Stage purification with alkaline booster",
      "Real-time TDS and filter life monitoring",
      "Smart water dispensing with auto shut-off"
    ],
    categoryId: "water-purifiers",
    isFeatured: true,
    specifications: {
      "Purification Capacity": "15 Liters/Hour",
      "Storage Tank": "8 Liters",
      "Filters": "Pre-Filter, Sediment, Pre-Carbon, RO Membrane, UV Chamber, Copper Active",
      "Input TDS": "Up to 2000 ppm"
    }
  },
  {
    id: "aquapure-uv-slim",
    name: "AquaPure UV Slim Compact",
    image: "aquapure-slim",
    benefits: [
      "High-flow UV filtration for low-TDS water",
      "Ultra-compact wall-mount design",
      "Energy saving mode with quick dispense"
    ],
    categoryId: "water-purifiers",
    isFeatured: false,
    specifications: {
      "Purification Capacity": "30 Liters/Hour",
      "Storage Tank": "Direct flow (No tank)",
      "Filters": "Sediment, Carbon Block, UV Sterilizer",
      "Input TDS": "Up to 200 ppm"
    }
  },
  {
    id: "aquasmart-hot-cold",
    name: "AquaSmart Hot & Cold RO",
    image: "aquasmart-hot-cold",
    benefits: [
      "Instant Hot, Warm, and Cold water options",
      "Child-lock protection for hot water",
      "In-tank UV sterilization every 30 minutes"
    ],
    categoryId: "water-purifiers",
    isFeatured: true,
    specifications: {
      "Purification Capacity": "12 Liters/Hour",
      "Storage Tank": "7 Liters (4L Ambient, 2L Cold, 1L Hot)",
      "Filters": "Sediment, Carbon, RO, Post-Carbon, In-Tank UV",
      "Input TDS": "Up to 1500 ppm"
    }
  },
  {
    id: "hydroflow-elite-softener",
    name: "HydroFlow Elite Whole-House Softener",
    image: "hydroflow-elite",
    benefits: [
      "Automatic regeneration based on volume",
      "Protects bathroom fittings & luxury tiles from scale",
      "Softer hair and skin after every bath"
    ],
    categoryId: "water-softeners",
    isFeatured: true,
    specifications: {
      "Flow Rate": "2000 Liters/Hour",
      "Resin Volume": "25 Liters",
      "Control Valve": "Automatic digital valve",
      "Ideal For": "3-5 Bathroom homes"
    }
  },
  {
    id: "hydroflow-compact-softener",
    name: "HydroFlow Compact Washing Machine Softener",
    image: "hydroflow-compact",
    benefits: [
      "Point-of-use scaling protection",
      "Extends washing machine and geyser life",
      "Enhances lather and detergent performance"
    ],
    categoryId: "water-softeners",
    isFeatured: false,
    specifications: {
      "Flow Rate": "500 Liters/Hour",
      "Resin Volume": "5 Liters",
      "Regeneration": "Manual salt-fill",
      "Ideal For": "Washing machine, geyser inlet"
    }
  },
  {
    id: "robovac-x10-autonomous",
    name: "RoboVac X-10 Autonomous Mop & Vacuum",
    image: "robovac-x10",
    benefits: [
      "LiDAR 2.0 mapping and obstacle avoidance",
      "5000Pa powerful suction with auto-boost",
      "Dual-spinning pressurized wet mops"
    ],
    categoryId: "robo-vacuums",
    isFeatured: true,
    specifications: {
      "Suction Power": "5000 Pa",
      "Battery Capacity": "5200 mAh (Up to 180 min runtime)",
      "Dustbin Capacity": "400 ml",
      "Water Tank": "250 ml Electronic"
    }
  },
  {
    id: "roboclean-mop-ultra",
    name: "RoboClean Mop Ultra with Auto-Empty Dock",
    image: "roboclean-ultra",
    benefits: [
      "Self-cleaning and self-drying mop pads",
      "60-day hands-free dust collection dock",
      "Voice assistant control (Alexa / Google Assistant)"
    ],
    categoryId: "robo-vacuums",
    isFeatured: false,
    specifications: {
      "Suction Power": "6000 Pa",
      "Docking Station": "Auto-empty, Mop-wash, Mop-dry",
      "Battery": "6400 mAh",
      "Mapping": "3D Structured Light + LiDAR"
    }
  },
  {
    id: "cyclone-max-handheld",
    name: "Cyclone Max Cordless Stick Vacuum",
    image: "cyclone-max",
    benefits: [
      "Ultra-lightweight 1.5kg motor design",
      "Multi-cyclonic filtration catching 99.9% particles",
      "Flexible joints to reach under low furniture"
    ],
    categoryId: "vacuum-cleaners",
    isFeatured: false,
    specifications: {
      "Motor Power": "450W BLDC Motor",
      "Runtime": "Up to 60 minutes",
      "Dust Capacity": "0.6 Liters",
      "Filter System": "5-Stage HEPA filtration"
    }
  },
  {
    id: "pureair-sentinel-hepa",
    name: "PureAir Sentinel HEPA Purifier",
    image: "pureair-sentinel",
    benefits: [
      "True HEPA H13 filter with activated carbon",
      "Real-time PM2.5 air quality light indicator",
      "Quiet Sleep Mode at 22dB sound level"
    ],
    categoryId: "air-purifiers",
    isFeatured: true,
    specifications: {
      "CADR (Clean Air Rate)": "350 m³/Hour",
      "Effective Area": "Up to 450 sq ft",
      "Filter Life": "approx. 12 months",
      "Noise Level": "22 dB - 52 dB"
    }
  }
];
