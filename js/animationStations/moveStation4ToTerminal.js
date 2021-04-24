function moveStation4ToTerminal(stage = 1){
    let animationFunction = moveStation4ToTerminal;
    switch (stage) {

        case 1:
            car.changePosition('right',47 ,animationFunction,stage);
        break;
        case 2:
            car.changePosition('top',88 ,animationFunction,stage);
        break;
        case 3:
            car.changePosition('right',71 ,animationFunction,stage);
        break;
        case 4:
            car.changePosition('top',71 ,animationFunction,stage);
        break;
        case 5:
            car.changePosition('left',16 ,animationFunction,stage);
        break;
        case 6:
            car.changePosition('top',64 ,animationFunction,stage);
        break;
        case 7:
            car.changePosition('right',40 ,animationFunction,stage);
        break;
        case 8:
            car.changePosition('top',25 ,animationFunction,stage);
        break;
        case 9:
            car.changePosition('right',50 ,animationFunction,stage);
        break;
    }
}