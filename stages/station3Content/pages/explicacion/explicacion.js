class station3ContentClass_explicacion extends generalPage{
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
      <h2>Anteproyecto de Trabajos y Trabajos Investigativos</h2>
      <video class="responsive" src="./images/trabajos-y-proyectos-investigativos/Anteproyecto-de-Trabajos-y-Trabajos-Investigativos.mp4" controls="" controlslist="nodownload"></video>
      <div class="text-center">
        <button class="btn-general btn-next" onclick="stage.activity('menu_back')">Atrás</button>
        <button class="btn-general btn-next" onclick="stage.activity('menu_next')">Siguiente</button>
        <button class="btn-general btn-show-content" onclick="stage.activity('menu_showContentInText_none',this)">Mostrar en texto</button>
      </div>
      <div class="text-show-content">
        <h3>Transcripción del video</h3>
        <p><strong>Esteban:</strong> A continuación, vamos a presentarte en detalle los elementos fundamentales para comprender la naturaleza y estructura de los trabajos investigativos dentro de la Universidad Nacional Abierta y a Distancia. Por favor toma atenta nota de toda la información que te compartiremos a partir de este momento, y no dudes en pausar y devolver el video cuantas veces te sea necesario para apuntar o reafirmar sobre cualquiera de los temas que te trataremos a continuación. </p>
        <p>Para iniciar, reconozcamos los tres tipos más comunes de investigación dentro de nuestra comunidad académica universitaria: </p>
        <p><strong>Investigación Cualitativa. </strong></p>
        <p>Las carreras académicas que tienden a realizar este tipo de investigaciones en la UNAD son las Ciencias Humanas y Sociales. En este tipo de investigación el investigador/a es quien directamente recoge la información y analiza sus datos de manera interpretativa y subjetiva. Su análisis no se basa en números sino en razonamiento valorativo de entrevistas, referencias bibliográficas, y observación directa que realiza el/la investigador/a.</p>
        <p><strong>Investigación Cuantitativa.</strong></p>
        <p>Este tipo de investigación es más comúnmente desarrollada por las carreras académicas de Ciencias Exactas, cuyo fin es obtener resultados numéricos y medibles; de tal manera que la estadística y la interpretación de resultados muy precisos y objetivos son la constante a ser contrastada para ratificar o desconsiderar la hipótesis propuesta como solución del problema a investigar.</p>
        <p><strong>Investigación Documental.</strong></p>
        <p>El fin de esta investigación es que la información recolectada se imprima en documentos disponibles socialmente como libros, artículos y medios audiovisuales que al ser expuestos logran crear nuevos enfoques académicos, y/o la ampliación del conocimiento en temas que académicamente quieren ser presentados socialmente para que posteriormente sean analizados, criticados, y reinterpretados</p>
        <p>Indiferente del tipo de investigación que decidamos o debamos desarrollar, recuerda que todo proyecto tiene unos pasos fundamentales para ser desarrollado. Y estos son:</p>
        <p class="text-center"><strong>ANTEPROYECTO DE UN TRABAJO ACADÉMICO INVESTIGATIVO</strong></p>
        <p>El anteproyecto es la parte inicial de un trabajo investigativo de toda índole, en este se plantean el tema a desarrollar, los objetivos que se quieren lograr, la manera como se planea llevar a cabo y la duración que la investigación puede tener. Todo lo anterior basado en la justificación exacta para llevar a cabo la investigación en sí. A continuación se encuentran apartes generales de un Anteproyecto, que requieren siempre de la orientación docente, especialmente para estudiantes que inician su carrera investigativa desde la academia. </p>
        <p><strong>Planteamiento del problema</strong></p>
        <p>Toda investigación tiene como finalidad resolver un problema, dar solución a un aspecto que aún no ha sido investigado, o por lo menos no de la manera en la que una persona lo requiere. Así, la parte inicial de un anteproyecto es escoger un tema a investigar, analizar qué aspecto de este tema no ha sido investigado y en qué contexto, y plantear la manera como dicho aspecto será resuelto y el porqué.</p>
        <p><strong>Justificación</strong></p>
        <p>La justificación responde al porqué un tema debe ser investigado, señalando las razones por las que la investigación debe desarrollarse, y qué intereses personales impulsan al desarrollo de esta. Además, indica la singularidad de esta investigación y el enfoque metodológico que el trabajo abordará, demostrando así la relevancia y validez que tiene el desarrollar la investigación en el campo académico donde esta se llevaría a cabo.</p>
        <p><strong>Antecedentes o estado del arte</strong></p>
        <p>Al iniciar un proceso investigativo es importante describir antecedentes teóricos que el tema escogido probablemente ya haya tenido, es decir, revisar y presentar investigaciones previas que hayan sido realizadas en torno al tema escogido. A partir de estos antecedentes, el/la investigador/a presenta el aspecto diferenciador que su investigación tendrá, las características nuevas que su investigación podría desarrollar, y el aporte adicional que su investigación tendría en relación con las previamente realizadas. A este proceso se le denomina también estado del arte.</p>
        <p><strong>Objetivos</strong></p>
        <p>Al plantear el objetivo de la investigación, los/las estudiantes demuestran claridad de cuál es la finalidad para llevar a cabo su investigación. Cuáles son las acciones concretas que desean desarrollar, y las metas propuestas para que la investigación llegue a buen término. El trabajo investigativo presenta un objetivo general que es el resultado final que los/las estudiantes quieren obtener al realizar la investigación, y unos objetivos específicos en los que se describen pequeñas acciones relevantes y necesarias para poder cumplir con el objetivo general.</p>
        <p><strong>Metodología</strong></p>
        <p>Dependiendo del tipo de investigación, cada una tiene diferentes métodos para obtener, analizar y presentar los resultados analizados. En la metodología se describe el tipo de método a utilizar y los procedimientos que se llevarán a cabo para lograr alcanzar el objetivo propuesto.</p>
        <p><strong>Bibliografía inicial</strong></p>
        <p>Se presentan puntualmente los libros, artículos, y textos en general que fueron consultados para el desarrollo del anteproyecto.</p>
        <p><strong>Cronograma</strong></p>
        <p>Al ser un plan a desarrollarse, la investigación debe plantear las actividades que se van a realizar en un tiempo determinado, así como los costos que esta puede implicar si institucionalmente así lo requiere. De este modo estudiantes y docentes pueden tener claridad frente a fechas tentativas de finalización del trabajo investigativo, teniendo en cuenta la duración del Programa Académica al que pertenecen los/las estudiantes investigadores.</p>
        <p><strong>Título</strong></p>
        <p>Si bien el título es la primera carta de presentación de un trabajo académico, luego de llevar a cabo un Anteproyecto concienzudo, se puede plantear con más exactitud el título en sí del trabajo académico, pues en este se describe de manera general el objetivo, contenido, y población de la investigación.</p>
      </div>
      `;
  }
  importCssFiles(){
    return [
        'generalStage.css|general'
    ]
}
}
stagePage.pageContainerSet('explicacion',station3ContentClass_explicacion);