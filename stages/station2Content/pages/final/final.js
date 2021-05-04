class station2ContentClass_final extends generalPage{
    constructor(stageName,pageName){
        console.log('ENTRÓ A LA PÁGINA DE INICIO');
     super(stageName,pageName);
    }
    addCssClass(){
      return [
          'stage_general'
      ]
  }
  addCssFiles(){
      return [
          'generalStage.css|general'
      ]
  }
  content(){
      return `
      <h2>Final Statcion 2</h2>
      <button>No molestar</button>
      `;
  }
}

var stages_station2Content_final = new station2ContentClass_final('final');