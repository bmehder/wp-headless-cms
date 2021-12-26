<script context="module">
  export const load = async ({ page, fetch }) => {
    const slug = page.params.slug

    const res = await fetch(`/api/posts/${slug}.json`)
    const post = await res.json()

    return {
      props: {
        post,
      },
    }
  }
</script>

<script>
  import { fly } from 'svelte/transition'

  export let post
</script>

<main transition:fly={{ x: -800, y: 0 }}>
  <h1>{@html post.title.rendered}</h1>
  <p>
    <small>Published on: {post.date}</small><br /><small>by {post.author}</small
    >
  </p>
  {#if post.image}
    <img src={post.image} alt={post.title.rendered} />
  {/if}
  <p>{@html post.content.rendered}</p>
</main>

<style>
  main {
    max-width: 720px;
    margin: 2rem auto;
    font-size: 20px;
    line-height: 1.5em;
    overflow: hidden;
  }
  h1 {
    line-height: 1.25em;
  }
</style>
