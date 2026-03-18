import { FadeIn } from "@/components/animations/FadeIn";
import { Heart, ShieldCheck, Users } from "lucide-react";

export default function About() {
  return (
    <div className="pt-24 pb-24 w-full bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-5xl font-display font-bold text-foreground mb-6">About Hampton Court</h1>
          <p className="text-xl text-muted-foreground">
            A family-owned skilled nursing and rehabilitation center serving North Miami Beach with compassion and dedication for over 30 years.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <FadeIn direction="right">
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                At Hampton Court Nursing &amp; Rehabilitation Center, we believe that high-quality medical care must be paired with genuine compassion. Located at 16100 NW 2nd Ave in North Miami Beach, our family-owned facility has been a trusted part of the community for over 30 years — designed to feel less like a hospital and more like a home.
              </p>
              <p>
                Whether you or a loved one are joining us for short-term rehabilitation following a hospital discharge, or seeking long-term skilled nursing support, our mission remains the same: to foster an environment of healing, comfort, and unwavering respect. Our dedicated Orthopedic and Spine Rehab Unit serves patients recovering from orthopedic surgery, spinal procedures, and related conditions.
              </p>
              <p>
                Our dedicated, multilingual staff is deeply embedded in the local community. We understand the nuances of family dynamics and the stress that often accompanies healthcare transitions — and we are rated by both the State and Federal government for quality of care. Families and doctors alike trust Hampton Court.
              </p>
            </div>
          </FadeIn>
          <FadeIn direction="left" className="relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative">
              <img 
                src="https://images.unsplash.com/photo-1584515933487-779824d29309?w=1000&q=80" 
                alt="Compassionate staff at Hampton Court" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl border border-border max-w-xs hidden md:block">
              <p className="font-display font-bold text-primary text-xl mb-2">Our Promise</p>
              <p className="text-muted-foreground text-sm">To treat every resident with the same dignity and love we would extend to our own family.</p>
            </div>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { 
              icon: Heart, 
              title: "Compassionate Environment", 
              desc: "A culture of warmth that prioritizes emotional well-being alongside physical health — built by a family-owned team that has cared for this community for over 30 years." 
            },
            { 
              icon: ShieldCheck, 
              title: "Rated by State & Federal Government", 
              desc: "Hampton Court is highly rated by Florida State and Federal health quality programs. Our standards reflect a commitment to safe, accountable, and excellent care." 
            },
            { 
              icon: Users, 
              title: "Dignity & Respect", 
              desc: "Honoring the life experiences and personal preferences of every resident in our care — always treating patients as we would our own family." 
            }
          ].map((val, i) => (
            <FadeIn key={i} delay={i * 0.1} className="bg-muted/30 p-8 rounded-2xl border border-border hover:shadow-md transition-all">
              <val.icon className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-2xl font-display font-bold text-foreground mb-4">{val.title}</h3>
              <p className="text-muted-foreground">{val.desc}</p>
            </FadeIn>
          ))}
        </div>

      </div>
    </div>
  );
}
