import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Send, Sparkles } from "lucide-react";

export default function Contact() {
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
            <span>Let's Connect</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-stone-800 tracking-tight">
            Contact <span className="text-emerald-700">Me</span>
          </h1>
          <p className="text-stone-600 mt-2 text-base sm:text-lg max-w-xl leading-relaxed">
            Have a question, collaboration idea, or project in mind? Feel free to send a message!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          
          {/* Left Side: Contact Info Cards */}
          <div className="space-y-4">
            
            {/* Email Card */}
            <Card className="bg-white/85 backdrop-blur-md border border-emerald-200/80 shadow-xs rounded-2xl hover:-translate-y-1 transition-all">
              <CardContent className="p-4 flex items-center gap-3.5">
                <div className="p-2.5 rounded-xl bg-emerald-100 text-emerald-800 shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div className="overflow-hidden">
                  <p className="text-xs text-stone-400 font-semibold uppercase tracking-wider">Email</p>
                  <p className="text-sm font-semibold text-stone-800 truncate">bmorallo@ncf.edu.ph</p>
                </div>
              </CardContent>
            </Card>

            {/* Phone Card */}
            <Card className="bg-white/85 backdrop-blur-md border border-purple-200/80 shadow-xs rounded-2xl hover:-translate-y-1 transition-all">
              <CardContent className="p-4 flex items-center gap-3.5">
                <div className="p-2.5 rounded-xl bg-purple-100 text-purple-800 shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-stone-400 font-semibold uppercase tracking-wider">Phone</p>
                  <p className="text-sm font-semibold text-stone-800">+63 (900) 000-0000</p>
                </div>
              </CardContent>
            </Card>

            {/* Location Card */}
            <Card className="bg-white/85 backdrop-blur-md border border-pink-200/80 shadow-xs rounded-2xl hover:-translate-y-1 transition-all">
              <CardContent className="p-4 flex items-center gap-3.5">
                <div className="p-2.5 rounded-xl bg-pink-100 text-pink-800 shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-stone-400 font-semibold uppercase tracking-wider">Location</p>
                  <p className="text-sm font-semibold text-stone-800">Bula, Camarines Sur, PH</p>
                </div>
              </CardContent>
            </Card>

          </div>

          {/* Right Side: Message Form Card */}
          <Card className="md:col-span-2 bg-white/85 backdrop-blur-md border border-emerald-200/70 shadow-sm rounded-3xl">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-stone-800">
                Send a Message
              </CardTitle>
              <CardDescription className="text-stone-500">
                Fill out the form below and I'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-xs font-semibold text-stone-600 uppercase tracking-wider">
                      Name
                    </label>
                    <Input 
                      id="name" 
                      placeholder="Fritzgerald Enric T. Imperial" 
                      required 
                      className="rounded-xl border-emerald-100 focus:border-emerald-400 focus:ring-emerald-400 bg-emerald-50/30"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-xs font-semibold text-stone-600 uppercase tracking-wider">
                      Email
                    </label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="fimperial@ncf.edu.ph" 
                      required 
                      className="rounded-xl border-emerald-100 focus:border-emerald-400 focus:ring-emerald-400 bg-emerald-50/30"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="subject" className="text-xs font-semibold text-stone-600 uppercase tracking-wider">
                    Subject
                  </label>
                  <Input 
                    id="subject" 
                    placeholder="Project Inquiry / Hello" 
                    required 
                    className="rounded-xl border-emerald-100 focus:border-emerald-400 focus:ring-emerald-400 bg-emerald-50/30"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-xs font-semibold text-stone-600 uppercase tracking-wider">
                    Message
                  </label>
                  <Textarea 
                    id="message" 
                    rows={4} 
                    placeholder="Your message here..." 
                    required 
                    className="rounded-xl border-emerald-100 focus:border-emerald-400 focus:ring-emerald-400 bg-emerald-50/30"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full sm:w-auto bg-emerald-700 hover:bg-emerald-800 text-white font-medium rounded-full px-6 py-2.5 shadow-sm transition-all hover:scale-105"
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