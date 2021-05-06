class preImportCssClass{
    constructor(stageName, pageName = ''){
        this.stageName = stageName;
        this.pageName=pageName;
    }
    load(cssHref,cssLocation,cssMedia = ''){
        //IGUAL para las páginas
        cssHref=this.loadCssHref(cssHref,cssLocation);

        let cssId= cssHref.replaceAll('./','');
        cssId= cssId.replaceAll('/','_');
        cssId= cssId.replaceAll('.css','');

        //console.log('LinksID:'+cssId);

        if(!document.getElementById(cssId)){
            let linkCss = document.createElement('link');
            linkCss.id = cssId;
            linkCss.href = cssHref;
            linkCss.rel="stylesheet";
    
            if(cssMedia){
                linkCss.media=`screen and (min-width: ${cssMedia})`;
            }
         
            document.getElementsByTagName('body').item(0).appendChild(linkCss);
        }
     
    }
    loadCssHref(cssHref,cssLocation){
        //VAria para las páginas
        if(cssLocation=='local'){
            if(this.pageName){
                cssHref=`./stages/${this.stageName}/pages/${this.pageName}/css/${cssHref}`;
            }else{
                cssHref=`./stages/${this.stageName}/css/${cssHref}`;
            }
            
        }else{
            cssHref=`./css/${cssHref}`;
        }
        return cssHref;
    }
}