"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Download } from "lucide-react";

const specs = [
  { category: "Performance", items: [
    { label: "Flow Rate", value: "120-300 GPM" },
    { label: "Pressure", value: "150-300 PSI" },
    { label: "Efficiency", value: "88-92%" },
  ]},
  { category: "Construction", items: [
    { label: "Material", value: "Stainless Steel 316" },
    { label: "Weight", value: "45-65 lbs" },
    { label: "Dimensions", value: "24 x 18 x 16 in" },
  ]},
  { category: "Electrical", items: [
    { label: "Voltage", value: "24-480V AC" },
    { label: "Frequency", value: "50/60 Hz" },
    { label: "Protection", value: "IP55" },
  ]},
];

export function SpecTable() {
  const [expanded, setExpanded] = useState(0);
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Category</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Specification</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Value</th>
            </tr>
          </thead>
          <tbody>
            {specs.map((spec, i) => (
              <motion.tr
                key={spec.category}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
              >
                <td className="px-6 py-4 font-semibold text-gray-900">{spec.category}</td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  {spec.items.map((item) => (
                    <div key={item.label}>
                      <span className="font-medium text-gray-900">{item.label}:</span> {item.value}
                    </div>
                  ))}
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {expanded === i ? (
                    <button onClick={() => setExpanded(i)} className="text-[#FF6B1A] hover:text-[#e55a00]">
                      Collapse
                    </button>
                  ) : (
                    <button onClick={() => setExpanded(i)} className="text-[#FF6B1A] hover:text-[#e55a00]">
                      Expand
                    </button>
                  )}
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="p-4 bg-gray-50 border-t border-gray-200 flex items-center justify-between">
        <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900">
          <Download className="size-4" />
          Download Full Datasheet
        </button>
        <span className="text-xs text-gray-500">PDF • 2.4 MB</span>
      </div>
    </div>
  );
}
