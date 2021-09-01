class terminalContentClass_sec_1_Video_2 extends generalPage{
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
      <h2>Continuación del reto</h2>
      <video class="responsive" src="./images/aspectos-tecnicos/gamificacion/sec_1_Video_2.mp4" controls="" controlslist="nodownload"></video>
      <div class="text-center">
        <button class="btn-general" onclick="stages_terminalContent.menu.back()"">Atrás</button>
        <button class="btn-general" onclick="stages_terminalContent.menu.next()"">Siguiente</button>
        <button class="btn-general btn-show-content" onclick="stages_terminalContent.menu.showContentInText(this,'none')">Mostrar en texto</button>
      </div>
      <div class="text-show-content">
        <h3>Transcripción del video</h3>
        <p>¡Muy bien!. Has completado el segundo reto. Vamos ahora por un tercer reto en el que podrás identificar, cuánto has comprendido acerca del uso de elementos preliminares al cuerpo del trabajo escrito. A continuación, te haré una serie de preguntas sobre la portada, contraportada, nota de aceptación, dedicatoria, presentación de línea y grupo de investigación, y Resumen y Abstract.  ¡Vamos!</p>
      </div>
      `;
  }
  importCssFiles(){
    return [
        'generalStage.css|general'
    ]
}
}
stagePage.pageContainerSet('sec_1_Video_2',terminalContentClass_sec_1_Video_2);