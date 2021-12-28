<script>
  import Header from '$lib/Header.svelte'
</script>

<Header background="#016" color="white" />

<div class="wrapper">
  <slot />
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
