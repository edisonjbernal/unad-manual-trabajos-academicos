class station4ContentClass_reto1_video extends generalPage{
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
      <video class="responsive" src="./images/articulos-para-publicacion/reto1_video.mp4" controls="" controlslist="nodownload"></video>
      <div class="text-center">
        <button class="btn-general btn-back" onclick="stage.activity('menu_back')">Atrás</button>
        <button class="btn-general btn-next" onclick="stage.activity('menu_next')">Siguiente</button>
        <button class="btn-general btn-show-content" onclick="stage.activity('menu_showContentInText_none',this)">Mostrar en texto</button>
      </div>
      <div class="text-show-content">
        <h3>Transcripción del video</h3>
        <p>Una vez más, te presentaremos un reto mediante el cual podrás ir evaluando qué tanto has aprendido y, como es costumbre, recibirás material referente a esta estación una vez culminado el reto. Recuerda que el material descargable te servirá como orientación para el momento que realices tu artículo de investigación.</p>
      </div>
      `;
  }
  importCssFiles(){
    return [
        'generalStage.css|general'
    ]
}
}
stagePage.pageContainerSet('reto1_video',station4ContentClass_reto1_video);
