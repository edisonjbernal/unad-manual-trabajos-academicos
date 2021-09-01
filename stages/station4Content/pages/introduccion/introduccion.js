class station4ContentClass_introducccion extends generalPage{
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
      <h2>Introducción</h2>
  <video class="responsive" src="./images/articulos-para-publicacion/introduccion.mp4" controls="" controlslist="nodownload"></video>
  <div class="text-center">
    <button class="btn-general btn-next" onclick="stage.activity('menu_next')">Siguiente</button>
    <button class="btn-general btn-show-content" onclick="stage.activity('menu_showContentInText_none',this)">Mostrar en texto</button>
  </div>
  <div class="text-show-content">
    <h3>Transcripción del video</h3>
    <p><strong>Publicación de artículos de investigación</strong></p>
    <p>Los artículos de investigación son una manera de dar a conocer los procesos, procedimientos y resultados de un trabajo investigativo de todo tipo. A través del artículo se dan a conocer de manera amplia los impactos que una investigación puede tener, es por ello que las revistas científicas –especializadas en publicar este tipo de artículos- difunden sus escritos tanto de manera física como virtual con el fin de que toda la comunidad académica pueda reconocer exploraciones académicas de todo tipo.</p>
    <p>Sin embargo, para que un artículo sea publicable debe cumplir con unos lineamientos mínimos aceptados por la comunidad científica y académica, los cuales se reconocen por las siglas IMRyC que hacen referencia: a la Introducción, Metodología, Resultados y Conclusiones. Adicionalmente, el artículo deberá cumplir parámetros específicos que cada revista o medio de difusión puede plantear.</p>
    <p>Dado que un artículo es un informe de corta extensión, es importante revisar sus partes y lo que cada una de ellas contiene, para ello te comparto la siguiente información.</p>
  </div>
      `;
  }
  importCssFiles(){
    return [
        'generalStage.css|general'
    ]
}
}
stagePage.pageContainerSet('introduccion',station4ContentClass_introducccion);