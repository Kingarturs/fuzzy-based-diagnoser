<script>
  export let active = 0
  export let enfermedad = ''

  function handleClick() {
    active = active === 0 ? 1 : 0
  }
</script>

<div class="pill {active ? 'active' : 'inactive'}" on:click={handleClick}>
  <span class="text-content">{enfermedad}</span>
</div>

<style>
  .pill {
    border-radius: 2rem;
    border: 2px solid var(--foreground);
    padding: 0.2rem 0.8rem;
    transition: all 0.1s ease-out;
  }

  .pill:hover {
    cursor: pointer;
    opacity: 0.9;
  }

  .active {
    background-color: var(--danger);
    border-color: var(--danger);
    color: var(--white);
  }

  .text-content {
    font-size: 0.8rem;
  }
</style>