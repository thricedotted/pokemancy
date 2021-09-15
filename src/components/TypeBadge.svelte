<script>
export let type 
</script>

<style>
svg {
  fill: var(--pokemon-color-medium-light);
  height: 72%;
  max-width: 100%;
}

/* hack to change type symbol opacity without affecting stacking context? */
svg use {
  opacity: 0.65;
}
</style>

<svg class="type {type}">
  <use xlink:href="/types.svg#{type}" />
</svg>