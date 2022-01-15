<script>
  import Flippable from '$lib/components/Flippable.svelte'
  import CardOverview from '$lib/components/CardOverview.svelte'
  import CardDetail from '$lib/components/CardDetail.svelte'

  export let data
</script>

<Flippable
  frontName="overview"
  backName="details"
  >
  <svelte:fragment slot="front">
    <CardOverview {data} />
  </svelte:fragment>

  <svelte:fragment slot="back">
    <CardDetail {data} />
  </svelte:fragment>
</Flippable>