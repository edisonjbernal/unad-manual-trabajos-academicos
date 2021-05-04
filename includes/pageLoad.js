class pageLoadClass{
     get(pageName){
         
        this.stageName=stage.stageName;
        this.pageName=pageName;
        //Nombre para controlar la variable de la clase
         this.pageId = `stages_${this.stageName}_${this.pageName}`;
         //Nombre para ID del DIV
         this.pageDivId=`stage_${this.stageName}_${this.pageName}`;
         console.log(`this.pageDivId:${this.pageDivId}`);
         this.pageDiv = document.getElementById(this.pageDivId);
         //Ruta:
         this.pageRoute = `/stages/${this.stageName}/pages/${this.pageName}/${this.pageName}`;

         if(this.lastPageIdLoaded==this.pageId ){
             //No activa nada
             console.log("No activa nada");
         }
         else if(this.lastPageIdLoaded){
             console.log('Ocultar Anterior');
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
          this.lastPageIdLoaded = this.pageId;
     }
}

const stagePage = new pageLoadClass;