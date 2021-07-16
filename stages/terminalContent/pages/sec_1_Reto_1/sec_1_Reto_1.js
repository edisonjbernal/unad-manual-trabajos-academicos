class terminalContentClass_sec_1_Reto_1 extends generalPage{
    constructor(pageName){
        super(pageName);
    }
    addCssClass(){
      return [
          'stage_general'
      ]
  }
  content(){
    /* */
    
    /* */

      return `
      <div class="header-h2"><h2>Selección múltiple</h2></div>
      <div class="text-general ">
          <p><strong>Tipo de pregunta: Selección múltiple (varias respuestas)</strong></p>
          <p>Como viste, los trabajos escritos solicitados por los docentes de tus espacios académicos pueden tener diferentes aspectos físicos estructurales dependiendo del tipo de trabajo requerido. No obstante, hay tres aspectos físicos esenciales que deberás mantener en todos tus trabajos.</p>
          <p><strong>¿Cuáles son estos tres aspectos?</strong></p>
          <p><strong>Escoge las tres opciones correctas de la lista a continuación:</strong></p>
          <form action="" id="form-terminalContent_Sec_1_Reto_1">
          <ul class="ul-input">
            <li>
              <input id="p1-terminalContent_Sec_1_Reto_1" name="p1-terminalContent_Sec_1_Reto_1" type="checkbox" value="2">
              <label for="p1-terminalContent_Sec_1_Reto_1"><strong>A. </strong>Preliminares</p></label>
            </li>
          </ul>
          <ul class="ul-input">
            <li>
              <input id="p2-terminalContent_Sec_1_Reto_1" name="p2-terminalContent_Sec_1_Reto_1" type="checkbox" value="1">
              <label for="p2-terminalContent_Sec_1_Reto_1"><strong>B. </strong>Prefacios</p></label>
            </li>
          </ul>
          <ul class="ul-input">
            <li>
              <input id="p3-terminalContent_Sec_1_Reto_1" name="p3-terminalContent_Sec_1_Reto_1" type="checkbox" value="1">
              <label for="p3-terminalContent_Sec_1_Reto_1"><strong>C. </strong>Prólogo y Epílogo</p></label>
            </li>
          </ul>
        <ul class="ul-input">
            <li>
              <input id="p4-terminalContent_Sec_1_Reto_1" name="p4-terminalContent_Sec_1_Reto_1" type="checkbox" value="2">
              <label for="p4-terminalContent_Sec_1_Reto_1"><strong>D. </strong>Cuerpo del texto académico</p></label>
            </li>
          </ul>
          <ul class="ul-input">
            <li>
              <input id="p5-terminalContent_Sec_1_Reto_1" name="p5-terminalContent_Sec_1_Reto_1" type="checkbox" value="1">
              <label for="p5-terminalContent_Sec_1_Reto_1"><strong>E. </strong>Introducción y conclusión</p></label>
            </li>
          </ul>
          <ul class="ul-input">
            <li>
              <input id="p6-terminalContent_Sec_1_Reto_1" name="p6-terminalContent_Sec_1_Reto_1" type="checkbox" value="2">
              <label for="p6-terminalContent_Sec_1_Reto_1"><strong>F. </strong>Referencias</p></label>
            </li>
          </ul>
          <ul class="ul-input">
            <li>
              <input id="p7-terminalContent_Sec_1_Reto_1" name="p7-terminalContent_Sec_1_Reto_1" type="checkbox" value="1">
              <label for="p7-terminalContent_Sec_1_Reto_1"><strong>G. </strong>Resumen</p></label>
            </li>
          </ul>
    
          <div class="text-center"><button type="button" class="btn-general btn-submit" onclick="questionsTerminalContent_Sec_1_Reto_1.checkboxVerify(3);" >Validar repuestas</button></div>
        </form>
      </div>
      <div class="text-center">
        <button class="btn-general btn-back" onclick="stages_terminalContent.menu.back()">Atrás</button>
        <button class="btn-general btn-next" onclick="stages_terminalContent.menu.next()">Siguiente</button>
      </div>
      
      `;
  }
  importCssFiles(){
    return [
        'generalStage.css|general'
    ]
    }        
}

