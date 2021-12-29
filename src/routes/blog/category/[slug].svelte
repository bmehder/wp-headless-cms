<script context="module">
  export const load = async ({ page, fetch }) => {
    const slug = page.params.slug

    const res = await fetch(`../../api/posts/category/${slug}`)
    const posts = await res.json()

    return {
      props: {
        posts,
      },
    }
  }
</script>

<script>
  import { fly } from 'svelte/transition'
  import Card from '$lib/Card.svelte'

  export let posts
</script>

<main transition:fly={{ x: -800, y: 0 }}>
  <Card {posts} />
</main>

<style>
  main {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 4rem;
    margin: 4rem auto;
  }
</style>
