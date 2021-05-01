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
                let cssArray=addCssFilesArray[index].split('|');
                let cssMedia = cssArray[2];
                let cssLocation = cssArray[1];
                let cssHref = cssArray[0];
                this.loadCss(cssHref,cssLocation,cssMedia);

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
    loadCss(cssHref,cssLocation,cssMedia = ''){
        let linkCss = document.createElement('link');
        if(cssLocation=='local'){
            cssHref=`./stages/${this.stageName}/css/${cssHref}`;
        }else{
            cssHref=`./css/${cssHref}`;
        }
        linkCss.href = cssHref;
        linkCss.rel="stylesheet";

        if(cssMedia){
            linkCss.media=`screen and (min-width: ${cssMedia})`;
        }
        document.getElementsByTagName('body').item(0).appendChild(linkCss);
    }
    hide(){
        this.stageDiv.classList.add('hide');
    }
    show(){
        this.stageDiv.classList.remove('hide');
    }
}