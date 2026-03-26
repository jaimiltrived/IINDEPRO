export const IMGS = {
  eb_8320: "/products/eb8320.png",
  eb_4220: "/products/eb_4220.png",
  hb_2206: "/products/2206_motor.png",
  hb_6206: "/products/6206_1.png",
  gw_3120: "/products/3120_2.png",
  gw_4006: "/products/4006_20.png",
  fa_3110: "/products/3120_2.png", // fallback or specific
  fa_5008: "/products/3120_2.png",
  props_exploded: "/products/exploded.png",
};

export const motorParts = [
  { top: "28%", left: "62%", name: "150KV High-Torque Motor", spec: "Precision-engineered core delivering maximum lift capacity." },
  { top: "45%", left: "54%", name: "Advanced Thermal Management", spec: "Active heat dissipation maintains efficiency under heavy loads." },
  { top: "62%", left: "42%", name: "30″ – 34″ Propeller Compatible", spec: "Optimized geometry for large-scale stability and endurance." },
  { top: "78%", left: "28%", name: "Built for Logistics Missions", spec: "Rugged construction ensuring reliability in extreme environments." },
];

export const products = [
  { num: "01", kv: "150KV", name: "10020 PRO", category: "Heavy Lift", desc: "High-torque flagship motor built for heavy-lift logistics and cargo drone applications." },
  { num: "02", kv: "120KV", name: "8015 LITE", category: "Surveillance", desc: "Lightweight mid-range motor optimised for long-endurance surveillance UAV platforms." },
  { num: "03", kv: "80KV", name: "6212 MAX", category: "Agriculture", desc: "Ultra-efficient low-KV motor for large agricultural spray drones." },
  { num: "04", kv: "180KV", name: "4006 PROWLER", category: "Surveillance", desc: "Stealth-optimized motor design for tactical and low-noise operational requirements." },
  { num: "05", kv: "210KV", name: "4220 APEX", category: "Racing", desc: "High-speed and agile motor tailored for fast-response racing or inspection drones." },
  { num: "06", kv: "300KV", name: "6206 MASTER", category: "Racing", desc: "Precision competition-grade motor offering unmatched response and handling." },
];

export const productCategories = ["All", "Heavy Lift", "Surveillance", "Agriculture", "Racing", "Falcon", "Condor "];

export const accordionData1 = [
 
 
  {
    id: 1, name: "Eagle", series: "Eagle", desc: "Flagship motor built for heavy-lift logistics and cargo drone applications.", img: "/products/eb8320.png",
    specs: [{ l: "KV Rating", v: "120 KV" }, { l: "Max Thrust", v: "12.5 kg" }, { l: "Max Power", v: "3200 W" }, { l: "Weight", v: "485 g" }]
  },
  {
    id: 2, name: "Hummingbird", series: "Hummingbird", desc: "High-speed and agile motor tailored for fast-response racing drones.", img: "/products/2206_motor.png",
    specs: [{ l: "KV Rating", v: "2100 KV" }, { l: "Max Thrust", v: "1.8 kg" }, { l: "Max Power", v: "450 W" }, { l: "Weight", v: "32 g" }]
  },
  {
    id: 3, name: "Godwick", series: "Godwick", desc: "Ultra-efficient low-KV motor for large agricultural spray drones.", img: "/products/3120_2.png",
    specs: [{ l: "KV Rating", v: "150 KV" }, { l: "Max Thrust", v: "6.2 kg" }, { l: "Max Power", v: "1200 W" }, { l: "Weight", v: "145 g" }]
  },

  {
    id: 4, name: "Falcon", series: "Falcon ", desc: "Precision-engineered tactical motor for high-speed UAV operations.", img: "/products/3120_2.png",
    specs: [{ l: "KV Rating", v: "900 KV" }, { l: "Max Thrust", v: "1.8 kg" }, { l: "Max Power", v: "700 W" }, { l: "Weight", v: "55 g" }]
  },
  {
    id: 11, name: "Condor", series: "Condor", desc: "Ultra-efficient motor for long-range reconnaissance missions.", img: "/products/3120_2.png",
    specs: [{ l: "KV Rating", v: "150 KV" }, { l: "Max Thrust", v: "6.5 kg" }, { l: "Max Power", v: "1350 W" }, { l: "Weight", v: "160 g" }]
  },
];


