class station2ContentClass_reto1_video extends generalPage{
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
      <video class="responsive" src="./images/trabajos-escritos/reto1_video.mp4" controls="" controlslist="nodownload"></video>
      <div class="text-center">
        <button class="btn-general btn-back" onclick="stage.activity('menu_back')">Atrás</button>
        <button class="btn-general btn-next" onclick="stage.activity('menu_next')">Siguiente</button>
        <button class="btn-general btn-show-content" onclick="stage.activity('menu_showContentInText_none',this)">Mostrar en texto</button>
      </div>
      <div class="text-show-content">
        <h3>Transcripción del video</h3>
        <p>Empecemos con el primer reto que va por cuatro (4) puntos. Como viste, los tres tipos de trabajos académicos en los que nos enfocaremos en esta estación son el resumen, la reseña y el ensayo. Hay un propósito claro para que se pidan diferentes tipos de trabajos para tus entregas académicas y este tiene que ver con el desarrollo de habilidades que te permitirán ser un profesional integral y competente.</p>
      </div>
      `;
  }
  importCssFiles(){
    return [
        'generalStage.css|general'
    ]
}
}
stagePage.pageContainerSet('reto1_video',station2ContentClass_reto1_video);