<script>
  import { fly } from 'svelte/transition'

  export let refresh = ''
</script>

{#key refresh}
  <div transition:fly={{ x: -800, y: 0 }}>
    <slot />
  </div>
{/key}
