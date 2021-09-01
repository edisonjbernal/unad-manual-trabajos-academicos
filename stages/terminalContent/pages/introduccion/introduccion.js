class terminalContentClass_introducccion extends generalPage{
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
      <h2>Introducción</h2>
      <video class="responsive" src="./images/aspectos-tecnicos/aspectos-generales/introduccion.mp4" controls="" controlslist="nodownload"></video>
      <div class="text-center">
        <button class="btn-general" onclick="stages_terminalContent.menu.next()"">Siguiente</button>
        <button class="btn-general btn-show-content" onclick="stages_terminalContent.menu.showContentInText(this,'none')">Mostrar en texto</button>
      </div>
      <div class="text-show-content">
        <h3>Transcripción del video</h3>
        <p>En el video se puede observar al profesor Esteban y Marcela conectados por videoconferencia. Sostienen el siguiente diálogo:</p>
        <p><strong>Esteban: </strong> Buenos días, Marcela. ¿Me escuchas y me ves bien?.</p>
        <p><strong>Marcela: </strong> Sí, profesor. Perfectamente.</p>
        <p><strong>Esteban: </strong> Qué bien Marcela, mi nombre es Esteban y soy tu profesor consejero asignado. Dime en qué te puedo servir.</p>
        <p><strong>Marcela: </strong>Profesor, soy estudiante de primer semestre, y en esta semana ya nos están asignando los primeros trabajos y tareas. Los profesores nos dicen que es muy importante  aplicar los parámetros propuestos por la Universidad para entregarlos de manera correcta. ¿A qué se refieren?.</p>
        <p><strong>Esteban: </strong>Muy bien, tus profesores están haciendo referencia a diferentes aspectos formales que deben cumplir todos los trabajos escritos que desarrollemos dentro de nuestro quehacer académico en la UNAD. Varios de estos parámetros son comunes a todos los tipos de trabajo que pueden ir desde trabajos cotidianos como consultas, resúmenes y ensayos críticos hasta los más avanzados como proyectos investigativos y artículos para ser publicados en revistas especializadas.</p>
        <p><strong>Marcela: </strong>Ah, ya comienzo a entender, ¿son esas cosas como las normas APA?.</p>
        <p><strong>Esteban: </strong>(En tono muy amable, y con una sutil sonrisa) jejeje. Bueno, las normas APA son uno de los diferentes aspectos formales a tener en cuenta, y hay otros más para considerar que son una especie de marca registrada dentro de nuestra Universidad; y a la vez, habrá algunos parámetros que también varían y son acordes a la complejidad del trabajo y el nivel en el que se desarrollen; es decir que hay algunas especificaciones para trabajos de posgrados y niveles superiores a los programas de grado.</p>
        <p><strong>Marcela: </strong>Ay profesor, pero se oye muy complicado.</p>
        <p><strong>Esteban: </strong>Para nada Marcela, contigo nos enfocaremos solo en los parámetros comunes, y particularmente en aquellos pertinentes a tu nivel actual como estudiante de primeros semestres. Verás que son muy específicos y útiles, y podrás aplicarlos con facilidad a tus trabajos de aquí hasta el final de tus estudios de grado. ¿Te parece bien si empezamos?.</p>
        <p><strong>Marcela: </strong>Bueno profesor, Esteban. Ya me tranquiliza bastante, y claro que sí, comencemos.</p>
        <p><strong>Esteban: </strong>Excelente, Marcela. Te voy a compartir la pantalla con un menú de materiales y actividades en las que te iré explicando los primeros aspectos técnicos que deberás aplicar para el desarrollo de tus trabajos. También encontrarás en estos materiales, algunos ejercicios prácticos que te irán familiarizando más con ellos. Así que adelante!.</p>
      </div>
      `;
  }
  importCssFiles(){
    return [
        'generalStage.css|general'
    ]
}
}
stagePage.pageContainerSet('introduccion',terminalContentClass_introducccion);