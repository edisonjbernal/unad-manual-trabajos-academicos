class terminalContentClass_aspectosEstructuralesTrabajosAcademicos extends generalPage{
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
      <h2>Aspectos estructurales de los trabajos académicos</h2>
      <video class="responsive" src="./images/aspectos-tecnicos/aspectos-generales/aspectosEstructuralesTrabajosAcademicos.mp4" controls="" controlslist="nodownload"></video>
      <div class="text-center">
        <button class="btn-general" onclick="stages_terminalContent.menu.back()"">Atrás</button>
        <button class="btn-general" onclick="stages_terminalContent.menu.next()"">Siguiente</button>
        <button class="btn-general btn-show-content" onclick="stages_terminalContent.menu.showContentInText(this,'none')">Mostar en texto</button>
      </div>
      <div class="text-show-content">
        <h3>Transcripción del video</h3>
        <p>La elaboración de trabajos académicos en la UNAD es un proceso flexible y dinámico, relacionado directamente con regulaciones institucionales e internacionales que propenden por garantizar documentos pertinentes con la calidad propia de nuestra comunidad universitaria.</p>
        <p>Los trabajos académicos están conformados por tres aspectos físicos esenciales, así: </p>
        <p>Preliminares, Cuerpo Texto Académico, y Referencias. </p>
        <p>Atendiendo el nivel académico de cada trabajo, bien sea de Grado o de Posgrado, la entrega de los escritos debe tener aspectos físicos estructurales que serán confirmados por la docencia de cada espacio académico, y que conocerás a continuación.</p>
      </div>
      <div class="text-general">
        Selecciona la opción que desees revisar primero:
      </div>
      <div class="eCards">
        <button class="card">
            Lineamientos generales
        </button>
        <button class="card">
            Preliminares
        </button>
        <button class="card">
            Titulación y tabla de contenido
        </button>
      </div>
      `;
  }
  importCssFiles(){
    return [
        'generalStage.css|general'
    ]
}
}

//let stages_terminalContent_aspectosEstructuralesTrabajosAcademicos = new terminalContentClass_aspectosEstructuralesTrabajosAcademicos('aspectosEstructuralesTrabajosAcademicos');

stagePage.pageContainerSet('aspectosEstructuralesTrabajosAcademicos',terminalContentClass_aspectosEstructuralesTrabajosAcademicos);