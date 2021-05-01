class station4Class extends generalStage{
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
      <h1>Estación 4</h1>
      <div class="text-general">
         <p>Texto de ejemplo</p>
      </div>
      <button class="btn-general" onclick="stage.load('stationMap')">Volver al mapa</button>
      <button class="btn-general" onclick="stage.load('introduction')">Comenzar</button>
      `;
  }
}

var stages_station4 = new station4Class('station4');