<script>
import { createEventDispatcher } from 'svelte'
import Card from './Card.svelte'

const dispatch = createEventDispatcher()

export let positionNumber
export let aspect
export let revealed
</script>

<style>
.spread-position {
  width: 24rem;
  min-width: 12rem;
  max-width: 100%;
}

h2 {
  text-align: center;
}
</style>

<div class="spread-position">
  <h2>{aspect ? aspect : `- ${positionNumber + 1} -`}</h2>

  <Card 
    {revealed} 
    on:revealCard={() => dispatch('revealCard')}
    />
</div>