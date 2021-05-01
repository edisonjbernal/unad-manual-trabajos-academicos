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
    addCssClass(){
        return [
            'stage_home'
        ]
    }
    addCssFiles(){
        return [
            'home.css'
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
            <div>
                <p>Navegue por una breve introducción previo al viaje hacia el recurso</p>
            </div>
            <div>
                <p>Comience su viaje aquí  y avance por las diferentes y avance por las rutas haciendo clic sobre las estaciones que encontrará</p>
            </div>
            <div>
                <button class="btn-general" onclick="stage.load('stationMap')">Introducción</button>
            </div>
            
            <div>
                <button class="btn-general" onclick="stage.load('stationMap')">Comenzar</button>
            </div>
        </div>
        `;
    }
}
var stages_home= new stageHomeClass('home');