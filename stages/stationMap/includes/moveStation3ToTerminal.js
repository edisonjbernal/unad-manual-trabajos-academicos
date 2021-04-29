function moveStation3ToTerminal(stage = 1){
    let animationFunction = moveStation3ToTerminal;
    switch (stage) {

        case 1:
            busCar.changePosition('right',85 ,animationFunction,stage);
        break;
        case 2:
            busCar.changePosition('top',41 ,animationFunction,stage);
        break;
        case 3:
            busCar.changePosition('left',62 ,animationFunction,stage);
        break;
        case 4:
            busCar.changePosition('top',28 ,animationFunction,stage);
        break;
        case 5:
            busCar.changePosition('left',43 ,animationFunction,stage);
        break;
        case 6:
            busCar.changePosition('top',25 ,animationFunction,stage);
        break;
        case 7:
            busCar.changePosition('right',50,animationFunction,stage);
        break;
        default:
            mapInteractions.nextStation(busCar.position.to);
            break;
    }
}