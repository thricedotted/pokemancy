<script>
import { createEventDispatcher } from 'svelte'
import { fade } from 'svelte/transition';
import { fetchCard, fetchRandomCard } from '../utils/pokeutils'
import Card from './Card.svelte'

const dispatch = createEventDispatcher()

export let positionNumber
export let aspect
export let revealed

// const cardPromise = fetchCard('xerneas')
const cardPromise = fetchRandomCard()
</script>

<style>
.spread-position {
  width: 22rem;
  min-width: 12rem;
  max-width: 100%;

  height: 34rem;

  display: grid;
  grid-template-rows: auto 1fr;
}

h2 {
  text-align: center;
}

.placeholder {
  margin: var(--gutter);
  border: 1px dashed black;
  border-radius: 0.4rem;

  display: flex;
  align-items: center;
  justify-content: center;
}

.placeholder, .card-wrap {
  background: rgba(255, 255, 255, 0.5);
}
</style>

<div 
  class="spread-position"
  transition:fade|local
  >
  <h2>{aspect ? aspect : `- ${positionNumber + 1} -`}</h2>

  {#await cardPromise}
    <div 
      class="placeholder"
      >
      <p>loading...</p>
    </div>
  {:then data}
    {#if revealed}
      <div 
        class="card-wrap expanded"
        data-pokemon-color={data.color}
        >
        <Card 
          {data}
          {revealed} 
          />
      </div>
    {:else}
      <div 
        class="placeholder"
        >
        <button on:click={() => dispatch('revealCard')}>reveal</button>
      </div>
    {/if}
  {:catch err}
    (error!!! {err})
  {/await}

</div>