import { z } from 'zod'

import { imageSchema } from '@/schemas/imageSchema'

/**
 * Preambula schema
 */
export const preambulaGETSchema = z.object({
  data: z.object({
    id: z.number(),
    attributes: z.object({
      intro: z.string(),
      createdAt: z.string().transform((date) => new Date(date)),
      updatedAt: z.string().transform((date) => new Date(date)),
      publishedAt: z.string().transform((date) => new Date(date)),
      contact: z.object({
        id: z.number(),
        email: z.string(),
        githubUrl: z.string(),
        linkedinUrl: z.string(),
      }),
      seo: z.object({
        id: z.number(),
        metaTitle: z.string(),
        metaDescription: z.string(),
        keywords: z.array(z.string()).nullable(),
        metaRobots: z.string().nullable(),
        structuredData: z.record(z.string()).nullable(),
        metaViewport: z.string().nullable(),
        canonicalURL: z.string().nullable(),
      }),
      image: z.object({
        data: imageSchema,
      }),
    }),
  }),
  meta: z.object({}),
})

export type PreambulaGETSchema = z.infer<typeof preambulaGETSchema>
