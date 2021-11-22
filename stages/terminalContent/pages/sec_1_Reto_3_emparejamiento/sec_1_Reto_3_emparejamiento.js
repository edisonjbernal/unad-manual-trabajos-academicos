class terminalContentClass_sec_1_Reto_3_emparejamiento extends generalPage{
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
      <div class="header-h2"><h2>Emparejamiento</h2></div>
      <div class="text-general list-move-option">
          <p><strong>Tipo de pregunta: Emparejamiento (definiciones se mueven hacia arriba o hacia abajo)</strong></p>
          <p>Ahora vamos a ver si reconoces el tipo de información que compone cada elemento preliminar.</p>
          <p>Lee las descripciones que se encuentran en la columna derecha de la tabla y pon frente a ella el elemento preliminar que le corresponde haciendo clic en el botón subir o bajar.</p>
          <p>Cuando el concepto este frente a la definición correcta aparecerá el botón Correcto en color verde.</p>
          <p>Cuando el concepto este frente a la definición incorrecta aparecerá el botón Incorrecto en color rojo.</p>
    
              <div class="drag-and-drop-element">
                <table>
                  <tr>
                    <td>
                        <div 
                        class="text-option-to-move" data-correct-answer="Nota de aceptación" >Presentación de línea y grupo de investigación</div>
                        <button class="btn-move-option" onclick="listMoveOptionsTerminalContent_sec_1_Reto_3_emparejamiento.down(this);">bajar</button>
                    </td>
                                <td><p>Este elemento se usa en los trabajos escritos para optar a título de posgrado. Debe incluir espacios para escribir la siguiente información:</p>
                                <ul>
                                    <li>El concepto en torno al trabajo o proyecto investigativo.</li>
                                    <li>Nombre del presidente del jurado.</li>
                                    <li>Nombre del primer jurado</li>
                                    <li>Nombre del segundo jurado</li>
                                    <li>Ciudad y año</li>
                                </ul></td>
                  </tr>
                </table>
            </div>
            <div class="drag-and-drop-element">
                <table>
                  <tr>
                    <td>
                        <button class="btn-move-option" onclick="listMoveOptionsTerminalContent_sec_1_Reto_3_emparejamiento.up(this);" >Subir</button>
                        <div 
                        class="text-option-to-move"
                        data-correct-answer="Presentación de línea y grupo de investigación"
                        >Portada</div>
                        <button class="btn-move-option" onclick="listMoveOptionsTerminalContent_sec_1_Reto_3_emparejamiento.down(this);">bajar</button>
                    </td>
                                <td><p>Este elemento se incluye en los trabajos que conllevan a un proceso investigativo, realizado como Opción de Grado. Incluye la siguiente información:</p>
                                <ul>
                                    <li>Nombre de la Institución</li>
                                    <li>Nombre completo del Rector</li>
                                    <li>Nombre completo del Vicerrector(a) Académico(a)</li>
                                    <li>Nombre completo del Decano(a) de Escuela</li>
                                    <li>Nombre completo del líder nacional del programa</li>
                                    <li>Nombre de la línea de investigación</li>
                                    <li>Nombre del grupo y/0 semillero de investigación</li>
                                    <li>Nombre completo del director del trabajo de grado</li>
                                    <li>Ciudad y año</li>
                                </ul></td>
                  </tr>
                </table>
            </div>
            <div class="drag-and-drop-element">
                <table>
                  <tr>
                    <td>
                        <button class="btn-move-option" onclick="listMoveOptionsTerminalContent_sec_1_Reto_3_emparejamiento.up(this);" >Subir</button>
                        <div 
                        class="text-option-to-move"
                        data-correct-answer="Contraportada"
                        >Nota de aceptación</div>
                        <button class="btn-move-option" onclick="listMoveOptionsTerminalContent_sec_1_Reto_3_emparejamiento.down(this);">bajar</button>
                    </td>
                                <td><p>Este elemento se usa únicamente en las Monografías y Tesis de grado. Incluye la siguiente información:</p>
                                <ul>
                                    <li>Título</li>
                                    <li>Nombre del autor o autores</li>
                                    <li>Título universitario por el que opta el autor del trabajo académico.</li>
                                    <li>Nombre y título académico del o la docente director del proyecto.</li>
                                    <li>Nombre de la institución</li>
                                    <li>Nombre de la Escuela y/o dependencia</li>
                                    <li>Nombre del programa</li>
                                    <li>Ciudad y año</li>
                                </ul></td>
                  </tr>
                </table>
            </div>
            <div class="drag-and-drop-element">
                <table>
                  <tr>
                    <td>
                        <button class="btn-move-option" onclick="listMoveOptionsTerminalContent_sec_1_Reto_3_emparejamiento.up(this);" >Subir</button>
                        <div 
                            class="text-option-to-move"
                            data-correct-answer="Portada"
                        >Contraportada</div>
                    </td>
                                <td><p>Este elemento se usa en todos los tipos de trabajos escritos indiferente del nivel académico. Incluye la siguiente información:</p>
                                <ul>
                                   <li>Título</li> 
                                   <li>Nombre del autor o autores</li>
                                   <li>Nombre de la institución</li>
                                   <li>Nombre de la Escuela y/o dependencia</li>
                                   <li>Nombre del programa</li>
                                   <li>Ciudad y año</li>
                                </ul></td>
                  </tr>
                </table>
            </div>
            
     
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
        'list-move-option.css|general'
    ]
    }
        
}

stagePage.pageContainerSet('sec_1_Reto_3_emparejamiento',terminalContentClass_sec_1_Reto_3_emparejamiento);
 
let listMoveOptionsTerminalContent_sec_1_Reto_3_emparejamiento = new listMoveOptionsClass('terminalContent_sec_1_Reto_3_emparejamiento');
