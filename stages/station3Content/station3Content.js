class station3ContentClass extends generalStage{
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
                <h1>Trabajos y Proyectos Investigativos</h1>
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
            <li>
              <a href="#introduccion" class="active">Introducción</a>
            </li>
            <li>
              <a href="#explicacion" >Explicación</a>
            </li>
            <li>
              <a href="#tiposDeTrabajosInvestigativos" >Tipos de Trabajos Investigativos</a>
            </li>
            <li>
              <a href="#monografias" >Monografías</a>
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
    this.popUpToDiscover= new popUpToDiscoverClass;
     stagePage.get('introduccion');  
     
     
   
  }
  importJSGlobalFiles(){
    /* return [
        'listMoveOptions',
        'listSelectOptions',
        'listSelectOptionsForText',
        'multipleSelectionCheckbox',
        'questions',
        'question_CheckboxVerify',
        'popUpToDiscoverTimeline',
        'pointsActivityCalculate',
        'selectTextbox',
        'timer',
        'textChangeCustom'
    ]; */
}
show(){
  this.divContainer.classList.remove('hide');
} 
}

var stages_station3Content = new station3ContentClass('station3Content');