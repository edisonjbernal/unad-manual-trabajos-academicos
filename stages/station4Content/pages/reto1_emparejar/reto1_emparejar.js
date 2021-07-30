class station4ContentClass_reto1_emparejar extends generalPage{
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
      <div id="timer_station4ContentClass_reto1_emparejar"></div>
      <div class="header-h2"><h2>Emparejamiento</h2></div>
      <div class="text-general list-move-option">
          <p><strong>Tipo de pregunta:</strong> Emparejamiento (definiciones se mueven hacia arriba o hacia abajo)</p>
          <p>Relaciona las oraciones y ejemplos de la columna de la derecha con los componentes que deben incluirse en la publicación del cuerpo de tu artículo investigativo.
          </p>
    
              <div class="drag-and-drop-element drag-and-drop-element-blue">
                <table>
                  <tr>
                    <td>
                        <div 
                        class="text-option-to-move" data-correct-answer="Introducción" >Conclusiones</div>
                        <button class="btn-move-option" onclick="stagePage.activity('listMoveOptions_down',this);">bajar</button>
                    </td>
                    <td>
                      <p>20 estudiantes del grado noveno de la Institución Educativa Las Mercedes, de San Ábrego, Arauca que oscilan entre los 13 y 16 años de edad.</p>
                    </td>
                  </tr>
                </table>
            </div>
            <div class="drag-and-drop-element drag-and-drop-element-blue">
              <table>
                <tr>
                  <td>
                      <button class="btn-move-option" onclick="stagePage.activity('listMoveOptions_up',this);">subir</button>
                      <div 
                      class="text-option-to-move" data-correct-answer="Metodología de investigación" >Descripción de la población</div>
                      <button class="btn-move-option" onclick="stagePage.activity('listMoveOptions_down',this);">bajar</button>
                  </td>
                  <td>
                    <p>El acceso e implementación de audiolibros tanto online como offline para trabajos fuera de clase facilita a las generaciones actuales el acceso a material auténtico en el idioma inglés.</p>
                  </td>
                </tr>
              </table>
            </div>
            <div class="drag-and-drop-element drag-and-drop-element-blue">
              <table>
                <tr>
                  <td>
                      <button class="btn-move-option" onclick="stagePage.activity('listMoveOptions_up',this);">subir</button>
                      <div 
                      class="text-option-to-move" data-correct-answer="Descripción de la población" >Introducción</div>
                      <button class="btn-move-option" onclick="stagePage.activity('listMoveOptions_down',this);">bajar</button>
                  </td>
                  <td>
                    <p>Entrevistas, encuestas, observación in situ, diarios de campo, grupos de discusión, análisis de caso. Escoger los apropiados dependerá de los objetivos generales de la investigación, así como de los aspectos prácticos y las limitaciones de recursos.</p>
                  </td>
                </tr>
              </table>
            </div>
            <div class="drag-and-drop-element drag-and-drop-element-blue">
              <table>
                <tr>
                  <td>
                      <button class="btn-move-option" onclick="stagePage.activity('listMoveOptions_up',this);">subir</button>
                      <div 
                      class="text-option-to-move" data-correct-answer="Instrumentos de recolección de datos" >Metodología de investigación</div>
                      <button class="btn-move-option" onclick="stagePage.activity('listMoveOptions_down',this);">bajar</button>
                  </td>
                  <td>
                    <p>Cualitativa (recopilación y el análisis de palabras -escritas o habladas- y datos textuales). Cuantitativa (medición y comprobación mediante datos numéricos) Mixta (que involucra aspectos tanto cualitativos como cuantitativos).</p>
                  </td>
                </tr>
              </table>
            </div>
            <div class="drag-and-drop-element drag-and-drop-element-blue">
              <table>
                <tr>
                  <td>
                      <button class="btn-move-option" onclick="stagePage.activity('listMoveOptions_up',this);">subir</button>
                      <div 
                      class="text-option-to-move" data-correct-answer="Resultados del análisis de datos" >Instrumentos de recolección de datos</div>
                      <button class="btn-move-option" onclick="stagePage.activity('listMoveOptions_down',this);">bajar</button>
                  </td>
                  <td>
                    <p>Por medio de la triangulación de los datos recolectados se pudo observar que 77% de los estudiantes de la institución mejoraron la pronunciación de verbos en el pasado en el idioma inglés gracias a la implementación de audiolibros en su trabajo extra-clase.</p>
                  </td>
                </tr>
              </table>
            </div>
            <div class="drag-and-drop-element drag-and-drop-element-blue">
              <table>
                <tr>
                  <td>
                    <button class="btn-move-option" onclick="stagePage.activity('listMoveOptions_up',this);">subir</button>
                      <div 
                      class="text-option-to-move" data-correct-answer="Conclusiones" >Resultados del análisis de datos</div>
                  </td>
                  <td>
                    <p>Breve descripción del contexto en el que se desarrolla o desarrolló el ejercicio investigativo, y por qué para qué y cómo se llevó a cabo el mismo. </p>
                  </td>
                </tr>
              </table>
          </div>
          
            
     
      </div>
      <div class="text-center">
        <button class="btn-general btn-back" onclick="stage.activity('menu_back')">Atrás</button>
        <button class="btn-general btn-next" onclick="stage.activity('menu_next')">Siguiente</button>
      </div>
      `;
  }
  hide(){
    //VAria para las páginas
    this.divContainer.classList.add('hide');
    stages_station4Content.pointsManager.add('station4ContentClass_reto1_emparejar',this.listMoveOptions.pointsActivityCalculate.totalPoints);
  }
  importCssFiles(){
    return [
        'generalStage.css|general',
        'clock.css|general',
        'list-move-option.css|general'
    ]
  }
  importJSFiles(){
    this.listMoveOptions = new listMoveOptionsClass();
    this.listMoveOptions.setPoints(3);
    this.listMoveOptions.messageCorrectAnswer="Excelente trabajo, tienes bastante claro qué aspectos han de incluirse para la publicación de un artículo investigativo.";
  }
  show(){
    //VAria para las páginas
    this.divContainer.classList.remove('hide');

  }
}
stagePage.pageContainerSet('reto1_emparejar',station4ContentClass_reto1_emparejar);
