<script>
export let tabName, selected
</script>

<button
  role="tab"
  id="{tabName}"
  aria-controls="{tabName}-tab"
  aria-selected={selected}
  tabindex={selected ? false : -1}
  on:click
  on:keyup
  >{tabName}</button>
