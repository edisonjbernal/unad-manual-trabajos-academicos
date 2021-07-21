class pointManagerClass{
    constructor(){
        this.activities=[];
    }
    add(name,points){
        if(!this.find(name)){
            this.activities.push(
                {
                    name:name,
                    points:points
                }
            );
        }
        else{
            let index= this.findIndex(name);
            /* console.log('indexActivity');
            console.log(index); */
            this.activities[index]={
                name:name,
                points:points
            };
        }
    }
    get(name){
        let activity = this.find(name);

        if(!activity){
            activity={
                name:'noActivity',
                points:0
            };
        }

        return activity;
    }
    find(name){
        let activity = false;
        activity  = this.activities.find(function(activitiesArray){
            return activitiesArray.name === name;
        });
        return activity;
    }
    findIndex(name){
        let activity = false;
        activity  = this.activities.findIndex(function(activitiesArray){
            return activitiesArray.name === name;
        });
        return activity;
    }
    totalPoins(){
        let total = 0;
        for (let index = 0; index < this.activities.length; index++) {
            total += this.activities[index].points;
        }
        return total;
    }
}