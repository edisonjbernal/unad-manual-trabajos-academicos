console.log("STATION 1");
class station1Class extends generalStage{
    constructor(generalScenario){
      super(generalScenario);
    }
    content(){
        return `
            TErminal intró
            <button onclick="stage.load('stationMap')">REgresar al mapa</button>
            `;
    }
}

var stages_station1 = new station1Class('station1');