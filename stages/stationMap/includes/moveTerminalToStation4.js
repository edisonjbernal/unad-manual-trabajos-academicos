function moveTerminalToStation4(stage = 1){
    let animationFunction = moveTerminalToStation4;
    switch (stage) {
        case 1:
            busCar.changePosition('right',58 ,animationFunction,stage);
            break;
        case 2:
            busCar.changePosition('bottom',28,animationFunction,stage);
        break;
        case 3:
            busCar.changePosition('left',43,animationFunction,stage);
        break;
        case 4:
            busCar.changePosition('bottom',64,animationFunction,stage);
        break;
        case 5:
            busCar.changePosition('left',19,animationFunction,stage);
        break;
        case 6:
            busCar.changePosition('bottom',71,animationFunction,stage);
        break;
        case 7:
            busCar.changePosition('right',71,animationFunction,stage);
        break;
        case 8:
            busCar.changePosition('bottom',88,animationFunction,stage);
        break;
        case 9:
            busCar.changePosition('left',45,animationFunction,stage);
        break;
        case 10:
            busCar.changePosition('bottom',90,animationFunction,stage);
        break;
           
        default:
            busCar.stop('station4');
            break;
    }
}