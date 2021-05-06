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
        <h1>Trabajos Escritos</h1>
        <img class="responsive" src="./test/ninosBus.jpg" />
        <div class="text-general">
            <p>Trabajos Escritos: Texto de ejemplo</p>
        </div>
        <div class="text-center">
            <button class="btn-general" onclick="stage.get('station2Content')">Ingresar</button>
        </div>
        `;
    }
    importCssFiles(){
        return [
            'generalStage.css|general'
        ]
    }
}

var stages_station2 = new station2Class('station2');