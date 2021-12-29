<script context="module">
  export const load = async ({ fetch }) => {
    const res = await fetch('/api/posts')
    const data = await res.json()

    return {
      props: {
        posts: data,
      },
    }
  }
</script>

<script>
  import Card from '$lib/Card.svelte'

  export let posts
</script>

<main>
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
