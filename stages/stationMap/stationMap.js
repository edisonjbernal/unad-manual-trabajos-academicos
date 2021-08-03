class stationMapClass extends generalStage{
    constructor(generalScenario){
      super(generalScenario);
    }
    addCssClass(){
        return ['stage_stationMap'];
    }
    content(){
        this.showParameters();
        return `
            <div id="mapOfStations" class="mapOfStations">
            <div id="busCar" class="bus"></div>
                <img 
                    id="imgMapOfStations"
                    alt="Mapa de las estaciones"
                    class="img-map"
                    src="./images/mapa_estaciones.jpg" >
                <a id="terminal" href="#terminal"  class="station-base station-1">
                    
                    <div class="display-station display-station-success">
                        Ingresar a Aspectos técnicos
                    </div>
                </a>
                <a id="station2" href="#station2"  class="station-base station-2">
                    
                    <div class="display-station">
                        Trabajos escritos
                    </div>
                </a>
                <a id="station3" href="#station3"  class="station-base station-3">
                    
                    <div class="display-station">
                        Trabajos y proyectos investigativos
                    </div>
                </a>
                <a id="station4" href="#station4"  class="station-base station-4">
                    <div class="display-station">
                        Artículos para publicación
                    </div>
                </a>
            </div>
            `;
            
    }
    hide(){
        this.divContainer.classList.add('hide');
        this.hideParameters();
    }
    hideParameters(){
        document.querySelectorAll('html')[0].classList.remove('stationMap');
        document.querySelectorAll('body')[0].classList.remove('stationMap');
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
        this.showParameters()
        this.divContainer.classList.remove('hide');
        resizeMap();
    }
    showParameters(){
        document.querySelectorAll('html')[0].classList.add('stationMap');
        document.querySelectorAll('body')[0].classList.add('stationMap');
    }
}

var stages_stationMap = new stationMapClass('stationMap');