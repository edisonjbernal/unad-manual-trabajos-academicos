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
            <li><strong>Trabajos Escritos</strong></li>
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
            <li><strong>-- Reto</strong></li>
            <li>
              <a href="#reto1_video">-- Introducción al Reto</a>
            </li>
            <li>
              <a href="#reto1_organizarOraciones">-- Organizar oraciones</a>
            </li>
            <li>
              <strong>Mini Módulos</strong>
            </li>
            <li>
              <a href="#miniModulos">Presentación</a>
            </li>
            <li>
              <a href="#resumen">Resumen</a>
            </li>
            <li>
              <a href="#recomendacionesParaResumir">Recomendaciones para resumir</a>
            </li>
            <li><strong>-- Reto</strong></li>
            <li>
              <a href="#reto2_video">-- Introducción al Reto</a>
            </li>
            <li>
              <a href="#reto2_emparejar">-- Emparejar</a>
            </li>
            <li>
              <a href="#reto2_listaDesplegable">-- Lista desplegable</a>
            </li>
            <li>
              <a href="#reto2_seleccionMultiple">-- Selección múltiple</a>
            </li>
            <li>
              <a href="#reto2_seleccionMultiplePregunta4">-- Selección múltiple 2</a>
            </li>
            <li>
              <strong>Reseña</strong>
            </li>
            <li>
              <a href="#resena">Presentación</a>
            </li>
            <li>
              <a href="#tiposDeResenas">Tipos de reseñas</a>
            </li>
            <li><strong>-- Reto</strong></li>
            <li>
              <a href="#reto3_video">-- Introducción al Reto</a>
            </li>
            <li>
              <a href="#reto3_completarTexto">-- Completar texto</a>
            </li>
            <li>
              <a href="#reto3_completarTexto_2">-- Completar texto 2</a>
            </li>
            <li>
              <a href="#reto3_completarTexto_3">-- Completar texto 3</a>
            </li>
            <li><strong>Ensayo</strong></li>
            <li>
              <a href="#tiposDeEnsayo">Tipos de ensayo</a>
            </li>
            <li>
              <a href="#partesDeUnEnsayo">Partes de un ensayo</a>
            </li>
            <li>
              <a href="#caracteristicasBuenEnsayo">Características de un buen ensayo</a>
            </li>
            <li><strong>-- Reto</strong></li>
            <li>
              <a href="#reto4_video">-- Introducción al Reto</a>
            </li>
            <li>
              <a href="#reto4_completarTabla">-- Completar tabla</a>
            </li>
            <li>
              <a href="#reto4_emparejar">-- Emparejar</a>
            </li>
            <li>
              <a href="#reto4_seleccionMultiple">-- Selección múltiple</a>
            </li>
            <li><strong>Resultados</strong></li>
            <li>
              <a href="#resultados">Presentación</a>
            </li>
            <li>
              <a href="#puntajes">Puntajes</a>
            </li>
            <li>
              <a href="#creditos">Créditos</a>
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

var stages_station2Content = new station2ContentClass('station2Content');