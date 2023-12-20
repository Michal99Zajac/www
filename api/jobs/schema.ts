import { z } from 'zod'

/**
 * Jobs GET schema
 */
export const jobsGETSchema = z.object({
  data: z.array(
    z.object({
      id: z.number(),
      attributes: z.object({
        companyName: z.string(),
        startDate: z.string().transform((date) => new Date(date)),
        endDate: z
          .string()
          .nullable()
          .transform((date) => (date ? new Date(date) : null)),
        content: z.string(),
        createdAt: z.string().transform((date) => new Date(date)),
        updatedAt: z.string().transform((date) => new Date(date)),
        publishedAt: z.string().transform((date) => new Date(date)),
        projects: z.object({
          data: z.array(
            z.object({
              id: z.number(),
              attributes: z.object({
                name: z.string(),
                content: z.string(),
                startDate: z.string().transform((date) => new Date(date)),
                endDate: z
                  .string()
                  .nullable()
                  .transform((date) => (date ? new Date(date) : null)),
                createdAt: z.string().transform((date) => new Date(date)),
                updatedAt: z.string().transform((date) => new Date(date)),
                publishedAt: z.string().transform((date) => new Date(date)),
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

export type JobsGETSchema = z.infer<typeof jobsGETSchema>
