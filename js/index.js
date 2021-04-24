/*importJs = new importCustomJS('./js/');
importJs.add(
    'start',
    'ends',
    );*/

//MapAnimation

/*importJs = new importCustomJS('./js/animationStations');
importJs.add(
    'moveStarToTerminal',
    );*/


let car = new busCar;


document.getElementById('station1').addEventListener("click", 
function(){
    moveStartToTerminal();
});
document.getElementById('station2').addEventListener("click", 
function(){
    moveTerminalToStation2();
});



//arriveTerminal();
//arriveStation2();


