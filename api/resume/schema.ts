import { z } from 'zod'

import { imageSchema } from '@/schemas/imageSchema'

/**
 * Resume GET schema
 */
export const resumeGETSchema = z.object({
  data: z.object({
    id: z.number(),
    attributes: z.object({
      about: z.string(),
      createdAt: z.string().transform((date) => new Date(date)),
      updatedAt: z.string().transform((date) => new Date(date)),
      publishedAt: z.string().transform((date) => new Date(date)),
      images: z.object({
        data: z.array(imageSchema),
      }),
    }),
  }),
  meta: z.object({}),
})

export type ResumeGETSchema = z.infer<typeof resumeGETSchema>
