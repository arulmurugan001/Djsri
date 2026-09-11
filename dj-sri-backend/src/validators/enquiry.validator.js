import { z } from "zod";

const optionalPhone = z
  .string()
  .trim()
  .max(20, "Phone number is too long.")
  .regex(/^[+0-9\s()-]*$/, "Enter a valid phone number.")
  .optional()
  .transform((value) => value || null);

export const createEnquirySchema = z.object({
  name: z.string().trim().min(2).max(50),
  email: z.email().trim().toLowerCase(),
  phone: optionalPhone,
  eventType: z.string().trim().min(2).max(100),
  message: z.string().trim().min(10).max(1000),
});

export const updateEnquirySchema = z
  .object({
    status: z.enum(["NEW", "CONTACTED", "CONFIRMED", "CLOSED"]),
  })
  .strict();

export const enquiryIdSchema = z.uuid();
