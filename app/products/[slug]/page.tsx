import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, ArrowLeft, Download } from "lucide-react";
import { products, getProduct } from "@/lib/products";

export const generateStaticParams = () => {
  return products.map((p) => ({ slug: p.slug }));
};

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/products" className="flex items-center gap-3 mb-8">
            <ArrowLeft className="size-4 text-gray-400" />
            <span className="text-gray-500 text-sm">Back to Products</span>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                <img
                  src={`https://picsum.photos/seed/${product.slug}/800/600`}
                  alt={product.name}
                  className="w-full h-auto object-cover"
                />
              </div>

              <div className="mt-8">
                <div className="flex items-center gap-3 mb-6">
                  <span className="px-3 py-1 rounded-full bg-[#FF6B1A]/10 text-[#FF6B1A] text-xs font-mono font-medium">
                    {product.category}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#0F2A44]/10 text-[#0F2A44] text-xs font-mono font-medium">
                    IN STOCK
                  </span>
                </div>

                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {product.name}
                </h1>

                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Specification</th>
                          <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Value</th>
                        </tr>
                      </thead>
                      <tbody>
                        {Object.entries(product.specs).map(([key, value]) => (
                          <tr key={key} className="border-b border-gray-100">
                            <td className="px-6 py-4 font-medium text-gray-900">{key}</td>
                            <td className="px-6 py-4 text-gray-600">{value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#FF6B1A] text-white font-medium hover:bg-[#e55a00] transition-colors"
                  >
                    Request a Quote <ArrowUpRight className="size-4" />
                  </Link>
                  <button className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-gray-300 text-gray-700 font-medium hover:bg-gray-100 transition-colors">
                    <Download className="size-4" />
                    Download Datasheet
                  </button>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
                <h3 className="font-bold text-lg mb-4">Applications</h3>
                <ul className="space-y-2">
                  {product.applications.map((app) => (
                    <li key={app}>
                      <span className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-50 text-sm text-gray-600">
                        <ArrowUpRight className="size-3 text-[#FF6B1A]" />
                        {app}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h3 className="font-bold text-lg mb-4">Support</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link href="/contact" className="text-sm text-[#FF6B1A] hover:text-[#e55a00]">
                        Technical Support
                      </Link>
                    </li>
                    <li>
                      <Link href="/resources" className="text-sm text-[#FF6B1A] hover:text-[#e55a00]">
                        Documentation
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact" className="text-sm text-[#FF6B1A] hover:text-[#e55a00]">
                        Request a Quote
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
