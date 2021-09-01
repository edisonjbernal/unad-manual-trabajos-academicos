class terminalContentClass_referenciacionNormasAPA extends generalPage{
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
      <h2>Referenciación (Normas APA)</h2>
      <video class="responsive" src="./images/aspectos-tecnicos/aspectos-generales/referenciacionNormasAPA.mp4" controls="" controlslist="nodownload"></video>
      <div class="text-center">
        <button class="btn-general" onclick="stages_terminalContent.menu.back()"">Atrás</button>
        <button class="btn-general" onclick="stages_terminalContent.menu.next()"">Siguiente</button>
        <button class="btn-general btn-show-content" onclick="stages_terminalContent.menu.showContentInText(this,'none')">Mostrar en texto</button>
      </div>
      <div class="text-show-content">
        <h3>Transcripción del video</h3>
        <p><strong>REFERENCIACIÓN</strong></p>
        <p>La sección de referenciación bibliográfica (Referencias) dentro de un trabajo escrito corresponde al listado de publicaciones citadas a lo largo del cuerpo de tu documento y que sirvieron de argumentación en el desarrollo de este. Dicho listado deberá organizarse de forma alfabética, brindando información completa sobre las fuentes citadas en el texto.
            Aparte de ser útiles para respetar la propiedad intelectual de los autores, las referencias permiten al lector identificar y localizar las fuentes originales en caso de querer corroborar o complementar conocimientos sobre algún tema citado. En estos dos factores radica la necesidad de que todo autor y obra citada en el texto sean obligatoria y debidamente referenciados.
            </p>
            <p>¿Son las referencias lo mismo que una bibliografía?</p>
           <p>NO</p>
           <p>La diferencia entre estas y las bibliografías es que las referencias apoyan la construcción de una idea, sirven de argumento y por tanto han sido usadas dentro del texto para dar peso y fuerza a las ideas expuestas; por ello en las referencias se incluyen solo las publicaciones correspondientes a las citaciones hechas dentro del cuerpo del texto. Por su parte, la bibliografía sirve como fundamento o como propuesta de lecturas posteriores, y en ellas puedes incluir publicaciones que intrínsecamente sugieres al lector abordar, pero que no necesariamente han sido citados dentro del trabajo.</p>
           <p>Los datos básicos que debe contener una referencia son: autor, año de publicación, título, editorial y en el caso de publicaciones electrónicas o en línea el enlace de ubicación de este. Además, en la versión de APA en la que se desarrolló el presente recurso ya no se incluye la ciudad y país de origen de las publicaciones.</p>
           <p>A continuación te presentamos los aspectos más importantes de referenciación que has de tener en cuenta para el desarrollo de tus trabajos, detén el video cuando lo consideres necesario para tomar atenta nota:</p>
           <p><strong>1. FORMATO DE LA PÁGINA:</strong></p>
           <p>El listado referencias comienza en una nueva página inmediatamente después de la última página del cuerpo de tu trabajo. El título “Referencias” debe ir en minúscula, centrado y en negrilla.</p>
           <p>Se mantiene la paginación de tu trabajo.</p>
           <p>El interlineado es a doble espacio, y no hay espacios adicionales entre entradas.</p>
           <p>2. ORDEN DE LAS REFERENCIAS</p>
           <p>Recuerda que el listado debe ir en orden alfabético.</p>
           <p>Si la publicación no tiene autor, utiliza la primera letra del título como referencia obviando los artículos (el, la, los, los, las, un, uno, unos, unas) y ubicándolos al final del título del documento u obra. (Hojarasca, la)</p>
           <p>3. NOMBRES Y FECHAS</p>
           <p>Utiliza el primer apellido del autor y reduce los primeros y segundos nombres a las iniciales.</p>
           <p>Coloca el año de publicación en paréntesis justo después del apellido del autor.</p>
           <p>Si la publicación definitivamente no tiene fecha agrega en paréntesis la abreviación (s.f.)</p>
           <p>4. MÚLTIPLES AUTORES</p>
           <p>Si la publicación tiene varios autores, NO modifiques el orden en el que aparecen en el texto original.</p>
           <p>Si la publicación tiene menos 20 autores, inclúyelos a todos.</p>
           <p>Si la publicación tiene más de 20 autores, escribe hasta el autor número 19, agrega tres puntos suspensivos (…) y escribe luego el último de los autores.</p>
           <p>5. UN AUTOR, VARIAS PUBLICACIONES</p>
           <p>Si en tus referencias cuentas con varias obras de un mismo autor, básate en el año de publicación para ordenarlas, comenzando con la más antigua y terminando con la más reciente.</p>
           <p>Si el autor tiene dos o más publicaciones en un mismo año, recuerda diferenciarlas con una letra minúscula del alfabeto en su respectivo orden. Por ejemplo (2011a) y (2011b)</p>
           <p>6. USO DE LAS MAYÚSCULAS</p>
           <p>En el título y subtítulo de un libro, capítulo, o artículo utiliza mayúscula SOLO en la primera letra de la primera palabra del título (Siervo sin tierra), y en los nombres propios (El retrato de Dorian Gray).</p>
           <p>Para revistas, semanarios, y títulos de prensa, utiliza mayúsculas en todas las palabras principales. (Revista Colombiana de Lingüística).</p>
           <p>7. USO DE ITÁLICAS</p>
           <p>Utiliza letra itálica para títulos de libros, revistas, semanarios, y periódicos.</p>
           <p>NO las utilices para títulos de artículos y capítulos de libro. Tampoco utilices comillas con ellos.</p>
           <p>8. CÓDIGOS DOI</p>
           Algunos artículos y textos en línea cuentan con un código DOI, que corresponde a sus siglas en inglés a un Identificador de Objeto Digital. Si la publicación electrónica cuenta con un código DOI, deberás incluirlo en tu listado de referenciación. El formato de código DOI más utilizado en APA luce en promedio de la siguiente manera:
           <ul>
               <li><strong>https://doi.org/10.xxxx/gobbledygook</strong></li>
           </ul>
           <p>9. URL</p>
           <p>La URL, comúnmente conocida como dirección electrónica, corresponde a ese código que mayormente inicia con las letras “http” o “https”. Deberás utilizar la URL de la fuente solamente si la publicación NO tiene código DOI.</p>
           <p>Utiliza una URL que te lleve directamente a la fuente, no incluyas una URL que dirija al lector a una base de datos general como EBSCO o Academic Search, ni tampoco utilices el antiguo formato “tomado de” por el hecho de no contar con una URL directa. En esos casos, no incluyas la URL tampoco en la citación del documento en el cuerpo del trabajo.</p>
      </div>
      `;
  }
  importCssFiles(){
    return [
        'generalStage.css|general',
        'ecards.css|general'
    ]
}
}
stagePage.pageContainerSet('referenciacionNormasAPA',terminalContentClass_referenciacionNormasAPA);