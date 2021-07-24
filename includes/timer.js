class timerClass{
    constructor(id){
        this.timerContainer= document.getElementById(id);
        this.timerContainer.innerHTML=`
        <div id="clock_${id}" class="clock show"></div>
        <audio id="clockSound_${id}" src="./images/clock.mp3" loop=""></audio>
        `;
        this.timerDiv=document.getElementById(`clock_${id}`);
        this.timerSound=document.getElementById(`clockSound_${id}`);
        this.minutes=0;
        this.seconds=20;
        this.enabled=1;
        this.messageTimeOut='El tiempo ha terminado';
    }
    enable(){
        if(this.enabled){
            let mapCircleButton=document.getElementById('map-circle-button');
            if(mapCircleButton){
                mapCircleButton.classList.add('hide');
            }
            this.timerDiv.classList.add('show');
        
       this.timerSound.play();
            //console.log(this.nombre+" :"+this.seconds);
           if(this.seconds<10){
                this.timerDiv.innerHTML=this.minutes+":0"+this.seconds;
            }
            else{
                this.timerDiv.innerHTML=this.minutes+":"+this.seconds;
            }
    
    
            if(this.seconds>0){
               
                this.seconds--;
                var that=this;
                this.timerSeconds=setTimeout(function(){ 
                    that.enable();
                    }, 1000);
             }
             else{
               if(this.minutes>0){
                 this.minutes--;
                 this.seconds=59;
                 var that=this;
                 this.timerMinutes=setTimeout(function(){
                     that.enable();
                    }, 1000);
                 
               }
               else{
                this.enabled=0;
                this.closeTimmer();
                alertMessaje.show('danger',this.messageTimeOut);
                 /* thisPageOportunities=oportunitiesToAnswer;
                 open_background_msg(mensaje_tiempo_terminado,imagen_mensaje_alerta_actividad_reprobado);
                  */
         
               }
            }
        }
            
    }
    disable(){
        clearTimeout(this.timerSeconds);
        clearTimeout(this.timerMinutes);
        this.closeTimmer();
    }
    closeTimmer(){
        this.timerDiv.classList.remove('show');
        this.timerSound.pause();
        
        let mapCircleButton=document.getElementById('map-circle-button');
        if(mapCircleButton){
            mapCircleButton.classList.remove('hide');
        }
        
    }
}