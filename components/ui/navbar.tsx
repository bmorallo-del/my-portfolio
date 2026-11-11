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
    <header className="sticky top-0 z-50 w-full py-3 px-4 sm:px-8">
      {/* Floating Glassmorphic Pill Container */}
      <div className="max-w-5xl mx-auto flex h-14 items-center justify-between px-4 sm:px-6 rounded-full bg-white/90 backdrop-blur-md border-2 border-emerald-200/90 shadow-lg shadow-emerald-950/5 transition-all">
        
        {/* Brand / Logo */}
        <Link 
          href="/" 
          className="flex items-center gap-2.5 font-black text-base sm:text-lg tracking-tight text-slate-900 hover:opacity-90 transition-opacity"
        >
          <div className="p-2 rounded-xl bg-emerald-700 text-white shadow-xs relative flex items-center justify-center">
            <Code2 className="h-4 w-4" />
            <span className="absolute -top-1.5 -right-1.5 text-xs animate-bounce" style={{ animationDuration: '3s' }}>
              🦋
            </span>
          </div>
          <span>
            Betheny<span className="text-emerald-700 underline decoration-pink-400 decoration-wavy decoration-2">.dev</span>
          </span>
          <Sparkles className="h-3.5 w-3.5 text-amber-500 animate-pulse hidden sm:inline-block" />
        </Link>

        {/* Navigation Links */}
        <nav className="flex items-center gap-1 sm:gap-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-extrabold transition-all duration-200 ${
                  isActive
                    ? "bg-emerald-700 text-white shadow-md scale-105"
                    : "text-slate-700 hover:text-emerald-800 hover:bg-emerald-100/70"
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