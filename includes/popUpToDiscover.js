class popUpToDiscoverClass{
    show(element,noScrollIntoView = null){
        element.style.display='none';
        let textContainer = element.parentElement.nextElementSibling;
        /* console.log('MOSTRAR : popUpToDiscoverClass');
        console.log(textContainer); */
        textContainer.classList.add('show');
        if(!noScrollIntoView){
            textContainer.scrollIntoView({ block: 'center', behavior: 'smooth' });
        }
        
    }
    showHideCombined(element){
        let state=element.getAttribute('data-state-show');
        let textContainer = element.nextElementSibling;
        if(state){
            element.removeAttribute('data-state-show');
            textContainer.classList.remove('show');
        }
        else{
            element.setAttribute('data-state-show','true');
            
            textContainer.classList.add('show');
        }
        
    }
}