<script context="module">
  export const load = async ({ page }) => ({
    props: {
      key: page.path,
    },
  })
</script>

<script>
  import PageTransition from '$lib/PageTransition.svelte'
  import Header from '$lib/Header.svelte'

  export let key
</script>

<Header background="#016" color="white" />

<div class="wrapper">
  <PageTransition refresh={key}>
    <slot />
  </PageTransition>
</div>

<style>
  .wrapper {
    width: 80%;
    max-width: 1040px;
    margin: 0 auto;
  }
  :global(body) {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: Arial, Helvetica, sans-serif;
  }
</style>
