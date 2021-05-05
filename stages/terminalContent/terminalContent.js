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
      <div class="navigation hide">
      
        <nav>
          <ul>
            <li><strong>Aspectos Generales</strong></li>
            <li>
              <a href="#inicio">Inicio</a>
            </li>
            <li>
              <a href="#final">Final</a>
            </li>
            <li>
              <a href="#analisis">analisis</a>
            </li>
          </ul>
        </nav>
      </div>
      <div class="general">
        <header>
        <a href="#menu" class="button-menu-principal">
            <div class="hamburguer">
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div class="menu-text">Menú</div>
        </a>
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
        'generalStage.css|general',
        'generalStagePage.css|general'
    ]
  }
  importJSFiles(){
    let pageMenuTerminal= new pageMenuListenersClass('stage_'+stage.stageName);
   
  }
  show(){
    this.divContainer.classList.remove('hide');
  }
}

var stages_terminalContent = new terminalContentClass('terminalContent');