import { BASE_URL, PAGES_API_URL } from '$lib/variables'

export const get = async () => {
  const res = await fetch(`${BASE_URL}${PAGES_API_URL}?per_page=100`)
  const data = await res.json()

  return {
    status: 200,
    body: data,
  }
}
