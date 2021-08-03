function moveTerminalToStation2(stage = 1){
    let animationFunction = moveTerminalToStation2;
    switch (stage) {
        case 1:
            busCar.changePosition('right',58 ,animationFunction,stage);
            break;
        case 2:
            busCar.changePosition('bottom',28,animationFunction,stage);
        break;
        case 3:
            busCar.changePosition('left',42,animationFunction,stage);
        break;
        case 4:
            busCar.changePosition('top',25,animationFunction,stage);
        break;
        case 5:
            busCar.changePosition('left',4,animationFunction,stage);
        break;
        case 6:
            busCar.changePosition('bottom',36,animationFunction,stage);
        break;
        case 7:
            busCar.changePosition('right',30,animationFunction,stage);
        break;
        case 8:
            busCar.changePosition('bottom',50,animationFunction,stage);
        break;
        case 9:
            busCar.changePosition('left',27,animationFunction,stage);
        break;
        case 10:
            busCar.changePosition('bottom',51,animationFunction,stage);
        break;
           
        default:
            busCar.stop('station2');
            break;
    }
}