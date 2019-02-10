const NR_BUBBLES = 5;

let x;
let y;
let r, g, b;

let bubbles;

function setup() {
  createCanvas(1100, 600);
  bubbles = [];

  for(let i = 0; i < NR_BUBBLES; i++){
    x = random(0, width+1);
    y = random(0, height+1);
    r = random(0, 255);
    g = random(0, 255);
    b = random(0, 255);

    bubbles[i] = new Bubble(x, y, r, g, b);
  }
}

function draw() {
  background(100);

  for(let i = 0; i < bubbles.length; i++){
    fill(bubbles[i].r, bubbles[i].g, bubbles[i].b);
    noStroke();
    ellipse(bubbles[i].x, bubbles[i].y, bubbles[i].w, bubbles[i].h);

    bubbles[i].x += bubbles[i].xspeed;
    bubbles[i].y += bubbles[i].yspeed;

    if(bubbles[i].x >= width || bubbles[i].x <= 0)
      bubbles[i].xspeed *= -1;
      
    if(bubbles[i].y >= height || bubbles[i].y <= 0)
      bubbles[i].yspeed *= -1;
  }
}
