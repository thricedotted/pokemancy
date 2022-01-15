<script>
  import { fade } from 'svelte/transition'

  import CardSide from '$lib/components/CardSide.svelte'
  import TypeBadge from '$lib/components/TypeBadge.svelte'

  export let data

  const {
    id,
    name,
    genus,
    generation,
    sprites,
    types,
    color
    } = data

</script>

<CardSide>
  <div 
    class="overview"
    transition:fade
    >
    <h3 class="name">{name}</h3>

    <div class="id">#{id}</div>

    <div class="genus">{genus}</div>

    <div class="types">
      {#each types as type}
        <TypeBadge {type} />
      {/each}
    </div>

    <img 
      class="sprite"
      src="{sprites.front_default}" 
      alt="Front-facing sprite of {name}"
      crossorigin="anonymous"
      >
  </div>
</CardSide>

<style>
  .overview {
    position: absolute;
    width: 100%;
    height: 100%;

    display: grid;
    grid-template-rows: auto 1fr auto auto;
    grid-template-areas:
      "id"
      "sprite"
      "name"
      "genus"
    ;
    justify-items: center;

    background: radial-gradient(var(--pokemon-color-medium-dark) -66%, 
                                transparent 66%);
  }

  h3 {
    grid-area: name;

    font-weight: normal;
    font-size: 3rem;
    font-family: var(--font-title);
    text-shadow: 0 0.1rem 0.1rem var(--pokemon-color-light);

    margin-top: -2.4rem; /* there is a reason for this measurement but idk what it is */
    margin-bottom: calc(var(--gutter) * 2);
    order: 1;
  }

  @media (max-width: 25rem) {
    h3 {
      font-size: 2.5rem;
      font-size: calc(1rem + 8vw);
    }
  }

  .id, .genus, .types {
    color: var(--pokemon-color-medium-dark);
  }

  .id, .genus {
    text-align: center;
  }

  .id {
    grid-area: id;
    text-shadow: 0 0 2rem var(--pokemon-color-medium-dark);
  }

  .genus {
    grid-area: genus;

    font-family: var(--font-body);
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;

    padding-left: var(--shim);
    padding-right: calc(var(--shim) - 0.1em);

    background: var(--pokemon-color-light);
    transform: translateY(-0.1em);
  }

  img {
    grid-area: sprite; 

    image-rendering: -webkit-optimize-contrast;
    image-rendering: pixelated;
    image-rendering: crisp-edges;
    align-self: center;
    text-align: center; /* for alt text */
    width: 100%;
    height: auto;

    filter: drop-shadow(0 0 1.4rem var(--pokemon-color-light));
  }

  .types {
    grid-area: sprite;

    display: flex;
    flex-flow: column;
    justify-self: stretch;
    justify-content: center;
    align-items: center;

    /* margin: 0 var(--shim); */
    margin: var(--gutter);
    gap: var(--double-gutter);
  }
</style>