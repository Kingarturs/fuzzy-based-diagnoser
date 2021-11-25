<script>
  import { fly } from 'svelte/transition'
  import Pill from '../../components/Pill.svelte'
  import { selectedDiseases } from '../../stores/_stores';

  import variables from '../../FuzzyIntersection/variables'
  let enfermedades = Array().fill(0)

  $: disabled = !enfermedades.includes(1)

</script>

<svelte:head>
  <title>Fuzzy Based Diagnoser | Test</title>
</svelte:head>

<section id="main" class="container">
  <div class="option" in:fly="{{ x: -50, duration: 100 }}">
    <p class="title bold">Diagnóstico general</p>
    <p class="text top-md">Ingresa tus calificación de cada síntoma y nosotros haremos un diagnóstico con base en todas las enfermedades disponibles</p>
    <a href="/prueba/general" class="button green top-lg bottom-lg">Empezar!</a>
  </div>

  <span class="line" />
  
  <div class="option top-line" in:fly="{{ x: 50, duration: 100 }}">
    <p class="title bold">Diagnóstico específico</p>
    <p class="text top-md">Selecciona las enfermedades con las que quieres comparar tus síntomas</p>

    <div class="pill-container top-lg">
      {#each variables.data as variable, i}
        <Pill enfermedad={variable.Nombre} bind:active={enfermedades[i]} />
      {/each} 
    </div>

    {#if disabled}
      <button disabled class="disabled button green top-lg bottom-lg">Empezar!</button>
    {:else}
      <a href={"/prueba/specific"} class="button green top-lg bottom-lg" on:click={() => selectedDiseases.set(enfermedades)}>Empezar!</a>
    {/if}
  </div>
</section>

<style>

  #main {
    display: flex;
    width: 100%;
  }

  .option {
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    padding-bottom: 4rem;
    flex-direction: column;
    text-align: center;
    padding: 0 4rem 6rem 4rem;
  }

  .bold {
    font-weight: bold;
  }
  .title {
    font-size: 2rem;
  }

  .text {
    font-size: 1rem;
  }

  .line {
    background-color: var(--foreground);
    position: absolute;
    left: 50%;
    bottom: 0;
    width: 2px;
    height: 100vh;
  }

  .pill-container {
    display: inline-flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.5rem 0.8rem;
  }

  .button {
    padding: 0.5rem 1.5rem;
    border-radius: 5px;
    text-decoration: none;
    color: var(--white);
    font-weight: 600;
    font-size: 1rem;
    box-sizing: border-box;
  }

  .disabled {
    background-color: gray;
  }

  @media screen and (max-width: 768px) {
    #main {
      flex-direction: column;
      overflow-y: scroll;
      padding-top: 2rem;
    }

    .line {
      display: none;
    }

    .option {
      padding: 2rem 0;
    }

    .top-line {
      border-top: 2px solid var(--foreground);
      margin-bottom: 4rem;
    }
  }
</style>