import Link from "next/link";
import { Layers, Gauge, BookOpen, Mail, Phone } from "lucide-react";

const columns = [
  {
    title: "Products",
    links: [
      { href: "/products", label: "Industrial Pumps", icon: Layers },
      { href: "/products", label: "Precision Motors", icon: Gauge },
      { href: "/products", label: "Control Systems", icon: Layers },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/applications", label: "Applications", icon: Gauge },
      { href: "/resources", label: "Resources", icon: BookOpen },
      { href: "/contact", label: "Contact", icon: Mail },
    ],
  },
  {
    title: "Contact",
    links: [
      { href: "/contact", label: "Request Quote", icon: Mail },
      { href: "/contact", label: "Support", icon: Phone },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-3">
              <div className="size-10 rounded-lg bg-[#FF6B1A] flex items-center justify-center text-white">
                <Gauge className="size-5" />
              </div>
              <div>
                <p className="font-mono text-xs font-medium tracking-[0.18em] text-[#FF6B1A]">
                  EMI
                </p>
                <p className="font-bold text-lg leading-none tracking-tight">
                  Engineered Motion
                </p>
              </div>
            </Link>
            <p className="mt-4 text-gray-500 max-w-md">
              Precision-engineered motion components for industrial applications.
              Custom specifications, certified quality, global support.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            {columns.map((col) => (
              <div key={col.title}>
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  {col.title}
                </h3>
                <ul className="space-y-2">
                  {col.links.map((link) => {
                    const Active = link.icon;
                    return (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="text-sm text-gray-600 hover:text-[#FF6B1A] flex items-center gap-2"
                        >
                          <Active className="size-4" />
                          {link.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © 2026 Engineered Motion Industries. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <Link href="/privacy" className="hover:text-gray-900">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-gray-900">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
