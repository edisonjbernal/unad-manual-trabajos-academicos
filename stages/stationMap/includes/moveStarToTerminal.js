function moveStartToTerminal(stage = 1){
    let animationFunction = moveStartToTerminal;
    switch (stage) {
        case 1:
            car.changePosition('right',43 ,animationFunction,stage);
            break;
        case 2:
            car.changePosition('bottom',25,animationFunction,stage);
        break;
        case 3:
            car.changePosition('right',50,animationFunction,stage);
        break;
           
        default:
            car.stop('terminal');
            car.terminalApproved=true;
            console.log('DELETE: APROBADO auitomático');
            break;
    }
}