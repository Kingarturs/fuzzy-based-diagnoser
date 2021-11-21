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

  :global(.container) {
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

  .button {
    padding: .5rem 1.5rem;
    border-radius: 5px;
    text-decoration: none;
    color: var(--white);
    font-weight: bold;
    font-size: 1.1rem;
    box-sizing: border-box;
  }

  .green {
    background-color: var(--accent);
  }

  .main-image {
    position: absolute;
    font-size: 38vw;
    color: var(--accent);
    right: -5rem;
    bottom: -2rem;
  }
</style>

<section id="main" class="container">
  <div id="text-container">
    <h1 class="title">Representación de aplicación para relación de conjuntos difusos</h1>
    <p class="subtitle top-md">Contestando una serie de preguntas sobre tus síntomas sería posible determinar en cierto grado si se tiene o no una relación sintomática con una o varias enfermedades</p>
    <p class="text top-lg">*Es un proyecto escolar con propósitos demostrativos únicamente</p>
  </div>

  <div class="top-lg">
    <a class="button green" href="/prueba" sveltekit:prefetch>Tomar test</a>
  </div>

  <i class="fab fa-medrt main-image" />
  <i class="fab fa-medrt main-image" />
</section>