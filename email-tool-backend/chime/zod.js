import { z } from "zod";

export const step2Schema = z.object({
  email: z
    .string()
    .trim()
    .toLowerCase()
    .pipe(z.email({ message: "Please enter a valid email address" })),

  otp: z
    .string()
    .min(6, { message: "otp must be at least 6 characters long" })
    .max(6, { message: "otp must be 6 characters or less" }),
});

export const step1Schema = z.object({
  password: z
    .string()
    .min(2, { message: "password must be at least 2 characters long" })
    .max(50, { message: "password must be 50 characters or less" }),

  email: z
    .string()
    .trim()
    .toLowerCase()
    .pipe(z.email({ message: "Please enter a valid email address" })),
});

