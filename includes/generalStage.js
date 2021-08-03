class generalStage{
    constructor(resourceName){
        this.preLoad(resourceName);
    }
    addCssClass(){
        return false;
    }
    content(){
        return `hola mundo general ${this.stageId}`;
    }
    importCssFiles(){
        return false;
    }
    importCssFilesLoader(){
        let cssLoader = new preImportCssClass(this.stageName);
        return  cssLoader; 
    }
    //Importa archivos JS a nivel LOCAL
    importJSFiles(){
        return false;
    }
    importJSFilesLoader(){
        let importJSLocal = new preImportJSClass(this.stageName);
        return importJSLocal;
    }
    //Importa archivos JS a nivel GLOBAL
    importJSGlobalFiles(){
        return false;
    }
    importJSGlobalFilesLoader(){
        let importJSGlobal = new preImportJSClass(this.stageName);
        importJSGlobal.globalLoader=true;
        return importJSGlobal;
    }
    load(){

        //CASI IGUAL PERO VARÍA UN POCO para las páginas
        this.divContainer = document.createElement('div');
        this.divContainer.id = this.divContainerId;
        let addCssFilesArray = this.importCssFiles();
        let addContent =this.content();
        if(addCssFilesArray){
            for (let index = 0; index < addCssFilesArray.length; index++) {
                let cssArray=addCssFilesArray[index].split('|');
                this.cssMedia = cssArray[2];
                this.cssLocation = cssArray[1];
                this.cssHref = cssArray[0];
                //DIFERENTE
                let cssLoader = this.importCssFilesLoader();
                cssLoader.load(this.cssHref,this.cssLocation,this.cssMedia);
            }
        }
        this.divContainer.innerHTML= addContent;
        let classArray = this.addCssClass();
        if(classArray){
            for (let index = 0; index < classArray.length; index++) {
                this.divContainer.classList.add(classArray[index]);
            }
        }
        this.stageMaster.appendChild(this.divContainer);

        


        let JSFiles=this.importJSFiles()
        if(JSFiles){
            //DIFERENTE
          let importJSLocal = this.importJSFilesLoader();
          importJSLocal.load(JSFiles);
        }

        let JSFilesGlobal=this.importJSGlobalFiles()
        if(JSFilesGlobal){
            //DIFERENTE
          let importJSGlobal = this.importJSGlobalFilesLoader();
          importJSGlobal.load(JSFilesGlobal);
        }
    }
    hide(){
        //VAria para las páginas
        /* console.log('Ocultar Stage o pagina'); */
        this.divContainer.innerHTML='';
        this.divContainer.classList.add('hide');
    }
    preLoad(resourceName){
        this.stageMaster=document.getElementById('stageMaster');
        this.stageId=`stage_${resourceName}`;
        this.stageName=resourceName;
        this.divContainerId =this.stageId;
        this.load();
    }
    show(){
        //VAria para las páginas
        this.divContainer.innerHTML=this.content();
        this.divContainer.classList.remove('hide');
        this.showAditional();
    }
    showAditional(){
        return false;
    }
}