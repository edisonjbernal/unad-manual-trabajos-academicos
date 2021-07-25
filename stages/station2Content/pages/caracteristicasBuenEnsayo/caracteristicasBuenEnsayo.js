class station2ContentClass_caracteristicasBuenEnsayo extends generalPage{
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
                        <source src="./images/trabajos-escritos/caracteristicasBuenEnsayo_concisoYClaro.mp3" type="audio/mpeg">
                        Your browser does not support the audio tag.
                    </audio>
                </div>
                <div class="card-audio">
                  <h3>Preciso</h3>
                  <p>Es necesario utilizar términos precisos y no ambiguos. Muchos escritores creen que utilizando palabras rebuscadas o sinónimos solucionan este problema. Recordemos que los sinónimos no tienen igual significado, pues dependen del contexto y la cultura.</p>
                  <audio controls="" class="general">
                      <source src="./images/trabajos-escritos/caracteristicasBuenEnsayo_preciso.mp3" type="audio/mpeg">
                      Your browser does not support the audio tag.
                  </audio>
              </div>
            </div>
            <div class="cards-audio-container">
                  <div class="card-audio">
                    <h3>Coherente</h3>
                    <p>La dirección y la unidad del ensayo, se encuentran determinados en gran medida por la articulación lógica que le demos a las oraciones y a los párrafos. El ensayo debe tener como mínimo dos planos básicos; el plano del contenido y el de su expresión lingüística.</p>
                    <audio controls="" class="general">
                        <source src="./images/trabajos-escritos/caracteristicasBuenEnsayo_coherente.mp3" type="audio/mpeg">
                        Your browser does not support the audio tag.
                    </audio>
                </div>
                <div class="card-audio">
                  <h3>Consistente</h3>
                  <p>Un ensayo adquiere consistencia en su cuerpo cuando al presentar las argumentaciones, no admite contradicciones, originando de esta forma que el texto sea natural, espontáneo, claro y preciso.</p>
                  <audio controls="" class="general">
                      <source src="./images/trabajos-escritos/caracteristicasBuenEnsayo_consistente.mp3" type="audio/mpeg">
                      Your browser does not support the audio tag.
                  </audio>
                </div>
              </div>
              <div class="cards-audio-container">
                <div class="card-audio">
                  <h3>Sustentado</h3>
                  <p>Se utiliza mucho, pues los ensayos de corte argumentativo, en los cuales la hipótesis y las
                    tesis principales, deben ser desarrolladas con profundidad argumentativa por medio de fuentes y referentes teóricos y estadísticos pertinentes.
                    </p>
                  <audio controls="" class="general">
                      <source src="./images/trabajos-escritos/caracteristicasBuenEnsayo_sustentado.mp3" type="audio/mpeg">
                      Your browser does not support the audio tag.
                  </audio>
              </div>
              <div class="card-audio">
                <h3>Finalidad</h3>
                <p>El ensayo debe actuar como motor de reflexión, generador de duda y de sospecha, productor de ideas nuevas.</p>
                <audio controls="" class="general">
                    <source src="./images/trabajos-escritos/caracteristicasBuenEnsayo_finalidad.mp3" type="audio/mpeg">
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
        'cards-audio-container.css|general',
        'cards-audio-module-version-2.css|general'
    ]
}        
}

stagePage.pageContainerSet('caracteristicasBuenEnsayo',station2ContentClass_caracteristicasBuenEnsayo);