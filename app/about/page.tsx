import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Heart, Compass, Stars, Laptop, BookOpen, Rocket, Code2, Database, Layout } from "lucide-react";

const skillCategories = [
  {
    category: "Languages & Frameworks",
    items: ["JavaScript / TypeScript", "React & Next.js", "Node.js & Express"],
    icon: Code2,
    badgeStyle: "bg-emerald-100 text-emerald-950 border-emerald-300 hover:bg-emerald-700 hover:text-white",
    cardBorder: "border-emerald-300/80",
    headerBg: "bg-emerald-100 text-emerald-800",
  },
  {
    category: "Styling & UI Systems",
    items: ["Tailwind CSS", "Shadcn UI", "Canva Layouts"],
    icon: Layout,
    badgeStyle: "bg-pink-100 text-pink-950 border-pink-300 hover:bg-pink-600 hover:text-white",
    cardBorder: "border-pink-300/80",
    headerBg: "bg-pink-100 text-pink-800",
  },
  {
    category: "Databases & Tools",
    items: ["MySQL / Oracle SQL", "Git & GitHub", "REST APIs"],
    icon: Database,
    badgeStyle: "bg-purple-100 text-purple-950 border-purple-300 hover:bg-purple-700 hover:text-white",
    cardBorder: "border-purple-300/80",
    headerBg: "bg-purple-100 text-purple-800",
  },
];

