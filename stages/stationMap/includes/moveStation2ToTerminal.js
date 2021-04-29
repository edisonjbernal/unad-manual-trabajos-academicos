function moveStation2ToTerminal(stage = 1){
    let animationFunction = moveStation2ToTerminal;
    switch (stage) {

        case 1:
            busCar.changePosition('right',30 ,animationFunction,stage);
            break;
        case 2:
            busCar.changePosition('top',36 ,animationFunction,stage);
            break;
        case 3:
            busCar.changePosition('left',4 ,animationFunction,stage);
            break;
        case 4:
            busCar.changePosition('top',25 ,animationFunction,stage);
            break;
        case 5:
            busCar.changePosition('right',50,animationFunction,stage);
            break;
        default:
            mapInteractions.nextStation(busCar.position.to);
        break;
    }
}