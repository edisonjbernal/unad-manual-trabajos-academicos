class terminalContentClass_tablasyFiguras extends generalPage{
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
      <h2>Tablas y figuras</h2>
      <img class="responsive" src="./test/videoFaltante.png" />
      <div class="text-center">
        <button class="btn-general" onclick="stages_terminalContent.menu.back()"">Atrás</button>
        <button class="btn-general" onclick="stages_terminalContent.menu.next()"">Siguiente</button>
        <button class="btn-general btn-show-content" onclick="stages_terminalContent.menu.showContentInText(this,'none')">Mostar en texto</button>
      </div>
      <div class="text-show-content">
        <h3>Transcripción del video</h3>
        
      </div>
      `;
  }
  importCssFiles(){
    return [
        'generalStage.css|general'
    ]
}
}
stagePage.pageContainerSet('tablasyFiguras',terminalContentClass_tablasyFiguras);