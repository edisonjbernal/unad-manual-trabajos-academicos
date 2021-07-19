class station2ContentClass_miniModulos extends generalPage{
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
      <h2>Mini Módulos</h2>
      <video class="responsive" src="./images/trabajos-escritos/miniModulos.mp4" controls="" controlslist="nodownload"></video>
      <div class="text-center">
        <button class="btn-general" onclick="stages_station2Content.menu.back()">Atrás</button>
        <button class="btn-general" onclick="stages_station2Content.menu.next()">Siguiente</button>
        <button class="btn-general btn-show-content" onclick="stages_station2Content.menu.showContentInText(this,'none')">Mostar en texto</button>
      </div>
      <div class="text-show-content">
        <h3>Transcripción del video</h3>
        <p>Espero el vídeo te haya parecido claro e interesante. Ahora por favor revisa cada uno de los siguientes mini-módulos para obtener información detallada sobre aspectos fundamentales a tener en cuenta para el desarrollo ideal cada tipo de trabajo.</p>
      </div>
      `;
  }
  importCssFiles(){
    return [
        'generalStage.css|general'
    ]
}
}
stagePage.pageContainerSet('miniModulos',station2ContentClass_miniModulos);