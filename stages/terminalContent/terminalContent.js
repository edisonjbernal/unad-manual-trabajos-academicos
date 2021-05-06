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
              <a href="#videoInicial">Video inicial</a>
            </li>
            <li>
              <a href="#introduccion">Introducción</a>
            </li>
            <li>
              <a href="#lineamientosGenerales">Lineamientos generales</a>
            </li>
            <li>
              <a href="#preliminares">Preliminares</a>
            </li>
            <li>
              <a href="#titulacionyTablaDeContenido">Titulación y tabla de contenido</a>
            </li>
            <li>
              <a href="#ejercicios">Ejercicios</a>
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
                <h1>Aspectos técnicos</h1>
            </div>
        </header>
        <main>

        </main>
      </div>
      
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
    this.menu= new pageMenuListenersClass('stage_'+stage.stageName);
    stagePage.get('videoInicial');
   
  }
  show(){
    this.divContainer.classList.remove('hide');
  }
}

var stages_terminalContent = new terminalContentClass('terminalContent');