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
      <img class="responsive" src="./test/ninosBus.jpg" />
      <div class="text-general">
         <p>Aspectos técnicos: Texto de ejemplo</p>
      </div>
      <div class="text-center">
      <button class="btn-general" onclick="stage.get('terminalContent')">Ingresar</button>
      </div>
      
      `;
  }
}

var stages_terminal = new terminalClass('terminal');