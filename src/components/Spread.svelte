<script>
import { createEventDispatcher } from 'svelte'
import SpreadPosition from './SpreadPosition.svelte'

const dispatch = createEventDispatcher()

export let spread
</script>

<style>
.spread {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
}

:global(.spread > *) {
  margin: var(--gutter) var(--double-gutter);
}
</style>

<div class="spread">
  {#each spread as position, i}

  <SpreadPosition 
    aspect={position.aspect} 
    revealed={position.revealed}
    positionNumber={i}
    on:revealCard={() => dispatch('revealCard', i)}
    />

  {/each}
</div>