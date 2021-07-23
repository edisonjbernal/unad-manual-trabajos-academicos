class station2ContentClass_resena extends generalPage{
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
      <div class="header-h2"><h2>Reseña</h2></div>
      <div class="horizontal-items-audio">
      <ul class="wtree">
      <li>
        <button onclick="stage.activity('popUpToDiscover_showHideCombined',this);" data-state-show="true"  >Parte 1</button>
        <div class="single-audio show">
            <audio controls="" class="general">
                <source src="./images/trabajos-escritos/resena_1.mp3" type="audio/mpeg">
                Your browser does not support the audio tag.
            </audio>
            <p>Al escribir una reseña, es importante basarse en un método sólido y generar una estructura
            ordenada que asegura no dejar afuera ningún punto que consideremos esencial y así comunicar a los lectores el impacto que la fuente original nos ha causado.
            </p>
        </div>
      </li>


      <li>
        <button onclick="stage.activity('popUpToDiscover_showHideCombined',this);" data-state-show="true" >Parte 2</button>
        <div class="single-audio show">
            <audio controls="" class="general">
                <source src="./images/trabajos-escritos/resena_2.mp3" type="audio/mpeg">
                Your browser does not support the audio tag.
            </audio>
            <p>Una recomendación muy especial es generar un esquema o estructura con los temas que has de incluir en tu reseña. Tras ello deberás considerar qué estrategias utilizarás para atraer a tu lector desde la primera línea de tu texto.</p>
        </div>
          
      </li>
      <li>
        <button onclick="stage.activity('popUpToDiscover_showHideCombined',this);" data-state-show="true" >Parte 3</button>
        <div class="single-audio show">
            <audio controls="" class="general">
                <source src="./images/trabajos-escritos/resena_3.mp3" type="audio/mpeg">
                Your browser does not support the audio tag.
            </audio>
            <p>Una de las estrategias más utilizadas y efectivas es iniciar con una cita o frase textual del
            documento original lo suficientemente impactante para que genere en el lector de tu reseña la curiosidad de leer todo tu texto.
            </p>
        </div>
          
      </li>
      <li>
        <button onclick="stage.activity('popUpToDiscover_showHideCombined',this);" data-state-show="true" >Parte 4</button>
        <div class="single-audio show">
            <audio controls="" class="general">
                <source src="./images/trabajos-escritos/resena_4.mp3" type="audio/mpeg">
                Your browser does not support the audio tag.
            </audio>
            <p>Otra conveniente estrategia es presentar una pregunta que pueda ser respondida completamente solo hasta haber leído todo el documento. Este recurso es muy usado en reseñas de todo tipo. Por ejemplo: "¿Los próceres de la independencia latinoamericana fueron tal cual como nos cuentan los libros?"</p>
        </div>
      </li>
      <li>
        <button onclick="stage.activity('popUpToDiscover_showHideCombined',this);" data-state-show="true" >Parte 5</button>
        <div class="single-audio show">
            <audio controls="" class="general">
                <source src="./images/trabajos-escritos/resena_5.mp3" type="audio/mpeg">
                Your browser does not support the audio tag.
            </audio>
            <p>Es importante desarrollar la reseña asegurándonos que estamos brindándole al lector las
            herramientas necesarias para que elabore sus propias opiniones sobre el documento original. Es imprescindible comunicar nuestra verdadera valoración, incluso si esto significa expresar un total desacuerdo con los principios del autor.
            </p>
        </div>
      </li>
  </ul>
      </div>
      <div class="text-center">
        <button class="btn-general btn-back" onclick="stage.activity('menu_back')">Atrás</button>
        <button class="btn-general btn-next" onclick="stage.activity('menu_next')">Siguiente</button>
      </div>
      `;
  }
  importCssFiles(){
    return [
        'generalStage.css|general',
        'horizontal-items-audio.css|general'
    ]
}        
}

stagePage.pageContainerSet('resena',station2ContentClass_resena);