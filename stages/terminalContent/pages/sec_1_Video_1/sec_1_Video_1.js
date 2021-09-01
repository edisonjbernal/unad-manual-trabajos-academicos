class terminalContentClass_sec_1_Video_1 extends generalPage{
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
      <video class="responsive" src="./images/aspectos-tecnicos/gamificacion/sec_1_Video_1.mp4" controls="" controlslist="nodownload"></video>
      <div class="text-center">
        <button class="btn-general" onclick="stages_terminalContent.menu.back()"">Atrás</button>
        <button class="btn-general" onclick="stages_terminalContent.menu.next()"">Siguiente</button>
        <button class="btn-general btn-show-content" onclick="stages_terminalContent.menu.showContentInText(this,'none')">Mostrar en texto</button>
      </div>
      <div class="text-show-content">
        <h3>Transcripción del video</h3>
        <p>¡Excelente!. Has entendido entonces que cada trabajo académico que presentes en la UNAD puede requerir una estructura específica dependiendo del tipo de reporte escrito solicitado, pero siempre habrá unas secciones generales transversales a todos los documentos. Vamos a continuar con nuestro siguiente reto.</p>
      </div>
      `;
  }
  importCssFiles(){
    return [
        'generalStage.css|general'
    ]
}
}
stagePage.pageContainerSet('sec_1_Video_1',terminalContentClass_sec_1_Video_1);