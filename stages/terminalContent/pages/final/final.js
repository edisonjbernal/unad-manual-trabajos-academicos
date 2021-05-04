class terminalContentClass_final extends generalPage{
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
      FINAL DE L A PAGIENA
      `;
  }
}

var stages_terminalContent_final = new terminalContentClass_final('final');