class stageLoadActivitiesClass{
    constructor(){
       
    }
    load(stage,name,element = ''){
       
    
        switch (name) {
            case 'menu_next':
                window[stage].menu.next();
                break;
            case 'menu_back':
                window[stage].menu.back();
                break;
            case 'menu_showContentInText':
                window[stage].menu.showContentInText(element);
                break;
            case 'menu_showContentInText_none':
                window[stage].menu.showContentInText(element,'none');
                break;
        
            default:
                break;
        }

    } 
   
}
