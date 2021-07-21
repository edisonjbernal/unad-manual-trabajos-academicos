class terminalContentClass_recomendacionesParaResumir extends generalPage{
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
      <h2>Recomendaciones para resumir</h2>
      <div class="text-general">
      <p>Para resumir un texto es recomendable el siguiente proceso:</p>
        <audio controls="" class="general">
          <source src="./images/trabajos-escritos/recomendacionesParaResumir_inicio.mp3" type="audio/mpeg">
          Your browser does not support the audio tag.
      </audio>
        
        <div class="main-container-acordeon">  
            <div class="container-acordeon">
                <button class="btn-acordeon" onclick="stage.activity('acordeonList_show',this);">Análisis del contexto</button>
                <div class="text-acordeon">
                  <audio controls="" class="general">
                    <source src="./images/trabajos-escritos/recomendacionesParaResumir_analisisDelContexto.mp3" type="audio/mpeg">
                    Your browser does not support the audio tag.
                  </audio>
                    <p>Análisis de las características del texto original, sus destinatarios, y sus objetivos, para así poder definir los destinatarios del nuevo texto (mi resumen), el propósito que tengo con el, y qué tipo de reducción es la más adecuada. Es buena idea objetivos:</p>
                    <ul>
                      <li>¿Incluiré solo ideas principales?</li>
                      <li>¿Incluiré todas las ideas principales o solo algunas de ellas?</li>
                      <li>¿Es o no buena idea incluir (algunas) ideas secundarias y/o ejemplos?</li>
                    </ul>
                </div>
            </div>
            <div class="container-acordeon">
                <button class="btn-acordeon" onclick="stage.activity('acordeonList_show',this);">Comprensión del original y comprensión de los datos</button>
                <div class="text-acordeon">
                      <audio controls="" class="general">
                        <source src="./images/trabajos-escritos/recomendacionesParaResumir_comprension.mp3" type="audio/mpeg">
                        Your browser does not support the audio tag.
                      </audio>
                      <p>Análisis profundo del texto original para discriminar datos relevantes e irrelevantes. Es también esencial discriminar ideas principales de ideas secundarias y ejemplos. Para
                        lograrlo es buena idea plantearte las siguientes preguntas.</p>
                        <ul>
                          <li>¿Cuál es el mensaje o significado esencial del texto original?</li>
                          <li>¿Cuáles son las ideas o puntos fundamentales del texto original que valdrán la pena incluir en el nuevo texto reducido y cuáles de estos se pueden omitir?</li>
                          <li>¿Qué estructura tiene el texto original?</li>
                          <li>¿Cómo queda estructura del nuevo texto reducido?</li>
                        </ul>
                </div>
            </div>
            <div class="container-acordeon">
                <button class="btn-acordeon" onclick="stage.activity('acordeonList_show',this);">Textualización</button>
                <div class="text-acordeon">
                  <audio controls="" class="general">
                    <source src="./images/trabajos-escritos/recomendacionesParaResumir_textualizacion.mp3" type="audio/mpeg">
                    Your browser does not support the audio tag.
                  </audio>
                  <p>Redacción del resumen acorde a tus objetivos trazados en la fase de análisis tratando de aplicar las siguientes estrategias de reducción.</p>
                  <p><strong>Elisión</strong></p>
                  <p>Suprimir contenidos o expresiones que presenten información redundante o innecesaria para tu objetivo.</p>
                  <p><strong>Generalización</strong></p>
                  <p>Abstraer la información común o repetitiva para formar un concepto general.
                  </p>
                  <p><strong>Fusión y reorganización</strong></p>
                  <p>Seleccionar contenidos importantes e informaciones complementarias para elaborar un
                    concepto que los contenga todos.</p>
                    <p><strong>Condensación y reorganización</strong></p>
                    <p>Sintetizar varios contenidos esenciales en una sola idea.</p>
                </div>
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
        'ecards.css|general'
    ]
}
}
stagePage.pageContainerSet('recomendacionesParaResumir',terminalContentClass_recomendacionesParaResumir);