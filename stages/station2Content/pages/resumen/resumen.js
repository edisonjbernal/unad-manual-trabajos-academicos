class station2ContentClass_resumen extends generalPage{
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
      <div class="header-h2"><h2>Resumen</h2></div>
      <div class="cards-audio-module">
        <div class="start">
            <h3>Tipos de resumen</h3>
        </div>
            <div class="cards-audio-container">
                <div class="card-audio">
                    <h3>Informativo</h3>
                    <p>Sintetiza el contenido el contenido del texto original enfocándose mayormente en las ideas principales del mismo. Presenta una perspectiva rápida del original, por ello no suele presentar ideas secundarias o ejemplos particulares.</p>
                    <audio controls="" class="general">
                        <source src="./images/trabajos-escritos/resumen_informativo.mp3" type="audio/mpeg">
                        Your browser does not support the audio tag.
                    </audio>
                </div>
                <div class="card-audio">
                  <h3>Descriptivo</h3>
                  <p>Además de presentar las ideas principales, este resumen también presenta la estructura (partes, capítulos, etc.), las fuentes, y el estilo del texto original. Es muy útil para resumir originales extensos o complejos que ayudan al lector entender la organización del original, y las partes particulares que le puedan llamar más la atención.</p>
                  <audio controls="" class="general">
                      <source src="./images/trabajos-escritos/resumen_descriptivo.mp3" type="audio/mpeg">
                      Your browser does not support the audio tag.
                  </audio>
              </div>
            </div>
            <div class="cards-audio-container">
                  <div class="card-audio">
                    <h3>Abstract</h3>
                    <p>Es una variante del resumen descriptivo que hace parte de documentos científicos como proyectos de investigación, monografías, tesis, y artículos. Su función es describir breve y muy claramente el contenido del documento original a fin de que los potenciales lectores puedan decidir si lo abordarán (al texto original) y les será útil para sus objetivos particulares. Debe sintetizar las aportaciones más destacadas de la investigación, el tema que estudia, la metodología aplicada, y los resultados globales, los cuales no deben incluir datos estadísticos concretos como cifras, porcentajes, entre otros. No suele superar las 15 líneas de extensión</p>
                    <audio controls="" class="general">
                        <source src="./images/trabajos-escritos/resumen_abstract.mp3" type="audio/mpeg">
                        Your browser does not support the audio tag.
                    </audio>
                </div>
                <div class="card-audio">
                  <h3>Síntesis</h3>
                  <p>Consiste en resumir diversos textos de un mismo tema, o de temas relacionados. No se trata de un texto dividido en capítulos que resuma cada texto por aparte, nos referimos a que es un tipo de resumen que requiere una muy buena técnica de reducción textual para expresar en un solo texto, de manera coherente e hilada, los elementos esenciales, coincidentes, y complementarios de varias fuentes originales.</p>
                  <audio controls="" class="general">
                      <source src="./images/trabajos-escritos/resumen_sintesis.mp3" type="audio/mpeg">
                      Your browser does not support the audio tag.
                  </audio>
                </div>
              </div>
      </div>
      <div class="text-center">
        <button class="btn-general btn-back" onclick="stage.activity('menu_back')">Atrás</button>
        <button class="btn-general btn-next" onclick="stage.activity('menu_next')">Siguiente</button>
      </div>
      `;
  }
  importCssFiles(){
    return [
        'generalStage.css|general',
        'cards-audio-container.css|general'
    ]
}        
}

stagePage.pageContainerSet('resumen',station2ContentClass_resumen);