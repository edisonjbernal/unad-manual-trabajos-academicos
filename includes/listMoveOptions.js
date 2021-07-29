class listMoveOptionsClass{
    constructor(){
        this.timer='';
        this.pointsActivityCalculate='';
        this.messageCorrectAnswer='¡Lo lograste!';
        this.onlyOrderSentences=false;
    }
    analize(element,type){
        let currentContainer='';
        let otherContainer = '';

    if(type=='down'){
        currentContainer=element.previousElementSibling;
        otherContainer = element.parentElement.parentElement.parentElement.parentElement.parentElement
        otherContainer = otherContainer.nextElementSibling;
    }
    else if(type=='up'){
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
        if(this.pointsActivityCalculate){
            this.pointsCalculate(element);
            
        }
    }
    analizeOrderSentences(element,type){
        let currentContainer='';
        let otherContainer = '';
        let parentCurrentContainer='';
        let parentOtherContainer = '';

        if(type=='down'){
            parentCurrentContainer= element.parentElement.parentElement;
            parentOtherContainer= parentCurrentContainer.nextElementSibling;
            currentContainer=element.parentElement.nextElementSibling.getElementsByTagName('p')[0];
            otherContainer = parentOtherContainer.getElementsByTagName('td')[1].getElementsByTagName('p')[0];
        }
        else if(type=='up'){
            parentCurrentContainer= element.parentElement.parentElement;
            parentOtherContainer= parentCurrentContainer.previousElementSibling;
            currentContainer=element.parentElement.nextElementSibling.getElementsByTagName('p')[0];
            otherContainer = parentOtherContainer.getElementsByTagName('td')[1].getElementsByTagName('p')[0];
        }

        let currentContainerContent=currentContainer.innerHTML;
        let otherContainerContent = otherContainer.innerHTML;
        currentContainer.innerHTML=otherContainerContent;
        otherContainer.innerHTML=currentContainerContent;

        parentCurrentContainer.classList.remove('success');
        parentCurrentContainer.classList.remove('danger');
        parentOtherContainer.classList.remove('success');
        parentOtherContainer.classList.remove('danger');

        if(otherContainerContent==parentCurrentContainer.getAttribute('data-correct-answer')){
            parentCurrentContainer.classList.add('success');
        }
        else{
            parentCurrentContainer.classList.add('danger');
        }

        if(currentContainerContent==parentOtherContainer.getAttribute('data-correct-answer')){
            parentOtherContainer.classList.add('success');
        }
        else{
            parentOtherContainer.classList.add('danger');
        }

        if(this.pointsActivityCalculate){
            this.pointsCalculate(element);
            
        }
   
    }
    setTimer(timer){
        if(timer){
            this.timer= new timerClass(timer);
        }
    }
    setPoints(points){
        this.pointsActivityCalculate=new pointsActivityCalculateClass(points);
    }
    selectOtherElement(element,type){

        if(this.onlyOrderSentences){
            this.analizeOrderSentences(element,type);
        }
        else{
           this.analize(element,type);
        }
        
        
    }
    pointsCalculate(element){
        let mainContainer= element.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;
        let optionsListArray=mainContainer.getElementsByClassName('text-option-to-move');
        let maxPoints=optionsListArray.length;
        let sumPoints=0;
        for (let index = 0; index < optionsListArray.length; index++) {
            optionsListArray[index];
            
            let tr=optionsListArray[index].parentElement.parentElement;
         
            let classOfTr= tr.getAttribute('class');
            if(classOfTr){
                if(classOfTr.includes('success')){
                    sumPoints++;
                }
            }
            
            
        }
        
        let totalPoints=this.pointsActivityCalculate.calculate(maxPoints,sumPoints);
        let pointsActivity = this.pointsActivityCalculate.pointsActivity;

        if(totalPoints==pointsActivity){
            if(this.timer){
                this.timer.disable();
                this.timer.enabled=0;
            }
            alertMessaje.show('success',this.messageCorrectAnswer);
        }
    }
    down(element){
        if(this.timer){
            if(this.timer.enabled){
                this.selectOtherElement(element,'down');
            } 
        }
        else{
            this.selectOtherElement(element,'down');
        }
        
        
        
    }
    up(element){
        
        if(this.timer){
            if(this.timer.enabled){
                this.selectOtherElement(element,'up');
            } 
        }
        else{
            this.selectOtherElement(element,'up');
        }
    }
}