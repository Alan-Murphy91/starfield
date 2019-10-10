const stars = new Array(800);

function setup(){
    createCanvas(window.screen.availWidth, window.screen.availHeight)
    for(var i=0; i<800; i++){
        stars[i] = new star();
    }
}

function draw(){
    background(0);
    translate(window.screen.availWidth/2, window.screen.availHeight/2);
    for(var i=0; i<800; i++){
		stars[i].show();
    }
}

function star(){
    this.x = (Math.random() * window.screen.availWidth);
    this.y = (Math.random() * window.screen.availHeight);
    this.z = (Math.random() * window.screen.availHeight);

    this.x *= Math.random() < 0.5 ? -1 : 1;
    this.y *= Math.random() < 0.5 ? -1 : 1;

    this.show = function(){
        fill(255);
        noStroke();
        const nx = map(this.x/this.z,0,1,0,window.screen.availWidth/3);
        const ny = map(this.y/this.z,0,1,0,window.screen.availHeight/3);
        const size = map(this.z, window.screen.availWidth/2, 1, 0.1,8);
		ellipse(nx,ny,size,size);
		if (nx > window.screen.availWidth || ny > window.screen.availHeight) {
			this.z = window.screen.availWidth/2;
		}
        this.z -= 2;
    }
}
