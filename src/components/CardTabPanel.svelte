<script>
export let tabName, selected
</script>

  <div 
    id="{tabName}-tab"
    tabindex="0"
    role="tabpanel"
    aria-labelledby="{tabName}"
    hidden={!selected}
    >
    <slot></slot>
  </div>