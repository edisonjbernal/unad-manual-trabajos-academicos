class questionsClass{
    constructor(id,autosubmit = false){
        this.autosubmit=autosubmit;
        this.id=id;
        this.feedback={
            type:'general',
            correct:'Las respuestas son correctas',
            incorrect:'Las respuestas son incorrectas'
        }
        this.questions=[];
        this.form=document.getElementById('form-'+this.id);
        this.formCreate();
    }
    alertMessage(type,text){
        alertMessaje.show(type,text);
        
    }
    add(description,answerCorrect,feedbackCorrect=null,feedbackIncorrect=null){
        /* console.log('feedbackIncorrect'+feedbackIncorrect); */
        if(!feedbackCorrect){
            feedbackCorrect='Correcto';
        }
        if(!feedbackIncorrect){
            feedbackInCorrect='Incorrecto';
        }

        this.questions.push({
            description:description,
            answer:{
                correct:answerCorrect,
                user:''
            },
            feedback:{
                correct:feedbackCorrect,
                incorrect:feedbackIncorrect
            }
        });
    }
    formCreate(){
        let these = this;
        this.form.addEventListener(
            'submit',function (event) {
                event.preventDefault();
                if(these.autosubmit){
                    these.verifyAnswers();
                }
                //these.verifyAnswers();
            }
        );
    }
    message(answerText,text,feedback,type){
        let imageName= '';
        if(type=='correct'){
            answerText.classList.add('correct');
            imageName='success';
        }
        else{
            answerText.classList.add('incorrect');
            imageName='warning';
        }
        answerText.innerHTML=`
            <div class="answer-text-grid">
                <div class="answer-text-grid-row-1" ><img class="alert-image" alt="Person ${imageName}" class src="./images/${imageName}.png" /></div>
                <div class="answer-text-grid-row-2 answer-text-selected">${text}</div>
                <div class="answer-text-feedback answer-text-grid-row-3">${feedback}</div>
            <div>
            `;
    }
    selectVerify(element){
        let answerText=element.previousElementSibling;
        answerText.classList.remove('correct');
        answerText.classList.remove('incorrect');
        /* console.log(element.getAttribute('data-index'));
        console.log(element.value); */
        let index = parseInt(element.getAttribute('data-index'));
        if(this.questions[index].answer.correct==element.value){
            /* answerText.classList.add('correct');
            answerText.innerHTML=`
            <div class="answer-text-selected">${element.options[element.selectedIndex].text}</div>
            <div class="answer-text-feedback">${this.questions[index].feedback.correct}</div>
            `; */
            this.message(
                answerText,
                element.options[element.selectedIndex].text,
                this.questions[index].feedback.correct,
                'correct'
            );
        }
        else if(!element.value){
            answerText.innerText='';
        }
        else{
          
            /* answerText.classList.add('incorrect');
            answerText.innerHTML=`
            <div class="answer-text-selected">${element.options[element.selectedIndex].text}</div>
            <div class="answer-text-feedback">${this.questions[index].feedback.incorrect}</div>
            `; */
            this.message(
                answerText,
                element.options[element.selectedIndex].text,
                this.questions[index].feedback.incorrect,
                'incorrect'
            );
        }

    }
    verifyAnswers(){
        this.form=document.getElementById('form-'+this.id);
        /* console.log('formElements');
        console.log(this.questions.length); */
        let questionsNumber =this.questions.length;
        let answersVoid=false;
        let answersIncorrect=false;
        for (let index = 0; index < questionsNumber; index++) {
            let answerCorrect= this.questions[index].answer.correct;
            /* console.log(`p${index+1}-${this.id}`); */
            let answerUser= this.form.elements[`p${index+1}-${this.id}`].value;
            
            if(!answerUser){
                /* console.log('NADA de nada:'+index); */
                answersVoid=true;
            }
            else{
                let liAnswerUser= document.getElementById(`p${index+1}-${answerUser}-${this.id}`);
                liAnswerUser=liAnswerUser.parentElement;
                let ulAnswerUser=liAnswerUser.parentElement;
                let ulAnswerUserArray=ulAnswerUser.querySelectorAll('li');

                for (let ix = 0; ix < ulAnswerUserArray.length; ix++) {
                    ulAnswerUserArray[ix].classList.remove('danger');
                    ulAnswerUserArray[ix].classList.remove('success');
                }

                /* console.log('ulAnswerUserArray');
                console.log(ulAnswerUserArray); */
                if(answerCorrect==answerUser){
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
        if(answersVoid){
            this.alertMessage('warning','Hay preguntas sin responder');
        }
        else if(answersIncorrect){
            this.alertMessage('warning',this.feedback.incorrect);
        }
        else{
            this.alertMessage('success',this.feedback.correct);
        }
        
        
    }
}

