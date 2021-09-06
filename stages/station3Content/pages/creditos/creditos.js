class station3ContentClass_creditos extends generalPage{
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
      <h2>Créditos</h2>
      <div class="creditos">
        <h3>INSTITUCIÓN</h3>
        <p>Universidad Nacional Abierta y a Distancia - UNAD</p>
        <h3>ESCUELA</h3>
        <p>Escuela de Ciencias de la Educación</p>
        <h3>DECANA</h3>
        <p>Clara Esperanza Pedraza Goyeneche, Mag.</p>
        <h3>ELABORADO POR:</h3>
        <p>W-TECH SAS</p>
        <hr/>
        <h3 class="colaboracion-de">CON LA COLABORACIÓN DE:</h3>
        <p><strong>Mauricio Buitrago</strong><br/>Coordinador académico y pedagógico</p>
        <p><strong>Vivian Chitiva</strong><br/>Coautora de Contenido</p>
        <p><strong>Edison Johan Bernal</strong><br/>Desarrollador web</p>
        <p><strong>Julián Rátiva</strong><br/>Diseñador Gráfico</p>
        <h3>© Copyright UNAD 2021</h3>

      </div>
      <div class="text-center">
        <button class="btn-general" onclick="stages_station3Content.menu.back()">Atrás</button>
      </div>
      `;
  }
  importCssFiles(){
    return [
        'generalStage.css|general',
        'creditos.css|general'
    ]
}
}
stagePage.pageContainerSet('creditos',station3ContentClass_creditos);