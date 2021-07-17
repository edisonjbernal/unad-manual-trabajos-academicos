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
            <li><strong>Retos</strong></li>
            <li><strong>- Sección 1</strong></li>
            <li>
              <a href="#sec_1_Introduccion">Introducción</a>
            </li>
            <li>
              <a href="#sec_1_Reto_1">-- Selección múltiple</a>
            </li>
            <li>
              <a href="#sec_1_Video_1">Video 1</a>
            </li>
            <li>
              <a href="#sec_1_Reto_2_falsoVerdadero">-- Falso / Verdadero</a>
            </li>
            <li>
              <a href="#sec_1_Reto_2_seleccionarTexto">-- Seleccionar texto</a>
            </li>
            <li>
              <a href="#sec_1_Reto_2_ubicarLaRespuesta">-- Ubicar la respuesta</a>
            </li>
            <li>
              <a href="#sec_1_Reto_2_unicaRespuesta">-- Única respuesta</a>
            </li>
            <li>
              <a href="#sec_1_Video_2">Video 2</a>
            </li>
            <li>
              <a href="#sec_1_Reto_3_emparejamiento">-- Emparejamiento</a>
            </li>
            <li>
              <a href="#sec_1_Reto_3_listaDesplegable">-- Lista desplegable</a>
            </li>
            <li>
              <a href="#sec_1_Video_3">Video 3</a>
            </li>
            <li>
              <a href="#sec_1_Reto_4">-- Selección múltiple de única respuesta</a>
            </li>
            <li>
              <a href="#sec_1_Video_4">Video 4</a>
            </li>
            <li><strong>- Sección 2</strong></li>
            <li>
              <a href="#sec_2_Introduccion">Introducción</a>
            </li>
            <li>
              <a href="#sec_2_Video_1">Video 1</a>
            </li>
            <li>
              <a href="#sec_2_Reto_1">-- Selección múltiple</a>
            </li>
            <li>
              <a href="#sec_2_Video_2">Video 2</a>
            </li>
            <li>
              <a href="#sec_2_Reto_2">-- Selección múltiple</a>
            </li>
            <li>
              <a href="#sec_2_Video_3">Video 3</a>
            </li>
            <li>
              <a href="#sec_2_Reto_3_emparejamiento">-- Emparejamiento</a>
            </li>
            <li>
              <a href="#sec_2_Reto_3_falsoVerdadero">-- Falso / Verdadero</a>
            </li>
            <li>
              <a href="#sec_2_Video_4">Video 4</a>
            </li>
            <li>
              <a href="#sec_2_Reto_4_falsoVerdadero">-- Falso / Verdadero</a>
            </li>
            <li>
              <a href="#sec_2_Reto_4_seleccionarTexto">-- Seleccionar texto</a>
            </li>
            <li>
              <a href="#sec_2_Video_5">Video 5</a>
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

var stages_terminalContent = new terminalContentClass('terminalContent');