class mapInteractionsClass{
    constructor(){
    }
    changeStation(station){
        if(this.terminalApproved()&&busCar.stopped){
            if(busCar.position.station=="terminal"){
                if(station!='terminal'){
                    this.disableAccess('terminal');
                    this.waitAccess(station);
                }
                switch (station) {
                    case 'station2':
                        moveTerminalToStation2();
                        break;
                    case 'station3':
                        moveTerminalToStation3();
                        break;
                    case 'station4':
                        moveTerminalToStation4();
                        break;
                    default:
                        this.goIntoStation(station);
                        console.log("Estas en el TERMINAL");
                        break;
                }
            }
            else{
                if(station!=busCar.position.station){
                    busCar.position.to=station;
                    this.disableAccess(busCar.position.station);
                    this.waitAccess(station);
                    switch (busCar.position.station) {
                        case 'station2':
                            moveStation2ToTerminal();
                            break;
                        case 'station3':
                            moveStation3ToTerminal();
                            break;
                        case 'station4':
                            moveStation4ToTerminal();
                            break;
                    }
                }
                else{
                    this.goIntoStation(station);
                    console.log('ESTACIÓN ACTUAL: ' + busCar.position.station);
                }
                
            }
    }
    }
    disableAccess(station){
        console.log('DESACTIVARr acceso a:'+station);
        document.getElementById(station).innerHTML=`Estación ${station}`;
    }
    
    enableAccess(station){
        console.log('Activar acceso a:'+station);
        document.getElementById(station).innerHTML=`Ingresar`;
    }
    goIntoStation(station){
        
        stage.get(station);
    }
    nextStation(station){
        if(!station||station=='terminal'){
            busCar.stop('terminal');
        }
        else if(busCar.position.station!=station){
            switch (station) {
                case 'station2':
                    moveTerminalToStation2();
                    break;
                case 'station3':
                    moveTerminalToStation3();
                    break;
                case 'station4':
                    moveTerminalToStation4();
                    break;
                default:
                    break;
            }
        }
    }
    terminalApproved(){
        if(busCar.terminalApproved){
            return true;
        }
        else{
            console.log('Necesita aprobar primero lo anterior');
            return false;
        }
    }
    waitAccess(station){
        console.log('Esperando....a:'+station);
        document.getElementById(station).innerHTML=`Esperndo el bus de ${station}`;
    }

}



const mapInteractions = new mapInteractionsClass;





document.getElementById('terminal').addEventListener("click", 
function(){
    event.preventDefault();
    if(busCar.stopped){
        if(busCar.position.station=='initial'){
            mapInteractions.waitAccess('terminal');
            moveStartToTerminal();
        }else{
            mapInteractions.changeStation('terminal');
        }    
    }
});


document.getElementById('station2').addEventListener("click", 
function(){
    event.preventDefault()
    mapInteractions.changeStation('station2');

});

document.getElementById('station3').addEventListener("click", 
function(){
    event.preventDefault()
    mapInteractions.changeStation('station3');
});

document.getElementById('station4').addEventListener("click", 
function(){
    event.preventDefault()
    mapInteractions.changeStation('station4');
            
}); 
