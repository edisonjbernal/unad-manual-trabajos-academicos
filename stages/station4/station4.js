class station4Class extends generalStage{
    constructor(generalScenario){
      super(generalScenario);
    }
    addCssClass(){
      return [
          'stage_general'
      ]
  }
  content(){
      return `
      <h1>Artículos para publicación</h1>
      <img class="responsive" src="./images/Estacion_4_entrada.jpg" alt="Estación 4" />
      <div class="text-general">
         <p>Gracias a su experiencia orientando trabajos investigativos y publicaciones de varios estudiantes de nuestra Universidad, la profesora Ana María nos comparte una muy valiosa y concisa presentación sobre los aspectos a tener en cuenta para la publicación de artículos en revistas, journals, y otras fuentes académicas que nos permitirán dar a conocer los procesos y resultados de nuestro ejercicio investigativo en diversos escenarios académicos de orden nacional e incluso internacional. Te invitamos a analizar su presentación con gran atención y detalle.</p>
      </div>
      <div class="text-center">
      <button class="btn-general" onclick="stage.get('station4Content')">Ingresar</button>
      </div>
      `;
  }
  importCssFiles(){
    return [
        'generalStage.css|general'
    ]
    }
}

var stages_station4 = new station4Class('station4');