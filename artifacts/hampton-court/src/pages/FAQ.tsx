import { FadeIn } from "@/components/animations/FadeIn";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  const faqs = [
    {
      q: "What types of care do you provide?",
      a: "We provide comprehensive skilled nursing care, short-term rehabilitation (physical, occupational, and speech therapy), and long-term care support in a compassionate, family-oriented environment."
    },
    {
      q: "How do I know if rehab is the right next step?",
      a: "If you or a loved one are being discharged from the hospital but are not quite strong or safe enough to return home, short-term rehabilitation provides the necessary medical supervision and daily therapy to rebuild strength and independence."
    },
    {
      q: "Can families visit?",
      a: "Yes, family involvement is a crucial part of the healing process! We welcome visitors daily from 8:00 AM to 8:00 PM. We have beautiful common areas and outdoor spaces perfect for spending quality time together."
    },
    {
      q: "How do I start the admissions process?",
      a: "The easiest way is to contact our admissions team directly via phone or our website form. If you are currently in a hospital, you can also inform your hospital discharge planner or social worker that you would like to be referred to Hampton Court."
    },
    {
      q: "What should I bring for a loved one's stay?",
      a: "We recommend bringing comfortable, loose-fitting clothing (especially for therapy), supportive non-slip shoes, personal toiletries, glasses, hearing aids, dentures, and any small personal items (like photos) that make the room feel like home."
    },
    {
      q: "Do you accept Medicare or Medicaid?",
      a: "Please contact our admissions team directly to discuss the most up-to-date insurance information, Medicare/Medicaid acceptance, and personal coverage options."
    }
  ];

  return (
    <div className="pt-24 pb-24 w-full bg-muted/30 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <FadeIn className="text-center mb-16">
          <h1 className="text-5xl font-display font-bold text-foreground mb-6">Frequently Asked Questions</h1>
          <p className="text-xl text-muted-foreground">
            We understand you have questions. Here are answers to some of the most common inquiries we receive from families.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="bg-white rounded-3xl p-6 md:p-10 shadow-xl border border-border">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-xl px-6 bg-muted/10 data-[state=open]:bg-white data-[state=open]:shadow-md transition-all">
                  <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline py-6">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </FadeIn>

        <FadeIn delay={0.4} className="mt-16 text-center">
          <p className="text-lg text-foreground mb-6 font-medium">Still have questions?</p>
          <Link href="/contact">
            <Button size="lg" className="rounded-full px-10 shadow-lg">
              Contact Our Team
            </Button>
          </Link>
        </FadeIn>

      </div>
    </div>
  );
}
