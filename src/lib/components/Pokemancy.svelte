<script>
	import { onMount } from 'svelte'

	import ActionPanel from '$lib/components/ActionPanel.svelte'
	import Spread from '$lib/components/Spread.svelte'
	import Welcome from '$lib/components/Welcome.svelte'

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
		if (nextIdx > -1) revealCard(nextIdx)
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
	// onMount(() => {
		// addCard()
		// revealCard(0)
	// })
</script>

{#if spread.length > 0}
	<Spread
		{spread}
		on:revealCard={e => revealCard(e.detail)}
	/>
{:else}
	<Welcome />
{/if}

<ActionPanel
	{spread}
	{allRevealed}
	on:addCard={e => addCard(e.detail)}
	on:clearSpread={clearSpread}
	on:revealNext={revealNext}
	on:revealAll={revealAll}
/>