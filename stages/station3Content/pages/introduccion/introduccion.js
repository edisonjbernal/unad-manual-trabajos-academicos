class station3ContentClass_introducccion extends generalPage{
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
      <video class="responsive" src="./images/trabajos-y-proyectos-investigativos/introduccion.mp4" controls="" controlslist="nodownload"></video>
      <div class="text-center">
        <button class="btn-general btn-next" onclick="stage.activity('menu_next')">Siguiente</button>
        <button class="btn-general btn-show-content" onclick="stage.activity('menu_showContentInText_none',this)">Mostrar en texto</button>
      </div>
      <div class="text-show-content">
        <h3>Transcripción del video</h3>
        <p>Los profesores Ana María y Esteban presentan, a manera de teleconferencia o programa televisivo, un video animado que a la vez funge como introducción a conceptos fundamentales de los trabajos y proyectos investigativos.</p>
        <p><strong>Esteban:</strong> Reciban un cordial saludo, y gracias por conectarse a esta videoconferencia (a este programa) en  que tendrás la oportunidad de conocer aspectos básicos sobre la planeación y desarrollo de trabajos investigativos dentro de la Universidad Nacional Abierta y a Distancia. Mi nombre es Esteban, y junto a mi colega Ana María, hemos tenido el privilegio de ser asignados como tus docentes guía para este micro seminario.</p>
        <p><strong>Ana María:</strong> Hola, soy Ana María, y tal como lo mencionó el profesor Esteban, te damos la bienvenida a este espacio, en el que tendrás la oportunidad de adentrarte en los elementos fundamentales que constituyen el desarrollo de proyectos y trabajos investigativos, que según la naturaleza de tu programa, y los lineamientos curriculares del mismo, podrán fungir como ejes de tu formación profesional y ser parte del requisito de grado de tu proceso formativo. Así que sin más, comencemos.</p>
        <p><strong>TÍTULO: LA INVESTIGACIÓN</strong></p>
        <p><strong>Esteban:</strong> La investigación es el proceso sistemático que se lleva a cabo para generar nuevo conocimiento, que en palabras del investigador colombiano, Fabián Coelho, "es un proceso intelectual y experimental que comprende un conjunto de métodos aplicados de modo sistemático, con la finalidad de indagar sobre un asunto o tema, así como de ampliar o desarrollar su conocimiento, sea este de interés científico, humanístico, social o tecnológico".</p>
        <p><strong>Ana María:</strong> Es a partir del interés particular de cada investigador, que se plantean los objetivos y se define la situación a investigar, esta situación es mayormente conocida en el ámbito académico como “problema”. </p>
        <p>Para plantear un proyecto o trabajo investigativo, es necesario tener en consideración las siguientes características generales:</p>
        <p><strong>Esteban:</strong> Desde el inicio hasta el final del ejercicio investigativo, se debe recolectar información de diferentes fuentes académicas que soporten la idea principal de quien investiga.</p>
        <p><strong>Ana María:</strong> La investigación requiere de observación y fundamentación de quien la realiza. Una investigación de orden netamente empírico está condenada a su deslegitimación.</p>
        <p><strong>Esteban:</strong> La investigación debe tener un objetivo general puntual, claro y medible.</p>
        <p><strong>Ana María:</strong> Quien investiga debe recolectar información previa del tema a ser investigado.</p>
        <p><strong>Esteban:</strong> El proyecto o trabajo investigativo, conlleva a una organización y coherencia que están enmarcadas dentro de una metodología investigativa específica dependiendo de su objetivo. Por ello, el investigador debe recoger información, o datos, que deberán ser analizados.</p>
        <p><strong>Ana María:</strong> Esta recolección de datos, requiere que el investigador deba aceptar toda información recolectada de manera objetiva. No se debe manipular o tergiversar la información para obtener los resultados esperados o propuestos. Una investigación objetiva puede demostrarle al investigador que su idea inicial sobre el problema (hipótesis) puede estar errada. </p>
        <p><strong>Esteban:</strong> De esta manera, es a partir del análisis de sus datos, que el investigador presenta nuevos conocimientos que aporten al área de conocimiento a la que se está investigando.</p>
        <p><strong>Ana María:</strong> Todo trabajo investigativo, trátese de un proyecto de trabajo de grado, de una monografía, o de otra índole, ha de contar con los siguientes elementos para su efectivo desarrollo:</p>
        <ul>
          <li>Anteproyecto (Ana María)</li>
          <li>Planteamiento del problema (Esteban)</li>
          <li>Justificación (Ana María) </li>
          <li>Antecedentes o estado del arte (Esteban)</li>
          <li>Objetivos generales y específicos (Ana María)</li>
          <li>Metodología investigativa propuesta (Esteban)</li>
          <li>Bibliografía inicial (Ana María) </li>
          <li>Título (Esteban)</li>
        </ul>
        <p><strong>Ana María:</strong> Finalmente, existen trabajos investigativos de diferente índole, y dentro de nuestra comunidad académica podemos distinguir tres tipos fundamentales que son la investigación documental, la investigación cualitativa, y la investigación cuantitativa. </p>
        <p><strong>Esteban:</strong> En materiales que encontrarás posteriores a este video/seminario/programa, nos adentraremos en las percepciones de elementos fundamentales que definen varios de los conceptos anteriormente mencionados. Así que prosigamos con el video que te presentamos a continuación.</p>
      </div>
      `;
  }
  importCssFiles(){
    return [
        'generalStage.css|general'
    ]
}
}
stagePage.pageContainerSet('introduccion',station3ContentClass_introducccion);
