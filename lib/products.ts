export interface Product {
  slug: string;
  name: string;
  category: string;
  specs: Record<string, string>;
  applications: string[];
}

export const products: Product[] = [
  {
    slug: "industrial-pump-300",
    name: "Industrial Pump 300",
    category: "Pumps",
    specs: {
      flow: "120-300 GPM",
      pressure: "150-300 PSI",
      material: "Stainless Steel 316",
      efficiency: "88-92%",
    },
    applications: ["Water Treatment", "HVAC", "Industrial Process"],
  },
  {
    slug: "precision-motor-500",
    name: "Precision Motor 500",
    category: "Motors",
    specs: {
      power: "5-15 HP",
      speed: "1750-3600 RPM",
      efficiency: "95%",
      voltage: "24-480V AC",
    },
    applications: ["Automated Machinery", "Conveyor Systems", "Robotics"],
  },
  {
    slug: "control-system-200",
    name: "Control System 200",
    category: "Controls",
    specs: {
      voltage: "24-480V AC",
      channels: "4-16",
      protocol: "Modbus/Profibus",
      response: "<10ms",
    },
    applications: ["Process Control", "SCADA Systems", "Industrial Automation"],
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
