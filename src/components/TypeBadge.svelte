<script>
export let type
</script>

<style>
.type {
  font-size: 0.9rem;
  text-transform: uppercase;
  text-align: center;

  padding: var(--half-shim);
  border-radius: 0.2rem;

  --type-color: gray;
  background: var(--type-color)
}

.grass {
  --type-color: green;
}
</style>

<div class="type {type}">
  {type}
</div>