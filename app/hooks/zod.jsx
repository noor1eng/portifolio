import { z } from "zod";

export const schema = z.object({
  name: z.string().min(2, "Name is too short"),

  email: z.string().email("Invalid email"),

  subject: z.string().min(3, "Subject is required"),

  message: z.string().min(10, "Message is too short"),
});
