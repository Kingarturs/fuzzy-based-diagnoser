<script>
  import { fly } from 'svelte/transition';
</script>

<svelte:head>
  <title>Fuzzy Based Diagnoser | Inicio</title>
</svelte:head>
<section id="main" class="container">
  <div id="text-container" in:fly="{{ x: -50, duration: 100 }}">
    <h1 class="title">
      Representación de aplicaciones para relación de conjuntos difusos
    </h1>
    <p class="subtitle top-md">
      Contestando una serie de preguntas sobre tus síntomas sería posible
      determinar en cierto grado si se tiene o no una relación sintomática con
      una o varias enfermedades
    </p>
    <p class="text top-lg">
      *Es un proyecto escolar con propósitos demostrativos únicamente
    </p>
  </div>

  <div class="top-lg" in:fly="{{ x: -50, duration: 100 }}">
    <a class="button green bottom-md" href="/prueba" sveltekit:prefetch>Tomar test</a>
  </div>

  <i class="fab fa-medrt main-image" in:fly="{{ x: +50, duration: 100 }}"/>
</section>

<style>
  #text-container {
    width: 45rem;
  }

  .title {
    font-size: 2.8rem;
  }

  .subtitle {
    font-size: 1.2rem;
    line-height: 2rem;
  }

  .text {
    font-size: 1rem;
  }

  .button {
    padding: 0.5rem 1.5rem;
    border-radius: 5px;
    text-decoration: none;
    color: var(--white);
    font-weight: 600;
    font-size: 1.1rem;
    box-sizing: border-box;
  }

  .main-image {
    position: absolute;
    font-size: 38vw;
    color: var(--accent);
    right: -5rem;
    bottom: -2rem;
  }

  @media screen and (max-width: 768px) {
    #main {
      padding: 4rem 2rem 0rem 2rem;
      box-sizing: border-box;
      overflow-y: auto;
    }

    .main-image {
      position: relative;
      font-size: 50vw;
      right: 0;
      bottom: 0;
      margin-top: 3rem;
      width: 100%;
      height: fit-content;
      text-align: center;
    }
    
    #text-container {
      width: 100%;
    }
    .title {
      font-size: 2rem;
    }

    .subtitle {
      font-size: 1.1rem;
    }

    .text {
      font-size: 0.9rem;
    }
  }
</style>
