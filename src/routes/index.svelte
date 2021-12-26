<script context="module">
  export const load = async ({ fetch }) => {
    const res = await fetch('/api/posts.json')
    const posts = await res.json()

    return {
      props: {
        posts,
      },
    }
  }
</script>

<script>
  export let posts
</script>

<h1>Headless WerdPress</h1>
{#each posts as { image, title, excerpt, slug }}
  <h2>{@html title.rendered}</h2>
  <img src={image} alt={title.rendered} />
  <p>{@html excerpt.rendered}</p>
  <a href={`/posts/${slug}`}>Read More</a>
{/each}
