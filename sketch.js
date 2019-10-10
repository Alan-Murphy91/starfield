const stars = new Array(1000);

function setup(){
    createCanvas(window.screen.availWidth, window.screen.availHeight)
    for(var i=0; i<1000; i++){
        stars[i] = new star();
    }
}

function draw(){
    background(0);
    translate(window.screen.availWidth/2, window.screen.availHeight/2);
    for(var i=0; i<1000; i++){
		stars[i].show();
		// console.log(stars[i].x, stars[i].y, stars[i].z);
    }
}

function star(){
    this.x = (Math.random() * window.screen.availWidth) + 1;
    this.y = (Math.random() * window.screen.availHeight) + 1;
    this.z = (Math.random() * window.screen.availHeight) + 1;

    this.x *= Math.random() < 0.5 ? -1 : 1;
    this.y *= Math.random() < 0.5 ? -1 : 1;

    this.show = function(){
        fill(255);
        noStroke();
        var nx = map(this.x/this.z,0,1,0,window.screen.availWidth/3);
        var ny = map(this.y/this.z,0,1,0,window.screen.availHeight/3);
        var size = map(this.z, window.screen.availWidth/2, 1, 0.1,8);
		ellipse(nx,ny,size,size);
		// console.log(nx, ny);
		if(nx > window.screen.availWidth || ny > window.screen.availHeight) {
			this.z = window.screen.availWidth/2;
		}
        this.z -=1.5;
    }
}
