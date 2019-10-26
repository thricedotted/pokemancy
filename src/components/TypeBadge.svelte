<script>
export let type
</script>

<style>
.type {
  font-size: 0.9rem;
  text-transform: uppercase;
  text-align: center;

  background: var(--type-color);
  padding: var(--half-shim);
  border-radius: 0.2rem;

  font-family: 'Share', sans-serif;
  /* font-feature-settings: 'cpsp'; */
  letter-spacing: 0.01em;
  color: white;

  --type-color: gray;
}

.grass {
  --type-color: green;
}
</style>

<div class="type {type}">
  {type}
</div>