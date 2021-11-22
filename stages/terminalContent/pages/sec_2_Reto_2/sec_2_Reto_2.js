class terminalContentClass_sec_2_Reto_2 extends generalPage{
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
      <div class="header-h2"><h2>Selección múltiple (más de una respuesta)</h2></div>
      <div class="text-general ">
          <p><strong>Tipo de pregunta: Selección múltiple (más de una respuesta)</strong></p>
          <p>¿Cuáles son los objetivos a tener en cuenta al utilizar la estrategia de citación en un trabajo escrito?.</p>
          <p><strong>Más de una opción es posible.</strong></p>
          <form action="" id="form-terminalContent_Sec_2_Reto_2">
          <ul class="ul-input">
            <li>
              <input id="p1-terminalContent_Sec_2_Reto_2" name="p1-terminalContent_Sec_2_Reto_2" type="checkbox" value="1">
              <label for="p1-terminalContent_Sec_2_Reto_2"><strong>A. </strong>Replicar las ideas escritas o expresadas por otros y que te parecen interesantes de manera que el lector de por sentado que las palabras escritas son de autoría propia.</p></label>
            </li>
          </ul>
          <ul class="ul-input">
            <li>
              <input id="p2-terminalContent_Sec_2_Reto_2" name="p2-terminalContent_Sec_2_Reto_2" type="checkbox" value="2">
              <label for="p2-terminalContent_Sec_2_Reto_2"><strong>B. </strong>Aportar sustento teórico que valide las propuestas que haces en tu trabajo y dar la capacidad al texto de interactuar con trabajos previos sobre el mismo tema o temas afines.</p></label>
            </li>
          </ul>
          <ul class="ul-input">
            <li>
              <input id="p3-terminalContent_Sec_2_Reto_2" name="p3-terminalContent_Sec_2_Reto_2" type="checkbox" value="2">
              <label for="p3-terminalContent_Sec_2_Reto_2"><strong>C. </strong>Otorgar el merecido reconocimiento a quienes contribuyen directa o indirectamente con el enriquecimiento conceptual y de contenido general de tu trabajo.</p></label>
            </li>
          </ul>
        <ul class="ul-input">
            <li>
              <input id="p4-terminalContent_Sec_2_Reto_2" name="p4-terminalContent_Sec_2_Reto_2" type="checkbox" value="1">
              <label for="p4-terminalContent_Sec_2_Reto_2"><strong>D. </strong>Ceder al autor del trabajo escrito los derechos que antes poseía una persona sobre sus propias creaciones.</p></label>
            </li>
          </ul>
          <div class="text-center"><button type="button" class="btn-general btn-submit" onclick="questionsTerminalContent_Sec_2_Reto_2.checkboxVerify(2);" >Validar repuestas</button></div>
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

stagePage.pageContainerSet('sec_2_Reto_2',terminalContentClass_sec_2_Reto_2);
 
let questionsTerminalContent_Sec_2_Reto_2 = new question_CheckboxVerifyClass('terminalContent_Sec_2_Reto_2');

questionsTerminalContent_Sec_2_Reto_2.feedback.correct="¡Correcto! La citación busca mantener los derechos que un autor posee sobre su obra otorgando el reconocimiento debido y a su vez permitiendo que dicha obra aporte sustento teórico a tu trabajo escrito.";
questionsTerminalContent_Sec_2_Reto_2.feedback.incorrect="Por favor, verifica las respuestas.";
questionsTerminalContent_Sec_2_Reto_2.add(
    'A. Pregunta.',
    '2',
    '--',
    'Recuerda que La citación busca mantener los derechos que un autor posee sobre su obra otorgando el reconocimiento debido y a su vez permitiendo que dicha obra aporte sustento teórico a tu trabajo escrito.'
    );
questionsTerminalContent_Sec_2_Reto_2.add(
  'B. Pregunta.',
  '2',
  'Correcto',
  '--'
  );
questionsTerminalContent_Sec_2_Reto_2.add(
  'C. Pregunta.',
  '2',
  'Correcto',
  '--'
  );

questionsTerminalContent_Sec_2_Reto_2.add(
    'D. Pregunta.',
    '2',
    '--',
    'Recuerda que La citación busca mantener los derechos que un autor posee sobre su obra otorgando el reconocimiento debido y a su vez permitiendo que dicha obra aporte sustento teórico a tu trabajo escrito.'
    );
