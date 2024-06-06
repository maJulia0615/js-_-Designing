function setup() {
    createCanvas(720, 500);
    background("black");
  }
  
  function draw() {
    stroke("blue");
    fill("purple");
    
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 20, 35);
    }
  
  }