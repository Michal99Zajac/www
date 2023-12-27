import API from '@/api'

import { selfProjectsGETSchema } from './schema'

/**
 * Get self projects.
 * @path GET /self-projects
 */
export async function get() {
  const api = new API()
  const data = await api.get('/self-projects?populate=*')

  return selfProjectsGETSchema.parse(data)
}

const selfProjectsAPI = {
  get,
}

export default selfProjectsAPI
