class station2ContentClass_reto4_seleccionMultiple extends generalPage{
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
      <div id="timer_station2ContentClass_reto4_seleccionMultiple"></div>
      <div class="header-h2"><h2>Selección múltiple</h2></div>
      <div class="text-general multiple-selection-checkbox">
          <p><strong>Tipo de pregunta:</strong> Selección múltiple (más de una respuesta correcta) </p>
          <p><strong>Tiempo para resolver la pregunta:</strong> 60 segundos</p>
          <p><strong>Puntos a obtener:</strong> 4</p>
          <p>Todo ensayo debe cumplir con unas características finales con las cuales puedes auto-evaluarlo previo  a su entrega. No todas las características aplican para todos los tipos de ensayo, así que cuando estés  haciendo la lectura final de tu texto, deberás tener claridad sobre cuáles características aplican al tipo  de ensayo que elaboraste. ¿Cuáles son esas características? </p>
          <p><strong>Escógelas de la lista a continuación: </strong></p>
          <ul class="ul-selection">
            <li>
              <label for="checkbox_1_station2ContentClass_reto4_seleccionMultiple">
                <strong>a.</strong>
                <input class="input-checkbox" type="checkbox" id="checkbox_1_station2ContentClass_reto4_seleccionMultiple" value="1" data-answer="true">
                <span>Texto conciso y claro</span>
              </label>
            </li>
            <li>
              <label for="checkbox_2_station2ContentClass_reto4_seleccionMultiple">
                <strong>b.</strong>
                <input class="input-checkbox" type="checkbox" id="checkbox_2_station2ContentClass_reto4_seleccionMultiple" value="2" data-answer="true">
                <span>Ideas sustentadas</span>
              </label>
            </li>
            <li>
              <label for="checkbox_3_station2ContentClass_reto4_seleccionMultiple">
                <strong>c.</strong>
                <input class="input-checkbox" type="checkbox" id="checkbox_3_station2ContentClass_reto4_seleccionMultiple" value="3" >
                <span>Temas o conceptos no jerarquizados</span>
              </label>
            </li>
            <li>
              <label for="checkbox_4_station2ContentClass_reto4_seleccionMultiple">
                <strong>d.</strong>
                <input class="input-checkbox" type="checkbox" id="checkbox_4_station2ContentClass_reto4_seleccionMultiple" value="4" data-answer="true">
                <span>Uso de lenguaje preciso</span>
              </label>
            </li>
            <li>
              <label for="checkbox_5_station2ContentClass_reto4_seleccionMultiple">
                <strong>e.</strong>
                <input class="input-checkbox" type="checkbox" id="checkbox_5_station2ContentClass_reto4_seleccionMultiple" value="5" >
                <span>Conceptualización ambigua</span>
              </label>
            </li>
            <li>
              <label for="checkbox_6_station2ContentClass_reto4_seleccionMultiple">
                <strong>f.</strong>
                <input class="input-checkbox" type="checkbox" id="checkbox_6_station2ContentClass_reto4_seleccionMultiple" value="6" >
                <span>Uso de lenguaje contradictorio</span>
              </label>
            </li>
            <li>
              <label for="checkbox_7_station2ContentClass_reto4_seleccionMultiple">
                <strong>g.</strong>
                <input class="input-checkbox" type="checkbox" id="checkbox_7_station2ContentClass_reto4_seleccionMultiple" value="7" data-answer="true">
                <span>Organización coherente del texto</span>
              </label>
            </li>
            <li>
              <label for="checkbox_8_station2ContentClass_reto4_seleccionMultiple">
                <strong>h.</strong>
                <input class="input-checkbox" type="checkbox" id="checkbox_8_station2ContentClass_reto4_seleccionMultiple" value="8" >
                <span>Uso de Ideas no articuladas</span>
              </label>
            </li>
            <li>
              <label for="checkbox_9_station2ContentClass_reto4_seleccionMultiple">
                <strong>i.</strong>
                <input class="input-checkbox" type="checkbox" id="checkbox_9_station2ContentClass_reto4_seleccionMultiple" value="9" data-answer="true">
                <span>Desarrollo consistente de las ideas</span>
              </label>
            </li>
            <li>
              <label for="checkbox_10_station2ContentClass_reto4_seleccionMultiple">
                <strong>j.</strong>
                <input class="input-checkbox" type="checkbox" id="checkbox_10_station2ContentClass_reto4_seleccionMultiple" value="10" data-answer="true">
                <span>Finalidad o propósito definidos</span>
              </label>
            </li>
          </ul>
    
            
            <div class="text-center"><button class="btn-general btn-submit" onclick="stagePage.activity('multiple-selection-checkbox',this)">Validar respuestas</button></div>
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
    this.multipleSelectionCheckbox.timer.disable();
    stages_station2Content.pointsManager.add('station2ContentClass_reto4_seleccionMultiple',this.multipleSelectionCheckbox.pointsActivityCalculate.totalPoints);
  }
  importCssFiles(){
    return [
        'generalStage.css|general',
        'clock.css|general',
        'multiple-selection-checkbox.css|general'
    ]
  }
  importJSFiles(){
    this.multipleSelectionCheckbox = new multipleSelectionCheckboxClass();
    this.multipleSelectionCheckbox.setTimer('timer_station2ContentClass_reto4_seleccionMultiple');
    this.multipleSelectionCheckbox.setPoints(4);
    this.multipleSelectionCheckbox.messageCorrectAnswer='<strong>Correcto</strong> ¡Muy bien!';
    this.multipleSelectionCheckbox.timer.minutes=1;
    this.multipleSelectionCheckbox.timer.seconds=0;
    this.multipleSelectionCheckbox.timer.messageTimeOut=`<strong>El tiempo ha finalizado</strong>
    <br/>
    Las respuestas correctas eran:
    <ul>
      <li>Resumen descriptivo: a, c, e, h</li>
      <li>Abstract: b, g</li>    
      <li>Resumen informativo: d</li>     
      <li>Síntesis: f </li>
    </ul>`;
    this.multipleSelectionCheckbox.timer.enable(); 
  }
  show(){
    //Varia para las páginas
    this.divContainer.classList.remove('hide');
    this.multipleSelectionCheckbox.timer.enable();

  }
}
stagePage.pageContainerSet('reto4_seleccionMultiple',station2ContentClass_reto4_seleccionMultiple);
