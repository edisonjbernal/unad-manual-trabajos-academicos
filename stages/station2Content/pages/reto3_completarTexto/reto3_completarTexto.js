class station2ContentClass_reto3_completarTexto extends generalPage{
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
      <div id="timer_station2ContentClass_reto3_completarTexto"></div>
      <div class="header-h2"><h2>Completar texto</h2></div>
      <div class="text-general list-select-for-text">
          <p><strong>Tipo de pregunta:</strong> Seleccionar una opción de la lista para completar un texto</p>
          <p><strong>Tiempo para resolver la pregunta:</strong> 80 segundos</p>
          <p><strong>Puntos a obtener:</strong> 2</p>
          <p>Completa la siguiente descripción con la opción correcta para cada espacio en blanco. Asegúrate  de que la descripción tenga sentido y realmente dé cuenta de lo que estudiamos previamente: </p>
          <div class="alltext-list-select-for-text">
            La reseña histórica es un <span class="span-select"><select class="text-option-to-move" onchange="stagePage.activity('listSelectOptionsForText',this);" data-answer="texto breve">
              <option value="">--- Seleccionar opción ---</option>
              <option value="conclusión">conclusión</option>
              <option value="cuerpo central">cuerpo central</option>
              <option value="introducción">introducción</option>
              <option value="repasar los hechos históricos">repasar los hechos históricos</option>
              <option value="texto breve">texto breve</option>
              <option value="visión general">visión general</option>
            </select></span> que se propone <span class="span-select"><select class="text-option-to-move" onchange="stagePage.activity('listSelectOptionsForText',this);" data-answer="repasar los hechos históricos">
              <option value="">--- Seleccionar opción ---</option>
              <option value="conclusión">conclusión</option>
              <option value="cuerpo central">cuerpo central</option>
              <option value="introducción">introducción</option>
              <option value="repasar los hechos históricos">repasar los hechos históricos</option>
              <option value="texto breve">texto breve</option>
              <option value="visión general">visión general</option>
            </select></span> de un determinado asunto. Este tipo de notas brinda  una <span class="span-select"><select class="text-option-to-move" onchange="stagePage.activity('listSelectOptionsForText',this);" data-answer="visión general">
              <option value="">--- Seleccionar opción ---</option>
              <option value="conclusión">conclusión</option>
              <option value="cuerpo central">cuerpo central</option>
              <option value="introducción">introducción</option>
              <option value="repasar los hechos históricos">repasar los hechos históricos</option>
              <option value="texto breve">texto breve</option>
              <option value="visión general">visión general</option>
            </select></span> sobre el objeto reseñado con un formato descriptivo-informativo. Toda reseña histórica  requiere que cuente con una serie de partes o de elementos imprescindibles: <span class="span-select"><select class="text-option-to-move" onchange="stagePage.activity('listSelectOptionsForText',this);" data-answer="introducción">
              <option value="">--- Seleccionar opción ---</option>
              <option value="conclusión">conclusión</option>
              <option value="cuerpo central">cuerpo central</option>
              <option value="introducción">introducción</option>
              <option value="repasar los hechos históricos">repasar los hechos históricos</option>
              <option value="texto breve">texto breve</option>
              <option value="visión general">visión general</option>
            </select></span> donde se  contextualiza al lector con respecto al cuándo, dónde, y la trascendencia del evento histórico principal; un <span class="span-select"><select class="text-option-to-move" onchange="stagePage.activity('listSelectOptionsForText',this);" data-answer="cuerpo central">
              <option value="">--- Seleccionar opción ---</option>
              <option value="conclusión">conclusión</option>
              <option value="cuerpo central">cuerpo central</option>
              <option value="introducción">introducción</option>
              <option value="repasar los hechos históricos">repasar los hechos históricos</option>
              <option value="texto breve">texto breve</option>
              <option value="visión general">visión general</option>
            </select></span> donde se aborden cronológicamente los acontecimientos analizados; y una <span class="span-select"><select class="text-option-to-move" onchange="stagePage.activity('listSelectOptionsForText',this);" data-answer="conclusión">
              <option value="">--- Seleccionar opción ---</option>
              <option value="conclusión">conclusión</option>
              <option value="cuerpo central">cuerpo central</option>
              <option value="introducción">introducción</option>
              <option value="repasar los hechos históricos">repasar los hechos históricos</option>
              <option value="texto breve">texto breve</option>
              <option value="visión general">visión general</option>
            </select></span> en la que se  presentan los resultados a los que se ha llegado gracias al pertinente análisis. 
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
    stages_station2Content.pointsManager.add('station2ContentClass_reto3_completarTexto',this.listSelectOptionsForText.pointsActivityCalculate.totalPoints);
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
    this.listSelectOptionsForText.setTimer('timer_station2ContentClass_reto3_completarTexto');
    this.listSelectOptionsForText.setPoints(2);
    this.listSelectOptionsForText.messageCorrectAnswer='<strong>Correcto</strong> ¡Muy bien!';
    this.listSelectOptionsForText.timer.minutes=1;
    this.listSelectOptionsForText.timer.seconds=20;
    this.listSelectOptionsForText.timer.messageTimeOut=`
    <strong>El tiempo ha finalizado</strong><br/><br/>Las respuestas eran: 
    <ol>
      <li>texto breve</li>
      <li>repasar los hechos históricos</li>
      <li>visión general</li>
      <li>introducción</li>
      <li>cuerpo central</li>
      <li>conclusión</li>
    </ol>`
    this.listSelectOptionsForText.timer.enable();
  }
  show(){
    //Varia para las páginas
    this.divContainer.classList.remove('hide');
    this.listSelectOptionsForText.timer.enable();

  }
}
stagePage.pageContainerSet('reto3_completarTexto',station2ContentClass_reto3_completarTexto);
