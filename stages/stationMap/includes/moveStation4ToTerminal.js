function moveStation4ToTerminal(stage = 1){
    let animationFunction = moveStation4ToTerminal;
    switch (stage) {

        case 1:
            busCar.changePosition('right',47 ,animationFunction,stage);
        break;
        case 2:
            busCar.changePosition('top',88 ,animationFunction,stage);
        break;
        case 3:
            busCar.changePosition('right',71 ,animationFunction,stage);
        break;
        case 4:
            busCar.changePosition('top',71 ,animationFunction,stage);
        break;
        case 5:
            busCar.changePosition('left',19 ,animationFunction,stage);
        break;
        case 6:
            busCar.changePosition('top',64 ,animationFunction,stage);
        break;
        case 7:
            busCar.changePosition('right',43 ,animationFunction,stage);
        break;
        case 8:
            busCar.changePosition('top',25 ,animationFunction,stage);
        break;
        case 9:
            busCar.changePosition('right',50 ,animationFunction,stage);
        break;
        default:
            mapInteractions.nextStation(busCar.position.to);
            break;
    }
}