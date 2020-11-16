<script>
export let type, color
</script>

<style>
svg {
  fill: var(--pokemon-color-medium-light);
}
</style>

<svg class="type {type}">
  <use xlink:href="/types.svg#{type}" />
</svg>