class terminalContentClass_titulacionyTablaDeContenido extends generalPage{
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
      <h2>Titulación y Tabla de Contenido</h2>
      <video class="responsive" src="./images/aspectos-tecnicos/aspectos-generales/titulacionyTabladeContenido.mp4" controls="" controlslist="nodownload"></video>
      <div class="text-center">
        <button class="btn-general" onclick="stages_terminalContent.menu.back()"">Atrás</button>
        <button class="btn-general" onclick="stages_terminalContent.menu.next()"">Siguiente</button>
        <button class="btn-general btn-show-content" onclick="stages_terminalContent.menu.showContentInText(this,'none')">Mostrar en texto</button>
      </div>
      <div class="text-show-content">
        <h3>Transcripción del video</h3>
        <p><strong>Titulación</strong></p>
        <p>Los títulos son esenciales en la elaboración de un trabajo escrito, pues además de orientar a quien lee un texto académico permite que la escritura se exponga de manera organizada. Para la realización de los trabajos académicos elaborados por estudiantes de la UNAD se deben considerar los siguientes lineamientos:</p>
        <p><strong>Título de Primer Nivel</strong></p>
        <p>Es el encabezado de los capítulos que se escribe centrado al inicio de una nueva página, en negrilla, con tamaño de letra 13 y cada palabra iniciando en Mayúscula. Este título se escribe dejando dos espacios dobles después de la margen superior de la hoja. Entre el título de primer nivel y el texto o cuerpo del trabajo se dejan dos espacios de 1,5; el texto que prosigue se escribe en un nuevo párrafo.</p>
        <p><strong>Título de Segundo Nivel</strong></p>
        <p>También denominado subtítulo; se ubica a la izquierda de la hoja, tamaño de letra 13, y en negrilla. Únicamente la primera letra del título va en mayúscula y lo demás en minúscula; no debe tener punto final. Este título va dentro de los textos, así que entre el texto que le precede y este título se dejan dos espacios de 1.5., mientras que entre este título y el texto que prosigue debe ir un (1) espacio doble.</p>
        <p><strong>Título de Tercer Nivel</strong></p>
        <p>Se ubica a la izquierda de la hoja sin sangría, iniciando un nuevo renglón, sin mayúscula sostenida, en letra negrilla y cursiva, con tamaño de letra 13, y con punto al finalizar el título. El texto inicia en un nuevo párrafo dejando un espacio doble entre el título y el texto.</p>
        <p><strong>Títulos de Cuarto Nivel</strong></p>
        <p>Se ubica a la izquierda de la hoja con sangría, iniciando un nuevo renglón, en negrilla, sin mayúscula sostenida, con tamaño de letra 12, y con punto al finalizar el título. Este título da continuidad al texto en el mismo renglón.</p>
        <p><strong>Títulos de Quinto Nivel</strong></p>
        <p>Se ubica a la izquierda de la hoja con sangría, iniciando un nuevo renglón, en negrilla y cursiva, sin mayúscula sostenida, con tamaño de letra 12, y con punto al finalizar el título. Este título da continuidad al texto en el mismo renglón.</p>
        <p><strong>Tabla de contenidos</strong></p>
        <p>A pesar de ser un elemento que se visualiza en los contenidos preliminares del trabajo, la tabla de contenidos se consolida una vez finalizado el trabajo puesto que deberá incluir la paginación de los diferentes componentes de este.</p>
      </div>
      `;
  }
  importCssFiles(){
    return [
        'generalStage.css|general'
    ]
}
}
stagePage.pageContainerSet('titulacionyTablaDeContenido',terminalContentClass_titulacionyTablaDeContenido);