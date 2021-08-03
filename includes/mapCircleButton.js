class mapCircleButtonClass{
    constructor(){
        let buttonGoMap = document.getElementById('map-circle-button');
        if(!buttonGoMap){
            let buttonGoMap = document.createElement('a');
            buttonGoMap.classList.add('map-circle-button');
            buttonGoMap.href = '#stationMap';
            buttonGoMap.id = 'map-circle-button';
            buttonGoMap.innerText = 'Ver mapa';
            
            document.getElementsByTagName('body').item(0).appendChild(buttonGoMap);

           let these = this; 
            buttonGoMap.addEventListener('click',function(){
    event.preventDefault();
    these.change();
}
);
        }
    }
    change(){
        let currentStageName= stage.currentStageName();
        try {
                /* console.log('stage.currentStageDiv()'); */
            let currentStage=document.getElementById(`stage_${currentStageName}`);
            let currentStagePagesArray=currentStage.getElementsByClassName('general')[0].querySelectorAll('main > div');
            /* console.log(currentStagePagesArray); */
            for (let index = 0; index < currentStagePagesArray.length; index++) {
                let tmpHTML=currentStagePagesArray[index].innerHTML;
                currentStagePagesArray[index].innerHTML='';
                currentStagePagesArray[index].innerHTML=tmpHTML;
            }
        } catch (error) {
            
        }
        stage.get('stationMap');
    }
}