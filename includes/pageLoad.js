class pageLoadClass{
    constructor(){
        this.stagePageContainer=[];
        this.stageLastPageContainer=[];
        this.activities=new pageLoadActivitiesClass;
    }
    activity(name,element = ''){
        let pageObject=this.pageContainerGet(this.pageIdCurrent);
        this.activities.load(pageObject,name,element);
    }
    pageContainerGet(pageId){
        try {

            let values = false;
            values  = this.stagePageContainer.find(function(pagesContainer){
                return pagesContainer.id === pageId;
            });

            return values.container;
            
        } catch (error) {
            console.log('No cargó la página :'+pageId);
            return false;
        }
        
  
    }
    pageContainerSet(pageName,container){
        let id=`stages_${this.stageName}_${pageName}`;
        this.stagePageContainer.push(
            {
                id:id,
                container:new container(pageName)
            }
        );
         
    }
    setStageContainer(type){
        let these=this;

        let values = false;

        if(type=='value'){
            values  = this.stageLastPageContainer.find(function(stages){
                return stages.stage === these.stageName;
            });
        }
        else if(type=='index'){
            values = this.stageLastPageContainer.findIndex(function(stages){
                return stages.stage === these.stageName;
            });
        }
        
        return values;
         
    }
     get(pageName){
         /* console.log('*****NUEVA PAGINA :'+pageName); */
        this.stageName=stage.stageName;
        this.pageName=pageName;
        /* console.log('this.stageLastPageContainer');
        console.log(this.stageLastPageContainer); */
        //Nombre para controlar la variable de la clase
         this.pageIdCurrent = `stages_${this.stageName}_${this.pageName}`;
         this.stageContainer=this.setStageContainer('value');
        if(this.stageContainer){
            this.pageIdLast = this.stageContainer.lastPage;
        }
        else{
            this.stageLastPageContainer.push({
                stage:this.stageName,
                lastPage:this.pageIdCurrent
            });
        }
         //Nombre para ID del DIV
         this.pageDivId=`stage_${this.stageName}_${this.pageName}`;
         //console.log(`PAGE -----this.pageIdCurrent:${this.pageDivId}`);
         this.pageDiv = document.getElementById(this.pageDivId);
         /* console.log('this.pageDiv');
         console.log(this.pageDiv); */
         //Ruta:
         this.pageRoute = `/stages/${this.stageName}/pages/${this.pageName}/${this.pageName}`;

         if(importJS.busy){
            console.log('importCustomJS - importJS : Está cargando otro archivo en el momento');
         }
         else{
            if(this.pageIdLast==this.pageIdCurrent){
                //No activa nada
               // console.log("CLIC: En la página activa no se realiza nada");
            }
            else if(this.pageIdLast){
               // console.log('** OCULTAR ANTERIOR: '+this.pageIdLast);
                this.unload();
                this.load();
                //changeScenarioAnimation.change();
            }
            else{
                this.load();
            }
         }

         

        /*  console.log(`stageName: ${this.stageName}`);
        console.log(`pageName: ${pageName}`); */
     }
     unload(){
        let pageId = this.pageContainerGet(this.pageIdLast);
        if(pageId){
            pageId.hide();
        }
        
     }
     load(){
         //console.log(`**EXISTE LA PÁGINA? (${this.pageName}) :${this.pageDiv}`);
         if(this.pageDiv){
            //console.log('**YES - IF: Activa el contenedor');
             console.log(this.pageIdCurrent);
             let pageId = this.pageContainerGet(this.pageIdCurrent);
                pageId.show();
                window.scrollTo(0, 0);
              
          }else{
            //console.log('** NO - ELSE: importar desde js');
              importJS.addFile([this.pageRoute]);
          }

       
        let stageIndex = this.setStageContainer('index');
        this.stageLastPageContainer[stageIndex]={
            stage:this.stageName,
            lastPage:this.pageIdCurrent
        };
        //console.log(`indice: ${stageIndex}`);
          //this.pageIdLast = this.pageIdCurrent;
          document.querySelectorAll('.button-menu-principal')[0].focus();   
     }
}

const stagePage = new pageLoadClass;