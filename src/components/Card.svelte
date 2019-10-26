<script>
import { createEventDispatcher, onMount } from 'svelte'
import CardHeader from './CardHeader.svelte'
import CardTabbedContent from './CardTabbedContent.svelte'
import CardOverview from './CardOverview.svelte'

const dispatch = createEventDispatcher()

export let revealed, data
let thisNode

onMount(() => {
  console.log(data.name, data.color)
  const shades = ['light', 'medium-light', 'medium-dark', 'dark']
  shades.forEach(shade => {
    thisNode.style.setProperty(
      `--pokemon-color-${shade}`, 
      `var(--pokemon-${data.color}-${shade})`
     )
  })
})

</script>

<style>
.card {
  position: relative;

  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;

  background: white;
  padding: var(--gutter);
  border-radius: 0.2rem;
  border: 0.2rem double white;
  box-shadow: 
    0 0 0 var(--gutter) white,
    0 0.4rem var(--gutter) 1rem #ccc
  ;

  margin: calc(var(--gutter) * 2);

  transition-duration: 500ms;

  --pokemon-color-light: white;
  --pokemon-color-medium-light: lightgray;
  --pokemon-color-medium-dark: gray;
  --pokemon-color-dark: black;
}

.card.revealed {
  border-color: var(--pokemon-color-medium-light);
  background: radial-gradient(var(--pokemon-color-dark) -66%, var(--pokemon-color-light) 66%);
  box-shadow: 
    0 0 0 var(--gutter) var(--pokemon-color-light),
    0 0.4rem var(--gutter) 1rem #ccc
  ;
  color: var(--pokemon-color-dark);
}

/* .card.revealed::after {
  content: '';
  position: absolute;
  border: 0.1rem solid var(--pokemon-color-dark);
  width: calc(100% - 0.2rem - var(--gutter) * 2);
  height: calc(100% - 0.2rem - var(--gutter) * 2);
  left: var(--gutter);
  top: var(--gutter);
  border-radius: 0.25rem;
} */

</style>

<div 
  class="card" 
  class:revealed
  bind:this={thisNode}
  >

  {#if revealed}
    <CardOverview {data} />
    <!-- <CardHeader 
      {data} 
        {data} 
      {data} 
      on:load={setBackground}
      />
    <CardTabbedContent {data} /> -->
  {:else}
    <button
      on:click={() => dispatch('revealCard')}
      >reveal</button>
  {/if}

</div>