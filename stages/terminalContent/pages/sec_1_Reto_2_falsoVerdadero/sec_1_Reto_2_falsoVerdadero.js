class terminalContentClass_sec_1_Reto_2_falsoVerdadero extends generalPage{
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
      <div class="header-h2"><h2>Falso / Verdadero</h2></div>
      <div class="text-general ">
          <p><strong>Tipo de pregunta: Falso / Verdadero</strong></p>
          <p>Como vimos anteriormente, hay unos aspectos técnicos que garantizan la uniformidad de los trabajos académicos. Estos aspectos buscan facilitar la lectura del texto y su almacenamiento en caso de ser requerida la impresión y archivo del documento, por ejemplo, trabajos de grado o reportes de investigación. Con esto en mente, contesta las siguientes preguntas de este segundo reto:</p>
          <p><strong>Decide si la afirmación a continuación es falsa o verdadera:</strong></p>
          
          <form action="" id="form-terminalContent_Sec_1_Reto_2_falsoVerdadero">
          <div class="drag-and-drop-element">
                            <p>Dentro de las regulaciones universitarias vimos que se permite el uso de las fuentes Verdana, Times New Roman, Calibri y Arial. Para facilitar la organización visual del cuerpo del texto se sugiere no combinar las fuentes.</p>
                            <div class="answer-text">
                            </div>
                            <select onchange="questionsTerminalContent_Sec_1_Reto_2_falsoVerdadero.selectVerify(this);" name="p1-theReviewOfTheLiteratureExercises_2" id="p1-theReviewOfTheLiteratureExercises_2" data-index="0">
                                <option value="">
                                    ---Seleccionar---
                                </option>
                                <option value="1">
                                    Verdadero
                                </option>
                                <option value="2">
                                    Falso
                                </option>
                            </select>
                        </div>
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

stagePage.pageContainerSet('sec_1_Reto_2_falsoVerdadero',terminalContentClass_sec_1_Reto_2_falsoVerdadero);
 
let questionsTerminalContent_Sec_1_Reto_2_falsoVerdadero = new questionsClass('terminalContent_Sec_1_Reto_2_falsoVerdadero');

questionsTerminalContent_Sec_1_Reto_2_falsoVerdadero.feedback.correct="¡Correcto! Todo texto académico que presentes en la universidad debe cumplir con una estructura específica según el tipo de trabajo solicitado, pero siempre deberás incluir tres aspectos generales. En primer lugar, están los preliminares que pueden incluir la portada, contraportada, nota de aceptación, dedicatoria, entre otros. En segundo lugar, estará el abordaje formal de la temática específica del trabajo realizado también conocida como cuerpo del texto y, por último, viene una serie de referencias que sustentan el documento escrito.<hr/><br/>¡Excelente! Has entendido entonces que cada trabajo académico que presentes en la UNAD puede requerir una estructura específica dependiendo del tipo de reporte escrito solicitado, pero siempre habrá unas secciones generales transversales a todos los documentos. Vamos a continuar con nuestro siguiente reto.";
questionsTerminalContent_Sec_1_Reto_2_falsoVerdadero.feedback.incorrect="Por favor, verifica las respuestas.";
questionsTerminalContent_Sec_1_Reto_2_falsoVerdadero.add(
    'Única pregunta',
    '2',
    'Excelente. Hay solamente tres fuentes autorizadas en las regulaciones universitarias: Times New Roman, Calibri y Arial. Puedes usar de manera exclusiva una sola fuente o las puedes combinar asegurándote de mantener la misma organización visual durante todo el cuerpo del documento. Es decir, puedes escoger una fuente para los títulos, otra para los subtítulos y otra para los pies de página, pies de gráficos o figuras.',
    'Recuerda que las únicas fuentes autorizadas en las regulaciones universitarias son: Times New Roman, Calibri y Arial. Puedes usar de manera exclusiva una sola fuente o las puedes combinar asegurándote de mantener la misma organización visual durante todo el cuerpo del documento. Es decir, puedes escoger una fuente para los títulos, otra para los subtítulos y otra para los pies de página, pies de gráficos o figuras.'
    );