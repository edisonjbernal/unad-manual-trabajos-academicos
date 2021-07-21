class timerClass{
    constructor(id){
        this.timerContainer= document.getElementById(id);
        this.timerContainer.innerHTML=`
        <div id="clock_${id}" class="clock show"></div>
        <audio id="clockSound_${id}" src="./images/clock.mp3" loop=""></audio>
        `;
        this.timerDiv=document.getElementById(`clock_${id}`);
        this.timerSound=document.getElementById(`clockSound_${id}`);
        this.minutes=1;
        this.seconds=0;
        this.enabled=1;
    }
    enable(){
        if(this.enabled){
            this.timerDiv.classList.add('show');
        }
       //this.timerSound.play();
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
                 /* thisPageOportunities=oportunitiesToAnswer;
                 open_background_msg(mensaje_tiempo_terminado,imagen_mensaje_alerta_actividad_reprobado);
                  */
         
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
    }
}