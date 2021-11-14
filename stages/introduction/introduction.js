class introductionClass extends generalStage{
    constructor(generalScenario){
      super(generalScenario);
    }
    addCssClass(){
        return [
            'stage_general',
            'stage_introduction'
        ]
    }
    content(){
        let customStyle = `
        <style>
        .stageMaster{
            background-color: rgba(255,255,255,0.9) !important;
        }
        </style>`;


        return `
        ${customStyle}
        <h1>Introducción al Manual de Trabajos Académicos de la UNAD.
        </h1>
        <video  id="stage_introduction_video" class="principal" src="./images/introduccion/introduccion.mp4" controls controlsList="nodownload"  ></video>
        <div class="text-general">

            <h3>Introducción</h3>
            
            <p>El presente Manual para la Presentación de Trabajos Académicos tiene por objeto por objeto dar a conocer a la comunidad académica los lineamientos particulares que propone la Universidad Nacional Abierta y a Distancia (UNAD), y han de ser aplicados por la comunidad universitaria para la elaboración y entrega de diferentes tipos de documentos académicos.</p>

            <p>En este Manual, además de orientaciones generales y específicas de cada una de las fases de un documento académico; los estudiantes y docentes encontrarán ejercicios y ejemplos explicativos que servirán de insumo para la preparación y presentación pertinente de trabajos académicos con el sello distintivo unadista. </p>

            <p>La Universidad Nacional Abierta y a Distancia es un espacio propicio para la producción intelectual tanto desde las actividades y tareas propias de cada curso o espacio académico, como desde los diferentes eventos académicos que en la UNAD se llevan a cabo, como parte de la formación de sus estudiantes. En uno y otro caso, los productos intelectuales de la Universidad se reconocen bajo la denominación de Géneros Académicos Discursivos, que a su vez se clasifican en dos grandes grupos: Géneros Académicos Verbales, y Géneros Académicos Escritos. </p>
 
            <h4>Géneros Académicos Verbales:</h4>

            <p>Conformado por creaciones intelectuales relacionadas directamente con la oralidad; bien sea de carácter individual o grupal. En este grupo se encuentran: Entrevistas, conferencias, sustentaciones orales, simposios, asambleas, paneles, narraciones y disertaciones, entre otras. Para llevar a cabo la apropiada elaboración de este tipo de textos, la UNAD propone una serie de pautas o técnicas que propenden por la efectividad de la expresión oral clara y efectiva que se desarrollan con los docentes de cada espacio académico. </p>

            <h4>Géneros Académicos Escritos:</h4>

            <p>Conformado por los productos académicos desarrollados de manera escrita en los que se incluyen justificaciones, explicaciones y argumentaciones. A este género corresponden las expresiones textuales de distinta extensión como los informes, consultas, reseñas críticas, resúmenes, artículos y ensayos académicos, ponencias, y trabajos de investigación, entre otros. Para la producción de escritos académicos, la UNAD propone el uso de normas internacionales que enaltecen académicamente la producción intelectual escrita de sus estudiantes y docentes.</p>
 
            <p>Dado que en la modalidad formativa propia de nuestra Universidad tienen prevalencia las expresiones textuales correspondientes a los Géneros Académicos Escritos, este Manual para la presentación de trabajos académicos en la UNAD tiene como función fundamental servir de guía a la comunidad universitaria para que ese tipo de textos académicos se lleven a cabo teniendo en cuenta pautas provenientes de lineamientos internacionales, como los de la American Psychological Association – APA -, además de particularidades de la realidad académica unadista.</p>
           
        </div>
        <div class="text-center">
            <button class="btn-general" onclick="stage.get('stationMap')">Comenzar</button>
        </div>
        `;
    }
    importCssFiles(){
        return [
            'generalStage.css|general',
            'introduction.css|local'
        ]
    }
}

var stages_introduction = new introductionClass('introduction');
