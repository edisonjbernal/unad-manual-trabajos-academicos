class terminalContentClass_sec_2_Reto_4_falsoVerdadero extends generalPage{
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
          
          <form action="" id="form-terminalContent_Sec_2_Reto_4_falsoVerdadero">
          <div class="drag-and-drop-element">
            <p>La <strong>referenciación bibliográfica</strong> y la <strong>bibliografía</strong> no son lo mismo. La primera corresponde al listado de publicaciones citadas a lo largo del cuerpo de tu documento y que sirvieron de argumentación en el desarrollo de este. La segunda sirve como fundamento o como propuesta de lecturas posteriores, y en ellas puedes incluir publicaciones que intrínsecamente sugieres al lector abordar, pero que no necesariamente han sido citados dentro del trabajo.</p>
                            <div class="answer-text">
                            </div>
                            <select onchange="questionsTerminalContent_Sec_2_Reto_4_falsoVerdadero.selectVerify(this);" name="p1-theReviewOfTheLiteratureExercises_2" id="p1-theReviewOfTheLiteratureExercises_2" data-index="0">
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

stagePage.pageContainerSet('sec_2_Reto_4_falsoVerdadero',terminalContentClass_sec_2_Reto_4_falsoVerdadero);
 
let questionsTerminalContent_Sec_2_Reto_4_falsoVerdadero = new questionsClass('terminalContent_Sec_2_Reto_4_falsoVerdadero');

questionsTerminalContent_Sec_2_Reto_4_falsoVerdadero.add(
    'Única pregunta',
    '1',
    `¡Correcto! La referenciación bibliográfica es un listado organizado de forma alfabética que brinda información completa sobre las fuentes citadas en el texto. Este listado no solo respeta la propiedad intelectual de los autores, sino que también le permite al lector identificar y localizar las fuentes originales en caso de querer revisarlas. La bibliografía, por el contrario, La segunda sirve como fundamento o como propuesta de lecturas posteriores, y en ellas puedes incluir publicaciones que intrínsecamente sugieres al lector abordar, pero que no necesariamente han sido citados dentro del trabajo.`,
`Recuerda que la referenciación bibliográfica y la bibliografía no son lo mismo. La referenciación bibliográfica es un listado organizado de forma alfabética que brinda información completa sobre las fuentes citadas en el texto. Este listado no solo respeta la propiedad intelectual de los autores, sino que también le permite al lector identificar y localizar las fuentes originales en caso de querer revisarlas. La bibliografía, por el contrario, sirve como fundamento o como propuesta de lecturas posteriores, y en ellas puedes incluir publicaciones que intrínsecamente sugieres al lector abordar, pero que no necesariamente han sido citados dentro del trabajo.`
    );
