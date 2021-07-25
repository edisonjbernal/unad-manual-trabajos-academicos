class station2ContentClass_reto4_completarTabla extends generalPage{
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
      <div id="timer_station2ContentClass_reto4_completarTabla"></div>
      <div class="header-h2"><h2>Completar tabla</h2></div>
      <div class="text-general list-select-for-text">
          <p><strong>Tipo de pregunta:</strong> Seleccionar una opción de la lista para completar la tabla</p>
          <p><strong>Tiempo para resolver la pregunta:</strong> 80 segundos</p>
          <p><strong>Puntos a obtener:</strong> 3</p>
          <p>Completa la siguiente descripción con la opción correcta para cada espacio en blanco. Asegúrate  de que la descripción tenga sentido y realmente dé cuenta de lo que estudiamos previamente: </p>
          <div class="table-list-select-for-text">
            <div class="table-row">
              <div class="table-row-title">Crítico</div>
              <div class="table-row-content">
                <p>Desarrollo del tema <span class="span-select"><select class="text-option-to-move" onchange="stagePage.activity('listSelectOptionsForText',this);" data-answer="libre y personal">
                  <option value="">--- Seleccionar opción ---</option>
                  <option value="científico - literario">científico - literario</option>
                  <option value="explorativo">explorativo</option>
                  <option value="expresar su percepción acerca de un tema">expresar su percepción acerca de un tema</option>
                  <option value="la capacidad creativa literaria del autor">la capacidad creativa literaria del autor</option>
                  <option value="libre y personal">libre y personal</option>
                  <option value="objetiva">objetiva</option>
                  <option value="opinión o idea">opinión o idea</option>
                  <option value="punto de vista personal sobre el tema">punto de vista personal sobre el tema</option>
                  <option value="sustentar el punto de vista del autor">sustentar el punto de vista del autor</option>
                </select></span></p>
                <p>Manifiesta una <span class="span-select"><select class="text-option-to-move" onchange="stagePage.activity('listSelectOptionsForText',this);" data-answer="opinión o idea">
                  <option value="">--- Seleccionar opción ---</option>
                  <option value="científico - literario">científico - literario</option>
                  <option value="explorativo">explorativo</option>
                  <option value="expresar su percepción acerca de un tema">expresar su percepción acerca de un tema</option>
                  <option value="la capacidad creativa literaria del autor">la capacidad creativa literaria del autor</option>
                  <option value="libre y personal">libre y personal</option>
                  <option value="objetiva">objetiva</option>
                  <option value="opinión o idea">opinión o idea</option>
                  <option value="punto de vista personal sobre el tema">punto de vista personal sobre el tema</option>
                  <option value="sustentar el punto de vista del autor">sustentar el punto de vista del autor</option>
                </select></span></p>
                <p>No es obligatorio <span class="span-select"><select class="text-option-to-move" onchange="stagePage.activity('listSelectOptionsForText',this);" data-answer="sustentar el punto de vista del autor">
                  <option value="">--- Seleccionar opción ---</option>
                  <option value="científico - literario">científico - literario</option>
                  <option value="explorativo">explorativo</option>
                  <option value="expresar su percepción acerca de un tema">expresar su percepción acerca de un tema</option>
                  <option value="la capacidad creativa literaria del autor">la capacidad creativa literaria del autor</option>
                  <option value="libre y personal">libre y personal</option>
                  <option value="objetiva">objetiva</option>
                  <option value="opinión o idea">opinión o idea</option>
                  <option value="punto de vista personal sobre el tema">punto de vista personal sobre el tema</option>
                  <option value="sustentar el punto de vista del autor">sustentar el punto de vista del autor</option>
                </select></span></p>
                <p>El autor se puede limitar a <span class="span-select"><select class="text-option-to-move" onchange="stagePage.activity('listSelectOptionsForText',this);" data-answer="expresar su percepción acerca de un tema">
                  <option value="">--- Seleccionar opción ---</option>
                  <option value="científico - literario">científico - literario</option>
                  <option value="explorativo">explorativo</option>
                  <option value="expresar su percepción acerca de un tema">expresar su percepción acerca de un tema</option>
                  <option value="la capacidad creativa literaria del autor">la capacidad creativa literaria del autor</option>
                  <option value="libre y personal">libre y personal</option>
                  <option value="objetiva">objetiva</option>
                  <option value="opinión o idea">opinión o idea</option>
                  <option value="punto de vista personal sobre el tema">punto de vista personal sobre el tema</option>
                  <option value="sustentar el punto de vista del autor">sustentar el punto de vista del autor</option>
                </select></span></p>
              </div>
            </div>
            <div class="table-row">
              <div class="table-row-title">Literario</div>
              <div class="table-row-content">
                <p>También se conoce como "<span class="span-select"><select class="text-option-to-move" onchange="stagePage.activity('listSelectOptionsForText',this);" data-answer="científico - literario">
                  <option value="">--- Seleccionar opción ---</option>
                  <option value="científico - literario">científico - literario</option>
                  <option value="explorativo">explorativo</option>
                  <option value="expresar su percepción acerca de un tema">expresar su percepción acerca de un tema</option>
                  <option value="la capacidad creativa literaria del autor">la capacidad creativa literaria del autor</option>
                  <option value="libre y personal">libre y personal</option>
                  <option value="objetiva">objetiva</option>
                  <option value="opinión o idea">opinión o idea</option>
                  <option value="punto de vista personal sobre el tema">punto de vista personal sobre el tema</option>
                  <option value="sustentar el punto de vista del autor">sustentar el punto de vista del autor</option>
                </select></span>"</p>
                <p>Combina conocimiento y razonamientos  científicos y <span class="span-select"><select class="text-option-to-move" onchange="stagePage.activity('listSelectOptionsForText',this);" data-answer="la capacidad creativa literaria del autor">
                  <option value="">--- Seleccionar opción ---</option>
                  <option value="científico - literario">científico - literario</option>
                  <option value="explorativo">explorativo</option>
                  <option value="expresar su percepción acerca de un tema">expresar su percepción acerca de un tema</option>
                  <option value="la capacidad creativa literaria del autor">la capacidad creativa literaria del autor</option>
                  <option value="libre y personal">libre y personal</option>
                  <option value="objetiva">objetiva</option>
                  <option value="opinión o idea">opinión o idea</option>
                  <option value="punto de vista personal sobre el tema">punto de vista personal sobre el tema</option>
                  <option value="sustentar el punto de vista del autor">sustentar el punto de vista del autor</option>
                </select></span></p>
                <p>Es de tipo <span class="span-select"><select class="text-option-to-move" onchange="stagePage.activity('listSelectOptionsForText',this);" data-answer="explorativo">
                  <option value="">--- Seleccionar opción ---</option>
                  <option value="científico - literario">científico - literario</option>
                  <option value="explorativo">explorativo</option>
                  <option value="expresar su percepción acerca de un tema">expresar su percepción acerca de un tema</option>
                  <option value="la capacidad creativa literaria del autor">la capacidad creativa literaria del autor</option>
                  <option value="libre y personal">libre y personal</option>
                  <option value="objetiva">objetiva</option>
                  <option value="opinión o idea">opinión o idea</option>
                  <option value="punto de vista personal sobre el tema">punto de vista personal sobre el tema</option>
                  <option value="sustentar el punto de vista del autor">sustentar el punto de vista del autor</option>
                </select></span></p>
                <p>Expresa un <span class="span-select"><select class="text-option-to-move" onchange="stagePage.activity('listSelectOptionsForText',this);" data-answer="punto de vista personal sobre el tema">
                  <option value="">--- Seleccionar opción ---</option>
                  <option value="científico - literario">científico - literario</option>
                  <option value="explorativo">explorativo</option>
                  <option value="expresar su percepción acerca de un tema">expresar su percepción acerca de un tema</option>
                  <option value="la capacidad creativa literaria del autor">la capacidad creativa literaria del autor</option>
                  <option value="libre y personal">libre y personal</option>
                  <option value="objetiva">objetiva</option>
                  <option value="opinión o idea">opinión o idea</option>
                  <option value="punto de vista personal sobre el tema">punto de vista personal sobre el tema</option>
                  <option value="sustentar el punto de vista del autor">sustentar el punto de vista del autor</option>
                </select></span> basado en fuentes teóricas  pertinentes, y utilizando un lenguaje técnico.</p>
                <p>La información se presenta de manera <span class="span-select"><select class="text-option-to-move" onchange="stagePage.activity('listSelectOptionsForText',this);" data-answer="objetiva">
                  <option value="">--- Seleccionar opción ---</option>
                  <option value="científico - literario">científico - literario</option>
                  <option value="explorativo">explorativo</option>
                  <option value="expresar su percepción acerca de un tema">expresar su percepción acerca de un tema</option>
                  <option value="la capacidad creativa literaria del autor">la capacidad creativa literaria del autor</option>
                  <option value="libre y personal">libre y personal</option>
                  <option value="objetiva">objetiva</option>
                  <option value="opinión o idea">opinión o idea</option>
                  <option value="punto de vista personal sobre el tema">punto de vista personal sobre el tema</option>
                  <option value="sustentar el punto de vista del autor">sustentar el punto de vista del autor</option>
                </select></span></p>
              </div>
            </div>
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
    this.listSelectOptionsForText.timer.disable();
    stages_station2Content.pointsManager.add('station2ContentClass_reto4_completarTabla',this.listSelectOptionsForText.pointsActivityCalculate.totalPoints);
  }
  importCssFiles(){
    return [
        'generalStage.css|general',
        'clock.css|general',
        'list-select-for-text.css|general'
    ]
  }
  importJSFiles(){
    this.listSelectOptionsForText = new listSelectOptionsForTextClass();
    this.listSelectOptionsForText.tableMode=true;
    this.listSelectOptionsForText.setTimer('timer_station2ContentClass_reto4_completarTabla');
    this.listSelectOptionsForText.setPoints(3);
    this.listSelectOptionsForText.messageCorrectAnswer='<strong>Correcto</strong> ¡Muy bien!';
    this.listSelectOptionsForText.timer.minutes=1;
    this.listSelectOptionsForText.timer.seconds=20;
    this.listSelectOptionsForText.timer.messageTimeOut=`
    <strong>El tiempo ha finalizado</strong><br/><br/>Las respuestas eran: 
    <ol>
      <li>libre y personal</li>
      <li>opinión o idea</li>
      <li>sustentar el punto de vista del autor</li>
      <li>expresar su percepción acerca de un tema</li>
      <li>científico - literario</li>
      <li>la capacidad creativa literaria del autor</li>
      <li>explorativo</li>
      <li>punto de vista personal sobre el tema</li>
      <li>objetiva</li>
    </ol>`
    this.listSelectOptionsForText.timer.enable();
  }
  show(){
    //Varia para las páginas
    this.divContainer.classList.remove('hide');
    this.listSelectOptionsForText.timer.enable();

  }
}
stagePage.pageContainerSet('reto4_completarTabla',station2ContentClass_reto4_completarTabla);
