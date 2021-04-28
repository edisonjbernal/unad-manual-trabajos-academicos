function moveStation3ToTerminal(stage = 1){
    let animationFunction = moveStation3ToTerminal;
    switch (stage) {

        case 1:
            car.changePosition('right',85 ,animationFunction,stage);
        break;
        case 2:
            car.changePosition('top',41 ,animationFunction,stage);
        break;
        case 3:
            car.changePosition('left',62 ,animationFunction,stage);
        break;
        case 4:
            car.changePosition('top',28 ,animationFunction,stage);
        break;
        case 5:
            car.changePosition('left',43 ,animationFunction,stage);
        break;
        case 6:
            car.changePosition('top',25 ,animationFunction,stage);
        break;
        case 7:
            car.changePosition('right',50,animationFunction,stage);
        break;
        default:
            if(!nextStation(car.position.to)){
                car.stop('terminal');
            }
            break;
    }
}