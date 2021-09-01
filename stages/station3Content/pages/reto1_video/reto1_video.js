class station3ContentClass_reto1_video extends generalPage{
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
      <h2>Introducción a Reto</h2>
      <video class="responsive" src="./images/trabajos-y-proyectos-investigativos/reto1_video.mp4" controls="" controlslist="nodownload"></video>
      <div class="text-center">
        <button class="btn-general btn-back" onclick="stage.activity('menu_back')">Atrás</button>
        <button class="btn-general btn-next" onclick="stage.activity('menu_next')">Siguiente</button>
        <button class="btn-general btn-show-content" onclick="stage.activity('menu_showContentInText_none',this)">Mostrar en texto</button>
      </div>
      <div class="text-show-content">
        <h3>Transcripción del video</h3>
        <p>Como viste en el video anterior, hemos llegado a uno de los temas más importante en cuanto a desarrollo de trabajos académicos se refiere, pues este se establece como requisito de grado de tu proceso formativo en la universidad. Te presentaremos un reto mediante el cual podrás ir evaluando qué tanto has aprendido y como es costumbre recibirás un paquete de documentos que te servirán en tu vida académica una vez culminado el reto. Recuerda que el material descargable te servirá como orientación para el momento en que inicies tu proyecto de grado.</p>
        <p>Empecemos entonces con la primera pregunta del reto de esta estación.</p>
      </div>
      `;
  }
  importCssFiles(){
    return [
        'generalStage.css|general'
    ]
}
}
stagePage.pageContainerSet('reto1_video',station3ContentClass_reto1_video);