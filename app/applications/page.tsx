import Link from "next/link";
import { ArrowUpRight, Layers, Gauge, BookOpen } from "lucide-react";

const industries = [
  {
    title: "Water Treatment",
    description: "Precision flow control for municipal and industrial water systems, ensuring consistent performance and regulatory compliance.",
    image: "https://picsum.photos/seed/water/800/600",
    products: ["Industrial Pump 300", "Precision Motor 500"],
  },
  {
    title: "HVAC Systems",
    description: "Reliable components for commercial and industrial climate control, delivering efficient temperature regulation across large facilities.",
    image: "https://picsum.photos/seed/hvac/800/600",
    products: ["Control System 200", "Industrial Pump 300"],
  },
  {
    title: "Oil & Gas",
    description: "Rugged equipment designed for demanding industrial environments, built to withstand harsh conditions and extended operational cycles.",
    image: "https://picsum.photos/seed/oil/800/600",
    products: ["Precision Motor 500", "Control System 200"],
  },
  {
    title: "Food Processing",
    description: "Certified sanitary components for food and beverage production, meeting strict hygiene standards and safety requirements.",
    image: "https://picsum.photos/seed/food/800/600",
    products: ["Industrial Pump 300", "Control System 200"],
  },
];

export default function ApplicationsPage() {
  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-3 mb-8">
            <ArrowUpRight className="size-4 text-gray-400" />
            <span className="text-gray-500 text-sm">Back to Home</span>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Industries We Serve
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-xl">
                Our engineered solutions power critical operations across multiple industries.
                From precision manufacturing to large-scale infrastructure, we deliver the reliability your applications demand.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {industries.map((industry) => (
                  <div key={industry.title} className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={industry.image}
                        alt={industry.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="font-bold text-xl mb-2">{industry.title}</h3>
                      <p className="text-gray-600 mb-4">{industry.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {industry.products.map((product) => (
                          <span key={product} className="px-2 py-1 rounded-full bg-gray-100 text-xs text-gray-600">
                            {product}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
                <h3 className="font-bold text-lg mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/products" className="text-sm text-gray-600 hover:text-[#FF6B1A] flex items-center gap-2">
                      All Products <ArrowUpRight className="size-3" />
                    </Link>
                  </li>
                  <li>
                    <Link href="/resources" className="text-sm text-gray-600 hover:text-[#FF6B1A] flex items-center gap-2">
                      Technical Resources <ArrowUpRight className="size-3" />
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="text-sm text-gray-600 hover:text-[#FF6B1A] flex items-center gap-2">
                      Request a Quote <ArrowUpRight className="size-3" />
                    </Link>
                  </li>
                </ul>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h3 className="font-bold text-lg mb-4">Need Custom Solutions?</h3>
                  <Link
                    href="/contact"
                    className="block w-full text-center px-4 py-3 rounded-full bg-[#FF6B1A] text-white font-medium hover:bg-[#e55a00] transition-colors"
                  >
                    Contact Engineering
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
