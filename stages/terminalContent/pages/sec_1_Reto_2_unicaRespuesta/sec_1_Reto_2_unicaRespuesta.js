class terminalContentClass_sec_1_Reto_2_unicaRespuesta extends generalPage{
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
      <div class="header-h2"><h2>Única la respuesta</h2></div>
      <div class="text-general ">
          <p><strong>Tipo de pregunta: Selección múltiple (una (1) única respuesta)</strong></p>
          <p>Por último, hablemos de las márgenes. Recuerda que su uso es esencial pues reflejan el orden del escrito que quieres presentar, y además orientan al lector al hacer pausas para llevar a cabo una mejor comprensión de las ideas. <strong>Todos los trabajos escritos académicos de la UNAD deben tener un espacio de _______________.</strong></p>
          <p><strong>Escoge la opción correcta:</strong></p>
          <form action="" id="form-terminalContent_Sec_1_Reto_2_unicaRespuesta">
          <ul class="ul-input">
              <li>
                  <input 
                    id="p1-1-terminalContent_Sec_1_Reto_2_unicaRespuesta" name="p1-terminalContent_Sec_1_Reto_2_unicaRespuesta"
                    type="radio"
                    value="1">
                  <label for="p1-1-terminalContent_Sec_1_Reto_2_unicaRespuesta">
                    <strong> Opción 1:</strong> 3 cm en todos los costados de las hojas.
                  </label>
              </li>
              <li>
                  <input 
                    id="p1-2-terminalContent_Sec_1_Reto_2_unicaRespuesta" name="p1-terminalContent_Sec_1_Reto_2_unicaRespuesta"
                    type="radio"
                    value="2">
                  <label for="p1-2-terminalContent_Sec_1_Reto_2_unicaRespuesta">
                    <strong> Opción 2:</strong> 2,54 cm en todos los costados de las hojas.
                  </label>
              </li>
              <li>
                  <input 
                    id="p1-3-terminalContent_Sec_1_Reto_2_unicaRespuesta" name="p1-terminalContent_Sec_1_Reto_2_unicaRespuesta"
                    type="radio"
                    value="3">
                  <label for="p1-3-terminalContent_Sec_1_Reto_2_unicaRespuesta">
                    <strong> Opción 3:</strong> 3 cm en costados superior e inferior y 2,54 cm en los costados laterales.
                  </label>
              </li>
              <li>
                  <input 
                    id="p1-4-terminalContent_Sec_1_Reto_2_unicaRespuesta" name="p1-terminalContent_Sec_1_Reto_2_unicaRespuesta"
                    type="radio"
                    value="4">
                  <label for="p1-4-terminalContent_Sec_1_Reto_2_unicaRespuesta">
                    <strong> Opción 4:</strong> 2,54 cm en costados superior e inferior y 3 cm en los costados laterales.
                  </label>
              </li>
          </ul>
         
          
          <div class="text-center">
            <button 
            onclick="questionsTerminalContent_Sec_1_Reto_2_unicaRespuesta.verifyAnswers()"
            type="button" class="btn-general btn-submit" >Validar repuesta</button>
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

stagePage.pageContainerSet('sec_1_Reto_2_unicaRespuesta',terminalContentClass_sec_1_Reto_2_unicaRespuesta);
 
let questionsTerminalContent_Sec_1_Reto_2_unicaRespuesta = new questionsClass('terminalContent_Sec_1_Reto_2_unicaRespuesta',true);

questionsTerminalContent_Sec_1_Reto_2_unicaRespuesta.feedback.correct="¡Correcto! Todos los trabajos escritos académicos de la UNAD deben tener un espacio de 2,54 cm en todos los costados de las hojas.";
questionsTerminalContent_Sec_1_Reto_2_unicaRespuesta.feedback.incorrect="¡Incorrecto! Recuerda que todos los trabajos escritos académicos de la UNAD deben tener un espacio de 2,54 cm en todos los costados de las hojas.";
questionsTerminalContent_Sec_1_Reto_2_unicaRespuesta.add(
    '1.',
    '2',
    'Correcto',
    'Incorrecto'
    );
