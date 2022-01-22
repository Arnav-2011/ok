class Virus
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			
			friction:0.5,
			density:1.2
			}

		this.r = r
		this.body=Matter.Bodies.circle(x,y, this.r, options);
		
		Matter.World.add(world, this.body);
        this.image = loadImage("virus.png")
	}
	display()
	{	
			var pos=this.body.position;		
			imageMode(CENTER)
            image(this.image, pos.x, pos.y, this.r, this.r)
	}

}