export const accordionData = [
  {
    id: 1, name: "EB-8320 PRO", series: "Eagle", title: "Eagle", desc: "Flagship motor built for heavy-lift logistics and cargo drone applications.", img: "/products/eb8320.png",
    specs: [{ l: "KV Rating", v: "120 KV" }, { l: "Max Thrust", v: "12.5 kg" }, { l: "Max Power", v: "3200 W" }, { l: "Weight", v: "485 g" }]
  },
  {
    id: 20, name: "EB-9025 ULTRA", series: "Eagle", title: "Eagle", desc: "Extreme torque motor for industrial-scale cargo transport.", img: "/products/eb8320.png",
    specs: [{ l: "KV Rating", v: "100 KV" }, { l: "Max Thrust", v: "18.5 kg" }, { l: "Max Power", v: "4800 W" }, { l: "Weight", v: "620 g" }]
  },
  {
    id: 21, name: "EB-4515 LITE", series: "Eagle", title: "Eagle", desc: "Optimized for medium-lift platforms requiring high hover efficiency.", img: "/products/eb_4220.png",
    specs: [{ l: "KV Rating", v: "320 KV" }, { l: "Max Thrust", v: "6.8 kg" }, { l: "Max Power", v: "1500 W" }, { l: "Weight", v: "295 g" }]
  },
  {
    id: 22, name: "EB-6212 MASTER", series: "Eagle", title: "Eagle", desc: "Reliable workhorse for surveillance and delivery missions.", img: "/products/eb8320.png",
    specs: [{ l: "KV Rating", v: "180 KV" }, { l: "Max Thrust", v: "9.2 kg" }, { l: "Max Power", v: "2400 W" }, { l: "Weight", v: "410 g" }]
  },
  {
    id: 7, name: "EB-4220 Apex", series: "Eagle", title: "Eagle", desc: "All-rounder motor for mid-to-heavy lift industrial platforms.", img: "/products/eb_4220.png",
    specs: [{ l: "KV Rating", v: "210 KV" }, { l: "Max Thrust", v: "8.5 kg" }, { l: "Max Power", v: "2100 W" }, { l: "Weight", v: "340 g" }]
  },

  {
    id: 2, name: "HB-2206 Agile", series: "Hummingbird", title: "Hummingbird", desc: "High-speed and agile motor tailored for fast-response racing drones.", img: "/products/2206_motor.png",
    specs: [{ l: "KV Rating", v: "2100 KV" }, { l: "Max Thrust", v: "1.8 kg" }, { l: "Max Power", v: "450 W" }, { l: "Weight", v: "32 g" }]
  },
  {
    id: 23, name: "HB-2306 PRO", series: "Hummingbird", title: "Hummingbird", desc: "Pro-tier racing motor with ultra-responsive bell design.", img: "/products/2206_motor.png",
    specs: [{ l: "KV Rating", v: "2450 KV" }, { l: "Max Thrust", v: "2.1 kg" }, { l: "Max Power", v: "580 W" }, { l: "Weight", v: "34 g" }]
  },
  {
    id: 24, name: "HB-1108 MICRO", series: "Hummingbird", title: "Hummingbird", desc: "Tiny but mighty motor for indoor cinematic platforms.", img: "/products/2206_motor.png",
    specs: [{ l: "KV Rating", v: "4500 KV" }, { l: "Max Thrust", v: "0.6 kg" }, { l: "Max Power", v: "180 W" }, { l: "Weight", v: "12 g" }]
  },
  {
    id: 25, name: "HB-4215 ELITE", series: "Hummingbird", title: "Hummingbird", desc: "Balanced power for high-speed aero-acrobatic maneuvers.", img: "/products/6206_1.png",
    specs: [{ l: "KV Rating", v: "650 KV" }, { l: "Max Thrust", v: "4.2 kg" }, { l: "Max Power", v: "1250 W" }, { l: "Weight", v: "180 g" }]
  },
  {
    id: 5, name: "HB-6206 Master", series: "Hummingbird", title: "Hummingbird", desc: "Precision competition-grade motor offering unmatched response and handling.", img: "/products/6206_1.png",
    specs: [{ l: "KV Rating", v: "300 KV" }, { l: "Max Thrust", v: "4.8 kg" }, { l: "Max Power", v: "1800 W" }, { l: "Weight", v: "210 g" }]
  },

  {
    id: 3, name: "GW-3120 Agri", series: "Godwick", title: "Godwick", desc: "Ultra-efficient low-KV motor for large agricultural spray drones.", img: "/products/3120_2.png",
    specs: [{ l: "KV Rating", v: "150 KV" }, { l: "Max Thrust", v: "6.2 kg" }, { l: "Max Power", v: "1200 W" }, { l: "Weight", v: "145 g" }]
  },
  {
    id: 26, name: "GW-5012 MAX", series: "Godwick", title: "Godwick", desc: "Powerful endurance motor for industrial-scale farming.", img: "/products/3120_2.png",
    specs: [{ l: "KV Rating", v: "120 KV" }, { l: "Max Thrust", v: "9.5 kg" }, { l: "Max Power", v: "2200 W" }, { l: "Weight", v: "280 g" }]
  },
  {
    id: 27, name: "GW-2808 RECON", series: "Godwick", title: "Godwick", desc: "Long-range endurance motor for fixed-wing reconnaissance.", img: "/products/4006_20.png",
    specs: [{ l: "KV Rating", v: "450 KV" }, { l: "Max Thrust", v: "2.4 kg" }, { l: "Max Power", v: "850 W" }, { l: "Weight", v: "98 g" }]
  },
  {
    id: 28, name: "GW-8115 GIANT", series: "Godwick", title: "Godwick", desc: "Massive stator diameter for peak efficiency in high-altitude logistics.", img: "/products/3120_2.png",
    specs: [{ l: "KV Rating", v: "90 KV" }, { l: "Max Thrust", v: "14.2 kg" }, { l: "Max Power", v: "3800 W" }, { l: "Weight", v: "540 g" }]
  },
  {
    id: 6, name: "GW-4006 Prowler", series: "Godwick", title: "Godwick", desc: "Stealth-optimized motor design for tactical and low-noise operational requirements.", img: "/products/4006_20.png",
    specs: [{ l: "KV Rating", v: "180 KV" }, { l: "Max Thrust", v: "3.2 kg" }, { l: "Max Power", v: "950 W" }, { l: "Weight", v: "185 g" }]
  },

  {
    id: 4, name: "FA-3110 Tactical", series: "Falcon ", title: "Falcon ", desc: "Precision-engineered tactical motor for high-speed UAV operations.", img: "/products/3120_2.png",
    specs: [{ l: "KV Rating", v: "900 KV" }, { l: "Max Thrust", v: "1.8 kg" }, { l: "Max Power", v: "700 W" }, { l: "Weight", v: "55 g" }]
  },
  {
    id: 10, name: "FA-2206 PRO", series: "Falcon ", title: "Falcon ", desc: "High-RPM racing motor for ultra-lightweight UAV platforms.", img: "/products/2206_motor.png",
    specs: [{ l: "KV Rating", v: "2300 KV" }, { l: "Max Thrust", v: "1.4 kg" }, { l: "Max Power", v: "420 W" }, { l: "Weight", v: "30 g" }]
  },
  {
    id: 13, name: "FA-3010", series: "Falcon ", title: "Falcon ", desc: "Mid-range tactical motor with high reliability.", img: "/products/3120_2.png",
    specs: [{ l: "KV Rating", v: "800 KV" }, { l: "Max Thrust", v: "1.9 kg" }, { l: "Max Power", v: "650 W" }, { l: "Weight", v: "58 g" }]
  },
  {
    id: 14, name: "FA-4012", series: "Falcon ", title: "Falcon ", desc: "Increased torque for larger tactical frames.", img: "/products/3120_2.png",
    specs: [{ l: "KV Rating", v: "600 KV" }, { l: "Max Thrust", v: "2.8 kg" }, { l: "Max Power", v: "950 W" }, { l: "Weight", v: "95 g" }]
  },
  {
    id: 15, name: "FA-5015", series: "Falcon ", title: "Falcon ", desc: "Flagship tactical core for high-stress missions.", img: "/products/3120_2.png",
    specs: [{ l: "KV Rating", v: "380 KV" }, { l: "Max Thrust", v: "4.5 kg" }, { l: "Max Power", v: "1400 W" }, { l: "Weight", v: "135 g" }]
  },

  {
    id: 11, name: "CD-3010 Elite", series: "Condor", title: "Condor", desc: "Ultra-efficient motor for long-range reconnaissance missions.", img: "/products/3120_2.png",
    specs: [{ l: "KV Rating", v: "150 KV" }, { l: "Max Thrust", v: "6.5 kg" }, { l: "Max Power", v: "1350 W" }, { l: "Weight", v: "160 g" }]
  },
  {
    id: 16, name: "CD-2206", series: "Condor", title: "Condor", desc: "Compact efficiency for smaller surveillance drones.", img: "/products/2206_motor.png",
    specs: [{ l: "KV Rating", v: "2000 KV" }, { l: "Max Thrust", v: "1.2 kg" }, { l: "Max Power", v: "380 W" }, { l: "Weight", v: "38 g" }]
  },
  {
    id: 17, name: "CD-4012", series: "Condor", title: "Condor", desc: "Balanced performance for mid-size long-endurance platforms.", img: "/products/4006_20.png",
    specs: [{ l: "KV Rating", v: "280 KV" }, { l: "Max Thrust", v: "3.5 kg" }, { l: "Max Power", v: "880 W" }, { l: "Weight", v: "140 g" }]
  },
  {
    id: 29, name: "CD-6210 COAXIAL", series: "Condor", title: "Condor", desc: "High-voltage coaxial propulsion for defence and high-altitude logistics.", img: "/products/hb_6206.png",
    specs: [{ l: "KV Rating", v: "145 KV" }, { l: "Max Thrust", v: "11.2 kg" }, { l: "Max Power", v: "2800 W" }, { l: "Weight", v: "380 g" }]
  },
  {
    id: 12, name: "CD-5015 Stealth", series: "Condor", title: "Condor", desc: "Acoustically-optimized propulsion for stealth UAV ops.", img: "/products/4006_20.png",
    specs: [{ l: "KV Rating", v: "180 KV" }, { l: "Max Thrust", v: "4.2 kg" }, { l: "Max Power", v: "1100 W" }, { l: "Weight", v: "195 g" }]
  },

  {
    id: 8, name: "PR-1550 CFRP", series: "Propellers", title: "Folding Series", desc: "High-grade Carbon Fiber Reinforced Polymer propellers for peak efficiency.", img: "/products/exploded.png",
    specs: [{ l: "Diameter", v: "15.5″" }, { l: "Pitch", v: "5.0″" }, { l: "Material", v: "CFRP" }, { l: "Type", v: "Folding" }]
  },
  {
    id: 9, name: "PR-3010 Heavy", series: "Propellers", title: "Fixed Series", desc: "Large diameter fixed propellers engineered for heavy cargo lift missions.", img: "/products/3120_2.png",
    specs: [{ l: "Diameter", v: "30″" }, { l: "Pitch", v: "10″" }, { l: "Material", v: "Carbon" }, { l: "Type", v: "Fixed" }]
  }
];

