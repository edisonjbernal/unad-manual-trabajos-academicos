class stationMapClass extends generalStage{
    constructor(generalScenario){
      super(generalScenario);
    }
    addFunctions(){
        return [
            'busCarAnimation',
            'moveStarToTerminal',
            'moveStation2ToTerminal',
            'moveStation3ToTerminal',
            'moveStation4ToTerminal',
            'moveTerminalToStation2',
            'moveTerminalToStation3',
            'moveTerminalToStation4',
            'mapInteractions'


        ];
    }
    content(){
        return `
            <div id="mapOfStations" class="mapOfStations">
            <div id="busCar" class="bus"></div>
            <img 
                alt="Mapa de las estaciones"
                class="img-map"
                src="./images/mapaDeEstaciones.png" >
            <button id="terminal"  class="station-1" onclick="mapInteractions.moveBusToStation('terminal')">Estación 1</button>

            <button id="station2" onclick="mapInteractions.moveBusToStation('station2')" class="station-2">Estación 2</button>
            <button id="station3"  onclick="mapInteractions.moveBusToStation('station3')" class="station-3">Estación 3</button>
            <button id="station4"  onclick="mapInteractions.moveBusToStation('station4')" class="station-4">Estación 4</button>
            </div>`;
    }
}

var stages_stationMap = new stationMapClass('stationMap');