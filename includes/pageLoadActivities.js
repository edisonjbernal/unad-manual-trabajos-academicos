class pageLoadActivitiesClass{
    constructor(){
       
    }
    load(pageObject,name,element = ''){
    
        switch (name) {
            case 'listMoveOptions_up':
                pageObject.listMoveOptions.up(element);
                break;
            case 'listMoveOptions_down':
                pageObject.listMoveOptions.down(element);
                break;
        
            default:
                break;
        }

    }
   
}