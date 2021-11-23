<script type="ts">
  import type { Theme } from 'svelte-dark-mode/types/DarkMode.svelte';
  import { onMount } from 'svelte';
  import { page } from '$app/stores';
  import Switch from 'svelte-switch';
  import DarkMode from 'svelte-dark-mode';

  let theme: Theme;

  $: switchState = theme === 'dark' ? true : false;

  onMount(() => {
    document.body.className = theme;
  });

  function handleChange(e: any) {
    const { checked } = e.detail;
    switchState = checked;
    theme = switchState === true ? 'dark' : 'light';
    document.body.className = theme;
  }
</script>

<DarkMode bind:theme />
<nav id="navbar">
  <span id="logo">Fuzzy Based Diagnoser</span>

  <section id="right">
    <a
      href="/"
      class={$page.path === '/' ? 'active' : 'inactive'}
      sveltekit:prefetch>Home</a
    >
    <a
      href="/prueba"
      class={$page.path === '/prueba' ? 'active' : 'inactive'}
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

<style>
  #navbar {
    width: 100%;
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

  #logo {
    font-size: large;
    font-weight: bold;
  }

  #right {
    display: inline-flex;
    align-items: center;
    gap: 4rem;
  }

  #right a {
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
</style>
