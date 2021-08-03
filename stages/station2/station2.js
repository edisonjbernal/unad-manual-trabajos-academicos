class station2Class extends generalStage{
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
        <h1>Trabajos Escritos</h1>
        <img class="responsive" src="./images/Estacion_2_entrada.jpg" alt="Estación 2" />
        <div class="text-general">
            <p>Ximena y Andrés son estudiantes de primeros semestres de sus programas, y tienen algunas confusiones con respecto a diversos tipos de trabajos que deberán presentar en los próximos días.</p> <p>En esta estación, encontrarás claras explicaciones y diferenciaciones sobre diversos tipos de trabajos que hacen y harán parte de su vida académica tales como los resúmenes, las reseñas, y los ensayos.</p>
        </div>
        <div class="text-center">
            <button class="btn-general" onclick="stage.get('station2Content')">Ingresar</button>
        </div>
        `;
    }
    importCssFiles(){
        return [
            'generalStage.css|general'
        ]
    }
    importJSGlobalFiles(){
       /*  return [
            'timer',
            'pointsActivityCalculate',
            'listMoveOptions',
            'listSelectOptions',
            'listSelectOptionsForText',
            'multipleSelectionCheckbox',
            'questions',
            'question_CheckboxVerify',
            'popUpToDiscoverTimeline',
            'selectTextbox',
            'textChangeCustom'
        ]; */
    }
}

var stages_station2 = new station2Class('station2');