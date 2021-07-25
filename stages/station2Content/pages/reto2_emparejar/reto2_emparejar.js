class station2ContentClass_reto2_emparejar extends generalPage{
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
      <div id="timer_station2ContentClass_reto2_emparejar"></div>
      <div class="header-h2"><h2>Emparejamiento</h2></div>
      <div class="text-general list-move-option">
          <p><strong>Tipo de pregunta:</strong> Emparejamiento (los pasos se mueven hacia arriba o hacia abajo)</p>
          <p><strong>Tiempo para resolver la pregunta:</strong> 90 segundos</p>
          <p><strong>Puntos a obtener:</strong> 2</p>
          <p>En el material anterior, se sugirió una ruta a seguir para la elaboración de un buen resumen. Empareja cada uno de los procesos de la ruta con su definición correspondiente. Ten cuidado, hay una opción que no aplica dentro de las respuestas.</p>
    
              <div class="drag-and-drop-element">
                <table>
                  <tbody>
                    <tr>
                      <td>
                          <div 
                            class="text-option-to-move" data-correct-answer="No aplica" >Paso 1</div>
                          <button class="btn-move-option" onclick="stagePage.activity('listMoveOptions_down',this);">bajar</button>
                      </td>
                      <td>
                          <p><strong>Esquematizar:</strong></p>
                          <p>Esto involucra la representación visual previa a la redacción del resumen. Se puede hacer a través de un mapa conceptual donde se organizan las ideas que compondrán el nuevo texto.</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div class="drag-and-drop-element">
                <table>
                  <tbody>
                    <tr>
                      <td>
                          <button class="btn-move-option" onclick="stagePage.activity('listMoveOptions_up',this);" >Subir</button>
                          <div 
                            class="text-option-to-move" data-correct-answer="Paso 2" >Paso 3</div>
                          <button class="btn-move-option" onclick="stagePage.activity('listMoveOptions_down',this);">bajar</button>
                      </td>
                      <td>
                          <p><strong>Comprender el texto original y sus datos:</strong></p>
                          <p>Esto implica la identificación del mensaje del texto, la discriminación de ideas principales y secundarias, la estructura del texto y una posible idea de la estructura que tendrá el resumen.</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div class="drag-and-drop-element">
                <table>
                  <tbody>
                    <tr>
                      <td>
                          <button class="btn-move-option" onclick="stagePage.activity('listMoveOptions_up',this);" >Subir</button>
                          <div 
                            class="text-option-to-move" data-correct-answer="Paso 1" >Paso 2</div>
                          <button class="btn-move-option" onclick="stagePage.activity('listMoveOptions_down',this);">bajar</button>
                      </td>
                      <td>
                          <p><strong>Analizar el contexto:</strong></p>
                          <p>Esto hace referencia a analizar la audiencia y el propósito del resumen para así ajustar el tipo de lengua a utilizar. También incluye analizar las características del texto.</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div class="drag-and-drop-element">
                <table>
                  <tbody>
                    <tr>
                      <td>
                          <button class="btn-move-option" onclick="stagePage.activity('listMoveOptions_up',this);" >Subir</button>
                          <div 
                            class="text-option-to-move" data-correct-answer="Paso 3" >No aplica</div>
                      </td>
                      <td>
                          <p><strong>Textualizar:</strong></p>
                          <p>Esto hace referencia al proceso real de escritura del resumen. Para ello se debe hacer uso de estrategias de reducción como: elisión, fusión y reorganización, generalización, condensación y reorganización.</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            
      </div>
      <div class="text-center">
        <button class="btn-general btn-back" onclick="stage.activity('menu_back')">Atrás</button>
        <button class="btn-general btn-next" onclick="stage.activity('menu_next')">Siguiente</button>
      </div>
      `;
  }
  hide(){
    //VAria para las páginas
    this.divContainer.classList.add('hide');
    this.listMoveOptions.timer.disable();
    stages_station2Content.pointsManager.add('station2ContentClass_reto2_emparejar',this.listMoveOptions.pointsActivityCalculate.totalPoints,'b. Reto 2 - Emparejar');
  }
  importCssFiles(){
    return [
        'generalStage.css|general',
        'clock.css|general',
        'list-move-option.css|general'
    ]
  }
  importJSFiles(){
    this.listMoveOptions = new listMoveOptionsClass();
    this.listMoveOptions.setTimer('timer_station2ContentClass_reto2_emparejar');
    this.listMoveOptions.setPoints(2);
    this.listMoveOptions.messageCorrectAnswer='<strong>Correcto</strong> ¡Muy bien! Recuerda que el proceso recomendado es analizar el contexto, comprender el texto original y sus datos y posteriormente, textualizar.';
    this.listMoveOptions.timer.minutes=1;
    this.listMoveOptions.timer.seconds=30;
    this.listMoveOptions.timer.messageTimeOut='<strong>El tiempo ha finalizado</strong> Recuerda que el proceso recomendado es analizar el contexto, comprender el texto original y sus datos y posteriormente, textualizar. La esquematización o los mapas conceptuales no son un paso dentro del proceso de resumen sino otras maneras válidas para resumir y simplificar textos originales.';
    this.listMoveOptions.timer.enable();
  }
  show(){
    //VAria para las páginas
    this.divContainer.classList.remove('hide');
    this.listMoveOptions.timer.enable();

  }
}
stagePage.pageContainerSet('reto2_emparejar',station2ContentClass_reto2_emparejar);
