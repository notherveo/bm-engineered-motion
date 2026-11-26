import Link from "next/link";
import { ArrowUpRight, Layers, Gauge, BookOpen } from "lucide-react";
import { products } from "@/lib/products";

const categories = [
  { name: "Pumps", count: 42, icon: Layers },
  { name: "Motors", count: 38, icon: Gauge },
  { name: "Controls", count: 25, icon: BookOpen },
  { name: "Accessories", count: 22, icon: Layers },
];

export default function ProductsPage() {
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
                Products
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-xl">
                Browse our complete catalog of precision-engineered components.
                Filter by category, specifications, and application.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {categories.map((category) => {
                  const Active = category.icon;
                  return (
                    <Link
                      key={category.name}
                      href={`/products/${category.name.toLowerCase()}`}
                      className="flex items-center gap-4 p-4 rounded-xl bg-white border border-gray-200 hover:border-[#FF6B1A] hover:shadow-lg transition-all"
                    >
                      <div className="w-12 h-12 rounded-lg bg-[#FF6B1A]/10 flex items-center justify-center text-[#FF6B1A]">
                        <Active className="size-6" />
                      </div>
                      <div className="flex-1">
                        <p className="font-bold text-gray-900">{category.name}</p>
                        <p className="text-sm text-gray-500">{category.count} products</p>
                      </div>
                      <ArrowUpRight className="size-4 text-gray-400" />
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
                <h3 className="font-bold text-lg mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/products/industrial-pump-300" className="text-sm text-gray-600 hover:text-[#FF6B1A] flex items-center gap-2">
                      Featured Products <ArrowUpRight className="size-3" />
                    </Link>
                  </li>
                  <li>
                    <Link href="/applications" className="text-sm text-gray-600 hover:text-[#FF6B1A] flex items-center gap-2">
                      Applications <ArrowUpRight className="size-3" />
                    </Link>
                  </li>
                  <li>
                    <Link href="/resources" className="text-sm text-gray-600 hover:text-[#FF6B1A] flex items-center gap-2">
                      Resources <ArrowUpRight className="size-3" />
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="text-sm text-gray-600 hover:text-[#FF6B1A] flex items-center gap-2">
                      Request a Quote <ArrowUpRight className="size-3" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.slice(0, 3).map((product) => {
              const Active = product.icon;
              return (
                <Link
                  key={product.slug}
                  href={`/products/${product.slug}`}
                  className="group block overflow-hidden rounded-2xl bg-white border border-gray-200 hover:border-[#FF6B1A] hover:shadow-xl transition-all"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={`https://picsum.photos/seed/${product.slug}/600/400`}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Active className="size-4 text-[#FF6B1A]" />
                      <span className="text-xs font-mono text-gray-500">{product.category}</span>
                    </div>
                    <h3 className="font-bold text-lg mb-2 group-hover:text-[#FF6B1A] transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-500 mb-4">
                      {Object.entries(product.specs).slice(0, 2).map(([k, v]) => `${k}: ${v}`).join(" • ")}
                    </p>
                    <span className="inline-flex items-center gap-1 text-sm text-[#FF6B1A] font-medium">
                      View Specifications <ArrowUpRight className="size-3" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
