<script>
import { createEventDispatcher } from 'svelte'
import { fetchCard, fetchRandomCard } from '../utils/pokeutils'
import Vibrant from 'node-vibrant'
import CardHeader from './CardHeader.svelte'
import CardTabbedContent from './CardTabbedContent.svelte'

const dispatch = createEventDispatcher()

export let revealed
let cardDomNode

//const cardInfo = fetchRandomCard()
const cardInfo = fetchCard(420)

async function setBackground(e) {
  const palette = await Vibrant.from(e.target).getPalette()
  console.log(palette)
  cardDomNode.style.setProperty('background', palette.LightVibrant.getHex())
}
</script>

<style>
.card {
  background: white;
  border-radius: 0.5rem;
  border: 1px solid gray;
  transition-duration: 500ms;
}
</style>

<div 
  class="card" 
  class:revealed
  bind:this={cardDomNode}
  >
  {#await cardInfo}

    (loading card...)

  {:then data}

    {#if revealed}
      <CardHeader 
        {data} 
        on:load={setBackground}
        />
      <CardTabbedContent {data} />
    {:else}
      <button
        on:click={() => dispatch('revealCard')}
        >reveal</button>
    {/if}

  {:catch err}
  <p>Uh oh. {err}</p>
  {/await}
</div>
