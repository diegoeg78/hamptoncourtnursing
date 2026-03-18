import { useMutation } from "@tanstack/react-query";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";

// We define the schema here since this is a frontend-only prototype without a real API
export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  relationship: z.string().min(1, "Please select a relationship"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export function useContact() {
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: ContactFormValues) => {
      // Simulate network delay for the prototype
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      // Simulate a successful form submission
      console.log("[Prototype] Form submitted to /api/contact:", data);
      
      return { success: true, message: "Message received successfully." };
    },
    onSuccess: () => {
      toast({
        title: "Message Sent Successfully",
        description: "Thank you for reaching out. Our admissions team will contact you shortly.",
        variant: "default",
      });
    },
    onError: () => {
      toast({
        title: "Error Sending Message",
        description: "There was a problem submitting your inquiry. Please call us directly.",
        variant: "destructive",
      });
    }
  });
}
