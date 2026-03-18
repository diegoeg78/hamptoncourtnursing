import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FadeIn } from "@/components/animations/FadeIn";
import { 
  Heart, Activity, ShieldCheck, Users, 
  Stethoscope, Home as HomeIcon, CheckCircle2,
  ArrowRight, PhoneCall, Star
} from "lucide-react";

export default function Home() {
  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden">
        {/* Background Layer */}
        <div className="absolute inset-0 z-0">
          <img 
            src={`${import.meta.env.BASE_URL}images/hero-texture.png`} 
            alt="Warm texture" 
            className="absolute inset-0 w-full h-full object-cover opacity-60"
          />
          {/* nurse holding hands with elderly patient in sunny room */}
          <img 
            src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=2000&q=80" 
            alt="Compassionate nursing care" 
            className="absolute inset-0 w-full h-full object-cover object-center mix-blend-multiply opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-12 lg:py-24">
          <div className="max-w-2xl">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6 border border-primary/20">
                <Heart className="w-4 h-4" />
                <span>Welcome to Hampton Court</span>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.1}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-foreground leading-[1.1] mb-6">
                Compassionate <span className="text-primary relative whitespace-nowrap">
                  Rehabilitation
                  <svg className="absolute -bottom-2 left-0 w-full h-3 text-secondary/40 fill-current" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5 L 100 10 L 0 10 Z" />
                  </svg>
                </span> <br/>
                & Skilled Nursing
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed">
                A family-owned care facility in North Miami Beach dedicated to your comfort, recovery, and dignity.
              </p>
            </FadeIn>

            <FadeIn delay={0.3} className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg" className="w-full sm:w-auto text-lg px-8 h-14 rounded-full shadow-xl shadow-primary/25 hover:-translate-y-1 transition-all duration-300">
                  Schedule a Tour
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg px-8 h-14 rounded-full border-2 hover:bg-primary/5 transition-all">
                  <PhoneCall className="w-5 h-5 mr-2" />
                  Speak With Our Team
                </Button>
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* TRUST BAND */}
      <section className="bg-primary text-primary-foreground py-12 relative z-20 -mt-10 mx-4 sm:mx-8 rounded-2xl shadow-xl">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x-0 md:divide-x divide-primary-foreground/20">
            {[
              { icon: Stethoscope, title: "Skilled Nursing Support" },
              { icon: Activity, title: "Rehabilitation Services" },
              { icon: Heart, title: "Compassionate Care" },
              { icon: Users, title: "Family-Focused Approach" }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1} className="flex flex-col items-center text-center px-4">
                <item.icon className="w-10 h-10 mb-4 text-accent" strokeWidth={1.5} />
                <h3 className="font-display font-semibold text-lg">{item.title}</h3>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeIn>
              <h2 className="text-4xl font-display font-bold text-foreground mb-4">Comprehensive Care Services</h2>
              <p className="text-xl text-muted-foreground">
                Tailored care plans designed to support your unique path to recovery and wellness.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Skilled Nursing", desc: "Round-the-clock professional medical care from registered nurses.", icon: ShieldCheck },
              { title: "Rehabilitation Therapy", desc: "Physical, occupational, and speech therapy to restore independence.", icon: Activity },
              { title: "Short-Term Recovery", desc: "Transitional care to bridge the gap between hospital and home.", icon: HomeIcon },
              { title: "Long-Term Care", desc: "A compassionate, dignified environment for extended stays.", icon: Heart }
            ].map((service, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <Card className="h-full group hover:shadow-xl hover:border-primary/30 transition-all duration-300 border-border/60 bg-white">
                  <CardContent className="p-8 flex flex-col items-start h-full">
                    <div className="p-4 rounded-2xl bg-primary/10 text-primary mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <service.icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-display font-bold mb-3 text-foreground">{service.title}</h3>
                    <p className="text-muted-foreground mb-6 flex-grow">{service.desc}</p>
                    <Link href="/services" className="inline-flex items-center font-semibold text-primary group-hover:text-primary/80 transition-colors">
                      Learn More <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* WHY FAMILIES CHOOSE US */}
      <section className="py-24 bg-muted/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="right">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                {/* bright and cheerful senior care facility living room */}
                <img 
                  src="https://pixabay.com/get/gc7dc0efae1840192e093dae020d74e1fb47c39f95f6949876caaea072e9d9228e0dd95df08b0692a6fe3359ce1d7bedc9c522a5cdfbdf915e55cd5cb8177eb44_1280.jpg" 
                  alt="Comfortable care environment" 
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute bottom-6 left-6 right-6 glass-panel rounded-2xl p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center text-white shrink-0">
                      <Heart className="w-7 h-7" />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-xl text-foreground">Family Owned</h4>
                      <p className="text-muted-foreground">Serving North Miami Beach with love.</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="left">
              <h2 className="text-4xl font-display font-bold text-foreground mb-6">Why Families Choose Us</h2>
              <p className="text-xl text-muted-foreground mb-8">
                We understand that choosing a care facility is an important decision. 
                At Hampton Court, we treat every resident like a member of our own family.
              </p>
              
              <ul className="space-y-6">
                {[
                  "Warm, caring, and homelike environment",
                  "Dedicated support for complex recovery journeys",
                  "Respectful staff who prioritize resident dignity",
                  "Clear, consistent communication with families",
                  "Comfort-focused amenities and peaceful spaces"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-secondary shrink-0 mt-1" />
                    <span className="text-lg font-medium text-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10">
                <Link href="/about">
                  <Button variant="outline" size="lg" className="rounded-full px-8">
                    Read Our Story
                  </Button>
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* PATIENT JOURNEY */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-4xl font-display font-bold text-foreground mb-4">A Simple Path to Recovery</h2>
            <p className="text-xl text-muted-foreground mb-16 max-w-2xl mx-auto">
              We work closely with hospitals and families to ensure a seamless transition into our care.
            </p>
          </FadeIn>

          <div className="relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-1/2 left-[10%] right-[10%] h-1 bg-muted -translate-y-1/2 z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
              {[
                { step: "01", title: "Hospital Discharge", desc: "Coordinating directly with your doctors.", icon: Activity },
                { step: "02", title: "Rehab & Recovery", desc: "Personalized therapy and skilled nursing.", icon: ShieldCheck },
                { step: "03", title: "Ongoing Support", desc: "Returning home or transitioning to long-term care.", icon: Heart }
              ].map((item, i) => (
                <FadeIn key={i} delay={i * 0.2} className="flex flex-col items-center">
                  <div className="w-24 h-24 rounded-full bg-white border-4 border-primary/20 shadow-xl flex items-center justify-center mb-6 relative group hover:border-primary transition-colors">
                    <item.icon className="w-10 h-10 text-primary" />
                    <div className="absolute -top-3 -right-3 w-8 h-8 bg-secondary text-secondary-foreground font-bold rounded-full flex items-center justify-center border-2 border-white shadow-sm">
                      {item.step}
                    </div>
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-center">{item.desc}</p>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-4">Stories of Recovery</h2>
            <p className="text-xl text-primary-foreground/80">Hear from the families we've had the privilege to serve.</p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Sarah M.", rel: "Daughter of resident", quote: "The staff at Hampton Court treated my mother with such dignity and respect. Her physical therapy progress was amazing to watch. We are forever grateful." },
              { name: "James L.", rel: "Former short-term rehab patient", quote: "After my surgery, I needed a place to recover before going home. The nursing care was top-notch, and the environment felt so warm and welcoming." },
              { name: "Elena R.", rel: "Spouse of resident", quote: "Choosing long-term care for my husband was difficult, but the team here made us feel like family. I have complete peace of mind knowing he is safe." }
            ].map((t, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <Card className="bg-white/10 border-white/20 text-white backdrop-blur-sm h-full hover:bg-white/20 transition-colors">
                  <CardContent className="p-8">
                    <div className="flex gap-1 mb-6">
                      {[1,2,3,4,5].map(s => <Star key={s} className="w-5 h-5 fill-secondary text-secondary" />)}
                    </div>
                    <p className="text-lg italic mb-8 leading-relaxed">"{t.quote}"</p>
                    <div>
                      <p className="font-bold font-display text-xl">{t.name}</p>
                      <p className="text-primary-foreground/70 text-sm mt-1">{t.rel}</p>
                      <p className="text-xs text-primary-foreground/50 mt-2 font-mono uppercase tracking-wider">[Sample Family Story]</p>
                    </div>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 bg-background border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Ready to take the next step?
            </h2>
            <p className="text-xl text-muted-foreground mb-10">
              Contact our admissions team to verify insurance, discuss care options, or schedule a personal tour of our facility.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" className="w-full sm:w-auto text-lg px-10 h-14 rounded-full shadow-lg">
                  Schedule a Tour
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg px-10 h-14 rounded-full border-2 bg-white">
                  Contact Admissions
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
