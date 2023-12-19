import { z } from 'zod'

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
      images: z.object({
        data: z.array(
          z.object({
            id: z.number(),
            attributes: z.object({
              name: z.string(),
              alternativeText: z.string().nullable(),
              caption: z.string().nullable(),
              width: z.number(),
              height: z.number(),
              formats: z.object({
                large: z.object({
                  ext: z.string(),
                  url: z.string(),
                  hash: z.string(),
                  mime: z.string(),
                  name: z.string(),
                  path: z.string().nullable(),
                  size: z.number(),
                  width: z.number(),
                  height: z.number(),
                }),
                medium: z.object({
                  ext: z.string(),
                  url: z.string(),
                  hash: z.string(),
                  mime: z.string(),
                  name: z.string(),
                  path: z.string().nullable(),
                  size: z.number(),
                  width: z.number(),
                  height: z.number(),
                }),
                small: z.object({
                  ext: z.string(),
                  url: z.string(),
                  hash: z.string(),
                  mime: z.string(),
                  name: z.string(),
                  path: z.string().nullable(),
                  size: z.number(),
                  width: z.number(),
                  height: z.number(),
                }),
                thumbnail: z.object({
                  ext: z.string(),
                  url: z.string(),
                  hash: z.string(),
                  mime: z.string(),
                  name: z.string(),
                  path: z.string().nullable(),
                  size: z.number(),
                  width: z.number(),
                  height: z.number(),
                }),
              }),
              hash: z.string(),
              ext: z.string(),
              mime: z.string(),
              size: z.number(),
              url: z.string(),
              previewUrl: z.string().nullable(),
              provider: z.string(),
              provider_metadata: z.string().nullable(),
              createdAt: z.string().transform((date) => new Date(date)),
              updatedAt: z.string().transform((date) => new Date(date)),
            }),
          }),
        ),
      }),
    }),
  }),
  meta: z.object({}),
})
