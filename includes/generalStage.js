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
    addClassCSS(){
        return false;
    }
    content(){
        return `hola mundo general ${this.stageId}`;
    }
    load(){
        this.stageDiv = document.createElement('div');
        this.stageDiv.id = this.stageId;
        this.stageDiv.innerHTML= this.content();
        let classArray = this.addClassCSS();
        if(classArray){
            for (let index = 0; index < classArray.length; index++) {
                this.stageDiv.classList.add(classArray[index]);
            }
        }
        this.stageMaster.appendChild(this.stageDiv);
        
        let functionsToLoad=this.addFunctions()
        if(functionsToLoad){
            stage.addFunctions(this.stageName,functionsToLoad);
        }
    }
    hide(){
        this.stageDiv.style.display='none';
    }
    show(){
        this.stageDiv.style.display='block';
    }
}