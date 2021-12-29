import {
  BASE_URL,
  POSTS_API_URL,
  POSTS_CATEGORIES_API_URL,
} from '$lib/variables'

export const get = async request => {
  const slug = request.params.slug

  const catRes = await fetch(`${BASE_URL}${POSTS_CATEGORIES_API_URL}`)
  const categories = await catRes.json()

  const category = categories.find(category => category.slug === slug)

  const res = await fetch(
    `${BASE_URL}${POSTS_API_URL}?categories=${category.id}&_embed`
  )
  const data = await res.json()

  data.map(item => {
    item.image = item._embedded['wp:featuredmedia'][0].source_url
  })

  return {
    status: 200,
    body: data,
  }
}
