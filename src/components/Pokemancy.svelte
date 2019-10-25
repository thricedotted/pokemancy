<script>
import { onMount } from 'svelte'
import ActionPanel from './ActionPanel.svelte'
import Spread from './Spread.svelte'

import { fetchCard } from '../utils/pokeutils'

let spread = []

// async function testFetch() {
// 	const card = await fetchCard(1)
// 	spreadCards = [...spreadCards, { revealed: false, card: card }]
// }

function addCard(aspect) {
	spread = [...spread, { aspect, revealed: false }]
}

function revealCard(i) {
	spread[i].revealed = true
}

// to make iteration on cards easier
onMount(() => {
	addCard()
	revealCard(0)
})
</script>

<Spread
	{spread}
	on:revealCard={e => revealCard(e.detail)}
	/>

<ActionPanel
	on:addCard={e => addCard(e.detail)}
	/>