function moveStartToTerminal(stage = 1){
    let animationFunction = moveStartToTerminal;
    switch (stage) {
        case 1:
            busCar.changePosition('right',43 ,animationFunction,stage);
            break;
        case 2:
            busCar.changePosition('bottom',25,animationFunction,stage);
        break;
        case 3:
            busCar.changePosition('right',50,animationFunction,stage);
        break;
           
        default:
            busCar.stop('terminal');
            busCar.terminalApproved=true;
            console.log('DELETE: APROBADO auitomático');
            break;
    }
}