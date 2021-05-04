class terminalContentClass_inicio extends generalPage{
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
      iNFORMACIÓN DEL INICIO
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

var stages_terminalContent_inicio = new terminalContentClass_inicio('inicio');
console.log("Inicio");