class terminalContentClass_citacionNormasAPA extends generalPage{
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
      <h2>Citación (Normas APA)</h2>
      <video class="responsive" src="./images/aspectos-tecnicos/propiedad-intelectual-y-referenciacion/citacionNormasAPA.mp4" controls="" controlslist="nodownload"></video>
      <div class="text-center">
        <button class="btn-general" onclick="stages_terminalContent.menu.back()">Atrás</button>
        <button class="btn-general" onclick="stages_terminalContent.menu.next()">Siguiente</button>
        <button class="btn-general btn-show-content" onclick="stages_terminalContent.menu.showContentInText(this,'none')">Mostrar en texto</button>
      </div>
      <div class="text-show-content">
        <h3>Transcripción del video</h3>
         <p><strong>CITACIÓN (NORMAS APA)</strong></p>
        <p>La citación tiene básicamente dos objetivos:</p>
        <p>1- Aportar sustento teórico e intertextualidad a tu escrito. Estas son condiciones de calidad para todo tipo de trabajo académico. El sustento teórico da validez a las propuestas que hagas en tu trabajo, y la intertextualidad refiere a la capacidad que adquiere tu texto de interactuar con trabajos previos sobre el mismo tema o temas afines.</p>
        <p>2- Otorgar el merecido reconocimiento a quienes contribuyen directa o indirectamente con el enriquecimiento conceptual y de contenido general de tu trabajo. Para lograr esto de manera correcta, existen diferentes tipos de normas que contienen algunas pautas de citación que nos evitarán incurrir en lo que ya conocemos como plagio.</p>
        <p>Las normas APA (American Psychological Association) se constituyen probablemente en las más reconocidas mundialmente para este efecto a nivel académico, aunque has de saber que algunas disciplinas tienen otras normas muy específicas. Dada la predominancia ya mencionada de las normas APA, nos enfocaremos en ellas en el resto del presente capítulo.</p>
        <p>Al momento de llevar a cabo una cita al estilo propuesto por APA nos enfocaremos en incluir dentro de esa parte del cuerpo de nuestro trabajo la fecha y el autor del texto del que proviene la idea expuesta. Esto además nos permitirá a nosotros y a los lectores ubicar con facilidad la obra completa de dicho autor en las referencias bibliográficas ubicadas en la parte final de nuestro trabajo.</p>
        <p>La citación podemos dividirla en dos grandes estrategias, la paráfrasis y la citación textual. Veamos:</p>
        <p><strong>1- ESTRATEGIA NÚMERO UNO - PARÁFRASIS</strong></p>
        <p>Al hacer uso de la Paráfrasis estamos reescribiendo con nuestras propias palabras la información que encontramos en una creación de otros autores; y lo hacemos porque dicha información tiene una relación directa con el objeto de nuestro propio trabajo y se asemeja convenientemente a nuestras propias ideas. Cuando hacemos un parafraseo de ideas no propias debemos siempre referenciar a quién las escribe y de dónde las obtuvimos, así evitamos llevar a cabo un plagio con nuestra información.</p>
        <p>A su vez, la paráfrasis puede ser de dos tipos: <strong>parentética o narrativa.</strong></p>
        <p><strong>La paráfrasis parentética</strong> es un texto en el que hacemos referencia, con nuestras propias palabras, a algo dicho por otra persona agregando al final en un paréntesis el apellido del autor y el año de publicación o emisión de la obra en la que está incluida dicha idea. Veamos el siguiente ejemplo:</p>
        <ul>
            <li>Los niños deben desarrollar su imaginación (Sendak, 2015).</li>
        </ul>
        <p><strong>La paráfrasis narrativa</strong> es un texto en el que mencionamos el apellido del autor como parte del texto e inmediatamente en paréntesis solo incluimos el año de publicación o emisión de la obra en la que está incluida dicha idea. Veamos el siguiente ejemplo:</p>
        <ul>
            <li>Tal y como lo mencionó Sendak (2015) los niños deben desarrollar su imaginación.</li>
        </ul>
        <p><strong>2. ESTRATEGIA NÚMERO DOS - CITA TEXTUAL</strong></p>
        <p>Dentro de la realización de los trabajos académicos muchas veces se hace necesario ir más allá de escribir nuestras propias ideas o de parafrasear ideas no propias, esto porque las ideas exactas de otras personas refuerzan con mayor solidez lo planteado en nuestros documentos. 
            A esto se le denomina Citación Textual, y es el recurrir a la presentación de las palabras exactas expresadas por otras personas que contribuyen con el desarrollo de nuestro trabajo académico. Las normas APA proponen que las citaciones siempre deban ir registradas y referenciadas siguiendo ciertos lineamientos particulares.
            </p>
        <p>Lo primero a tener en cuenta es que estas pueden ser cortas (de no más de 40 palabras) o largas (bloques mayores a 40 palabras). Las cortas deben llevar “comillas” mientras que las largas no. Además, al igual que la paráfrasis, la citación textual puede ser <strong>parentética o narrativa.</strong></p>
        <p><strong>La citación textual parentética de expresiones cortas</strong> incluye el apellido del autor y el año de la publicación entre paréntesis justo después de la cita. En lo posible, este tipo de cite también incluye el número de la página. Por ejemplo:</p>
        <ul>
            <li><strong>Claramente, “el desarrollo de la imaginación en los niños es crucial” (Sendak, 2015, p.24).</strong></li>
        </ul>
        <p><strong>La citación textual narrativa de expresiones cortas</strong> incluye el apellido del autor dentro del texto mientras que el año de la publicación puede venir entre paréntesis justo después del apellido o posteriormente en el texto. En lo posible, este tipo de cite también incluye el número de la página. Veamos los dos siguientes ejemplos:</p>
        <ul>
            <li><strong>Como bien lo estableció Sendak (2015), “el desarrollo de la imaginación en los niños es crucial”.</strong></li>
            <li><strong>Como fue expresado por Sendak: “el desarrollo de la imaginación en los niños es crucial” (2015, p.24).</strong></li>
        </ul>
        <p>En el caso de la citación textual larga (de más de 40 palabras) debemos proceder a iniciar dicho texto con una sangría de 5 espacios y un interlineado a doble espacio. Si existe un segundo párrafo dentro de la citación (que no es muy recomendado), deberás iniciarlo con otra sangría pero sin separarlo del párrafo anterior. Recuerda que las citaciones textuales largas NO llevan comillas. Observa las siguientes imágenes con dos correspondientes ejemplos.</p>
        <p>Ejemplo 1</p>
        <p>El día había transcurrido del modo como suelen transcurrir estos días; lo había malbaratado,  lo había consumido suavemente con mi manera primitiva y extraña de vivir;  había trabajado un buen rato, dando vueltas a los libros viejos;  había tenido dolores durante dos horas, como suele tenerlos la gente de alguna edad;  había tomado unos polvos y me había alegrado de que los dolores se dejaran engañar;  me había dado un baño caliente, absorbiendo el calorcillo agradable;  había recibido tres veces el correo y hojeado las cartas, todas sin importancia, y los impresos,  había hecho mi gimnasia respiratoria, dejando hoy por comodidad los ejercicios de meditación. (Hesse, 1927).</p>
        <p>Ejemplo 2</p>
        <p>El día había transcurrido del modo como suelen transcurrir estos días;  lo había malbaratado,  lo había consumido suavemente con mi manera primitiva y extraña de vivir;  había trabajado un buen rato, dando vueltas a los libros viejos;  había tenido dolores durante dos horas, como suele tenerlos la gente de alguna edad;  había tomado unos polvos y me había alegrado de que los dolores se dejaran engañar;  me había dado un baño caliente, absorbiendo el calorcillo agradable;  había recibido tres veces el correo y hojeado las cartas, todas sin importancia, y los impresos,  había hecho mi gimnasia respiratoria, dejando hoy por comodidad los ejercicios de meditación.</p>
        <p>Ninguna idea era más odiosa y horrible que la de tener que ejercer un cargo,  someterse a la distribución del tiempo,  obedecer a otros. Una oficina, una cancillería, un negociado eran cosas para el tan execrables como la muerte, y lo más terrible que pudo vivir en sueños fue la reclusión en un cuartel. (Hesse, 1927).</p>
        <p>PARA TERMINAR, RECUERDA ALGO DE SUMA IMPORTANCIA: COMO NORMA GENERAL, MÁXIMO 10% DEL CONTENIDO DE TU TRABAJO PUEDE SER DE CITACIONES TEXTUALES, y UN PORCENTAJE SIMILAR PODRÍA CORRESPONDER A CITACIÓN PARAFRASEADA.</p>
      </div>
      `;
  }
  importCssFiles(){
    return [
        'generalStage.css|general'
    ]
}
}
stagePage.pageContainerSet('citacionNormasAPA',terminalContentClass_citacionNormasAPA);