class listMoveOptionsClass{
    constructor(){
        /* console.log('listMoveOptionsActivated'); */
    }
    selectOtherElement(element,type){
        let currentContainer='';
        let otherContainer = '';

    if(type=='down'){
        currentContainer=element.previousElementSibling;
        otherContainer = element.parentElement.parentElement.parentElement.parentElement.parentElement
        otherContainer = otherContainer.nextElementSibling;
    }
    else{
        currentContainer=element.nextElementSibling;
        otherContainer = element.parentElement.parentElement.parentElement.parentElement.parentElement
        otherContainer = otherContainer.previousElementSibling;
    }

    let currentContainerContent=currentContainer.innerHTML;
    otherContainer = otherContainer.getElementsByClassName('text-option-to-move')[0];

    let otherContainerContent = otherContainer.innerHTML;
        currentContainer.innerHTML=otherContainerContent;
        otherContainer.innerHTML=currentContainerContent;
        currentContainer.parentElement.parentElement.classList.remove('success');
        currentContainer.parentElement.parentElement.classList.remove('danger');
        otherContainer.parentElement.parentElement.classList.remove('success');
        otherContainer.parentElement.parentElement.classList.remove('danger');
        if(otherContainerContent==currentContainer.getAttribute('data-correct-answer')){
            currentContainer.parentElement.parentElement.classList.add('success');
            /* console.log('currentContainer:CORRECT'); */
        }
        else{
            currentContainer.parentElement.parentElement.classList.add('danger');
            /* console.log('currentContainer:WRONG'); */
        }

        if(currentContainerContent==otherContainer.getAttribute('data-correct-answer')){
            otherContainer.parentElement.parentElement.classList.add('success');
            /* console.log('otherContainer:CORRECT'); */
        }
        else{
            
            otherContainer.parentElement.parentElement.classList.add('danger');
            /* console.log('otherContainer:WRONG'); */
        }
        /* console.log(currentContainer);
        console.log(type);
        console.log(otherContainer); */

        
    }
    down(element){
        
        this.selectOtherElement(element,'down');
        
    }
    up(element){
        
        this.selectOtherElement(element,'up');
    }
}