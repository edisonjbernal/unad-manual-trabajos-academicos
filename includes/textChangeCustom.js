class textChangeCustomClass{
    constructor(){

    }
    change(element){
        
        let textId=element.getAttribute('data-id-to-select');
        let feedbackInfo=element.getAttribute('data-feedback-info');
        let correctAnswer=element.getAttribute('data-correct-answer');
        let textContainer=document.getElementById(textId);
        
        let feedbackContainer=element.parentElement;
        
        feedbackContainer=feedbackContainer.getElementsByClassName('feedback')[0];
        

        if(!feedbackContainer.getAttribute('class').includes('success')){
            feedbackContainer.innerHTML=feedbackInfo;
            textContainer.innerHTML=element.innerHTML;
        feedbackContainer.classList.remove('success');
        feedbackContainer.classList.remove('danger');
        textContainer.classList.remove('success');
        textContainer.classList.remove('danger');
        if(correctAnswer){
            feedbackContainer.classList.add('success');
            element.classList.add('success');
            textContainer.classList.add('success');
        }else{
            feedbackContainer.classList.add('danger');
            element.classList.add('danger');
            textContainer.classList.add('danger');
        }
    }
        
      
    }
}