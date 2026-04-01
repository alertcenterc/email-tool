import { z } from "zod";

export const sendEmail = z.object({
  amount: z
    .string()
    .regex(/^\d+$/, { message: "amount must contain digits only" }),

  name: z
    .string()
    .min(2, { message: "First name must be at least 2 characters long" })
    .max(20, { message: "First name must be 30 characters or less" }),

  email: z
    .string()
    .trim()
    .toLowerCase()
    .pipe(z.email({ message: "Please enter a valid email address" })),
});