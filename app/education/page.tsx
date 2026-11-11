import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Sparkles, School, Stars } from "lucide-react";

const educationList = [
  {
    degree: "BS in Information Systems",
    institution: "Naga College Foundation Inc.",
    period: "2025 - Present",
    description: "Focusing on systems design, database architecture, modern web development, and digital solutions.",
    achievements: [
      "Consistent Dean's Lister (GWA < 1.5)",
      "Student Leadership & Management",
      "Project Management & Web Development",
    ],
    theme: {
      cardBg: "bg-white/95 backdrop-blur-md border-2 border-emerald-300 shadow-xl",
      iconBg: "bg-emerald-700 text-white shadow-md",
      pillBg: "bg-emerald-200 border-emerald-400 text-emerald-950 font-black",
      badgeStyle: "bg-emerald-100 text-emerald-950 border-emerald-300 hover:bg-emerald-700 hover:text-white",
    },
  },
  {
    degree: "Senior High School (HUMSS)",
    institution: "Bula National High School",
    period: "2020 - 2025",
    description: "Humanities and Social Sciences strand emphasizing research, communication arts, and campus journalism.",
    achievements: [
      "With High Honors",
      "Best in Research Award",
      "Campus Journalist of 'The Blue and White'",
      "Special Award in Communication Arts",
    ],
    theme: {
      cardBg: "bg-white/95 backdrop-blur-md border-2 border-purple-300 shadow-xl",
      iconBg: "bg-purple-800 text-white shadow-md",
      pillBg: "bg-purple-200 border-purple-400 text-purple-950 font-black",
      badgeStyle: "bg-purple-100 text-purple-950 border-purple-300 hover:bg-purple-700 hover:text-white",
    },
  },
];

export default function Education() {
  return (
    <div className="relative min-h-[90vh] w-full overflow-hidden bg-slate-100/80 py-12 px-4 sm:px-8">
      
      {/* 1. HIGH-VISIBILITY BACKGROUND ENGINE */}
      
      {/* Vivid Colorful Gradient Blurs */}
      <div className="absolute -top-20 -left-20 w-[550px] h-[550px] bg-emerald-300/60 rounded-full blur-[90px] -z-10 pointer-events-none animate-pulse" style={{ animationDuration: '8s' }}></div>
      <div className="absolute top-[30%] -right-20 w-[600px] h-[600px] bg-purple-300/60 rounded-full blur-[100px] -z-10 pointer-events-none animate-pulse" style={{ animationDuration: '10s' }}></div>
      <div className="absolute -bottom-20 left-[20%] w-[500px] h-[500px] bg-amber-300/60 rounded-full blur-[80px] -z-10 pointer-events-none"></div>
      <div className="absolute bottom-10 right-[10%] w-[500px] h-[500px] bg-pink-300/60 rounded-full blur-[90px] -z-10 pointer-events-none"></div>

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

      <div className="max-w-4xl mx-auto space-y-10 relative z-10">
        
        {/* Header Section */}
        <div className="text-center sm:text-left transform -rotate-1">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-200/90 border-2 border-amber-400 text-amber-950 text-xs font-black uppercase tracking-wider mb-3 shadow-sm">
            <Sparkles className="h-3.5 w-3.5 text-amber-700" />
            <span>Academic Milestones</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            My <span className="text-emerald-700 underline decoration-pink-400 decoration-wavy decoration-4">Education</span>
          </h1>
          <p className="text-slate-800 mt-2 text-base sm:text-lg max-w-xl leading-relaxed font-semibold">
            Academic background, honors, and key achievements along my learning path.
          </p>
        </div>

        {/* Education Timeline Cards */}
        <div className="space-y-6">
          {educationList.map((item, idx) => (
            <Card 
              key={idx} 
              className={`rounded-3xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl ${item.theme.cardBg} ${idx % 2 === 1 ? 'transform sm:translate-x-2' : ''}`}
            >
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  
                  {/* Left Title Block */}
                  <div className="flex items-start gap-4">
                    <div className={`p-3.5 rounded-2xl shrink-0 ${item.theme.iconBg}`}>
                      {idx === 0 ? <GraduationCap className="h-6 w-6" /> : <School className="h-6 w-6" />}
                    </div>
                    <div>
                      <CardTitle className="text-2xl font-black text-slate-900">{item.degree}</CardTitle>
                      <CardDescription className="text-slate-700 font-bold text-sm sm:text-base mt-0.5">{item.institution}</CardDescription>
                    </div>
                  </div>

                  {/* Period Badge */}
                  <span className={`inline-flex items-center px-4 py-1.5 rounded-full text-xs border-2 self-start sm:self-auto shadow-xs ${item.theme.pillBg}`}>
                    {item.period}
                  </span>
                </div>
              </CardHeader>

              <CardContent className="space-y-4 pt-1">
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-medium">
                  {item.description}
                </p>

                {/* Achievements / Highlights as Aesthetic Badges */}
                <div className="space-y-2.5 pt-3 border-t border-slate-200">
                  <h4 className="text-xs font-black uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                    <Award className="h-4 w-4 text-amber-600" /> Key Highlights & Honors
                  </h4>
                  <div className="flex flex-wrap gap-2.5 pt-1">
                    {item.achievements.map((ach, i) => (
                      <Badge 
                        key={i} 
                        className={`text-xs sm:text-sm px-4 py-2 rounded-full border-2 font-bold transition-all hover:scale-105 cursor-default shadow-2xs ${item.theme.badgeStyle}`}
                        variant="secondary"
                      >
                        ✨ {ach}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </div>
  );
}