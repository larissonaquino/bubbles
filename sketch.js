let x;
let y;

let xspeed;
let yspeed;
let img;

// function preload(){
//   img = loadImage('bubble.png');
// }

function setup() {
  createCanvas(1100, 600);
  x = width/2;
  y = height/2;
  xspeed = 10;
  yspeed = 10;
}

function draw() {
  background(100, 100, 100);
  ellipse(x, y, 80, 80);
  //image(img, x, y, 80, 80);
  x += xspeed;
  y += yspeed;

  if(x == width || x == 0)
    xspeed *= -1;
  if(y == height || y == 0)
    yspeed *= -1;
}

createBubble = () => {
  
}