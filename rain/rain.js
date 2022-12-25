"use strict";
let fpsdisp, drops;

let linesArr = [];
class Line {
	constructor() {
		this.x = random(-windowHeight,0);
		this.y = random(-windowWidth,0);
		this.l = random(10, 30);
		this.r = random(255);
		this.g = random(255);
		this.b = random(255);
		this.speed = random(2, 5);
	}
	show() {
		stroke(this.r,this.g,this.b);
		line(this.x,this.y,this.x+this.l,this.y+this.l);
	}
	update() {
		this.x += this.speed;
		this.y += this.speed;
	}
	landed() {
		return this.x-this.l > width || this.y-this.l > height;
	}
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	fpsdisp = createSpan().id("Fps");
	drops = createSpan().id("Drops");
		//add some initial drops
	for(let i=0; i<200; i++) {
		linesArr.push(new Line());
	}
}

function draw() {
		//display fps
  fpsdisp.html("fps: "+floor(frameRate()));
	//display number of drops
  drops.html("drops: "+linesArr.length);
  background(0);
  strokeWeight(3);
//  linesArr.push(new Line());
  for(let i=0; i<linesArr.length; i++) {
		//remove of screen drops for performance
	if (linesArr[i].landed()) {
			linesArr.splice(i,1);
			linesArr.push(new Line());
		}
		
  linesArr[i].update();
  linesArr[i].show();
  }
}
//  uses whole window size, even after resize
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
} 