export default function About() {
  return (
    <div className="relative min-h-[90vh] w-full overflow-hidden bg-slate-100/80 py-12 px-4 sm:px-8">
      
      {/* 1. HIGH-VISIBILITY BACKGROUND ENGINE */}
      
      {/* Vivid Colorful Gradient Blurs */}
      <div className="absolute -top-20 -left-20 w-[550px] h-[550px] bg-emerald-300/60 rounded-full blur-[90px] -z-10 pointer-events-none animate-pulse" style={{ animationDuration: '8s' }}></div>
      <div className="absolute top-[20%] -right-20 w-[600px] h-[600px] bg-purple-300/60 rounded-full blur-[100px] -z-10 pointer-events-none animate-pulse" style={{ animationDuration: '10s' }}></div>
      <div className="absolute -bottom-20 left-[15%] w-[500px] h-[500px] bg-amber-300/60 rounded-full blur-[80px] -z-10 pointer-events-none"></div>
      <div className="absolute bottom-[20%] -right-10 w-[500px] h-[500px] bg-pink-300/60 rounded-full blur-[90px] -z-10 pointer-events-none"></div>

      {/* Grid Pattern with Increased Visibility */}
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
        <div className="absolute top-1/4 right-[6%] text-purple-600/80 animate-pulse text-4xl filter drop-shadow-md" style={{ animationDuration: '4.5s' }}>
          🦋
        </div>
        <div className="absolute bottom-24 left-[12%] text-amber-600/80 animate-bounce text-3xl filter drop-shadow-md" style={{ animationDuration: '6s' }}>
          🦋
        </div>
        <div className="absolute bottom-1/3 right-[15%] text-pink-500/90 animate-pulse text-3xl filter drop-shadow-md" style={{ animationDuration: '5s' }}>
          🦋
        </div>
      </div>

      <div className="max-w-6xl mx-auto space-y-10 relative z-10">
        
        {/* Header Section */}
        <div className="text-center sm:text-left transform -rotate-1">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-200/90 border-2 border-amber-400 text-amber-950 text-xs font-black uppercase tracking-wider mb-3 shadow-sm">
            <Sparkles className="h-3.5 w-3.5 text-amber-700" />
            <span>Second-Year IS Journey</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            About <span className="text-emerald-700 underline decoration-pink-400 decoration-wavy decoration-4">Me</span>
          </h1>
          <p className="text-slate-800 mt-2 text-base sm:text-lg max-w-2xl leading-relaxed font-semibold">
            Exploring systems, code, and interface design at my own steady pace.
          </p>
        </div>

        {/* NEW DASHBOARD POSITIONING: Top 2 Hero Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Main Story Card (Spans 7 Columns) */}
          <Card className="lg:col-span-7 bg-white/95 backdrop-blur-md border-2 border-emerald-300 shadow-xl rounded-3xl transition-transform hover:-translate-y-1">
            <CardHeader className="flex flex-row items-center gap-3 pb-3 border-b border-emerald-100">
              <div className="p-3 rounded-2xl bg-emerald-700 text-white shadow-md">
                <Compass className="h-6 w-6" />
              </div>
              <div>
                <CardTitle className="text-2xl font-black text-slate-900">My Student Story</CardTitle>
                <p className="text-xs text-emerald-700 font-bold uppercase tracking-wider">Information Systems Major</p>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 text-slate-700 leading-relaxed text-sm sm:text-base pt-4 font-medium">
              <p>
                Hi! I’m <strong className="text-emerald-800 font-bold">Betheny R. Morallo</strong>, a 2nd-year student dedicated to learning web engineering and database management step-by-step.
              </p>
              <p>
                I enjoy bridging business requirements with clean digital applications, continuously sharpening my skill set across front-end styling, logic implementation, and system design.
              </p>
            </CardContent>
          </Card>

          {/* Current Vibe Card (Spans 5 Columns) */}
          <Card className="lg:col-span-5 bg-gradient-to-br from-purple-100 via-pink-100 to-amber-100 backdrop-blur-md border-2 border-purple-300 shadow-xl rounded-3xl transition-transform hover:-translate-y-1">
            <CardHeader className="flex flex-row items-center gap-3 pb-2 border-b border-purple-200/60">
              <div className="p-3 rounded-2xl bg-purple-800 text-white shadow-md">
                <Heart className="h-6 w-6" />
              </div>
              <div>
                <CardTitle className="text-2xl font-black text-slate-900">Current Vibe</CardTitle>
                <p className="text-xs text-purple-800 font-bold uppercase tracking-wider">Focus & Energy</p>
              </div>
            </CardHeader>
            <CardContent className="text-slate-800 text-sm space-y-3 font-semibold pt-4">
              <div className="flex items-center gap-3 bg-white/80 p-3 rounded-2xl border border-purple-200 shadow-xs">
                <Laptop className="h-5 w-5 text-purple-700 shrink-0" />
                <p>Building interactive Next.js portfolio features.</p>
              </div>
              <div className="flex items-center gap-3 bg-white/80 p-3 rounded-2xl border border-pink-200 shadow-xs">
                <BookOpen className="h-5 w-5 text-pink-700 shrink-0" />
                <p>Styling with soft pastel palettes and floating butterflies.</p>
              </div>
              <div className="flex items-center gap-3 bg-white/80 p-3 rounded-2xl border border-emerald-200 shadow-xs">
                <Rocket className="h-5 w-5 text-emerald-700 shrink-0" />
                <p>Growing consistently, one project at a time.</p>
              </div>
            </CardContent>
          </Card>

        </div>

        {/* NEW DASHBOARD POSITIONING: 3-Column Skills Grid */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Stars className="h-5 w-5 text-amber-600" />
            <h2 className="text-2xl font-black text-slate-900">Technical Toolkit</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skillCategories.map((group) => {
              const CategoryIcon = group.icon;

              return (
                <Card 
                  key={group.category} 
                  className={`bg-white/95 backdrop-blur-md border-2 ${group.cardBorder} shadow-lg rounded-3xl transition-all duration-300 hover:-translate-y-1.5`}
                >
                  <CardHeader className="flex flex-row items-center gap-3 pb-3 border-b border-slate-100">
                    <div className={`p-2.5 rounded-2xl ${group.headerBg} font-bold`}>
                      <CategoryIcon className="h-5 w-5" />
                    </div>
                    <CardTitle className="text-lg font-extrabold text-slate-900">{group.category}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((skill) => (
                        <Badge 
                          key={skill}
                          className={`text-xs px-3.5 py-1.5 rounded-full border-2 transition-all font-bold ${group.badgeStyle}`} 
                          variant="secondary"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}
