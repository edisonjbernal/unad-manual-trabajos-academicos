class listSelectOptionsClass{
    constructor(){
        this.timer='';
        this.pointsActivityCalculate='';
        this.messageCorrectAnswer='¡Lo lograste!'
    }
    setTimer(timer){
        if(timer){
            this.timer= new timerClass(timer);
        }
    }
    setPoints(points){
        this.pointsActivityCalculate=new pointsActivityCalculateClass(points);
    }
    onChange(element){
        
        let answer={
            user:element.value,
            correct:element.getAttribute('data-answer')
        }

        let answerContainerTr= element.parentElement.parentElement;

        answerContainerTr.classList.remove('success');
        answerContainerTr.classList.remove('danger');

        if(answer.user==answer.correct){
            answerContainerTr.classList.add('success');
        }
        else{
            answerContainerTr.classList.add('danger');
        }

        if(this.pointsActivityCalculate){
            let mainContainer = answerContainerTr.parentElement.parentElement.parentElement.parentElement;
            this.pointsCalculate(mainContainer);
            
        }
        
        
    }
    pointsCalculate(mainContainer){
    
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
}