class generalPage extends generalStage{
    constructor(pageName){
       super(pageName);
        
    }
    content(){
        return `hola mundo general ${this.stageId}`;
    }
    importCssFilesLoader(){
        let cssLoader = new preImportCssClass(this.stageName,this.pageName);
        return  cssLoader; 
    }
    importJSFilesLoader(){
        let importJS = new preImportJSClass(this.stageName,this.pageName);
        return importJS;
    }
    preLoad(pageName){
        this.stageName= stage.stageName;
        this.pageName=pageName;
  /*       console.log(`generalPage_stageName: ${this.stageName}`);
        console.log(`generalPage_pageNamex: ${this.pageName}`);
         */
        this.stageId=`stage_${this.stageName}`;
        this.pageId=`${this.stageId}_${this.pageName}`;
        this.stageMaster=document.getElementById(this.stageId).querySelectorAll('main')[0];
        
        this.divContainerId = this.pageId;
        /* console.log(`this.stageMaster:`);
        console.log(this.stageMaster); */
       this.load();
    }
    
}