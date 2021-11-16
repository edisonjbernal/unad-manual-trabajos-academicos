class station3ContentClass_tiposDeTrabajosInvestigativos extends generalPage{
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
      <h2>Proyectos Investigativos</h2>
      <video class="responsive" src="./images/trabajos-y-proyectos-investigativos/tiposDeTrabajosInvestigativos.mp4" controls="" controlslist="nodownload"></video>
      <div class="text-center">
        <button class="btn-general btn-next" onclick="stage.activity('menu_back')">Atrás</button>
        <button class="btn-general btn-next" onclick="stage.activity('menu_next')">Siguiente</button>
        <button class="btn-general btn-show-content" onclick="stage.activity('menu_showContentInText_none',this)">Mostrar en texto</button>
      </div>
      <div class="text-show-content">
        <h3>Transcripción del video</h3>
        <p>Antes de iniciar, debes tener muy en cuenta, que en el presente material te estamos indicando sobre los pasos del proceso investigativo, de los cuales algunos son partes del trabajo escrito como tal; sin embargo, este material no te indica cuáles son las partes del trabajo escrito que presentarás como documento de tu proyecto, dado que dichas partes ya fueron tratadas en estaciones previas del presente recurso. Así que iniciemos:</p>
        <p>Luego de que tu Anteproyecto sea aprobado por las o  los docentes a cargo de guiar tu trabajo investigativo dentro de tu programa académico, inicia el proceso investigativo de manera rigurosa, que si bien seguirá los lineamientos propuestos en el Anteproyecto, al ser la investigación un proceso de transformación constante, algunos aspectos pueden llegar a ser transformados. Esto solo se definirá en el transcurso del proceso.</p>
        
      </div>
      <div class="cards-audio-module cards-audio-module-version-2">
            <div class="cards-audio-container">
                <div class="card-audio">
                    <audio controls="" class="general">
                        <source src="./images/trabajos-y-proyectos-investigativos/tiposDeTrabajosInvestigativos_tematica.mp3" type="audio/mpeg">
                        Your browser does not support the audio tag.
                    </audio>
                <h3>Temática</h3>
                <p>La selección del tema de investigación es esencial antes, durante y después del proceso investigativo. Es importante seleccionar un tema de interés personal, que motive y que genere curiosidad en quien investiga. Además, el tema debe ser interesante para el campo académico en el que este se va a llevar a cabo, y especialmente, debe contribuir al entorno académico en el que la investigación se desarrollaría. El tema conlleva un contexto, una población, y puede determinar el tiempo que tomará la realización investigativa.</p>
                </div>
            </div>
            <div class="cards-audio-container">
                <div class="card-audio">
                    <audio controls="" class="general">
                        <source src="./images/trabajos-y-proyectos-investigativos/tiposDeTrabajosInvestigativos_preguntaInvestigativa.mp3" type="audio/mpeg">
                        Your browser does not support the audio tag.
                    </audio>
                <h3>La pregunta investigativa</h3>
                <p>Al hacer una pregunta investigativa debemos tener en cuenta: </p>
                <ul>
                    <li>¿Qué es lo que se va a comprobar con nuestra investigación? </li>
                    <li>¿Qué problema existe en un contexto determinado y cómo lo vamos a resolver?</li>
                </ul>
                <p>El planteamiento de la pregunta determinará la información que se requiere recolectar y el método a llevar a cabo, por tanto, es esencial que aquí se tengan en cuenta las preferencias personales, habilidades, y posibilidades del investigador/a.</p>
                </div>
            </div>
            <div class="cards-audio-container">
                <div class="card-audio">
                    <audio controls="" class="general">
                        <source src="./images/trabajos-y-proyectos-investigativos/tiposDeTrabajosInvestigativos_MarcoTeorico.mp3" type="audio/mpeg">
                        Your browser does not support the audio tag.
                    </audio>
                <h3>Marco Teórico</h3>
                <p>La realización del marco teórico nos permite responder a ¿Qué se conoce sobre el tema de investigación? es una parte del trabajo escrito y un paso fundamental de la investigación que hace referencia al conocimiento básico y especializado existente en torno al tema específico del proyecto, el cual orienta el proceso de investigación y en particular el análisis, interpretación y discusión de los resultados que se obtengan. Se constituye en la base o fundamentación científica y teórico-conceptual a partir de la cual se afronta el problema con la suficiencia requerida (Castillo, 2004, pág. 60). En el marco teórico es indispensable redactar coherentemente los elementos técnicos y conceptuales fundamentales para soportar la investigación.</p>
                </div>
            </div>
            <div class="cards-audio-container">
                <div class="card-audio">
                    <audio controls="" class="general">
                        <source src="./images/trabajos-y-proyectos-investigativos/tiposDeTrabajosInvestigativos_Recolecciondedatos.mp3" type="audio/mpeg">
                        Your browser does not support the audio tag.
                    </audio>
                <h3>Recolección de datos</h3>
                <p>La recolección de datos es uno de los procesos fundamentales en una investigación. Este proceso de obtención de información se realiza teniendo en cuenta los métodos y procedimientos propios del tipo de investigación que se está desarrollando. Aun cuando el equipo docente de investigación se encarga de orientar a los estudiantes en este quehacer, de manera general se menciona en este manual propio para la Facultad de Educación, que al realizar una investigación teórica los datos se centran en fuentes secundarias, mientras que en la investigación aplicada la recolección de datos se basa en trabajo de campo.</p>
                </div>
            </div>
            <div class="cards-audio-container">
                <div class="card-audio">
                    <audio controls="" class="general">
                        <source src="./images/trabajos-y-proyectos-investigativos/tiposDeTrabajosInvestigativos_Datos-de-primer-tipo.mp3" type="audio/mpeg">
                        Your browser does not support the audio tag.
                    </audio>
                <h3>Datos de primer tipo.</h3>
                <p>Son los datos que los estudiantes recolectan de primera mano, en su trabajo de campo a través de observaciones, entrevistas, aplicación de encuestas, o cualquier otro método orientado por sus docentes.</p>
                </div>
            </div>
            <div class="cards-audio-container">
                <div class="card-audio">
                    <audio controls="" class="general">
                        <source src="./images/trabajos-y-proyectos-investigativos/tiposDeTrabajosInvestigativos_Datos-de-segundo-tipo.mp3" type="audio/mpeg">
                        Your browser does not support the audio tag.
                    </audio>
                <h3>Datos de segundo tipo</h3>
                <p>Estos datos ya existen, y tienen que ver con la información que otros autores nos brindan sobre el tema, los textos, artículos y libros que nos documentan sobre el tema investigado.</p>
                </div>
            </div>
            <div class="cards-audio-container">
                <div class="card-audio">
                    <audio controls="" class="general">
                        <source src="./images/trabajos-y-proyectos-investigativos/tiposDeTrabajosInvestigativos_Analisis-de-datos.mp3" type="audio/mpeg">
                        Your browser does not support the audio tag.
                    </audio>
                <h3>Análisis de datos</h3>
                <p>Luego de recolectar toda la información relevante para la investigación, se realiza un análisis de todo lo recolectado. Esto se hace teniendo en cuenta instrumentos de investigación con los que la información se organiza, clasifica, y dependiendo de la orientación docente, se utiliza el método de análisis nos conlleva a obtener las conclusiones.</p>
                </div>
            </div>
            <div class="cards-audio-container">
                <div class="card-audio">
                    <audio controls="" class="general">
                        <source src="./images/trabajos-y-proyectos-investigativos/tiposDeTrabajosInvestigativos_Socializacion-de-resultados.mp3" type="audio/mpeg">
                        Your browser does not support the audio tag.
                    </audio>
                <h3>Socialización de los resultados</h3>
                <p>Un aspecto esencial en un proceso de investigación es la socialización de sus resultados, con el fin de que sean conocidos por la comunidad académica relacionada con nuestro tema investigativo, que puede analizar los aportes que nuestra investigación tiene
                    en el campo académico. Los resultados de nuestra investigación pueden servir de sustento para futuras investigaciones propias y/o de otras personas; así como pueden ser la orientación para el desarrollo de nuevos proyectos académicos; y además pueden ser reconocidos en la comunidad cuando se reportan en el informe escrito, en la sustentación final, en conferencias, y en publicaciones académicas.
                    </p>
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
        'cards-audio-container.css|general',
        'cards-audio-module-version-2.css|general'
    ]
}
}
stagePage.pageContainerSet('tiposDeTrabajosInvestigativos',station3ContentClass_tiposDeTrabajosInvestigativos);
