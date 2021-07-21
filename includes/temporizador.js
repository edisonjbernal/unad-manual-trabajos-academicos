class temporizadorClass{
    constructor(id){
        this.temporizadorContainer= document.getElementById(id);
        this.temporizadorContainer.innerHTML=`
        <div id="clock_${id}" class="clock show"></div>
        <audio id="clockSound_${id}" src="./images/clock.mp3" loop=""></audio>
        `;
        this.temporizadorDiv=document.getElementById(`clock_${id}`);
        this.temporizadorSound=document.getElementById(`clockSound_${id}`);
        this.minutos=1;
        this.segundos=0;
        this.status=1;
    }
    activar(){
        if(this.status){
            this.temporizadorDiv.classList.add('show');
        }
       // this.temporizadorSound.play();
            //console.log(this.nombre+" :"+this.segundos);
           if(this.segundos<10){
                this.temporizadorDiv.innerHTML=this.minutos+":0"+this.segundos;
            }
            else{
                this.temporizadorDiv.innerHTML=this.minutos+":"+this.segundos;
            }
    
    
            if(this.segundos>0){
               
                this.segundos--;
                var that=this;
                this.temporizadorSegundos=setTimeout(function(){ 
                    that.activar();
                    }, 1000);
             }
             else{
               if(this.minutos>0){
                 this.minutos--;
                 this.segundos=59;
                 var that=this;
                 this.temporizadorMinutos=setTimeout(function(){
                     that.activar();
                    }, 1000);
                 
               }
               else{
                this.status=0;
                this.closeTimmer();
                 /* thisPageOportunities=oportunitiesToAnswer;
                 open_background_msg(mensaje_tiempo_terminado,imagen_mensaje_alerta_actividad_reprobado);
                  */
         
               }
            }
    
            
    }
    desactivar(){
        clearTimeout(this.temporizadorSegundos);
        clearTimeout(this.temporizadorMinutos);
        this.closeTimmer();
    }
    closeTimmer(){
        this.temporizadorDiv.classList.remove('show');
        this.temporizadorSound.pause();
        
        console.log('TIMMER:Terminado');
    }
}