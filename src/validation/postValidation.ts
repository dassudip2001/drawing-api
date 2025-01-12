import { z } from "zod";

export const createPostSchema = z.object({
  title: z
    .string()
    .min(3, "Title must be at least 3 characters long")
    .max(255, "Title must be less than 255 characters"),
  accession_number: z
    .string()
    .min(3, "Accession number must be at least 3 characters long")
    .max(255, "Accession number must be less than 255 characters"),
  content: z
    .string()
    .min(3, "Content must be at least 3 characters long")
    .max(255, "Content must be less than 255 characters")
    .optional(),
  image_url: z
    .string()
    .min(3, "Image url must be at least 3 characters long")
    .max(255, "Image url must be less than 255 characters")
    .optional(),
  published: z.boolean().optional(),
  publish_date: z.date().optional(),
  authorId: z.string(),
  categoryId: z.string(),
});

export type CreatePostInput = z.infer<typeof createPostSchema>;

export const updatePostSchema = z.object({
  title: z
    .string()
    .min(3, "Title must be at least 3 characters long")
    .max(255, "Title must be less than 255 characters"),
  accession_number: z
    .string()
    .min(3, "Accession number must be at least 3 characters long")
    .max(255, "Accession number must be less than 255 characters"),
  content: z
    .string()
    .min(3, "Content must be at least 3 characters long")
    .max(255, "Content must be less than 255 characters")
    .optional(),
  image_url: z
    .string()
    .min(3, "Image url must be at least 3 characters long")
    .max(255, "Image url must be less than 255 characters")
    .optional(),
  published: z.boolean().optional(),
  publish_date: z.date().optional(),
  authorId: z.string(),
  categoryId: z.string(),
});

export type UpdatePostInput = z.infer<typeof updatePostSchema>;
