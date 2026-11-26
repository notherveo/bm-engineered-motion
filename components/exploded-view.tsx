"use client";

import { useScroll, useTransform, useInView, motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const layers = [
  {
    name: "Housing",
    color: "bg-gray-800",
    y: -120,
    z: 0,
    w: 360,
    h: 200,
    x: -180,
    y: -100,
  },
  {
    name: "Rotor Assembly",
    color: "bg-[#FF6B1A]",
    y: -80,
    z: 1,
    w: 280,
    h: 160,
    x: -140,
    y: -80,
  },
  {
    name: "Impeller",
    color: "bg-blue-600",
    y: -40,
    z: 2,
    w: 240,
    h: 140,
    x: -120,
    y: -60,
  },
  {
    name: "Seal Ring",
    color: "bg-teal-500",
    y: -20,
    z: 3,
    w: 200,
    h: 120,
    x: -100,
    y: -40,
  },
  {
    name: "Mounting Base",
    color: "bg-gray-700",
    y: 0,
    z: 4,
    w: 320,
    h: 180,
    x: -160,
    y: -90,
  },
];

export function ExplodedView() {
  const { scrollY } = useScroll();
  const inView = useInView({ once: true });
  const y = useTransform(scrollY, [0, 1500], [0, 1000]);
  const opacity = useTransform(scrollY, [0, 1000, 1500], [0, 1, 1]);

  return (
    <div className="relative h-[1200px] overflow-hidden bg-[#F9FAFB]">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative h-full flex items-center justify-center">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-[600px] h-[600px] transition-transform duration-1000 ease-out" style={{ transform: `translate3d(0, ${y}px, 0)` }}>
            {layers.map((layer, i) => (
              <motion.div
                key={layer.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: opacity, scale: 1 }}
                transition={{ delay: i * 0.2, duration: 0.5 }}
                className={`absolute rounded-xl shadow-lg ${layer.color}`}
                style={{
                  width: layer.w,
                  height: layer.h,
                  left: layer.x,
                  top: layer.y,
                  zIndex: layer.z,
                }}
              >
                <div className="absolute inset-0 border-2 border-dashed border-white/30 rounded-xl" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none">
        {layers.map((layer, i) => (
          <motion.div
            key={layer.name}
            initial={{ opacity: 0, x: 0, y: 0 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: i * 0.3, duration: 0.5 }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center gap-4"
            style={{
              zIndex: 10,
              top: `${i * 60}px`,
              left: `${i * 60}px`,
            }}
          >
            <div className="w-8 h-8 rounded-full bg-[#FF6B1A] flex items-center justify-center text-white text-xs font-bold">
              {i + 1}
            </div>
            <div className="bg-white/90 backdrop-blur px-4 py-2 rounded-lg shadow-lg">
              <p className="font-bold text-sm">{layer.name}</p>
              <p className="text-xs text-gray-500">Component {i + 1}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#F9FAFB] to-transparent pointer-events-none" />
      <div className="absolute bottom-8 left-8 right-8 flex justify-center">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#FF6B1A] text-white font-medium"
        >
          View Full Specifications <ArrowUpRight className="size-4" />
        </motion.button>
      </div>
    </div>
  );
}
