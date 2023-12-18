import { env } from '@/config/env'

/**
 * A class that provides a simple interface for making requests to the API.
 */
export class API {
  private token = env.API_TOKEN
  private url = env.API_URL

  public async get(path: string) {
    const response = await fetch(`${this.url}${path}`, {
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
    })

    return response.json()
  }
}

export default API
