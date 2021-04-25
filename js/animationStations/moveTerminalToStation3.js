function moveTerminalToStation3(stage = 1){
    let animationFunction = moveTerminalToStation3;
    switch (stage) {
        case 1:
            car.changePosition('right',62 ,animationFunction,stage);
            break;
        case 2:
            car.changePosition('bottom',41 ,animationFunction,stage);
            break;
        case 3:
            car.changePosition('right',85 ,animationFunction,stage);
        break;
        case 4:
            car.changePosition('bottom',58 ,animationFunction,stage);
        break;
        case 5:
            car.changePosition('left',81 ,animationFunction,stage);
        break;
        case 6:
            car.changePosition('bottom',62 ,animationFunction,stage);
        break;
           
        default:
            car.stop('station3');
            break;
    }
}