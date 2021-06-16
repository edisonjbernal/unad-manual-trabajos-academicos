function moveTerminalToStation3(stage = 1){
    let animationFunction = moveTerminalToStation3;
    switch (stage) {
        case 1:
            busCar.changePosition('right',62 ,animationFunction,stage);
            break;
        case 2:
            busCar.changePosition('bottom',41 ,animationFunction,stage);
            break;
        case 3:
            busCar.changePosition('right',85 ,animationFunction,stage);
        break;
        case 4:
            busCar.changePosition('bottom',58 ,animationFunction,stage);
        break;
        case 5:
            busCar.changePosition('left',81 ,animationFunction,stage);
        break;
        case 6:
            busCar.changePosition('bottom',60 ,animationFunction,stage);
        break;
           
        default:
            busCar.stop('station3');
            break;
    }
}