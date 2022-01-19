<script>
export let frontName = 'front'
export let backName = 'back'

let flipped = false
</script>

<style>
.flippable-wrap {
  --focus-border: 1px dashed transparent;

  border: var(--focus-border);
  padding: var(--shim);

  perspective: 200vw;
  transition: transform 0.4s;
}

.flippable-wrap:hover {
  /* transform: scale(1.05); */
}

.flippable {
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition-duration: 0.8s
}

.side {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;

  border-radius: 0.4rem;
  border: 1px dotted var(--pokemon-color-medium-light);
}

.side > :global([slot]) {
  width: 100%;
  height: 100%;
}

.side[aria-hidden=false] {
  box-shadow: 2px 2px 0 var(--pokemon-color-medium-light);
  transition: box-shadow 250ms;
  transition-delay: 500ms;
}

.back {
  transform: rotateY(180deg);
}

.flipped {
  transform: rotateY(180deg);
}

/* https://webaim.org/techniques/css/invisiblecontent/ */
/* hide button when card is not targeted */
button {
  border: unset;
  background: unset;
  width: 100%;
  padding: var(--shim);
  margin-top: var(--shim);

  cursor: pointer;
  opacity: 0;
}

/* show button as hint text when card is targeted */
button:focus, .flippable-wrap:hover button {
  opacity: 1;
}

button::-moz-focus-inner {
  border: unset;
}

button::after {
  content: '';
  box-sizing: content-box;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border: var(--focus-border);
}

button:focus::after {
  border-color: black;
}

.flippable-wrap:focus-within {
  border-color: black;
}  

.flippable-wrap:focus-within button:focus::after {
  border-color: transparent;
}  
</style>

<div 
  class="flippable-wrap expanded" 
  >

  <div class="flippable" class:flipped>

    <div 
      class="front side"
      data-card-side="front"
      aria-hidden={flipped}>
        <slot name="front">front side</slot>
    </div>

    <div 
      class="back side"
      data-card-side="back"
      aria-hidden={!flipped}>
        <slot name="back">back side</slot>
    </div>

  </div>

  <button 
    on:click={() => flipped = !flipped}
    >Flip to {flipped ? frontName : backName}</button>

</div>
