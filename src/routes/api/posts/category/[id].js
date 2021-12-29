import { BASE_URL, POSTS_API_URL } from '$lib/variables'

export const get = async request => {
  const id = request.params.id

  const res = await fetch(`${BASE_URL}${POSTS_API_URL}?categories=${id}&_embed`)
  const posts = await res.json()

  posts.map(post => {
    post.image = post._embedded['wp:featuredmedia'][0].source_url
  })

  return {
    status: 200,
    body: posts,
  }
}
