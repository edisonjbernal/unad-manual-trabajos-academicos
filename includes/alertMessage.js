class alertMessageClass{
    constructor(){
        this.messageContainer = document.getElementById('alert-message-container');
    }
    hide(){
        this.messageContainer.innerHTML='';
        this.messageContainer.classList.remove('show');
        
    }
    show(type,text){
        let message =`
        <div class="alert-message">
          <div class="text-center"><img class="alert-image" class src="./images/${type}.png" /></div>
          <p>${text}</p>
          <div class="text-center">
              <button id="button-alert-message" class="btn-general btn-submit" onclick="alertMessaje.hide()">Ok</button>
          </div>
        </div>
      `;
      this.messageContainer.innerHTML=message;
      this.messageContainer.classList.add('show');
      document.getElementById('button-alert-message').focus();
    }
}
const alertMessaje = new alertMessageClass;