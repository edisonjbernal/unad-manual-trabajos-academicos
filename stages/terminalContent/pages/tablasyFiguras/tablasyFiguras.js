class terminalContentClass_tablasyFiguras extends generalPage{
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
      <h2>Tablas y Figuras</h2>
    <video class="responsive" src="./images/aspectos-tecnicos/propiedad-intelectual-y-referenciacion/tablasyFiguras.mp4" controls="" controlslist="nodownload"></video>
      <div class="text-center">
        <button class="btn-general" onclick="stages_terminalContent.menu.back()">Atrás</button>
        <button class="btn-general" onclick="stages_terminalContent.menu.next()">Siguiente</button>
        <button class="btn-general btn-show-content" onclick="stages_terminalContent.menu.showContentInText(this,'none')">Mostrar en texto</button>
      </div>
      <div class="text-show-content">
        <h3>Transcripción del video</h3>
        <p>TABLAS Y FIGURAS</p>
        <p>Las tablas y figuras se utilizan como una manera de explicar detalles de un texto, si este así lo requiere. Estas incluyen información clara y concisa de tal manera que quien lee un escrito obtenga mejores detalles de la lectura que esté haciendo. Además, estas pueden provenir de tus propios análisis del tema, pero también pueden ser tomadas de otras fuentes.</p>
        <p>Todas las tablas y figuras deben estar numeradas en orden de aparición, además de tener un título que describa la información que en estas contienen. El cuerpo del trabajo cuenta con una numeración para las Tablas y una numeración aparte para las Figuras; el consecutivo no debe mezclar estos dos tipos de ilustraciones, y recuerda que la numeración de ellas también debe estar incluida en la Tabla de Contenidos de tu trabajo.</p>
        <p>Tanto las tablas como las figuras van centradas en la página de texto, y el número y título deben ir en la parte superior de cada una de ellas. En la parte inferior, y a manera de pie de página, hay una línea explicativa de la información que en estas se consigna. Si existen columnas en cualquiera de los casos, estas requieren ser nombradas.</p>
        <p>Véanse los ejemplos a continuación:</p>
        <p>EJEMPLO DE TABLA</p>
        <p>Recuerda que las tablas NO deben contener líneas verticales</p>
        <table class="table-tablasyFiguras">
            <thead>
                <tr>
                    <th>Intervalo de edades</th>
                    <th>Genero F</th>
                    <th>Genero M</th>
                    <th>Frecuencia</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1 a 2 años</td>
                    <td>23</td>
                    <td>19</td>
                    <td>3 años</td>
                </tr>
                <tr>
                    <td>3 a 4 años</td>
                    <td>31</td>
                    <td>27</td>
                    <td>2 años</td>
                </tr>
                <tr>
                    <td>5 a 6 años</td>
                    <td>38</td>
                    <td>33</td>
                    <td>1 años</td>
                </tr>
                <tr>
                    <td>7 a 8 años</td>
                    <td>51</td>
                    <td>48</td>
                    <td>1 años</td>
                </tr>
            </tbody>
        </table>
        <p>Nota: la población proviene de 5 municipios del departamento del Huila</p>
        <p>EJEMPLO DE FIGURA</p>
        <p>La Figura 1 presenta las áreas de capacitación que más interesan a los profesores de del Departamento de Nariño.</p>
        <p><strong>Áreas de capacitación</strong></p>
        <table class="table-tablasyFiguras table-tablasyFiguras-figure">
            <tr><th>Escritura</th><td>26%</td></tr>
            <tr><th>Lectura</th><td>18%</td></tr>
            <tr><th>Pruebas de estado</th><td>14%</td></tr>
            <tr><th>Lenguaje</th><td>10%</td></tr>
            <tr><th>Razonamiento Cuantitativo</th><td>5%</td></tr>
            <tr><th>Actualización docente</th><td>3%</td></tr>
            <tr><th>Literatura</th><td>Lenguaje de señas</td></tr>
            <tr><th>Otros</th><td>2%</td></tr>
            
        </table>
        <p>Finalmente, ten en cuenta que al incluir una tabla o figura elaborada por una persona distinta a quien realiza el trabajo académico, es decir tomado de otro texto, en la parte inferior a manera de pie de página se escribe: Fuente: y se describen los datos de donde la tabla o figura fue obtenida.</p>
      </div>
      `;
  }
  importCssFiles(){
    return [
        'generalStage.css|general',
        'tablas.css|local'
    ]
}
}
stagePage.pageContainerSet('tablasyFiguras',terminalContentClass_tablasyFiguras);