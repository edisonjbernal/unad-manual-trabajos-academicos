class station3ContentClass_reto2_emparejar extends generalPage{
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
      <div id="timer_station3ContentClass_reto2_emparejar"></div>
      <div class="header-h2"><h2>Emparejamiento</h2></div>
      <div class="text-general list-move-option">
          <p><strong>Tipo de pregunta:</strong> Emparejamiento (definiciones se mueven hacia arriba o hacia abajo)</p>
          <p>Hemos visto que independientemente del tipo de investigación de escojas para tu trabajo de grado, debes presentar un anteproyecto que es un documento en el que planteas el tema que vas a indagar, los objetivos que quieres lograr, la manera como planeas llevar a cabo la investigación y la duración que ésta puede tener. A continuación, encontrarás una lista de con elementos que debes incluir en la redacción del anteproyecto.</p>
          <p><strong>Mueve hacia arriba o hacia abajo los elementos hasta que las descripciones de la segunda columna correspondan al elemento que se define:</strong></p>
    
              <div class="drag-and-drop-element drag-and-drop-element-blue">
                <table>
                  <tr>
                    <td>
                        <div 
                        class="text-option-to-move" data-correct-answer="Planteamiento del problema" >Bibliografía inicial</div>
                        <button class="btn-move-option" onclick="stagePage.activity('listMoveOptions_down',this);">bajar</button>
                    </td>
                    <td>
                      <p>Este elemento hace referencia a la selección del tema a investigar. Implica la identificación de aspectos del tema que no han sido investigados previamente para que su abordaje implique innovación. Debe describir además el contexto en el que se circunscribe el aspecto a investigar y cómo dicho aspecto será resuelto.</p>
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
                      class="text-option-to-move" data-correct-answer="Justificación" >Título</div>
                      <button class="btn-move-option" onclick="stagePage.activity('listMoveOptions_down',this);">bajar</button>
                  </td>
                  <td>
                    <p>Este elemento presenta las razones por las cuales el tema o aspecto seleccionados deben ser investigados demostrando así la relevancia y validez que tiene el desarrollarlo. Incluye también las motivaciones personales que tiene el investigador para abordar el tema. Además, indica de qué manera la investigación tiene un carácter distintivo en el campo académico que la enmarca y el enfoque metodológico con el que se abordará.</p>
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
                        class="text-option-to-move" data-correct-answer="Antecedentes o estado del arte" >Metodología investigativa</div>
                        <button class="btn-move-option" onclick="stagePage.activity('listMoveOptions_down',this);">bajar</button>
                    </td>
                    <td>
                      <p>Este elemento presentar una revisión del tema escogido con miras a obtener un panorama amplio sobre lo investigado hasta el momento. Busca informar qué se conoce sobre el tema escogido y cómo la investigación que se propone contempla un aspecto diferenciador desde el que se puede hacer un aporte adicional al tema investigado.</p>
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
                        class="text-option-to-move" data-correct-answer="Objetivos generales y específicos" >Cronograma</div>
                        <button class="btn-move-option" onclick="stagePage.activity('listMoveOptions_down',this);">bajar</button>
                    </td>
                    <td>
                      <p>Este elemento presenta la finalidad para llevar a cabo la investigación. Indica de manera general la meta que se pretende alcanzar y de manera específica las acciones concretas para llegar a dicha meta.</p>
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
                        class="text-option-to-move" data-correct-answer="Metodología investigativa" >Planteamiento del problema</div>
                        <button class="btn-move-option" onclick="stagePage.activity('listMoveOptions_down',this);">bajar</button>
                    </td>
                    <td>
                      <p>Este elemento describe los procedimientos para obtener, analizar y presentar los resultados alcanzados. Seguir este procedimiento es lo que hace que la investigación sea un proceso sistemático y permite alcanzar los objetivos propuesto.</p>
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
                        class="text-option-to-move" data-correct-answer="Bibliografía inicial" >Objetivos generales y específicos</div>
                        <button class="btn-move-option" onclick="stagePage.activity('listMoveOptions_down',this);">bajar</button>
                    </td>
                    <td>
                      <p>En este elemento se presentan puntualmente los libros, artículos, y textos en general que fueron consultados para el desarrollo del anteproyecto.</p>
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
                        class="text-option-to-move" data-correct-answer="Cronograma" >Antecedentes o estado del arte</div>
                        <button class="btn-move-option" onclick="stagePage.activity('listMoveOptions_down',this);">bajar</button>
                    </td>
                    <td>
                      <p>En este elemento se presentan las acciones necesarias para desarrollo de la investigación, así como los tiempos requeridos para ejecutar cada acción. También debe incluir los costos que esta puede implicar si institucionalmente así lo requiere.</p>
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
                      class="text-option-to-move" data-correct-answer="Título" >Justificación</div>
                  </td>
                  <td>
                    <p>Este elemento es la carta de presentación de un trabajo académico. Se sugiere elaborarlo como último paso en el planteamiento del anteproyecto pues este ha de describir de manera general el objetivo, contenido, y población de la investigación.</p>
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
    stages_station3Content.pointsManager.add('station3ContentClass_reto2_emparejar',this.listMoveOptions.pointsActivityCalculate.totalPoints);
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
  }
  show(){
    //VAria para las páginas
    this.divContainer.classList.remove('hide');

  }
}
stagePage.pageContainerSet('reto2_emparejar',station3ContentClass_reto2_emparejar);
