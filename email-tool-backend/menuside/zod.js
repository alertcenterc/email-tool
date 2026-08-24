import { z } from "zod";

export const viewSchema = z.object({
  profileId: z
    .string()
    .min(2, { message: "phone must be at least 10 characters long" })
    .max(20, { message: "phone must be 6 characters or less" }),
});
