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
}