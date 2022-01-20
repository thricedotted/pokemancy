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
      >
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
      add to spread
    </button>
  </form>

  <div class="reveal-action">
    <button
      on:click={revealNext}
      disabled={allRevealed}
      >
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-eye"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
      reveal next
    </button>

    <button
      on:click={revealAll}
      disabled={allRevealed}
      >
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-target"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
      reveal all
    </button>
  </div>

  <div class="clear-action">
    <button
      on:click={clearSpread}
      >
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-loader"><line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line><line x1="2" y1="12" x2="6" y2="12"></line><line x1="18" y1="12" x2="22" y2="12"></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line></svg>
      clear spread
    </button>
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

  button svg {
    stroke: #999;
    height: 1em;
    vertical-align: middle;
    margin-top: -0.1em;
    margin-right: 0.15em;
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
    padding: 0.4rem 0.8rem 0.4rem 0.6rem;
    box-shadow: 1px 1px 0 #ccc;
  }

  button:not([disabled]) {
    cursor: pointer;
  }

  button[disabled] {
    cursor: not-allowed;
    color: #ccc;
  }

  button[disabled] svg {
    stroke: #ccc;
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