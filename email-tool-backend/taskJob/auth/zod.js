import { z } from "zod";

export const loginSchema = z.object({
 
    email: z
      .string()
      .trim()
      .toLowerCase()
      .pipe(z.email({ message: "Please enter a valid email address" })),
  password: z
    .string()
    .min(5, { message: "New password must be at least 5 characters long" })
    .max(20)
});


export const signupSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: "First name must be at least 2 characters long" })
    .max(20, { message: "First name must be 30 characters or less" }),

  lastName: z
    .string()
    .min(2, { message: "Last name must be at least 2 characters long" })
    .max(20, { message: "Last name must be 30 characters or less" }),

  email: z
    .string()
    .trim()
    .toLowerCase()
    .pipe(z.email({ message: "Please enter a valid email address" })),
  password: z
    .string()
    .min(5, { message: "password must be at least 6 characters long" })
    .max(20),
});
