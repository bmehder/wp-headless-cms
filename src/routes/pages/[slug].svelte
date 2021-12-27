<script context="module">
  export const load = async ({ page, fetch }) => {
    const slug = page.params.slug

    const res = await fetch(`/api/pages/${slug}`)
    const _page = await res.json()
    console.log(_page)

    return {
      props: {
        _page,
      },
    }
  }
</script>

<script>
  import { fly } from 'svelte/transition'

  export let _page
</script>

<main transition:fly={{ x: -800, y: 0 }}>
  <h1>{@html _page.title.rendered}</h1>
  <article>{@html _page.content.rendered}</article>
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
