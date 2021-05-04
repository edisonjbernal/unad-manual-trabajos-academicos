class preImportJSClass{
    constructor(stageName,pageName = ''){
        this.stageName=stageName;
        this.pageName=pageName;
    }
    load(files){
        let functions = [];
        let stageRoute = this.importJSRoute();
         for (let index = 0; index < files.length; index++) {
             functions.push(`${stageRoute}/${files[index]}`);
         }
          importJS.addFile(functions);
     }
     importJSRoute(){
        let stageRoute ='';
         if(this.pageName){
            stageRoute = `/stages/${this.stageName}/pages/${this.pageName}/includes`;
         }
         else{
            stageRoute = `/stages/${this.stageName}/includes`;
         }
        
        return stageRoute;
     }
}