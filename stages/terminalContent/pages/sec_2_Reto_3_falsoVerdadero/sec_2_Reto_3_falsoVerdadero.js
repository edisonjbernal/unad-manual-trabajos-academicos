class terminalContentClass_sec_2_Reto_3_falsoVerdadero extends generalPage{
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
          <p><strong>Lee la afirmación a continuación y decide si es falsa o verdadera:</strong></p>
          
          <form action="" id="form-terminalContent_Sec_2_Reto_3_falsoVerdadero">
          <div class="drag-and-drop-element">
            <p>Las comunicaciones personales: correos electrónicos, chats, mensajes de texto, mensajes directos, entrevistas personales, discursos, ponencias, conferencias académicas no grabadas son fuentes que no pueden ser citadas dentro del cuerpo del texto ni referenciadas bibliográficamente al final del trabajo, por tanto, no debemos incluirlas en los trabajos escritos.</p>
                            <div class="answer-text">
                            </div>
                            <select onchange="questionsTerminalContent_Sec_2_Reto_3_falsoVerdadero.selectVerify(this);" name="p1-theReviewOfTheLiteratureExercises_2" id="p1-theReviewOfTheLiteratureExercises_2" data-index="0">
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

stagePage.pageContainerSet('sec_2_Reto_3_falsoVerdadero',terminalContentClass_sec_2_Reto_3_falsoVerdadero);
 
let questionsTerminalContent_Sec_2_Reto_3_falsoVerdadero = new questionsClass('terminalContent_Sec_2_Reto_3_falsoVerdadero');

questionsTerminalContent_Sec_2_Reto_3_falsoVerdadero.add(
    'Única pregunta',
    '2',
    `¡Correcto! Las comunicaciones personales son fuentes que pueden ser citadas, aunque no incluidas en la sección de referenciación bibliográfica. Para citar dichas fuentes tienes dos opciones:
    <ol>
        <li>Escribir la letra inicial del nombre de la fuente, el apellido, la indicación de que es una comunicación personal y la fecha más cercana posible al momento en que escuchaste el enunciado.</li>
        <li>Incluir el nombre en la redacción del texto y al final entre paréntesis la indicación de que es una comunicación personal y la fecha más cercana posible al momento en que escuchaste el enunciado.</li>
    </ol> `,
`¡Incorrecto! Recuerda, las comunicaciones personales son fuentes que pueden ser citadas, aunque no incluidas en la sección de referenciación bibliográfica. Para citar dichas fuentes tienes dos opciones:
<ol>
    <li>Escribir la letra inicial del nombre de la fuente, el apellido, la indicación de que es una comunicación personal y la fecha más cercana posible al momento en que escuchaste el enunciado.</li>
    <li>Incluir el nombre en la redacción del texto y al final entre paréntesis la indicación de que es una comunicación personal y la fecha más cercana posible al momento en que escuchaste el enunciado.</li>
</ol>`
    );