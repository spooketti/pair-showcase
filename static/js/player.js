class player
{
    constructor(startX,startY,startRotation,color)
    {

        //the diff between rotation and direction is direction is the left forward and right turning
        //rotation is the global rotation

        this.x = startX
        this.y = startY
        this.rotation = startRotation;
        this.direction = 0; 
        this.color = color
        this.magnitude = 1;
    }
}