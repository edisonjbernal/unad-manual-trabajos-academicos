class stageLoadClass{
    currentStageName(){
        return this.stageName;
    }
     get(stageName){
        this.stageName=stageName;
         this.stageId = `stages_${this.stageName}`;
         this.stageDiv = document.getElementById(`stage_${this.stageName}`);
         this.stageRoute = `/stages/${this.stageName}/${this.stageName}`;
         if(this.lastStageIdLoaded){
             changeScenarioAnimation.change();
         }
         else{
             this.load();
         }
         
     }
     unload(){
        window[this.lastStageIdLoaded].hide();
     }
     load(){
        this.lastStageIdLoaded = this.stageId;
         if(this.stageDiv){
            /* console.log('STAGE LOAd:SHOW-IF');
             console.log(this.stageId); */
              window[this.stageId].show();
          }else{
            /* console.log('STAGE LOAd:SHOW-ELSE'); */
              importJS.addFile([this.stageRoute]);
          }
     }
}

const stage = new stageLoadClass;