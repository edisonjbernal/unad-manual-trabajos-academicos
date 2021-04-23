class importCustomJS {
    constructor(url = '.',version = ''){

        this.url= url;
        this.version=version;

    }
    add(){

        this.count=0;
        this.files=arguments;
        this.verifyFileToLoad();

    }
    loadFile(file){
        let scriptId = file + 'JS';
        if (!document.getElementById(scriptId)) {

            let script = document.createElement('script');
            script.src = this.url + file + '.js?version='+this.version ;
            script.id = scriptId;
            document.getElementsByTagName('body').item(0).appendChild(script);
            this.statusOfLoad(script);
            
        }
        
    }
    nextFile(){

        this.count++;
        this.verifyFileToLoad();

    }
    statusOfLoad(script){
        let these = this;
        script.onload = function() {

            console.log("Cargado: " + script.src);
            these.nextFile();

        };

        script.onerror = function() {

            console.log("No se pudo cargar el archivo: " + script.src);
            these.nextFile();

        };
    }
    verifyFileToLoad(){

        let file=this.files[this.count];
        if(file){
            this.loadFile(file);
        }

    }
    
}
