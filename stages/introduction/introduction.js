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
    addCssFiles(){
        return [
            'generalStage.css|general'
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
        <button class="btn-general" onclick="stage.load('stationMap')">Comenzar</button>
        `;
    }
    hide(){
        document.getElementById('stage_introduction_video').pause();
        this.stageDiv.classList.add('hide');
    }
}

var stages_introduction = new introductionClass('introduction');