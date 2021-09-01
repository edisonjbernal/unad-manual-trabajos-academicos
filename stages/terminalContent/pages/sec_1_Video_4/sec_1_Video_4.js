class terminalContentClass_sec_1_Video_4 extends generalPage{
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
      <h2>Finalización del reto</h2>
      <video class="responsive" src="./images/aspectos-tecnicos/gamificacion/sec_1_Video_4.mp4" controls="" controlslist="nodownload"></video>
      <div class="text-center">
        <button class="btn-general" onclick="stages_terminalContent.menu.back()"">Atrás</button>
        <button class="btn-general" onclick="stages_terminalContent.menu.next()"">Siguiente</button>
        <button class="btn-general btn-show-content" onclick="stages_terminalContent.menu.showContentInText(this,'none')">Mostrar en texto</button>
      </div>
      <div class="text-show-content">
        <h3>Transcripción del video</h3>
        <p>¡Felicitaciones! Has finalizado la primera sección de retos. Ahora podrás descargar un archivo comprimido con las plantillas de las secciones preliminares de los diferentes trabajos escritos que pueden solicitarte en la universidad. Espero te sean de gran utilidad.</p>
      </div>
      `;
  }
  importCssFiles(){
    return [
        'generalStage.css|general'
    ]
}
}
stagePage.pageContainerSet('sec_1_Video_4',terminalContentClass_sec_1_Video_4);