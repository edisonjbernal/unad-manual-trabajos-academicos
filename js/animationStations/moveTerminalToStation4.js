function moveTerminalToStation4(stage = 1){
    let animationFunction = moveTerminalToStation4;
    switch (stage) {
        case 1:
            car.changePosition('right',58 ,animationFunction,stage);
            break;
        case 2:
            car.changePosition('bottom',28,animationFunction,stage);
        break;
        case 3:
            car.changePosition('left',40,animationFunction,stage);
        break;
        case 4:
            car.changePosition('bottom',64,animationFunction,stage);
        break;
        case 5:
            car.changePosition('left',16,animationFunction,stage);
        break;
        case 6:
            car.changePosition('bottom',71,animationFunction,stage);
        break;
        case 7:
            car.changePosition('right',71,animationFunction,stage);
        break;
        case 8:
            car.changePosition('bottom',88,animationFunction,stage);
        break;
        case 9:
            car.changePosition('left',45,animationFunction,stage);
        break;
        case 10:
            car.changePosition('bottom',90,animationFunction,stage);
        break;
           
        default:
           // moveStation4ToTerminal();
            break;
    }
}