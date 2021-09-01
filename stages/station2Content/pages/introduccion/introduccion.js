class station2ContentClass_introducccion extends generalPage{
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
      <video class="responsive" src="./images/trabajos-escritos/introduccion.mp4" controls="" controlslist="nodownload"></video>
      <div class="text-center">
        <button class="btn-general btn-next" onclick="stage.activity('menu_next')">Siguiente</button>
        <button class="btn-general btn-show-content" onclick="stage.activity('menu_showContentInText_none',this)">Mostrar en texto</button>
      </div>
      <div class="text-show-content">
        <h3>Transcripción del video</h3>
        <p>En el video se puede observar al profesor Esteban y Marcela conectados por videoconferencia. Sostienen el siguiente diálogo:</p>
        <p><strong>Esteban: </strong> Buenos días, estimados Ximena y Andrés. Gracias por conectarse puntualmente.
        </p>
        <p><strong>Ximena:</strong> Buenos días, profesor.</p>
        <p><strong>Andrés:</strong> Buenos días, profesor Esteban!</p>
        <p><strong>Esteban:</strong> Bueno, coméntenme en qué les puedo colaborar?</p>
        <p><strong>Ximena:</strong> Pues profe, nosotros somos estudiantes de primer semestre, y en algunas tareas nos piden que hagamos resúmenes, y en otras los profesores nos dicen que hagamos reseñas. Yo creía que eran lo mismo, pero un profesor nos dijo que no, y la verdad no entiendo bien qué diferencia hay entre uno y otro.</p>
        <p><strong>Andrés:</strong> Sí profesor, de hecho creo que somos varios los que tenemos la misma confusión. Y además también creo que sería útil saber sobre los ensayos. En un par de clases ya nos asignaron ensayos para entregar en dos semanas, y pues la verdad me gustaría saber bien qué tipo de información deben contener.</p>
        <p><strong>Esteban:</strong> Bueno, pues muchas gracias por solicitar asesoría, y los felicito por su excelente actitud para asumir sus trabajos. Como bien insinúan, a veces creemos que todos los trabajos escritos consisten en tomar un poquito de información de un texto y de otro, analizar algo, y colocar un par de opiniones; pero en realidad, cada tipo de trabajo tiene unas características particulares, y es súper importante conocer las diferencias entre ellos.</p>
        <p><strong>Andrés:</strong> Claro que sí, profesor!</p>
        <p><strong>Ximena:</strong> Sí señor, uno cree que todos los trabajos se hacen de la misma manera.</p>
        <p><strong>Esteban:</strong> ¡Perfecto, entonces empecemos! Voy a compartirles algunos materiales para que estudiemos y analicemos los tipos de trabajos más comunes que podrán afrontar cotidianamente durante su formación académica. ¿Listos?</p>
        <p><strong>Ximena:</strong> ¡Listos!</p>
        <p><strong>Andrés:</strong> ¡Listos!</p>
      </div>
      `;
  }
  importCssFiles(){
    return [
        'generalStage.css|general'
    ]
}
}
stagePage.pageContainerSet('introduccion',station2ContentClass_introducccion);