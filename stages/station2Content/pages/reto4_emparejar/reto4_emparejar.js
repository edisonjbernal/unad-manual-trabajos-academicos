class station2ContentClass_reto4_emparejar extends generalPage{
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
      <div id="timer_station2ContentClass_reto4_emparejar"></div>
      <div class="header-h2"><h2>Emparejamiento</h2></div>
      <div class="text-general list-move-option">
          <p><strong>Tipo de pregunta:</strong> Emparejamiento (definiciones se mueven hacia arriba o hacia abajo)</p>
          <p><strong>Tiempo para resolver la pregunta:</strong> 70 segundos</p>
          <p><strong>Puntos a obtener:</strong> 3</p>
          <p>Como vimos anteriormente, los ensayos pueden ser de tipo literario o científico, pero también se  pueden subdividir según su intención comunicativa. Lee las definiciones sobre diferentes intenciones  comunicativas a continuación y elige de la lista desplegable el tipo de ensayo que corresponde a cada  una. </p>
    
              <div class="drag-and-drop-element drag-and-drop-element-blue">
                <table>
                  <tr>
                    <td>
                        <div 
                        class="text-option-to-move" data-correct-answer="Crítico" >Poético</div>
                        <button class="btn-move-option" onclick="stagePage.activity('listMoveOptions_down',this);">bajar</button>
                    </td>
                    <td>
                      <p>Describe o analiza un hecho, fenómeno, obra o situación,  emitiendo un juicio ponderado. Expresa la sensibilidad de su  autor, utilizando lenguaje literario.</p>
                    </td>
                  </tr>
                </table>
            </div>
            <div class="drag-and-drop-element drag-and-drop-element-blue">
              <table>
                <tr>
                  <td>
                      <button class="btn-move-option" onclick="stagePage.activity('listMoveOptions_up',this);">subir</button>
                      <div 
                      class="text-option-to-move" data-correct-answer="Expositivo" >Argumentativo</div>
                      <button class="btn-move-option" onclick="stagePage.activity('listMoveOptions_down',this);">bajar</button>
                  </td>
                  <td>
                    <p>Expone ideas sobre un tema, presentando información  alrededor del mismo y matizando esta información con la  interpretación del autor y opiniones interesantes alrededor del  tema en cuestión.</p>
                  </td>
                </tr>
              </table>
            </div>
            <div class="drag-and-drop-element drag-and-drop-element-blue">
              <table>
                <tr>
                  <td>
                      <button class="btn-move-option" onclick="stagePage.activity('listMoveOptions_up',this);">subir</button>
                      <div 
                      class="text-option-to-move" data-correct-answer="Argumentativo" >Crítico</div>
                      <button class="btn-move-option" onclick="stagePage.activity('listMoveOptions_down',this);">bajar</button>
                  </td>
                  <td>
                    <p>Tiene como propósito defender una tesis con argumentos que  pueden basarse en citas o referencias, datos concretos de  experiencias investigativas, alusiones históricas, políticas, u  otras, fundamentos epistemológicos.</p>
                  </td>
                </tr>
              </table>
            </div>
            <div class="drag-and-drop-element drag-and-drop-element-blue">
              <table>
                <tr>
                  <td>
                    <button class="btn-move-option" onclick="stagePage.activity('listMoveOptions_up',this);">subir</button>
                      <div 
                      class="text-option-to-move" data-correct-answer="Poético" >Expositivo</div>
                  </td>
                  <td>
                    <p>Expresa la sensibilidad de su autor, utilizando lenguaje literario.&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </p>
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
    stages_station2Content.pointsManager.add('station2ContentClass_reto4_emparejar',this.listMoveOptions.pointsActivityCalculate.totalPoints);
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
    this.listMoveOptions.setTimer('timer_station2ContentClass_reto4_emparejar');
    this.listMoveOptions.setPoints(3);
    this.listMoveOptions.timer.minutes=1;
    this.listMoveOptions.timer.seconds=10;
    this.listMoveOptions.timer.messageTimeOut='<strong>El tiempo ha finalizado</strong>';
    this.listMoveOptions.timer.enable();
  }
  show(){
    //VAria para las páginas
    this.divContainer.classList.remove('hide');
    this.listMoveOptions.timer.enable();

  }
}
stagePage.pageContainerSet('reto4_emparejar',station2ContentClass_reto4_emparejar);
