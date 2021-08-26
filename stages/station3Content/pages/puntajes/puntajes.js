class station3ContentClass_puntajes extends generalPage{
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
    console.log(stages_station3Content.pointsManager.activities);
    let pointsManager=stages_station3Content.pointsManager;
    let pointsArray=stages_station3Content.pointsManager.activities;

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
      <h3>¡Excelente! Hemos terminado una estación más y con ella un reto más.</h3>
      
      <p>A continuación, puedes hacer la descarga de infografías con el resumen del material presentado en la estación. Recuerda que este material descargable te servirá como material de consulta y orientación en los aspectos formales del desarrollo de tu trabajo de grado.</p>
      <div class="text-center">
        <a href="./images/trabajos-y-proyectos-investigativos/premios-trabajos-y-proyectos-investigativos.zip" target="_blank" class="btn-final-points" >Descargar premios PRENDIETE</a>
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
      <h2>Descargar premio</h2>
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
stagePage.pageContainerSet('puntajes',station3ContentClass_puntajes);