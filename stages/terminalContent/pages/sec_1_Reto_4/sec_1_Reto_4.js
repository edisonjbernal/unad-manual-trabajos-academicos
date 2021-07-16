class terminalContentClass_sec_1_Reto_4 extends generalPage{
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
      <div class="header-h2"><h2>Selección múltiple de única respuesta</h2></div>
      <div class="text-general ">
          <p><strong>Tipo de pregunta: Selección de única respuesta</strong></p>
          <p>Los títulos le dan una estructura organizada al trabajo escrito y orientan a quien lo lee. Los procesadores de textos brindan diferentes niveles de titulación. Para la realización de los trabajos académicos elaborados por estudiantes de la UNAD se usarán títulos de primer a quinto nivel. Cada nivel tiene su propio formato y función dentro del texto.</p>
          <p><strong>Indica a continuación cuál es el nivel de título para cada formato:</strong></p>
          <form action="" id="form-terminalContent_Sec_1_Reto_4">
          <p>
            <strong>1. </strong><br/>
              <div class="space-p"><strong>Posición:</strong> Izquierda de la hoja.</div>
              <div class="space-p"><strong>Uso de sangría:</strong> No.</div>
              <div class="space-p"><strong>Uso de mayúscula:Uso de mayúscula:</strong> Solamente la inicial en la primera palabra.</div>
              <div class="space-p"><strong>Tipo de letra:</strong> Negrilla y cursiva.</div>
              <div class="space-p"><strong>Tamaño de letra:</strong> 13.</div>
              <div class="space-p"><strong>Puntuación:</strong> Punto al finalizar el título.</div>
              <div class="space-p"><strong>Espaciado:</strong> Espacio doble entre el título y el texto.</div>
              <div class="space-p"><strong>Función:</strong> Inicia un nuevo renglón</div>
          </p>
          <ul class="ul-input">
              <li>
                  <input 
                    id="p1-1-terminalContent_Sec_1_Reto_4" name="p1-terminalContent_Sec_1_Reto_4"
                    type="radio"
                    value="1">
                  <label for="p1-1-terminalContent_Sec_1_Reto_4">
                    <strong> a.</strong> Título de primer nivel
                  </label>
              </li>
              <li>
                  <input 
                    id="p1-2-terminalContent_Sec_1_Reto_4" name="p1-terminalContent_Sec_1_Reto_4"
                    type="radio"
                    value="2">
                  <label for="p1-2-terminalContent_Sec_1_Reto_4">
                    <strong> b.</strong> Título de segundo nivel
                  </label>
              </li>
              <li>
                  <input 
                    id="p1-3-terminalContent_Sec_1_Reto_4" name="p1-terminalContent_Sec_1_Reto_4"
                    type="radio"
                    value="3">
                  <label for="p1-3-terminalContent_Sec_1_Reto_4">
                    <strong> c.</strong> Título de tercer nivel
                  </label>
              </li>
              <li>
                  <input 
                    id="p1-4-terminalContent_Sec_1_Reto_4" name="p1-terminalContent_Sec_1_Reto_4"
                    type="radio"
                    value="4">
                  <label for="p1-4-terminalContent_Sec_1_Reto_4">
                    <strong> d.</strong> Título de cuarto nivel
                  </label>
              </li>
              <li>
                  <input 
                    id="p1-5-terminalContent_Sec_1_Reto_4" name="p1-terminalContent_Sec_1_Reto_4"
                    type="radio"
                    value="5">
                  <label for="p1-5-terminalContent_Sec_1_Reto_4">
                    <strong> e.</strong> Título de quinto nivel
                  </label>
              </li>
          </ul>
          <p>
            <strong>2. </strong><br/>
              <div class="space-p"><strong>Posición:</strong> Izquierda de la hoja.</div>
              <div class="space-p"><strong>Uso de sangría:</strong> Sí.</div>
              <div class="space-p"><strong>Uso de mayúscula:Uso de mayúscula:</strong> Solamente la inicial en la primera palabra.</div>
              <div class="space-p"><strong>Tipo de letra:</strong> Negrilla y cursiva.</div>
              <div class="space-p"><strong>Tamaño de letra:</strong> 12.</div>
              <div class="space-p"><strong>Puntuación:</strong> Punto al finalizar el título.</div>
              <div class="space-p"><strong>Espaciado:</strong> Espacio doble entre el título y el texto.</div>
              <div class="space-p"><strong>Función:</strong> Da continuidad al texto en el mismo renglón</div>
          </p>
          <ul class="ul-input">
              <li>
                  <input 
                    id="p2-1-terminalContent_Sec_1_Reto_4" name="p2-terminalContent_Sec_1_Reto_4"
                    type="radio"
                    value="1">
                  <label for="p2-1-terminalContent_Sec_1_Reto_4">
                    <strong> a.</strong> Título de primer nivel
                  </label>
              </li>
              <li>
                  <input 
                    id="p2-2-terminalContent_Sec_1_Reto_4" name="p2-terminalContent_Sec_1_Reto_4"
                    type="radio"
                    value="2">
                  <label for="p2-2-terminalContent_Sec_1_Reto_4">
                    <strong> b.</strong> Título de segundo nivel
                  </label>
              </li>
              <li>
                  <input 
                    id="p2-3-terminalContent_Sec_1_Reto_4" name="p2-terminalContent_Sec_1_Reto_4"
                    type="radio"
                    value="3">
                  <label for="p2-3-terminalContent_Sec_1_Reto_4">
                    <strong> c.</strong> Título de tercer nivel
                  </label>
              </li>
              <li>
                  <input 
                    id="p2-4-terminalContent_Sec_1_Reto_4" name="p2-terminalContent_Sec_1_Reto_4"
                    type="radio"
                    value="4">
                  <label for="p2-4-terminalContent_Sec_1_Reto_4">
                    <strong> d.</strong> Título de cuarto nivel
                  </label>
              </li>
              <li>
                  <input 
                    id="p2-5-terminalContent_Sec_1_Reto_4" name="p2-terminalContent_Sec_1_Reto_4"
                    type="radio"
                    value="5">
                  <label for="p2-5-terminalContent_Sec_1_Reto_4">
                    <strong> e.</strong> Título de quinto nivel
                  </label>
              </li>
          </ul>
          <p>
            <strong>3. </strong><br/>
              <div class="space-p"><strong>Posición:</strong> Centrado al inicio de una nueva página.</div>
              <div class="space-p"><strong>Uso de sangría:</strong> No.</div>
              <div class="space-p"><strong>Uso de mayúscula:Uso de mayúscula:</strong> Inicial en cada palabra excepto en preposiciones o conjunciones.</div>
              <div class="space-p"><strong>Tipo de letra:</strong> Negrilla.</div>
              <div class="space-p"><strong>Tamaño de letra:</strong> 13.</div>
              <div class="space-p"><strong>Puntuación:</strong> No.</div>
              <div class="space-p"><strong>Espaciado:</strong> Dos espacios dobles después de la margen superior de la hoja y dos espacios de 1,5 entre el título y el párrafo.</div>
              <div class="space-p"><strong>Función:</strong> Da nombre a cada capítulo o sección</div>
          </p>
          <ul class="ul-input">
              <li>
                  <input 
                    id="p3-1-terminalContent_Sec_1_Reto_4" name="p3-terminalContent_Sec_1_Reto_4"
                    type="radio"
                    value="1">
                  <label for="p3-1-terminalContent_Sec_1_Reto_4">
                    <strong> a.</strong> Título de primer nivel
                  </label>
              </li>
              <li>
                  <input 
                    id="p3-2-terminalContent_Sec_1_Reto_4" name="p3-terminalContent_Sec_1_Reto_4"
                    type="radio"
                    value="2">
                  <label for="p3-2-terminalContent_Sec_1_Reto_4">
                    <strong> b.</strong> Título de segundo nivel
                  </label>
              </li>
              <li>
                  <input 
                    id="p3-3-terminalContent_Sec_1_Reto_4" name="p3-terminalContent_Sec_1_Reto_4"
                    type="radio"
                    value="3">
                  <label for="p3-3-terminalContent_Sec_1_Reto_4">
                    <strong> c.</strong> Título de tercer nivel
                  </label>
              </li>
              <li>
                  <input 
                    id="p3-4-terminalContent_Sec_1_Reto_4" name="p3-terminalContent_Sec_1_Reto_4"
                    type="radio"
                    value="4">
                  <label for="p3-4-terminalContent_Sec_1_Reto_4">
                    <strong> d.</strong> Título de cuarto nivel
                  </label>
              </li>
              <li>
                  <input 
                    id="p3-5-terminalContent_Sec_1_Reto_4" name="p3-terminalContent_Sec_1_Reto_4"
                    type="radio"
                    value="5">
                  <label for="p3-5-terminalContent_Sec_1_Reto_4">
                    <strong> e.</strong> Título de quinto nivel
                  </label>
              </li>
          </ul>
          <p>
            <strong>4. </strong><br/>
              <div class="space-p"><strong>Posición:</strong> Izquierda de la hoja.</div>
              <div class="space-p"><strong>Uso de sangría:</strong> No.</div>
              <div class="space-p"><strong>Uso de mayúscula:Uso de mayúscula:</strong> Solamente la inicial en la primera palabra.</div>
              <div class="space-p"><strong>Tipo de letra:</strong> Negrilla.</div>
              <div class="space-p"><strong>Tamaño de letra:</strong> 13.</div>
              <div class="space-p"><strong>Puntuación:</strong> No.</div>
              <div class="space-p"><strong>Espaciado:</strong> Dos espacios de 1,5 entre el espacio que lo precede y el título. Un espacio doble entre el título y el texto que prosigue.</div>
              <div class="space-p"><strong>Función:</strong> Es un subtítulo y va dentro del texto.</div>
          </p>
          <ul class="ul-input">
              <li>
                  <input 
                    id="p4-1-terminalContent_Sec_1_Reto_4" name="p4-terminalContent_Sec_1_Reto_4"
                    type="radio"
                    value="1">
                  <label for="p4-1-terminalContent_Sec_1_Reto_4">
                    <strong> a.</strong> Título de primer nivel
                  </label>
              </li>
              <li>
                  <input 
                    id="p4-2-terminalContent_Sec_1_Reto_4" name="p4-terminalContent_Sec_1_Reto_4"
                    type="radio"
                    value="2">
                  <label for="p4-2-terminalContent_Sec_1_Reto_4">
                    <strong> b.</strong> Título de segundo nivel
                  </label>
              </li>
              <li>
                  <input 
                    id="p4-3-terminalContent_Sec_1_Reto_4" name="p4-terminalContent_Sec_1_Reto_4"
                    type="radio"
                    value="3">
                  <label for="p4-3-terminalContent_Sec_1_Reto_4">
                    <strong> c.</strong> Título de tercer nivel
                  </label>
              </li>
              <li>
                  <input 
                    id="p4-4-terminalContent_Sec_1_Reto_4" name="p4-terminalContent_Sec_1_Reto_4"
                    type="radio"
                    value="4">
                  <label for="p4-4-terminalContent_Sec_1_Reto_4">
                    <strong> d.</strong> Título de cuarto nivel
                  </label>
              </li>
              <li>
                  <input 
                    id="p4-5-terminalContent_Sec_1_Reto_4" name="p4-terminalContent_Sec_1_Reto_4"
                    type="radio"
                    value="5">
                  <label for="p4-5-terminalContent_Sec_1_Reto_4">
                    <strong> e.</strong> Título de quinto nivel
                  </label>
              </li>
          </ul>
          
          <div class="text-center">
            <button 
              onclick="questionsTerminalContent_Sec_1_Reto_4.verifyAnswers();"
              type="button" class="btn-general btn-submit" >Validar repuestas</button>
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
        'generalStage.css|general',
        'reto-4.css|local'
    ]
    }        
}

stagePage.pageContainerSet('sec_1_Reto_4',terminalContentClass_sec_1_Reto_4);
 
let questionsTerminalContent_Sec_1_Reto_4 = new questionsClass('terminalContent_Sec_1_Reto_4',true);

questionsTerminalContent_Sec_1_Reto_4.feedback.correct="¡Felicitaciones! Has finalizado la primera sección de retos. Ahora podrás descargar un archivo comprimido con las plantillas de las secciones preliminares de los diferentes trabajos escritos que pueden solicitarte en la universidad. Espero te sean de gran utilidad.";
questionsTerminalContent_Sec_1_Reto_4.feedback.incorrect="Por favor, verifica las respuestas.";
questionsTerminalContent_Sec_1_Reto_4.add(
    '1.',
    '3',
    'Correcto',
    'Incorrecto'
    );
questionsTerminalContent_Sec_1_Reto_4.add(
  '2.',
  '5',
  'Correcto',
  'Incorrecto'
  );
questionsTerminalContent_Sec_1_Reto_4.add(
  '3.',
  '1',
  'Correcto',
  'Incorrecto'
  );

questionsTerminalContent_Sec_1_Reto_4.add(
    '4.',
    '2',
    'Correcto',
    'Incorrecto'
    );
