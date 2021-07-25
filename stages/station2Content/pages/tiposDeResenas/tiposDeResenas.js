class station2ContentClass_tiposDeResenas extends generalPage{
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
      <div class="header-h2"><h2>Tipos de reseña</h2></div>
      <div class="timeline">
        <div class="start">
            <h3>Tipos de reseñas</h3>
        </div>
            <div class="sigle-time-container">
                <div class="box-left"></div>
                <div class="line-timeline">
                    <button title="Click here to show" onclick="stagePage.activity('popUpToDiscoverTimeline_show',this);"></button>
                </div>
                <div class="box-right">
                    <h3>Histórica</h3>
                    <div class="popUpToDiscover">
                        <div class="text-popUpToDiscover">
                        <div class="close-button-container"><button onclick="stagePage.activity('popUpToDiscoverTimeline_hide',this);">X</button></div>
                            <p>Es un texto breve que se propone repasar los hechos históricos de un determinado asunto. Este tipo de notas brinda una visión general sobre el objeto reseñado con un formato descriptivo-informativo.</p>
                            <p>Además de todo lo expuesto, tenemos que dejar patente que toda reseña histórica requiere que cuente con una serie de partes o de elementos imprescindibles. En este sentido, a grandes rasgos, debe tener una introducción en la que trataremos temas de contexto como el cuándo, dónde, y la trascendencia del evento histórico principal; un cuerpo central donde se aborden cronológicamente los acontecimientos analizados; y finalmente, una conclusión en la que se presentan los resultados a los que se ha llegado gracias al pertinente análisis.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="sigle-time-container">
                <div class="box-left"></div>
                <div class="line-timeline">
                    <button title="Click here to show" onclick="stagePage.activity('popUpToDiscoverTimeline_show',this);"></button>
                </div>
                <div class="box-right">
                    
                    <h3>Literaria</h3>
                    <div class="popUpToDiscover">
                        <div class="text-popUpToDiscover">
                        <div class="close-button-container"><button onclick="stagePage.activity('popUpToDiscoverTimeline_hide',this);">X</button></div>
                            <p>Es la narración compendiosa que el escritor de la reseña lleva a cabo sobre una obra de literatura. El texto incluye menciones a incidentes específicos, situaciones y personajes del libro en cuestión.</p>
                            <p>Es importante saber que, al igual que otra serie de documentos, la reseña literaria tiene una estructura claramente delimitada. En concreto, se establece que estas son las partes que debe poseer para ser considerada como tal y cumplir los objetivos que tiene:</p>
                            <p><strong>- Título de la reseña.</strong></p>
                            <p><strong>- Referentes.</strong></p>
                            <p>Dentro de este apartado se encontrarían todos los datos relativos al objeto sobre el que se trabaja, es decir, la obra. De ahí que se incluyan tanto el título de esta como su autor, la casa editorial, la fecha de publicación o el número de páginas.</p>
                            <p><strong>- Entrada.</strong></p>
                            <p>Esta sección es la que recoge la ambientación que se realiza del tema en cuestión. Es decir, en ella se procede a realizar aclaraciones, a determinar la importancia del trabajo en cuestión…</p>
                            <p><strong>Descripción.</strong></p>
                            <p>En este caso, el autor de la reseña literaria en cuestión se encarga de establecer los pros y contras de la obra que analiza para, de esta manera, determinar no sólo el valor que posee sino también la utilidad de cara al público.</p>
                            <p><strong>Conclusiones.</strong></p>
                            <p>Al igual que en un sinfín de documentos, este tipo de reseña finaliza con un listado de conclusiones donde el autor deja patente qué le ha parecido la obra, si la recomienda o no así como qué aporta al sector literario actual.</p>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div class="sigle-time-container">
                <div class="box-left"></div>
                <div class="line-timeline">
                    <button title="Click here to show" onclick="stagePage.activity('popUpToDiscoverTimeline_show',this);"></button>
                </div>
                <div class="box-right">
                    
                    <h3>Crítica</h3>
                    <div class="popUpToDiscover">
                        <div class="text-popUpToDiscover">
                        <div class="close-button-container"><button onclick="stagePage.activity('popUpToDiscoverTimeline_hide',this);">X</button></div>
                        <p>Es un tipo de reseña que se enfoca en un contenido argumentativo y sostiene su criterio con base en citas, argumentos comprobables y otras formas de validación que aspiran a la objetividad, o al menos al sentido crítico. Suelen ser más extensas, exigen un público más informado y sin duda son mucho más especializadas, ya que se tratan temas científicos o académicos que han de desarrollarse como trabajos escritos del quehacer universitario o como documentos de revistas arbitradas, universitarias o técnicas.</p>
                        <p>Además de todo lo expuesto, es importante establecer que toda reseña crítica tiene que estar conformada por una serie de apartados necesarios. En concreto, su estructura debe estar compuesta por las siguientes partes:</p>
                        <p><strong>Título de la reseña</strong></p>
                        <p><strong>Presentación.</strong></p>
                        <p>Este es el apartado en el que se darán a conocer los datos relativos a la obra o elemento que se está analizando. De esta manera, será aquí donde se menciona el título, el autor, la fecha de publicación, y otros datos técnicos pertinentes.</p>
                        <p><strong>Resumen.</strong></p>
                        <p>En esta parte se determinan los aspectos fundamentales sobre los que se sustenta la fuente original, dícese la descripción de sus contenidos </p>
                        <p><strong>Comentario crítico. </strong></p>
                        <p>Procedemos a establecer la opinión que tenemos acerca del elemento analizado, qué es lo que nos ha gustado, qué es lo que no nos parece adecuado, qué aporta, qué impacto tuvo en nosotros. Por supuesto, es importante que cada una de nuestras ideas estén perfectamente argumentadas para que así tengan sentido y credibilidad</p>
                        <p><strong>Conclusiones.</strong></p>
                        </div>
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
  importCssFiles(){
    return [
        'generalStage.css|general',
        'timeline.css|general'
    ]
    }
    importJSFiles(){
        this.popUpToDiscoverTimeline=new popUpToDiscoverTimelineClass;
    }
}

stagePage.pageContainerSet('tiposDeResenas',station2ContentClass_tiposDeResenas);