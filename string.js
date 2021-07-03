class String{
    constructor(bodyA, pointB){
        var options = {
            bodyA : bodyA, 
            pointB : pointB,
            stiffness : 0.04,
            length : 1
        
        }
        this.string = Constraint. create(options)
        this.pointB = pointB
        World.add(world,this.string)
    }
    fly(){
        this.string.bodyA = null
    }
display(){
    if(this.string.bodyA){
var pointA= this.string.bodyA.position
var pointB = this.pointB
strokeWeight(2)
stroke("white")
line(pointA.x, pointA.y, pointB.x, pointB.y)
    }
}
}