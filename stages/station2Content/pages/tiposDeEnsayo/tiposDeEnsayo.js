class station2ContentClass_tiposDeEnsayo extends generalPage{
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
      <div class="header-h2"><h2>Tipos de ensayo</h2></div>
      <div class="horizontal-items-audio">
      <ul class="wtree">
      <li>
        <button onclick="stage.activity('popUpToDiscover_showHideCombined',this);" data-state-show="true"  >Literario</button>
        <div class="single-audio show">
            <audio controls="" class="general">
                <source src="./images/trabajos-escritos/tiposDeEnsayo_Literario.mp3" type="audio/mpeg">
                Your browser does not support the audio tag.
            </audio>
            <p><strong>Literario</strong></p>
            <p>Se caracteriza por el desarrollo de un tema de manera libre y personal. Comúnmente, se escriben este tipo de ensayos para manifestar una opinión o una idea, y la pieza escrita no se rige a una estructura de redacción específica ni tiene que documentar sus puntos de vista exhaustivamente. En él no estás en la obligación de sustentar tus puntos de vista con pruebas verificables, sino que te puedes limitar a expresar tu percepción acerca de un determinado tema, de ahí que no todos los ensayos tengan citas o bibliografía.</p>
        </div>
      </li>
      <li>
        <button onclick="stage.activity('popUpToDiscover_showHideCombined',this);" data-state-show="true" >Científico</button>
        <div class="single-audio show">
            <audio controls="" class="general">
                <source src="./images/trabajos-escritos/tiposDeEnsayo_Cientifico.mp3" type="audio/mpeg">
                Your browser does not support the audio tag.
            </audio>
            <p><strong>Científico</strong></p>
            <p>Es también conocido como ensayo “científico-literario” ya que parte del conocimiento y razonamientos científicos y de la capacidad creativa literaria del autor. El ensayo comparte con la ciencia uno de sus propósitos esenciales: explorar más a fondo la realidad, aproximarse a la "verdad" de las cosas. Comparte con el arte la originalidad, la intensidad y la belleza expresiva. En él se expresa un punto de vista personal sobre el tema abordado basado en una información recogida y presentada de manera objetiva. El autor desarrolla las ideas de forma organizada, proveyendo argumentos sólidos provenientes de fuentes teóricas pertinentes, y utilizando un lenguaje técnico.</p>
        </div>
          
      </li>
      
      </ul>
      <h3 class="title">Según la intensión comunicativa</h3>
      <ul class="wtree">
      <li>
        <button onclick="stage.activity('popUpToDiscover_showHideCombined',this);" data-state-show="true" >Expositivo</button>
        <div class="single-audio show">
            <audio controls="" class="general">
                <source src="./images/trabajos-escritos/tiposDeEnsayo_Intension_Expositivo.mp3" type="audio/mpeg">
                Your browser does not support the audio tag.
            </audio>
            <p><strong>Expositivo</strong></p>
            <p>Expone ideas sobre un tema, presentando información alrededor del mismo y matizando esta información con la interpretación del autor y opiniones interesantes alrededor del tema en cuestión.
            </p>
        </div>
          
      </li>
      <li>
        <button onclick="stage.activity('popUpToDiscover_showHideCombined',this);" data-state-show="true" >Argumentativo</button>
        <div class="single-audio show">
            <audio controls="" class="general">
                <source src="./images/trabajos-escritos/tiposDeEnsayo_Intension_Argumentativo.mp3" type="audio/mpeg">
                Your browser does not support the audio tag.
            </audio>
            <p><strong>Argumentativo</strong></p>
            <p>Tiene como propósito defender una tesis con argumentos que pueden basarse en citas o referencias, datos concretos de experiencias investigativas, alusiones históricas, políticas, u otras, fundamentos epistemológicos.</p>
        </div>
      </li>
      <li>
        <button onclick="stage.activity('popUpToDiscover_showHideCombined',this);" data-state-show="true" >Crítico</button>
        <div class="single-audio show">
            <audio controls="" class="general">
                <source src="./images/trabajos-escritos/tiposDeEnsayo_Intension_Critico.mp3" type="audio/mpeg">
                Your browser does not support the audio tag.
            </audio>
            <p><strong>Crítico</strong></p>
            <p>Describe o analiza un hecho, fenómeno, obra o situación, emitiendo un juicio ponderado. Expresa la sensibilidad de su autor, utilizando lenguaje literario.
            </p>
        </div>
      </li>
      <li>
        <button onclick="stage.activity('popUpToDiscover_showHideCombined',this);" data-state-show="true" >Poético</button>
        <div class="single-audio show">
            <audio controls="" class="general">
                <source src="./images/trabajos-escritos/tiposDeEnsayo_Intension_Poetico.mp3" type="audio/mpeg">
                Your browser does not support the audio tag.
            </audio>
            <p><strong>Poético</strong></p>
            <p>Expresa la sensibilidad de su autor, utilizando lenguaje literario.
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

stagePage.pageContainerSet('tiposDeEnsayo',station2ContentClass_tiposDeEnsayo);