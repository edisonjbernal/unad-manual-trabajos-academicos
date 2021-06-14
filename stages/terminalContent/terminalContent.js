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
              <a href="#learningGoalsOfThisResource">Aspectos estructurales de los trabajos académicos</a>
            </li>
            <li>
              <a href="#theResearchProblemAndTheResearchTopic">Lineamientos general</a>
            </li>
            <li>
              <a href="#typologiesOfResearchProblems">Preliminares</a>
            </li>
            <li>
              <a href="#describingTheResearchProblem">Titulación y tabla de contenido</a>
            </li>
            <li>
              <a href="#theResearchQuestions">Ejercicios</a>
            </li>
            <li><strong>Propiedad intelectual y referenciación</strong></li>
            <li>
              <a href="#criteriaOfGoodResearchQuestions">Introducción</a>
            </li>
            <li>
              <a href="#criteriaOfGoodResearchQuestionsExercise">Propiedad intelectual y plagio</a>
            </li>
            <li>
              <a href="#theResearchObjectives">Citación (Normas APA)</a>
            </li>
            <li>
              <a href="#examplesOfResearchObjectives">Referenciación (Normas APA)</a>
            </li>
            <li>
              <a href="#researchProblemsQuestionsAndObjectivesExercise">Tablas y figuras</a>
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
    stagePage.get('introduccion');
   
  }
  show(){
    this.divContainer.classList.remove('hide');
  }
}

var stages_terminalContent = new terminalContentClass('terminalContent');