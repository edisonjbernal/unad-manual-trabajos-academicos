class stageLoadClass{
    addFunctions(stageName,files){
        let functions = [];
        let stageRoute = `/stages/${stageName}/includes`;
         for (let index = 0; index < files.length; index++) {
             functions.push(`${stageRoute}/${files[index]}`);
         }
          importJS.addFile(functions);
     }
     load(stageName){
        this.stageName=stageName;
         this.stageId = `stages_${this.stageName}`;
         this.stageDiv = document.getElementById(`stage_${this.stageName}`);
         this.stageRoute = `/stages/${this.stageName}/${this.stageName}`;
         

         if(this.lastStageIdLoaded){
             changeScenarioAnimation.change();
         }
         else{
             this.show();
         }
         
       
     }
     hide(){
        window[this.lastStageIdLoaded].hide();
     }
     show(){
         
         if(this.stageDiv){
            console.log('STAGE LOAd:SHOW-IF');
             console.log(this.stageId);
              window[this.stageId].show();
          }else{
            console.log('STAGE LOAd:SHOW-ELSE');
              importJS.addFile([this.stageRoute]);
          }
          this.lastStageIdLoaded = this.stageId;
     }
}

const stage = new stageLoadClass;