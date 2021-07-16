class terminalContentClass_sec_1_Reto_3_listaDesplegable extends generalPage{
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
      <div class="header-h2"><h2>Lista desplegable</h2></div>
      <div class="text-general ">
          <p><strong>Tipo de pregunta: Selecciona respuesta correcta a partir de una lista desplegable.</strong></p>
          <p>Lee las definiciones a continuación y elige de la lista desplegable el elemento preliminar que corresponda a cada definición:</p>
          
          <form action="" id="form-terminalContent_Sec_1_Reto_3_listaDesplegable">
              <div class="drag-and-drop-element">
                <table>
                  <tr>
                    <td><p>Por normatividad de ICONTEC, un trabajo para optar a título de posgrado siempre debe tener una página al final en la que se registran el concepto evaluativo y las firmas de quienes sirven como jurados de un trabajo investigativo.</p></td>
                    <td><div class="answer-text">
                                </div>
                                <select onchange="questionsTerminalContent_Sec_1_Reto_3_listaDesplegable.selectVerify(this);" name="p1-terminalContent_Sec_1_Reto_3_listaDesplegable" id="p1-terminalContent_Sec_1_Reto_3_listaDesplegable" data-index="0">
                                    <option value="">
                                        ---Seleccionar---
                                    </option>
                                    <option value="1">
                                        Dedicatoria
                                    </option>
                                    <option value="2">
                                        Portada
                                    </option>
                                    <option value="3">
                                        Resumen / Abstract
                                    </option>
                                    <option value="4">
                                        Nota de aceptación
                                    </option>
                                </select></td>
                  </tr>
                </table>
            </div>
            <div class="drag-and-drop-element">
              <table>
                <tr>
                  <td><p>Texto corto de máximo dos (2) párrafos dedicando la realización del trabajo ya finalizado. Ésta es una es una página opcional que por lo general se encuentra en tesis de grado u obras literarias.</p></td>
                  <td><div class="answer-text">
                              </div>
                              <select onchange="questionsTerminalContent_Sec_1_Reto_3_listaDesplegable.selectVerify(this);" name="p2-terminalContent_Sec_1_Reto_3_listaDesplegable" id="p2-terminalContent_Sec_1_Reto_3_listaDesplegable" data-index="1">
                                  <option value="">
                                      ---Seleccionar---
                                  </option>
                                  <option value="1">
                                      Dedicatoria
                                  </option>
                                  <option value="2">
                                      Portada
                                  </option>
                                  <option value="3">
                                      Resumen / Abstract
                                  </option>
                                  <option value="4">
                                      Nota de aceptación
                                  </option>
                              </select></td>
                </tr>
              </table>
          </div>
          <div class="drag-and-drop-element">
            <table>
              <tr>
                <td><p>Carta de presentación de un trabajo escrito. Allí se encuentra el nombre del trabajo, nombre o nombres de los autores, nombre de la Universidad, nombre del programa académico al que pertenece quien realiza el trabajo, ciudad, y año de elaboración.</p></td>
                <td><div class="answer-text">
                            </div>
                            <select onchange="questionsTerminalContent_Sec_1_Reto_3_listaDesplegable.selectVerify(this);" name="p3-terminalContent_Sec_1_Reto_3_listaDesplegable" id="p3-terminalContent_Sec_1_Reto_3_listaDesplegable" data-index="2">
                                <option value="">
                                    ---Seleccionar---
                                </option>
                                <option value="1">
                                    Dedicatoria
                                </option>
                                <option value="2">
                                    Portada
                                </option>
                                <option value="3">
                                    Resumen / Abstract
                                </option>
                                <option value="4">
                                    Nota de aceptación
                                </option>
                            </select></td>
              </tr>
            </table>
        </div>
        <div class="drag-and-drop-element">
          <table>
            <tr>
              <td><p>Esta página ofrece una idea general de todo el documento y sus temas. Sirve de guía para decidir leer parcial, puntual, o completamente un trabajo académico.</p></td>
              <td><div class="answer-text">
                          </div>
                          <select onchange="questionsTerminalContent_Sec_1_Reto_3_listaDesplegable.selectVerify(this);" name="p4-terminalContent_Sec_1_Reto_3_listaDesplegable" id="p4-terminalContent_Sec_1_Reto_3_listaDesplegable" data-index="3">
                              <option value="">
                                  ---Seleccionar---
                              </option>
                              <option value="1">
                                  Dedicatoria
                              </option>
                              <option value="2">
                                  Portada
                              </option>
                              <option value="3">
                                  Resumen / Abstract
                              </option>
                              <option value="4">
                                  Nota de aceptación
                              </option>
                          </select></td>
            </tr>
          </table>
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

stagePage.pageContainerSet('sec_1_Reto_3_listaDesplegable',terminalContentClass_sec_1_Reto_3_listaDesplegable);
 
let questionsTerminalContent_Sec_1_Reto_3_listaDesplegable = new questionsClass('terminalContent_Sec_1_Reto_3_listaDesplegable');

questionsTerminalContent_Sec_1_Reto_3_listaDesplegable.feedback.correct="¡Correcto!";
questionsTerminalContent_Sec_1_Reto_3_listaDesplegable.feedback.incorrect="Por favor, verifica las respuestas.";

questionsTerminalContent_Sec_1_Reto_3_listaDesplegable.add(
    'Pregunta 1',
    '4',
    'Excelente.',
    'Incorrecto.'
    );
questionsTerminalContent_Sec_1_Reto_3_listaDesplegable.add(
    'Pregunta 2',
    '1',
    'Excelente.',
    'Incorrecto.'
    );
questionsTerminalContent_Sec_1_Reto_3_listaDesplegable.add(
    'Pregunta 3',
    '2',
    'Excelente.',
    'Incorrecto.'
    );
questionsTerminalContent_Sec_1_Reto_3_listaDesplegable.add(
    'Pregunta 4',
    '3',
    'Excelente.',
    'Incorrecto.'
    );