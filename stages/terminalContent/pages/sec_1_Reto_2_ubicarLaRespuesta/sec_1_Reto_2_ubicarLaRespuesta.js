class terminalContentClass_sec_1_Reto_2_ubicarLaRespuesta extends generalPage{
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
      <div class="header-h2"><h2>Ubicar la respuesta</h2></div>
      <div class="text-general ">
          <p><strong>Tipo de pregunta: Emparejamiento (Seleccionar caja de texto y ubicar respuesta)</strong></p>
          <p>Aspectos como el espaciado entre líneas y párrafos, el tamaño de la letra y la alineación de los párrafos deben proporcionar organización visual para que tengan un efecto positivo en el lector al facilitarle la lectura del texto. En la elaboración de trabajos escrito en la UNAD estos aspectos son:</p>
          <p><strong>Selecciona la caja de texto y ubica la respuesta frente al criterio correspondiente:</strong></p>
          <table class="select-textbox">
            <tr>
              <td>
                El espacio entre renglones de un párrafo: 
              </td>
              <td>
                <input data-correct-answer="Doble" type="text" onfocus="questionTerminalContentClass_sec_1_Reto_2_ubicarLaRespuesta.focusIn(this)"
                onblur="questionTerminalContentClass_sec_1_Reto_2_ubicarLaRespuesta.focusOut(this)"
                >
                <div class="multiple-select">
                    <button class="btn-general" 
                    onfocus="questionTerminalContentClass_sec_1_Reto_2_ubicarLaRespuesta.focusInButton()";
                    onblur="questionTerminalContentClass_sec_1_Reto_2_ubicarLaRespuesta.focusOutButton()"
                    onclick="questionTerminalContentClass_sec_1_Reto_2_ubicarLaRespuesta.selectWord(this)">12 puntos</button>
                    <button class="btn-general" 
                    onfocus="questionTerminalContentClass_sec_1_Reto_2_ubicarLaRespuesta.focusInButton()";
                    onblur="questionTerminalContentClass_sec_1_Reto_2_ubicarLaRespuesta.focusOutButton()"
                    onclick="questionTerminalContentClass_sec_1_Reto_2_ubicarLaRespuesta.selectWord(this)">Justificado</button>
                    <button class="btn-general" 
                    onfocus="questionTerminalContentClass_sec_1_Reto_2_ubicarLaRespuesta.focusInButton()";
                    onblur="questionTerminalContentClass_sec_1_Reto_2_ubicarLaRespuesta.focusOutButton()"
                    onclick="questionTerminalContentClass_sec_1_Reto_2_ubicarLaRespuesta.selectWord(this)">Un (1) solo renglón</button>
                    <button class="btn-general" 
                    onfocus="questionTerminalContentClass_sec_1_Reto_2_ubicarLaRespuesta.focusInButton()";
                    onblur="questionTerminalContentClass_sec_1_Reto_2_ubicarLaRespuesta.focusOutButton()"
                    onclick="questionTerminalContentClass_sec_1_Reto_2_ubicarLaRespuesta.selectWord(this)">Doble</button>
                    <button class="btn-general" 
                    onfocus="questionTerminalContentClass_sec_1_Reto_2_ubicarLaRespuesta.focusInButton()";
                    onblur="questionTerminalContentClass_sec_1_Reto_2_ubicarLaRespuesta.focusOutButton()"
                    onclick="questionTerminalContentClass_sec_1_Reto_2_ubicarLaRespuesta.selectWord(this)">Una (1) sangría al lado izquierdo de la página</button>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                Tamaño de la letra: 
              </td>
              <td>
                <input data-correct-answer="12 puntos" type="text" onfocus="questionTerminalContentClass_sec_1_Reto_2_ubicarLaRespuesta.focusIn(this)"
                onblur="questionTerminalContentClass_sec_1_Reto_2_ubicarLaRespuesta.focusOut(this)">
                <div class="multiple-select">
                    <button class="btn-general" 
                    onfocus="questionTerminalContentClass_sec_1_Reto_2_ubicarLaRespuesta.focusInButton()";
                    onblur="questionTerminalContentClass_sec_1_Reto_2_ubicarLaRespuesta.focusOutButton()"
                    onclick="questionTerminalContentClass_sec_1_Reto_2_ubicarLaRespuesta.selectWord(this)">12 puntos</button>
                    <button class="btn-general" 
                    onfocus="questionTerminalContentClass_sec_1_Reto_2_ubicarLaRespuesta.focusInButton()";
                    onblur="questionTerminalContentClass_sec_1_Reto_2_ubicarLaRespuesta.focusOutButton()"
                    onclick="questionTerminalContentClass_sec_1_Reto_2_ubicarLaRespuesta.selectWord(this)">Justificado</button>
                    <button class="btn-general" 
                    onfocus="questionTerminalContentClass_sec_1_Reto_2_ubicarLaRespuesta.focusInButton()";
                    onblur="questionTerminalContentClass_sec_1_Reto_2_ubicarLaRespuesta.focusOutButton()"
                    onclick="questionTerminalContentClass_sec_1_Reto_2_ubicarLaRespuesta.selectWord(this)">Un (1) solo renglón</button>
                    <button class="btn-general" 
                    onfocus="questionTerminalContentClass_sec_1_Reto_2_ubicarLaRespuesta.focusInButton()";
                    onblur="questionTerminalContentClass_sec_1_Reto_2_ubicarLaRespuesta.focusOutButton()"
                    onclick="questionTerminalContentClass_sec_1_Reto_2_ubicarLaRespuesta.selectWord(this)">Doble</button>
                    <button class="btn-general" 
                    onfocus="questionTerminalContentClass_sec_1_Reto_2_ubicarLaRespuesta.focusInButton()";
                    onblur="questionTerminalContentClass_sec_1_Reto_2_ubicarLaRespuesta.focusOutButton()"
                    onclick="questionTerminalContentClass_sec_1_Reto_2_ubicarLaRespuesta.selectWord(this)">Una (1) sangría al lado izquierdo de la página</button>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                Al inicio de un nuevo párrafo se requiere dejar:
              </td>
              <td>
                <input data-correct-answer="Una (1) sangría al lado izquierdo de la página" type="text" onfocus="questionTerminalContentClass_sec_1_Reto_2_ubicarLaRespuesta.focusIn(this)"
                onblur="questionTerminalContentClass_sec_1_Reto_2_ubicarLaRespuesta.focusOut(this)">
                <div class="multiple-select">
                    <button class="btn-general" 
                    onfocus="questionTerminalContentClass_sec_1_Reto_2_ubicarLaRespuesta.focusInButton()";
                    onblur="questionTerminalContentClass_sec_1_Reto_2_ubicarLaRespuesta.focusOutButton()"
                    onclick="questionTerminalContentClass_sec_1_Reto_2_ubicarLaRespuesta.selectWord(this)">12 puntos</button>
                    <button class="btn-general" 
                    onfocus="questionTerminalContentClass_sec_1_Reto_2_ubicarLaRespuesta.focusInButton()";
                    onblur="questionTerminalContentClass_sec_1_Reto_2_ubicarLaRespuesta.focusOutButton()"
                    onclick="questionTerminalContentClass_sec_1_Reto_2_ubicarLaRespuesta.selectWord(this)">Justificado</button>
                    <button class="btn-general" 
                    onfocus="questionTerminalContentClass_sec_1_Reto_2_ubicarLaRespuesta.focusInButton()";
                    onblur="questionTerminalContentClass_sec_1_Reto_2_ubicarLaRespuesta.focusOutButton()"
                    onclick="questionTerminalContentClass_sec_1_Reto_2_ubicarLaRespuesta.selectWord(this)">Un (1) solo renglón</button>
                    <button class="btn-general" 
                    onfocus="questionTerminalContentClass_sec_1_Reto_2_ubicarLaRespuesta.focusInButton()";
                    onblur="questionTerminalContentClass_sec_1_Reto_2_ubicarLaRespuesta.focusOutButton()"
                    onclick="questionTerminalContentClass_sec_1_Reto_2_ubicarLaRespuesta.selectWord(this)">Doble</button>
                    <button class="btn-general" 
                    onfocus="questionTerminalContentClass_sec_1_Reto_2_ubicarLaRespuesta.focusInButton()";
                    onblur="questionTerminalContentClass_sec_1_Reto_2_ubicarLaRespuesta.focusOutButton()"
                    onclick="questionTerminalContentClass_sec_1_Reto_2_ubicarLaRespuesta.selectWord(this)">Una (1) sangría al lado izquierdo de la página</button>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                Espacio entre párrafos: 
              </td>
              <td>
                <input data-correct-answer="Un (1) solo renglón" type="text" onfocus="questionTerminalContentClass_sec_1_Reto_2_ubicarLaRespuesta.focusIn(this)"
                onblur="questionTerminalContentClass_sec_1_Reto_2_ubicarLaRespuesta.focusOut(this)">
                <div class="multiple-select">
                    <button class="btn-general" 
                    onfocus="questionTerminalContentClass_sec_1_Reto_2_ubicarLaRespuesta.focusInButton()";
                    onblur="questionTerminalContentClass_sec_1_Reto_2_ubicarLaRespuesta.focusOutButton()"
                    onclick="questionTerminalContentClass_sec_1_Reto_2_ubicarLaRespuesta.selectWord(this)">12 puntos</button>
                    <button class="btn-general" 
                    onfocus="questionTerminalContentClass_sec_1_Reto_2_ubicarLaRespuesta.focusInButton()";
                    onblur="questionTerminalContentClass_sec_1_Reto_2_ubicarLaRespuesta.focusOutButton()"
                    onclick="questionTerminalContentClass_sec_1_Reto_2_ubicarLaRespuesta.selectWord(this)">Justificado</button>
                    <button class="btn-general" 
                    onfocus="questionTerminalContentClass_sec_1_Reto_2_ubicarLaRespuesta.focusInButton()";
                    onblur="questionTerminalContentClass_sec_1_Reto_2_ubicarLaRespuesta.focusOutButton()"
                    onclick="questionTerminalContentClass_sec_1_Reto_2_ubicarLaRespuesta.selectWord(this)">Un (1) solo renglón</button>
                    <button class="btn-general" 
                    onfocus="questionTerminalContentClass_sec_1_Reto_2_ubicarLaRespuesta.focusInButton()";
                    onblur="questionTerminalContentClass_sec_1_Reto_2_ubicarLaRespuesta.focusOutButton()"
                    onclick="questionTerminalContentClass_sec_1_Reto_2_ubicarLaRespuesta.selectWord(this)">Doble</button>
                    <button class="btn-general" 
                    onfocus="questionTerminalContentClass_sec_1_Reto_2_ubicarLaRespuesta.focusInButton()";
                    onblur="questionTerminalContentClass_sec_1_Reto_2_ubicarLaRespuesta.focusOutButton()"
                    onclick="questionTerminalContentClass_sec_1_Reto_2_ubicarLaRespuesta.selectWord(this)">Una (1) sangría al lado izquierdo de la página</button>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                Formato en todos los párrafos:
              </td>
              <td>
                <input data-correct-answer="Justificado" type="text" onfocus="questionTerminalContentClass_sec_1_Reto_2_ubicarLaRespuesta.focusIn(this)"
                onblur="questionTerminalContentClass_sec_1_Reto_2_ubicarLaRespuesta.focusOut(this)">
                <div class="multiple-select">
                    <button class="btn-general" 
                    onfocus="questionTerminalContentClass_sec_1_Reto_2_ubicarLaRespuesta.focusInButton()";
                    onblur="questionTerminalContentClass_sec_1_Reto_2_ubicarLaRespuesta.focusOutButton()"
                    onclick="questionTerminalContentClass_sec_1_Reto_2_ubicarLaRespuesta.selectWord(this)">12 puntos</button>
                    <button class="btn-general" 
                    onfocus="questionTerminalContentClass_sec_1_Reto_2_ubicarLaRespuesta.focusInButton()";
                    onblur="questionTerminalContentClass_sec_1_Reto_2_ubicarLaRespuesta.focusOutButton()"
                    onclick="questionTerminalContentClass_sec_1_Reto_2_ubicarLaRespuesta.selectWord(this)">Justificado</button>
                    <button class="btn-general" 
                    onfocus="questionTerminalContentClass_sec_1_Reto_2_ubicarLaRespuesta.focusInButton()";
                    onblur="questionTerminalContentClass_sec_1_Reto_2_ubicarLaRespuesta.focusOutButton()"
                    onclick="questionTerminalContentClass_sec_1_Reto_2_ubicarLaRespuesta.selectWord(this)">Un (1) solo renglón</button>
                    <button class="btn-general" 
                    onfocus="questionTerminalContentClass_sec_1_Reto_2_ubicarLaRespuesta.focusInButton()";
                    onblur="questionTerminalContentClass_sec_1_Reto_2_ubicarLaRespuesta.focusOutButton()"
                    onclick="questionTerminalContentClass_sec_1_Reto_2_ubicarLaRespuesta.selectWord(this)">Doble</button>
                    <button class="btn-general" 
                    onfocus="questionTerminalContentClass_sec_1_Reto_2_ubicarLaRespuesta.focusInButton()";
                    onblur="questionTerminalContentClass_sec_1_Reto_2_ubicarLaRespuesta.focusOutButton()"
                    onclick="questionTerminalContentClass_sec_1_Reto_2_ubicarLaRespuesta.selectWord(this)">Una (1) sangría al lado izquierdo de la página</button>
                </div>
              </td>
            </tr>
          </table>
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
        'select-textbox.css|general'
    ]
    }
}

stagePage.pageContainerSet('sec_1_Reto_2_ubicarLaRespuesta',terminalContentClass_sec_1_Reto_2_ubicarLaRespuesta);

let questionTerminalContentClass_sec_1_Reto_2_ubicarLaRespuesta = new selectTextBoxClass;