export const specsData = {
  "Eagle": {
    name: "EB-8320 PRO",
    desc: "Every parameter measured under controlled laboratory conditions. Pure data, no estimates.",
    image: "/products/eb8320.png",
    specRows: [
      { label: "KV Rating", value: "120 KV", orange: true },
      { label: "Stator Size", value: "100 × 20 mm", orange: false },
      { label: "Max Thrust", value: "12.5 kg", orange: false },
      { label: "Max Power", value: "3200 W", orange: false },
      { label: "Propeller Range", value: "30″ – 34″", orange: false },
      { label: "Weight", value: "485 g", orange: false },
      { label: "Operating Voltage", value: "12S LiPo", orange: true },
      { label: "Shaft Diameter", value: "12 mm", orange: false },
    ],
    bars: [
      { label: "Thrust Efficiency", pct: 94 },
      { label: "Thermal Dissipation", pct: 88 },
      { label: "Durability Index", pct: 97 },
      { label: "Power-to-Weight", pct: 91 },
    ]
  },
  "Hummingbird": {
    name: "HB-6206 Master",
    desc: "Measured under high-stress agile flight simulation frameworks.",
    image: "/products/hb_6206.png",
    specRows: [
      { label: "KV Rating", value: "300 KV", orange: true },
      { label: "Stator Size", value: "62 × 06 mm", orange: false },
      { label: "Max Thrust", value: "4.8 kg", orange: false },
      { label: "Max Power", value: "1800 W", orange: false },
      { label: "Propeller Range", value: "18″ – 22″", orange: false },
      { label: "Weight", value: "210 g", orange: false },
      { label: "Operating Voltage", value: "6S LiPo", orange: true },
      { label: "Response Rate", value: "0.2ms", orange: false },
    ],
    bars: [
      { label: "Thrust Efficiency", pct: 89 },
      { label: "Thermal Dissipation", pct: 95 },
      { label: "Agility Index", pct: 98 },
      { label: "Power-to-Weight", pct: 96 },
    ]
  },
  "Godwick": {
    name: "GW-4008 Stealth",
    desc: "Optimised for ultra-low acoustic footprint and endurance.",
    image: "/products/gw4008.png",
    specRows: [
      { label: "KV Rating", value: "180 KV", orange: true },
      { label: "Stator Size", value: "40 × 08 mm", orange: false },
      { label: "Max Thrust", value: "3.2 kg", orange: false },
      { label: "Max Power", value: "950 W", orange: false },
      { label: "Acoustic Profile", value: "< 45 dB", orange: false },
      { label: "Weight", value: "145 g", orange: false },
      { label: "Operating Voltage", value: "6S-8S", orange: true },
      { label: "Endurance", value: "120+ mins", orange: false },
    ],
    bars: [
      { label: "Acoustic Stealth", pct: 98 },
      { label: "Thermal Dissipation", pct: 85 },
      { label: "Endurance Index", pct: 96 },
      { label: "Reliability", pct: 99 },
    ]
  },
  "Falcon ": {
    name: "FA-3110 Tactical",
    desc: "Precision response and extreme durability for tactical mission profiles.",
    image: "/products/3120_2.png",
    specRows: [
      { label: "KV Rating", value: "900 KV", orange: true },
      { label: "Stator Size", value: "31 × 10 mm", orange: false },
      { label: "Max Thrust", value: "1.8 kg", orange: false },
      { label: "Max Power", value: "700 W", orange: false },
      { label: "Response Time", value: "< 5ms", orange: false },
      { label: "Weight", value: "55 g", orange: false },
      { label: "Operating Voltage", value: "4S-6S", orange: true },
      { label: "Durability", value: "5000+ hrs", orange: false },
    ],
    bars: [
      { label: "Tactical Agility", pct: 99 },
      { label: "Response Rate", pct: 97 },
      { label: "Mechanical Integrity", pct: 95 },
      { label: "System Uptime", pct: 98 },
    ]
  },
  "Condor": {
    name: "CD-5015 Master",
    desc: "Long-endurance aero-optimized core for high-altitude mission stability.",
    image: "/products/hb_6206.png",
    specRows: [
      { label: "KV Rating", value: "180 KV", orange: true },
      { label: "Stator Size", value: "50 × 15 mm", orange: false },
      { label: "Max Thrust", value: "4.8 kg", orange: false },
      { label: "Max Power", value: "1200 W", orange: false },
      { label: "Propeller Range", value: "18″ – 22″", orange: false },
      { label: "Weight", value: "210 g", orange: false },
      { label: "Operating Voltage", value: "8S-12S LiPo", orange: true },
      { label: "Efficiency Rate", value: "92%", orange: false },
    ],
    bars: [
      { label: "Endurance Index", pct: 98 },
      { label: "Thermal Stability", pct: 94 },
      { label: "Acoustic Dampening", pct: 96 },
      { label: "Power-to-Weight", pct: 89 },
    ]
  }, "Propellers": {
    name: "FA-15.2x5 Foldable",
    desc: "Wind tunnel tested aerodynamic geometries for peak thrust generation.",
    image: "/products/exploded.png",
    specRows: [
      { label: "Diameter/Pitch", value: "15.2 × 5.0", orange: true },
      { label: "Material", value: "Carbon Fiber", orange: false },
      { label: "Weight (pair)", value: "38 g", orange: false },
      { label: "Hub Structure", value: "Foldable", orange: false },
      { label: "Thrust Ratio", value: "+14% Avg", orange: false },
      { label: "Vibration Level", value: "< 0.1g", orange: false },
      { label: "Surface Finish", value: "Glossy", orange: true },
      { label: "Mount Type", value: "M3 / 12mm", orange: false },
    ],
    bars: [
      { label: "Aerodynamic Eff.", pct: 95 },
      { label: "Tensile Strength", pct: 92 },
      { label: "Vibration Damping", pct: 90 },
      { label: "Fold Mechanism", pct: 96 },
    ]
  }
};

