<script>
import { onMount } from 'svelte'
import ActionPanel from './ActionPanel.svelte'
import Spread from './Spread.svelte'

import { fetchCard } from '../utils/pokeutils'

let spread = []

$: allRevealed = !spread.find(x => !x.revealed)

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

function revealNext() {
	const nextIdx = spread.findIndex(x => !x.revealed)
	if (nextIdx) revealCard(nextIdx)
}

function revealAll() {
	for (let idx = 0; idx < spread.length; idx++) {
		revealCard(idx)
	}
}

function clearSpread() {
	spread = []
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
	{allRevealed}
	on:addCard={e => addCard(e.detail)}
	on:clearSpread={clearSpread}
	on:revealNext={revealNext}
	on:revealAll={revealAll}
	/>