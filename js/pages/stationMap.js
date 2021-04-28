console.log("STATION");
class stationMap extends generalPageClass{
    constructor(generalScenario){
      super(generalScenario);
    }
    page(){
        return `
            <div id="mapOfStations" class="mapOfStations">
            <div id="busCar" class="bus"></div>
            <img 
                alt="Mapa de las estaciones"
                class="img-map"
                src="./images/mapaDeEstaciones.png" >
            <a id="terminal" href="#terminal" class="station-1">Estación 1</a>

            <a id="station2" href="#station2" class="station-2">Estación 2</a>
            <a id="station3" href="#station3" class="station-3">Estación 3</a>
            <a id="station4" href="#station4" class="station-4">Estación 4</a>
            </div>`;
    }
    addFunctions(){
        return [
            '/js/busCarAnimation',
            '/js/animationStations/moveStarToTerminal'
        ];
    }
   
   
}

var _js_pages_stationMap= new stationMap('generalScenario');