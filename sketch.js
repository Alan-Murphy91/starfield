var stars = new Array(2500);

function setup(){
    createCanvas($(window).width(), $(window).height(), )
    for(var i=0; i<2500; i++){
        stars[i] = new star();
    }
}

function draw(){
    background(0);
    translate($(window).width()/2, $(window).height()/2);
    for(var i=0; i<2500; i++){
        stars[i].show();
    }
}

function star(){
    this.x = (Math.random() * $(window).width()) + 1;
    this.y = (Math.random() * $(window).height()) + 1;
    this.z = (Math.random() * $(window).height()) + 1;

    var coin = Math.random() < 0.5 ? -1 : 1;
    var coin2 = Math.random() < 0.5 ? -1 : 1;
    
    this.x *= coin;
    this.y *= coin2;

    

    this.show = function(){
        fill(255);
        noStroke();
        var nx = map(this.x/this.z,0,1,0,$(window).width()/2);
        var ny = map(this.y/this.z,0,1,0,$(window).height()/2);
        var size = map(this.z, $(window).width()/2, 1, 0.1,8);
        ellipse(nx,ny,size,size);
        if(this.z < 1){
            this.z = $(window).width()/2;
        }
        this.z -=1.5;
    }


}