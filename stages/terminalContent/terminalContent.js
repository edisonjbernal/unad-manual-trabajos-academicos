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
                <h1>Statement of the Research Problem</h1>
            </div>
        </header>
        <a id="accesibility-main-menu-access" class="accesibility-main-menu-access" href="#">Navegar directamente en el menú</a>  
        <main>

        </main>
      </div>
      <div class="navigation">
      
        <nav>
        <img class="responsive logo-unad" src="./images/logoUNAD.png" />
          <ul>
            <li><strong>Statement of the Research Problem</strong></li>
            <li>
              <a href="#technicalData" class="active">Technical data</a>
            </li>
            <li>
              <a href="#learningGoalsOfThisResource">Learning goals of this resource</a>
            </li>
            <li>
              <a href="#theResearchProblemAndTheResearchTopic">The Research Problem and the Research Topic</a>
            </li>
            <li>
              <a href="#typologiesOfResearchProblems">Typologies of research problems</a>
            </li>
            <li>
              <a href="#describingTheResearchProblem">Describing the research problem</a>
            </li>
            <li>
              <a href="#theResearchQuestions">The research questions</a>
            </li>
            <li>
              <a href="#criteriaOfGoodResearchQuestions">Criteria of good research questions</a>
            </li>
            <li>
              <a href="#criteriaOfGoodResearchQuestionsExercise">Criteria of good research questions Exercise</a>
            </li>
            <li>
              <a href="#theResearchObjectives">The research objectives</a>
            </li>
            <li>
              <a href="#examplesOfResearchObjectives">Examples of research objectives</a>
            </li>
            <li>
              <a href="#researchProblemsQuestionsAndObjectivesExercise">Research problems, questions and objectives: exercise</a>
            </li>
            <li>
              <a href="#theResearchHypothesis">The research hypothesis</a>
            </li>
            <li>
              <a href="#onetailedAndTwotailedAlternativeHypothesis">One-tailed and two-tailed alternative hypothesis</a>
            </li>
            <li>
              <a href="#theVariablesInResearch">The variables in research</a>
            </li>
            <li>
              <a href="#theVariablesInResearchAnotherExample">The variables in research - another example</a>
            </li>
            <li>
              <a href="#hypothesisAndVariablesExercise">Hypothesis and variables:<br/><br/>- Exercise 1</a>
            </li>
            <li>
              <a href="#hypothesisAndVariablesExercise2">- Exercise 2</a>
            </li>
            <li>
              <a href="#hypothesisAndVariablesExercise3">- Exercise 3</a>
            </li>
            <li>
              <a href="#hypothesisAndVariablesExercise4">- Exercise 4</a>
            </li>
            <li>
              <a href="#otherTypesOfVariables">Other types of variables</a>
            </li>
            <li>
              <a href="#rationalejustificationOfAResearchStudy">Rationale/Justification of a research study</a>
            </li>
            <li>
              <a href="#samplesOfResearchStudiesRationale">Samples of research studies rationale</a>
            </li>
            <li>
              <a href="#bibliography">Bibliography</a>
            </li>
            <li>
              <a href="#credits">Credits</a>
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
    stagePage.get('videoInicial');
   
  }
  show(){
    this.divContainer.classList.remove('hide');
  }
}

var stages_terminalContent = new terminalContentClass('terminalContent');