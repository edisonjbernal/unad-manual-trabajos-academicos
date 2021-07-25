class station2ContentClass_reto2_seleccionMultiple extends generalPage{
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
      <div id="timer_station2ContentClass_reto2_seleccionMultiple"></div>
      <div class="header-h2"><h2>Selección múltiple</h2></div>
      <div class="text-general multiple-selection-checkbox">
          <p><strong>Tipo de pregunta:</strong> Selección múltiple (más de una respuesta correcta) </p>
          <p><strong>Tiempo para resolver la pregunta:</strong> 70 segundos</p>
          <p><strong>Puntos a obtener:</strong> 2</p>
          <p>¿Cuáles son las características de un resumen descriptivo? Más de una opción es correcta. Escoge aquellas que mejor definen este tipo de resumen:</p>
          <ul class="ul-selection">
            <li>
              <label for="checkbox_1_station2ContentClass_reto2_seleccionMultiple">
                <strong>a.</strong>
                <input class="input-checkbox" type="checkbox" id="checkbox_1_station2ContentClass_reto2_seleccionMultiple" value="1" data-answer="true">
                <span>Presenta ideas principales</span>
              </label>
            </li>
            <li>
              <label for="checkbox_2_station2ContentClass_reto2_seleccionMultiple">
                <strong>b.</strong>
                <input class="input-checkbox" type="checkbox" id="checkbox_2_station2ContentClass_reto2_seleccionMultiple" value="2" >
                <span>Sintetiza las aportaciones más destacadas de la investigación, el tema que estudia, la metodología aplicada, y los resultados globales.</span>
              </label>
            </li>
            <li>
              <label for="checkbox_3_station2ContentClass_reto2_seleccionMultiple">
                <strong>c.</strong>
                <input class="input-checkbox" type="checkbox" id="checkbox_3_station2ContentClass_reto2_seleccionMultiple" value="3" data-answer="true">
                <span>Permite al lector entender la organización del texto original y sus elementos particulares.</span>
              </label>
            </li>
            <li>
              <label for="checkbox_4_station2ContentClass_reto2_seleccionMultiple">
                <strong>d.</strong>
                <input class="input-checkbox" type="checkbox" id="checkbox_4_station2ContentClass_reto2_seleccionMultiple" value="4" >
                <span>Presenta una perspectiva rápida del original, por ello no suele presentar ideas secundarias o ejemplos particulares.</span>
              </label>
            </li>
            <li>
              <label for="checkbox_5_station2ContentClass_reto2_seleccionMultiple">
                <strong>e.</strong>
                <input class="input-checkbox" type="checkbox" id="checkbox_5_station2ContentClass_reto2_seleccionMultiple" value="5" data-answer="true">
                <span>Presenta la estructura, fuentes y estilo del texto original.</span>
              </label>
            </li>
            <li>
              <label for="checkbox_6_station2ContentClass_reto2_seleccionMultiple">
                <strong>f.</strong>
                <input class="input-checkbox" type="checkbox" id="checkbox_6_station2ContentClass_reto2_seleccionMultiple" value="6" >
                <span>Expresa en un solo texto, de manera coherente e hilada, los elementos esenciales, coincidentes, y complementarios de varias fuentes originales.</span>
              </label>
            </li>
            <li>
              <label for="checkbox_7_station2ContentClass_reto2_seleccionMultiple">
                <strong>g.</strong>
                <input class="input-checkbox" type="checkbox" id="checkbox_7_station2ContentClass_reto2_seleccionMultiple" value="7" >
                <span>No suele superar las 15 líneas de extensión.</span>
              </label>
            </li>
            <li>
              <label for="checkbox_8_station2ContentClass_reto2_seleccionMultiple">
                <strong>h.</strong>
                <input class="input-checkbox" type="checkbox" id="checkbox_8_station2ContentClass_reto2_seleccionMultiple" value="8" data-answer="true">
                <span>Se ajusta mejor a textos originales muy extensos.</span>
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
    stages_station2Content.pointsManager.add('station2ContentClass_reto2_seleccionMultiple',this.multipleSelectionCheckbox.pointsActivityCalculate.totalPoints,'d. Reto 2 - Selección múltiple');
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
    this.multipleSelectionCheckbox.setTimer('timer_station2ContentClass_reto2_seleccionMultiple');
    this.multipleSelectionCheckbox.setPoints(2);
    this.multipleSelectionCheckbox.messageCorrectAnswer='<strong>Correcto</strong> ¡Muy bien!';
    this.multipleSelectionCheckbox.timer.minutes=1;
    this.multipleSelectionCheckbox.timer.seconds=10;
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
stagePage.pageContainerSet('reto2_seleccionMultiple',station2ContentClass_reto2_seleccionMultiple);
