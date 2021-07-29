class station3ContentClass_reto4_emparejar extends generalPage{
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
      <div id="timer_station3ContentClass_reto4_emparejar"></div>
      <div class="header-h2"><h2>Emparejamiento</h2></div>
      <div class="text-general list-move-option">
          <p><strong>Tipo de pregunta:</strong> Emparejamiento (definiciones se mueven hacia arriba o hacia abajo)</p>
          <p>Hemos visto que independientemente del tipo de investigación de escojas para tu trabajo de grado, debes presentar un anteproyecto que es un documento en el que planteas el tema que vas a indagar, los objetivos que quieres lograr, la manera como planeas llevar a cabo la investigación y la duración que ésta puede tener. A continuación, encontrarás una lista de con elementos que debes incluir en la redacción del anteproyecto.</p>
          <p><strong>Mueve hacia arriba o hacia abajo los elementos hasta que las descripciones de la segunda columna correspondan al elemento que se define:</strong></p>
    
              <div class="drag-and-drop-element drag-and-drop-element-blue">
                <table>
                  <tr data-correct-answer="Selección del tema.">
                    <td>
                    <div class="text-option-to-move"  ></div>
                        <button class="btn-move-option" onclick="stagePage.activity('listMoveOptions_down',this);">bajar</button>
                    </td>
                    <td>
                      <p>Recolección de la información.</p>
                    </td>
                  </tr>
                  <tr data-correct-answer="Recolección de la información.">
                    <td>
                      <button class="btn-move-option" onclick="stagePage.activity('listMoveOptions_up',this);">subir</button>
                      <div class="text-option-to-move"  ></div>
                        <button class="btn-move-option" onclick="stagePage.activity('listMoveOptions_down',this);">bajar</button>
                    </td>
                    <td>
                      <p>Redacción del Resumen Analítico.</p>
                    </td>
                  </tr>
                  <tr data-correct-answer="Selección crítica de la información recolectada.">
                    <td>
                      <button class="btn-move-option" onclick="stagePage.activity('listMoveOptions_up',this);">subir</button>
                      <div class="text-option-to-move"  ></div>
                        <button class="btn-move-option" onclick="stagePage.activity('listMoveOptions_down',this);">bajar</button>
                    </td>
                    <td>
                      <p>Ajustes a partir de las observaciones docentes/jurados del trabajo.</p>
                    </td>
                  </tr>
                  <tr data-correct-answer="Organización de fichas de registro.">
                    <td>
                      <button class="btn-move-option" onclick="stagePage.activity('listMoveOptions_up',this);">subir</button>
                      <div class="text-option-to-move"  ></div>
                        <button class="btn-move-option" onclick="stagePage.activity('listMoveOptions_down',this);">bajar</button>
                    </td>
                    <td>
                      <p>Selección del tema.</p>
                    </td>
                  </tr>
                  <tr data-correct-answer="Elaboración de fichas de trabajo y Análisis de datos.">
                    <td>
                      <button class="btn-move-option" onclick="stagePage.activity('listMoveOptions_up',this);">subir</button>
                      <div class="text-option-to-move"  ></div>
                        <button class="btn-move-option" onclick="stagePage.activity('listMoveOptions_down',this);">bajar</button>
                    </td>
                    <td>
                      <p>Elaboración de fichas de trabajo y Análisis de datos.</p>
                    </td>
                  </tr>
                  <tr data-correct-answer="Redacción del Resumen Analítico.">
                    <td>
                      <button class="btn-move-option" onclick="stagePage.activity('listMoveOptions_up',this);">subir</button>
                      <div class="text-option-to-move"  ></div>
                        <button class="btn-move-option" onclick="stagePage.activity('listMoveOptions_down',this);">bajar</button>
                    </td>
                    <td>
                      <p>Selección crítica de la información recolectada.</p>
                    </td>
                  </tr>
                  <tr data-correct-answer="Ajustes a partir de las observaciones docentes/jurados del trabajo.">
                    <td>
                      <button class="btn-move-option" onclick="stagePage.activity('listMoveOptions_up',this);">subir</button>
                      <div class="text-option-to-move"  ></div>
                        
                    </td>
                    <td>
                      <p>Organización de fichas de registro.</p>
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
    stages_station3Content.pointsManager.add('station3ContentClass_reto4_emparejar',this.listMoveOptions.pointsActivityCalculate.totalPoints);
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
    this.listMoveOptions.onlyOrderSentences=true;
    this.listMoveOptions.setPoints(3);
  }
  show(){
    //VAria para las páginas
    this.divContainer.classList.remove('hide');

  }
}
stagePage.pageContainerSet('reto4_emparejar',station3ContentClass_reto4_emparejar);
