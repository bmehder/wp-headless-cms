<script context="module">
  export const load = async ({ page, fetch }) => {
    const slug = page.params.slug

    const res = await fetch(`/api/pages/${slug}`)
    const data = await res.json()

    return {
      props: {
        page: data,
      },
    }
  }
</script>

<script>
  import { fly } from 'svelte/transition'

  export let page
</script>

<main transition:fly={{ x: -800, y: 0 }}>
  <h1>{@html page.title.rendered}</h1>
  <article>{@html page.content.rendered}</article>
</main>

<style>
  main {
    max-width: 720px;
    margin: 2rem auto;
    font-size: 20px;
    line-height: 1.5em;
    overflow: hidden;
  }
  :global(figure) {
    margin: 0;
    padding: 0;
  }
  h1 {
    line-height: 1.25em;
  }
  :global(blockquote) {
    margin: 0;
    padding: 2rem 4rem;
    background: #016;
    color: white;
    font-style: italic;
  }
  :global(cite) {
    display: block;
    margin-top: 1rem;
  }
</style>
