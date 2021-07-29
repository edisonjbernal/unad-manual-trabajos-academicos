class station3ContentClass_reto4_completarTexto extends generalPage{
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
      <div id="timer_station3ContentClass_reto4_completarTexto"></div>
      <div class="header-h2"><h2>Completar texto</h2></div>
      <div class="text-general list-select-for-text">
        <p>Como lo habrás notado, los proyectos de investigación y las monografías son dos procesos investigativos diferentes. Vamos a continuar nuestro reto haciendo una revisión sobre lo aprendido sobre estos dos tipos de trabajo investigativo.</p>

          <p><strong>Tipo de pregunta:</strong> Seleccionar una opción de la lista para completar un texto</p>
          <p>El texto a continuación describe de manera muy general cada uno de los dos tipos de investigación revisados en esta estación haciendo énfasis en las diferencias que hay entre uno y otro. Completa el texto con las palabras disponibles. <strong>Elige las palabras que completan el texto de manera correcta:</strong></p>
          <div class="alltext-list-select-for-text">
            El proyecto de investigación examina un <span class="span-select"><select class="text-option-to-move" onchange="stagePage.activity('listSelectOptionsForText',this);" data-answer="problema">
              <option value="">-Seleccionar-</option>
              <option value="aciertos y desaciertos">aciertos y desaciertos</option>
              <option value="análisis">análisis</option>
              <option value="área del conocimiento">área del conocimiento</option>
              <option value="descripción crítica">descripción crítica</option>
              <option value="descripción y reflexión">descripción y reflexión</option>
              <option value="exhaustiva">exhaustiva</option>
              <option value="hallazgos">hallazgos</option>
              <option value="problema">problema</option>
              <option value="proceso sistemático">proceso sistemático</option>
              <option value="recolección">recolección</option>
              <option value="reporte">reporte</option>
              <option value="resumen analítico">resumen analítico</option>
              <option value="selección y organización">selección y organización</option>
              <option value="solución o mejoramiento">solución o mejoramiento</option>
          </select></span> practico o teórico a través de un <span class="span-select"><select class="text-option-to-move" onchange="stagePage.activity('listSelectOptionsForText',this);" data-answer="proceso sistemático">
            <option value="">-Seleccionar-</option>
            <option value="aciertos y desaciertos">aciertos y desaciertos</option>
            <option value="análisis">análisis</option>
            <option value="área del conocimiento">área del conocimiento</option>
            <option value="descripción crítica">descripción crítica</option>
            <option value="descripción y reflexión">descripción y reflexión</option>
            <option value="exhaustiva">exhaustiva</option>
            <option value="hallazgos">hallazgos</option>
            <option value="problema">problema</option>
            <option value="proceso sistemático">proceso sistemático</option>
            <option value="recolección">recolección</option>
            <option value="reporte">reporte</option>
            <option value="resumen analítico">resumen analítico</option>
            <option value="selección y organización">selección y organización</option>
            <option value="solución o mejoramiento">solución o mejoramiento</option>
        </select></span> que implica la <span class="span-select"><select class="text-option-to-move" onchange="stagePage.activity('listSelectOptionsForText',this);" data-answer="recolección">
          <option value="">-Seleccionar-</option>
          <option value="aciertos y desaciertos">aciertos y desaciertos</option>
          <option value="análisis">análisis</option>
          <option value="área del conocimiento">área del conocimiento</option>
          <option value="descripción crítica">descripción crítica</option>
          <option value="descripción y reflexión">descripción y reflexión</option>
          <option value="exhaustiva">exhaustiva</option>
          <option value="hallazgos">hallazgos</option>
          <option value="problema">problema</option>
          <option value="proceso sistemático">proceso sistemático</option>
          <option value="recolección">recolección</option>
          <option value="reporte">reporte</option>
          <option value="resumen analítico">resumen analítico</option>
          <option value="selección y organización">selección y organización</option>
          <option value="solución o mejoramiento">solución o mejoramiento</option>
      </select></span> de unos datos, el <span class="span-select"><select class="text-option-to-move" onchange="stagePage.activity('listSelectOptionsForText',this);" data-answer="análisis">
        <option value="">-Seleccionar-</option>
        <option value="aciertos y desaciertos">aciertos y desaciertos</option>
        <option value="análisis">análisis</option>
        <option value="área del conocimiento">área del conocimiento</option>
        <option value="descripción crítica">descripción crítica</option>
        <option value="descripción y reflexión">descripción y reflexión</option>
        <option value="exhaustiva">exhaustiva</option>
        <option value="hallazgos">hallazgos</option>
        <option value="problema">problema</option>
        <option value="proceso sistemático">proceso sistemático</option>
        <option value="recolección">recolección</option>
        <option value="reporte">reporte</option>
        <option value="resumen analítico">resumen analítico</option>
        <option value="selección y organización">selección y organización</option>
        <option value="solución o mejoramiento">solución o mejoramiento</option>
    </select></span> objetivo de estos; y concluye en la generación de un <span class="span-select"><select class="text-option-to-move" onchange="stagePage.activity('listSelectOptionsForText',this);" data-answer="reporte">
      <option value="">-Seleccionar-</option>
      <option value="aciertos y desaciertos">aciertos y desaciertos</option>
      <option value="análisis">análisis</option>
      <option value="área del conocimiento">área del conocimiento</option>
      <option value="descripción crítica">descripción crítica</option>
      <option value="descripción y reflexión">descripción y reflexión</option>
      <option value="exhaustiva">exhaustiva</option>
      <option value="hallazgos">hallazgos</option>
      <option value="problema">problema</option>
      <option value="proceso sistemático">proceso sistemático</option>
      <option value="recolección">recolección</option>
      <option value="reporte">reporte</option>
      <option value="resumen analítico">resumen analítico</option>
      <option value="selección y organización">selección y organización</option>
      <option value="solución o mejoramiento">solución o mejoramiento</option>
  </select></span> en el que se presentan los <span class="span-select"><select class="text-option-to-move" onchange="stagePage.activity('listSelectOptionsForText',this);" data-answer="hallazgos">
    <option value="">-Seleccionar-</option>
    <option value="aciertos y desaciertos">aciertos y desaciertos</option>
    <option value="análisis">análisis</option>
    <option value="área del conocimiento">área del conocimiento</option>
    <option value="descripción crítica">descripción crítica</option>
    <option value="descripción y reflexión">descripción y reflexión</option>
    <option value="exhaustiva">exhaustiva</option>
    <option value="hallazgos">hallazgos</option>
    <option value="problema">problema</option>
    <option value="proceso sistemático">proceso sistemático</option>
    <option value="recolección">recolección</option>
    <option value="reporte">reporte</option>
    <option value="resumen analítico">resumen analítico</option>
    <option value="selección y organización">selección y organización</option>
    <option value="solución o mejoramiento">solución o mejoramiento</option>
</select></span> y se proponen alternativas de <span class="span-select"><select class="text-option-to-move" onchange="stagePage.activity('listSelectOptionsForText',this);" data-answer="solución o mejoramiento">
  <option value="">-Seleccionar-</option>
  <option value="aciertos y desaciertos">aciertos y desaciertos</option>
  <option value="análisis">análisis</option>
  <option value="área del conocimiento">área del conocimiento</option>
  <option value="descripción crítica">descripción crítica</option>
  <option value="descripción y reflexión">descripción y reflexión</option>
  <option value="exhaustiva">exhaustiva</option>
  <option value="hallazgos">hallazgos</option>
  <option value="problema">problema</option>
  <option value="proceso sistemático">proceso sistemático</option>
  <option value="recolección">recolección</option>
  <option value="reporte">reporte</option>
  <option value="resumen analítico">resumen analítico</option>
  <option value="selección y organización">selección y organización</option>
  <option value="solución o mejoramiento">solución o mejoramiento</option>
</select></span>.<br/><br/>
            La monografía aborda una determinada <span class="span-select"><select class="text-option-to-move" onchange="stagePage.activity('listSelectOptionsForText',this);" data-answer="área del conocimiento">
              <option value="">-Seleccionar-</option>
              <option value="aciertos y desaciertos">aciertos y desaciertos</option>
              <option value="análisis">análisis</option>
              <option value="área del conocimiento">área del conocimiento</option>
              <option value="descripción crítica">descripción crítica</option>
              <option value="descripción y reflexión">descripción y reflexión</option>
              <option value="exhaustiva">exhaustiva</option>
              <option value="hallazgos">hallazgos</option>
              <option value="problema">problema</option>
              <option value="proceso sistemático">proceso sistemático</option>
              <option value="recolección">recolección</option>
              <option value="reporte">reporte</option>
              <option value="resumen analítico">resumen analítico</option>
              <option value="selección y organización">selección y organización</option>
              <option value="solución o mejoramiento">solución o mejoramiento</option>
          </select></span> para hacer una <span class="span-select"><select class="text-option-to-move" onchange="stagePage.activity('listSelectOptionsForText',this);" data-answer="descripción crítica">
            <option value="">-Seleccionar-</option>
            <option value="aciertos y desaciertos">aciertos y desaciertos</option>
            <option value="análisis">análisis</option>
            <option value="área del conocimiento">área del conocimiento</option>
            <option value="descripción crítica">descripción crítica</option>
            <option value="descripción y reflexión">descripción y reflexión</option>
            <option value="exhaustiva">exhaustiva</option>
            <option value="hallazgos">hallazgos</option>
            <option value="problema">problema</option>
            <option value="proceso sistemático">proceso sistemático</option>
            <option value="recolección">recolección</option>
            <option value="reporte">reporte</option>
            <option value="resumen analítico">resumen analítico</option>
            <option value="selección y organización">selección y organización</option>
            <option value="solución o mejoramiento">solución o mejoramiento</option>
        </select></span> unificando varias fuentes bibliográficas. La monografía combina un proceso de <span class="span-select"><select class="text-option-to-move" onchange="stagePage.activity('listSelectOptionsForText',this);" data-answer="selección y organización">
          <option value="">-Seleccionar-</option>
          <option value="aciertos y desaciertos">aciertos y desaciertos</option>
          <option value="análisis">análisis</option>
          <option value="área del conocimiento">área del conocimiento</option>
          <option value="descripción crítica">descripción crítica</option>
          <option value="descripción y reflexión">descripción y reflexión</option>
          <option value="exhaustiva">exhaustiva</option>
          <option value="hallazgos">hallazgos</option>
          <option value="problema">problema</option>
          <option value="proceso sistemático">proceso sistemático</option>
          <option value="recolección">recolección</option>
          <option value="reporte">reporte</option>
          <option value="resumen analítico">resumen analítico</option>
          <option value="selección y organización">selección y organización</option>
          <option value="solución o mejoramiento">solución o mejoramiento</option>
      </select></span> de fuentes con un ejercicio de <span class="span-select"><select class="text-option-to-move" onchange="stagePage.activity('listSelectOptionsForText',this);" data-answer="descripción y reflexión">
        <option value="">-Seleccionar-</option>
        <option value="aciertos y desaciertos">aciertos y desaciertos</option>
        <option value="análisis">análisis</option>
        <option value="área del conocimiento">área del conocimiento</option>
        <option value="descripción crítica">descripción crítica</option>
        <option value="descripción y reflexión">descripción y reflexión</option>
        <option value="exhaustiva">exhaustiva</option>
        <option value="hallazgos">hallazgos</option>
        <option value="problema">problema</option>
        <option value="proceso sistemático">proceso sistemático</option>
        <option value="recolección">recolección</option>
        <option value="reporte">reporte</option>
        <option value="resumen analítico">resumen analítico</option>
        <option value="selección y organización">selección y organización</option>
        <option value="solución o mejoramiento">solución o mejoramiento</option>
    </select></span> sobre el tema investigado. En este caso, el investigador estudia de manera <span class="span-select"><select class="text-option-to-move" onchange="stagePage.activity('listSelectOptionsForText',this);" data-answer="exhaustiva">
      <option value="">-Seleccionar-</option>
      <option value="aciertos y desaciertos">aciertos y desaciertos</option>
      <option value="análisis">análisis</option>
      <option value="área del conocimiento">área del conocimiento</option>
      <option value="descripción crítica">descripción crítica</option>
      <option value="descripción y reflexión">descripción y reflexión</option>
      <option value="exhaustiva">exhaustiva</option>
      <option value="hallazgos">hallazgos</option>
      <option value="problema">problema</option>
      <option value="proceso sistemático">proceso sistemático</option>
      <option value="recolección">recolección</option>
      <option value="reporte">reporte</option>
      <option value="resumen analítico">resumen analítico</option>
      <option value="selección y organización">selección y organización</option>
      <option value="solución o mejoramiento">solución o mejoramiento</option>
  </select></span> una temática delimitada para posteriormente demostrar en un <span class="span-select"><select class="text-option-to-move" onchange="stagePage.activity('listSelectOptionsForText',this);" data-answer="resumen analítico">
    <option value="">-Seleccionar-</option>
    <option value="aciertos y desaciertos">aciertos y desaciertos</option>
    <option value="análisis">análisis</option>
    <option value="área del conocimiento">área del conocimiento</option>
    <option value="descripción crítica">descripción crítica</option>
    <option value="descripción y reflexión">descripción y reflexión</option>
    <option value="exhaustiva">exhaustiva</option>
    <option value="hallazgos">hallazgos</option>
    <option value="problema">problema</option>
    <option value="proceso sistemático">proceso sistemático</option>
    <option value="recolección">recolección</option>
    <option value="reporte">reporte</option>
    <option value="resumen analítico">resumen analítico</option>
    <option value="selección y organización">selección y organización</option>
    <option value="solución o mejoramiento">solución o mejoramiento</option>
</select></span> los conocimientos obtenidos, el tipo de experiencia y los <span class="span-select"><select class="text-option-to-move" onchange="stagePage.activity('listSelectOptionsForText',this);" data-answer="aciertos y desaciertos">
  <option value="">-Seleccionar-</option>
  <option value="aciertos y desaciertos">aciertos y desaciertos</option>
  <option value="análisis">análisis</option>
  <option value="área del conocimiento">área del conocimiento</option>
  <option value="descripción crítica">descripción crítica</option>
  <option value="descripción y reflexión">descripción y reflexión</option>
  <option value="exhaustiva">exhaustiva</option>
  <option value="hallazgos">hallazgos</option>
  <option value="problema">problema</option>
  <option value="proceso sistemático">proceso sistemático</option>
  <option value="recolección">recolección</option>
  <option value="reporte">reporte</option>
  <option value="resumen analítico">resumen analítico</option>
  <option value="selección y organización">selección y organización</option>
  <option value="solución o mejoramiento">solución o mejoramiento</option>
</select></span> que se presentaron en el progreso de la monografía.
          </div>
    
            
      </div>
      
      <div class="text-center">
        <button class="btn-general btn-back" onclick="stage.activity('menu_back')">Atrás</button>
        <button class="btn-general btn-next" onclick="stage.activity('menu_next')">Siguiente</button>
      </div>
      `;
  }
  hide(){
    //VAria para las páginas
    this.divContainer.classList.add('hide');
    stages_station3Content.pointsManager.add('station3ContentClass_reto4_completarTexto',this.listSelectOptionsForText.pointsActivityCalculate.totalPoints);
  }
  importCssFiles(){
    return [
        'generalStage.css|general',
        'clock.css|general',
        'list-select-for-text.css|general'
    ]
  }
  importJSFiles(){
    this.listSelectOptionsForText = new listSelectOptionsForTextClass();
    this.listSelectOptionsForText.setPoints(2);
    this.listSelectOptionsForText.messageCorrectAnswer='<strong>Correcto</strong> ¡Muy bien!';
  }
  show(){
    //Varia para las páginas
    this.divContainer.classList.remove('hide');

  }
}
stagePage.pageContainerSet('reto4_completarTexto',station3ContentClass_reto4_completarTexto);
