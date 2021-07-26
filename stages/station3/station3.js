class station3Class extends generalStage{
    constructor(generalScenario){
      super(generalScenario);
    }
    addCssClass(){
      return [
          'stage_general'
      ]
  }
  content(){
      return `
      <h1>Trabajos y Proyectos Investigativos</h1>
      <img class="responsive" src="./images/Estacion_3_entrada.jpg" alt="Estación 3" />
      <div class="text-general">
         <p>La presente estación es ideal para estudiantes que empiezan a adentrarse en espacios académicos que proveen fundamentos y lineamientos para el desarrollo de sus trabajos y proyectos de investigación que fungirán como requisitos de grado para su proceso formativo. Los profesores Ana María y Esteban te adentrarán en conceptos y elementos esenciales que te permitirán conocer claramente la naturaleza de este tipo de trabajos. Presta atención al material que encontrarás, y toma atenta nota de todos los aspectos incluidos.</p>
      </div>
      <div class="text-center">
      <button class="btn-general" onclick="stage.get('station3Content')">Ingresar</button>
      </div>
      `;
  }
  importCssFiles(){
    return [
        'generalStage.css|general'
    ]
}
}

var stages_station3 = new station3Class('station3');