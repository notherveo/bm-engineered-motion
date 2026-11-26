import Link from "next/link";
import { ArrowUpRight, Layers, Gauge, BookOpen, Mail, ArrowLeft } from "lucide-react";
import { Counter } from "@/components/counter";

const stats = [
  { label: "Products", value: 127, icon: Layers },
  { label: "Applications", value: 48, icon: Gauge },
  { label: "Datasheets", value: 89, icon: BookOpen },
  { label: "Global Support", value: "24/7", icon: Mail },
];

const applications = [
  {
    title: "Water Treatment",
    description: "Precision flow control for municipal and industrial water systems.",
    image: "https://picsum.photos/seed/water/600/400",
  },
  {
    title: "HVAC Systems",
    description: "Reliable components for commercial and industrial climate control.",
    image: "https://picsum.photos/seed/hvac/600/400",
  },
  {
    title: "Oil & Gas",
    description: "Rugged equipment designed for demanding industrial environments.",
    image: "https://picsum.photos/seed/oil/600/400",
  },
  {
    title: "Food Processing",
    description: "Certified sanitary components for food and beverage production.",
    image: "https://picsum.photos/seed/food/600/400",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0F2A44_1px,transparent_1px),linear-gradient(to_bottom,#0F2A44_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-50 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#F9FAFB]/80 via-transparent to-[#F9FAFB]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="px-3 py-1 rounded-full bg-[#FF6B1A]/10 text-[#FF6B1A] text-xs font-mono font-medium">
                  ENGINEERED FOR PRECISION
                </span>
                <span className="px-3 py-1 rounded-full bg-[#0F2A44]/10 text-[#0F2A44] text-xs font-mono font-medium">
                  CERTIFIED QUALITY
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight mb-6">
                Motion, <span className="text-[#FF6B1A]">Engineered.</span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 max-w-lg">
                Precision-engineered pumps, motors, and control systems for
                demanding industrial applications. Custom specifications,
                certified quality, global support.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#FF6B1A] text-white font-medium hover:bg-[#e55a00] transition-colors"
                >
                  Explore Products <ArrowUpRight className="size-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-gray-300 text-gray-700 font-medium hover:bg-gray-100 transition-colors"
                >
                  Request a Quote
                </Link>
              </div>

              <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <Counter value={stat.value} prefix={stat.label} />
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-[#FF6B1A] rounded-3xl rotate-3 opacity-10" />
              <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
                <img
                  src="https://picsum.photos/seed/hero/800/600"
                  alt="Industrial pump component"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-8">
                  <p className="text-white font-mono text-sm mb-1">FEATURED PRODUCT</p>
                  <p className="text-white font-bold text-xl">Industrial Pump 300</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Applications
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Engineered solutions for industries that demand reliability and
              precision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {applications.map((app, i) => (
              <div
                key={app.title}
                className="group relative overflow-hidden rounded-2xl bg-gray-50"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={app.image}
                    alt={app.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-[#FF6B1A] text-xs font-mono font-medium mb-1">
                    APPLICATION
                  </p>
                  <h3 className="text-white font-bold text-xl mb-2">
                    {app.title}
                  </h3>
                  <p className="text-gray-300 text-sm">{app.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#0F2A44] relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#FF6B1A_1px,transparent_1px),linear-gradient(to_bottom,#FF6B1A_1px,transparent_1px)] bg-[size:80px_80px] opacity-10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Let our engineering team help you find the perfect solution for your
            application.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#FF6B1A] text-white font-medium hover:bg-[#e55a00] transition-colors"
          >
            Request a Quote <ArrowUpRight className="size-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
