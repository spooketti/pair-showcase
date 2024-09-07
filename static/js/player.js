class player
{
    constructor(startX,startY,startRotation,color)
    {
        this.x = startX
        this.y = startY
        this.direction = startRotation;
        this.color = color
        this.magnitude
    }
    // 0, 1, 2, 3, 4, 5, 6, 7,  from top going clockwise
    move(direction, magnitude){
        switch(direction){
            case 0:
                y+=magnitude;
                break;
            case 1:
                x+=magnitude;
                y+magnitude;
                break;
            case 2:
                x+=magnitude;
                break;
            case 3:
                x+=magnitude;
                y-=magnitude;
                break;
            case 4:
                y-=magnitude;
                break;
            case 5:
                x-=magnitude;
                y-=magnitude;
                break;
            case 6:
                x-=magnitude;
                break;
            case 7:
                x-=magnitude;
                y+=magnitude;
                break;
        }
        

    }

    change_direction(delta_direction){
        this.direction+=delta_direction;
    }

    change_magnitude(delta_magnitude){
        if(this.magnitude==1 && delta_magnitude==-1){
            return;
        }
        this.magnitude+=delta_magnitude;
    }
    
}