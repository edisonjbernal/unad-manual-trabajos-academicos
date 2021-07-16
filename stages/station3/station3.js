class station3Class extends generalStage{
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
      <h1>Trabajos y proyectos investigativos</h1>
      <img class="responsive" src="./images/Estacion_3_entrada.jpg" alt="Estación 3" />
      <div class="text-general">
         <p>Trabajos y proyectos investigativos: Texto de ejemplo</p>
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

var stages_station3 = new station3Class('station3');