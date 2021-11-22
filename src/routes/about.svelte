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

  .DevText{

    margin-left: 5rem;
    margin-top: 1rem;
    
    width: 15rem;
}

.devImage{

    
    
    width: 100rem;
    display: flex;
  flex-direction: row;
}
.devIcon{
    
    margin-left: 1rem;
    margin-right: 1rem;
    margin-top: 1rem;
}

a{
    color:inherit
}

</style>
<section id="main">
  <div id="text-container">
    <h1 class="title">Acerca de</h1>
     <p class="subtitle top-md">Este es un proyecto realizado por estudiantes de la Universidad Autónoma de Querétaro para la clase de Inteligencia Artificual con el objetivo de realizar una pequeña demostración práctica de la utilidad de la relación de conjuntos difusos.</p>
  </div>

    <div>

    <h2 class="subtitle top-md">Desarrolladores<h2>
    <div class="devImage">
    <p class="text DevText"> Luis Arturo Garcia</p>
    <a href="https://www.facebook.com/luisarturo.garcia.9"><i class="fab fa-facebook devIcon"></i></a>

    <a href="https://twitter.com/Kingarturs1721"><i class="fab fa-twitter devIcon"></i></a>

    <a href="https://www.instagram.com/kingarturs21/?hl=es-la"><i class=" fab fa-instagram devIcon"></a>

    <a href="https://www.linkedin.com/in/luis-arturo"><i class="fab fa-linkedin devIcon"></i></a>

     
    </div>

    <div class="devImage">
    <p class="text DevText">Raúl Guzmán</p>

    <a href="https://www.facebook.com/raulguzguerrero"><i class="fab fa-facebook devIcon"></i></a>

    <a href="https://twitter.com/rguzgu"><i class="fab fa-twitter devIcon"></i></a>

    <a href="https://www.instagram.com/rguzg/?hl=es-la"><i class=" fab fa-instagram devIcon"></a>

    <a href="linkedin.com/in/raúl-guzmán-0ba9871b0/"><i class="fab fa-linkedin devIcon"></i></a>

    </div>
        
    <div class="devImage">
    <p class="text DevText">Emiliano Zuchovicki</p>

    <a href="https://www.facebook.com/emiliano.zuchovicki"><i class="fab fa-facebook devIcon"></i></a>

    <a href="https://twitter.com/zuchovicki1"><i class="fab fa-twitter devIcon"></i></a>

    <a href="https://www.instagram.com/zucho42/?hl=es-la"><i class=" fab fa-instagram devIcon"></a>

    <a href="https://www.linkedin.com/in/emiliano-zuchovicki-29a372226/"><i class="fab fa-linkedin devIcon"></i></a>
    </div>

    </div>

<i class="fab fa-medrt main-image" />
  
 
</section>