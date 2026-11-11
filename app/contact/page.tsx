import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Send, Sparkles, MessageSquareHeart } from "lucide-react";

export default function Contact() {
  return (
    <div className="relative min-h-[90vh] w-full overflow-hidden bg-slate-100/80 py-12 px-4 sm:px-8">
      
      {/* 1. HIGH-VISIBILITY BACKGROUND ENGINE */}
      
      {/* Vivid Colorful Gradient Blurs */}
      <div className="absolute -top-20 -left-20 w-[550px] h-[550px] bg-emerald-300/60 rounded-full blur-[90px] -z-10 pointer-events-none animate-pulse" style={{ animationDuration: '8s' }}></div>
      <div className="absolute top-[25%] -right-20 w-[600px] h-[600px] bg-purple-300/60 rounded-full blur-[100px] -z-10 pointer-events-none animate-pulse" style={{ animationDuration: '10s' }}></div>
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

      {/* Floating Animated Butterflies Background */}
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

      <div className="max-w-5xl mx-auto space-y-10 relative z-10">
        
        {/* Header Section */}
        <div className="text-center sm:text-left transform -rotate-1">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-200/90 border-2 border-amber-400 text-amber-950 text-xs font-black uppercase tracking-wider mb-3 shadow-sm">
            <Sparkles className="h-3.5 w-3.5 text-amber-700" />
            <span>Let's Connect</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Contact <span className="text-emerald-700 underline decoration-pink-400 decoration-wavy decoration-4">Me</span>
          </h1>
          <p className="text-slate-800 mt-2 text-base sm:text-lg max-w-xl leading-relaxed font-semibold">
            Have a question, collaboration idea, or project in mind? Feel free to send a message!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Left Side: Contact Info Cards (Spans 4 Cols) */}
          <div className="lg:col-span-4 space-y-4">
            
            {/* Email Card */}
            <Card className="bg-white/95 backdrop-blur-md border-2 border-emerald-300 shadow-lg rounded-3xl hover:-translate-y-1 transition-all">
              <CardContent className="p-4 flex items-center gap-3.5">
                <div className="p-3 rounded-2xl bg-emerald-700 text-white shadow-md shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div className="overflow-hidden">
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Email</p>
                  <p className="text-sm font-extrabold text-slate-900 truncate">bmorallo@ncf.edu.ph</p>
                </div>
              </CardContent>
            </Card>

            {/* Phone Card */}
            <Card className="bg-white/95 backdrop-blur-md border-2 border-purple-300 shadow-lg rounded-3xl hover:-translate-y-1 transition-all">
              <CardContent className="p-4 flex items-center gap-3.5">
                <div className="p-3 rounded-2xl bg-purple-800 text-white shadow-md shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Phone</p>
                  <p className="text-sm font-extrabold text-slate-900">+63 (900) 000-0000</p>
                </div>
              </CardContent>
            </Card>

            {/* Location Card */}
            <Card className="bg-white/95 backdrop-blur-md border-2 border-pink-300 shadow-lg rounded-3xl hover:-translate-y-1 transition-all">
              <CardContent className="p-4 flex items-center gap-3.5">
                <div className="p-3 rounded-2xl bg-pink-600 text-white shadow-md shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Location</p>
                  <p className="text-sm font-extrabold text-slate-900">Bula, Camarines Sur, PH</p>
                </div>
              </CardContent>
            </Card>

            {/* Extra Friendly Card */}
            <Card className="bg-gradient-to-br from-amber-100 via-pink-100 to-purple-100 border-2 border-amber-300 shadow-lg rounded-3xl p-4 hidden lg:block">
              <div className="flex items-center gap-2 mb-1">
                <MessageSquareHeart className="h-4 w-4 text-pink-700" />
                <span className="text-xs font-black text-slate-900 uppercase tracking-wider">Quick Note</span>
              </div>
              <p className="text-xs font-semibold text-slate-700 leading-relaxed">
                Always open to discussing web projects, student collaborations, or tech inquiries!
              </p>
            </Card>

          </div>

          {/* Right Side: Message Form Card (Spans 8 Cols) */}
          <Card className="lg:col-span-8 bg-white/95 backdrop-blur-md border-2 border-emerald-300 shadow-xl rounded-3xl">
            <CardHeader className="border-b border-slate-100 pb-4">
              <CardTitle className="text-2xl font-black text-slate-900">
                Send a Message
              </CardTitle>
              <CardDescription className="text-slate-600 font-semibold">
                Fill out the form below and I'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Name
                    </label>
                    <Input 
                      id="name" 
                      placeholder="Betheny R. Morallo" 
                      required 
                      className="rounded-2xl border-2 border-emerald-200 focus:border-emerald-500 focus:ring-emerald-500 bg-white/80 font-medium"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Email
                    </label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="bmorallo@ncf.edu.ph" 
                      required 
                      className="rounded-2xl border-2 border-emerald-200 focus:border-emerald-500 focus:ring-emerald-500 bg-white/80 font-medium"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="subject" className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Subject
                  </label>
                  <Input 
                    id="subject" 
                    placeholder="Project Inquiry / Hello" 
                    required 
                    className="rounded-2xl border-2 border-emerald-200 focus:border-emerald-500 focus:ring-emerald-500 bg-white/80 font-medium"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Message
                  </label>
                  <Textarea 
                    id="message" 
                    rows={4} 
                    placeholder="Your message here..." 
                    required 
                    className="rounded-2xl border-2 border-emerald-200 focus:border-emerald-500 focus:ring-emerald-500 bg-white/80 font-medium"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full sm:w-auto bg-emerald-700 hover:bg-emerald-800 text-white font-extrabold rounded-full px-8 py-3 shadow-md transition-all hover:scale-105 cursor-pointer"
                >
                  <Send className="mr-2 h-4 w-4" /> Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

        </div>

      </div>
    </div>
  );
}