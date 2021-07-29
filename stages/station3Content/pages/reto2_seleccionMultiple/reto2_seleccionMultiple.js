class station3ContentClass_reto2_seleccionMultiple extends generalPage{
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
      <div id="timer_station3ContentClass_reto2_seleccionMultiple"></div>
      <div class="header-h2"><h2>Selección múltiple</h2></div>
      <div class="text-general multiple-selection-checkbox">
          <p><strong>Tipo de pregunta:</strong> Selección múltiple (más de una respuesta correcta) </p>
          <p>Acabamos de ver en el video que la investigación puede orientarse de diferentes maneras dependiendo de la carrera académica que curses, el rol que tengas dentro de tu investigación, el tipo de datos que recolectes, los instrumentos de recolección que utilices, el método de análisis de los datos recolectados, y la manera en que reportes el ejercicio de investigación. Teniendo esto en cuenta, y según lo observado en el video, <strong>¿Cuáles son los tres tipos de trabajos investigativos que existen en la comunidad académica de la UNAD?</strong></p>
          <ul class="ul-selection">
            <li>
              <label for="checkbox_1_station3ContentClass_reto2_seleccionMultiple">
                <strong>a.</strong>
                <input class="input-checkbox" type="checkbox" id="checkbox_1_station3ContentClass_reto2_seleccionMultiple" value="1" data-answer="true">
                <span>Investigación Documental</span>
              </label>
            </li>
            <li>
              <label for="checkbox_2_station3ContentClass_reto2_seleccionMultiple">
                <strong>b.</strong>
                <input class="input-checkbox" type="checkbox" id="checkbox_2_station3ContentClass_reto2_seleccionMultiple" value="2" >
                <span>Investigación Empírica</span>
              </label>
            </li>
            <li>
              <label for="checkbox_3_station3ContentClass_reto2_seleccionMultiple">
                <strong>c.</strong>
                <input class="input-checkbox" type="checkbox" id="checkbox_3_station3ContentClass_reto2_seleccionMultiple" value="3" data-answer="true">
                <span>Investigación Cuantitativa</span>
              </label>
            </li>
            <li>
              <label for="checkbox_4_station3ContentClass_reto2_seleccionMultiple">
                <strong>d.</strong>
                <input class="input-checkbox" type="checkbox" id="checkbox_4_station3ContentClass_reto2_seleccionMultiple" value="4" data-answer="true" >
                <span>Investigación Cualitativa</span>
              </label>
            </li>
            <li>
              <label for="checkbox_5_station3ContentClass_reto2_seleccionMultiple">
                <strong>e.</strong>
                <input class="input-checkbox" type="checkbox" id="checkbox_5_station3ContentClass_reto2_seleccionMultiple" value="5" >
                <span>Investigación Competitiva</span>
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
    stages_station3Content.pointsManager.add('station3ContentClass_reto2_seleccionMultiple',this.multipleSelectionCheckbox.pointsActivityCalculate.totalPoints,'d. Reto 2 - Selección múltiple');
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
    this.multipleSelectionCheckbox.messageCorrectAnswer='<strong>Correcto</strong> ¡Excelente! En nuestra comunidad académica universitaria nos enfocamos más comúnmente en la investigación documental, cuantitativa y cualitativa.';
    this.multipleSelectionCheckbox.messageWrongAnswer=`
    <strong>Recuerda lo siguiente:</strong>
    <ul>
    <li>En nuestra comunidad académica universitaria nos enfocamos más comúnmente en la investigación documental, cuantitativa y cualitativa.</li>
    <li>Investigación empírica: Los términos investigación y empírico se contradicen en la comunidad académica de la UNAD. Para que un ejercicio investigativo sea válido y legítimo, éste no puede ser empírico sino sistemático y objetivo.</li>
    <li>Investigación competitiva: Este término no hace referencia a la investigación académica sino al análisis de mercados y por tanto no tiene relación con el material estudiado en esta estación.</li>
    </ul>
    `;
  }
  show(){
    //Varia para las páginas
    this.divContainer.classList.remove('hide');

  }
}
stagePage.pageContainerSet('reto2_seleccionMultiple',station3ContentClass_reto2_seleccionMultiple);
