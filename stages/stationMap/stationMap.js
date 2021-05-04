class stationMapClass extends generalStage{
    constructor(generalScenario){
      super(generalScenario);
    }
    addCssClass(){
        return ['stage_stationMap'];
    }
    content(){
        return `
            <div id="mapOfStations" class="mapOfStations">
            <div id="busCar" class="bus"></div>
                <img 
                    id="imgMapOfStations"
                    alt="Mapa de las estaciones"
                    class="img-map"
                    src="./images/mapaDeEstaciones.png" >
                <button id="terminal"  class="station-1">Terminal</button>
                <button id="station2"  class="station-2">Estación 2</button>
                <button id="station3"  class="station-3">Estación 3</button>
                <button id="station4"  class="station-4">Estación 4</button>
            </div>
            `;
    }
    hide(){
        this.divContainer.classList.add('hide');
    }
    importCssFiles(){
        return [
            'stationMap.css|local'
        ]
    }
    importJSFiles(){
        return [
            'busCarAnimation',
            'moveStarToTerminal',
            'moveStation2ToTerminal',
            'moveStation3ToTerminal',
            'moveStation4ToTerminal',
            'moveTerminalToStation2',
            'moveTerminalToStation3',
            'moveTerminalToStation4',
            'mapInteractions',
            'autoSizeMap'


        ];
    }
    show(){
        this.divContainer.classList.remove('hide');
        resizeMap();
    }
}

var stages_stationMap = new stationMapClass('stationMap');