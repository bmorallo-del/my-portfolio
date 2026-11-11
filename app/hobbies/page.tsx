import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Music, Film, Gamepad2, Moon, Utensils, Sparkles, Heart, Compass } from "lucide-react";

const hobbies = [
  {
    title: "Music & Guitar",
    category: "Creative Vibe",
    description: "Music is a huge part of my life. I love singing while playing the guitar—it makes everything better and helps me unwind.",
    icon: Music,
    theme: {
      cardBg: "bg-white/95 backdrop-blur-md border-2 border-emerald-300 shadow-lg hover:shadow-2xl",
      iconBg: "bg-emerald-700 text-white shadow-md",
      badgeStyle: "bg-emerald-100 text-emerald-950 border-emerald-300 font-extrabold",
      titleColor: "text-slate-900",
    },
    colSpan: "sm:col-span-2 lg:col-span-2", // Spans wider for hero emphasis
  },
  {
    title: "Chess & Strategy",
    category: "Mindset",
    description: "I enjoy playing chess whenever I can—it challenges my mind and helps me develop strategic, thoughtful thinking.",
    icon: Gamepad2,
    theme: {
      cardBg: "bg-white/95 backdrop-blur-md border-2 border-purple-300 shadow-lg hover:shadow-2xl",
      iconBg: "bg-purple-800 text-white shadow-md",
      badgeStyle: "bg-purple-100 text-purple-950 border-purple-300 font-extrabold",
      titleColor: "text-slate-900",
    },
    colSpan: "sm:col-span-1 lg:col-span-1",
  },
  {
    title: "Watching Movies",
    category: "Entertainment",
    description: "I enjoy watching movies in my free time, especially Hollywood films and thriller/horror movies.",
    icon: Film,
    theme: {
      cardBg: "bg-white/95 backdrop-blur-md border-2 border-amber-300 shadow-lg hover:shadow-2xl",
      iconBg: "bg-amber-600 text-white shadow-md",
      badgeStyle: "bg-amber-100 text-amber-950 border-amber-300 font-extrabold",
      titleColor: "text-slate-900",
    },
    colSpan: "sm:col-span-1 lg:col-span-1",
  },
  {
    title: "Sleeping & Resting",
    category: "Recharge",
    description: "I value good rest! Sleeping helps me recharge my mind and energy, leaving me refreshed for the days ahead.",
    icon: Moon,
    theme: {
      cardBg: "bg-white/95 backdrop-blur-md border-2 border-pink-300 shadow-lg hover:shadow-2xl",
      iconBg: "bg-pink-600 text-white shadow-md",
      badgeStyle: "bg-pink-100 text-pink-950 border-pink-300 font-extrabold",
      titleColor: "text-slate-900",
    },
    colSpan: "sm:col-span-1 lg:col-span-1",
  },
  {
    title: "Food & Cuisines",
    category: "Lifestyle",
    description: "I love exploring and eating good food—it's one of my favorite ways to relax and enjoy life with great company.",
    icon: Utensils,
    theme: {
      cardBg: "bg-white/95 backdrop-blur-md border-2 border-teal-300 shadow-lg hover:shadow-2xl",
      iconBg: "bg-teal-700 text-white shadow-md",
      badgeStyle: "bg-teal-100 text-teal-950 border-teal-300 font-extrabold",
      titleColor: "text-slate-900",
    },
    colSpan: "sm:col-span-2 lg:col-span-1",
  },
];

export default function Hobbies() {
  return (
    <div className="relative min-h-[90vh] w-full overflow-hidden bg-slate-100/80 py-12 px-4 sm:px-8">
      
      {/* 1. HIGH-VISIBILITY BACKGROUND ENGINE */}
      
      {/* Vivid Colorful Gradient Blurs */}
      <div className="absolute -top-20 -left-20 w-[550px] h-[550px] bg-emerald-300/60 rounded-full blur-[90px] -z-10 pointer-events-none animate-pulse" style={{ animationDuration: '8s' }}></div>
      <div className="absolute top-[25%] -right-20 w-[600px] h-[600px] bg-purple-300/60 rounded-full blur-[100px] -z-10 pointer-events-none animate-pulse" style={{ animationDuration: '10s' }}></div>
      <div className="absolute -bottom-20 left-[20%] w-[500px] h-[500px] bg-amber-300/60 rounded-full blur-[80px] -z-10 pointer-events-none"></div>
      <div className="absolute bottom-10 right-[10%] w-[500px] h-[500px] bg-pink-300/60 rounded-full blur-[90px] -z-10 pointer-events-none"></div>

      {/* High-Contrast Dot-Grid Texture */}
      <div 
        className="absolute inset-0 -z-10 opacity-[0.45] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #059669 1px, transparent 1px), linear-gradient(to bottom, #d946ef 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      ></div>

      {/* Floating Animated Butterflies */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-8 left-[5%] text-emerald-600/80 animate-bounce duration-1000 text-3xl filter drop-shadow-md">
          🦋
        </div>
        <div className="absolute top-1/3 right-[6%] text-purple-600/80 animate-pulse text-4xl filter drop-shadow-md" style={{ animationDuration: '4.5s' }}>
          🦋
        </div>
        <div className="absolute bottom-24 left-[12%] text-amber-600/80 animate-bounce text-3xl filter drop-shadow-md" style={{ animationDuration: '6s' }}>
          🦋
        </div>
        <div className="absolute bottom-1/4 right-[15%] text-pink-500/90 animate-pulse text-3xl filter drop-shadow-md" style={{ animationDuration: '5s' }}>
          🦋
        </div>
      </div>

      <div className="max-w-6xl mx-auto space-y-10 relative z-10">
        
        {/* Header Section */}
        <div className="text-center sm:text-left transform -rotate-1">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-200/90 border-2 border-pink-400 text-pink-950 text-xs font-black uppercase tracking-wider mb-3 shadow-sm">
            <Sparkles className="h-3.5 w-3.5 text-pink-700" />
            <span>Life Beyond Code</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Hobbies & <span className="text-emerald-700 underline decoration-pink-400 decoration-wavy decoration-4">Interests</span>
          </h1>
          <p className="text-slate-800 mt-2 text-base sm:text-lg max-w-xl leading-relaxed font-semibold">
            The activities, music, and quiet moments that keep me creative, inspired, and balanced.
          </p>
        </div>

        {/* ASYMMETRIC MASONRY GRID LAYOUT */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
          {hobbies.map((hobby, idx) => {
            const Icon = hobby.icon;

            return (
              <Card
                key={hobby.title}
                className={`rounded-3xl transition-all duration-300 hover:-translate-y-2 ${hobby.colSpan} ${hobby.theme.cardBg} ${
                  idx % 2 === 1 ? 'lg:translate-y-4' : ''
                }`}
              >
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center justify-between gap-3">
                    
                    {/* Header Icon + Title */}
                    <div className="flex items-center gap-3.5">
                      <div className={`p-3 rounded-2xl shrink-0 ${hobby.theme.iconBg}`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className={`font-black text-xl ${hobby.theme.titleColor}`}>
                          {hobby.title}
                        </h3>
                      </div>
                    </div>

                    {/* Category Tag */}
                    <Badge variant="secondary" className={`text-[10px] uppercase px-3 py-1 rounded-full border ${hobby.theme.badgeStyle}`}>
                      {hobby.category}
                    </Badge>
                  </div>

                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-medium pt-1">
                    {hobby.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

      </div>
    </div>
  );
}