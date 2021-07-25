class station2ContentClass_partesDeUnEnsayo extends generalPage{
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
      <div class="header-h2"><h2>Partes de un ensayo</h2></div>
      <div class="horizontal-items-audio">
      <ul class="wtree">
      <li>
        <button onclick="stage.activity('popUpToDiscover_showHideCombined',this);" data-state-show="true"  >Introducción</button>
        <div class="single-audio show">
            <audio controls="" class="general">
                <source src="./images/trabajos-escritos/partesDeUnEnsayo_Introduccion.mp3" type="audio/mpeg">
                Your browser does not support the audio tag.
            </audio>
            <p><strong>Introducción</strong></p>
            <p>Se presenta el tema y la forma en que este será abordado por el autor; aquí el autor plantea su hipótesis, la contextualiza y expresa su posición al respecto. Es fundamental ya que es la parte en que has de cautivar a tu lector.</p>
        </div>
      </li>
      <li>
        <button onclick="stage.activity('popUpToDiscover_showHideCombined',this);" data-state-show="true" >Desarrollo</button>
        <div class="single-audio show">
            <audio controls="" class="general">
                <source src="./images/trabajos-escritos/partesDeUnEnsayo_Desarrollo.mp3" type="audio/mpeg">
                Your browser does not support the audio tag.
            </audio>
            <p><strong>Desarrollo</strong></p>
            <p>Tiene que ver con el proceso argumentativo de las ideas principales, secundarias, y periféricas .Aquí yacen los argumentos que proveen el sustento de tus ideas e hipótesis a través de comparaciones, datos, ejemplos del tema, fuentes de referencia, etc.</p>
        </div>
          
      </li>
      <li>
        <button onclick="stage.activity('popUpToDiscover_showHideCombined',this);" data-state-show="true" >Conclusión</button>
        <div class="single-audio show">
            <audio controls="" class="general">
                <source src="./images/trabajos-escritos/partesDeUnEnsayo_Conclusion.mp3" type="audio/mpeg">
                Your browser does not support the audio tag.
            </audio>
            <p><strong>Conclusión</strong></p>
            <p>Refuerzo del punto de vista central a través de estrategias como la formulación de nuevas preguntas al respecto, proponer un siguiente análisis a realizar, abrir la puerta a opiniones diferentes, etc.</p>
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

stagePage.pageContainerSet('partesDeUnEnsayo',station2ContentClass_partesDeUnEnsayo);