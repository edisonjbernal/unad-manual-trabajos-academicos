class generalStage{
    constructor(stageName){
        this.stageMaster=document.getElementById('stageMaster');
        this.stageId=`stage_${stageName}`;
        this.stageName=stageName;
        this.load();
    }
    addFunctions(){
        return false;
    }
    container(){
        return `<div id="${this.stageId}">${this.content()}</div>`;
    }
    content(){
        return `hola mundo general ${this.stageId}`;
    }
    identifyStage(){
        this.stageDiv=document.getElementById(this.stageId);
    }
    load(){
        let currentContent= this.stageMaster.innerHTML;
        this.stageMaster.innerHTML=currentContent+this.container();
        
        let functionsToLoad=this.addFunctions()
        if(functionsToLoad){
            stage.addFunctions(this.stageName,functionsToLoad);
        }
    }
    hide(){
        this.identifyStage();
        this.stageDiv.style.display='none';
    }
    show(){
        this.identifyStage();
        this.stageDiv.style.display='block';
    }
}