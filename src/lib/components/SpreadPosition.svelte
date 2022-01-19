<script>
  import { createEventDispatcher } from 'svelte'
  import { fade } from 'svelte/transition'

  import { fetchCard, fetchRandomCard } from '$lib/utils'

  import Card from '$lib/components/Card.svelte'

  const dispatch = createEventDispatcher()

  export let positionNumber
  export let aspect
  export let revealed

  // const cardPromise = fetchCard('xerneas')
  const cardPromise = fetchRandomCard()
</script>

<div 
  class="spread-position"
  transition:fade|local
  >
  <h2>{aspect ? aspect : `- ${positionNumber + 1} -`}</h2>

  {#await cardPromise}
    <div 
      class="placeholder loading"
      >

      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 207.51" width="100" height="207.51"><defs><clipPath id="_clipPath_2XkyWcEpeCVosaOBBK5wDMyNSaB7tSCq"><rect x="0" y="0" width="100" height="207.51"/></clipPath></defs><g clip-path="url(#_clipPath_2XkyWcEpeCVosaOBBK5wDMyNSaB7tSCq)"><path d=" M 41.472 0 L 41.472 0 L 43.354 0 L 43.354 0 Q 80.348 0 94.363 22.684 L 94.363 22.684 L 94.363 22.684 Q 100 35.403 100 43.35 L 100 43.35 L 100 47.109 L 100 47.109 Q 100 77.598 77.312 90.604 L 77.312 90.604 L 77.312 90.604 Q 58.528 93.927 58.528 105.633 L 58.528 105.633 L 58.528 111.269 L 58.528 111.269 Q 88.726 111.269 98.123 154.619 L 98.123 154.619 L 98.123 162.279 L 98.123 162.279 Q 98.123 198.405 48.986 207.51 L 48.986 207.51 L 48.986 207.51 Q 0 198.118 0 158.524 L 0 158.524 L 0 158.524 Q 9.392 109.392 45.231 109.392 L 45.231 109.392 L 45.231 105.633 L 45.231 105.633 Q 45.231 84.967 77.312 75.43 L 77.312 75.43 L 77.312 75.43 Q 86.849 62.424 86.849 50.864 L 86.849 50.864 L 86.849 45.227 L 86.849 45.227 Q 86.849 11.269 37.717 11.269 L 37.717 11.269 L 35.84 7.514 L 35.84 5.633 L 35.84 5.633 Q 35.84 2.887 41.472 0 Z  M 84.826 156.646 L 75.434 158.524 L 60.405 158.524 L 60.405 158.524 Q 60.405 164.015 52.891 167.916 L 52.891 167.916 L 45.231 167.916 L 45.231 167.916 Q 40.172 167.916 39.595 158.524 L 39.595 158.524 L 13.151 158.524 L 13.151 160.401 L 13.151 160.401 Q 13.151 189.158 52.891 194.359 L 52.891 194.359 L 52.891 194.359 Q 76.88 194.359 84.826 160.401 L 84.826 160.401 L 84.826 156.646 Z " /></g></svg>

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
    flex-flow: column;
    align-items: center;
    justify-content: center;

    background-color: rgba(255, 255, 255, 0.5);
  }

  .loading {
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }

  .loading svg {
    fill: rgba(0, 0, 0, 0.25);
    animation: rotate 8s infinite;
  }

  @keyframes rotate {
    0% {
      transform: rotateY(0);
    }

    50% {
      transform: rotateY(1turn);
    }

    100% {
      transform: rotateY(0);
    }
  }
</style>
