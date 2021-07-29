class listSelectOptionsForTextClass{
    constructor(){
        this.timer='';
        this.pointsActivityCalculate='';
        this.messageCorrectAnswer='¡Lo lograste!';
        this.tableMode=false;
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

       if(this.timer){
           if(this.timer.enabled){
            this.validateAnswers(element);
           }
           else{
               let mainContainer= element.parentElement.parentElement.parentElement;
            let optionsListArray=mainContainer.getElementsByClassName('text-option-to-move');
                    for (let index = 0; index < optionsListArray.length; index++) {
                        optionsListArray[index].setAttribute('disabled','true');
                }
            }
       }
       else{
            this.validateAnswers(element);
       }

    }
    validateAnswers(element){
        let answer={
            user:element.value,
            correct:element.getAttribute('data-answer')
        }

        let answerContainer= element.parentElement;

        answerContainer.classList.remove('success');
        answerContainer.classList.remove('danger');

        if(answer.user==answer.correct){
            answerContainer.classList.add('success');
        }
        else{
            answerContainer.classList.add('danger');
        }

        if(this.pointsActivityCalculate){
            let mainContainer = answerContainer.parentElement.parentElement;
            if(this.tableMode){
                mainContainer = answerContainer.parentElement.parentElement.parentElement.parentElement;
            }
            this.pointsCalculate(mainContainer);
            
        }
    }
    pointsCalculate(mainContainer){
        console.log('mainContainer');
        console.log(mainContainer);
        let optionsListArray=mainContainer.getElementsByClassName('text-option-to-move');
        let maxPoints=optionsListArray.length;
        let sumPoints=0;
        for (let index = 0; index < optionsListArray.length; index++) {
            optionsListArray[index];
            
            let span=optionsListArray[index].parentElement;
         
            let classOfSpan= span.getAttribute('class');
            if(classOfSpan){
                if(classOfSpan.includes('success')){
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