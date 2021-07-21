class pointsActivityCalculateClass{
    constructor(pointsActivity= 1){
        this.pointsActivity= pointsActivity;
        this.totalPoints=0;
    }
    calculate(maxPoints,sumPoints){
        this.totalPoints= 1/maxPoints;
        this.totalPoints=this.totalPoints*sumPoints;
        this.totalPoints=parseInt(this.totalPoints*this.pointsActivity);
        
        return this.totalPoints;
    }
}