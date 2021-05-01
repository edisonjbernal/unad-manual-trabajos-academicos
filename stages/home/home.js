class stageHomeClass extends generalStage{
    constructor(stageName){
        super(stageName);
    }
    addCssClass(){
        return [
            'stage_general',
            'stage_home'
        ]
    }
    addCssFiles(){
        return [
            'generalStage.css|general',
            'home.css|local'
        ]
    }
    content(){
        return `
        <h1>Está a punto de iniciar un viaje por la contrucción de un gran proyecto
        <strong>¡Bienveni@!</strong>
        </h1>

        <div class="cursor-hand">
            Manito
        </div>

        <div class="introduction-select">
            <div class="introduction-select-p-1">
                <p>Navegue por una breve introducción previo al viaje hacia el recurso</p>
            </div>
            <div class="introduction-select-button-1">
                <button class="btn-general" onclick="stage.load('introduction')">Introducción</button>
            </div>
            <div class="introduction-select-p-2">
                <p>Comience su viaje aquí  y avance por las diferentes y avance por las rutas haciendo clic sobre las estaciones que encontrará</p>
            </div>
            
            <div class="introduction-select-button-2">
                <button class="btn-general" onclick="stage.load('stationMap')">Comenzar</button>
            </div>
        </div>
        `;
    }
   
}
var stages_home= new stageHomeClass('home');