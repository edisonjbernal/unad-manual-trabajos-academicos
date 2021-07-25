class station2ContentClass_reto2_listaDesplegable extends generalPage{
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
      <div id="timer_station2ContentClass_reto2_listaDesplegable"></div>
      <div class="header-h2"><h2>Lista desplegable</h2></div>
      <div class="text-general list-select-option">
          <p><strong>Tipo de pregunta:</strong> Selecciona la respuesta correcta a partir de una lista desplegable.</p>
          <p><strong>Tiempo para resolver la pregunta:</strong> 70 segundos</p>
          <p><strong>Puntos a obtener:</strong> 2</p>
          <p>Lee las definiciones a continuación y elige de la lista desplegable la estrategia de reducción que corresponde a cada definición.</p>
    
              <div class="drag-and-drop-element">
                <table>
                  <tbody>
                    <tr>
                      <td>
                          <select class="text-option-to-move" onchange="stagePage.activity('listSelectOptions',this);" data-answer="Condensación y reorganización">
                            <option value="">--- Seleccionar opción ---</option>
                            <option value="Elisión">Elisión</option>
                            <option value="Generalización">Generalización</option>
                            <option value="Fusión y Reorganización">Fusión y Reorganización</option>
                            <option value="Condensación y reorganización">Condensación y reorganización</option>
                          </select>
                      </td>
                      <td>
                          <p>Sintetizar varios contenidos en una sola idea.</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                          <select class="text-option-to-move" onchange="stagePage.activity('listSelectOptions',this);" data-answer="Fusión y Reorganización">
                            <option value="">--- Seleccionar opción ---</option>
                            <option value="Elisión">Elisión</option>
                            <option value="Generalización">Generalización</option>
                            <option value="Fusión y Reorganización">Fusión y Reorganización</option>
                            <option value="Condensación y reorganización">Condensación y reorganización</option>
                          </select>
                      </td>
                      <td>
                          <p>Elaborar un concepto que contenga tanto contenido importante como información complementaria.</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                          <select class="text-option-to-move" onchange="stagePage.activity('listSelectOptions',this);" data-answer="Elisión">
                            <option value="">--- Seleccionar opción ---</option>
                            <option value="Elisión">Elisión</option>
                            <option value="Generalización">Generalización</option>
                            <option value="Fusión y Reorganización">Fusión y Reorganización</option>
                            <option value="Condensación y reorganización">Condensación y reorganización</option>
                          </select>
                      </td>
                      <td>
                          <p>Suprimir información redundante o innecesaria.</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                          <select class="text-option-to-move" onchange="stagePage.activity('listSelectOptions',this);" data-answer="Generalización">
                            <option value="">--- Seleccionar opción ---</option>
                            <option value="Elisión">Elisión</option>
                            <option value="Generalización">Generalización</option>
                            <option value="Fusión y Reorganización">Fusión y Reorganización</option>
                            <option value="Condensación y reorganización">Condensación y reorganización</option>
                          </select>
                      </td>
                      <td>
                          <p>Elaborar un concepto general a través de la abstracción de información común o repetitiva.</p>
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
    this.listSelectOptions.timer.disable();
    stages_station2Content.pointsManager.add('station2ContentClass_reto2_listaDesplegable',this.listSelectOptions.pointsActivityCalculate.totalPoints,'c. Reto 2 - Lista desplegable');
  }
  importCssFiles(){
    return [
        'generalStage.css|general',
        'clock.css|general',
        'list-select-option.css|general'
    ]
  }
  importJSFiles(){
    this.listSelectOptions = new listSelectOptionsClass();
    this.listSelectOptions.setTimer('timer_station2ContentClass_reto2_listaDesplegable');
    this.listSelectOptions.setPoints(2);
    this.listSelectOptions.messageCorrectAnswer='<strong>Correcto</strong> ¡Muy bien!';
    this.listSelectOptions.timer.minutes=1;
    this.listSelectOptions.timer.seconds=10;
    this.listSelectOptions.timer.messageTimeOut='<strong>El tiempo ha finalizado</strong>';
    this.listSelectOptions.timer.enable();
  }
  show(){
    //Varia para las páginas
    this.divContainer.classList.remove('hide');
    this.listSelectOptions.timer.enable();

  }
}
stagePage.pageContainerSet('reto2_listaDesplegable',station2ContentClass_reto2_listaDesplegable);
