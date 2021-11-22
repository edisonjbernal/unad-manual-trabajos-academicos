class station4ContentClass_reto1_seleccionMultipleUnica extends generalPage{
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
      <div id="timer_station4ContentClass_reto1_seleccionMultipleUnica"></div>
      <div class="header-h2"><h2>Selección múltiple, única respuesta</h2></div>
      <div class="text-general multiple-selection-checkbox">
          <p><strong>¿En cuál de las siguientes fuentes académicos NO es probable publicar tu artículo investigativo?</strong></p>
          <ul class="ul-selection">
            <li>
              <label for="checkbox_1_station4ContentClass_reto1_seleccionMultipleUnica">
                <strong>a.</strong>
                <input name="timer_station4ContentClass_reto1_seleccion_radio" class="input-checkbox" type="radio" id="checkbox_1_station4ContentClass_reto1_seleccionMultipleUnica" value="1">
                <span>Revista indexada especializada en el área de conocimiento.</span>
              </label>
            </li>
            <li>
              <label for="checkbox_2_station4ContentClass_reto1_seleccionMultipleUnica">
                <strong>b.</strong>
                <input name="timer_station4ContentClass_reto1_seleccion_radio" class="input-checkbox" type="radio" id="checkbox_2_station4ContentClass_reto1_seleccionMultipleUnica" value="2" >
                <span>Capítulo de libro.</span>
              </label>
            </li>
            <li>
              <label for="checkbox_3_station4ContentClass_reto1_seleccionMultipleUnica">
                <strong>c.</strong>
                <input name="timer_station4ContentClass_reto1_seleccion_radio" class="input-checkbox" type="radio" id="checkbox_3_station4ContentClass_reto1_seleccionMultipleUnica" value="3">
                <span>Documento de memorias de evento académico.</span>
              </label>
            </li>
            <li>
              <label for="checkbox_4_station4ContentClass_reto1_seleccionMultipleUnica">
                <strong>d.</strong>
                <input name="timer_station4ContentClass_reto1_seleccion_radio" class="input-checkbox" type="radio" id="checkbox_4_station4ContentClass_reto1_seleccionMultipleUnica" value="4" data-answer="true" >
                <span>Revista de variedades y cultura general.</span>
              </label>
            </li>
            <li>
              <label for="checkbox_5_station4ContentClass_reto1_seleccionMultipleUnica">
                <strong>e.</strong>
                <input name="timer_station4ContentClass_reto1_seleccion_radio" class="input-checkbox" type="radio" id="checkbox_5_station4ContentClass_reto1_seleccionMultipleUnica" value="5" >
                <span>Revista no indexada especializada en el área de conocimiento.</span>
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
    stages_station4Content.pointsManager.add('station4ContentClass_reto1_seleccionMultipleUnica',this.multipleSelectionCheckbox.pointsActivityCalculate.totalPoints,'d. Reto 2 - Selección múltiple');
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
    this.multipleSelectionCheckbox.messageCorrectAnswer='<strong>Correcto</strong><br/> Muy bien, una revista de variedades y cultura general no suele enfocarse en temas académicos desarrollados en proyectos investigativos; es probable que en ellas se reporten estudios y experimentos científicos, pero más a modo informativo-noticioso que como una fuente de pesquisa académica.';
    this.multipleSelectionCheckbox.messageWrongAnswer=`
    <strong>Recuerda lo siguiente:</strong><br/>
    Los artículos académicos provenientes de ejercicios investigativos son muy bien recibidos en varios tipos de fuentes académicas como revistas especializadas indexadas y no indexadas, capítulos de libros, e documentos de memorias de seminarios, congresos, y simposios.
    `;
  }
  show(){
    //Varia para las páginas
    this.divContainer.classList.remove('hide');

  }
}
stagePage.pageContainerSet('reto1_seleccionMultipleUnica',station4ContentClass_reto1_seleccionMultipleUnica);
