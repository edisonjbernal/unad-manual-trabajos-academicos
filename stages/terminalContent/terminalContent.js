class terminalContentClass extends generalStage{
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
      <div class="navigation">
      
        <nav>
        
        </nav>
      </div>
      <div class="general">
        <header>
        <div>
            /// Menú 
        </div>
            <div> 
                <h1>Terminal Content</h1>
            </div>
        </header>
        <main>

        </main>
      </div>
      <button class="btn-general" onclick="stage.get('stationMap')">Volver al mapa</button>
      <button class="btn-general" onclick="stagePage.get('inicio')">Inicio</button>
      <button class="btn-general" onclick="stagePage.get('final')">Final</button>
      `;
  }
  hide(){
    this.divContainer.classList.add('hide');
  }
  importCssFiles(){
    return [
        'generalStage.css|general'
    ]
  }
  show(){
    this.divContainer.classList.remove('hide');
  }
}

var stages_terminalContent = new terminalContentClass('terminalContent');