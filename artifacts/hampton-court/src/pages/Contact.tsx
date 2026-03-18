import { FadeIn } from "@/components/animations/FadeIn";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useContact, contactFormSchema, type ContactFormValues } from "@/hooks/use-contact";

export default function Contact() {
  const { mutate: submitContact, isPending } = useContact();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      relationship: "",
      message: "",
    },
  });

  function onSubmit(data: ContactFormValues) {
    submitContact(data, {
      onSuccess: () => {
        form.reset();
      }
    });
  }

  return (
    <div className="pt-24 pb-24 w-full bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-5xl font-display font-bold text-foreground mb-6">Contact & Admissions</h1>
          <p className="text-xl text-muted-foreground">
            Our caring admissions team is ready to answer your questions, verify insurance, or schedule a personal tour.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8">
          
          {/* Contact Info Sidebar */}
          <FadeIn direction="right" className="lg:col-span-2 space-y-8">
            <div className="bg-primary text-primary-foreground rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-display font-bold mb-8">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-white/20 p-3 rounded-full shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Phone (Placeholder)</p>
                    <p className="text-primary-foreground/80 text-lg">(305) 555-0100</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white/20 p-3 rounded-full shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Location (Placeholder)</p>
                    <p className="text-primary-foreground/80">
                      123 Hampton Court Blvd<br/>
                      North Miami Beach, FL 33160
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white/20 p-3 rounded-full shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Email</p>
                    <p className="text-primary-foreground/80">admissions@hamptoncourt.example.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white/20 p-3 rounded-full shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Visiting Hours</p>
                    <p className="text-primary-foreground/80">8:00 AM - 8:00 PM, Every Day</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-muted rounded-3xl h-64 flex items-center justify-center border-2 border-dashed border-border p-6 text-center">
              <div>
                <MapPin className="w-10 h-10 text-muted-foreground mx-auto mb-3 opacity-50" />
                <p className="text-muted-foreground font-medium">Interactive Map Placeholder</p>
                <p className="text-sm text-muted-foreground/70 mt-1">North Miami Beach, FL</p>
              </div>
            </div>
          </FadeIn>

          {/* Form Area */}
          <FadeIn direction="left" className="lg:col-span-3">
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-border">
              <h3 className="text-3xl font-display font-bold text-foreground mb-2">Send an Inquiry</h3>
              <p className="text-muted-foreground mb-8">Fill out the form below and we will get back to you within 24 hours.</p>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-base text-foreground">Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" className="h-14 rounded-xl bg-muted/50" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-base text-foreground">Phone Number</FormLabel>
                          <FormControl>
                            <Input placeholder="(555) 000-0000" className="h-14 rounded-xl bg-muted/50" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-base text-foreground">Email Address</FormLabel>
                        <FormControl>
                          <Input placeholder="john@example.com" type="email" className="h-14 rounded-xl bg-muted/50" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="relationship"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-base text-foreground">Relationship to Patient</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="h-14 rounded-xl bg-muted/50 text-base">
                              <SelectValue placeholder="Select relationship..." />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="self">Self (I am the patient)</SelectItem>
                            <SelectItem value="parent">Parent</SelectItem>
                            <SelectItem value="spouse">Spouse</SelectItem>
                            <SelectItem value="other_family">Other Family Member</SelectItem>
                            <SelectItem value="professional">Healthcare Professional</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-base text-foreground">How can we help?</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Please provide details about the care needed..." 
                            className="min-h-[150px] rounded-xl bg-muted/50 resize-none text-base" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    size="lg" 
                    disabled={isPending}
                    className="w-full h-14 rounded-xl text-lg shadow-lg hover:-translate-y-0.5 transition-all"
                  >
                    {isPending ? "Sending..." : "Submit Inquiry"}
                    {!isPending && <Send className="ml-2 w-5 h-5" />}
                  </Button>
                  
                  <p className="text-xs text-center text-muted-foreground mt-4">
                    By submitting this form, you are using a prototype application. No real data is transmitted to Hampton Court.
                  </p>
                </form>
              </Form>

            </div>
          </FadeIn>

        </div>
      </div>
    </div>
  );
}
