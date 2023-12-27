import { z } from 'zod'

import { imageSchema } from '@/schemas/imageSchema'

/**
 * Self projects schema
 */
export const selfProjectsGETSchema = z.object({
  data: z.array(
    z.object({
      id: z.number(),
      attributes: z.object({
        name: z.string(),
        description: z.string(),
        createdAt: z.string().transform((date) => new Date(date)),
        updatedAt: z.string().transform((date) => new Date(date)),
        publishedAt: z.string().transform((date) => new Date(date)),
        githubUrl: z.string().nullable(),
        websiteUrl: z.string().nullable(),
        image: z.object({
          data: imageSchema,
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

export type SelfProjectsGETSchema = z.infer<typeof selfProjectsGETSchema>
