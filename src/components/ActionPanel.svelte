<script>
import { createEventDispatcher } from 'svelte'

const dispatch = createEventDispatcher()
</script>

<div class="actions">
  <button
    on:click={() => dispatch('addCard')}
    >add to spread</button>
</div>