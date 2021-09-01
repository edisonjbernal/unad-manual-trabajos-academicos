class terminalContentClass_conceptosPropiedadIntelectualYReferenciacion extends generalPage{
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
      <h2>Conceptos Propiedad Intelectual y Referenciación</h2>
      <video class="responsive" src="./images/aspectos-tecnicos/aspectos-generales/conceptosPropiedadIntelectualYReferenciacion.mp4" controls="" controlslist="nodownload"></video>
      <div class="text-center">
        <button class="btn-general" onclick="stages_terminalContent.menu.back()"">Atrás</button>
        <button class="btn-general" onclick="stages_terminalContent.menu.next()"">Siguiente</button>
        <button class="btn-general btn-show-content" onclick="stages_terminalContent.menu.showContentInText(this,'none')">Mostrar en texto</button>
      </div>
      <div class="text-show-content">
        <h3>Transcripción del video</h3>
        <p>En el contexto actual, es extremadamente importante conocer qué es la propiedad intelectual y su relevancia en un mundo en el que el flujo de la información es tan grande gracias a las tecnologías de la información y la comunicación. Esto le permitirá a todo profesional tanto en formación como en ejercicio de su labor, llevar a cabo trabajos de alta calidad y rigor investigativo no solo de orden escrito sino también de carácter audiovisual. </p>
        <p>A continuación te presentaré algunos conceptos clave sobre este tema, y encontrarás diferentes maneras correctas de citar y referenciar los estudios, teorías, análisis, y trabajos hechos previamente por otros expertos cuando consideres que ellos aportarán información valiosa para tus trabajos.</p>
      </div>
      <div class="text-general">
        Selecciona la opción que desees revisar primero:
      </div>
      <div class="cards">
        <a href="#propiedadIntelectualYPlagio" onclick="stages_terminalContent.menu.getFromPageName(event,this);">
            <figure class="card">
                
                    <img src="./images/aspectos-tecnicos/propiedad-intelectual-y-referenciacion/propiedadintelectualyplagio.png" alt="Propiedad intelectual y plagio">
                
                <figcaption>
                  Propiedad intelectual y plagio
                </figcaption>
            </figure>
        </a>
        <a href="#citacionNormasAPA" onclick="stages_terminalContent.menu.getFromPageName(event,this);">
            <figure class="card">
                <img src="./images/aspectos-tecnicos/propiedad-intelectual-y-referenciacion/citacion.png" alt="Citación (Normas APA)">
                <figcaption>
                  Citación (Normas APA)
                </figcaption>
            </figure>
        </a>
        <a href="#referenciacionNormasAPA" onclick="stages_terminalContent.menu.getFromPageName(event,this);">
            <figure class="card">
                <img src="./images/aspectos-tecnicos/propiedad-intelectual-y-referenciacion/referenciacion.png" alt="Referenciación (Normas APA)">
                <figcaption>
                  Referenciación (Normas APA)
                </figcaption>
            </figure>
        </a>
        <a href="#tablasyFiguras" onclick="stages_terminalContent.menu.getFromPageName(event,this);">
            <figure class="card">
                <img src="./images/aspectos-tecnicos/propiedad-intelectual-y-referenciacion/tablasyfiguras.png" alt="Tablas y Figuras">
                <figcaption>
                  Tablas y Figuras
                </figcaption>
            </figure>
        </a>
      </div>
      `;
  }
  importCssFiles(){
    return [
        'generalStage.css|general',
        'ecards.css|general'
    ]
}
}
stagePage.pageContainerSet('conceptosPropiedadIntelectualYReferenciacion',terminalContentClass_conceptosPropiedadIntelectualYReferenciacion);