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
      <h1>Terminal</h1>
      <div class="text-general">
         <p>Texto de ejemplo</p>
      </div>
      <button class="btn-general" onclick="stage.get('stationMap')">Volver al mapa</button>
      <button class="btn-general" onclick="stage.get('terminalContent')">Comenzar</button>
      <button class="btn-general" onclick="stage.get('introduction')">Introducción</button>
      `;
  }
}

var stages_terminal = new terminalClass('terminal');