<script>
  import { fly } from 'svelte/transition';

  import { questionResults } from '../stores/_stores.js'
  import { InterseccionDifusa } from '../FuzzyIntersection/GeneralDiagnosis.js'

  let TemporalArray = Array(16).fill(1)

  let NormalizedData = []
  console.log($questionResults)
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

  console.log(Respuesta)
</script>

<svelte:head>
  <title>Fuzzy Based Diagnoser | Resultados</title>
</svelte:head>
<section id="main" in:fly="{{ y: -10, duration: 100 }}">
  {#if validacion == true}
    <div id="text-container">
      <h1 class="title">Resultado</h1>
      <h1 class="title">{Respuesta[0]}</h1>
      <p class="subtitle top-md">Con una confiabilidad de <strong>{Respuesta[1]}%</strong></p>
      <p class="text">
        Este solo es un diagnostico teórico, consulta con tu médico para una prueba
        oficial en caso de presentar sintomas
      </p>
    </div>
  {/if}
  {#if validacion == false}
    <div id="text-container">
      <h1 class="title">
        No se encontraron coincidencias suficientemente altas
      </h1>
      <p class="subtitle top-md">
        Ninguna de las enfermedades seleccionadas ha encontrado una coincidencia
        con un valor mayor al 75%
      </p>
    </div>
  {/if}

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

  .main-image {
    position: absolute;
    font-size: 38vw;
    color: var(--accent);
    right: -5rem;
    bottom: -2rem;
  }
</style>
