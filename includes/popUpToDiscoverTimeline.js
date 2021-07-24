class popUpToDiscoverTimelineClass{
    hide(element,noScrollIntoView = null){
        /* console.log(element); */
        let textContainer = element.parentElement.parentElement.parentElement;
        /* console.log(textContainer); */
       // element.style.display='none';
        /* console.log('MOSTRAR : popUpToDiscoverClass');
        console.log(textContainer); */
        textContainer.classList.remove('show');
        let buttonPopUp= textContainer.parentElement.previousElementSibling.getElementsByTagName('button')[0];
        buttonPopUp.classList.remove('static');
        /* console.log(buttonPopUp); */
       /*  if(!noScrollIntoView){
            textContainer.scrollIntoView({ block: 'center', behavior: 'smooth' });
        } */ 
        
    }
    show(element,noScrollIntoView = null){
        element.classList.add('static');
        let textContainer = element.parentElement.nextElementSibling.getElementsByClassName('popUpToDiscover')[0];
        /* console.log('MOSTRAR : popUpToDiscoverClass');
        console.log(textContainer); */
        textContainer.classList.add('show');
        if(!noScrollIntoView){
            textContainer.scrollIntoView({ block: 'center', behavior: 'smooth' });
        }
        
    }
}
