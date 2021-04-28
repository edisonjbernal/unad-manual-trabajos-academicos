let car = new busCarAnimation;

function terminalApproved(){
    if(car.terminalApproved){
        return true;
    }
    else{
        console.log('Necesita aprobar primero lo anterior');
        return false;
    }
}
function nextStation(station){
    if(!station||station=='terminal'){
        return false;
    }
    else if(car.position.station!=station){
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
        return true;
    }
    
}


class mapInteractionsClass{

    moveBusToStation(station){
        switch (station) {
            case 'terminal':
                if(car.stopped){
                    if(car.position.station=='initial'){
                        waitAccess('terminal');
                        moveStartToTerminal();
                    }else{
                        changeStation('terminal');
                    }    
                }
                break;
            case 'station2':
                changeStation('station2');
                break;
            case 'station3':
                changeStation('station3');
                break;
            case 'station4':
                changeStation('station4');
                break;
        
            default:
                break;
        }
    }

}

const mapInteractions = new mapInteractionsClass;

/*
document.getElementById('terminal').addEventListener("click", 
function(){
    event.preventDefault();
    
});


document.getElementById('station2').addEventListener("click", 
function(){
    event.preventDefault()
        changeStation('station2');

});

document.getElementById('station3').addEventListener("click", 
function(){
    event.preventDefault()
        changeStation('station3');
});

document.getElementById('station4').addEventListener("click", 
function(){
    event.preventDefault()
    changeStation('station4');
            
}); */

function changeStation(station){
    if(terminalApproved()&&car.stopped){
        if(car.position.station=="terminal"){
            if(station!='terminal'){
                disableAccess('terminal');
               waitAccess(station);
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
                    goIntoStation(station);
                    console.log("Estas en el TERMINAL");
                    break;
            }
        }
        else{
            if(station!=car.position.station){
                car.position.to=station;
                disableAccess(car.position.station);
                waitAccess(station);
                switch (car.position.station) {
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
                goIntoStation(station);
                console.log('ESTACIÓN ACTUAL: ' + car.position.station);
            }
            
        }
}
}

function disableAccess(station){
    console.log('DESACTIVARr acceso a:'+station);
    document.getElementById(station).innerHTML=`Estación ${station}`;
}

function enableAccess(station){
    console.log('Activar acceso a:'+station);
    document.getElementById(station).innerHTML=`Ingresar`;
}

function waitAccess(station){
    console.log('Esperando....a:'+station);
    document.getElementById(station).innerHTML=`Esperndo el bus de ${station}`;
}

function goIntoStation(station){
    console.log('INGREsando A:'+station);
    stage.load('station1');
}