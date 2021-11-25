<script type="ts">
  import type { Theme } from 'svelte-dark-mode/types/DarkMode.svelte'
  import { onMount } from 'svelte'
  import { page } from '$app/stores'
  import Switch from 'svelte-switch'
  import DarkMode from 'svelte-dark-mode'

  let theme: Theme
  let open = false

  $: switchState = theme === 'dark' ? true : false

  onMount(() => {
    document.body.className = theme
  })

  function handleChange(e: any) {
    const { checked } = e.detail
    switchState = checked
    theme = switchState === true ? 'dark' : 'light'
    document.body.className = theme
  }

  function switchMenuState() {
    open = !open
  }
</script>

<DarkMode bind:theme />
<nav id="navbar">
  <span class="logo">Fuzzy Based Diagnoser</span>

  <section class="right mobile nav-section" on:click={switchMenuState}>
    <div class="nav-icon">
      <i class="fas fa-bars"></i>
    </div>
  </section>

  <section class="right desktop">
    <a
      href="/"
      class={$page.path === '/' ? 'active' : 'inactive'}
      sveltekit:prefetch>Home</a
    >
    <a
      href="/prueba"
      class={/\/prueba/i.test($page.path) ? 'active' : 'inactive'}
      sveltekit:prefetch>Prueba</a
    >
    <a
      href="/about"
      class={$page.path === '/about' ? 'active' : 'inactive'}
      sveltekit:prefetch>About</a
    >

    <Switch
      offColor="#0C2D48"
      offHandleColor="#19BD91"
      onHandleColor="#19BD91"
      onColor="#D4E7F4"
      unCheckedIcon={false}
      checked={switchState}
      handleDiameter={''}
      on:change={handleChange}
    >
      <span slot="checkedIcon" />
      <span slot="unCheckedIcon" />
    </Switch>
  </section>
</nav>

<div class="menu {open ? " open" : ""}">
  <a class="mobile-item" href="/" on:click={switchMenuState} >Home</a>
  <a class="mobile-item" href="/prueba" on:click={switchMenuState} >Prueba</a>
  <a class="mobile-item" href="/about" on:click={switchMenuState} >About</a>
  <div class="mobile-item">
    <Switch
      offColor="#0C2D48"
      offHandleColor="#19BD91"
      onHandleColor="#19BD91"
      onColor="#D4E7F4"
      unCheckedIcon={false}
      checked={switchState}
      handleDiameter={''}
      on:change={handleChange}
    >
      <span slot="checkedIcon" />
      <span slot="unCheckedIcon" />
    </Switch>
  </div>
</div>

<style>
  #navbar {
    width: 100vw;
    height: 4rem;
    padding: 1rem 3rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    position: fixed;
  }

  #navbar a {
    color: var(--foreground);
    text-decoration: none;
  }

  #navbar a:hover {
    color: var(--accent);
  }

  .logo {
    font-size: large;
    font-weight: bold;
  }

  .right {
    display: inline-flex;
    align-items: center;
    gap: 4rem;
  }

  .right a {
    font-weight: 400;
    padding: 0.2rem 1rem;
    border-radius: 20px;
  }

  .active {
    transition: all 0.05s;
    color: var(--background) !important;
    font-weight: bold;
  }

  a:before {
    content: '';
    display: flex;
    align-items: center;
    position: absolute;
    background: var(--foreground);
    border-radius: 20px;
    width: 0rem;
    height: 2rem;
    margin-top: -0.2rem;
    margin-left: -1.5rem;
    z-index: -1;
    transition: all 0.05s ease-out;
  }

  a.active:before {
    content: '';
    display: flex;
    align-items: center;
    position: absolute;
    background: var(--foreground);
    padding: 0.5rem 1rem;
    border-radius: 20px;
    width: 4.5rem;
    height: 1rem;
    margin-top: -0.2rem;
    margin-left: -1.5rem;
    z-index: -1;
    transition: all 0.05s ease-out;
  }

  .inactive {
    transition: all 0.05s;
  }

  .menu {
    margin-top: 4rem;
    transition: all 0.2s ease-out;
    overflow: hidden;
    box-sizing: border-box;
    height: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--secondary-background);
    display: none;
  }

  :global(.mobile-item) {
    color: var(--color);
    font-size: 0.9rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 3rem;
    font-weight: bold;
    margin: 0;
    text-decoration: none;
  }

  :global(.mobile-item):hover {
    text-decoration: none;
  }
  .open {
    height: 12rem;
  }

  :global(.nav-icon){
    text-decoration: none;
    color: var(--foreground) !important;
    font-size: 1.5rem;
    padding: 0 0.5rem;
    border-radius: 5px;
  }

  :global(.nav-icon):hover{
    background-color: var(--accent);
  }

  @media screen and (max-width: 768px) {
    .logo {
      font-size: 0.9rem;
    }
    #navbar {
      padding: 0 2rem;
      overflow: hidden;
    }
    :global(.nav-icon){
      padding: 0 0.5rem;
    }
  }

  @media screen and (max-width: 550px) {
    .logo {
      font-size: 0.9rem;
    }
    .desktop {
      display: none;
    }

    .mobile {
      display: block;
    }

    .menu {
      display: block;
    }
  }
</style>
