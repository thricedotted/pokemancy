<script>
import TypeBadge from './TypeBadge.svelte'

export let data

const {
  id,
  name,
  genus,
  generation,
  sprites,
  types
  } = {...data}

</script>

<style>
.overview {
  align-self: stretch;
  display: grid;
  grid-template-rows: repeat(2, auto) 1fr repeat(2, auto);
  justify-items: center;
  margin: -0.5rem 0;
}

h3 {
  font-weight: normal;
  font-size: 3rem;
  font-family: 'Astloch', cursive;
  text-shadow: 0 0.1rem 0.1rem var(--pokemon-color-light);

  margin-top: -1rem;
  margin-bottom: calc(var(--gutter) * 2);
}

.id, .genus, .types {
  color: var(--pokemon-color-medium-dark);
}

.id, .genus {
  text-align: center;
  background: var(--pokemon-color-light);
  padding: 0 var(--shim);
}

.id {
  text-shadow: 0 0 2rem var(--pokemon-color-medium-dark);
}

.genus {
  order: 99;
}

img {
  image-rendering: -webkit-optimize-contrast;
  image-rendering: pixelated;
  image-rendering: crisp-edges;
  align-self: stretch;
  width: 100%;
  height: auto;

  filter: drop-shadow(0 0 1.4rem var(--pokemon-color-light));
  /* margin: calc(-1 * var(--gutter)) 0; */
}

.types {
  /* display: grid;
  grid-auto-flow: column;
  grid-gap: var(--gutter); */
  display: flex;
  justify-self: stretch;
  justify-content: space-between;

  margin: calc(var(--half-shim) * -1) var(--shim);

  text-transform: uppercase;
  font-size: 0.9rem;
  letter-spacing: 0.2em;
}

.type {
  margin-right: -0.2em;
}

.empty.type::before {
  content: 'Ø';
}
</style>

<div class="overview">
  <div class="id">#{data.id}</div>

  <div class="types">
    {#each data.types as type}
      <div class="type">{type}</div>
      <!-- <TypeBadge {type} /> -->
    {/each}
    {#if data.types.length == 1}
      <div class="empty type"></div>
    {/if}
  </div>

  <!-- <div class="genus">Gen.&nbsp;{data.generation.toUpperCase()} {data.genus}</div> -->
  <div class="genus">{data.genus}</div>

  <img 
    class="sprite"
    src="{data.sprites.front_default}" 
    alt="Front-facing sprite of {data.name}"
    crossorigin="anonymous"
    >

  <h3 class="name">{data.name}</h3>

</div>