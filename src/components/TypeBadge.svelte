<script>
export let type, color
</script>

<style>
svg {
  fill: var(--pokemon-color-medium-light);
  height: 72%;
}

/* ridiculous hack to change type symbol opacity without affecting stacking context */
svg use {
  opacity: 0.5;
}
</style>

<svg class="type {type}">
  <use xlink:href="/types.svg#{type}" />
</svg>