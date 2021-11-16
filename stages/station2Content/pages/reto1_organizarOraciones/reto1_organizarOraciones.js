class station2ContentClass_reto1_organizarOraciones extends generalPage{
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
      <div id="timer_station2ContentClass_reto1_organizarOraciones"></div>
      <div class="header-h2"><h2>Emparejamiento</h2></div>
      <div class="text-general list-move-option">
          <p><strong>Tipo de pregunta: Emparejamiento (definiciones se mueven hacia arriba o hacia abajo)</strong></p>
          <p>Ahora vamos a ver si reconoces el tipo de información que compone cada elemento preliminar.</p>
          <p><strong>Lee las descripciones a continuación y pon frente a ella el elemento preliminar que le corresponde:</strong></p>
    
              <div class="drag-and-drop-element">
                <table>
                  <tr>
                    <td>
                        <div 
                        class="text-option-to-move" data-correct-answer="Los trabajos académicos buscan formar estudiantes integrales que estén en capacidad de exponer sus" >ideas, profundizar en y con las ideas de otras personas, y fundamentar sus pensamientos con ética,</div>
                        <button class="btn-move-option" onclick="stagePage.activity('listMoveOptions_down',this);">bajar</button>
                    </td>
                  </tr>
                </table>
            </div>
            <div class="drag-and-drop-element">
                <table>
                  <tr>
                    <td>
                        <button class="btn-move-option" onclick="stagePage.activity('listMoveOptions_up',this);" >Subir</button>
                        <div 
                        class="text-option-to-move"
                        data-correct-answer="ideas, profundizar en y con las ideas de otras personas, y fundamentar sus pensamientos con ética,"
                        >Los trabajos académicos buscan formar estudiantes integrales que estén en capacidad de exponer sus</div>
                        <button class="btn-move-option" onclick="stagePage.activity('listMoveOptions_down',this);">bajar</button>
                    </td>
                  </tr>
                </table>
            </div>
            <div class="drag-and-drop-element">
                <table>
                  <tr>
                    <td>
                        <button class="btn-move-option" onclick="stagePage.activity('listMoveOptions_up',this);" >Subir</button>
                        <div 
                        class="text-option-to-move"
                        data-correct-answer="crítica, y argumentación. A través de la elaboración de cada trabajo escrito, los estudiantes tendrán la"
                        >oportunidad de desarrollar diversas habilidades que aportarán en su formación integral. Dichas</div>
                        <button class="btn-move-option" onclick="stagePage.activity('listMoveOptions_down',this);">bajar</button>
                    </td>    
                  </tr>
                </table>
            </div>
            <div class="drag-and-drop-element">
              <table>
                <tr>
                  <td>
                      <button class="btn-move-option" onclick="stagePage.activity('listMoveOptions_up',this);" >Subir</button>
                      <div 
                      class="text-option-to-move"
                      data-correct-answer="oportunidad de desarrollar diversas habilidades que aportarán en su formación integral. Dichas"
                      >crítica, y argumentación. A través de la elaboración de cada trabajo escrito, los estudiantes tendrán la</div>
                      <button class="btn-move-option" onclick="stagePage.activity('listMoveOptions_down',this);">bajar</button>
                  </td>    
                </tr>
              </table>
          </div>
          <div class="drag-and-drop-element">
            <table>
              <tr>
                <td>
                    <button class="btn-move-option" onclick="stagePage.activity('listMoveOptions_up',this);" >Subir</button>
                    <div 
                    class="text-option-to-move"
                    data-correct-answer="habilidades son: análisis reflexivo, pensamiento crítico, trabajo colaborativo, apertura a nuevos puntos"
                    >de vista, innovación y creatividad.</div>
                    <button class="btn-move-option" onclick="stagePage.activity('listMoveOptions_down',this);">bajar</button>
                </td>    
              </tr>
            </table>
        </div>
            <div class="drag-and-drop-element">
                <table>
                  <tr>
                    <td>
                        <button class="btn-move-option" onclick="stagePage.activity('listMoveOptions_up',this);" >Subir</button>
                        <div 
                            class="text-option-to-move"
                            data-correct-answer="de vista, innovación y creatividad."
                        >habilidades son: análisis reflexivo, pensamiento crítico, trabajo colaborativo, apertura a nuevos puntos</div>
                    </td>
                                
                  </tr>
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
    stages_station2Content.pointsManager.add('station2ContentClass_reto1_organizarOraciones',this.listMoveOptions.pointsActivityCalculate.totalPoints,'a. Reto 1 - Organizar oraciones');
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
    this.listMoveOptions.setTimer('timer_station2ContentClass_reto1_organizarOraciones');
    this.listMoveOptions.setPoints(4);
    this.listMoveOptions.timer.minutes=2;
    this.listMoveOptions.timer.seconds=30;
    this.listMoveOptions.timer.messageTimeOut='<strong>El tiempo ha finalizado</strong>';
    this.listMoveOptions.timer.enable();
  }
  show(){
    //VAria para las páginas
    this.divContainer.classList.remove('hide');
    this.listMoveOptions.timer.enable();

  }
}
stagePage.pageContainerSet('reto1_organizarOraciones',station2ContentClass_reto1_organizarOraciones);
