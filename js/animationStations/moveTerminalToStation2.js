function moveTerminalToStation2(stage = 1){
    let animationFunction = moveTerminalToStation2;
    switch (stage) {
        case 1:
            console.log(stage)
            car.changePosition('right',58 ,animationFunction,stage);
            break;
        case 2:
            car.changePosition('bottom',28,animationFunction,stage);
        break;
        case 3:
            car.changePosition('left',42,animationFunction,stage);
        break;
        case 4:
            car.changePosition('top',25,animationFunction,stage);
        break;
        case 5:
            car.changePosition('left',4,animationFunction,stage);
        break;
        case 6:
            car.changePosition('bottom',36,animationFunction,stage);
        break;
        case 7:
            car.changePosition('right',30,animationFunction,stage);
        break;
        case 8:
            car.changePosition('bottom',50,animationFunction,stage);
        break;
        case 9:
            car.changePosition('left',27,animationFunction,stage);
        break;
        case 10:
            car.changePosition('bottom',51,animationFunction,stage);
        break;
           
        default:
            
            break;
    }
}