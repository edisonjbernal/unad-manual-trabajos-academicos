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
      <h1>Artículos para investigación</h1>
      <img class="responsive" src="./images/Estacion_4_entrada.jpg" alt="Estación 4" />
      <div class="text-general">
         <p>Artículos para investigación: Texto de ejemplo</p>
      </div>
      <div class="text-center">
      <button class="btn-general" onclick="stage.get('stationMap')">Ingresar</button>
      </div>
      `;
  }
  importCssFiles(){
    return [
        'generalStage.css|general'
    ]
    }
}

var stages_station4 = new station4Class('station4');