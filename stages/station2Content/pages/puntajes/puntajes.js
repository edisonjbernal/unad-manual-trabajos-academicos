class station2ContentClass_puntajes extends generalPage{
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
    console.log(stages_station2Content.pointsManager.activities);
    let pointsManager=stages_station2Content.pointsManager;
    let pointsArray=stages_station2Content.pointsManager.activities;

   /* pointsArray.sort(function (x, y) {
     let a= x.name,
        b= y.name;
      return a == b ? 0 : a > b ? 1 : -1;
    }); */

    let totalPoints=0;
    let messageTotalPoints='';

    let urlDescargaDPremios="./images/premios/estacion-2.zip";

    let mensajeBotonPremios="Descargar premio de la estación";

    for (let index = 0; index < pointsArray.length; index++) {
      totalPoints+=pointsArray[index].points;
      
    }
  
    if(totalPoints>=28){
      messageTotalPoints=`
      <h3>¡Qué buen trabajo has hecho!</h3>
      
      <p>Has comprendido cada temática en su totalidad y has logrado ayudar a Andrés a Ximena en esta carrera contra reloj. ¡Ahora ellos están listos para empezar a trabajar en sus primeras entregas! Como lo prometido es deuda, tú también obtendrás un premio. En el siguiente enlace acceso a material descargable sobre las temáticas de esta segunda estación. Ten este material a mano pues te servirá de referencia rápida en la elaboración de tus trabajos académicos.</p>
      <div class="text-center">
      <a href="${urlDescargaDPremios}" target="_blank" class="btn-final-points" >
          ${mensajeBotonPremios}
      </a>
      </div>
      `;
    }
    else if(totalPoints>=24){
      messageTotalPoints=`
      <h3>¡Qué buen trabajo has hecho!</h3>
      
      <p>Has comprendido la mayoría de las temáticas presentadas en la estación y has logrado ayudar a Andrés a Ximena en esta carrera contra reloj y ahora ellos están listos para empezar a trabajar en sus primeras entregas. Te invitamos a revisar en qué preguntas fallaste para que consultes de nuevo las temáticas y aclares cualquier duda que tengas sobre ellas. Como lo prometido es deuda, tú también obtendrás un premio. En el siguiente enlace tendrás acceso a material descargable sobre las temáticas de esta segunda estación. Ten este material a mano pues te servirá de referencia rápida en la elaboración de tus trabajos académicos.</p>
      <div class="text-center">
      <a href="${urlDescargaDPremios}" target="_blank" class="btn-final-points" >
          ${mensajeBotonPremios}
      </a>
      </div>
      `;

    }
    else if(totalPoints>=22){
      messageTotalPoints=`
      <h3>¡Estuviste muy cerca!</h3>
      
      <p>Sin embargo, Ximena y Andrés todavía necesitan tu ayuda. Has logrado entender la mayoría de las temáticas trabajadas en esta estación, pero no lograste el mínimo de 24 puntos. Revisa cuáles preguntas tuviste mal para saber sobre cuáles temáticas necesitas hacer una nueva revisión. Cuando hayas terminado de revisar dichas temáticas, vuelve al reto, contesta las preguntas nuevamente y obtén tu premio.</p> 
      <div class="text-center">
      <a href="./" class="btn-final-points" >Intentar retos nuevamente</a>
      </div>
      `;
    }
    else{
      messageTotalPoints=`
      <h3>¡Aún falta un poco más de trabajo, y el tiempo para Ximena y Andrés se agota!</h3>
      
      <p>Te invitamos a que revises cuáles preguntas tuviste mal para saber sobre cuáles temáticas necesitas hacer una nueva revisión. Cuando hayas terminado de revisar dichas temáticas, vuelve al reto, contesta las preguntas nuevamente y obtén tu premio.</p>
      <div class="text-center">
      <a href="./" class="btn-final-points" >Intentar retos nuevamente</a>
      </div>
      `;
    }




      return `
      <h2>Puntaje final</h2>
      <div class="final-points-container">
        <div class="final-points-container-points">
            <div>${totalPoints}</div>
        </div>
        <div class="final-points-container-message">
            ${messageTotalPoints}
        </div>
        
      </div>
      <table class="table-points">
            <tbody>
            <tr>
              <td><strong>Actividad</strong></td><td><strong>Puntaje</strong></td>
            </tr>
            <tr>
              <td>Reto 1: Organizar oraciones</td><td>${pointsManager.get('station2ContentClass_reto1_organizarOraciones').points}</td>
            </tr>
            <tr>
              <td>Reto 2: Emparejar</td><td>${pointsManager.get('station2ContentClass_reto2_emparejar').points}</td>
            </tr>
            <tr>
              <td>Reto 2: Lista desplegable</td><td>${pointsManager.get('station2ContentClass_reto2_listaDesplegable').points}</td>
            </tr>
            <tr>
              <td>Reto 2: Selección múltiple</td><td>${pointsManager.get('station2ContentClass_reto2_seleccionMultiple').points}</td>
            </tr>
            <tr>
              <td>Reto 2: Selección múltiple 2</td><td>${pointsManager.get('station2ContentClass_reto2_seleccionMultiplePregunta4').points}</td>
            </tr>
            <tr>
              <td>Reto 3: Completar texto 1</td><td>${pointsManager.get('station2ContentClass_reto3_completarTexto').points}</td>
            </tr>
            <tr>
              <td>Reto 3: Completar texto 2</td><td>${pointsManager.get('station2ContentClass_reto3_completarTexto_2').points}</td>
            </tr>
            <tr>
              <td>Reto 3: Completar texto 3</td><td>${pointsManager.get('station2ContentClass_reto3_completarTexto_3').points}</td>
            </tr>
            <tr>
              <td>Reto 4: Completar tabla</td><td>${pointsManager.get('station2ContentClass_reto4_completarTabla').points}</td>
            </tr>
            <tr>
              <td>Reto 4: Emparejar</td><td>${pointsManager.get('station2ContentClass_reto4_emparejar').points}</td>
            </tr>
            <tr>
              <td>Reto 4: Selección múltiple</td><td>${pointsManager.get('station2ContentClass_reto4_seleccionMultiple').points}</td>
            </tr>
            <tr>
              <td>TOTAL:</td><td>${totalPoints}</td>
            </tr>
            </tbody>
            </table>
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
stagePage.pageContainerSet('puntajes',station2ContentClass_puntajes);