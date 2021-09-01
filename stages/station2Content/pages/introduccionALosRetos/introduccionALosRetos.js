class station2ContentClass_introduccionALosRetos extends generalPage{
    constructor(pageName){
        super(pageName);
    }
    addCssClass(){
      return [
          'stage_general'
      ]
  }
  content(){
      return `
      <h2>Introducción a los retos</h2>
      <video class="responsive" src="./images/trabajos-escritos/introduccionARetos.mp4" controls="" controlslist="nodownload"></video>
      <div class="text-center">
        <button class="btn-general btn-back" onclick="stage.activity('menu_back')">Atrás</button>
        <button class="btn-general btn-next" onclick="stage.activity('menu_next')">Siguiente</button>
        <button class="btn-general btn-show-content" onclick="stage.activity('menu_showContentInText_none',this)">Mostrar en texto</button>
      </div>
      <div class="text-show-content">
        <h3>Transcripción del video</h3>
        <p>Andrés y Ximena están a punto de iniciar un recorrido que los llevará a reconocer tres de los tipos de trabajos académicos más comunes que les serán solicitados a lo largo de su proceso académico en la UNAD. Será necesario que se den prisa pues ya se avecinan las fechas de primeras entregas y de no tener claridad sobre cada tipo de texto académico, no podrán empezar a trabajar en ellos. En esta ocasión, tú serás parte esencial en este recorrido y podrás ayudarlos a lograr empezar sus trabajos académicos a tiempo. Todo lo que tienes que hacer es acompañarlos a ver el material a continuación y ayudarlos a resolver los cuatro retos que se irán activando a lo largo del recorrido.</p>
        <p>El tiempo es oro en esta ocasión. Cada reto tendrá una cantidad de preguntas y un tiempo definidos, será muy importante que prestes mucha atención durante todo el recorrido para que logres contestar cada reto dentro del tiempo asignado. Obtendrás dos (2) puntos por cada pregunta contestada correctamente. El total de puntos posibles en el reto es veintiocho (28) y será necesario que acumules un mínimo de veinticuatro (24) puntos para ganar, eso quiere decir que podrás equivocarte en máximo dos (2) preguntas.</p>
        <p>Si ganas, Andrés y Ximena podrán hacer sus primeras entregas de trabajos académicos a tiempo y tú recibirás acceso a material descargable sobre cada uno de los tipos de trabajo escrito estudiados en la estación que con seguridad te será muy útil a lo largo de tu proceso académico en la UNAD.</p>
      </div>
      `;
  }
  importCssFiles(){
    return [
        'generalStage.css|general'
    ]
}
}
stagePage.pageContainerSet('introduccionALosRetos',station2ContentClass_introduccionALosRetos);