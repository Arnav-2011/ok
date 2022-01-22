class Man
{
	constructor(x,y,w,h,sprite)
	{
		var options={
			isStatic:false,
			
			friction:0.5,
			density:1.2
			}

		this.w=w
		this.h = h
		this.sprite = sprite
		this.body=Bodies.rectangle(x,y, this.w,this.h, options);
		
		Matter.World.add(world, this.body);

	}
	display()
	{	
			var pos=this.body.position;		
			pos.x=this.sprite.x
			pos.y=this.sprite.y
	}

}