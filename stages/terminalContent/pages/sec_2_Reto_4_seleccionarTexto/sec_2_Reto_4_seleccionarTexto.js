class terminalContentClass_sec_2_Reto_4_seleccionarTexto extends generalPage{
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
      <div class="header-h2"><h2>Selecionar</h2></div>
      <div class="text-general ">
          <p><strong>Tipo de pregunta: Seleccionar la opción correcta de los números que están sobre el texto.</strong></p>
          <p>Seleccionar la opción correcta de las opciones indicadas abajo, asegúrate de que la descripción tenga sentido y realmente dé cuenta de lo que estudiamos previamente:</p>
          <p><strong>Completa el texto a continuación:</strong></p>
          <div class="drag-and-drop-element">
              <p>En la <strong class="strong-text-change" id="text-1-terminalContent_Sec_2_Reto_4_seleccionarTexto">-- 1 --</strong> se debe mantener un formato de página con unas características específicas y en ella ubicar de cada referencia. Las referencias se ubican en <strong class="strong-text-change" id="text-2-terminalContent_Sec_2_Reto_4_seleccionarTexto">-- 2 --</strong> teniendo como base el <strong class="strong-text-change" id="text-3-terminalContent_Sec_2_Reto_4_seleccionarTexto">-- 3 --</strong>. Cuando utilices más de una obra de un mismo autor, el orden estará indicado entonces por el <strong class="strong-text-change" id="text-4-terminalContent_Sec_2_Reto_4_seleccionarTexto">-- 4 --</strong>. En algunos casos, las obras digitales vienen con un código <strong class="strong-text-change" id="text-5-terminalContent_Sec_2_Reto_4_seleccionarTexto">-- 5 --</strong>, de ser así inclúyelo también en la referencia. En caso de las obras digitales no lo tengan, será necesario incluir la <strong class="strong-text-change" id="text-6-terminalContent_Sec_2_Reto_4_seleccionarTexto">-- 6 --</strong> a través de la cual se accedió al texto.</p>
              <div class="text-change-validator">
                <h3>-- 1 --</h3>
                  <button 
                    class="btn-general" 
                    data-id-to-select="text-1-terminalContent_Sec_2_Reto_4_seleccionarTexto"
                    data-feedback-info="¡Excelente!"
                    data-correct-answer="true"
                    onclick="text_TerminalContent_Sec_2_Reto_4_seleccionarTexto.change(this);">
                    referenciación bibliográfica
                  </button> 
                  <button class="btn-general" data-id-to-select="text-1-terminalContent_Sec_2_Reto_4_seleccionarTexto"
                  data-feedback-info="Incorrecto"
                  onclick="text_TerminalContent_Sec_2_Reto_4_seleccionarTexto.change(this);">URL</button>
                  <div class="feedback"></div>
              </div>
              <div class="text-change-validator">
                <h3>-- 2 --</h3>
                  <button 
                    class="btn-general" 
                    data-id-to-select="text-2-terminalContent_Sec_2_Reto_4_seleccionarTexto"
                    data-feedback-info="Incorrecto"
                    
                    onclick="text_TerminalContent_Sec_2_Reto_4_seleccionarTexto.change(this);">
                    orden de fecha
                  </button> 
                  <button class="btn-general" data-id-to-select="text-2-terminalContent_Sec_2_Reto_4_seleccionarTexto"
                  data-feedback-info="¡Así es!"
                  data-correct-answer="true"
                  onclick="text_TerminalContent_Sec_2_Reto_4_seleccionarTexto.change(this);">orden alfabético</button>
                  <div class="feedback"></div>
              </div>
              <div class="text-change-validator">
                <h3>-- 3 --</h3>
                  <button 
                    class="btn-general" 
                    data-id-to-select="text-3-terminalContent_Sec_2_Reto_4_seleccionarTexto"
                    data-feedback-info="¡Correcto!"
                    data-correct-answer="true"
                    onclick="text_TerminalContent_Sec_2_Reto_4_seleccionarTexto.change(this);">
                    apellido del autor o los autores de la obra
                  </button> 
                  <button class="btn-general" data-id-to-select="text-3-terminalContent_Sec_2_Reto_4_seleccionarTexto"
                  data-feedback-info="Incorrecto"
                  onclick="text_TerminalContent_Sec_2_Reto_4_seleccionarTexto.change(this);">año de publicación de la obra</button>
                  <div class="feedback"></div>
              </div>
              <div class="text-change-validator">
                <h3>-- 4 --</h3>
                  <button 
                    class="btn-general" 
                    data-id-to-select="text-4-terminalContent_Sec_2_Reto_4_seleccionarTexto"
                    data-feedback-info="Incorrecto"
                    onclick="text_TerminalContent_Sec_2_Reto_4_seleccionarTexto.change(this);">
                    nombre del autor
                  </button> 
                  <button class="btn-general" data-id-to-select="text-4-terminalContent_Sec_2_Reto_4_seleccionarTexto"
                  data-feedback-info="¡Correcto!"
                    data-correct-answer="true"
                  onclick="text_TerminalContent_Sec_2_Reto_4_seleccionarTexto.change(this);">año de publicación de la obra</button>
                  <div class="feedback"></div>
              </div>
              <div class="text-change-validator">
                <h3>-- 5 --</h3>
                  <button 
                    class="btn-general" 
                    data-id-to-select="text-5-terminalContent_Sec_2_Reto_4_seleccionarTexto"
                    data-feedback-info="¡Correcto!"
                    data-correct-answer="true"
                    onclick="text_TerminalContent_Sec_2_Reto_4_seleccionarTexto.change(this);">
                    DOI
                  </button> 
                  <button class="btn-general" data-id-to-select="text-5-terminalContent_Sec_2_Reto_4_seleccionarTexto"
                  data-feedback-info="Incorrecto"
                  onclick="text_TerminalContent_Sec_2_Reto_4_seleccionarTexto.change(this);">Numérico</button>
                  <div class="feedback"></div>
              </div>
              <div class="text-change-validator">
                <h3>-- 6 --</h3>
                  <button 
                    class="btn-general" 
                    data-id-to-select="text-6-terminalContent_Sec_2_Reto_4_seleccionarTexto"
                    data-feedback-info="¡Correcto!"
                    data-correct-answer="true"
                    onclick="text_TerminalContent_Sec_2_Reto_4_seleccionarTexto.change(this);">
                    URL
                  </button> 
                  <button class="btn-general" data-id-to-select="text-6-terminalContent_Sec_2_Reto_4_seleccionarTexto"
                  data-feedback-info="Incorrecto"
                  onclick="text_TerminalContent_Sec_2_Reto_4_seleccionarTexto.change(this);">fecha</button>
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

stagePage.pageContainerSet('sec_2_Reto_4_seleccionarTexto',terminalContentClass_sec_2_Reto_4_seleccionarTexto);
 
let text_TerminalContent_Sec_2_Reto_4_seleccionarTexto = new textChangeCustomClass(true);
