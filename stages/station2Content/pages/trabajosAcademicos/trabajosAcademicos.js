class station2ContentClass_trabajosAcademicos extends generalPage{
    constructor(pageName){
        super(pageName);
    }
    addCssClass(){
      return [
          'stage_general'
      ]
  }
  content(){
      return `
      <h2>Trabajos Académicos</h2>
      <video class="responsive" src="./images/trabajos-escritos/trabajosAcademicos.mp4" controls="" controlslist="nodownload"></video>
      <div class="text-center">
        <button class="btn-general btn-back" onclick="stage.activity('menu_back')">Atrás</button>
        <button class="btn-general btn-next" onclick="stage.activity('menu_next')">Siguiente</button>
        <button class="btn-general btn-show-content" onclick="stage.activity('menu_showContentInText_none',this)">Mostrar en texto</button>
      </div>
      <div class="text-show-content">
        <h3>Transcripción del video</h3>
        <p>Los trabajos académicos hacen parte del continuo de la vida académica, y buscan formar estudiantes integrales que expongan sus ideas, profundicen en y con las ideas de otras personas, y fundamenten sus pensamientos con ética, crítica, y argumentación.</p>
        <p>Existen diferentes tipos de trabajos académicos, que si bien centran su objetivo en la formación integral anteriormente mencionada, tienen diversos aspectos de fondo que dependen del tipo de información que cada uno conlleva. A continuación encontrarás un video explicativo sobre los tipos de trabajos más relevantes para el desarrollo académico de los estudiantes de la UNAD, además de aspectos esenciales para la buena elaboración de estos. Toma atenta nota mientras observas el video.</p>
      </div>
      `;
  }
  importCssFiles(){
    return [
        'generalStage.css|general'
    ]
}
}
stagePage.pageContainerSet('trabajosAcademicos',station2ContentClass_trabajosAcademicos);