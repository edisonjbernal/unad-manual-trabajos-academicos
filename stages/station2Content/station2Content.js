class station2ContentClass extends generalStage{
  constructor(generalScenario){
    super(generalScenario);
  }
  addCssClass(){
    return [
      'stage_general',
        'stage-pages-general'
    ]
  }
  content(){
      return `
      
      <div class="general">
        <header>
        <div id="ghost-mobile-menu" class="ghost-mobile-menu">Hola</div>
        <a href="#menu" class="button-menu-principal">
            <div class="hamburguer">
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div class="menu-text">Menú</div>
        </a>
            <div> 
                <h1>Trabajos Escritos</h1>
            </div>
        </header>
        <a id="accesibility-main-menu-access" class="accesibility-main-menu-access" href="#">Navegar directamente en el menú</a>  
        <main>

        </main>
      </div>
      <div class="logo-UNAD-container">
          <img class="responsive logo-unad" src="./images/logoUNAD.png" />
        </div>
      <div class="navigation">
      
        <nav>
        
          <ul>
            <li><strong>Aspectos generales</strong></li>
            <li>
              <a href="#introduccion" class="active">Introducción</a>
            </li>
            <li>
              <a href="#introduccionALosRetos">Introducción a los retos</a>
            </li>
            <li>
              <a href="#trabajosAcademicos">Trabajos Académicos</a>
            </li>
            <li>
              <a href="#resumenResenaEnsayo">Resumen, Reseña y Ensayo</a>
            </li>
            <li>
              <a href="#miniModulos">Mini Módulos</a>
            </li>
        
          </ul>
        </nav>
      </div>
      
      `;
  }
   hide(){
   
    /* this.menu.getFromPageName(evento,'#introduccion'); */
   /*  this.menu.unloadMenuToclick('#preliminares'); */
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
    this.acordeonList= new acordeonListClass;
     stagePage.get('introduccion'); 
     
   
  }
  importJSGlobalFiles(){
    return [
        'listMoveOptions',
        'questions',
        'question_CheckboxVerify',
        'selectTextbox',
        'textChangeCustom'
    ];
} 
show(){
  this.divContainer.classList.remove('hide');
} 
}

var stages_station2Content = new station2ContentClass('station2Content');