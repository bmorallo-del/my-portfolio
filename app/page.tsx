import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, Mail } from "lucide-react";

export default function Home() {
  return (
    <div className="relative min-h-[85vh] w-full flex items-center justify-center overflow-hidden bg-slate-100/80 py-12 px-6 sm:px-12">
      
      {/* Background Engine: Glow Orbs & Grid Texture */}
      <div className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-emerald-300/50 rounded-full blur-[100px] -z-10 pointer-events-none animate-pulse" style={{ animationDuration: '8s' }}></div>
      <div className="absolute top-[20%] -right-20 w-[550px] h-[550px] bg-purple-300/50 rounded-full blur-[110px] -z-10 pointer-events-none animate-pulse" style={{ animationDuration: '10s' }}></div>
      <div className="absolute -bottom-20 left-[20%] w-[450px] h-[450px] bg-amber-300/50 rounded-full blur-[90px] -z-10 pointer-events-none"></div>
      <div className="absolute bottom-10 right-[10%] w-[450px] h-[450px] bg-pink-300/50 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

      <div 
        className="absolute inset-0 -z-10 opacity-[0.35] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #059669 1px, transparent 1px), linear-gradient(to bottom, #d946ef 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      ></div>

      {/* Floating Animated Butterflies */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-10 left-[8%] text-emerald-600/80 animate-bounce duration-1000 text-3xl filter drop-shadow-md">
          🦋
        </div>
        <div className="absolute top-1/4 right-[10%] text-purple-600/80 animate-pulse text-4xl filter drop-shadow-md" style={{ animationDuration: '4.5s' }}>
          🦋
        </div>
        <div className="absolute bottom-20 left-[15%] text-amber-600/80 animate-bounce text-3xl filter drop-shadow-md" style={{ animationDuration: '6s' }}>
          🦋
        </div>
        <div className="absolute bottom-1/3 right-[18%] text-pink-500/90 animate-pulse text-3xl filter drop-shadow-md" style={{ animationDuration: '5s' }}>
          🦋
        </div>
      </div>

      {/* Open & Minimalist Layout Container */}
      <div className="max-w-4xl w-full flex flex-col md:flex-row items-center gap-10 sm:gap-14 relative z-10">
        
        {/* Profile Image with Clean Asymmetric Pill Frame */}
        <div className="shrink-0 relative">
          <div className="absolute -inset-2 bg-gradient-to-tr from-emerald-300 via-pink-300 to-purple-300 rounded-[2.5rem] blur-lg opacity-70 animate-pulse"></div>
          
          <div className="relative w-48 h-56 sm:w-56 sm:h-64 rounded-[2.5rem] overflow-hidden border-4 border-white shadow-xl rotate-[-2deg] hover:rotate-0 transition-transform duration-300">
            <Image
              src="/profile.jpg"
              alt="Betheny R. Morallo"
              width={240}
              height={280}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </div>

        {/* Minimal Content Block */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-5">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-emerald-300 text-emerald-900 text-xs font-black uppercase tracking-wider shadow-xs backdrop-blur-sm">
            <Sparkles className="h-3.5 w-3.5 text-pink-500" />
            <span>Digital Portfolio</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight leading-tight">
            Ciao, I'm <span className="text-emerald-700 underline decoration-pink-400 decoration-wavy decoration-4">Betheny</span> 👋
          </h1>

          <p className="text-base sm:text-lg text-slate-700 font-semibold leading-relaxed max-w-xl">
            A 2nd-year Information Systems student crafting web experiences, learning backend systems, and growing one project at a time.
          </p>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-2">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-emerald-700 text-white font-extrabold text-sm shadow-md hover:bg-emerald-800 transition-all hover:scale-105 cursor-pointer"
            >
              <span>Explore My Work</span>
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-white/90 text-slate-900 border-2 border-slate-200 font-extrabold text-sm hover:bg-slate-50 transition-all hover:scale-105 cursor-pointer shadow-xs"
            >
              <Mail className="h-4 w-4 text-emerald-700" />
              <span>Say Hello</span>
            </Link>
          </div>

        </div>

      </div>

    </div>
  );
}