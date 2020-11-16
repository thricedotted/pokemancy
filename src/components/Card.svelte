<script>
import { createEventDispatcher, onMount } from 'svelte'
import { fade, crossfade } from 'svelte/transition';

import Flippable from './Flippable.svelte'
import CardOverview from './CardOverview.svelte'
import CardDetail from './CardDetail.svelte'

const dispatch = createEventDispatcher()

export let revealed, data
</script>

<style>
</style>

<Flippable
  frontName="overview"
  backName="details"
  >
  <div slot="front">
    <CardOverview {data} />
  </div>

  <div slot="back">
    <CardDetail {data} />
  </div>
</Flippable>