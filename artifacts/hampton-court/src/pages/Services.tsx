import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { 
  Stethoscope, Activity, Speech, BrainCircuit, Home as HomeIcon, Heart
} from "lucide-react";

export default function Services() {
  const services = [
    {
      id: "nursing",
      title: "24-Hour Skilled Nursing",
      icon: Stethoscope,
      who: "Individuals recovering from complex surgeries, managing chronic illnesses, or requiring specialized wound care.",
      what: "Round-the-clock observation and care administered by registered nurses and licensed practical nurses. We provide medication management, IV therapy, pain management, and continuous monitoring in a safe, comforting setting."
    },
    {
      id: "pt",
      title: "Physical Therapy",
      icon: Activity,
      who: "Patients recovering from orthopedic surgery (like joint replacements), strokes, or severe falls.",
      what: "Personalized exercise programs designed to rebuild strength, improve balance, and restore mobility. Our therapists work patiently with residents to regain their independence safely."
    },
    {
      id: "ot",
      title: "Occupational Therapy",
      icon: BrainCircuit,
      who: "Those needing help relearning daily living activities after an injury or neurological event.",
      what: "Compassionate guidance to help residents safely perform activities like dressing, bathing, and eating. We focus on adapting the environment and utilizing tools to maximize self-reliance."
    },
    {
      id: "st",
      title: "Speech Therapy",
      icon: Speech,
      who: "Individuals facing communication challenges or swallowing difficulties, often following a stroke.",
      what: "Specialized exercises to improve speech clarity, cognitive communication skills, and safe swallowing techniques. Handled with patience and encouragement."
    },
    {
      id: "short-term",
      title: "Short-Term Rehabilitation",
      icon: HomeIcon,
      who: "Patients transitioning from a hospital stay who aren't quite ready to return home safely.",
      what: "A focused, goal-oriented program combining skilled nursing and daily therapies. Our aim is to facilitate a smooth, confident, and safe transition back to your normal life."
    },
    {
      id: "long-term",
      title: "Long-Term Support",
      icon: Heart,
      who: "Seniors who require continuous care and assistance that can no longer be managed at home.",
      what: "A warm, dignified residential environment offering 24/7 assistance, social activities, nutritious dining, and peace of mind for families knowing their loved ones are safe and respected."
    }
  ];

  return (
    <div className="pt-24 pb-24 w-full bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <FadeIn className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-5xl font-display font-bold text-foreground mb-6">Our Services</h1>
          <p className="text-xl text-muted-foreground">
            Comprehensive care tailored to your specific medical needs and personal goals, delivered by a team that genuinely cares.
          </p>
        </FadeIn>

        <div className="space-y-16">
          {services.map((service, index) => (
            <FadeIn 
              key={service.id} 
              delay={index * 0.1}
              direction={index % 2 === 0 ? "right" : "left"}
            >
              <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-border flex flex-col md:flex-row gap-8 items-start relative overflow-hidden group hover:border-primary/30 transition-colors">
                
                {/* Decorative background accent */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-muted rounded-full opacity-50 group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>
                
                <div className="bg-primary/10 p-6 rounded-2xl shrink-0 z-10">
                  <service.icon className="w-12 h-12 text-primary" />
                </div>
                
                <div className="flex-grow z-10">
                  <h2 className="text-3xl font-display font-bold text-foreground mb-6">{service.title}</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-sm font-bold text-primary uppercase tracking-wider mb-3">Who it helps</h3>
                      <p className="text-muted-foreground leading-relaxed">{service.who}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-secondary-foreground uppercase tracking-wider mb-3">What to expect</h3>
                      <p className="text-muted-foreground leading-relaxed">{service.what}</p>
                    </div>
                  </div>
                </div>

              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="mt-20 text-center bg-primary/5 rounded-3xl p-12 border border-primary/10">
          <h2 className="text-3xl font-display font-bold mb-4">Not sure which service is right?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our admissions team is here to help evaluate your needs, coordinate with your physician, and verify insurance coverage.
          </p>
          <Link href="/contact">
            <Button size="lg" className="rounded-full px-10 h-14 text-lg">
              Contact Admissions
            </Button>
          </Link>
        </FadeIn>

      </div>
    </div>
  );
}
