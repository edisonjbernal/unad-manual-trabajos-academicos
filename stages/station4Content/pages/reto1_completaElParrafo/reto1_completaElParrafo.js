class station4ContentClass_reto1_completaElParrafo extends generalPage{
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
      <div id="timer_station4ContentClass_reto1_completaElParrafo"></div>
      <div class="header-h2"><h2>Completar texto</h2></div>
      <div class="text-general list-select-for-text">
          <p><strong>Tipo de pregunta:</strong> Seleccionar una opción de la lista para completar un texto</p>
          <p>Completa el párrafo con las opciones correspondientes. Selecciona las palabras de la lista al espacio del texto de cada una mejor se ajuste. </p>
          <div class="alltext-list-select-for-text">
            El <span class="span-select"><select class="text-option-to-move" onchange="stagePage.activity('listSelectOptionsForText',this);" data-answer="título">
              <option value="">-Seleccionar-</option>
              <option value="estrategia">estrategia</option>
              <option value="lectores">lectores</option>
              <option value="palabras">palabras</option>
              <option value="perspectiva">perspectiva</option>
              <option value="título">título</option>
            </select></span> de tu artículo debe dar una <span class="span-select"><select class="text-option-to-move" onchange="stagePage.activity('listSelectOptionsForText',this);" data-answer="perspectiva">
              <option value="">-Seleccionar-</option>
              <option value="estrategia">estrategia</option>
              <option value="lectores">lectores</option>
              <option value="palabras">palabras</option>
              <option value="perspectiva">perspectiva</option>
              <option value="título">título</option>
            </select></span> completa de tu proyecto, ya que funcionará como tu <span class="span-select"><select class="text-option-to-move" onchange="stagePage.activity('listSelectOptionsForText',this);" data-answer="estrategia">
              <option value="">-Seleccionar-</option>
              <option value="estrategia">estrategia</option>
              <option value="lectores">lectores</option>
              <option value="palabras">palabras</option>
              <option value="perspectiva">perspectiva</option>
              <option value="título">título</option>
            </select></span> inicial para invitar a los lectores a acercarse al artículo en sí. El número de <span class="span-select"><select class="text-option-to-move" onchange="stagePage.activity('listSelectOptionsForText',this);" data-answer="palabras">
              <option value="">-Seleccionar-</option>
              <option value="estrategia">estrategia</option>
              <option value="lectores">lectores</option>
              <option value="palabras">palabras</option>
              <option value="perspectiva">perspectiva</option>
              <option value="título">título</option>
            </select></span> que este contiene puede variar dependiendo de los lineamientos de cada revista o fuente de publicación. Estas deben ser claras para todo tipo de <span class="span-select"><select class="text-option-to-move" onchange="stagePage.activity('listSelectOptionsForText',this);" data-answer="lectores">
              <option value="">-Seleccionar-</option>
              <option value="estrategia">estrategia</option>
              <option value="lectores">lectores</option>
              <option value="palabras">palabras</option>
              <option value="perspectiva">perspectiva</option>
              <option value="título">título</option>
            </select></span>, y en lo posible debes evitar expresiones que sean comprensibles para una región o país en particular.
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
    stages_station4Content.pointsManager.add('station4ContentClass_reto1_completaElParrafo',this.listSelectOptionsForText.pointsActivityCalculate.totalPoints);
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
    this.listSelectOptionsForText.setPoints(2);
    this.listSelectOptionsForText.messageCorrectAnswer='<strong>Correcto</strong> Muy bien, el párrafo anterior describe las características generales del TÍTULO de tu artículo de investigación.';
  }
  show(){
    //Varia para las páginas
    this.divContainer.classList.remove('hide');

  }
}
stagePage.pageContainerSet('reto1_completaElParrafo',station4ContentClass_reto1_completaElParrafo);
