class Cannon{
    constructor(x,y,w,h,angle) {

     this.x = x
     this.y = y
     this.width = w
     this.height = h
     this.angle = angle
    }

    display(){
        fill(96,100,104)
        push()
        translate(this.x,this.y);
        rotate(this.angle);
        rect(-10,-20,this.width,this.height);
        pop();
        arc(this.x-30,this.y+100,145,230,PI,2*PI) ;
    
    }

}