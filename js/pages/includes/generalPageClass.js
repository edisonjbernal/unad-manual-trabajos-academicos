class generalPageClass{
    constructor(generalScenario){
        console.log(generalScenario);
        this.scenarioToRender=document.getElementById(generalScenario);
        this.loadPage();
    }
    addFunctions(){
        return false;
    }
    loadPage(){
        let currentContent=  this.scenarioToRender.innerHTML;
        this.scenarioToRender.innerHTML=currentContent+this.page();
        let functionsToLoad=this.addFunctions()
        if(functionsToLoad){
            importJS.addFile(
                functionsToLoad
            );
        }
    }
    page(){
        return 'hola mundo general';
    }
    hide(){
        this.scenarioToRender.style.display='none';
    }
    show(){
        this.scenarioToRender.style.display='block';
    }
}