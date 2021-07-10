class selectTextBoxClass_TerminalContentClass_sec_1_Reto_2_ubicarLaRespuesta{
    constructor(){
        this.lastTextSelected='';
    }
    focusIn(textSelected){
        this.textSelected=textSelected;
        
        if(this.lastTextSelected!=textSelected){
            console.log('selectTextBoxClass');
            if(this.lastTextSelected){
                this.boxMultipleSelect.classList.remove('show');
            }
            this.boxMultipleSelect=textSelected.nextElementSibling;
            console.log(textSelected);
            console.log(this.boxMultipleSelect);
            this.boxMultipleSelect.classList.add('show');
            console.log('selectTextBoxClass');
            this.lastTextSelected=textSelected;
        }
        
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
let questionTerminalContentClass_sec_1_Reto_2_ubicarLaRespuesta = new selectTextBoxClass_TerminalContentClass_sec_1_Reto_2_ubicarLaRespuesta;