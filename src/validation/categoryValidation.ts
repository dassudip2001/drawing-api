import { z } from "zod";

export const createCategorySchema = z.object({
  name: z
    .string()
    .min(3, "Name must be at least 3 characters long")
    .max(255, "Name must be less than 255 characters"),
});

export type CreateCategoryInput = z.infer<typeof createCategorySchema>;

export const updateCategorySchema = z.object({
  name: z
    .string({
      message: "Name is required",
    })
    .min(3)
    .max(255),
});

export type UpdateCategoryInput = z.infer<typeof updateCategorySchema>;
