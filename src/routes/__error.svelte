<script>
  import ErrorSvg from '../../static/404.svg'
</script>

<style>
  #error {
    padding: 8rem 3rem 0 3rem;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
  }

  .title {
    font-size: 5rem;
    font-weight: bold;
  }

  p:not(.title) {
    font-size: 1.5rem;
  }

  .image {
    display: flex;
    width: 50vw;
  }

  .text {
    display: flex;
    flex-direction: column;
  }
</style>

<section id="error">
  <div class="text">
    <p class="title">
      404
    </p>
    <p>
      No pudimos encontrar la ruta que estás buscando...
    </p>
  </div>

  <img class="image" src={ErrorSvg} alt="404">
</section>