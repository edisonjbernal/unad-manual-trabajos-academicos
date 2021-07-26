class station3ContentClass_tiposDeTrabajosInvestigativos extends generalPage{
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
      <h2>Tipos de Trabajos Investigativos</h2>
      <video class="responsive" src="./images/trabajos-y-proyectos-investigativos/tiposDeTrabajosInvestigativos.mp4" controls="" controlslist="nodownload"></video>
      <div class="text-center">
        <button class="btn-general btn-next" onclick="stage.activity('menu_back')">Atrás</button>
        <button class="btn-general btn-next" onclick="stage.activity('menu_next')">Siguiente</button>
        <button class="btn-general btn-show-content" onclick="stage.activity('menu_showContentInText_none',this)">Mostar en texto</button>
      </div>
      <div class="text-show-content">
        <h3>Transcripción del video</h3>
        <p>Antes de iniciar, debes tener muy en cuenta, que en el presente material te estamos indicando sobre los pasos del proceso investigativo, de los cuales algunos son partes del trabajo escrito como tal; sin embargo, este material no te indica cuáles son las partes del trabajo escrito que presentarás como documento de tu proyecto, dado que dichas partes ya fueron tratadas en estaciones previas del presente recurso. Así que iniciemos:</p>
        <p>Luego de que tu Anteproyecto sea aprobado por las o  los docentes a cargo de guiar tu trabajo investigativo dentro de tu programa académico, inicia el proceso investigativo de manera rigurosa, que si bien seguirá los lineamientos propuestos en el Anteproyecto, al ser la investigación un proceso de transformación constante, algunos aspectos pueden llegar a ser transformados. Esto solo se definirá en el transcurso del proceso.</p>
        
      </div>
      `;
  }
  importCssFiles(){
    return [
        'generalStage.css|general'
    ]
}
}
stagePage.pageContainerSet('tiposDeTrabajosInvestigativos',station3ContentClass_tiposDeTrabajosInvestigativos);