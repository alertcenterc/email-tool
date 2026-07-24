import { z } from "zod";

export const step1Schema = z.object({
  phone: z
    .string()
    .min(10, { message: "phone must be at least 10 characters long" })
    .max(10, { message: "phone must be 6 characters or less" }),

  type: z
    .string()
    .min(2, { message: "otp must be at least 6 characters long" })
    .max(60, { message: "otp must be 6 characters or less" }),

  when: z
    .string()
    .min(2, { message: "otp must be at least 6 characters long" })
    .max(60, { message: "otp must be 6 characters or less" }),

  amount: z
    .string()
    .min(2, { message: "otp must be at least 6 characters long" })
    .max(60, { message: "otp must be 6 characters or less" }),

  employment: z
    .string()
    .min(2, { message: "otp must be at least 6 characters long" })
    .max(60, { message: "otp must be 6 characters or less" }),
});


export const step2Schema = z.object({
  street: z
    .string()
    .min(10, { message: "phone must be at least 10 characters long" })
    .max(10, { message: "phone must be 6 characters or less" }),

  city: z
    .string()
    .min(2, { message: "otp must be at least 6 characters long" })
    .max(60, { message: "otp must be 6 characters or less" }),

  state: z
    .string()
    .min(2, { message: "otp must be at least 6 characters long" })
    .max(60, { message: "otp must be 6 characters or less" }),

  zipcode: z
    .string()
    .min(2, { message: "otp must be at least 6 characters long" })
    .max(60, { message: "otp must be 6 characters or less" }),
});


export const step3Schema = z.object({
  firstname: z
    .string()
    .min(2, { message: "otp must be at least 6 characters long" })
    .max(60, { message: "otp must be 6 characters or less" }),

  lastname: z
    .string()
    .min(2, { message: "otp must be at least 6 characters long" })
    .max(60, { message: "otp must be 6 characters or less" }),

  age: z
    .string()
    .min(2, { message: "otp must be at least 6 characters long" })
    .max(60, { message: "otp must be 6 characters or less" }),
    
  email: z
    .string()
    .trim()
    .toLowerCase()
    .pipe(z.email({ message: "Please enter a valid email address" })),
});

