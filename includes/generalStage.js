class generalStage{
    constructor(stageName){
        this.stageMaster=document.getElementById('stageMaster');
        this.stageId=`stage_${stageName}`;
        this.stageName=stageName;
        this.load();
    }
    addCssClass(){
        return false;
    }
    addCssFiles(){
        return false;
    }
    addFunctions(){
        return false;
    }
    content(){
        return `hola mundo general ${this.stageId}`;
    }
    load(){
        this.stageDiv = document.createElement('div');
        this.stageDiv.id = this.stageId;
        let addCssFilesArray = this.addCssFiles();
        let addContent =this.content();
        if(addCssFilesArray){
            for (let index = 0; index < addCssFilesArray.length; index++) {
                addContent+=`<link rel="stylesheet" href="./stages/${this.stageName}/css/${addCssFilesArray[index]}">`;
                
            }
        }
        this.stageDiv.innerHTML= addContent;
        let classArray = this.addCssClass();
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
        this.stageDiv.classList.add('hide');
    }
    show(){
        this.stageDiv.classList.remove('hide');
    }
}