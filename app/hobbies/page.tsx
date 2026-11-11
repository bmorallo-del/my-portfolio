import { Card, CardContent } from "@/components/ui/card";
import { Music, Film, Gamepad2, Moon, Utensils, Sparkles, Heart } from "lucide-react";

const hobbies = [
  {
    title: "Music & Guitar",
    description: "Music is a huge part of my life. I love singing while playing the guitar—it makes everything better and helps me unwind.",
    icon: Music,
    // Sage Green
    color: "bg-white/85 backdrop-blur-md border-emerald-200/80 hover:border-emerald-300",
    iconColor: "bg-emerald-100 text-emerald-800",
    accentBadge: "bg-emerald-50 text-emerald-900 border-emerald-200",
  },
  {
    title: "Watching Movies",
    description: "I enjoy watching movies in my free time, especially Hollywood films and thriller/horror movies.",
    icon: Film,
    // Soft Peach / Amber
    color: "bg-white/85 backdrop-blur-md border-amber-200/80 hover:border-amber-300",
    iconColor: "bg-amber-100 text-amber-800",
    accentBadge: "bg-amber-50 text-amber-900 border-amber-200",
  },
  {
    title: "Chess",
    description: "I enjoy playing chess whenever I can—it challenges my mind and helps me develop strategic, thoughtful thinking.",
    icon: Gamepad2,
    // Pastel Lavender
    color: "bg-white/85 backdrop-blur-md border-purple-200/80 hover:border-purple-300",
    iconColor: "bg-purple-100 text-purple-800",
    accentBadge: "bg-purple-50 text-purple-900 border-purple-200",
  },
  {
    title: "Sleeping & Resting",
    description: "I value good rest! Sleeping helps me recharge my mind and energy, leaving me refreshed for the days ahead.",
    icon: Moon,
    // Soft Pink
    color: "bg-white/85 backdrop-blur-md border-pink-200/80 hover:border-pink-300",
    iconColor: "bg-pink-100 text-pink-800",
    accentBadge: "bg-pink-50 text-pink-900 border-pink-200",
  },
  {
    title: "Food & Cuisines",
    description: "I love exploring and eating good food—it's one of my favorite ways to relax and enjoy life with great company.",
    icon: Utensils,
    // Soft Teal / Mint
    color: "bg-white/85 backdrop-blur-md border-teal-200/80 hover:border-teal-300",
    iconColor: "bg-teal-100 text-teal-800",
    accentBadge: "bg-teal-50 text-teal-900 border-teal-200",
  },
];

export default function Hobbies() {
  return (
    <div className="relative min-h-[85vh] w-full overflow-hidden bg-gradient-to-br from-emerald-50/60 via-amber-50/40 via-purple-50/50 to-pink-50/60 py-12 px-4 sm:px-8">
      
      {/* Soft Ambient Background Color Orbs */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-emerald-100/50 rounded-full blur-3xl -z-10"></div>
      <div className="absolute top-1/2 right-12 w-80 h-80 bg-purple-100/60 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-10 left-1/3 w-72 h-72 bg-amber-100/60 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-12 right-10 w-80 h-80 bg-pink-100/60 rounded-full blur-3xl -z-10"></div>

      {/* Floating Animated Butterflies Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-12 left-[8%] text-emerald-400/70 animate-bounce duration-1000 text-2xl">
          🦋
        </div>
        <div className="absolute top-1/3 right-[12%] text-purple-400/70 animate-pulse text-3xl" style={{ animationDuration: '4s' }}>
          🦋
        </div>
        <div className="absolute bottom-20 left-[18%] text-amber-500/60 animate-bounce text-xl" style={{ animationDuration: '6s' }}>
          🦋
        </div>
        <div className="absolute bottom-1/4 right-[22%] text-pink-400/80 animate-pulse text-2xl" style={{ animationDuration: '5s' }}>
          🦋
        </div>
      </div>

      <div className="max-w-5xl mx-auto space-y-10 relative z-10">
        
        {/* Header Section */}
        <div className="text-center sm:text-left transform -rotate-1">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-100/80 border border-pink-200 text-pink-900 text-xs font-semibold uppercase tracking-wider mb-3 shadow-xs">
            <Sparkles className="h-3.5 w-3.5 text-pink-600" />
            <span>Life Beyond Code</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-stone-800 tracking-tight">
            Hobbies & <span className="text-emerald-700">Interests</span>
          </h1>
          <p className="text-stone-600 mt-2 text-base sm:text-lg max-w-xl leading-relaxed">
            The things that keep me inspired, relaxed, and balanced outside of my tech journey.
          </p>
        </div>

        {/* Playful Responsive Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {hobbies.map((hobby, idx) => {
            const Icon = hobby.icon;

            return (
              <Card
                key={hobby.title}
                className={`border shadow-xs rounded-3xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-md ${hobby.color} ${
                  idx % 2 === 1 ? 'transform sm:translate-y-2' : ''
                }`}
              >
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-3.5">
                    {/* Matching Aesthetic Icon Box */}
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 shadow-2xs ${hobby.iconColor}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-lg text-stone-800 leading-snug">
                      {hobby.title}
                    </h3>
                  </div>

                  <p className="text-sm text-stone-600 leading-relaxed">
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