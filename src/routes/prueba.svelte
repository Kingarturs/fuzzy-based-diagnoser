<script>
  import RangeSlider from 'svelte-range-slider-pips';

  let questions = [
    'Piel Roja',
    'Dolor al Orinar',
    'Tos',
    'Acidez',
    'Cansancio',
    'Fiebre',
    'Cambio de Peso',
    'Sangrados Nasales',
    'Problemas de Coagulación',
    'Anemia',
    'Infección Recurrente',
    'Dificultad para Tragar',
    'Protuberancia en el cuello',
    'Decoloración amarillenta en la piel',
    'Dolor en Abdomen',
    'Dolor en Huesos',
    'Protuberancias desconocidas en la mama o axila'
  ];
  let scores = Array(questions.length).fill([50]);
  let currentQuestion = 0;

  $: shouldDisableAnteriorButton = currentQuestion === 0;
  $: shouldDisableSiguienteButton = currentQuestion === questions.length - 1;
</script>

<div class="container flex-column justify-center align-center">
  <h1 class="bottom-md">{questions[currentQuestion]}</h1>
  <p class="bottom-lg">
    Califique el sintoma a continuación en una escala del 0 al 100
  </p>
  <RangeSlider
    bind:values={scores[currentQuestion]}
    range="min"
    float
    pips
    min={0}
    max={100}
    step={1}
    all="label"
    pipstep={100}
    formatter={(x) => (x === 0 ? '😁' : x === 100 ? '😥' : x)}
  />
  <div class="buttons flex-row justify-evenly align-center">
    <button
      disabled={shouldDisableAnteriorButton}
      class="red"
      on:click={() => (currentQuestion -= 1)}>Anterior</button
    >
    <button
      disabled={shouldDisableSiguienteButton}
      class="green"
      on:click={() => (currentQuestion += 1)}>Siguiente</button
    >
  </div>
</div>

<style>
  :global(.rangeSlider) {
    width: 50%;
  }

  :global(.rangeSlider.min > .rangeHandle > .rangeNub) {
    background: #19bd91 !important;
  }

  :global(.rangeSlider.min > .rangeBar) {
    background: #19bd91 !important;
  }

  :global(.rangeSlider > .rangePips > .pip > .pipVal) {
    color: lightgrey !important;
    font-size: 20px;
  }

  :global(.rangeSlider > .rangeHandle > .rangeFloat) {
    background: #19bd91 !important;
  }

  .buttons {
    width: 50%;
    padding-top: 50px;
  }

  .buttons > button {
    width: 100px;
    height: 40px;
    margin: 5px;
    border-radius: 20px;
    border: none;
    color: white;
    font-size: 14px;
    cursor: pointer;
  }
</style>
