class terminalClass extends generalStage{
    constructor(generalScenario){
      super(generalScenario);
    }
    addCssClass(){
      return [
          'stage_general'
      ]
  }
  addCssFiles(){
      return [
          'generalStage.css|general'
      ]
  }
  content(){
      return `
      <h1>Aspectos técnicos</h1>
      <img class="responsive" src="./images/Estacion_1_entrada.jpg" alt="Estación 1" />
      <div class="text-general">
      <p><strong>Marcela</strong></p>
      <p>Marcela es una estudiante de pregrado de la Universidad que requiere conocer con urgencia los lineamientos generales para la presentación de trabajos escritos dentro de nuestra institución. Con ella podrás familiarizarte con aspectos esenciales como el tipo y tamaño de letra, el interlineado, la portada, entre otros.</p>
      <p><strong>Julián</strong></p>
      <p>Es un estudiante de pregrado de nuestra institución que recientemente tuvo un inconveniente en la presentación de uno de sus trabajos por incurrir involuntariamente en plagio. Acompaña a Julián a conocer la manera apropiada de referenciar y citar en trabajos escritos académicos a través de las normas APA, y a entender con claridad de qué se trata el plagio.</p>
      </div>
      <div class="text-center">
      <button class="btn-general" onclick="stage.get('terminalContent')">Ingresar</button>
      </div>
      
      `;
  }
}

var stages_terminal = new terminalClass('terminal');
