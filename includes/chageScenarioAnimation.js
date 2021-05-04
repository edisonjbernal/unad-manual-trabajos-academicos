class changeScenarioAnimationClass{
    constructor(){
        this.container=document.getElementById('changeScenarioAnimation');
        this.opacity=0;
        
    }
    change(){
        this.container.style.display='block';
        this.addOpacity();
    }

    addOpacity(){
        this.opacity++;
        if(this.opacity>=10){
            this.container.style.opacity="1";
            console.log('fin');
            stage.unload();
            stage.load();
            
            this.removeOpacity();
        }
        else{
            this.container.style.opacity="0."+this.opacity;
            let these=this;
            this.timer=setTimeout(function(){
            these.addOpacity();}
            ,50);
        }
        
    }
    removeOpacity(){
        this.opacity--;
        if(this.opacity<=0){
            this.container.style.opacity="0";
            this.container.style.display='none';
            console.log('fin2');
        }
        else{
            this.container.style.opacity="0."+this.opacity;
            let these=this;
            this.timer=setTimeout(function(){
            these.removeOpacity();}
            ,50);
        }
        
    }



}

const changeScenarioAnimation = new changeScenarioAnimationClass;