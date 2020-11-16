<script>
import { fade } from 'svelte/transition'
import CardSide from './CardSide.svelte'

export let data

const {
  name,
  generation,
  genus,
  flavorText
} = {...data}

</script>

<style>
.detail {
  position: absolute;
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-rows: repeat(3, auto) 1fr 6rem;
  grid-gap: var(--gutter);
  grid-template-areas:
    "id"
    "name"
    "genus"
    "description"
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

</style>

<CardSide>
  <div class="detail">
    <h3>{name}</h3>
    <div class="id">#{data.id}</div>
    <div class="genus">Gen. {generation.toUpperCase()} {genus}</div>
    <div class="description">{flavorText}</div>
  </div>
</CardSide>