class terminalContentClass_sec_2_Reto_3_emparejamiento extends generalPage{
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
          <p><strong>Tipo de pregunta: Emparejamiento (puedes mover los conceptos hacia arriba o hacia abajo)</strong></p>
          <p>Lee las definiciones que se encuentran en la columna derecha de la tabla y pon frente a ella el concepto que le corresponde haciendo clic en el botón subir o bajar:</p>
          <p>Cuando el concepto este frente a la definición correcta aparecerá el botón Correcto en color verde.</p>
          <p>Cuando el concepto este frente a la definición incorrecta aparecerá el botón Incorrecto en color rojo.</p>
    
              <div class="drag-and-drop-element">
                <table>
                  <tr>
                    <td>
                        <div 
                        class="text-option-to-move" data-correct-answer="Paráfrasis parentética" >Citación</div>
                        <button class="btn-move-option" onclick="listMoveOptionsTerminalContent_sec_2_Reto_3_emparejamiento.down(this);">bajar</button>
                    </td>
                                <td><p>Texto en el que hacemos referencia, con nuestras propias palabras, a algo dicho por otra persona agregando al final en un paréntesis el apellido del autor y el año de publicación o emisión de la obra en la que está incluida dicha idea.</p></td>
                  </tr>
                </table>
            </div>
            <div class="drag-and-drop-element">
                <table>
                  <tr>
                    <td>
                        <button class="btn-move-option" onclick="listMoveOptionsTerminalContent_sec_2_Reto_3_emparejamiento.up(this);" >Subir</button>
                        <div 
                        class="text-option-to-move"
                        data-correct-answer="Citación textual parentética"
                        >Referenciación</div>
                        <button class="btn-move-option" onclick="listMoveOptionsTerminalContent_sec_2_Reto_3_emparejamiento.down(this);">bajar</button>
                    </td>
                                <td><p>Texto de no más de 40 palabras que incluye al final entre paréntesis el apellido del autor y el año de la publicación de la obra en dónde se encuentra el texto original.</p>
                                </td>
                  </tr>
                </table>
            </div>
            <div class="drag-and-drop-element">
                <table>
                  <tr>
                    <td>
                        <button class="btn-move-option" onclick="listMoveOptionsTerminalContent_sec_2_Reto_3_emparejamiento.up(this);" >Subir</button>
                        <div 
                        class="text-option-to-move"
                        data-correct-answer="Paráfrasis narrativa"
                        >Paráfrasis parentética</div>
                        <button class="btn-move-option" onclick="listMoveOptionsTerminalContent_sec_2_Reto_3_emparejamiento.down(this);">bajar</button>
                    </td>
                                <td><p>Texto en el que mencionamos el apellido del autor como parte del texto e inmediatamente en paréntesis solo incluimos el año de publicación o emisión de la obra en la que está incluida dicha idea.</p>
                                </td>
                  </tr>
                </table>
            </div>
            <div class="drag-and-drop-element">
              <table>
                <tr>
                  <td>
                      <button class="btn-move-option" onclick="listMoveOptionsTerminalContent_sec_2_Reto_3_emparejamiento.up(this);" >Subir</button>
                      <div 
                      class="text-option-to-move"
                      data-correct-answer="Citación"
                      >Paráfrasis narrativa</div>
                      <button class="btn-move-option" onclick="listMoveOptionsTerminalContent_sec_2_Reto_3_emparejamiento.down(this);">bajar</button>
                  </td>
                              <td><p>Texto que se incluye o redacta dentro del cuerpo de un trabajo. Pueden ser apartes, fragmentos, y expresiones hechas por otras personas que dan sustento a tus ideas.</p>
                              </td>
                </tr>
              </table>
          </div>
          <div class="drag-and-drop-element">
            <table>
              <tr>
                <td>
                    <button class="btn-move-option" onclick="listMoveOptionsTerminalContent_sec_2_Reto_3_emparejamiento.up(this);" >Subir</button>
                    <div 
                    class="text-option-to-move"
                    data-correct-answer="Citación textual narrativa"
                    >Citación textual parentética</div>
                    <button class="btn-move-option" onclick="listMoveOptionsTerminalContent_sec_2_Reto_3_emparejamiento.down(this);">bajar</button>
                </td>
                            <td><p>Texto que incluye el apellido del autor dentro del texto mientras que el año de la publicación puede venir entre paréntesis justo después del apellido o posteriormente en el texto</p>
                            </td>
              </tr>
            </table>
        </div>
            <div class="drag-and-drop-element">
                <table>
                  <tr>
                    <td>
                        <button class="btn-move-option" onclick="listMoveOptionsTerminalContent_sec_2_Reto_3_emparejamiento.up(this);" >Subir</button>
                        <div 
                            class="text-option-to-move"
                            data-correct-answer="Referenciación"
                        >Citación textual narrativa</div>
                    </td>
                                <td><p>Listado de las fuentes que fueron citadas a lo largo de un texto. Se incluye en la parte final del trabajo o documento.</p>
                                </td>
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

stagePage.pageContainerSet('sec_2_Reto_3_emparejamiento',terminalContentClass_sec_2_Reto_3_emparejamiento);
 
let listMoveOptionsTerminalContent_sec_2_Reto_3_emparejamiento = new listMoveOptionsClass('terminalContent_sec_2_Reto_3_emparejamiento');
