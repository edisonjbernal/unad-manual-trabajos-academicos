class pageLoadClass{
    constructor(){
        this.stagePageContainer=[];
    }
    setStageContainer(type){
        let these=this;

        let values = false;

        if(type=='value'){
            values  = this.stagePageContainer.find(function(stages){
                return stages.stage === these.stageName;
            });
        }
        else if(type=='index'){
            values = this.stagePageContainer.findIndex(function(stages){
                return stages.stage === these.stageName;
            });
        }
        

        return values;

        
         
    }
     get(pageName){
         
        this.stageName=stage.stageName;
        this.pageName=pageName;
        
        console.log(this.stagePageContainer);
        //Nombre para controlar la variable de la clase
         this.pageId = `stages_${this.stageName}_${this.pageName}`;
         this.stageContainer=this.setStageContainer('value');
        if(this.stageContainer){
            this.lastPageIdLoaded = this.stageContainer.lastPage;
        }
        else{
            this.stagePageContainer.push({
                stage:this.stageName,
                lastPage:this.pageId
            });
        }
         //Nombre para ID del DIV
         this.pageDivId=`stage_${this.stageName}_${this.pageName}`;
         console.log(`PAGE -----this.pageId:${this.pageDivId}`);
         this.pageDiv = document.getElementById(this.pageDivId);
         //Ruta:
         this.pageRoute = `/stages/${this.stageName}/pages/${this.pageName}/${this.pageName}`;

         if(this.lastPageIdLoaded==this.pageId ){
             //No activa nada
             console.log("No activa nada");
         }
         else if(this.lastPageIdLoaded){
             console.log('**************OCULTAR anteriorrrrrr: '+this.lastPageIdLoaded);
             this.unload();
             this.load();
             //changeScenarioAnimation.change();
         }
         else{
             this.load();
         }

         console.log(`stageName: ${this.stageName}`);
        console.log(`pageName: ${pageName}`);
     }
     unload(){
        window[this.lastPageIdLoaded].hide();
     }
     load(){
         console.log(`---this.pageDiv:${this.pageDiv}`);
         if(this.pageDiv){
            console.log('PAGE LOAd:SHOW-IF');
             console.log(this.pageId);
              window[this.pageId].show();
          }else{
            console.log('PAGE LOAd:SHOW-ELSE');
              importJS.addFile([this.pageRoute]);
          }
          //this.setStageContainer();
          console.log('Llegando al final'+ this.stageName);
          

       
        let stageIndex = this.setStageContainer('index');
        this.stagePageContainer[stageIndex]={
            stage:this.stageName,
            lastPage:this.pageId
        };
        console.log(`indice: ${stageIndex}`);
          //this.lastPageIdLoaded = this.pageId;
     }
}

const stagePage = new pageLoadClass;