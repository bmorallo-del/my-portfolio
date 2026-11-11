"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sparkles, Code2 } from "lucide-react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Education", href: "/education" },
  { name: "Hobbies", href: "/hobbies" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-emerald-100/60 bg-white/70 backdrop-blur-md transition-all">
      <div className="max-w-6xl mx-auto flex h-16 items-center justify-between px-4 sm:px-8">
        
        {/* Brand / Logo */}
        <Link 
          href="/" 
          className="flex items-center gap-2 font-extrabold text-lg sm:text-xl tracking-tight text-stone-800 hover:opacity-90 transition-opacity"
        >
          <div className="p-1.5 rounded-xl bg-emerald-100 text-emerald-700">
            <Code2 className="h-5 w-5" />
          </div>
          <span>
            Betheny<span className="text-emerald-700">.dev</span>
          </span>
          <Sparkles className="h-3.5 w-3.5 text-pink-500 animate-pulse" />
        </Link>

        {/* Navigation Links */}
        <nav className="flex items-center gap-1 sm:gap-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-emerald-700 text-white shadow-xs scale-105"
                    : "text-stone-600 hover:text-emerald-800 hover:bg-emerald-50/70"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

      </div>
    </header>
  );
}