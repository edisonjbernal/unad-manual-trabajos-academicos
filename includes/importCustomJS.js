class importCustomJS {
    constructor(url = '.',version = '1'){

        this.url= url;
        this.version=version;
        this.lastStageIdLoaded='';
        this.busy=false;
        this.lastFileLoaded='';

    }
    addFile(files){
        
        this.count=0;
        this.files=files;
        this.verifyFileToLoad();

    }
    page(stage,page){

    }
    load(file){
        this.busy=true;
        let scriptId ='JS' + file.replaceAll('/','_');
        this.lastFileLoaded=scriptId;
        /* console.log('JS--'+this.lastFileLoaded); */
        if (!document.getElementById(scriptId)) {

            let script = document.createElement('script');
            script.src = this.url + file + '.js?version='+this.version ;
            script.id = scriptId;
            document.getElementsByTagName('body').item(0).appendChild(script);
            this.statusOfLoad(script);
            
        }
        else{
            this.busy=false;
            console.log('Ya está cargado :'+scriptId);
        }
        
    }
    nextFile(){

        this.count++;
        this.verifyFileToLoad();

    }
/*    remove(file){
        let scriptId ='JS' + file.replaceAll('/','_');
        window['_test_js_test']=undefined;
        document.getElementById(scriptId).remove();
    }*/
    statusOfLoad(script){
        let these = this;
        script.onload = function() {

            console.log("Cargado: " + script.src);
            these.nextFile();
            these.busy=false;

        };

        script.onerror = function() {

            console.log("No se pudo cargar el archivo: " + script.src);
            these.nextFile();
            these.busy=false;

        };
    }
    verifyFileToLoad(){

        let file=this.files[this.count];
        if(file){
            this.load(file);
        }

    }
    
}

const importJS = new importCustomJS(configuration.globalURL,configuration.version);
