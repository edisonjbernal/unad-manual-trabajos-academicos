class station2ContentClass_inicio extends generalPage{
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
      <div class="borrar">Esto es para borrar después</div>
      <h2>Stacion 2 INICIO</h2>
      `;
  }
  importCssFiles(){
    return [
        'generalStage.css|general',
        'borrar.css|local'
    ]
}
importJSFiles(){
    return [
        'borrar'
    ]
}
}

var stages_station2Content_inicio = new station2ContentClass_inicio('inicio');
console.log("Inicio");