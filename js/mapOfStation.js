class busCar{
    constructor(){
        this.car=document.getElementById('busCar');
        this.position={
            station:'initial',
            currentX:0,
            currentY:10,
            numberToMove:0,
            direction:'horizontal'
        }
        console.log(this.position);
        
    }

    changePosition(direction,numberToMove,animationFunction,stage=1){
        this.stage=stage;
        this.animationFunction = animationFunction;           
        this.position.direction=direction;
        this.position.numberToMove=numberToMove;
  
        this.moveCar();
    }
    moveCar(){
        
        switch (this.position.direction) {
            case "right":
                if(this.car.style.transform!= "rotate(0deg)"){
                    this.car.style.transform= "rotate(0deg)";
                }
                
                    if(this.position.numberToMove > this.position.currentX){
                        this.position.currentX++;
                        this.car.style.left=this.position.currentX + "%";
                        this.move();
                    }
                else{
                    this.nextStage();
                }
                console.log("horizontal-right");
                break;
            case "left":
                if(this.car.style.transform!= "rotate(180deg)"){
                    this.car.style.transform= "rotate(180deg)";
                }
                if(this.position.numberToMove < this.position.currentX){
                    this.position.currentX--;
                    this.car.style.left=this.position.currentX + "%";
                    this.move();
                }
                else{
                    this.nextStage();
                }
                console.log("horizontal-left");
                break;
            case "top":
                if(this.car.style.transform!= "rotate(270deg)"){
                    this.car.style.transform= "rotate(270deg)";
                }
                if(this.position.numberToMove < this.position.currentY){
                    this.position.currentY--;
                    this.car.style.top=this.position.currentY + "%";
                    this.move();
                }
                else{
                    this.nextStage();
                }

                console.log("vertical-top");
                break;
            case "bottom":
                if(this.car.style.transform!= "rotate(90deg)"){
                    this.car.style.transform= "rotate(90deg)";
                }
                if(this.position.numberToMove > this.position.currentY){
                    this.position.currentY++;
                    this.car.style.top=this.position.currentY + "%";
                    this.move();
                }
                else{
                    this.nextStage();
                }
                console.log("vertical-bottom");
                break;
            default:
                console.log("No se selccionó");
                break;
        }

       /* if(this.position.newX < this.position.lastX){
            this.timerToMove =setTimeout(function(){
                these.moveCar();}
                ,500);
        }

        this.car.style.left=this.position.newX + "%";
        this.car.style.top=this.position.newY + "%";
        console.log('Se Movio');
        console.log(this.position);*/

    }

    move(){
        let these=this;
        this.timerToMove =setTimeout(function(){
            these.moveCar();}
            ,20);
    }
    nextStage(){
        this.stage++;
        this.animationFunction(this.stage);
    }
    removeAllClassCar(){
        this.car.classList.remove('horizontal-left');
        this.car.classList.remove('horizontal-right');
        this.car.classList.remove('vertical-top');
        this.car.classList.remove('vertical-bottom');
    }
    
}