stagePage.pageContainerSet('sec_1_Reto_1',terminalContentClass_sec_1_Reto_1);
 
let questionsTerminalContent_Sec_1_Reto_1 = new question_CheckboxVerifyClass('terminalContent_Sec_1_Reto_1');

questionsTerminalContent_Sec_1_Reto_1.feedback.correct="¡Correcto! Todo texto académico que presentes en la universidad debe cumplir con una estructura específica según el tipo de trabajo solicitado, pero siempre deberás incluir tres aspectos generales. En primer lugar, están los preliminares que pueden incluir la portada, contraportada, nota de aceptación, dedicatoria, entre otros. En segundo lugar, estará el abordaje formal de la temática específica del trabajo realizado también conocida como cuerpo del texto y, por último, viene una serie de referencias que sustentan el documento escrito.";
questionsTerminalContent_Sec_1_Reto_1.feedback.incorrect="Por favor, verifica las respuestas.";
questionsTerminalContent_Sec_1_Reto_1.add(
    'A. Preliminares.',
    '2',
    'Correcto',
    '---'
    );
questionsTerminalContent_Sec_1_Reto_1.add(
  'B. Prefacios.',
  '2',
  '--',
  'El prefacio es una sección que funciona como parte introductoria de una publicación. Es un preámbulo que se ubica en el inicio de un libro u otro tipo de trabajo impreso y que, por lo general, funciona como una especie de guía para el lector. El prefacio hace entonces parte de los preliminares de un texto. Este tipo de parte introductoria se consigue mayormente en obras literarias. En tu caso, el aspecto técnico preliminar para tus trabajos escritos se denominaría introducción. '
  );
questionsTerminalContent_Sec_1_Reto_1.add(
  'C. Prólogo y Epílogo.',
  '2',
  '--',
  'Estos dos aspectos hacen parte de obras literarias como la novela. El prólogo es una nota que precede al prefacio o introducción de un libro. Esta nota es normalmente escrita por un tercero, autor con mayor experiencia, en la que da una opinión, comentario o elogio al texto tras haberlo leído antes de su publicación. El epílogo, por el contrario, es un resumen breve de los acontecimientos o desenlace en una obra literaria y se ubica al final del texto. En tu caso, al hablar de textos académicos, no requieres el uso de un prólogo, prefacio o epílogo sino una introducción y una conclusión. La introducción es un aspecto preliminar y la conclusión hace parte estructural del cuerpo del texto académico.'
  );

questionsTerminalContent_Sec_1_Reto_1.add(
    'D. Cuerpo del texto académico.',
    '2',
    'Correcto',
    '---'
    );
questionsTerminalContent_Sec_1_Reto_1.add(
    'E. Introducción y conclusión.',
    '2',
    '--',
    'La introducción es un aspecto preliminar y la conclusión hace parte estructural del cuerpo del texto académico. La introducción presenta de antemano las ideas principales del texto, así como su importancia, generando de esta manera interés en el lector. La conclusión se sitúa al final del cuerpo del texto académico y busca cerrar el tema reiterando la idea principal del documento a manera de síntesis al tiempo que presenta la relevancia de la información contenida en el documento.'
);
questionsTerminalContent_Sec_1_Reto_1.add(
  'F. Referencias.',
  '2',
  'Correcto',
  '---'
  );
questionsTerminalContent_Sec_1_Reto_1.add(
  'G. Resumen.',
  '2',
  '--',
  'Este es un aspecto preliminar encontrado generalmente en reportes de investigación. El resumen presenta de forma sistemática la información más importante del estudio permitiendo al lector obtener una idea general sobre los objetivos de la investigación, el método, procedimientos e instrumentos utilizados para recolectar datos, los resultados obtenidos y la conclusión principal del estudio.'
);