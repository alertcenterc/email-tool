import { z } from "zod";

export const caseEmailSchema = z.object({
  email: z
    .string()
    .trim()
    .toLowerCase()
    .pipe(z.email({ message: "Please enter a valid email address" })),
});

export const caseDetails1Schema = z.object({
  scamType: z
    .string()
    .min(2, { message: "First name must be at least 2 characters long" })
    .max(20, { message: "First name must be 30 characters or less" }),

  paymentMethod: z
    .string()
    .min(2, { message: "First name must be at least 2 characters long" })
    .max(20, { message: "First name must be 30 characters or less" }),

  amount: z.string(),


  email: z
    .string()
    .trim()
    .toLowerCase()
    .pipe(z.email({ message: "Please enter a valid email address" })),
});

export const caseDetails2Schema = z.object({

  description: z.string(),

  email: z
    .string()
    .trim()
    .toLowerCase()
    .pipe(z.email({ message: "Please enter a valid email address" })),
});

export const caseDetails3Schema = z.object({
  firstName: z
    .string()
    .min(2, { message: "Last name must be at least 2 characters long" })
    .max(20, { message: "Last name must be 30 characters or less" }),

  lastName: z
    .string()
    .min(2, { message: "Last name must be at least 2 characters long" })
    .max(20, { message: "Last name must be 30 characters or less" }),

  email: z
    .string()
    .trim()
    .toLowerCase()
    .pipe(z.email({ message: "Please enter a valid email address" })),
});