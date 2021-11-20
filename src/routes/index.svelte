<style>
  :global(body.dark) {
    --background: #0C2D48;
    --foreground: #D4E7F4;
    --secondary-foreground: #FFFFFF;
  }

  :global(body.light) {
    --background: #D4E7F4;
    --foreground: #0C2D48;
    --secondary-foreground: #161616;
  }

  :global(*) {
    margin: 0;
    padding: 0;
  }

  :global(body, html){
    width: 100%;
    height: 100%;
  }

  :global(body) {
    font-family: 'Poppins', sans-serif;
    background-color: var(--background);
    color: var(--foreground);

    --accent: #19BD91;
    --danger: #EE544A;
  }
</style>

<div>
  <h1>Hola mundo</h1>
</div>