class station3ContentClass_monografias extends generalPage{
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
      <h2>Monografías</h2>
      <video class="responsive" src="./images/trabajos-y-proyectos-investigativos/monografias.mp4" controls="" controlslist="nodownload"></video>
      <div class="text-center">
        <button class="btn-general btn-next" onclick="stage.activity('menu_back')">Atrás</button>
        <button class="btn-general btn-next" onclick="stage.activity('menu_next')">Siguiente</button>
        <button class="btn-general btn-show-content" onclick="stage.activity('menu_showContentInText_none',this)">Mostrar en texto</button>
      </div>
      <div class="text-show-content">
        <h3>Transcripción del video</h3>
        <p>Antes de iniciar, debes tener muy en cuenta, que en el presente material te estamos indicando sobre los pasos del proceso investigativo, de los cuales algunos son partes del trabajo escrito como tal; sin embargo, este material no te indica cuáles son las partes del trabajo escrito que presentarás como documento de tu proyecto, dado que dichas partes ya fueron tratadas en Estaciones previas del presente recurso. Así que iniciemos:
          </p>
          <p>La Monografía es el desarrollo descriptivo, crítico y analítico de un tema específico, que se realiza a partir de la recolección de información de diferentes fuentes académicas que profundizan el tema seleccionado.</p>
        <p>Las etapas básicas para llevar a cabo la monografía son:</p>
        <ul>
          <li>Selección del tema.</li>
          <li>Recolección de la información.</li>
          <li>Selección crítica de la información recolectada.</li>
          <li>Organización de fichas de registro.</li>
          <li>Elaboración de fichas de trabajo y Análisis de datos.</li>
          <li>Redacción del Resumen Analítico.</li>
          <li>Ajustes a partir de las observaciones docentes/jurados del trabajo.</li>
        </ul>
        <p><strong>Selección del tema.</strong></p>
        <p>La monografía es un trabajo académico informativo que se enfatiza en un solo tema. En esta se reúnen diferentes fuentes de consulta que son analizadas críticamente por quien realiza el trabajo. De allí que antes de empezar el desarrollo de este tipo de trabajo académico, es importante saber qué tema queremos analizar, cuáles elementos del tema nos interesan, y qué tipo de información y dónde la puedo encontrar para llevar a cabo mi trabajo.</p>
        <p><strong>Recolección de la información.</strong></p>
        <p>La información del tema debe ser rigurosa y lógicamente orientada al objetivo de mi trabajo, así que es necesario preguntarse ¿con qué fin quiero presentar la información relacionada con mi tema?. Al tener el objetivo claro la información se enfoca, y así es más fácil definir qué buscar y dónde realizar la búsqueda.</p>
        <p><strong>Selección crítica de la información recolectada.</strong></p>
        <p>Normalmente la información que se recolecta debe ser analizada nuevamente para delimitar exactamente cuál responde al objetivo propuesto y cuál debe ser archivada. Este ejercicio además orienta a las/los estudiantes con respecto a qué información adicional puede ser necesaria para llevar a cabo un análisis crítico de los datos, y en algunos casos, genera nuevos objetivos específicos que derivan del proceso monográfico.</p>
        <p><strong>Organización de fichas de registro.</strong></p>
        <p>Antes de analizar los datos recolectados es necesario organizarlos según el tipo de fuentes consultadas de donde estos se obtuvieron. Este ejercicio deriva a la creación completa de las Referencias finales del trabajo, y se clasifican en: Referencias bibliográficas, videográficas, audiográficas, de hemeroteca, iconográficas, o cualquier tipo de referencia adicional que se requiera acorde con las orientaciones docente.</p>
        <p><strong>Elaboración de fichas de trabajo y Análisis de datos.</strong></p>
        <p>Dado que para la realización de la monografía se recoge información de diferentes tipos de referencias (ver organización de fichas de registro), quien realiza la monografía debe definir de qué manera presentar la información proveniente de otras/otros autores. Dicha presentación se puede hacer a través de Resúmenes, Paráfrasis, Citaciones textuales, y/o comentarios sobre el tema. Cabe mencionar que la elaboración de cada trabajo puede variar, y de ahí la orientación docente es esencial para definir qué, cómo y cuántos tipos de fichas se pueden incluir en la escritura del trabajo final.</p>
        <p><strong>Redacción del Resumen Analítico.</strong></p>
        <p>El resumen analítico es la presentación general del desarrollo del trabajo, que puede ser de 4 a 8 páginas, o lo definido según la orientación docente. En este se presenta de manera general el título del trabajo, su objetivo general y los propósitos específicos; además se demuestran los conocimientos obtenidos, el tipo de experiencia y los aciertos y desaciertos que se presentaron en el progreso de la Monografía, para finalmente exponer las conclusiones del trabajo.</p>
        <p><strong>Ajustes a partir de las observaciones docentes/jurados del trabajo.</strong></p>
        <p>Como estudiantes en formación, es importante tener en cuenta que los ejercicios que requieren cualquier tipo de investigación siempre necesitan verificación, ajustes y la observación docente que con su experiencia investigativa solicita ajustes para que el trabajo definitivo responda ciertamente al objetivo propuesto.</p>
      </div>
      `;
  }
  importCssFiles(){
    return [
        'generalStage.css|general'
    ]
}
}
stagePage.pageContainerSet('monografias',station3ContentClass_monografias);