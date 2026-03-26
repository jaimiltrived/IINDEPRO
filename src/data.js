// ─── PRODUCTS ─────────────────────────────────────────────────────────────────
export const PRODS = [
  // Hummingbird Series
  { id: 'hb1',  s: 'Hummingbird', name: 'HB-2205',  kv: '2300KV', pwr: '250W',   wt: '28g',  volt: '3-4S',  prop: '5"',   cool: 'Open Stator', img: 'hb_2205' },
  { id: 'hb2',  s: 'Hummingbird', name: 'HB-2306',  kv: '1900KV', pwr: '350W',   wt: '33g',  volt: '4S',    prop: '5-6"', cool: 'Open Stator', img: 'hb_2306' },
  { id: 'hb3',  s: 'Hummingbird', name: 'HB-6206',  kv: '300KV',  pwr: '1800W',  wt: '185g', volt: '6-12S', prop: '18"',  cool: 'Vortex Fan',  img: 'hb_6206' },
  { id: 'hb4',  s: 'Hummingbird', name: 'HB-8308',  kv: '120KV',  pwr: '3200W',  wt: '310g', volt: '12S',   prop: '24"',  cool: 'Vortex Fan',  img: 'hb_8308' },
  // Godwick Series
  { id: 'gw1',  s: 'Godwick',     name: 'GW-4008',  kv: '600KV',  pwr: '1200W',  wt: '89g',  volt: '6S',    prop: '12"',  cool: 'Open Stator', img: 'gw_4008' },
  { id: 'gw2',  s: 'Godwick',     name: 'GW-5010',  kv: '400KV',  pwr: '2200W',  wt: '145g', volt: '6-10S', prop: '15"',  cool: 'Vortex Fan',  img: 'gw_5010' },
  { id: 'gw3',  s: 'Godwick',     name: 'GW-6012',  kv: '260KV',  pwr: '3800W',  wt: '228g', volt: '12S',   prop: '22"',  cool: 'Vortex Fan',  img: 'gw_6012' },
  // Eagle Series
  { id: 'eb1',  s: 'Eagle',       name: 'EB-6320',  kv: '480KV',  pwr: '2800W',  wt: '195g', volt: '6-10S', prop: '18"',  cool: 'Vortex Fan',  img: 'eb_6320' },
  { id: 'eb2',  s: 'Eagle',       name: 'EB-8320',  kv: '200KV',  pwr: '5500W',  wt: '398g', volt: '12S',   prop: '28"',  cool: 'Dual Vortex', img: 'eb_8320' },
  { id: 'eb3',  s: 'Eagle',       name: 'EB-9225',  kv: '120KV',  pwr: '8000W',  wt: '520g', volt: '12-14S',prop: '32"',  cool: 'Dual Vortex', img: 'eb_9225' },
  // Falcon 
  { id: 'fa1',  s: 'Falcon',      name: 'FA-3110',  kv: '900KV',  pwr: '700W',   wt: '55g',  volt: '4-6S',  prop: '8"',   cool: 'Open Stator', img: 'fa_3110' },
  { id: 'fa2',  s: 'Falcon',      name: 'FA-5008',  kv: '340KV',  pwr: '1600W',  wt: '118g', volt: '6-8S',  prop: '14"',  cool: 'Vortex Fan',  img: 'fa_5008' },
];

// ─── SPEC TABLES ──────────────────────────────────────────────────────────────
export const SPEC_DATA = {
  hb: [
    ['Model', 'KV', 'Stator', 'Max Pwr', 'Voltage', 'Thrust', 'Weight', 'Prop'],
    ['HB-2205', '2300KV', '22×05mm', '250W',  '3-4S', '620g',  '28g',  '5"'],
    ['HB-2306', '1900KV', '23×06mm', '350W',  '4S',   '890g',  '33g',  '5-6"'],
    ['HB-6206', '300KV',  '62×06mm', '1800W', '6-12S','4.8kg', '185g', '18"'],
    ['HB-8308', '120KV',  '83×08mm', '3200W', '12S',  '9.2kg', '310g', '24"'],
  ],
  gw: [
    ['Model', 'KV', 'Stator', 'Max Pwr', 'Voltage', 'Thrust', 'Weight', 'Prop'],
    ['GW-4008', '600KV',  '40×08mm', '1200W', '6S',    '3.2kg', '89g',  '12"'],
    ['GW-5010', '400KV',  '50×10mm', '2200W', '6-10S', '5.8kg', '145g', '15"'],
    ['GW-6012', '260KV',  '60×12mm', '3800W', '12S',   '9.6kg', '228g', '22"'],
  ],
  eb: [
    ['Model', 'KV', 'Stator', 'Max Pwr', 'Voltage', 'Thrust', 'Weight', 'Prop'],
    ['EB-6320', '480KV',  '63×20mm', '2800W', '6-10S', '7.1kg', '195g', '18"'],
    ['EB-8320', '200KV',  '83×20mm', '5500W', '12S',   '14kg',  '398g', '28"'],
    ['EB-9225', '120KV',  '92×25mm', '8000W', '12-14S','19kg',  '520g', '32"'],
  ],
  fa: [
    ['Model', 'KV', 'Stator', 'Max Pwr', 'Voltage', 'Thrust', 'Weight', 'Prop'],
    ['FA-3110', '900KV',  '31×10mm', '700W',  '4-6S',  '1.8kg', '55g',  '8"'],
    ['FA-5008', '340KV',  '50×08mm', '1600W', '6-8S',  '4.2kg', '118g', '14"'],
  ],
};

// ─── APPLICATIONS ─────────────────────────────────────────────────────────────
export const APPLICATIONS = [
  {
    icon: '🚁',
    title: 'Heavy Lift Cargo',
    desc: 'Designed for commercial payload delivery platforms requiring sustained high-thrust output and thermal resilience in all-weather conditions.',
    motors: ['EB-8320', 'EB-9225', 'GW-6012'],
  },
  {
    icon: '🌾',
    title: 'Precision Agriculture',
    desc: 'Long endurance crop spraying and field mapping with torque-stable motors optimised for large-diameter slow-spin propellers.',
    motors: ['HB-6206', 'HB-8308', 'GW-5010'],
  },
  {
    icon: '🎯',
    title: 'FPV Racing',
    desc: 'Razor-sharp throttle response and extreme power-to-weight ratio for competitive 5" race builds pushing the limits of speed.',
    motors: ['HB-2205', 'HB-2306', 'FA-3110'],
  },
  {
    icon: '📡',
    title: 'ISR & Surveillance',
    desc: 'Ultra-quiet low-vibration operation for stable gimbal platforms, ideal for law enforcement and border security operations.',
    motors: ['EB-6320', 'GW-4008', 'FA-5008'],
  },
  {
    icon: '🔬',
    title: 'Scientific Research',
    desc: 'Precision telemetry-ready motors with CAN Bus integration for atmospheric sampling, LiDAR mapping and environmental surveys.',
    motors: ['EB-8320', 'GW-6012', 'HB-8308'],
  },
  {
    icon: '🏗️',
    title: 'Industrial Inspection',
    desc: 'Robust IP-rated systems engineered for infrastructure inspection in harsh environments including offshore and high-altitude sites.',
    motors: ['EB-9225', 'EB-8320', 'GW-6012'],
  },
];