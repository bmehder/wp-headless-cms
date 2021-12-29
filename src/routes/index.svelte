<script context="module">
  export const load = async ({ fetch }) => {
    const res = await fetch('/api/pages')
    const pages = await res.json()

    return {
      props: {
        pages,
      },
    }
  }
</script>

<script>
  export let pages = []
</script>

<main>
  <ul>
    {#each pages as page}
      <li>
        <a href={`/pages/${page.slug}`}>{@html page.title.rendered}</a>
      </li>
    {/each}
  </ul>
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
