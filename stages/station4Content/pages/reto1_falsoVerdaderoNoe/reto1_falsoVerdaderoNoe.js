class station4ContentClass_reto1_falsoVerdaderoNoe extends generalPage{
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
      <div id="timer_station4ContentClass_reto1_falsoVerdaderoNoe"></div>
      <div class="header-h2"><h2>Falso, verdadero - no expresado</h2></div>
      <div class="text-general multiple-selection-checkbox">
          <p>Analiza las siguientes oraciones en torno a la información bibliográfica de un artículo investigativo, y define si las afirmaciones son verdaderas (V), falsas (F), o no establecidas (NE) según lo presentado por la profesora Ana María.</p>
          <p><strong>1.</strong> Las referencias bibliográficas enumeran las fuentes citadas dentro del cuerpo de un trabajo investigativo </p>
          <ul class="ul-selection">
            <li>
              <label for="checkbox_1_station4ContentClass_reto1_falsoVerdaderoNoe">
                <strong>a.</strong>
                <input name="timer_station4ContentClass_reto1_seleccion_radio_1" class="input-checkbox" type="radio" id="checkbox_1_station4ContentClass_reto1_falsoVerdaderoNoe" value="1" data-answer="true">
                <span>Verdadero</span>
              </label>
            </li>
            <li>
              <label for="checkbox_2_station4ContentClass_reto1_falsoVerdaderoNoe">
                <strong>b.</strong>
                <input name="timer_station4ContentClass_reto1_seleccion_radio_1" class="input-checkbox" type="radio" id="checkbox_2_station4ContentClass_reto1_falsoVerdaderoNoe" value="2" >
                <span>Falso</span>
              </label>
            </li>
            <li>
              <label for="checkbox_3_station4ContentClass_reto1_falsoVerdaderoNoe">
                <strong>c.</strong>
                <input name="timer_station4ContentClass_reto1_seleccion_radio_1" class="input-checkbox" type="radio" id="checkbox_3_station4ContentClass_reto1_falsoVerdaderoNoe" value="3">
                <span>No expresado</span>
              </label>
            </li>
          </ul>
          <p><strong>2.</strong> Cada revista puede ajustar las referencias según el área de conocimiento en la que enfoca sus contenidos.</p>
          <ul class="ul-selection">
            <li>
              <label for="checkbox_4_station4ContentClass_reto1_falsoVerdaderoNoe">
                <strong>a.</strong>
                <input name="timer_station4ContentClass_reto1_seleccion_radio_2" class="input-checkbox" type="radio" id="checkbox_4_station4ContentClass_reto1_falsoVerdaderoNoe" value="1" data-answer="true">
                <span>Verdadero</span>
              </label>
            </li>
            <li>
              <label for="checkbox_5_station4ContentClass_reto1_falsoVerdaderoNoe">
                <strong>b.</strong>
                <input name="timer_station4ContentClass_reto1_seleccion_radio_2" class="input-checkbox" type="radio" id="checkbox_5_station4ContentClass_reto1_falsoVerdaderoNoe" value="2" >
                <span>Falso</span>
              </label>
            </li>
            <li>
              <label for="checkbox_6_station4ContentClass_reto1_falsoVerdaderoNoe">
                <strong>c.</strong>
                <input name="timer_station4ContentClass_reto1_seleccion_radio_2" class="input-checkbox" type="radio" id="checkbox_6_station4ContentClass_reto1_falsoVerdaderoNoe" value="3">
                <span>No expresado</span>
              </label>
            </li>
          </ul>
          <p><strong>3.</strong> No se deben aplicar normas APA dentro de los artículos investigativos.</p>
          <ul class="ul-selection">
            <li>
              <label for="checkbox_7_station4ContentClass_reto1_falsoVerdaderoNoe">
                <strong>a.</strong>
                <input name="timer_station4ContentClass_reto1_seleccion_radio_3" class="input-checkbox" type="radio" id="checkbox_7_station4ContentClass_reto1_falsoVerdaderoNoe" value="1" >
                <span>Verdadero</span>
              </label>
            </li>
            <li>
              <label for="checkbox_8_station4ContentClass_reto1_falsoVerdaderoNoe">
                <strong>b.</strong>
                <input name="timer_station4ContentClass_reto1_seleccion_radio_3" class="input-checkbox" type="radio" id="checkbox_8_station4ContentClass_reto1_falsoVerdaderoNoe" value="2" >
                <span>Falso</span>
              </label>
            </li>
            <li>
              <label for="checkbox_9_station4ContentClass_reto1_falsoVerdaderoNoe">
                <strong>c.</strong>
                <input name="timer_station4ContentClass_reto1_seleccion_radio_3" class="input-checkbox" type="radio" id="checkbox_9_station4ContentClass_reto1_falsoVerdaderoNoe" value="3" data-answer="true">
                <span>No expresado</span>
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
    stages_station4Content.pointsManager.add('station4ContentClass_reto1_falsoVerdaderoNoe',this.multipleSelectionCheckbox.pointsActivityCalculate.totalPoints,'d. Reto 2 - Selección múltiple');
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
    this.multipleSelectionCheckbox.setPoints(2);
    this.multipleSelectionCheckbox.messageCorrectAnswer='<strong>Correcto</strong><br/> Excelente trabajo, tienes bastante claro lo que concierne a las referencias bibliográficas de los artículos a ser publicados; y aunque no se hace mención de las normas APA en la presentación, es muy probable que estas deban ser implementadas en ellos.';
    this.multipleSelectionCheckbox.messageWrongAnswer=`
    <strong>Inténtalo nuevamente</strong><br/>
     Podrás aclarar qué aspectos han tenerse en cuenta en torno a los aspectos bibliográficos de un artículo, y aunque no se hace mención de las normas APA en la presentación, es muy probable que estas deban ser implementadas en ellos.
    `;
  }
  show(){
    //Varia para las páginas
    this.divContainer.classList.remove('hide');

  }
}
stagePage.pageContainerSet('reto1_falsoVerdaderoNoe',station4ContentClass_reto1_falsoVerdaderoNoe);
