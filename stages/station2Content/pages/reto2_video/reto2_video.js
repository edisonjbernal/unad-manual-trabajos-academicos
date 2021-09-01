class station2ContentClass_reto2_video extends generalPage{
    constructor(pageName){
        super(pageName);
    }
    addCssClass(){
      return [
          'stage_general'
      ]
  }
  content(){
      return `
      <h2>Introducción al Reto</h2>
      <video class="responsive" src="./images/trabajos-escritos/reto2_video.mp4" controls="" controlslist="nodownload"></video>
      <div class="text-center">
        <button class="btn-general btn-back" onclick="stage.activity('menu_back')">Atrás</button>
        <button class="btn-general btn-next" onclick="stage.activity('menu_next')">Siguiente</button>
        <button class="btn-general btn-show-content" onclick="stage.activity('menu_showContentInText_none',this)">Mostrar en texto</button>
      </div>
      <div class="text-show-content">
        <h3>Transcripción del video</h3>
        <p>Ha llegado el momento de nuestro segundo reto.</p>
        <p>En esta oportunidad, le ayudarás a Ximena y Andrés a revisar cuánto han aprendido sobre el resumen como trabajo académico. En este segundo reto encontrarás cuatro preguntas. Recuerda que cada una tiene un tiempo de respuesta definido. Debes estar muy atento al tiempo de respuesta permitido en cada pregunta para asegurarte de no excederte y perder puntos.</p>
        <p>¡Empecemos!</p>
      </div>
      `;
  }
  importCssFiles(){
    return [
        'generalStage.css|general'
    ]
}
}
stagePage.pageContainerSet('reto2_video',station2ContentClass_reto2_video);