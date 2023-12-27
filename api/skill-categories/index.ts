import API from '@/api'

import { skillCategoriesGETSchema } from './schema'

/**
 * Get skill categories.
 * @path GET /skill-categories
 */
export async function get() {
  const api = new API()
  const data = await api.get(
    '/skill-categories?populate[skills][populate][icon]=*&populate[icon]=*&populate[skills][populate][experienceLevel]=*',
  )

  return skillCategoriesGETSchema.parse(data)
}

const skillCategoriesApi = {
  get,
}

export default skillCategoriesApi
