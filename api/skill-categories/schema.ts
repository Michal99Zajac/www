import { z } from 'zod'

import { imageSchema } from '@/schemas/imageSchema'

/**
 * Skill categories GET schema
 */
export const skillCategoriesGETSchema = z.object({
  data: z.array(
    z.object({
      id: z.number(),
      attributes: z.object({
        name: z.string(),
        createdAt: z.string().transform((date) => new Date(date)),
        updatedAt: z.string().transform((date) => new Date(date)),
        publishedAt: z.string().transform((date) => new Date(date)),
        icon: z.object({
          data: z.array(imageSchema),
        }),
        skills: z.object({
          data: z.array(
            z.object({
              id: z.number(),
              attributes: z.object({
                name: z.string(),
                isFavourite: z.boolean(),
                createdAt: z.string().transform((date) => new Date(date)),
                updatedAt: z.string().transform((date) => new Date(date)),
                publishedAt: z.string().transform((date) => new Date(date)),
                icon: z.object({
                  data: imageSchema,
                }),
                experienceLevel: z.object({
                  id: z.number(),
                  level: z.enum(['Beginner', 'Elementary', 'Intermediate', 'Advanced', 'Expert']),
                  numericLevel: z.number().min(1).max(5),
                }),
              }),
            }),
          ),
        }),
      }),
    }),
  ),
  meta: z.object({
    pagination: z.object({
      page: z.number(),
      pageSize: z.number(),
      pageCount: z.number(),
      total: z.number(),
    }),
  }),
})

export type SkillCategoriesGETSchema = z.infer<typeof skillCategoriesGETSchema>
