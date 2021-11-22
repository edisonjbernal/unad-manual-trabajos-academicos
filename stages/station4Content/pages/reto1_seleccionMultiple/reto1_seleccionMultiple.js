class station4ContentClass_reto1_seleccionMultiple extends generalPage{
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
      <div id="timer_station4ContentClass_reto1_seleccionMultiple"></div>
      <div class="header-h2"><h2>Selección múltiple</h2></div>
      <div class="text-general multiple-selection-checkbox">
        <p>Selecciona los elementos que suelen incluirse en torno al autor (o a los autores) de un artículo académico investigativo.</p>
          <p><strong>Marca todas las opciones posibles.</strong></p>
          <ul class="ul-selection">
            <li>
              <label for="checkbox_1_station4ContentClass_reto1_seleccionMultiple">
                <strong>a.</strong>
                <input  class="input-checkbox" type="checkbox" id="checkbox_1_station4ContentClass_reto1_seleccionMultiple" value="1">
                <span>Nombres y apellidos completos de quién(es) escribe(n) el artículo.</span>
              </label>
            </li>
            <li>
              <label for="checkbox_2_station4ContentClass_reto1_seleccionMultiple">
                <strong>b.</strong>
                <input  class="input-checkbox" type="checkbox" id="checkbox_2_station4ContentClass_reto1_seleccionMultiple" value="2" data-answer="true">
                <span>Un nombre y un apellido de quién(es) escribe(n) el artículo.</span>
              </label>
            </li>
            <li>
              <label for="checkbox_3_station4ContentClass_reto1_seleccionMultiple">
                <strong>c.</strong>
                <input  class="input-checkbox" type="checkbox" id="checkbox_3_station4ContentClass_reto1_seleccionMultiple" value="3" data-answer="true">
                <span>Institución(es) a la(s) que pertenece(n) quién(es) escribe(n) el artículo.</span>
              </label>
            </li>
            <li>
              <label for="checkbox_4_station4ContentClass_reto1_seleccionMultiple">
                <strong>d.</strong>
                <input  class="input-checkbox" type="checkbox" id="checkbox_4_station4ContentClass_reto1_seleccionMultiple" value="4"  >
                <span>Institución a la que pertenece la revista o la fuente académica donde se publicará el artículo.</span>
              </label>
            </li>
            <li>
              <label for="checkbox_5_station4ContentClass_reto1_seleccionMultiple">
                <strong>e.</strong>
                <input  class="input-checkbox" type="checkbox" id="checkbox_5_station4ContentClass_reto1_seleccionMultiple" value="5" data-answer="true">
                <span>Breve información académica/laboral de quién(es) escribe(n) el artículo.</span>
              </label>
            </li>
            <li>
              <label for="checkbox_6_station4ContentClass_reto1_seleccionMultiple">
                <strong>f.</strong>
                <input  class="input-checkbox" type="checkbox" id="checkbox_6_station4ContentClass_reto1_seleccionMultiple" value="6" >
                <span>Completa información académica/laboral de quién(es) escribe(n) el artículo.</span>
              </label>
            </li>
            <li>
              <label for="checkbox_7_station4ContentClass_reto1_seleccionMultiple">
                <strong>g.</strong>
                <input  class="input-checkbox" type="checkbox" id="checkbox_7_station4ContentClass_reto1_seleccionMultiple" value="7" data-answer="true">
                <span>Correo electrónico de quién(es) escribe(n) el artículo.</span>
              </label>
            </li>
            <li>
              <label for="checkbox_8_station4ContentClass_reto1_seleccionMultiple">
                <strong>h.</strong>
                <input  class="input-checkbox" type="checkbox" id="checkbox_8_station4ContentClass_reto1_seleccionMultiple" value="8" >
                <span>Número telefónico de quién(es) escribe(n) el artículo.</span>
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
    stages_station4Content.pointsManager.add('station4ContentClass_reto1_seleccionMultiple',this.multipleSelectionCheckbox.pointsActivityCalculate.totalPoints,'d. Reto 2 - Selección múltiple');
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
    <strong>Revisa nuevamente tus respuestas:</strong><br/>
    Ten en cuenta que el párrafo anterior describe lo presentado con respecto a las características generales del TÍTULO de tu artículo de investigación.
    `;
  }
  show(){
    //Varia para las páginas
    this.divContainer.classList.remove('hide');

  }
}
stagePage.pageContainerSet('reto1_seleccionMultiple',station4ContentClass_reto1_seleccionMultiple);
