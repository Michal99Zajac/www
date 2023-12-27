import { z } from 'zod'

/**
 * Image schema
 */
export const imageSchema = z.object({
  id: z.number(),
  attributes: z.object({
    name: z.string(),
    alternativeText: z.string().nullable(),
    caption: z.string().nullable(),
    width: z.number(),
    height: z.number(),
    formats: z
      .object({
        large: z
          .object({
            ext: z.string(),
            url: z.string(),
            hash: z.string(),
            mime: z.string(),
            name: z.string(),
            path: z.string().nullable(),
            size: z.number(),
            width: z.number(),
            height: z.number(),
          })
          .nullish(),
        medium: z
          .object({
            ext: z.string(),
            url: z.string(),
            hash: z.string(),
            mime: z.string(),
            name: z.string(),
            path: z.string().nullable(),
            size: z.number(),
            width: z.number(),
            height: z.number(),
          })
          .nullish(),
        small: z
          .object({
            ext: z.string(),
            url: z.string(),
            hash: z.string(),
            mime: z.string(),
            name: z.string(),
            path: z.string().nullable(),
            size: z.number(),
            width: z.number(),
            height: z.number(),
          })
          .nullish(),
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
      })
      .nullable(),
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
})

export type ImageSchema = z.infer<typeof imageSchema>
