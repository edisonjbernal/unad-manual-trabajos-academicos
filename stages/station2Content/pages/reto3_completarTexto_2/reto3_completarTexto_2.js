class station2ContentClass_reto3_completarTexto_2 extends generalPage{
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
      
<div id="timer_station2ContentClass_reto3_completarTexto_2"></div>
<div class="header-h2"><h2>Completar texto 2</h2></div>
<div class="text-general list-select-for-text">
    <p><strong>Tipo de pregunta:</strong> Seleccionar una opción de la lista para completar un texto</p>
    <p><strong>Tiempo para resolver la pregunta:</strong> 80 segundos</p>
    <p><strong>Puntos a obtener:</strong> 2</p>
    <p>Completa la siguiente descripción con la opción correcta para cada espacio en blanco. Asegúrate  de que la descripción tenga sentido y realmente dé cuenta de lo que estudiamos previamente: </p>
    <div class="alltext-list-select-for-text">
      La reseña literaria es la <span class="span-select"><select class="text-option-to-move" onchange="stagePage.activity('listSelectOptionsForText',this);" data-answer="narración compendiosa">
        <option value="">--- Seleccionar opción ---</option>
        <option value="conclusiones">conclusiones</option>
        <option value="descripción">descripción</option>
        <option value="entrada">entrada</option>
        <option value="narración compendiosa">narración compendiosa</option>
        <option value="partes">partes</option>
        <option value="referentes">referentes</option>
        <option value="situaciones y personajes">situaciones y personajes</option>
        <option value="Título de la reseña">Título de la reseña</option>
      </select></span> sobre una obra de literatura. El texto incluye menciones a incidentes  específicos, <span class="span-select"><select class="text-option-to-move" onchange="stagePage.activity('listSelectOptionsForText',this);" data-answer="situaciones y personajes">
        <option value="">--- Seleccionar opción ---</option>
        <option value="conclusiones">conclusiones</option>
        <option value="descripción">descripción</option>
        <option value="entrada">entrada</option>
        <option value="narración compendiosa">narración compendiosa</option>
        <option value="partes">partes</option>
        <option value="referentes">referentes</option>
        <option value="situaciones y personajes">situaciones y personajes</option>
        <option value="Título de la reseña">Título de la reseña</option>
      </select></span> del libro en cuestión. La reseña literaria también tiene una estructura claramente delimitada; por tanto, para que un texto académico sea considerado como una reseña literaria debe  tener las siguientes <span class="span-select"><select class="text-option-to-move" onchange="stagePage.activity('listSelectOptionsForText',this);" data-answer="partes">
        <option value="">--- Seleccionar opción ---</option>
        <option value="conclusiones">conclusiones</option>
        <option value="descripción">descripción</option>
        <option value="entrada">entrada</option>
        <option value="narración compendiosa">narración compendiosa</option>
        <option value="partes">partes</option>
        <option value="referentes">referentes</option>
        <option value="situaciones y personajes">situaciones y personajes</option>
        <option value="Título de la reseña">Título de la reseña</option>
      </select></span>: 

      <ol>
        <li><span class="span-select"><select class="text-option-to-move" onchange="stagePage.activity('listSelectOptionsForText',this);" data-answer="Título de la reseña">
          <option value="">--- Seleccionar opción ---</option>
          <option value="conclusiones">conclusiones</option>
          <option value="descripción">descripción</option>
          <option value="entrada">entrada</option>
          <option value="narración compendiosa">narración compendiosa</option>
          <option value="partes">partes</option>
          <option value="referentes">referentes</option>
          <option value="situaciones y personajes">situaciones y personajes</option>
          <option value="Título de la reseña">Título de la reseña</option>
        </select></span></li>
        <li>Los <span class="span-select"><select class="text-option-to-move" onchange="stagePage.activity('listSelectOptionsForText',this);" data-answer="referentes">
          <option value="">--- Seleccionar opción ---</option>
          <option value="conclusiones">conclusiones</option>
          <option value="descripción">descripción</option>
          <option value="entrada">entrada</option>
          <option value="narración compendiosa">narración compendiosa</option>
          <option value="partes">partes</option>
          <option value="referentes">referentes</option>
          <option value="situaciones y personajes">situaciones y personajes</option>
          <option value="Título de la reseña">Título de la reseña</option>
        </select></span> que relacionan el texto original como el título de la obra, el autor, la casa editorial, la  fecha de publicación o el número de páginas. </li>
        <li>La <span class="span-select"><select class="text-option-to-move" onchange="stagePage.activity('listSelectOptionsForText',this);" data-answer="entrada">
          <option value="">--- Seleccionar opción ---</option>
          <option value="conclusiones">conclusiones</option>
          <option value="descripción">descripción</option>
          <option value="entrada">entrada</option>
          <option value="narración compendiosa">narración compendiosa</option>
          <option value="partes">partes</option>
          <option value="referentes">referentes</option>
          <option value="situaciones y personajes">situaciones y personajes</option>
          <option value="Título de la reseña">Título de la reseña</option>
        </select></span> es donde se hace la ambientación del tema en cuestión. </li>
        <li>La <span class="span-select"><select class="text-option-to-move" onchange="stagePage.activity('listSelectOptionsForText',this);" data-answer="descripción">
          <option value="">--- Seleccionar opción ---</option>
          <option value="conclusiones">conclusiones</option>
          <option value="descripción">descripción</option>
          <option value="entrada">entrada</option>
          <option value="narración compendiosa">narración compendiosa</option>
          <option value="partes">partes</option>
          <option value="referentes">referentes</option>
          <option value="situaciones y personajes">situaciones y personajes</option>
          <option value="Título de la reseña">Título de la reseña</option>
        </select></span> donde se establecen los pros y contras de la obra que se analiza determinando así no  sólo el valor que posee sino también la utilidad de cara al público. </li>
        <li>Las <span class="span-select"><select class="text-option-to-move" onchange="stagePage.activity('listSelectOptionsForText',this);" data-answer="conclusiones">
          <option value="">--- Seleccionar opción ---</option>
          <option value="conclusiones">conclusiones</option>
          <option value="descripción">descripción</option>
          <option value="entrada">entrada</option>
          <option value="narración compendiosa">narración compendiosa</option>
          <option value="partes">partes</option>
          <option value="referentes">referentes</option>
          <option value="situaciones y personajes">situaciones y personajes</option>
          <option value="Título de la reseña">Título de la reseña</option>
        </select></span> dónde el autor de la reseña presenta su posición frente a la obra, si la recomienda o  no, así como su comprensión sobre qué aporta la obra al sector literario actual. </li>
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
    stages_station2Content.pointsManager.add('station2ContentClass_reto3_completarTexto_2',this.listSelectOptionsForText.pointsActivityCalculate.totalPoints);
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
    this.listSelectOptionsForText.setTimer('timer_station2ContentClass_reto3_completarTexto_2');
    this.listSelectOptionsForText.setPoints(2);
    this.listSelectOptionsForText.messageCorrectAnswer='<strong>Correcto</strong> ¡Muy bien!';
    this.listSelectOptionsForText.timer.minutes=1;
    this.listSelectOptionsForText.timer.seconds=20;
    this.listSelectOptionsForText.timer.messageTimeOut=`
    <strong>El tiempo ha finalizado</strong><br/><br/>Las respuestas eran: 
    <ol>
      <li>narración compendiosa</li>
      <li>situaciones y personajes</li>
      <li>partes</li>
      <li>Título de la reseña</li>
      <li>referentes</li>
      <li>entrada</li>
      <li>descripción</li>
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
stagePage.pageContainerSet('reto3_completarTexto_2',station2ContentClass_reto3_completarTexto_2);
