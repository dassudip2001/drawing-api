import { z } from "zod";

export const createUserSchema = z.object({
  email: z
    .string()
    .email("Email is invalid")
    .min(3, "Email must be at least 3 characters long")
    .max(255, "Email must be less than 255 characters"),
  name: z
    .string()
    .min(3, "Name must be at least 3 characters long")
    .max(255, "Name must be less than 255 characters"),
  password: z
    .string()
    .min(3, "Password must be at least 3 characters long")
    .max(255, "Password must be less than 255 characters"),
});

export type CreateUserInput = z.infer<typeof createUserSchema>;

export const loginSchema = z.object({
  email: z
    .string({ message: "Email is required." })
    .email({ message: "Please enter correct email" }),
  password: z.string({ message: "Password is required" }),
});

export type LoginUserInput = z.infer<typeof loginSchema>;
