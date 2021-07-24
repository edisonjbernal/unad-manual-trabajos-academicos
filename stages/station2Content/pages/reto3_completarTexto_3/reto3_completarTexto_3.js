class station2ContentClass_reto3_completarTexto_3 extends generalPage{
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
      <div id="timer_station2ContentClass_reto3_completarTexto_3"></div>
      <div class="header-h2"><h2>Completar texto 3</h2></div>
      <div class="text-general list-select-for-text">
          <p><strong>Tipo de pregunta:</strong> Seleccionar una opción de la lista para completar un texto</p>
          <p><strong>Tiempo para resolver la pregunta:</strong> 80 segundos</p>
          <p><strong>Puntos a obtener:</strong> 2</p>
          <p>Completa la siguiente descripción con la opción correcta para cada espacio en blanco. Asegúrate  de que la descripción tenga sentido y realmente dé cuenta de lo que estudiamos previamente: </p>
          <div class="alltext-list-select-for-text">
            La reseña crítica se enfoca en un contenido <span class="span-select"><select class="text-option-to-move" onchange="stagePage.activity('listSelectOptionsForText',this);" data-answer="argumentativo">
              <option value="">--- Seleccionar opción ---</option>
              <option value="argumentativo">argumentativo</option>
              <option value="científicos o académicos">científicos o académicos</option>
              <option value="comentario crítico">comentario crítico</option>
              <option value="conclusiones">conclusiones</option>
              <option value="presentación">presentación</option>
              <option value="resumen">resumen</option>
              <option value="sentido crítico">sentido crítico</option>
              <option value="Título de la reseña">Título de la reseña</option>
            </select></span> que se sustenta en citas, argumentos comprobables y  otras formas de validación que aspiran a la objetividad, o al menos al <span class="span-select"><select class="text-option-to-move" onchange="stagePage.activity('listSelectOptionsForText',this);" data-answer="sentido crítico">
              <option value="">--- Seleccionar opción ---</option>
              <option value="argumentativo">argumentativo</option>
              <option value="científicos o académicos">científicos o académicos</option>
              <option value="comentario crítico">comentario crítico</option>
              <option value="conclusiones">conclusiones</option>
              <option value="presentación">presentación</option>
              <option value="resumen">resumen</option>
              <option value="sentido crítico">sentido crítico</option>
              <option value="Título de la reseña">Título de la reseña</option>
            </select></span>. Suelen ser más extensas,  exigen un público más informado ya que tratan temas <span class="span-select"><select class="text-option-to-move" onchange="stagePage.activity('listSelectOptionsForText',this);" data-answer="científicos o académicos">
              <option value="">--- Seleccionar opción ---</option>
              <option value="argumentativo">argumentativo</option>
              <option value="científicos o académicos">científicos o académicos</option>
              <option value="comentario crítico">comentario crítico</option>
              <option value="conclusiones">conclusiones</option>
              <option value="presentación">presentación</option>
              <option value="resumen">resumen</option>
              <option value="sentido crítico">sentido crítico</option>
              <option value="Título de la reseña">Título de la reseña</option>
            </select></span> que han de desarrollarse como trabajos  escritos del quehacer universitario o como documentos de revistas arbitradas, universitarias o técnicas. <br/>
            La reseña crítica debe tener las siguientes partes: 
            <ol>
              <li><span class="span-select"><select class="text-option-to-move" onchange="stagePage.activity('listSelectOptionsForText',this);" data-answer="Título de la reseña">
                <option value="">--- Seleccionar opción ---</option>
                <option value="argumentativo">argumentativo</option>
                <option value="científicos o académicos">científicos o académicos</option>
                <option value="comentario crítico">comentario crítico</option>
                <option value="conclusiones">conclusiones</option>
                <option value="presentación">presentación</option>
                <option value="resumen">resumen</option>
                <option value="sentido crítico">sentido crítico</option>
                <option value="Título de la reseña">Título de la reseña</option>
              </select></span> </li>
              <li>La <span class="span-select"><select class="text-option-to-move" onchange="stagePage.activity('listSelectOptionsForText',this);" data-answer="presentación">
                <option value="">--- Seleccionar opción ---</option>
                <option value="argumentativo">argumentativo</option>
                <option value="científicos o académicos">científicos o académicos</option>
                <option value="comentario crítico">comentario crítico</option>
                <option value="conclusiones">conclusiones</option>
                <option value="presentación">presentación</option>
                <option value="resumen">resumen</option>
                <option value="sentido crítico">sentido crítico</option>
                <option value="Título de la reseña">Título de la reseña</option>
              </select></span> donde se menciona el título, el autor, la fecha de publicación, y otros datos técnicos  pertinentes.</li>
              <li>El <span class="span-select"><select class="text-option-to-move" onchange="stagePage.activity('listSelectOptionsForText',this);" data-answer="resumen">
                <option value="">--- Seleccionar opción ---</option>
                <option value="argumentativo">argumentativo</option>
                <option value="científicos o académicos">científicos o académicos</option>
                <option value="comentario crítico">comentario crítico</option>
                <option value="conclusiones">conclusiones</option>
                <option value="presentación">presentación</option>
                <option value="resumen">resumen</option>
                <option value="sentido crítico">sentido crítico</option>
                <option value="Título de la reseña">Título de la reseña</option>
              </select></span> describe los contenidos de la fuente original. </li>
              <li>Un <span class="span-select"><select class="text-option-to-move" onchange="stagePage.activity('listSelectOptionsForText',this);" data-answer="comentario crítico">
                <option value="">--- Seleccionar opción ---</option>
                <option value="argumentativo">argumentativo</option>
                <option value="científicos o académicos">científicos o académicos</option>
                <option value="comentario crítico">comentario crítico</option>
                <option value="conclusiones">conclusiones</option>
                <option value="presentación">presentación</option>
                <option value="resumen">resumen</option>
                <option value="sentido crítico">sentido crítico</option>
                <option value="Título de la reseña">Título de la reseña</option>
              </select></span> donde el autor presenta su opinión del elemento analizado indicando qué es lo que le ha gustado, qué es lo que le parece adecuado, qué aporta, qué impacto tuvo en él/ella.</li>
              <li>Las <span class="span-select"><select class="text-option-to-move" onchange="stagePage.activity('listSelectOptionsForText',this);" data-answer="conclusiones">
                <option value="">--- Seleccionar opción ---</option>
                <option value="argumentativo">argumentativo</option>
                <option value="científicos o académicos">científicos o académicos</option>
                <option value="comentario crítico">comentario crítico</option>
                <option value="conclusiones">conclusiones</option>
                <option value="presentación">presentación</option>
                <option value="resumen">resumen</option>
                <option value="sentido crítico">sentido crítico</option>
                <option value="Título de la reseña">Título de la reseña</option>
              </select></span>.</li>
            </ol>
            
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
    stages_station2Content.pointsManager.add('station2ContentClass_reto3_completarTexto_3',this.listSelectOptionsForText.pointsActivityCalculate.totalPoints);
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
    this.listSelectOptionsForText.setTimer('timer_station2ContentClass_reto3_completarTexto_3');
    this.listSelectOptionsForText.setPoints(2);
    this.listSelectOptionsForText.messageCorrectAnswer='<strong>Correcto</strong> ¡Muy bien!';
    this.listSelectOptionsForText.timer.minutes=1;
    this.listSelectOptionsForText.timer.seconds=20;
    this.listSelectOptionsForText.timer.messageTimeOut=`
    <strong>El tiempo ha finalizado</strong><br/><br/>Las respuestas eran: 
    <ol>
      <li>argumentativo</li>
      <li>sentido crítico</li>
      <li>científicos o académicos</li>
      <li>Título de la reseña</li>
      <li>presentación</li>
      <li>resumen</li>
      <li>comentario crítico</li>
      <li>conclusiones</li>
    </ol>`;
    this.listSelectOptionsForText.timer.enable();
  }
  show(){
    //Varia para las páginas
    this.divContainer.classList.remove('hide');
    this.listSelectOptionsForText.timer.enable();

  }
}
stagePage.pageContainerSet('reto3_completarTexto_3',station2ContentClass_reto3_completarTexto_3);
