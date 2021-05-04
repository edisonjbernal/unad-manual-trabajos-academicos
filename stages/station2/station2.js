class station2Class extends generalStage{
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
        <h1>Estación 2</h1>
        <div class="text-general">
            <p>Texto de ejemplo</p>
        </div>
        <button class="btn-general" onclick="stage.get('stationMap')">Volver al mapa</button>
        <button class="btn-general" onclick="stage.get('station2Content')">Comenzar station2Content</button>
        `;
    }
    importCssFiles(){
        return [
            'generalStage.css|general'
        ]
    }
}

var stages_station2 = new station2Class('station2');