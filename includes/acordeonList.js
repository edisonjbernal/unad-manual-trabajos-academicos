class acordeonListClass{
    show(element,noScrollIntoView = null){
   
        let acordeonContainer = element.parentElement;
        let showStatus=acordeonContainer.getAttribute('data-show');
        if(showStatus==1){
            acordeonContainer.setAttribute('data-show','');
            acordeonContainer.classList.remove('show');
        }
        else{
            acordeonContainer.setAttribute('data-show','1');
            acordeonContainer.classList.add('show');
        }
    }
}