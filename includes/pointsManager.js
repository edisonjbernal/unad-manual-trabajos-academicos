class pointManagerClass{
    constructor(){
        this.activities=[];
    }
    add(id,points,name){
        if(!this.find(id)){
            this.activities.push(
                {
                    id:id,
                    points:points,
                    name:name
                }
            );
        }
        else{
            let index= this.findIndex(id);
            /* console.log('indexActivity');
            console.log(index); */
            this.activities[index]={
                id:id,
                points:points,
                name:name
            };
        }
    }
    get(id){
        let activity = this.find(id);

        if(!activity){
            activity={
                id:'noId',
                points:0,
                name:'noNameActivity'
            };
        }

        return activity;
    }
    find(id){
        let activity = false;
        activity  = this.activities.find(function(activitiesArray){
            return activitiesArray.id === id;
        });
        return activity;
    }
    findIndex(id){
        let activity = false;
        activity  = this.activities.findIndex(function(activitiesArray){
            return activitiesArray.id === id;
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