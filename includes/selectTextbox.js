class selectTextBoxClass{
    constructor(){
        console.log("selectTextBoxClass");
        this.lastTextSelected='';
        this.timmerToCloseBox='';
    }
    focusIn(textSelected){
        this.textSelected=textSelected;
        
        if(this.lastTextSelected!=textSelected){
            console.log('1_selectTextBoxClass');
            if(this.lastTextSelected){
                this.boxMultipleSelect.classList.remove('show');
            }
            this.boxMultipleSelect=textSelected.nextElementSibling;
            console.log(textSelected);
            console.log(this.boxMultipleSelect);
            this.boxMultipleSelect.classList.add('show');
            console.log('2_selectTextBoxClass');
            this.lastTextSelected=textSelected;

        }

        clearInterval(this.timmerToCloseBox);
        
    }
    focusOut(textSelected = null){
        let these=this;
        this.timmerToCloseBox = setTimeout(function(){
            these.boxMultipleSelect.classList.remove('show');
            these.lastTextSelected='';
        }, 300);
        
    }
    focusInButton(){
        clearInterval(this.timmerToCloseBox);
    }
    focusOutButton(){
        this.focusOut();
    }
    selectWord(element){
        let answerSelected=element.innerText;
        this.textSelected.value=answerSelected;
        let correctAnswer=this.textSelected.getAttribute('data-correct-answer');
        this.textSelected.classList.remove('success');
        this.textSelected.classList.remove('danger');
        if(correctAnswer==answerSelected){
            this.textSelected.classList.add('success');
        }else{
            this.textSelected.classList.add('danger');
        }
    }
}
