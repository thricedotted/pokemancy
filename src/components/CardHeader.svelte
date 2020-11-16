<script>
import TypeBadge from './TypeBadge.svelte'

export let data

const { id, 
        name, 
        generation, 
        genus, 
        height, 
        weight, 
        sprites, 
        types } = {...data}

</script>

<style>
header {
  display: grid;
  grid-template-columns: 1fr 4ch 2fr;
  grid-template-rows: repeat(4, auto);
  grid-template-areas:
    "sprite   id    name"
    "sprite   .     genus"
    "sprite   types types"
    "sprite   size  size";
  grid-column-gap: var(--shim);
  grid-row-gap: var(--half-shim);
  align-items: center;

  margin: var(--gutter);
}

@media (max-width: 20rem) {
  header {

  grid-template-columns: repeat(2, auto);
  grid-template-rows: repeat(5, auto);
  grid-template-areas:
    "id       name"
    ".        genus"
    "sprite   sprite"
    "types    types"
    "size     size"
  }

  .size {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: var(--gutter);
  }

  .size .height {
    justify-self: right;
  }
}

h3 {
  grid-area: name;
  margin: 0;
  line-height: 1;
  font-weight: normal;
  font-size: 1.6rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.id {
  grid-area: id;
  justify-self: right;
}

.genus {
  grid-area: genus;
}

.types {
  grid-area: types;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: var(--gutter);
  align-items: center;

  margin: var(--shim) 0;
}

.size {
  grid-area: size;
}

.size p {
  margin: 0;
}

.sprite {
  grid-area: sprite;
  justify-self: center;
}
</style>

<header>
  <h3>{name}</h3>

  <div class="id">
    #{id}
  </div>

  <div class="genus">
    Gen. {generation.toUpperCase()} {genus}
  </div>

  <div class="types">
    {#each types as type}
      <TypeBadge {type} />
    {/each}
  </div>

  <div class="size">
    <p class="height">HT: {height / 10}m</p> 
    <p class="weight">WT: {weight / 10}kg</p> 
  </div>

    <img
      class="sprite"
      src={sprites.front_default}
      crossorigin="anonymous"
      alt="front-facing sprite of {name}"
      on:load
      />
</header>