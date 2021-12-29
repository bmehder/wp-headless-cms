import { BASE_URL, POSTS_API_URL } from '$lib/variables'

export const get = async request => {
  const slug = request.params.slug

  const res = await fetch(`${BASE_URL}${POSTS_API_URL}?slug=${slug}&_embed`)
  const data = await res.json()

  const item = data[0]

  item.image = item._embedded['wp:featuredmedia'][0].source_url
  item.author = item._embedded.author[0].name

  const dateOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }
  item.date = new Date(item.date).toLocaleDateString('en-US', dateOptions)

  return {
    status: 200,
    body: item,
  }
}
