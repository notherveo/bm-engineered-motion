"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Layers, Gauge, ArrowUpRight } from "lucide-react";

const products = [
  {
    id: "pump-300",
    name: "Industrial Pump 300",
    category: "Pumps",
    icon: Layers,
    specs: { flow: "120-300 GPM", pressure: "150-300 PSI", material: "Stainless Steel 316" },
  },
  {
    id: "motor-500",
    name: "Precision Motor 500",
    category: "Motors",
    icon: Gauge,
    specs: { power: "5-15 HP", speed: "1750-3600 RPM", efficiency: "95%" },
  },
  {
    id: "control-200",
    name: "Control System 200",
    category: "Controls",
    icon: Layers,
    specs: { voltage: "24-480V", channels: "4-16", protocol: "Modbus/Profibus" },
  },
];

export function ProductSelector() {
  const [selected, setSelected] = useState(products[0]);
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
      <div className="flex overflow-x-auto gap-4 p-4 border-b border-gray-200 scrollbar-hide">
        {products.map((product) => {
          const Active = product.icon;
          const isSelected = selected.id === product.id;
          return (
            <button
              key={product.id}
              onClick={() => setSelected(product)}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all whitespace-nowrap ${
                isSelected
                  ? "bg-[#FF6B1A] text-white shadow-lg"
                  : "bg-gray-50 text-gray-700 hover:bg-gray-100"
              }`}
            >
              <Active className="size-5" />
              <span className="font-medium text-sm">{product.name}</span>
            </button>
          );
        })}
      </div>

      <div className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center text-gray-600">
            <selected.icon className="size-6" />
          </div>
          <div>
            <h3 className="font-bold text-lg">{selected.name}</h3>
            <p className="text-sm text-gray-500">{selected.category}</p>
          </div>
        </div>

        <div className="bg-gray-50 rounded-xl p-4 mb-4">
          <h4 className="font-semibold text-sm mb-3">Key Specifications</h4>
          <div className="grid grid-cols-2 gap-3">
            {Object.entries(selected.specs).map(([key, value]) => (
              <div key={key} className="flex justify-between text-sm">
                <span className="text-gray-500">{key}</span>
                <span className="font-mono font-medium">{value}</span>
              </div>
            ))}
          </div>
        </div>

        <button className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#FF6B1A] text-white font-medium hover:bg-[#e55a00] transition-colors">
          View Full Specifications <ArrowUpRight className="size-4" />
        </button>
      </div>
    </div>
  );
}
