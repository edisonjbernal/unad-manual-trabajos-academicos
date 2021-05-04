class introductionClass extends generalStage{
    constructor(generalScenario){
      super(generalScenario);
    }
    addCssClass(){
        return [
            'stage_general',
            'stage_introduction'
        ]
    }
    content(){
        return `
        <h1>Introducción
        </h1>
        <video  id="stage_introduction_video" class="principal" src="./stages/introduction/documents/introduccion.mp4" controls controlsList="nodownload"  ></video>
        <div class="text-general">
           <p>Texto de ejemplo</p>
        </div>
        <button class="btn-general" onclick="stage.get('stationMap')">Comenzar</button>
        `;
    }
    importCssFiles(){
        return [
            'generalStage.css|general'
        ]
    }
}

var stages_introduction = new introductionClass('introduction');