<script>
  import CardSide from '$lib/components/CardSide.svelte'
  import TypeBadge from '$lib/components/TypeBadge.svelte'

  export let data

  const {
    name,
    generation,
    genus,
    flavorText,
    types,
    color,
    sprites
  } = {...data}
</script>

<CardSide>
  <div class="detail">
    <h3>{name}</h3>
    <div class="id">#{data.id}</div>
    <div class="genus">Gen. {generation.toUpperCase()} {genus}</div>
    <div class="description">{flavorText}</div>
    <div class="types">
      {#each types as type}
        <div class="type">
          <TypeBadge {type} {color} />
          {type}
        </div>
      {/each}
    </div>

    <img 
      class="sprite"
      src="{sprites.back_default}" 
      alt="Back-facing sprite of {name}"
      crossorigin="anonymous"
      >
  </div>
</CardSide>

<style>
  .detail {
    position: absolute;
    width: 100%;
    height: 100%;

    display: grid;
    grid-template-rows: repeat(3, auto) 1fr 4rem var(--double-gutter);
    grid-gap: var(--gutter);
    grid-template-areas:
      "id"
      "name"
      "genus"
      "description"
      "types"
      "."
    ;

    justify-items: center;
  }

  .id {
    grid-area: id;
    color: var(--pokemon-color-medium-dark);
  }

  h3 {
    grid-area: name;

    font-weight: normal;
    font-size: 3rem;
    font-family: var(--font-title);
    text-shadow: 0 0.1rem 0.1rem var(--pokemon-color-light);

    text-align: center;
    margin: 0;
  }

  .genus {
    grid-area: genus;

    font-family: var(--font-body);
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    padding-left: 0.1em;
  }

  .description {
    grid-area: description;

    align-self: center;
    text-align: center;

    font-style: italic;
    line-height: 1.4;
  }

  .types {
    grid-area: types;
    justify-self: stretch;

    display: flex;
    justify-content: center;
    gap: var(--double-gutter);
  }

  .type {
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    gap: var(--shim);

    font-size: 0.7rem;
    text-transform: uppercase;
    letter-spacing: 0.2em;

    opacity: 0.8;
  }

  .sprite {
    grid-area: description;
    position: absolute;

    image-rendering: -webkit-optimize-contrast;
    image-rendering: pixelated;
    image-rendering: crisp-edges;
    align-self: center;
    text-align: center; /* for alt text */
    width: 100%;
    height: auto;
    opacity: 0.15;
  }
</style>