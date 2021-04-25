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
    let animationChageScenario = new changeScenarioAnimation;

    function unloadAllScenarios(scenario) {
        document.getElementById('mapOfStations').style.display='none';
        document.getElementById('scenarioTerminal').style.display='none';
        
    }

    function loadScenario(scenario){
        unloadAllScenarios();
        document.getElementById(scenario).style.display='block';
    }








//arriveTerminal();
//arriveStation2();


