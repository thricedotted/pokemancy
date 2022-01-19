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
  if (confirm("This will remove all the current cards from the spread.\nAre you sure?"))
    dispatch('clearSpread')
}

function revealNext() {
  dispatch('revealNext')
}

function revealAll() {
  dispatch('revealAll')
}
</script>

<div class="actions">
  <form 
    class="add-action"
    on:submit|preventDefault={addCard}
    >
    <input 
      type="text"
      placeholder="aspect?"
      bind:value={aspect}
      >
    <button
      type="submit"
      >add to spread
    </button>
  </form>

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

  input, button {
    background: #f8f8f8;
    color: inherit;
    font: inherit;
    padding: 0.3rem;
    border: 1px solid #ccc;
    border-radius: 0.2rem;
  }

  button {
    padding: 0.4rem 0.8rem;
    box-shadow: 1px 1px 0 #ccc;
  }

  button:not([disabled]) {
    cursor: pointer;
  }

  button[disabled] {
    cursor: not-allowed;
    color: #ccc;
  }

  button:not([disabled]):hover, button:focus {
    box-shadow: 2px 2px 0 #ccc;
    transform: translate(-1px, -1px);
  }

  button:not([disabled]):active {
    box-shadow: 0px 0px 0 #ccc;
    transform: translate(1px, 1px);
  }
</style>