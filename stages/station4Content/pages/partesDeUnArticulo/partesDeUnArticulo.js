class station4ContentClass_partesDeUnArticulo extends generalPage{
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
      <div class="header-h2"><h2>Partes de un artículo de investigación</h2></div>
      <div class="timeline">
        <div class="start">
            <h3>Partes de un artículo de investigación</h3>
            <p>Los artículos de investigación suelen publicarse en revistas científicas especializadas en tu
              área de conocimiento y desempeño profesional; sin embargo, ocasionalmente también
              pueden ser parte de los documentos de memorias de eventos académicos (congresos,
              seminarios, simposios), o incluso ser publicados como capítulos de libros científicos. De
              aquí la relevancia de tener muy en claro qué elementos de tu proyecto investigativo serán
              incluidos y presentados dentro de un artículo, que en últimas viene fungiendo como un
              documento corto proveniente de tu proyecto original que tiene como fin principal dar a
              conocer tu trabajo dentro de la comunidad académica global.
              </p>
              <audio controls="" class="general">
                <source src="./images/articulos-para-publicacion/partesDeUnArticulo-introduccion.mp3" type="audio/mpeg">
                Your browser does not support the audio tag.
            </audio>
        </div>
            <div class="sigle-time-container">
                <div class="box-left"></div>
                <div class="line-timeline">
                    <button title="Click here to show" onclick="stagePage.activity('popUpToDiscoverTimeline_show',this);"></button>
                </div>
                <div class="box-right">
                    <h3>Título</h3>
                    <div class="popUpToDiscover">
                        <div class="text-popUpToDiscover">
                        <div class="close-button-container"><button onclick="stagePage.activity('popUpToDiscoverTimeline_hide',this);">X</button></div>
                            <audio controls="" class="general">
                              <source src="./images/articulos-para-publicacion/partesDeUnArticulo-titulo.mp3" type="audio/mpeg">
                              Your browser does not support the audio tag.
                            </audio>
                            <p><strong>Título</strong></p>
                            <p>El título debe dar una perspectiva completa de tu proyecto, y será tu estrategia inicial de invitar a los lectores a acercarse al artículo en sí. El máximo de palabras de un título es generalmente de nueve (9), pero esto puede variar dependiendo de los lineamientos de cada revista o fuente de publicación. Las palabras deben ser claras para todo tipo de lectores, y en lo posible tener un sinónimo claro para cualquier país, es decir, evitar palabras o expresiones que sean comprensibles para una región o país en particular.</p>
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
                    
                    <h3>Autores</h3>
                    <div class="popUpToDiscover">
                        <div class="text-popUpToDiscover">
                        <div class="close-button-container"><button onclick="stagePage.activity('popUpToDiscoverTimeline_hide',this);">X</button></div>
                        <audio controls="" class="general">
                          <source src="./images/articulos-para-publicacion/partesDeUnArticulo-autores.mp3" type="audio/mpeg">
                          Your browser does not support the audio tag.
                        </audio>
                            <p><strong>Autores</strong></p>
                            <p>En este aparte se presenta un nombre y un apellido de quien/es realizaron la investigación; además, de la institución académica o científica a la que pertenece, información breve de su formación académica y laboral, y su correo electrónico institucional.</p>
                            
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
                    
                    <h3>Resumen</h3>
                    <div class="popUpToDiscover">
                        <div class="text-popUpToDiscover">
                        <div class="close-button-container"><button onclick="stagePage.activity('popUpToDiscoverTimeline_hide',this);">X</button></div>
                        <audio controls="" class="general">
                          <source src="./images/articulos-para-publicacion/partesDeUnArticulo-resumen.mp3" type="audio/mpeg">
                          Your browser does not support the audio tag.
                        </audio>
                        <p><strong>Resumen</strong></p>
                        <p>Es una parte esencial de las publicaciones, y quizás la más importante al tratarse de una publicación en una revista especializada, pues este aparte es el único que es visible en las bases de datos que fungen como motores de búsqueda para las comunidades académicas. Además, son leídas por quienes están en pesquisa de información bibliográfica útil para sus fines académicos e investigativos. La clave del resumen es generar interés por la lectura y la información completa del artículo.</p>
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
                  
                  <h3>Cuerpo del artículo</h3>
                  <div class="popUpToDiscover">
                      <div class="text-popUpToDiscover">
                      <div class="close-button-container"><button onclick="stagePage.activity('popUpToDiscoverTimeline_hide',this);">X</button></div>
                      <audio controls="" class="general">
                        <source src="./images/articulos-para-publicacion/partesDeUnArticulo-cuerpo-del-articulo.mp3" type="audio/mpeg">
                        Your browser does not support the audio tag.
                      </audio>
                      <p><strong>Cuerpo del artículo</strong></p>
                      <p>Además de los componentes ya mencionados, un artículo científico o investigativo debe incluir, a manera general, las siguientes partes de la investigación: Introducción, metodología de investigación implementada, descripción de la población en la que se aplicó el proyecto investigativo, instrumentos de recolección de datos, resultados del análisis de datos, y conclusiones. La extensión de cada aparte depende de las normas de la revista, o respectiva fuente, en donde el artículo se va a publicar.</p>
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
                
                <h3>Referencias bibliográficas</h3>
                <div class="popUpToDiscover">
                    <div class="text-popUpToDiscover">
                    <div class="close-button-container"><button onclick="stagePage.activity('popUpToDiscoverTimeline_hide',this);">X</button></div>
                    <audio controls="" class="general">
                      <source src="./images/articulos-para-publicacion/partesDeUnArticulo-referenciasBibliograficas.mp3" type="audio/mpeg">
                      Your browser does not support the audio tag.
                    </audio>
                    <p><strong>Referencias bibliográficas</strong></p>
                    <p>Como ya fue mencionado en una estación previa del presente recurso, las referencias bibliográficas enumeran las fuentes citadas dentro del cuerpo de un trabajo investigativo, que para el caso de una publicación debe seguir las especificidades que cada revista ajusta de acuerdo con el área de conocimiento en la que enfoca sus contenidos.</p>
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

stagePage.pageContainerSet('partesDeUnArticulo',station4ContentClass_partesDeUnArticulo);
