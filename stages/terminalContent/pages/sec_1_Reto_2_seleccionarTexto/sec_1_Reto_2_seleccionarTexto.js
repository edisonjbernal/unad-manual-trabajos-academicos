class terminalContentClass_sec_1_Reto_2_seleccionarTexto extends generalPage{
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
      <div class="header-h2"><h2>Selecionar texto</h2></div>
      <div class="text-general ">
          <p><strong>Tipo de pregunta: Seleccionar la opción correcta de los números que están sobre el texto.</strong></p>
          <p>Perfecto, revisemos ahora algunos de los aspectos técnicos que se deben tener en cuenta en la elaboración de un trabajo escrito. </p>
          <p><strong>Completa el texto a continuación:</strong></p>
          <div class="drag-and-drop-element">
              <p>La elección del tipo, tamaño y color de letra en un trabajo escrito sirven de apoyo para la expresión de las ideas escritas. El escrito de todos los párrafos de un solo trabajo debe mantener <strong class="strong-text-change" id="text-1-terminalContent_Sec_1_Reto_2_seleccionarTexto">-- 1 --</strong> tipo de letra durante todo su contenido. El color de la letra debe ser <strong class="strong-text-change" id="text-2-terminalContent_Sec_1_Reto_2_seleccionarTexto"> -- 2 -- </strong>, y en caso de impresión, ésta deberá hacerse <strong class="strong-text-change" id="text-3-terminalContent_Sec_1_Reto_2_seleccionarTexto"> -- 3 -- </strong> de la hoja, a menos que por orientaciones docentes se requiera algo diferente.</p>
              <div class="text-change-validator">
                <h3>-- 1 --</h3>
                  <button 
                    class="btn-general" 
                    data-id-to-select="text-1-terminalContent_Sec_1_Reto_2_seleccionarTexto"
                    data-feedback-info="¡Excelente! Recuerda que puedes combinar fuentes, pero debes mantener la misma organización visual durante todo el cuerpo del documento. Por ejemplo, una fuente para títulos, y otra fuente para párrafos. Intercambiar las fuentes me manera indiscriminada hará que tu texto pierda organización visual."
                    data-correct-answer="true"
                    onclick="text_TerminalContent_Sec_1_Reto_2_seleccionarTexto.change(this);">
                    un solo
                  </button> 
                  <button class="btn-general" data-id-to-select="text-1-terminalContent_Sec_1_Reto_2_seleccionarTexto"
                  data-feedback-info="Recuerda que puedes combinar fuentes, pero debes mantener la misma organización visual durante todo el cuerpo del documento. Por ejemplo, una fuente para títulos, y otra fuente para párrafos. Intercambiar las fuentes me manera indiscriminada hará que tu texto pierda organización visual."
                  onclick="text_TerminalContent_Sec_1_Reto_2_seleccionarTexto.change(this);">más de un solo</button>
                  <div class="feedback"></div>
              </div>
              <div class="text-change-validator">
                <h3>-- 2 --</h3>
                  <button 
                    class="btn-general" 
                    data-id-to-select="text-2-terminalContent_Sec_1_Reto_2_seleccionarTexto"
                    data-feedback-info="Para la elaboración de trabajos escritos en la UNAD será necesario que uses el color negro en todo el texto, sin importar la fuente o el nivel del texto: títulos, subtítulos, etc."
                    
                    onclick="text_TerminalContent_Sec_1_Reto_2_seleccionarTexto.change(this);">
                    azul
                  </button> 
                  <button class="btn-general" data-id-to-select="text-2-terminalContent_Sec_1_Reto_2_seleccionarTexto"
                  data-feedback-info="¡Así es! Para la elaboración de trabajos escritos en la UNAD será necesario que uses el color negro en todo el texto, sin importar la fuente o el nivel del texto: títulos, subtítulos, etc."
                  data-correct-answer="true"
                  onclick="text_TerminalContent_Sec_1_Reto_2_seleccionarTexto.change(this);">negro</button>
                  <div class="feedback"></div>
              </div>
              <div class="text-change-validator">
                <h3>-- 3 --</h3>
                  <button 
                    class="btn-general" 
                    data-id-to-select="text-3-terminalContent_Sec_1_Reto_2_seleccionarTexto"
                    data-feedback-info="¡Correcto! En el evento en que te sea requerido hacer entrega de un trabajo escrito de manera impresa, la forma correcta de imprimir será por una sola cara de la hoja. "
                    data-correct-answer="true"
                    onclick="text_TerminalContent_Sec_1_Reto_2_seleccionarTexto.change(this);">
                    por una sola cara
                  </button> 
                  <button class="btn-general" data-id-to-select="text-3-terminalContent_Sec_1_Reto_2_seleccionarTexto"
                  data-feedback-info="En el evento en que te sea requerido hacer entrega de un trabajo escrito de manera impresa, la forma correcta de imprimir será por una sola cara de la hoja."
                  onclick="text_TerminalContent_Sec_1_Reto_2_seleccionarTexto.change(this);">por ambas caras</button>
                  <div class="feedback"></div>
              </div>
          </div>
      </div>
      <div class="text-center">
        <button class="btn-general btn-back"  onclick="stages_terminalContent.menu.back()">Atrás</button>
        <button class="btn-general btn-next" onclick="stages_terminalContent.menu.next()">Siguiente</button>
      </div>
      
      `;
  }
  importCssFiles(){
    return [
        'generalStage.css|general',
        'text-change-validator.css|general'
    ]
    }
          
}

stagePage.pageContainerSet('sec_1_Reto_2_seleccionarTexto',terminalContentClass_sec_1_Reto_2_seleccionarTexto);
 
let text_TerminalContent_Sec_1_Reto_2_seleccionarTexto = new textChangeCustomClass();
