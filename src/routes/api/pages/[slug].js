import { BASE_URL, PAGES_API_URL } from '$lib/variables'

export const get = async request => {
  const slug = request.params.slug

  const res = await fetch(`${BASE_URL}${PAGES_API_URL}?slug=${slug}`)
  const pages = await res.json()

  const page = pages[0]

  return {
    status: 200,
    body: page,
  }
}
