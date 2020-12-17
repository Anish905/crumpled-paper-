class Paper
{
	constructor(x,y,r,paperImage=loadImage("paper.png"),)
	{
		var options={
			
			isStatic:false,
			restitution:0.3,
			friction:0.5,
			density:1.2
			
			}
		
		this.x=x;
		this.y=y;
		this.r=r
		
		 this.body=Bodies.circle(this.x, this.y, r/6, options)
		 World.add(world, this.body);
		
		

	}
	display()
	{
		
		var paperpos=this.body.position;
		this.addImage = paperImage
		  
			
			
		    		
            this.add
			push()
			translate(paperpos.x, paperpos.y);
			rectMode(CENTER)
			//strokeWeight(4);
			 fill(255,0,255) 
			 imageMode(CENTER);
			 
			
			ellipse(0,0,this.r, this.r);
			//imageMode(CENTER)
			pop()
			
			
			
	}

}