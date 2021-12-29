<script>
  export let sticky = false
  export let uppercase = false
  export let background = 'white'
</script>

<header class:sticky style="background:{background};">
  <nav class="main">
    <ul class:uppercase>
      <li><a href="/">Home</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/blog/category/14">Press</a></li>
    </ul>
  </nav>
</header>

<style>
  header {
    width: 100%;
    padding: 2em 0;
    background: darkorange;
    text-align: center;
  }
  .sticky {
    position: fixed;
    z-index: 100;
  }
  nav {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    margin: 0 auto;
    padding: 0 1em;
  }
  ul {
    display: flex;
    justify-content: space-between;
  }
  li {
    position: relative;
    list-style-type: none;
    padding: 0 1rem;
    font-weight: 600;
  }
  a {
    height: auto;
    font-size: 1.2em;
    color: white;
    text-decoration: none;
    text-align: center;
  }
  a:hover {
    padding-bottom: 1rem;
    border-bottom: 4px solid white;
  }
  .uppercase {
    text-transform: uppercase;
  }
</style>
