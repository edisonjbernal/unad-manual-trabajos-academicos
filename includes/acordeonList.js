class acordeonListClass{
    show(element,noScrollIntoView = null){
        /* element.style.display='none'; */
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
        /* console.log('MOSTRAR : popUpToDiscoverClass');
        console.log(acordeonContainer); */
        
        /* if(!noScrollIntoView){
            textContainer.scrollIntoView({ block: 'center', behavior: 'smooth' });
        } */
        
    }
}