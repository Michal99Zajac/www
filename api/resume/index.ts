import API from '@/api'

import { resumeGETSchema } from './schema'

/**
 * Get the resume.
 * @path GET /resume
 */
export async function get() {
  const api = new API()
  const data = await api.get('/resume?populate=*')

  return resumeGETSchema.parse(data)
}

const resumeApi = {
  get,
}

export default resumeApi
