<script>
import { createEventDispatcher } from 'svelte'

const dispatch = createEventDispatcher()

export let allRevealed

let aspect = ''

function addCard() {
  dispatch('addCard', aspect)
  aspect = ''
}

function clearSpread() {
  if (confirm("Clear this spread?"))
    dispatch('clearSpread')
}

function revealNext() {
  dispatch('revealNext')
}

function revealAll() {
  dispatch('revealAll')
}
</script>

<style>
.actions {
  position: relative;
  margin: var(--double-gutter) auto;
  text-align: center;
}

.actions > * {
  position: relative;
  margin: var(--gutter) auto;
}
</style>

<div class="actions">
  <div class="add-action">
    <input 
      type="text"
      placeholder="aspect?"
      bind:value={aspect}
      >
    <button
      on:click={addCard}
      >add to spread</button>
  </div>

  <div class="reveal-action">
    <button
      on:click={revealNext}
      disabled={allRevealed}
      >reveal next</button>

    <button
      on:click={revealAll}
      disabled={allRevealed}
      >reveal all</button>
  </div>

  <div class="clear-action">
    <button
      on:click={clearSpread}
      >clear spread</button>
  </div>

</div>