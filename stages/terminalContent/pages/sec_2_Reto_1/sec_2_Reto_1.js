class terminalContentClass_sec_2_Reto_1 extends generalPage{
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
          <p>¿Cuáles de las opciones a continuación te ayudan a evitar el plagio?</p>
          <p><strong> Escoge todas las respuestas que consideras correctas:</strong></p>
          <form action="" id="form-terminalContent_Sec_2_Reto_1">
          <ul class="ul-input">
            <li>
              <input id="p1-terminalContent_Sec_2_Reto_1" name="p1-terminalContent_Sec_2_Reto_1" type="checkbox" value="1">
              <label for="p1-terminalContent_Sec_2_Reto_1"><strong>A. </strong>Utilizar las palabras o las ideas de otros sin reconocer su autoría.</p></label>
            </li>
          </ul>
          <ul class="ul-input">
            <li>
              <input id="p2-terminalContent_Sec_2_Reto_1" name="p2-terminalContent_Sec_2_Reto_1" type="checkbox" value="1">
              <label for="p2-terminalContent_Sec_2_Reto_1"><strong>B. </strong>Copiar y pegar textos parciales de internet sin referenciarlo.</p></label>
            </li>
          </ul>
          <ul class="ul-input">
            <li>
              <input id="p3-terminalContent_Sec_2_Reto_1" name="p3-terminalContent_Sec_2_Reto_1" type="checkbox" value="2">
              <label for="p3-terminalContent_Sec_2_Reto_1"><strong>C. </strong>Otorgar el merecido reconocimiento a quienes contribuyen directa o indirectamente con el enriquecimiento conceptual y de contenido general de tu trabajo.</p></label>
            </li>
          </ul>
        <ul class="ul-input">
            <li>
              <input id="p4-terminalContent_Sec_2_Reto_1" name="p4-terminalContent_Sec_2_Reto_1" type="checkbox" value="1">
              <label for="p4-terminalContent_Sec_2_Reto_1"><strong>D. </strong>Copiar literalmente de un texto, de un libro o publicación sin referenciarlo.</p></label>
            </li>
          </ul>
          <ul class="ul-input">
            <li>
              <input id="p5-terminalContent_Sec_2_Reto_1" name="p5-terminalContent_Sec_2_Reto_1" type="checkbox" value="1">
              <label for="p5-terminalContent_Sec_2_Reto_1"><strong>E. </strong>Tomar un texto y cambiar algunas palabras para presentarlo con autoría propia.</p></label>
            </li>
          </ul>
          <ul class="ul-input">
            <li>
              <input id="p6-terminalContent_Sec_2_Reto_1" name="p6-terminalContent_Sec_2_Reto_1" type="checkbox" value="2">
              <label for="p6-terminalContent_Sec_2_Reto_1"><strong>F. </strong>Reescribir con tus propias palabras la información publicada por otros referenciando tanto al autor como la fuente.</p></label>
            </li>
          </ul>
          <ul class="ul-input">
            <li>
              <input id="p7-terminalContent_Sec_2_Reto_1" name="p7-terminalContent_Sec_2_Reto_1" type="checkbox" value="1">
              <label for="p7-terminalContent_Sec_2_Reto_1"><strong>G. </strong>Tomar ideas de otras personas y las presentarlas como mías.</p></label>
            </li>
          </ul>
          <ul class="ul-input">
            <li>
              <input id="p8-terminalContent_Sec_2_Reto_1" name="p8-terminalContent_Sec_2_Reto_1" type="checkbox" value="2">
              <label for="p8-terminalContent_Sec_2_Reto_1"><strong>H. </strong>Hacer uso de estrategias como la paráfrasis y citas textuales.</p></label>
            </li>
          </ul>
    
          <div class="text-center"><button type="button" class="btn-general btn-submit" onclick="questionsTerminalContent_Sec_2_Reto_1.checkboxVerify(3);" >Validar repuestas</button></div>
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

stagePage.pageContainerSet('sec_2_Reto_1',terminalContentClass_sec_2_Reto_1);
 
let questionsTerminalContent_Sec_2_Reto_1 = new question_CheckboxVerifyClass('terminalContent_Sec_2_Reto_1');

questionsTerminalContent_Sec_2_Reto_1.feedback.correct="¡Excelente! Cuando las ideas escritas o expresadas por otros te parecen interesantes y quieres replicarlas en un trabajo académico, siempre deberás hacer referencia al texto de donde las obtuviste (fuente) y a quien sea que las haya escrito (autor), de otro modo incurrirás en un plagio. Para este propósito existen estrategias como la paráfrasis y la citación textual que te ayudan a dejar en claro que partes de tu texto no te pertenecen, sino que aportan sustento teórico e intertextualidad a tu escrito";
questionsTerminalContent_Sec_2_Reto_1.feedback.incorrect="Por favor, verifica las respuestas.";
questionsTerminalContent_Sec_2_Reto_1.add(
    'A. Pregunta.',
    '2',
    '--',
    'Recuerda que, si las ideas escritas o expresadas por otros te parecen interesantes y quieres replicarlas en un trabajo académico, siempre deberás hacer referencia al texto de donde las obtuviste (fuente) y a quien sea que las haya escrito (autor), de otro modo incurrirás en un plagio. Para este propósito existen estrategias como la paráfrasis y la citación textual que te ayudan a dejar en claro que partes de tu texto no te pertenecen, sino que aportan sustento teórico e intertextualidad a tu escrito. '
    );
questionsTerminalContent_Sec_2_Reto_1.add(
  'B. Pregunta.',
  '2',
  '--',
  'Recuerda que, si las ideas escritas o expresadas por otros te parecen interesantes y quieres replicarlas en un trabajo académico, siempre deberás hacer referencia al texto de donde las obtuviste (fuente) y a quien sea que las haya escrito (autor), de otro modo incurrirás en un plagio. Para este propósito existen estrategias como la paráfrasis y la citación textual que te ayudan a dejar en claro que partes de tu texto no te pertenecen, sino que aportan sustento teórico e intertextualidad a tu escrito. '
  );
questionsTerminalContent_Sec_2_Reto_1.add(
  'C. Pregunta.',
  '2',
  'Correcto',
  '--'
  );

questionsTerminalContent_Sec_2_Reto_1.add(
    'D. Pregunta.',
    '2',
    '--',
    'Recuerda que, si las ideas escritas o expresadas por otros te parecen interesantes y quieres replicarlas en un trabajo académico, siempre deberás hacer referencia al texto de donde las obtuviste (fuente) y a quien sea que las haya escrito (autor), de otro modo incurrirás en un plagio. Para este propósito existen estrategias como la paráfrasis y la citación textual que te ayudan a dejar en claro que partes de tu texto no te pertenecen, sino que aportan sustento teórico e intertextualidad a tu escrito. '
    );
questionsTerminalContent_Sec_2_Reto_1.add(
    'E. Pregunta.',
    '2',
    '--',
    'Recuerda que, si las ideas escritas o expresadas por otros te parecen interesantes y quieres replicarlas en un trabajo académico, siempre deberás hacer referencia al texto de donde las obtuviste (fuente) y a quien sea que las haya escrito (autor), de otro modo incurrirás en un plagio. Para este propósito existen estrategias como la paráfrasis y la citación textual que te ayudan a dejar en claro que partes de tu texto no te pertenecen, sino que aportan sustento teórico e intertextualidad a tu escrito. .'
);
questionsTerminalContent_Sec_2_Reto_1.add(
  'F. Pregunta.',
  '2',
  'Correcto',
  '---'
  );
questionsTerminalContent_Sec_2_Reto_1.add(
  'G. Pregunta.',
  '2',
  '--',
  'Recuerda que, si las ideas escritas o expresadas por otros te parecen interesantes y quieres replicarlas en un trabajo académico, siempre deberás hacer referencia al texto de donde las obtuviste (fuente) y a quien sea que las haya escrito (autor), de otro modo incurrirás en un plagio. Para este propósito existen estrategias como la paráfrasis y la citación textual que te ayudan a dejar en claro que partes de tu texto no te pertenecen, sino que aportan sustento teórico e intertextualidad a tu escrito. '
);
questionsTerminalContent_Sec_2_Reto_1.add(
  'H. Pregunta.',
  '2',
  'Correcto',
  '---'
);