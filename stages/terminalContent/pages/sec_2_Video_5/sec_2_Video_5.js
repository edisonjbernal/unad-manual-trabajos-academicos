class terminalContentClass_sec_2_Video_5 extends generalPage{
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
      <h2>Finalización</h2>
      <video class="responsive" src="./images/aspectos-tecnicos/gamificacion/sec_2_Video_5.mp4" controls="" controlslist="nodownload"></video>
      <div class="text-center">
        <button class="btn-general" onclick="stages_terminalContent.menu.back()"">Atrás</button>
        <button class="btn-general" onclick="stages_terminalContent.menu.next()"">Siguiente</button>
        <button class="btn-general btn-show-content" onclick="stages_terminalContent.menu.showContentInText(this,'none')">Mostar en texto</button>
      </div>
      <div class="text-show-content">
        <h3>Transcripción del video</h3>
        <p>Qué buen trabajo. Ahora tienes más claro qué es la propiedad intelectual y como reconocerla en tus trabajos escritos. Como aprobaste cada reto, podrás descargar a continuación un archivo con todas las infografías en las que se presentan los diferentes casos de referenciación y citación, con sus ejemplos correspondientes para que te guíes con ellos cuando estés elaborando cualquier trabajo escrito solicitado en la Universidad.</p>
      </div>
      `;
  }
  importCssFiles(){
    return [
        'generalStage.css|general'
    ]
}
}
stagePage.pageContainerSet('sec_2_Video_5',terminalContentClass_sec_2_Video_5);