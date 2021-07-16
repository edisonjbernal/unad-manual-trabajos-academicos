class question_CheckboxVerifyClass extends questionsClass{
    constructor(id){
        super(id);
    }
    checkboxVerify(numOfCorrectAnswers){
        let correctAnswersCount=0;
        let questionsNumber =this.questions.length;
        let answersVoid=0;
        let answersIncorrect=false;
        for (let index = 0; index < questionsNumber; index++) {
            let answerCorrect= this.questions[index].answer.correct;
            let answerChecked= document.getElementById(`p${index+1}-${this.id}`).checked;
            let answerUser= document.getElementById(`p${index+1}-${this.id}`).value;
            /* console.log(`p${index+1}-${this.id} : CHECK`+answerChecked); */
            let liAnswerUser= document.getElementById(`p${index+1}-${this.id}`);
                liAnswerUser=liAnswerUser.parentElement;
                let ulAnswerUser=liAnswerUser.parentElement;
                let ulAnswerUserArray=ulAnswerUser.querySelectorAll('li');
                for (let ix = 0; ix < ulAnswerUserArray.length; ix++) {
                    ulAnswerUserArray[ix].classList.remove('danger');
                    ulAnswerUserArray[ix].classList.remove('success');
                }
            if(!answerChecked){
                /* console.log('NADA de nada:'+index); */
                answersVoid++;
            }
            else{
                

                /* console.log(ulAnswerUserArray); */
                if(answerCorrect==answerUser){
                    correctAnswersCount++;
                    /* console.log('Acertó la:'+index); */
                    liAnswerUser.classList.add('success');
                    liAnswerUser.setAttribute('data-feedback',this.questions[index].feedback.correct);
                }
                else{
                    /* console.log('Incorrecto:'+index); */
                    liAnswerUser.classList.add('danger');
                    liAnswerUser.setAttribute('data-feedback',this.questions[index].feedback.incorrect);
                    answersIncorrect = true;
                }
            }
            

           
            
            /* console.log(`p${index+1}-${this.id}`); */
           // console.log(this.form.elements[`p${index+1}-${this.id}`].value);
            
        }
        if(answersVoid==questionsNumber){
            this.alertMessage('warning','Faltan respuestas por seleccionar');
        }
        else if(answersIncorrect||correctAnswersCount<numOfCorrectAnswers){
            this.alertMessage('warning',this.feedback.incorrect);
        }
        else{
            this.alertMessage('success',this.feedback.correct);
        }
    }

}