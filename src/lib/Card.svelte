<script>
  export let posts = []
</script>

{#each posts as { image, title, excerpt, slug }}
  <article>
    <a href={`/blog/${slug}`}><img src={image} alt={title.rendered} /></a>
    <h2>
      <a href={`/blog/${slug}`}>{@html title.rendered}</a>
    </h2>
    <div>
      <p>{@html excerpt.rendered}</p>
    </div>
    <a class="read-more" href={`/blog/${slug}`}>Read More</a>
  </article>
{/each}

<style>
  article {
    width: 300px;
    margin: auto;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
    font-size: 1rem;
  }
  img {
    max-width: 100%;
    height: 300px;
    object-fit: cover;
  }
  div {
    padding: 0 2rem;
    line-height: 1.5em;
    display: -webkit-box;
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  h2 {
    padding: 0 2rem;
    height: 90px;
    line-height: 1.25em;
    overflow: hidden;
  }
  a {
    color: #016;
    text-decoration: none;
  }
  h2 a:hover {
    text-decoration: underline;
  }
  a.read-more {
    display: block;
    background: #016;
    margin: 2rem;
    padding: 1rem 2rem;
    color: white;
    text-align: center;
    font-weight: bold;
    text-decoration: none;
    transition: all 100ms ease-in-out;
    outline: none;
    border: none;
  }
  a.read-more:hover {
    background-color: hsl(230, 100%, 32%);
  }
</style>