export const features = [
  { icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z", name: "Military-Grade Sealing", desc: "IP67-rated enclosure protects against dust, moisture, and extreme operational environments." },
  { icon: "M13 2L3 14h9l-1 8 10-12h-9l1-8z", name: "High-Efficiency Winding", desc: "Custom copper winding geometry delivers 94%+ electrical efficiency across the power curve." },
  { icon: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z", name: "Precision Balancing", desc: "CNC-machined rotor balanced to G1.0 grade eliminates vibration at full speed." },
  { icon: "M12 22V12M12 12C12 12 8 9 8 6a4 4 0 0 1 8 0c0 3-4 6-4 6z", name: "Extended Lifespan", desc: "Aerospace-grade magnets and hardened bearing races rated for 2000+ flight hours." },
  { icon: "M4 4h16v16H4zM12 8v8M8 12h8", name: "Thermal Management", desc: "Active heat dissipation maintains peak efficiency under high-stress industrial operations." },
  { icon: "M20 7h-9L7 3H4v18h16V7z", name: "Modular Architecture", desc: "Interchangeable component ecosystem designed for tactical UAV rapid-response and maintenance." },
];

export const heroProducts = [
  { name: "HB-6206", sub: "300KV MASTER EDITION", img: "/products/exploded.png" },
  { name: "GW-4008 Godwick", sub: "150KV PRECISION", img: "/products/gw4008.png" },
  { name: "EB-8320 Eagle", sub: "120KV HIGH TORQUE", img: "/products/eb8320.png" },
  { name: "GW-4006 Prowler", sub: "180KV STEALTH", img: "/products/gw_4006.png" },
  { name: "EB-4220 Apex", sub: "210KV ALL-ROUNDER", img: "/products/eb_4220.png" },
];
