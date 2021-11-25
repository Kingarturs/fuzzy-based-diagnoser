<script>
  import { fly } from 'svelte/transition';

  import { questionResults, selectedDiseases } from '../stores/_stores.js'
  import { InterseccionDifusa } from '../FuzzyIntersection/GeneralDiagnosis.js'

  let TemporalArray = $selectedDiseases

  let NormalizedData = []

  if ($questionResults != null) {
    $questionResults.forEach((x) => {
      x = x / 100
      NormalizedData.push(x)
    })
    localStorage.setItem('Results', JSON.stringify(NormalizedData))
  } else {
    // NormalizedData==TempStorage
    if (typeof window !== 'undefined') {
      NormalizedData = JSON.parse(localStorage.getItem('Results'))
    }
  }
  let validacion = true
  let Respuesta = InterseccionDifusa(NormalizedData, TemporalArray)

  if (Respuesta[0] == 'No existe Coincidencia') {
    validacion = false
  }
</script>

<svelte:head>
  <title>Fuzzy Based Diagnoser | Resultados</title>
</svelte:head>
<section id="main" in:fly="{{ y: -10, duration: 100 }}">
  <div id="text-container">
    {#if validacion == true}
      <h1 class="title">Resultado:</h1>
      <h1 class="title">{Respuesta[0]}</h1>
      <p class="subtitle top-md">Con una confiabilidad de <strong>{Number(Respuesta[1]).toFixed(4)}%</strong></p>
      <p class="text">
        Este solo es un diagnóstico teórico, consulta con tu médico para una prueba
        oficial en caso de presentar sintomas
      </p>
    {:else}
      <h1 class="title">
        No se encontraron coincidencias suficientemente altas
      </h1>
      <p class="subtitle top-md">
        Ninguna de las enfermedades seleccionadas ha encontrado una coincidencia
        con un valor mayor al 75%
      </p>
    {/if}

    <a href="/prueba" class="button green top-lg">Volver a hacer el test <span class="normal">🚀</span></a>
  </div>

  <i class="far fa-lightbulb main-image" />
</section>

<style>

  strong {
    color: var(--danger);
  }

  #main {
    box-sizing: border-box;
    width: 100%;
    height: 100vh;
    padding: 8rem 3rem 0 3rem;
  }

  #text-container {
    width: 45rem;
    display: flex;
    flex-direction: column;
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

  .normal {
    font-weight: normal;
  }

  .main-image {
    position: absolute;
    font-size: 38vw;
    color: var(--accent);
    right: -5rem;
    bottom: -2rem;
  }

  .button {
    padding: 0.5rem 1.5rem;
    border-radius: 5px;
    text-decoration: none;
    color: var(--white);
    font-size: 1rem;
    box-sizing: border-box;
    width: fit-content;
    font-weight: 600;
  }

  @media screen and (max-width: 768px) {
    #main {
      padding-top: 6rem;
    }

    .title {
      font-size: 2.2rem;
    }

    .subtitle {
      font-size: 1.1rem;
    }

    .text {
      font-size: 0.9rem;
    }

    #text-container {
      width: 100%;
    }

    .main-image {
      position: relative;
      bottom: auto;
      right: auto;
      left: auto;
      top: auto;
      margin-top: 2rem;
      font-size: 30vw;
    }
  }

  @media screen and (max-width: 550px) {
    #main {
      padding-top: 2rem;
    }
  }
</style>
