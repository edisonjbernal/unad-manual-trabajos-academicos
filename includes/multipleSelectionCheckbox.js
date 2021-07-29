class multipleSelectionCheckboxClass{
    constructor(){
        this.timer='';
        this.pointsActivityCalculate='';
        this.messageCorrectAnswer='¡Lo lograste!';
        this.messageWrongAnswer='Por favor, verifica las respuestas';
    }
    setTimer(timer){
        if(timer){
            this.timer= new timerClass(timer);
        }
    }
    setPoints(points){
        this.pointsActivityCalculate=new pointsActivityCalculateClass(points);
    }
    checkAnswers(element){
        if(this.timer){
            if(this.timer.enabled){
                this.validate(element);
            }
            
        }
        else{
            this.validate(element);
        }
        
    }
    validate(element){
        let mainContainer=element.parentElement.parentElement;
        let checkboxArray=mainContainer.getElementsByClassName('input-checkbox');

        let answers={
            totalActivity:0,
            user:0,
            totalSelected:0
        }
        let checkbox='';
        let label='';
        for (let index = 0; index < checkboxArray.length; index++) {
            checkbox=checkboxArray[index];
            label=checkbox.parentElement;
            let checkboxAnswer=checkbox.getAttribute('data-answer');
            if(checkboxAnswer){
                answers.totalActivity++;
        
            }
            label.classList.remove('danger');
            label.classList.remove('success');
            if(checkbox.checked){
                answers.totalSelected++;
                if(checkboxAnswer){
                    answers.user++;
                    label.classList.add('success');
                }
                else{
                    label.classList.add('danger');
                }
            }
        }

        if(this.pointsActivityCalculate){
            this.pointsActivityCalculate.calculate(answers.totalActivity,answers.user);
        }

        if(answers.totalActivity==answers.user&&answers.totalSelected==answers.totalActivity){
            if(this.timer){
                this.timer.disable();
                this.timer.enabled=0;
            }
            
            alertMessaje.show('success',this.messageCorrectAnswer);
        }
        else if(answers.totalSelected==0){
            alertMessaje.show('danger','No se han seleccionado respuestas');
        }
        else{
            alertMessaje.show('danger',this.messageWrongAnswer);
        }
    }
}