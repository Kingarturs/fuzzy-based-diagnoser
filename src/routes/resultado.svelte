<script>
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

<section id="main">
  {#if validacion == true}
    <div id="text-container">
      <h1 class="title">Resultado</h1>
      <h1 class="title">{Respuesta[0]}</h1>
      <p class="subtitle top-md">Con una confiabilidad de {Respuesta[1]}%</p>
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
  :global(.top-lg) {
    margin-top: 2rem;
  }
  :global(.top-md) {
    margin-top: 1rem;
  }
  :global(.top-sm) {
    margin-top: 0.5rem;
  }
  :global(.bottom-lg) {
    margin-bottom: 2rem;
  }
  :global(.bottom-md) {
    margin-bottom: 1rem;
  }
  :global(.bottom-sm) {
    margin-bottom: 0.5rem;
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
