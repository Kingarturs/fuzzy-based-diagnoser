<script>
  import { fly } from 'svelte/transition'
</script>

<svelte:head>
  <title>Fuzzy Based Diagnoser | Acerca de</title>
</svelte:head>
<section id="main" in:fly="{{ y: -10, duration: 100 }}">
  <div id="text-container" in:fly="{{ x: -50, duration: 100 }}">
    <h1 class="title">Acerca de</h1>
    <p class="subtitle top-md">
      Este es un proyecto realizado por estudiantes de la Universidad Autónoma
      de Querétaro para la clase de Inteligencia Artificual con el objetivo de
      realizar una pequeña demostración práctica de la utilidad de la relación
      de conjuntos difusos.
    </p>
  </div>

  <div in:fly="{{ x: -50, duration: 100 }}">
    <h2 class="subtitle top-md">
      Desarrolladores
      <h2>
        <div class="devImage">
          <p class="text DevText">Luis Arturo Garcia</p>
          <a href="https://www.facebook.com/luisarturo.garcia.9"
            ><i class="fab fa-facebook devIcon" /></a
          >

          <a href="https://twitter.com/Kingarturs1721"
            ><i class="fab fa-twitter devIcon" /></a
          >

          <a href="https://www.instagram.com/kingarturs21/?hl=es-la"
            ><i class=" fab fa-instagram devIcon" /></a
          >

          <a href="https://www.linkedin.com/in/luis-arturo"
            ><i class="fab fa-linkedin devIcon" /></a
          >
        </div>

        <div class="devImage">
          <p class="text DevText">Raúl Guzmán</p>

          <a href="https://www.facebook.com/raulguzguerrero"
            ><i class="fab fa-facebook devIcon" /></a
          >

          <a href="https://twitter.com/rguzgu"
            ><i class="fab fa-twitter devIcon" /></a
          >

          <a href="https://www.instagram.com/rguzg/?hl=es-la"
            ><i class=" fab fa-instagram devIcon" /></a
          >

          <a href="https://www.linkedin.com/in/raúl-guzmán-0ba9871b0/"
            ><i class="fab fa-linkedin devIcon" /></a
          >
        </div>

        <div class="devImage">
          <p class="text DevText">Emiliano Zuchovicki</p>

          <a href="https://www.facebook.com/emiliano.zuchovicki"
            ><i class="fab fa-facebook devIcon" /></a
          >

          <a href="https://twitter.com/zuchovicki1"
            ><i class="fab fa-twitter devIcon" /></a
          >

          <a href="https://www.instagram.com/zucho42/?hl=es-la"
            ><i class=" fab fa-instagram devIcon" /></a
          >

          <a href="https://www.linkedin.com/in/emiliano-zuchovicki-29a372226/"
            ><i class="fab fa-linkedin devIcon" /></a
          >
        </div>
      </h2>
    </h2>
  </div>

  <i class="fab fa-connectdevelop main-image" in:fly="{{ x: 50, duration: 100 }}"/>
</section>

<style>
  @media (max-width: 550px){
    #main{
      padding: 4rem 3rem 0 3rem !important;
      overflow-y: scroll;
    }

    #text-container{
      width: 100% !important;
    }

    .subtitle{
      font-size: 0.9rem !important;
    }

    .title{
      font-size: 2rem !important;
    }

    .devImage {
      width: 100% !important;
      align-items: center !important;
    }

    .DevText {
      width: 10rem !important;
    }

    .main-image{
      position: relative !important;
      height: fit-content;
      box-sizing: border-box;
      font-size: 80vw !important;
      left: auto;
      bottom: auto;
      right: auto;
      top: auto;
    }
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

  .DevText {
    margin-top: 1rem;
    width: 15rem;
    color: var(--accent);
    font-weight: 600;
  }

  .devImage {
    width: 100rem;
    display: flex;
    flex-direction: row;
  }
  .devIcon {
    margin-left: 1rem;
    margin-right: 1rem;
    margin-top: 1rem;
  }

  a {
    color: inherit;
  }
</style>
