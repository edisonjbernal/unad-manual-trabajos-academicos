class terminalContentClass extends generalStage{
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
                <h1>Aspectos Técnicos</h1>
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
              <a href="#aspectosEstructuralesTrabajosAcademicos">Aspectos estructurales de los trabajos académicos</a>
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
           <!-- <li>
              <a href="#theResearchQuestions">Ejercicios</a>
            </li>-->
            <li><strong>Propiedad intelectual y referenciación</strong></li>
            <li>
              <a href="#introduccionPropiedadIntelectual">Introducción</a>
            </li>
            <li>
              <a href="#conceptosPropiedadIntelectualYReferenciacion">Conceptos Propiedad Intelectual y Referenciación</a>
            </li>
            <li>
              <a href="#propiedadIntelectualYPlagio">Propiedad intelectual y plagio</a>
            </li>
            <li>
              <a href="#citacionNormasAPA">Citación (Normas APA)</a>
            </li>
            <li>
              <a href="#infograficasSobreCitacion">Infografías sobre citación</a>
            </li>
            <li>
              <a href="#referenciacionNormasAPA">Referenciación (Normas APA)</a>
            </li>
            <li>
              <a href="#tablasyFiguras">Tablas y figuras</a>
            </li>
          </ul>
        </nav>
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
    this.acordeonList= new acordeonListClass;
    stagePage.get('introduccion');
   
  }
  show(){
    this.divContainer.classList.remove('hide');
  }
}

var stages_terminalContent = new terminalContentClass('terminalContent');