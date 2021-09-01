class terminalContentClass_introduccionPropiedadIntelectual extends generalPage{
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
      <h2>Propiedad Intelectual y Referenciación</h2>
      <video class="responsive" src="./images/aspectos-tecnicos/propiedad-intelectual-y-referenciacion/introduccion.mp4" controls="" controlslist="nodownload"></video>

      
      <div class="text-center">
        <button class="btn-general" onclick="stages_terminalContent.menu.back()"">Atrás</button>
        <button class="btn-general" onclick="stages_terminalContent.menu.next()"">Siguiente</button>
        <button class="btn-general btn-show-content" onclick="stages_terminalContent.menu.showContentInText(this,'none')">Mostrar en texto</button>
      </div>
      <div class="text-show-content">
        <h3>Transcripción del video</h3>
        <p>En el video se puede observar al profesor Esteban y Marcela conectados por videoconferencia. Sostienen el siguiente diálogo:</p>
        <p><strong>Ana María: </strong>Buenas tardes, Julián. ¿Me escuchas y me ves bien?</p>
        <p><strong>Julián: </strong>Sí, profesora. Muy claramente.</p>
        <p><strong>Ana María: </strong>¡Excelente! Julián, mi nombre es Ana María y soy la profesora asignada para darte apoyo en tu inquietud. Cuéntame, en qué puedo ayudarte.</p>
        <p><strong>Julián: </strong>Profesora Ana María, hace un par de semanas presenté un trabajo de consulta, y el profesor me puso mala nota y me dijo que si cometía plagio otra vez, me iniciaría un proceso disciplinario. Yo revisé el trabajo, y aunque el profesor en sus observaciones me trataba de demostrar en donde cometí plagio; la verdad no entiendo bien qué fue lo que hice mal. Yo no creo haber hecho algo incorrecto, profesora; pero parece que así fue, pero fue sin intención. </p>
        <p><strong>Ana María: </strong>Entiendo lo que te sucedió, Julián. Muchos estudiantes, pueden incurrir en plagio sin intención, pero lastimosamente es un tema muy serio en el que debemos informarnos muy bien para evitar cometer errores que pueden tener consecuencias graves ya que en esencia es un tema de propiedad intelectual que cada vez tiene mayor valía dentro de nuestra sociedad.</p>
        <p><strong>Julián: </strong>¿Tanto así, profesora? Yo pensé que de pronto el profe estaba exagerando.</p>
        <p><strong>Ana María: </strong>Pues como te decía, es un tema serio; el plagio puede tener incidencias disciplinarias a nivel académico, y en el orden laboral y profesional pueden ser incluso legales. Hace unos años en Alemania, una ministra debió renunciar a su cargo ya que se comprobó que incurrió en plagio en su tesis doctoral.</p>
        <p><strong>Julián: </strong>Ay profesora, eso se oye muy serio.</p>
        <p><strong>Ana María: </strong>Lo es Julián, pero lo más importante es no incurrir en ello nuevamente. Conociendo muy bien qué es la propiedad intelectual, el plagio, y las maneras correctas de referenciar en tus trabajos, los textos, obras, palabras, y acciones elaboradas por otras personas, no deberás tener ningún inconveniente a futuro. Además, no es para nada complicado Y pues eso es lo que te voy a explicar el día de hoy. ¿Estás listo?</p>
        <p><strong>Julián: </strong>Sí señora.</p>
        <p><strong>Ana María: </strong>¡Qué bien! Entonces toma atenta nota de lo que vamos a estudiar a continuación</p>
      </div>
      `;
  }
  importCssFiles(){
    return [
        'generalStage.css|general'
    ]
}
}
stagePage.pageContainerSet('introduccionPropiedadIntelectual',terminalContentClass_introduccionPropiedadIntelectual);