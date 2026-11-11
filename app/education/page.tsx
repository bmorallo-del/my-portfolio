import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Sparkles, BookOpen, School } from "lucide-react";

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
      cardBg: "bg-white/85 backdrop-blur-md border-emerald-200/70",
      iconBg: "bg-emerald-100 text-emerald-800",
      pillBg: "bg-emerald-100/80 border-emerald-200 text-emerald-900",
      titleColor: "text-emerald-800",
      badgeStyle: "bg-emerald-50 text-emerald-900 border-emerald-200/80 hover:bg-emerald-100",
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
      cardBg: "bg-white/85 backdrop-blur-md border-purple-200/70",
      iconBg: "bg-purple-100 text-purple-800",
      pillBg: "bg-pink-100/80 border-pink-200 text-pink-900",
      titleColor: "text-purple-900",
      badgeStyle: "bg-purple-50 text-purple-900 border-purple-200/80 hover:bg-purple-100",
    },
  },
];

export default function Education() {
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

      <div className="max-w-4xl mx-auto space-y-10 relative z-10">
        
        {/* Header Section */}
        <div className="text-center sm:text-left transform -rotate-1">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100/80 border border-amber-200 text-amber-900 text-xs font-semibold uppercase tracking-wider mb-3 shadow-xs">
            <Sparkles className="h-3.5 w-3.5 text-amber-600" />
            <span>Academic Milestones</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-stone-800 tracking-tight">
            My <span className="text-emerald-700">Education</span>
          </h1>
          <p className="text-stone-600 mt-2 text-base sm:text-lg max-w-xl leading-relaxed">
            Academic background, honors, and key achievements along my learning path.
          </p>
        </div>

        {/* Education Timeline Cards */}
        <div className="space-y-6">
          {educationList.map((item, idx) => (
            <Card 
              key={idx} 
              className={`border shadow-sm rounded-3xl transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${item.theme.cardBg} ${idx % 2 === 1 ? 'transform sm:translate-x-2' : ''}`}
            >
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  
                  {/* Left Title Block */}
                  <div className="flex items-start gap-3.5">
                    <div className={`p-3 rounded-2xl shrink-0 ${item.theme.iconBg}`}>
                      {idx === 0 ? <GraduationCap className="h-6 w-6" /> : <School className="h-6 w-6" />}
                    </div>
                    <div>
                      <CardTitle className="text-xl font-bold text-stone-800">{item.degree}</CardTitle>
                      <CardDescription className="text-stone-600 font-medium mt-0.5">{item.institution}</CardDescription>
                    </div>
                  </div>

                  {/* Period Badge */}
                  <span className={`inline-flex items-center px-3.5 py-1 rounded-full text-xs font-semibold border self-start sm:self-auto ${item.theme.pillBg}`}>
                    {item.period}
                  </span>
                </div>
              </CardHeader>

              <CardContent className="space-y-4 pt-2">
                <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
                  {item.description}
                </p>

                {/* Achievements / Highlights as Aesthetic Badges */}
                <div className="space-y-2 pt-2 border-t border-stone-100">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-stone-400 flex items-center gap-1.5">
                    <Award className="h-3.5 w-3.5 text-amber-500" /> Key Highlights & Honors
                  </h4>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {item.achievements.map((ach, i) => (
                      <Badge 
                        key={i} 
                        className={`text-xs px-3 py-1 rounded-full border font-medium transition-all hover:scale-105 ${item.theme.badgeStyle}`}
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