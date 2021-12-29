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
  export let page
</script>

<main>
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
</style>
