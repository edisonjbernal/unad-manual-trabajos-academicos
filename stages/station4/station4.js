class station4Class extends generalStage{
    constructor(generalScenario){
      super(generalScenario);
    }
    addCssClass(){
      return [
          'stage_general'
      ]
  }
  content(){
      return `
      <h1>Estación 4</h1>
      <div class="text-general">
         <p>Texto de ejemplo</p>
      </div>
      <button class="btn-general" onclick="stage.get('stationMap')">Volver al mapa</button>
      <button class="btn-general" onclick="stage.get('introduction')">Comenzar</button>
      `;
  }
  importCssFiles(){
    return [
        'generalStage.css|general'
    ]
    }
}

var stages_station4 = new station4Class('station4');