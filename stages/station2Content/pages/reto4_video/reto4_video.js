class station2ContentClass_reto4_video extends generalPage{
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
      <video class="responsive" src="./images/trabajos-escritos/reto4_video.mp4" controls="" controlslist="nodownload"></video>
      <div class="text-center">
        <button class="btn-general btn-back" onclick="stage.activity('menu_back')">Atrás</button>
        <button class="btn-general btn-next" onclick="stage.activity('menu_next')">Siguiente</button>
        <button class="btn-general btn-show-content" onclick="stage.activity('menu_showContentInText_none',this)">Mostrar en texto</button>
      </div>
      <div class="text-show-content">
        <h3>Transcripción del video</h3>
        <p>Estamos listos para iniciar el último reto que se enfocará en los ensayos académicos. Recuerda que tienes un tiempo específico para resolver cada pregunta. Cuántos más puntos ganes, más cerca estarán Andrés y Jimena de terminar sus trabajos y más cerca estarás tú de obtener tu premio.</p>
      </div>
      `;
  }
  importCssFiles(){
    return [
        'generalStage.css|general'
    ]
}
}
stagePage.pageContainerSet('reto4_video',station2ContentClass_reto4_video);