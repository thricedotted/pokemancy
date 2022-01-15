<div class="card-pad expanded">
  <div class="card-border expanded">
    <div class="card-content">
      <slot></slot>
    </div>
  </div>
</div>

<style>
  .card-pad {
    --external-padding: calc(var(--gutter) + 0.666vw);
    --border-width: 7rem;

    background: var(--pokemon-color-light);
    color: var(--pokemon-color-dark);

    border: var(--external-padding) solid var(--pokemon-color-light);

    box-shadow: 0 0.2rem 1rem #ddd;
    border-radius: 0.4rem;
  }

  .card-border {
    position: relative;

    border: var(--border-width) solid var(--pokemon-color-light);
    border-image: var(--pokemon-border-url) 90;
  }

  .card-content {
    --margin: calc(var(--border-width) * -1);

    position: absolute;
    left: var(--margin);
    right: var(--margin);
    top: var(--margin);
    bottom: var(--margin);
  }
</style>
