class station4ContentClass extends generalStage{
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
                  <h1>Artículos para Publicación</h1>
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
              <li><strong>Artículos para Publicación</strong></li>
              <li>
                <a href="#introduccion" class="active">Introducción</a>
              </li>
              <li>
                <a href="#partesDeUnArticulo">Partes de un artículo de investigación</a>
              </li>
              <li><strong>-- Reto</strong></li>
              <li>
                <a href="#reto1_video" >-- Introducción al Reto</a>
              </li>
              <li>
                <a href="#reto1_seleccionMultipleUnica" >-- Selección múltiple</a>
              </li>
              <li>
                <a href="#reto1_completaElParrafo" >-- Completa el párrafo</a>
              </li>
              <li>
                <a href="#reto1_seleccionMultiple" >-- Selección múltiple</a>
              </li>
              <li>
                <a href="#reto1_emparejar" >-- Emparejar</a>
              </li>
              <li>
                <a href="#reto1_falsoVerdaderoNoe" >-- Falso / verdadero</a>
              </li>
              
              <li>
                <a href="#puntajes" >Resultados</a>
              </li>
              <li>
                <a href="#creditos" >Créditos</a>
              </li>
            </ul>
          </nav>
        </div>
        <div class="close-main-menu">
          <button> Cerrar menú</button>
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
      this.pointsManager= new pointManagerClass;
      this.popUpToDiscover= new popUpToDiscoverClass;
      importJS.busy=false;
      stagePage.get('introduccion');  
       
       
     
    }
  show(){
    this.divContainer.classList.remove('hide');
  } 
  }
  
  var stages_station4Content = new station4ContentClass('station4Content');