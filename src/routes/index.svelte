<script>
	import { page } from '$app/stores'

	import Pokemancy from '$lib/components/Pokemancy.svelte'
	import About from '$lib/components/About.svelte'
</script>

<svelte:head>
	<title>Pokémancy</title>

	<meta name="description" content="Divination... with Pokémon." />
	<meta name="robots" content="index,follow" />

	<meta property="og:title" content="Pokémancy" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://pokemancy.entangled.one" />
	<meta property="og:description" content="Divination... with Pokémon." />
	<meta property="og:image" content="{$page.url.origin}/pokemancy.png" />
	<meta name="twitter:card" content="summary" />
</svelte:head>

<Pokemancy />

<About />