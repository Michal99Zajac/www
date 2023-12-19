import API from '@/api'

import { jobsGETSchema } from './schema'

/**
 * Get the jobs.
 * @path GET /jobs
 */
export async function get() {
  const api = new API()
  const data = await api.get('/jobs?populate=*')

  return jobsGETSchema.parse(data)
}

const jobsAPI = {
  get,
}

export default jobsAPI
