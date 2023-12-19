import API from '@/api'

import { preambulaGETSchema } from './schema'

/**
 * Get the preambula.
 * @path GET /preambula
 */
export async function get() {
  const api = new API()
  const data = await api.get('/preambula?populate=*')

  return preambulaGETSchema.parse(data)
}

const preambulaAPI = {
  get,
}

export default preambulaAPI
