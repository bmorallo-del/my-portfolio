import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Heart, Compass, Stars } from "lucide-react";

// Categorized skills with custom pastel badge colors
const skillCategories = [
  {
    category: "Languages & Frameworks",
    items: ["JavaScript / TypeScript", "React & Next.js", "Node.js & Express"],
    badgeStyle: "bg-emerald-50/80 text-emerald-900 border-emerald-200/80 hover:bg-emerald-100",
  },
  {
    category: "Styling & UI",
    items: ["Tailwind CSS", "Shadcn UI"],
    badgeStyle: "bg-pink-50/80 text-pink-900 border-pink-200/80 hover:bg-pink-100",
  },
  {
    category: "Databases & Tools",
    items: ["MySQL / Oracle", "Git & GitHub", "REST APIs"],
    badgeStyle: "bg-purple-50/80 text-purple-900 border-purple-200/80 hover:bg-purple-100",
  },
];

export default function About() {
  return (
    <div className="relative min-h-[85vh] w-full overflow-hidden bg-gradient-to-br from-emerald-50/60 via-amber-50/40 via-purple-50/50 to-pink-50/60 py-12 px-4 sm:px-8">
      
      {/* Soft Ambient Background Color Orbs */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-emerald-100/50 rounded-full blur-3xl -z-10"></div>
      <div className="absolute top-1/2 right-12 w-80 h-80 bg-purple-100/60 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-10 left-1/3 w-72 h-72 bg-amber-100/60 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-12 right-10 w-80 h-80 bg-pink-100/60 rounded-full blur-3xl -z-10"></div>

      {/* Floating Animated Butterflies */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-10 left-[8%] text-emerald-400/70 animate-bounce duration-1000 text-2xl">
          🦋
        </div>
        <div className="absolute top-1/4 right-[12%] text-purple-400/70 animate-pulse text-3xl" style={{ animationDuration: '4s' }}>
          🦋
        </div>
        <div className="absolute bottom-24 left-[18%] text-amber-500/60 animate-bounce text-xl" style={{ animationDuration: '6s' }}>
          🦋
        </div>
        <div className="absolute bottom-1/3 right-[22%] text-pink-400/80 animate-pulse text-2xl" style={{ animationDuration: '5s' }}>
          🦋
        </div>
      </div>

      <div className="max-w-4xl mx-auto space-y-10 relative z-10">
        
        {/* Header Section */}
        <div className="text-center sm:text-left transform -rotate-1">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100/80 border border-amber-200 text-amber-900 text-xs font-semibold uppercase tracking-wider mb-3 shadow-xs">
            <Sparkles className="h-3.5 w-3.5 text-amber-600" />
            <span>Second-Year IS Journey</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-stone-800 tracking-tight">
            About <span className="text-emerald-700">Me</span>
          </h1>
          <p className="text-stone-600 mt-2 text-base sm:text-lg max-w-xl leading-relaxed">
            A little peek into my background, what I'm currently learning, and my soft spot for creative tech.
          </p>
        </div>

        {/* Asymmetric / Playful Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          
          {/* My Story Card - Soft Sage Theme */}
          <Card className="md:col-span-7 bg-white/85 backdrop-blur-md border border-emerald-200/70 shadow-sm rounded-3xl transform hover:-translate-y-1 transition-transform">
            <CardHeader className="flex flex-row items-center gap-3 pb-2">
              <div className="p-2.5 rounded-2xl bg-emerald-100 text-emerald-800">
                <Compass className="h-5 w-5" />
              </div>
              <CardTitle className="text-xl font-bold text-stone-800">My Student Story</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-stone-600 leading-relaxed text-sm sm:text-base">
              <p>
                Hi there! I’m Betheny, a 2nd-year Information Systems student taking my time to learn, grow, and figure things out at my own pace.
              </p>
              <p>
                I'm exploring how business, systems, and code connect. While I'm still building my foundation, I am deeply passionate about crafting clean web applications and excited to keep improving every single day.
              </p>
            </CardContent>
          </Card>

          {/* Current Vibe Card - Soft Lavender & Pink Theme */}
          <Card className="md:col-span-5 bg-gradient-to-br from-purple-50/90 via-pink-50/70 to-amber-50/50 backdrop-blur-md border border-purple-200/70 shadow-sm rounded-3xl transform md:translate-y-6 hover:-translate-y-1 transition-transform">
            <CardHeader className="flex flex-row items-center gap-3 pb-2">
              <div className="p-2.5 rounded-2xl bg-purple-100 text-purple-900">
                <Heart className="h-5 w-5 text-purple-600" />
              </div>
              <CardTitle className="text-xl font-bold text-stone-800">Current Vibe</CardTitle>
            </CardHeader>
            <CardContent className="text-stone-600 text-sm sm:text-base space-y-3">
              <div className="flex items-start gap-2">
                <span className="text-amber-500">✨</span>
                <p>Balancing database coursework with frontend experiments.</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-emerald-600">🌿</span>
                <p>Loving soft pastel color palettes and cozy coding setups.</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-purple-500">☕</span>
                <p>Taking small steps forward, one line of code at a time.</p>
              </div>
            </CardContent>
          </Card>

        </div>

        {/* Skills & Technologies Card - Multi-Pastel Tag Colors */}
        <Card className="bg-white/85 backdrop-blur-md border border-purple-100/80 shadow-sm rounded-3xl">
          <CardHeader className="flex flex-row items-center gap-2">
            <Stars className="h-5 w-5 text-amber-500" />
            <CardTitle className="text-xl font-bold text-stone-800">Toolkit & Technologies</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {skillCategories.map((group) => (
              <div key={group.category} className="space-y-2">
                <span className="text-xs font-semibold text-stone-400 uppercase tracking-wider">
                  {group.category}
                </span>
                <div className="flex flex-wrap gap-2.5">
                  {group.items.map((skill) => (
                    <Badge 
                      key={skill}
                      className={`text-xs sm:text-sm px-3.5 py-1.5 rounded-full border transition-all hover:scale-105 font-medium ${group.badgeStyle}`} 
                      variant="secondary"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

      </div>
    </div>
  );
}