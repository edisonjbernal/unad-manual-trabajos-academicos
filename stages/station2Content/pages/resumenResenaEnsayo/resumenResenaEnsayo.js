class station2ContentClass_resumenResenaEnsayo extends generalPage{
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
      <h2>Resumen, Reseña y Ensayo</h2>
      <video class="responsive" src="./images/trabajos-escritos/resumen-resena-ensayo.mp4" controls="" controlslist="nodownload"></video>
      <div class="text-center">
        <button class="btn-general btn-back" onclick="stage.activity('menu_back')">Atrás</button>
        <button class="btn-general btn-next" onclick="stage.activity('menu_next')">Siguiente</button>
        <button class="btn-general btn-show-content" onclick="stage.activity('menu_showContentInText_none',this)">Mostrar en texto</button>
      </div>
      <div class="text-show-content">
        <h3>Transcripción del video</h3>
        <p>En nuestro quehacer académico dentro de la Universidad Nacional Abierta y a Distancia nos enfrentamos cotidianamente a tareas y retos que propenden por la construcción de conocimiento de una manera en que valores como la ética, la responsabilidad, y la apertura a la variedad de puntos de vista, se conjuren con habilidades esenciales como el análisis reflexivo, el pensamiento crítico, la innovación, el trabajo colaborativo, y la creatividad.</p>
        <p>Esta meta se forja desde los primeros instantes hasta el final de nuestro proceso formativo a través del desarrollo concienzudo de trabajos académicos como EL RESUMEN, LA RESEÑA, Y EL ENSAYO. En este video analizaremos brevemente sus características fundamentales.</p>
        <p><strong>RESUMEN</strong></p>
        <p>El resumen es la redacción de un texto propio a partir de la lectura y comprensión de otro texto, exponiendo de manera sucinta las ideas principales o más importantes del texto original. La longitud de un resumen variará según los requerimientos del trabajo asignado por tu profesor y la longitud del texto original. </p>
        <p>Pero presta atención, el resumen NO es solo una reducción informativa de un texto original, es un TEXTO NUEVO que busca adaptarse a las características de un nuevo contexto comunicativo del que debemos tener claro aspectos como:  </p>
        <ol>
          <li>La finalidad con la que se realiza, es decir qué impacto esperamos que tenga el resumen sobre quien lo lea. ¿Convencer, invitar a la reflexión, informar, describir?</li>
          <li>Quiénes leerán el resumen, esto apunta al tipo de lenguaje que utilizaremos para que les sea muy claro y comprensible.</li>
          <li>Qué tipo de información esperan los destinatarios del resumen. Debemos decidir si nos enfocaremos en todas o solo en algunas ideas principales del texto original. Asumiremos incluir o no ejemplos particulares o datos estadísticos más detallados.</li>
        </ol>
        <p>Los resúmenes pueden ser de varios tipos. Entre ellos destacamos los resúmenes INFORMATIVOS, DESCRIPTIVOS, SÍNTESIS, Y ABSTRACTS. En un material posterior a este video, encontrarás información detallada sobre cada uno de ellos.  Debes también tener en cuenta que los Mapas Conceptuales y los esquemas son otras maneras válidas para resumir y simplificar textos originales. </p>
        <p><strong>RESEÑA</strong></p>
        <p>Una reseña es una narración breve pero a su vez completa sobre un elemento que puede provenir tanto de fuentes escritas como una obra científica tal como un proyecto de investigación, una monografía, un artículo investigativo, o una obra literaria, como también de materiales audiovisuales como una película, un video, un documental, un podcast, etc. Por su naturaleza, las reseñas son susceptibles a ser desarrolladas no solamente con fines académicos, también son comúnmente visibles en diversos medios de comunicación masivos.</p>
        <p>La reseña es un documento que describe o resume los aspectos más salientes de un texto o de un contenido audiovisual, que permitirá a su lector conocer la obra o el contenido en cuestión con relativa profundidad, aún antes de tener acceso directo al mismo. El ejemplo más cotidiano lo encontramos cuando leemos una reseña sobre una película, en ese momento nos informamos sobre su argumento, y acudimos a la sala sabiendo de cierta manera de qué se tratará. </p>
        <p>Algo similar ha de suceder con quienes lean nuestras reseñas sobre cualquier otro texto escrito o elemento audiovisual, es decir, debemos pretender ofrecer una visión panorámica general y crítica sobre el objeto reseñado a través de un texto descriptivo, informativo, y argumentativo que ha de despertar el interés del lector a adentrarse más en el contenido reseñado.  </p>
        <p>Desde luego, dependiendo del recorrido académico y la capacidad argumentativa del autor de la reseña, estas pueden diferir mucho entre sí. Algunas pueden ser textos muy técnicos, dirigidos a entendidos en la materia, o en su defecto, serán textos divulgativos que exponen un punto de vista para que un público más general lo lea y comprenda.</p>
        <p>En síntesis, el propósito de una reseña suele ser el de brindar una interpretación, una evaluación o un vistazo al contenido referido, conforme al criterio de quien la escribe. Puede evaluarlo, alabarlo, o criticarlo; incluso puede llegar a otorgarle alguna calificación o puntuación para brindar al público algún tipo de sistema de apreciación que le permita decidir abordar o no el texto/documento original.</p>
        <p><strong>ENSAYO</strong></p>
        <p>Un ensayo es un escrito generalmente breve, que expone de manera sobria, profunda, y sensible, una interpretación personal sobre un tema en particular ya sea científico, filosófico, político, histórico, literario, etc. Has de tener muy en cuenta que al ensayo no lo define el objeto sobre el cual se escribe sino la actitud del escritor ante el mismo; por ello, un ensayo podría enfocarse en algo tan sencillo como una idea particular propuesta desde la experiencia y percepción propias hasta en una hipótesis sólida y científicamente sustentada.</p>
        <p>Un buen ensayo suele ser producto de serias meditaciones y reflexiones, lo esencial es su sentido de exploración, su audacia y su originalidad, es el resultado de la aventura del pensamiento.</p>
        <p>Ya que el ensayo es un tipo de texto de una característica más libre que el resumen y la reseña, no hay reglas específicas para describirlo, aunque sí hay ciertas generalidades a tener en cuenta. </p>
        <ul>
          <li>Libertad temática</li>
          <li>Voz identificable del autor</li>
          <li>Flexibilidad en el orden argumentativo </li>
          <li>Extensión variada</li>
          <li>Bibliografía y citas si vienen a lugar</li>
        </ul>
        <p>De acuerdo con el propósito del autor, un ensayo puede presentar al menos, dos formas distintas. </p>
        <ul>
          <li>Por una parte, algunos autores escogen una postura sobre un tema determinado para ser defendida a lo largo del texto. Para ello, el escritor proporciona pruebas o evidencias que sustentan su punto de vista, lo contra argumenta y finalmente llega a una conclusión. </li>
          <li>Por otro lado, el ensayo también se considera como un texto que surge a partir de una pregunta inicial, sin plantear previamente una tesis o una afirmación, sino que a través del texto se exploran diversas respuestas posibles para dicha pregunta. Esta alternativa plantea un problema que no se resuelve en el texto; la inferencia de las conclusiones son tarea para el lector.</li>
        </ul>
        <p>Existen diversos tipos de ensayos según la intención comunicativa del autor, y diversas fuentes autorizadas los han clasificado en cuatro grandes grupos que son los expositivos, argumentativos, críticos y poéticos. Pero es importante que tengas en cuenta que como TODO ensayo se basa en argumentos, todos ellos tienen un carácter expositivo y argumentativo a la vez, y al mismo tiempo son críticos, ya que juzgan una determinada cuestión. Al finalizar este video, tendrás la posibilidad de conocer un mini-módulo que te presentará tanto los componentes fundamentales de un ensayo como las características de cada uno de los tipos de ensayo aquí mencionados.</p>
        <p>Fuentes: </p>
        <ul>
          <li>https://cursos.clavijero.edu.mx/cursos/area-basica/005_cia/modulo5/documentos/Lectura_que_es_un_resumen.pdf</li>
          <li>https://concepto.de/resena/#ixzz6yjHxhxvf</li>
          <li>https://definicion.de/resena/</li>
          <li>https://www.up.edu.mx/sites/default/files/que_es_un_ensayo_y_como_se_hace._1.pdf</li>
        </ul>
      </div>
      `;
  }
  importCssFiles(){
    return [
        'generalStage.css|general'
    ]
}
}
stagePage.pageContainerSet('resumenResenaEnsayo',station2ContentClass_resumenResenaEnsayo);