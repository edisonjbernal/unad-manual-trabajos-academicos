class terminalContentClass_preliminares extends generalPage{
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
      <h2>Preliminares</h2>
      <video class="responsive" src="./images/aspectos-tecnicos/aspectos-generales/preliminares.mp4" controls="" controlslist="nodownload"></video>
      <div class="text-center">
        <button class="btn-general" onclick="stages_terminalContent.menu.back()"">Atrás</button>
        <button class="btn-general" onclick="stages_terminalContent.menu.next()"">Siguiente</button>
        <button class="btn-general btn-show-content" onclick="stages_terminalContent.menu.showContentInText(this,'none')">Mostrar en texto</button>
      </div>
      <div class="text-show-content">
        <h3>Transcripción del video</h3>
        <p>Los elementos preliminares al cuerpo de los trabajos escritos son relevantes en cuanto a que facilitan la prelectura del texto, despiertan el interés, y le facilitan al lector un análisis de pertinencia de los contenidos en relación con las razones que le motivan a leerlo. Te invito a tomar atenta nota de la información que compartiremos a continuación:</p>
        <p><strong>Portada.</strong></p>
        <p>La portada es la carta de presentación de un trabajo escrito. Allí se encuentra el nombre del trabajo, nombre o nombres de los autores, nombre de la Universidad, nombre del programa académico al que pertenece quien realiza el trabajo, ciudad, y año de elaboración. Indiferente del nivel académico, Grado o Posgrado, todos los trabajos académicos de la UNAD tienen la misma estructura de portada que se verás a continuación:</p>
        <p>Título</p>
        <p>El título debe ir en negrilla y minúscula, manejando la mayúscula en la inicial de cada palabra (excepto preposiciones y conjunciones).</p>
        <p>Nombre del Autor</p>
        <p>El nombre del autor NO va en negrilla. Si son dos autores, los nombres deberán ir en la misma línea y se unirán con la conjunción “y”.</p>
        <p>En la parte inferior de la portada se incluyen en su orden:</p>
        <ul>
            <li>Nombre de la institución</li>
            <li>Nombre de la Escuela y/o dependencia</li>
            <li>Nombre del programa</li>
            <li>Ciudad y año (separados por coma)</li>
        </ul>
        <p>En esta información también se maneja la mayúscula en la inicial de cada palabra (exceptuando las preposiciones y conjunciones).</p>
        <p><strong>Contraportada.</strong></p>
        <p>La Contraportada hace parte únicamente de las Monografías y Tesis de grado; contendrá información similar a la de la portada, solo que en la Contraportada se incluyen además el título universitario por el que opta quien realizó formalmente el trabajo académico, y el nombre y título académico del o la docente que haya dirigido el proyecto.</p>
        <p><strong>Nota de aceptación.</strong></p>
        <p>Por normatividad de ICONTEC, un trabajo para optar a título de posgrado siempre debe tener una página de aceptación final en la que se registran las firmas de quienes sirven como jurados de un trabajo investigativo. Para ella, la UNAD maneja el formato que estás observando en este momento, el cual contiene:</p>
        <ul>
            <li>Espacio para proveer breve concepto en torno al trabajo o proyecto investigativo.</li>
            <li>Espacio para escribir nombre del presidente del jurado.</li>
            <li>Espacio para escribir el nombre del primer jurado</li>
            <li>Espacio para escribir el nombre del segundo jurado</li>
            <li>Ciudad y año (separados por coma)</li>
        </ul>
        <p><strong>Dedicatoria.</strong></p>
        <p>La dedicatoria es una página opcional que puede hacer parte de los trabajos investigativos realizados para optar a un título académico, básicamente para las tesis de grado, y que también puede ser incluida en los Libros. En esta se escribe un texto corto de máximo dos (2) párrafos dedicando la realización del trabajo ya finalizado. <strong>Acorde con las reglas de la UNAD, el texto debe ser centrado y a manera de párrafo general de un escrito académico.</strong></p>
        <p><strong>Presentación de línea y grupo de investigación.</strong></p>
        <p>Todo trabajo que conlleve a un proceso investigativo, realizado como Opción de Grado, debe hacer parte de una de las líneas de Investigación propuestas por la Universidad, donde a su vez pertenecen grupos investigativos que serán consolidados con las investigaciones de los estudiantes unadistas. La información de la línea y grupo investigativo se registra en una hoja con el siguiente formato:</p>
        <ul>
            <li>Nombre de la Institución (en mayúscula sostenida)</li>
            <li>Nombre completo del Rector</li>
            <li>Nombre completo del Vicerrector(a) Académico(a)</li>
            <li>Nombre completo del Decano(a) de Escuela</li>
            <li>Nombre completo del líder nacional del programa</li>
            <li>Nombre de la línea de investigación</li>
            <li>Nombre del grupo y/0 semillero de investigación</li>
            <li>Nombre completo del director del trabajo de grado</li>
            <li>Ciudad y año (separado por coma)</li>
        </ul>
        <p>Toda la información va centrada, los subtítulos se escriben en negrilla, y los nombres sin negrilla.</p>
        <p><strong>Resumen y Abstract.</strong></p>
        <p>A través del resumen quien lee un trabajo investigativo obtiene una idea general de todo el documento y sus temas; esto sirve de guía para decidir leer parcial, puntual, o completamente un trabajo académico.</p>
        <p>El resumen se presenta en un escrito de máximo 400 palabras, que por normatividad de archivo debe ser traducido al idioma inglés bajo el nombre equivalente en lengua inglesa conocido como Abstract. En el resumen se incluyen los aspectos más relevantes de la investigación. Debe contener mínimamente el tema de investigación, los participantes, el método, y una perspectiva global de los resultados, y las conclusiones. También se pueden incluir implicaciones de la investigación y las conexiones futuras con base en los hallazgos. A manera de proporcionar ideas más puntuales sobre el documento, al finalizar el resumen se escriben palabras claves, tanto en idioma extranjero como en español, que sean esenciales para el contenido del escrito.</p>
        <p>El resumen va ubicado antes de iniciar el Primer Capítulo del documento, en una hoja exclusiva para este escrito. Como título de la página se debe escribir la palabra <strong>Resumen</strong> siguiendo las orientaciones de Título de Primer Nivel (Ver sección “Titulación”). El texto va en un nuevo renglón debajo del título <strong><u>sin sangría de inicio de texto</u></strong>. El <strong><i>Abstract</i></strong> sigue estas mismas características, y se ubica como un párrafo escrito debajo del texto resumen.</p>
        <p>La traducción al idioma inglés puede reemplazarse por una de otro idioma acorde a las orientaciones docentes. En algunas ocasiones se pueden hacer dos abstracts en sendos idiomas extranjeros. <strong>Es importante resaltar que independientemente de la lengua extranjera de la traducción, el escrito debe ser revisado y corregido por una persona experta en el idioma seleccionado. No debe hacerse traducción usando traductores automáticos</strong>, pues estos incurren en múltiples errores lingüísticos.</p>
        <p>Las <strong>palabras claves</strong> (en el resumen) y <strong>Key Words</strong> (en el abstract) van ubicadas como un nuevo renglón después del párrafo siguiendo las orientaciones de Título de Tercer Nivel.</p>
      </div>
      `;
  }
  importCssFiles(){
    return [
        'generalStage.css|general'
    ]
}
}
stagePage.pageContainerSet('preliminares',terminalContentClass_preliminares);