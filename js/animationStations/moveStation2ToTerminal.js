function moveStation2ToTerminal(stage = 1){
    let animationFunction = moveStation2ToTerminal;
    switch (stage) {

        case 1:
            car.changePosition('right',30 ,animationFunction,stage);
            break;
        case 2:
            car.changePosition('top',36 ,animationFunction,stage);
            break;
        case 3:
            car.changePosition('left',4 ,animationFunction,stage);
            break;
        case 4:
            car.changePosition('top',25 ,animationFunction,stage);
            break;
        case 5:
            car.changePosition('right',50,animationFunction,stage);
            break;
        default:
            if(!nextStation(car.position.to)){
                car.stop('terminal');
            }
            
        break;
    }
}