class station4ContentClass_puntajes extends generalPage{
    constructor(pageName){
        super(pageName);
    }
    addCssClass(){
      return [
          'stage_general',
          'stage-page-points'
      ]
  }
  content(){
    console.log(stages_station4Content.pointsManager.activities);
    let pointsManager=stages_station4Content.pointsManager;
    let pointsArray=stages_station4Content.pointsManager.activities;

   /* pointsArray.sort(function (x, y) {
     let a= x.name,
        b= y.name;
      return a == b ? 0 : a > b ? 1 : -1;
    }); */

    let totalPoints=0;
    let messageTotalPoints='';

    for (let index = 0; index < pointsArray.length; index++) {
      totalPoints+=pointsArray[index].points;
      
    }
  
    if(totalPoints>=1){
      messageTotalPoints=`
      <h3>¡Excelente! Hemos terminado una estación la última estación.</h3>
      
      <p>A continuación, puedes descargar tu premio.</p>
      <div class="text-center">
        <a href="./images/trabajos-y-proyectos-investigativos/premios-trabajos-y-proyectos-investigativos.zip" target="_blank" class="btn-final-points" >Descargar premios PENDIENTE</a>
      </div>
      `;
    }
    else{
      messageTotalPoints=`
      <h3>Ups ¡Aún falta un poco más de trabajo!</h3>
      
      <p>Por favor realiza los retos indicados, y vuelve nuevamente por tu premio</p>
      `;
    }




      return `
      <h2>Resultados</h2>
      <div class="final-points-container">
        <div class="final-points-container-message">
            ${messageTotalPoints}
        </div>
        
      </div>
      
      <div class="text-center">
        <button class="btn-general btn-back" onclick="stage.activity('menu_back')">Atrás</button>
      </div>
      `;
  }
  importCssFiles(){
    return [
        'generalStage.css|general',
        'stage-page-points.css|general'
    ]
}
}
stagePage.pageContainerSet('puntajes',station4ContentClass_puntajes);