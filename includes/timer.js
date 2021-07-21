class timerClass{
    constructor(id){
        this.timerContainer= document.getElementById(id);
        this.timerContainer.innerHTML=`
        <div id="clock_${id}" class="clock show"></div>
        <audio id="clockSound_${id}" src="./images/clock.mp3" loop=""></audio>
        `;
        this.timerDiv=document.getElementById(`clock_${id}`);
        this.timerSound=document.getElementById(`clockSound_${id}`);
        this.minutos=1;
        this.segundos=0;
        this.enabled=1;
    }
    enable(){
        if(this.enabled){
            this.timerDiv.classList.add('show');
        }
       //this.timerSound.play();
            //console.log(this.nombre+" :"+this.segundos);
           if(this.segundos<10){
                this.timerDiv.innerHTML=this.minutos+":0"+this.segundos;
            }
            else{
                this.timerDiv.innerHTML=this.minutos+":"+this.segundos;
            }
    
    
            if(this.segundos>0){
               
                this.segundos--;
                var that=this;
                this.timerSegundos=setTimeout(function(){ 
                    that.enable();
                    }, 1000);
             }
             else{
               if(this.minutos>0){
                 this.minutos--;
                 this.segundos=59;
                 var that=this;
                 this.timerMinutos=setTimeout(function(){
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
        clearTimeout(this.timerSegundos);
        clearTimeout(this.timerMinutos);
        this.closeTimmer();
    }
    closeTimmer(){
        this.timerDiv.classList.remove('show');
        this.timerSound.pause();
    }
}