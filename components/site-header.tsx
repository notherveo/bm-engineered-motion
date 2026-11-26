"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import {
  Menu,
  ArrowUpRight,
  Layers,
  Gauge,
  BookOpen,
  Mail,
} from "lucide-react";

const nav = [
  { href: "/products", label: "Products", icon: Layers },
  { href: "/applications", label: "Applications", icon: Gauge },
  { href: "/resources", label: "Resources", icon: BookOpen },
  { href: "/contact", label: "Request Quote", icon: Mail },
];

export function SiteHeader() {
  const pathname = usePathname();
  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 border-b-[3px] border-[#FF6B1A]/80 bg-[#F9FAFB]/95 backdrop-blur supports-[backdrop-filter]:bg-[#F9FAFB]/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="size-11 rounded-lg bg-[#FF6B1A] flex items-center justify-center text-white">
              <Gauge className="size-6" />
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

          <nav className="hidden lg:flex items-center gap-1">
            {nav.map((item) => {
              const Active = item.icon;
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    active
                      ? "text-[#FF6B1A]"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  <Active className={`size-4 transition-transform ${active ? "scale-125" : ""}`} />
                  {item.label}
                  {active && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-[#FF6B1A] text-white"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <Link
            href="/contact"
            className="hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FF6B1A] text-white text-sm font-medium hover:bg-[#e55a00] transition-colors"
          >
            Get a Quote <ArrowUpRight className="size-4" />
          </Link>

          <button className="lg:hidden p-2 rounded-md hover:bg-gray-100">
            <Menu className="size-6" />
          </button>
        </div>
      </div>
    </motion.header>
  );
}
