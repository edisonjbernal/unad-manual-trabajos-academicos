class station3ContentClass_reto1_completarTexto extends generalPage{
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
      <div id="timer_station3ContentClass_reto1_completarTexto"></div>
      <div class="header-h2"><h2>Completar texto</h2></div>
      <div class="text-general list-select-for-text">
          <p><strong>Tipo de pregunta:</strong> Seleccionar una opción de la lista para completar un texto.</p>
          <p>Los profesores Esteban y Ana María dieron una breve introducción al desarrollo de trabajos investigativos en el video anterior. </p>
          <p>Teniendo en cuenta esa introducción, elige las palabras que completan el texto de manera correcta:</p>
          <div class="alltext-list-select-for-text">
            La investigación es un ejercicio de <span class="span-select"><select class="text-option-to-move" onchange="stagePage.activity('listSelectOptionsForText',this);" data-answer="indagación">
              <option value="">-Seleccionar-</option>
              <option value="divulgación">divulgación</option>
              <option value="indagación">indagación</option>
              <option value="referenciación">referenciación</option>
            </select></span> que pretende generar o ampliar conocimiento a través de un proceso <span class="span-select"><select class="text-option-to-move" onchange="stagePage.activity('listSelectOptionsForText',this);" data-answer="sistemático">
              <option value="">-Seleccionar-</option>
              <option value="empírico">empírico</option>
              <option value="práctico">práctico</option>
              <option value="sistemático">sistemático</option>
            </select></span> enmarcado dentro de una metodología investigativa específica. Todo ejercicio investigativo plantea un <span class="span-select"><select class="text-option-to-move" onchange="stagePage.activity('listSelectOptionsForText',this);" data-answer="problema">
              <option value="">-Seleccionar-</option>
              <option value="asunto">asunto</option>
              <option value="contexto">contexto</option>
              <option value="problema">problema</option>
            </select></span> a resolver o una pregunta a contestar que se sustenta a partir de una revisión previa sobre el tema a ser investigado. Para llevar a cabo el ejercicio investigativo que resuelve el problema o contesta la pregunta, se plantean unos <span class="span-select"><select class="text-option-to-move" onchange="stagePage.activity('listSelectOptionsForText',this);" data-answer="objetivos">
              <option value="">-Seleccionar-</option>
              <option value="objetivos">objetivos</option>
              <option value="pasos">pasos</option>
              <option value="puntos">puntos</option>
            </select></span> que determinan la metodología de investigación, es decir el tipo de datos que se necesitan y la manera en que éstos serán <span class="span-select"><select class="text-option-to-move" onchange="stagePage.activity('listSelectOptionsForText',this);" data-answer="recolectados">
              <option value="">-Seleccionar-</option>
              <option value="abordados">abordados</option>
              <option value="presentados">presentados</option>
              <option value="recolectados">recolectados</option>
            </select></span> y posteriormente <span class="span-select"><select class="text-option-to-move" onchange="stagePage.activity('listSelectOptionsForText',this);" data-answer="analizados">
              <option value="">-Seleccionar-</option>
              <option value="analizados">analizados</option>
              <option value="descifrados">descifrados</option>
              <option value="reportados">reportados</option>
            </select></span>. El investigador alcanza entonces un nuevo conocimiento sobre el tema a partir de un ejercicio análisis <span class="span-select"><select class="text-option-to-move" onchange="stagePage.activity('listSelectOptionsForText',this);" data-answer="objetivo">
              <option value="">-Seleccionar-</option>
              <option value="objetivo">objetivo</option>
              <option value="subjetivo">subjetivo</option>
            </select></span> de los datos recolectados. Para que dicha investigación tenga reconocimiento e impacto dentro de la comunidad académica, los resultados obtenidos deben ser <span class="span-select"><select class="text-option-to-move" onchange="stagePage.activity('listSelectOptionsForText',this);" data-answer="divulgados">
              <option value="">-Seleccionar-</option>
              <option value="archivados">archivados</option>
              <option value="divulgados">divulgados</option>
              <option value="resumidos">resumidos</option>
            </select></span> a través de un reporte escrito, publicación de un artículo, presentación de un poster, entre otros.
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
    stages_station3Content.pointsManager.add('station3ContentClass_reto1_completarTexto',this.listSelectOptionsForText.pointsActivityCalculate.totalPoints);
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
    this.listSelectOptionsForText.messageCorrectAnswer='<strong>Correcto</strong> ¡Muy bien!';
  }
  show(){
    //Varia para las páginas
    this.divContainer.classList.remove('hide');

  }
}
stagePage.pageContainerSet('reto1_completarTexto',station3ContentClass_reto1_completarTexto);
