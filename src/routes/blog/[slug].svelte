<script context="module">
  export const load = async ({ page, fetch }) => {
    const slug = page.params.slug

    const res = await fetch(`../api/posts/${slug}`)
    const data = await res.json()

    return {
      props: {
        post: data,
      },
    }
  }
</script>

<script>
  export let post
</script>

<main>
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
  img {
    width: 100%;
  }
</style>
