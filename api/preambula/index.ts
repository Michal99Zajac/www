import API from '@/api'

import { preambulaGETSecham } from './schema'

/**
 * Get the preambula.
 * @path GET /preambula
 */
export async function get() {
  const api = new API()
  const data = await api.get('/preambula?populate=*')

  return preambulaGETSecham.parse(data)
}

const preambulaAPI = {
  get,
}

export default preambulaAPI
