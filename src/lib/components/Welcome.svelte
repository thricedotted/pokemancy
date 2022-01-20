<script>
  import { fade } from 'svelte/transition'

  import SpreadPosition from '$lib/components/SpreadPosition.svelte'
</script>

<div 
  class="container"
  in:fade
  >
  <div
    class="welcome"
    >
    <h1 class="pokemancy">Pok&eacute;mancy</h1>

    <p>
      A method of reflection and divination using Pok&eacute;mon.
    </p>

    <p>
      Create your spread using the controls below.
    </p>
  </div>

  <SpreadPosition 
    hideAspect={true}
    revealed={true}
  />
</div>

<style>
  .container {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
    gap: var(--double-gutter);
  }

  .welcome {
    text-align: center;
    font-size: 1.4rem;
    padding-top: var(--quad-gutter);
  }

  p {
    margin: var(--quad-gutter);
    font-style: italic;
    line-height: 1.5;
  }

  .pokemancy {
    margin: 0;
    font-size: calc(4rem + 2vw);
    font-family: Astloch;
    font-weight: normal;
  }
</style>