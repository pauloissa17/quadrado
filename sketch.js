let cor;

let posicaoHorizontal;

let posicaoVertical;

function setup() {
  createCanvas(600, 600);
  background("orange");
  cor = color(random(0, 255),  random(0, 255), random(0, 255));
   posicaoHorizontal = 200;
   posicaovertical = 200;
}

function draw() {
  fill("white");
  circle(posicaoHorizontal, posicaoVertical, 50);
  if(mouseX < posicaoHorizontal) {
  posicaoHorizontal--;
  }
  {
  if(mouseX > posicaoHorizontal)
    posicaoHorizontal++;
  }
  if(mouseY < posicaoVertical) {
    posicaoVertical--;
  }
  if(mouseY > posicaoVertical) {
    posicaoVertical++;
  }
}
