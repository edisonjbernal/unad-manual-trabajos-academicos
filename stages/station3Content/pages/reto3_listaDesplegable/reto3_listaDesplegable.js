class station3ContentClass_reto3_listaDesplegable extends generalPage{
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
      <div id="timer_station3ContentClass_reto3_listaDesplegable"></div>
      <div class="header-h2"><h2>Lista desplegable</h2></div>
      <div class="text-general list-select-option">
        <p>Muy bien, ya revisamos tu comprensión sobre los aspectos básicos acerca de los procesos investigativos desarrollados en la UNAD. Recuerda que el proceso de investigación profundo inicia una vez tu anteproyecto es aceptado. En el video anterior, vimos que los dos enfoques más comunes que tiene la universidad en cuanto al desarrollo de un trabajo investigativo son el proyecto investigativo y la monografía. Veamos a continuación cuánto aprendiste acerca del primero:</p>
          <p><strong>Tipo de pregunta:</strong> Selecciona la respuesta correcta a partir de una lista desplegable.</p>
          <p>A continuación, te presentamos unas definiciones sobre los elementos que constituyen un proyecto investigativo en su fase de desarrollo, es decir una vez el anteproyecto ha sido aprobado por el docente que hará la dirección de tu trabajo de grado. Asocia cada definición con el elemento al que hace referencia. Escoge de la lista desplegable el elemento que corresponde a cada definición:</p>
    
              <div class="drag-and-drop-element">
                <table>
                  <tbody>
                    <tr>
                      <td>
                          <select class="text-option-to-move" onchange="stagePage.activity('listSelectOptions',this);" data-answer="Pregunta Investigativa">
                            <option value="">--- Seleccionar opción ---</option>
                            <option value="Análisis de datos">Análisis de datos</option>
                            <option value="Marco Teórico">Marco Teórico</option>
                            <option value="Pregunta Investigativa">Pregunta Investigativa</option>
                            <option value="Recolección de Datos">Recolección de Datos</option>
                            <option value="Socialización de Resultados">Socialización de Resultados</option>
                            <option value="Temática">Temática</option>
                          </select>
                      </td>
                      <td>
                          <p>Este elemento se establece como una guía o norte para el desarrollo de la investigación, ya que está determinada por la metodología de investigación, los objetivos planteados para darle respuesta, y el tipo de datos necesarios para alcanzar cada objetivo.</p>
                      </td>
                    </tr>
                    <tr>
                        <td>
                            <select class="text-option-to-move" onchange="stagePage.activity('listSelectOptions',this);" data-answer="Recolección de Datos">
                              <option value="">--- Seleccionar opción ---</option>
                              <option value="Análisis de datos">Análisis de datos</option>
                              <option value="Marco Teórico">Marco Teórico</option>
                              <option value="Pregunta Investigativa">Pregunta Investigativa</option>
                              <option value="Recolección de Datos">Recolección de Datos</option>
                              <option value="Socialización de Resultados">Socialización de Resultados</option>
                              <option value="Temática">Temática</option>
                            </select>
                        </td>
                        <td>
                            <p>Este es un proceso por medio del cual se aborda el objeto de estudio para obtener información sobre él. El tipo de información que se busca obtener, así como los procedimientos a seguir para obtener dicha información, conocidos como instrumentos de investigación variarán dependiendo de la metodología de investigación seleccionada.</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                            <select class="text-option-to-move" onchange="stagePage.activity('listSelectOptions',this);" data-answer="Temática">
                              <option value="">--- Seleccionar opción ---</option>
                              <option value="Análisis de datos">Análisis de datos</option>
                              <option value="Marco Teórico">Marco Teórico</option>
                              <option value="Pregunta Investigativa">Pregunta Investigativa</option>
                              <option value="Recolección de Datos">Recolección de Datos</option>
                              <option value="Socialización de Resultados">Socialización de Resultados</option>
                              <option value="Temática">Temática</option>
                            </select>
                        </td>
                        <td>
                            <p>La elección de este aspecto parte de un interés personal pero el investigador debe asegurarse de que también genera interés en la comunidad académica por el tipo de contribución que el proyecto tendrá en determinada área de conocimiento. A este aspecto se le relacionan elementos que establecen su contextualización como por ejemplo la población y el tiempo que se cuenta para desarrollar la investigación.</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                            <select class="text-option-to-move" onchange="stagePage.activity('listSelectOptions',this);" data-answer="Socialización de Resultados">
                              <option value="">--- Seleccionar opción ---</option>
                              <option value="Análisis de datos">Análisis de datos</option>
                              <option value="Marco Teórico">Marco Teórico</option>
                              <option value="Pregunta Investigativa">Pregunta Investigativa</option>
                              <option value="Recolección de Datos">Recolección de Datos</option>
                              <option value="Socialización de Resultados">Socialización de Resultados</option>
                              <option value="Temática">Temática</option>
                            </select>
                        </td>
                        <td>
                            <p>Este elemento hace referencia a la divulgación de conocimiento. Es acá donde el trabajo realizado sale a la luz ante la comunidad académica y pasa a hacer un aporte en el conocimiento de un área determinada o puede constituirse incluso como base para investigaciones posteriores. La divulgación de este nuevo conocimiento es precisamente el objetivo principal de la investigación académica.</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                            <select class="text-option-to-move" onchange="stagePage.activity('listSelectOptions',this);" data-answer="Marco Teórico">
                              <option value="">--- Seleccionar opción ---</option>
                              <option value="Análisis de datos">Análisis de datos</option>
                              <option value="Marco Teórico">Marco Teórico</option>
                              <option value="Pregunta Investigativa">Pregunta Investigativa</option>
                              <option value="Recolección de Datos">Recolección de Datos</option>
                              <option value="Socialización de Resultados">Socialización de Resultados</option>
                              <option value="Temática">Temática</option>
                            </select>
                        </td>
                        <td>
                            <p>Este elemento sirve como fundamentación y contexto para la investigación dado que presenta un panorama general sobre lo que se sabe y se ha hecho en un determinado campo de conocimiento y posteriormente orienta la investigación en cuanto a su aporte, el análisis, interpretación y discusión de los resultados que se obtengan.</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                            <select class="text-option-to-move" onchange="stagePage.activity('listSelectOptions',this);" data-answer="Análisis de datos">
                              <option value="">--- Seleccionar opción ---</option>
                              <option value="Análisis de datos">Análisis de datos</option>
                              <option value="Marco Teórico">Marco Teórico</option>
                              <option value="Pregunta Investigativa">Pregunta Investigativa</option>
                              <option value="Recolección de Datos">Recolección de Datos</option>
                              <option value="Socialización de Resultados">Socialización de Resultados</option>
                              <option value="Temática">Temática</option>
                            </select>
                        </td>
                        <td>
                            <p>Este proceso inicia una vez se cuenta con información acerca del objeto de estudio abordado. Existen diferentes métodos para este proceso y cada uno ofrecerá la posibilidad de hacer una interpretación de la información a través de un proceso previo de organización, clasificación o medición dependiendo del diseño investigativo seleccionado.</p>
                        </td>
                      </tr>
                  </tbody>
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
    stages_station3Content.pointsManager.add('station3ContentClass_reto3_listaDesplegable',this.listSelectOptions.pointsActivityCalculate.totalPoints,'c. Reto 2 - Lista desplegable');
  }
  importCssFiles(){
    return [
        'generalStage.css|general',
        'list-select-option.css|general'
    ]
  }
  importJSFiles(){
    this.listSelectOptions = new listSelectOptionsClass();
    this.listSelectOptions.setPoints(2);
    this.listSelectOptions.messageCorrectAnswer='<strong>Correcto</strong> ¡Muy bien!';
  }
  show(){
    //Varia para las páginas
    this.divContainer.classList.remove('hide');

  }
}
stagePage.pageContainerSet('reto3_listaDesplegable',station3ContentClass_reto3_listaDesplegable);
