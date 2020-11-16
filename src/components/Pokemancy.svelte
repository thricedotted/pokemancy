<script>
import { onMount } from 'svelte'
import ActionPanel from './ActionPanel.svelte'
import Spread from './Spread.svelte'

let spread = []

$: allRevealed = !spread.find(x => !x.revealed)

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
const { NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';
if (dev) {
	onMount(() => {
		addCard()
		revealCard(0)
	})
}
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