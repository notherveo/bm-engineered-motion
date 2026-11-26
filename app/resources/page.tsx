import Link from "next/link";
import { ArrowUpRight, BookOpen, FileText, Layers, Gauge } from "lucide-react";

const resources = [
  {
    title: "Industrial Pump 300 Datasheet",
    description: "Complete technical specifications, performance curves, and installation guidelines.",
    type: "Datasheet",
    icon: FileText,
    downloads: 1247,
    size: "2.4 MB",
  },
  {
    title: "Precision Motor 500 Technical Manual",
    description: "Comprehensive operating procedures, troubleshooting guide, and maintenance schedules.",
    type: "Manual",
    icon: BookOpen,
    downloads: 892,
    size: "5.1 MB",
  },
  {
    title: "Control System 200 Integration Guide",
    description: "Step-by-step integration procedures, protocol specifications, and configuration examples.",
    type: "Guide",
    icon: Layers,
    downloads: 654,
    size: "1.8 MB",
  },
  {
    title: "Installation Best Practices",
    description: "Industry-standard installation procedures and safety considerations for all product lines.",
    type: "Guide",
    icon: Gauge,
    downloads: 2103,
    size: "3.2 MB",
  },
  {
    title: "Troubleshooting Reference",
    description: "Quick reference guide for common issues and their solutions across all products.",
    type: "Reference",
    icon: BookOpen,
    downloads: 3421,
    size: "1.5 MB",
  },
  {
    title: "CAD Drawings Package",
    description: "Complete 3D models and 2D drawings for all product lines in multiple formats.",
    type: "CAD",
    icon: Layers,
    downloads: 1876,
    size: "45.2 MB",
  },
];

export default function ResourcesPage() {
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
                Technical Resources
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-xl">
                Comprehensive documentation, datasheets, and technical guides to help you
                select, install, and maintain our products.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {resources.map((resource) => {
                  const Active = resource.icon;
                  return (
                    <Link
                      key={resource.title}
                      href={`/resources/${resource.title.toLowerCase().replace(/\s+/g, '-')}`}
                      className="group block overflow-hidden rounded-2xl bg-white border border-gray-200 hover:border-[#FF6B1A] hover:shadow-xl transition-all"
                    >
                      <div className="aspect-video overflow-hidden">
                        <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                          <Active className="size-16 text-gray-400 group-hover:text-[#FF6B1A] transition-colors" />
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="px-2 py-1 rounded-full bg-gray-100 text-xs text-gray-600 font-mono">
                            {resource.type}
                          </span>
                          <span className="text-xs text-gray-400">{resource.downloads.toLocaleString()} downloads</span>
                        </div>
                        <h3 className="font-bold text-lg mb-2 group-hover:text-[#FF6B1A] transition-colors">
                          {resource.title}
                        </h3>
                        <p className="text-sm text-gray-500 mb-4">{resource.description}</p>
                        <span className="inline-flex items-center gap-1 text-sm text-[#FF6B1A] font-medium">
                          Download <ArrowUpRight className="size-3" />
                        </span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
                <h3 className="font-bold text-lg mb-4">Filter by Type</h3>
                <div className="space-y-2">
                  {["All", "Datasheet", "Manual", "Guide", "Reference", "CAD"].map((type) => (
                    <button
                      key={type}
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                        type === "All"
                          ? "bg-[#FF6B1A] text-white"
                          : "text-gray-600 hover:bg-gray-100"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h3 className="font-bold text-lg mb-4">Need Help?</h3>
                  <Link
                    href="/contact"
                    className="block w-full text-center px-4 py-3 rounded-full bg-[#FF6B1A] text-white font-medium hover:bg-[#e55a00] transition-colors"
                  >
                    Contact Technical Support
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
