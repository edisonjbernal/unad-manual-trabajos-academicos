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
            case 'listSelectOptions':
                pageObject.listSelectOptions.onChange(element);
                break;
            case 'listSelectOptionsForText':
                pageObject.listSelectOptionsForText.onChange(element);
                break;
            case 'multiple-selection-checkbox':
                pageObject.multipleSelectionCheckbox.checkAnswers(element);
                break;
            case 'popUpToDiscoverTimeline_show':
                pageObject.popUpToDiscoverTimeline.show(element,'none');
                break;
            case 'popUpToDiscoverTimeline_hide':
                pageObject.popUpToDiscoverTimeline.hide(element);
                break;
            

                
            default:
                break;
        }

    }
   
}
