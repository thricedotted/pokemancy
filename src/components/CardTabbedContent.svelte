<script>
import CardTab from './CardTab.svelte'
import CardTabPanel from './CardTabPanel.svelte'

export let data

const sections = [
  'description',
  'abilities',
  'stats'
]

let selected = 'description'

function handleKeyup(e) {
  if (e.key != 'ArrowRight' && e.key != 'ArrowLeft') {
    return
  }

  e.preventDefault()

  const selectedIdx = sections.indexOf(selected)
  const direction = e.key == 'ArrowRight' ? 1 : -1
  const nextIdx = (selectedIdx + direction + sections.length) % sections.length

  selected = sections[nextIdx]
  document.getElementById(selected).focus()
}

</script>

<style>
.tabs {
  display: flex;
  flex-flow: column-reverse;
}

div[role=tablist] {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(6rem, 1fr));
  margin-top: var(--gutter);
}

.content {
  margin: 0 var(--gutter);
}

p {
  margin: 0;
  line-height: 1.4;
}

p + p {
  margin-top: var(--shim);
}
</style>

<div class="tabs">
  <div 
    role="tablist" 
    aria-label="Details"
    >
    {#each sections as tabName}
      <CardTab 
        {tabName}
        selected={selected == tabName}
        on:click={() => selected = tabName}
        on:keyup={handleKeyup}
      />
    {/each}
  </div>

  <div class="content">
    {#each sections as tabName}
      <CardTabPanel
        {tabName}
        selected={selected == tabName}
        >

        {#if tabName == 'abilities'}
          {#each data.abilities as ability}
            <p>{ability.name}: {ability.flavorText}</p>
          {/each}
          {#if data.hiddenAbility}
            <p class="hidden-ability">
              {data.hiddenAbility.name}: {data.hiddenAbility.flavorText}
            </p>
          {/if}
        {:else if tabName == 'stats'}
        <p>stats</p>
        {:else}
        <p>{data.flavorText[0]}</p>
        {/if}
      </CardTabPanel>
    {/each}
  </div>

</div>