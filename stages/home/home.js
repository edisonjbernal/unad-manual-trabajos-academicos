console.log('HOME');
class stageHomeClass extends generalStage{
    constructor(stageName){
        super(stageName);
    }
    addFunctions(){
        return [
            'test1',
            'test2'
        ];
    }
    content(){
        return `
        <h1>Página de inicio del manual</h1>
        <button onclick="stage.load('stationMap')">Cargar el mapa</button>
        `;
    }
}
var stages_home= new stageHomeClass('home');