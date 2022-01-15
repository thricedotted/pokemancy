<script>
  export let type 
</script>

<svg class="type {type}">
  <use xlink:href="/types.svg#{type}" />
</svg>

<style>
  svg {
    fill: var(--pokemon-color-medium-light);
    height: 72%;
    max-width: 100%;

    /* change opacity without resetting stacking context */
    /* filter: opacity(65%); */
  }

  svg use {
    opacity: 0.65;
  }
</style>
