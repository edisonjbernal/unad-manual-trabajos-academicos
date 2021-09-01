class terminalContentClass_propiedadIntelectualYPlagio extends generalPage{
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
      <h2>Propiedad Intelectual y Plagio</h2>
      <video class="responsive" src="./images/aspectos-tecnicos/propiedad-intelectual-y-referenciacion/propiedadIntelectualYPlagio.mp4" controls="" controlslist="nodownload"></video>
      <div class="text-center">
        <button class="btn-general" onclick="stages_terminalContent.menu.back()"">Atrás</button>
        <button class="btn-general" onclick="stages_terminalContent.menu.next()"">Siguiente</button>
        <button class="btn-general btn-show-content" onclick="stages_terminalContent.menu.showContentInText(this,'none')">Mostrar en texto</button>
      </div>
      <div class="text-show-content">
        <h3>Transcripción del video</h3>
        <p><strong>Propiedad Intelectual y Plagio</strong></p>
        <p>Hablar de la propiedad intelectual es hablar de los derechos que posee una persona sobre sus propias creaciones. Los pensamientos, las ideas, las palabras, las percepciones, como todo tipo de creaciones son individuales, y cuando estas se hacen públicas tienen una voz propia antes de ser reconocidas por otros.</p>
        <p>En el contexto actual, es extremadamente importante conocer qué es la propiedad intelectual y su relevancia en un mundo en el que el flujo de la información es tan grande gracias a las tecnologías de la información y la comunicación. Esto le permitirá a todo profesional tanto en formación como en ejercicio de su labor, llevar a cabo trabajos de alta calidad y rigor investigativo no solo de orden escrito sino también de carácter audiovisual. A continuación te presentaré algunos conceptos clave sobre este tema, y encontrarás diferentes maneras correctas de citar y referenciar los estudios, teorías, análisis, y trabajos hechos previamente por otros expertos cuando consideres que ellos aportarán información valiosa para tus trabajos.</p>
        <p>Si las ideas escritas o expresadas por otros te parecen interesantes y quieres replicarlas en un trabajo académico, siempre deberás hacer referencia bien sea al texto de donde las obtuviste y a quien sea que las haya escrito, de otro modo incurrirás en un Plagio. Algunos aspectos que debes tener claro sobre el plagio son:</p>
        <ul>
            <li>
            El plagio consiste en utilizar las palabras o las ideas de otros sin reconocer su autoría
            </li>
            <li>El plagio puede ser total o parcial </li>
            <li>Hay plagio cuando copio y pego de internet sin referenciar</li>
            <li>Hay plagio cuando copio literalmente de un texto, de un libro o publicación sin hacer la referenciación </li>
            <li>Hay plagio cuando tomo el texto y cambio algunas palabras y lo presento con autoría propia </li>
            <li>Hay plagio cuando tomo ideas de otras personas y las reexpreso como mías</li>
        </ul>
        <p>Siendo así, es necesario tener en cuenta que al llevar a cabo un Trabajo Académico debemos hacer claridad de dónde viene la información que se está plasmando, mencionar si las ideas fueron presentadas previamente en otro escrito, contexto, u obra, y si provienen de alguien más; si no hay referencia alguna, se da por sentado que las palabras escritas son de autoría propia.</p>
        <p>El uso masivo de la tecnología y el acceso sencillo a la información global que actualmente enfrenta el mundo genera la posibilidad de acceder a múltiples ideas de cualquier tema, lo que infortunadamente es copiado por muchos y presentado como propio. Es por esto que la Universidad Nacional Abierta y a Distancia en su Acuerdo No.006 del 26 de agosto de 2008 aprueba el Estatuto de Propiedad Intelectual en el que se establecen sanciones civiles, penales y administrativas, en todos los reglamentos de la Universidad, para quien llegare a violar algún derecho de Propiedad Intelectual.</p>
        <p>Si bien sabemos que acceder a la información, copiarla, y presentarla como propia puede ser sencillo, identificar un plagio también lo es, ya sea por el conocimiento previo del tema que tienen quienes leen un escrito, por la experiencia académica profesoral, y por los avances tecnológicos con los que se pueden detectar tanto paráfrasis como escritos puntuales de un autor.</p>
        <p>Por todo lo anterior, si para una o un estudiante es importante hacer referencia a la creación previa de otro autor o autores porque esto contribuye en el desarrollo académico de su trabajo o porque más personas contribuyeron en el quehacer de su escrito, puede hacerlo a través del uso de la Citación y la Referenciación.</p>
        <p><strong>CITACIÓN:</strong></p>
        <p>Corresponde a incluir o redactar dentro del cuerpo de tu trabajo apartes, fragmentos, y expresiones hechas por otras personas que dan sustento a tus ideas.</p>
        <p><strong>REFERENCIACIÓN:</strong></p>
        <p>Consiste en incluir en la parte final de tu trabajo o documento el listado de fuentes que citaste a lo largo de tu texto. En ella debes proveer más detalles de la fuente que en la citación.</p>
        <p>Con la citación y la referenciación, mostramos en nuestros trabajos académicos que no nos estamos apropiando de ideas que no son nuestras, que no las estamos usurpando, ni que, como lo contempla la ley colombiana, estamos robando la creación intelectual que no es propia, pero sí que nos estamos soportando en otras ideas para reforzar las propias.</p>
      </div>
      `;
  }
  importCssFiles(){
    return [
        'generalStage.css|general'
    ]
}
}
stagePage.pageContainerSet('propiedadIntelectualYPlagio',terminalContentClass_propiedadIntelectualYPlagio);