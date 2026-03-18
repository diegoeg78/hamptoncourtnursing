import { Router, type IRouter } from "express";
import { z } from "zod";

const router: IRouter = Router();

const ContactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  phone: z.string().optional(),
  email: z.string().email("Valid email is required"),
  message: z.string().min(1, "Message is required"),
  relationship: z.string().optional(),
});

router.post("/contact", (req, res) => {
  const result = ContactSchema.safeParse(req.body);

  if (!result.success) {
    res.status(400).json({
      success: false,
      errors: result.error.flatten().fieldErrors,
    });
    return;
  }

  // TODO: Replace with real email/CRM integration when going live
  console.log("Contact form submission received:", {
    name: result.data.name,
    email: result.data.email,
    phone: result.data.phone,
    relationship: result.data.relationship,
    message: result.data.message,
    timestamp: new Date().toISOString(),
  });

  res.json({
    success: true,
    message:
      "Thank you for reaching out. A member of our admissions team will contact you shortly.",
  });
});

export default router;
