class station2ContentClass_partesDeUnEnsayo extends generalPage{
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
      <div class="header-h2"><h2>Características de un buen ensayo</h2></div>
      <div class="cards-audio-module cards-audio-module-version-2">
        <div class="start">
            <h3>Características de un buen ensayo</h3>
        </div>
            <div class="cards-audio-container">
                <div class="card-audio">
                    <h3>Conciso y claro</h3>
                    <p>Clasificar y trabajar las dominaciones jerárquicas del texto para que sea claro y preciso. Por otra parte, si existen muchas ideas el texto se vuelve confuso; el ensayo debe ser claro para que el pensamiento de quien escribe, penetre sin esfuerzo en la mente del lector.
                        </p>
                    <audio controls="" class="general">
                        <source src="./images/trabajos-escritos/caracteristicasBuenEnsayo_informativo.mp3" type="audio/mpeg">
                        Your browser does not support the audio tag.
                    </audio>
                </div>
                <div class="card-audio">
                  <h3>Preciso</h3>
                  <p>Es necesario utilizar términos precisos y no ambiguos. Muchos escritores creen que utilizando palabras rebuscadas o sinónimos solucionan este problema. Recordemos que los sinónimos no tienen igual significado, pues dependen del contexto y la cultura.</p>
                  <audio controls="" class="general">
                      <source src="./images/trabajos-escritos/caracteristicasBuenEnsayo_descriptivo.mp3" type="audio/mpeg">
                      Your browser does not support the audio tag.
                  </audio>
              </div>
            </div>
            <div class="cards-audio-container">
                  <div class="card-audio">
                    <h3>Abstract</h3>
                    <p>Es una variante del caracteristicasBuenEnsayo descriptivo que hace parte de documentos científicos como proyectos de investigación, monografías, tesis, y artículos. Su función es describir breve y muy claramente el contenido del documento original a fin de que los potenciales lectores puedan decidir si lo abordarán (al texto original) y les será útil para sus objetivos particulares. Debe sintetizar las aportaciones más destacadas de la investigación, el tema que estudia, la metodología aplicada, y los resultados globales, los cuales no deben incluir datos estadísticos concretos como cifras, porcentajes, entre otros. No suele superar las 15 líneas de extensión</p>
                    <audio controls="" class="general">
                        <source src="./images/trabajos-escritos/caracteristicasBuenEnsayo_abstract.mp3" type="audio/mpeg">
                        Your browser does not support the audio tag.
                    </audio>
                </div>
                <div class="card-audio">
                  <h3>Síntesis</h3>
                  <p>Consiste en resumir diversos textos de un mismo tema, o de temas relacionados. No se trata de un texto dividido en capítulos que resuma cada texto por aparte, nos referimos a que es un tipo de caracteristicasBuenEnsayo que requiere una muy buena técnica de reducción textual para expresar en un solo texto, de manera coherente e hilada, los elementos esenciales, coincidentes, y complementarios de varias fuentes originales.</p>
                  <audio controls="" class="general">
                      <source src="./images/trabajos-escritos/caracteristicasBuenEnsayo_sintesis.mp3" type="audio/mpeg">
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
        'horizontal-items-audio.css|general'
    ]
}        
}

stagePage.pageContainerSet('partesDeUnEnsayo',station2ContentClass_partesDeUnEnsayo);