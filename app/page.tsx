import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, Mail } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-[85vh] w-full flex items-center justify-center bg-gradient-to-br from-emerald-50/60 via-stone-50 to-pink-50/40 px-6 py-12">
      
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-white/70 backdrop-blur-md p-8 sm:p-12 rounded-3xl border border-emerald-100 shadow-sm">
        
        {/* Left Side: Profile & Visual Frame */}
        <div className="md:col-span-5 flex justify-center">
          <div className="relative">
            {/* Soft pink glow accent in background */}
            <div className="absolute -inset-2 bg-gradient-to-tr from-pink-200 to-emerald-200 rounded-full blur-xl opacity-60"></div>
            
            <div className="relative w-48 h-48 sm:w-60 sm:h-60 rounded-full overflow-hidden border-4 border-white shadow-md ring-4 ring-emerald-200/50">
              
              {/* === PUT YOUR IMAGE CODE HERE === */}
              <Image
                src="/profile.jpg"
                alt="Betheny R. Morallo"
                width={240}
                height={240}
                className="object-cover w-full h-full"
                priority
              />
              {/* ================================ */}

            </div>
          </div>
        </div>

        {/* Right Side: Content & Actions */}
        <div className="md:col-span-7 flex flex-col items-start text-left">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/70 border border-emerald-200 text-emerald-900 text-xs sm:text-sm font-medium mb-4">
            <Sparkles className="h-3.5 w-3.5 text-pink-500" />
            <span>Welcome to my digital portfolio</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-stone-800 tracking-tight mb-4">
            Ciao, I'm <span className="text-emerald-700">Betheny R. Morallo</span>
          </h1>

          <p className="text-base sm:text-lg text-stone-600 mb-8 leading-relaxed">
            An Information Systems student continuously learning and taking my time to grow. I'm passionate about building web applications and dedicated to learning, excelling, and finding my mark in the ever-evolving tech industry.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-700 text-white font-medium text-sm shadow-sm hover:bg-emerald-800 transition-all hover:scale-105"
            >
              <span>Learn More About Me</span>
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-pink-100 text-pink-900 border border-pink-200/80 font-medium text-sm hover:bg-pink-200/70 transition-all hover:scale-105"
            >
              <Mail className="h-4 w-4 text-pink-700" />
              <span>Get in Touch</span>
            </Link>
          </div>

        </div>

      </div>

    </div>
  );
}