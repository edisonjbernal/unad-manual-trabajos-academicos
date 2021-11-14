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
    content(){
        return `
        <h1>Iniciarán un recorrido por el Manual de Trabajos Académicos de la UNAD.
  <strong>¡Bienvenidas y Bienvenidos!</strong>
  </h1>

  <div class="cursor-hand">
      <img src="./images/hand-down.png" alt="Manito apuntado abajo">
  </div>

  <div class="introduction-select">
      <div class="introduction-select-p-1">
          <p>Navegue por una breve introducción previo al viaje hacia el recurso</p>
      </div>
      <div class="introduction-select-button-1">
          <button class="btn-general" onclick="stage.get('introduction')">Introducción</button>
      </div>
      <div class="introduction-select-p-2">
          <p>Comience aquí su viaje y avance por las diferentes rutas haciendo clic sobre las estaciones que encontrará</p>
      </div>
      
      <div class="introduction-select-button-2">
          <button class="btn-general" onclick="stage.get('stationMap')">Comenzar</button>
      </div>
  </div>
        `;
    }
    importCssFiles(){
        return [
            'generalStage.css|general',
            'home.css|local'
        ]
    }
   
}
var stages_home= new stageHomeClass('home');
