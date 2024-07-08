import { z } from "zod";

export const ItemSchema = z.object({
  id: z.string().uuid().optional(),
  name: z.string().min(5).max(100),
  description: z.string().max(500).optional().nullable(),
  price: z.number().positive(),
  category: z.enum(["electronics", "clothing", "books", "food", "other"]),
  inStock: z.boolean(),
  createdAt: z.date().default(new Date()),
  tags: z.array(z.string().optional()).optional(),
  manufacturer: z
    .object({
      name: z.string(),
      country: z.string(),
    })
    .optional()
    .nullable(),
});
