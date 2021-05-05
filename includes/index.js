var activities={
    lastPageId:'',
    number:0,
    stage1Passed:true,
    addNumber:function(){
        this.number++;
    }
}

document.getElementById('map-circle-button').addEventListener('click',function(){
    event.preventDefault();
    stage.get('stationMap');
}
);

stage.get('home');