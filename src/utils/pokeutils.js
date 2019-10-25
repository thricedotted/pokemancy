import { Pokedex } from 'pokeapi-js-wrapper'

const TOTAL_POKEMON = 807
const LANG = 'en'

const PokeAPI = new Pokedex()

function randInt(max) {
  return Math.ceil(Math.random() * max)
}

function findLang(array, lang) {
  return array.find(x => x.language.name == lang)
}

function filterLang(array, lang) {
  return array.filter(x => x.language.name == lang)
}


function sortBySlot(x1, x2) {
  return x1.slot - x2.slot
}

export async function fetchCard(n) {
  const species = await PokeAPI.getPokemonSpeciesByName(n)
  const pokemon = await PokeAPI.getPokemonByName(species.name)

  const abilities = await Promise.all(
    pokemon.abilities
    .sort(sortBySlot)
    .map(async x => {
      const a = await PokeAPI.getAbilityByName(x.ability.name)
      return {
        name: findLang(a.names, LANG).name,
        flavorText: findLang(a.effect_entries, LANG).short_effect,
        isHidden: x.is_hidden
      }
    })
  )

  return {
    id: pokemon.id,
    name: findLang(species.names, LANG).name,

    height: pokemon.height,
    weight: pokemon.weight,

    generation: species.generation.name.replace('generation-', ''),

    sprites: pokemon.sprites,

    abilities: abilities.filter(x => !x.isHidden),
    hiddenAbility: abilities.find(x => x.isHidden),

    genus: findLang(species.genera, LANG).genus,

    // TODO: check if the following info also comes in different languages?
    types: pokemon.types.sort(sortBySlot).map(x => x.type.name),

    growthRate: species.growth_rate.name,
    captureRate: species.capture_rate,
    eggGroups: species.egg_groups.map(x => x.name),
    color: species.color.name,
    shape: species.shape.name,
    // habitat: species.habitat.name,

    flavorText: filterLang(species.flavor_text_entries, LANG).map(x => x.flavor_text),
  }
}

export async function fetchRandomCard() {
  return fetchCard(randInt(TOTAL_POKEMON))
}