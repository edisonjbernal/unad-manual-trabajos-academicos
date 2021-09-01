class terminalContentClass_lineamientosGenerales extends generalPage{
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
      <h2>Lineamientos Generales</h2>
      <div class="text-general">
        <p>Para la elaboración de los trabajos académicos en la UNAD, se deben tener en cuenta los siguientes aspectos técnicos formales:</p>
      </div>
      <video class="responsive" src="./images/aspectos-tecnicos/aspectos-generales/lineamientosGenerales.mp4" controls="" controlslist="nodownload"></video>
      <div class="text-center">
        <button class="btn-general" onclick="stages_terminalContent.menu.back()"">Atrás</button>
        <button class="btn-general" onclick="stages_terminalContent.menu.next()"">Siguiente</button>
        <button class="btn-general btn-show-content" onclick="stages_terminalContent.menu.showContentInText(this,'none')">Mostrar en texto</button>
      </div>
      <div class="text-show-content">
        <h3>Transcripción del video</h3>
        <p><strong>Tamaño de Papel</strong></p>
        <p>Al presentar un trabajo académico escrito, el formato de hoja ha de ser de tamaño carta de color blanco. Deberá ir en orientación vertical, ya que en caso de que el trabajo deba imprimirse, será posible almacenarlo en archivadores, folders o libreros. Algunas entregas pueden utilizar otros formatos siempre y cuando el contenido y la instrucción explícita docente así lo requieran.</p>
        <p><strong>Tipo de letra</strong></p>
        <p>La elección de la letra es esencial para la elaboración de un trabajo escrito, pues su tipo, tamaño y color sirven de apoyo para la expresión de las ideas escritas. Las regulaciones universitarias permiten el uso de las fuentes Times New Roman, Calibri y Arial que pueden ser combinadas siempre y cuando faciliten y organicen visualmente el cuerpo del texto. Por ejemplo: títulos, subtítulos, pies de página, pies de gráficos o figuras.</p>
        <p>El escrito de todos los párrafos de un solo trabajo debe mantener un (1) solo tipo de letra durante todo su contenido.El color de la letra debe ser negro, y en caso de impresión, ésta deberá hacerse por una sola cara de la hoja, a menos que por orientaciones docentes se requiera algo diferente.</p>
        <p><strong>Alineación de los párrafos</strong></p>
        <p>El espacio entre línea y línea permite una lectura más clara, además de brindar los descansos gramaticales que una lectura requiere.De tal manera, los párrafos de todos los trabajos académicos en la UNAD deben tener un espacio doble entre sus renglones con un tamaño de letra 12. Para iniciar un nuevo párrafo se requiere dejar una (1) sangría al lado izquierdo de la página, y el espacio entre párrafos es de un (1) solo renglón. Esto indica además que una nueva idea relacionada con el escrito está por comenzar. Los párrafos de todos los textos deben estar en formato justificado de tal manera que todos los renglones tengan una adecuada organización. Todos los procesadores de textos brindan la opción justificación de párrafos en las opciones de alineación de textos.</p>
        <p><strong>Márgenes</strong></p>
        <p>Las márgenes son un componente básico y de gran importancia para la elaboración de un escrito académico; ellas reflejan el orden del escrito que el autor quiere presentar, y además orientan al lector al hacer pausas debidas para llevar a cabo una mejor comprensión de las ideas. Todos los trabajos escritos académicos de la UNAD deben tener un espacio de 2,54 cm en todos los costados de las hojas.</p>
      </div>
      `;
  }
  importCssFiles(){
    return [
        'generalStage.css|general'
    ]
}
}

stagePage.pageContainerSet('lineamientosGenerales',terminalContentClass_lineamientosGenerales);