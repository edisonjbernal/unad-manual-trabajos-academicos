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

    let urlDescargaDPremios="./images/premios/estacion-4.zip";

    let mensajeBotonPremios="Descargar premio de la estación";

    for (let index = 0; index < pointsArray.length; index++) {
      totalPoints+=pointsArray[index].points;
      
    }
  
    if(totalPoints>=1){
      messageTotalPoints=`
      <h3>¡Excelente! Hemos terminado una estación más y con ella un reto más.</h3>
      
      <p>A continuación, puedes hacer la descarga de infografías con el resumen del material presentado en la estación. Recuerda que este material descargable te servirá como material de consulta y orientación en los aspectos formales del desarrollo de tu trabajo de grado.</p>
      <div class="text-center">
        <a href="${urlDescargaDPremios}" target="_blank" class="btn-final-points" >
          ${mensajeBotonPremios}
        </a>
      </div>
      `;
    }
    else{
      messageTotalPoints=`
      <h3>Ups ¡Falta un poco más de trabajo!</h3>
      
      <p>Notamos que aún no has realizado ningún reto, por lo que te invitamos a navegar el contenido y a realizar los retos propuestos.</p>
      <br/>
      <p>No obstante, si deseas descargar los premios directamente lo puedes hacer en el siguiente enlace:</p>
      <div class="text-center">
        <a href="${urlDescargaDPremios}" target="_blank" class="btn-final-points" >
          ${mensajeBotonPremios}
        </a>
      </div>
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
        <button class="btn-general btn-next" onclick="stage.activity('menu_next')">Siguiente</button>
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