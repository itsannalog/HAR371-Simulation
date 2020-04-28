//HAR 371 - Simulation Project
//Click the buttons to generate Snowflakes.
//Double click to save as a jpg.

var blue3, blue2, blue1, purple2, purple1, green1, colors;
var canvas, button1, button2, button3, button4, button5;


function setup() {
  canvas = createCanvas(500, 500);
  background(0);
  noFill();
  
  col1 = color(102, 153, 255 );
  col2 = color(102, 204, 255);
  col3 = color(204, 255, 255);
  col4 = color(204, 153, 255);
  col5 = color(204, 204, 255);
  col6 = color(204, 255, 204);
  
  colors = [col1, col2, col3, col4, col5, col6];
  
  button1 = createButton('Stellar Dendrite');
  button1.position(0, 440);
  
  button2 = createButton('Stellar Plate');
  button2.position(0, 460);
  
  button3 = createButton('Fernlike Dendrite');
  button3.position(0, 479);
  
  button4 = createButton('Random');
  button4.position(0, 420);
  
  button5 = createButton('Save As JPG');
  button5.position(405, 479);
  
  button1.mousePressed(drawDend);
  button2.mousePressed(drawPlate);
  button3.mousePressed(drawFern);
  button4.mousePressed(randFlake);
  button5.mousePressed(saveFlake);
  
  cp1 = createColorPicker(col1);
  cp1.position(width - 160, 5);
  cp2 = createColorPicker(col2);
  cp2.position(width - 110, 5);
  cp3 = createColorPicker(col3);
  cp3.position(width - 60, 5);
  cp4 = createColorPicker(col4);
  cp4.position(width - 160, 30);
  cp5 = createColorPicker(col5);
  cp5.position(width - 110, 30);
  cp6 = createColorPicker(col6);
  cp6.position(width - 60, 30);
  
  colors = [col1, col2, col3, col4, col5, col6];
  
  
  randFlake();
}

function draw() {
  col1 = cp1.color();
  col2 = cp2.color();
  col3 = cp3.color();
  col4 = cp4.color();
  col5 = cp5.color();
  col6 = cp6.color();
  
  colors = [col1, col2, col3, col4, col5, col6];
}

function pallette(){
  let s = "Palette: ";
  textAlign(LEFT);
  stroke(255);
  text(s, width - 210, 10, 300, 100);
}

function randFlake(){
  var type = int(random(3));
  background(0);
  pallette();
  buildLeg(type);
  displInfo(type);
}

function drawDend(){
  background(0);
  pallette();
  buildLeg(0);
  displInfo(0);
}
function drawPlate(){
  background(0);
  pallette();
  buildLeg(1);
  displInfo(1);
}
function drawFern(){
  background(0);
  pallette();
  buildLeg(2);
  displInfo(2);
}

function displInfo(type){
  var name, size, temp;
  if (type == 0){
    name = "Stellar Dendrite";
    temp = "-2C";
    size = "2-4 mm";
  }
  if (type == 1){
    name = "Stellar Plate";
    temp = "-2C or -15C";
    size = "2-4 mm";
  }
  if (type == 2){
    name = "Fernlike Stellar Dendrite";
    temp = "-15C";
    size = "5-7 mm";
  }
  strokeWeight(1);
  let s = "Name: " + name + "\nTemperature: " + temp + "\nSize: " + size;
  
  textAlign(LEFT);
  resetMatrix();
  text(s, 10, 10, 300, 100);
}

function buildLeg(type){  
  textAlign(CENTER);
  
  var center, mid, tail, fernLeng1, fernLeng2, fernLeng3, tailLeng, color1, color2, color3, size, chanceMini, miniSize, chanceLine, thickness;
  
  if (type == 2){  //fernlike dendrite
    //set randoms//pick sizes
    center = random(10, 20); 
    mid = center + random(30, 100);
    tail = mid + random(20, 30);
    fernLeng1 = random(3, 30);
    fernLeng2 = random(3, 30);
    fernLeng3 = random(3, 30);
    tailLeng = random(3, 10);
    thickness = random(1, 6);
    
    color1 = colors[int(random(6))]; 
    color2 = colors[int(random(6))];
    color3 = colors[int(random(6))];
    
    angleMode(DEGREES);
    translate(width / 2, height / 2);
    buildFern(center, mid, tail, color1, color2, color3, fernLeng1,fernLeng2,fernLeng3, tailLeng, thickness);
    rotate(60);
    buildFern(center, mid, tail, color1, color2, color3, fernLeng1,fernLeng2,fernLeng3, tailLeng, thickness);
    rotate(60);
    buildFern(center, mid, tail, color1, color2, color3, fernLeng1,fernLeng2,fernLeng3, tailLeng, thickness);
    rotate(60);
    buildFern(center, mid, tail, color1, color2, color3, fernLeng1,fernLeng2,fernLeng3, tailLeng, thickness);
    rotate(60);
    buildFern(center, mid, tail, color1, color2, color3, fernLeng1,fernLeng2,fernLeng3, tailLeng, thickness);
    rotate(60);
    buildFern(center, mid, tail, color1, color2, color3, fernLeng1,fernLeng2,fernLeng3, tailLeng, thickness);
  
    //Measurement Line
    resetMatrix();
    strokeWeight(1);
    translate(width / 2, height / 2);
    size = round(random(5, 7), 2);
    line(-tail, tail + 30, tail, tail + 30);
    text(size + "mm", 0, tail +45);
  
  }  //fernlike dendrite
  if (type == 1){  //stellar plate
    center = random(10, 61);
    mid = center + random(40, 61); 
    
    var chanceCenter = int(random(0, 2));
    chanceMini = int(random(2));
    miniSize = random(1, 6);
    color1 = colors[int(random(6))];
    color2 = colors[int(random(6))];
    color3 = colors[int(random(6))];
    chanceLine = int(random(3));
    thickness = random(1, 6);

    angleMode(DEGREES);
    translate(width / 2, height / 2);
    buildPlate(center, mid, color1, chanceCenter, chanceMini, color2, miniSize, color3, chanceLine, thickness);
    rotate(60);
    buildPlate(center, mid, color1, chanceCenter, chanceMini, color2, miniSize, color3, chanceLine, thickness);
    rotate(60);
    buildPlate(center, mid, color1, chanceCenter, chanceMini, color2, miniSize, color3, chanceLine, thickness);
    rotate(60);
    buildPlate(center, mid, color1, chanceCenter, chanceMini, color2, miniSize, color3, chanceLine, thickness);
    rotate(60);
    buildPlate(center, mid, color1, chanceCenter, chanceMini, color2, miniSize, color3, chanceLine, thickness);
    rotate(60);
    buildPlate(center, mid, color1, chanceCenter, chanceMini, color2, miniSize, color3, chanceLine, thickness);
  
  //Measurement Line
  resetMatrix();
    strokeWeight(1);
  translate(width / 2, height / 2);
  size = round(random(2, 4), 2);
  line(-mid, mid + 30, mid, mid + 30);
  text(size + "mm", 0, mid +45);
  
  }  //stellar plate
  if (type == 0){  //stellar dendrite
    center = random(10, 30);
    mid = center + random(30, 40); 
    tail =  mid + random(30, 50);
    fernLeng1 = random(3, 30);
    fernLeng2 = random(3, 30);
    fernLeng3 = random(3, 30);
    chanceMini = int(random(2));
    miniSize = random(1, 6);
    chanceLine = int(random(3));
    color1 = colors[int(random(6))];
    color2 = colors[int(random(6))];
    color3 = colors[int(random(6))];
    thickness = random(1, 6);
    
    var r = random(10, 25);

    angleMode(DEGREES);
    translate(width / 2, height / 2);
    buildDend(center, mid, tail, chanceMini, miniSize, chanceLine, fernLeng1, fernLeng2, fernLeng3, color1, color2, color3, r, thickness);
    rotate(60);
    buildDend(center, mid, tail, chanceMini, miniSize, chanceLine, fernLeng1, fernLeng2, fernLeng3, color1, color2, color3, r, thickness);
    rotate(60);
    buildDend(center, mid, tail, chanceMini, miniSize, chanceLine, fernLeng1, fernLeng2, fernLeng3, color1, color2, color3, r, thickness);
    rotate(60);
    buildDend(center, mid, tail, chanceMini, miniSize, chanceLine, fernLeng1, fernLeng2, fernLeng3, color1, color2, color3, r, thickness);
    rotate(60);
    buildDend(center, mid, tail, chanceMini, miniSize, chanceLine, fernLeng1, fernLeng2, fernLeng3, color1, color2, color3, r, thickness);
    rotate(60);
    buildDend(center, mid, tail, chanceMini, miniSize, chanceLine, fernLeng1, fernLeng2, fernLeng3, color1, color2, color3, r, thickness);
  
    
  //Measurement Line
  resetMatrix();
  strokeWeight(1);
  translate(width / 2, height / 2);
  size = round(random(2, 4), 2);
  line(-tail, tail + 30, tail, tail + 30);
  text(size + "mm", 0, tail +45);
  
  }  //stellar dendrite

}

function buildFern(center, mid, tail, color1, color2, color3, fernLeng1,fernLeng2,fernLeng3, tailLeng, thickness){
  //---CENTER
  stroke(color1);
  strokeWeight(thickness);
  line(0, 0, 0, center);
  
  //---MID
  stroke(color2);
  line(0, center, 0, mid);
  
  var fernLeng;
  var j = 0;
  for (var i = center; i < mid; i+=10){ 
    if (j %3 == 0) fernLeng = fernLeng1;
    else if (j %3 == 1) fernLeng = fernLeng2;
    else fernLeng = fernLeng3;
    line(-fernLeng, fernLeng+i, 0,i); 
    line(0,i, fernLeng, fernLeng+i); 
    j++;
  }

  //---TAIL
  stroke(color3);
  line(0, mid, 0, tail);
  
  
  line(0, tail-10, tailLeng, tail-5);
  line(-tailLeng, tail-5, 0, tail-10);
}//end buildFern

function buildPlate(center, mid, color1, chanceCenter, chanceMini, color2, minisize, color3, chanceLine, thickness){
  //---CENTER
  stroke(color1);
  strokeWeight(thickness);
  if (chanceCenter != 0){  //closed
    beginShape();
      vertex(-32, 32);
      vertex(0, center);
      vertex(32, 32);
    endShape();

    if (chanceMini == 0){
      //pick color/transparency
      stroke(color2);
      beginShape();
        vertex(-minisize, minisize);
        vertex(0, center/2);
        vertex(minisize, minisize);
      endShape();
    }
  }
  
  //---MID
  stroke(color3);
  if (chanceLine ==0)  line(0, center, 0, mid);

  beginShape();
    vertex(-30, center);
    vertex(-30, 30+center);
    vertex(0, mid);
    vertex(30, 30+center);
    vertex(30, center);
  endShape();

}//end buildPlate

function buildDend(center, mid, tail, chanceMini, miniSize, chanceLine, fernLeng1, fernLeng2, fernLeng3, color1, color2, color3, r, thickness){
  //---CENTER
  stroke(color1);
  strokeWeight(thickness);

  beginShape();
    vertex(-r, r);
    vertex(0, center);
    vertex(r, r);
  endShape();

  if (chanceMini == 0){
    //pick color/transparency
    stroke(color3);
    beginShape();
      vertex(-miniSize, miniSize);
      vertex(0, center/2);
      vertex(miniSize, miniSize);
    endShape();
  }

  
  //---MID
  stroke(color2);
  if (chanceLine ==0)  line(0, center, 0, mid);

  beginShape();
    vertex(-r, center);
    vertex(-r, r+center);
    vertex(0, mid);
    vertex(r, r+center);
    vertex(r, center);
  endShape();
  
  //---TAIL
  stroke(color3);
  line(0, mid, 0, tail);
  
  var fernLeng;
  var j = 0;
  for (var i = mid; i < tail; i+=10){ 
    if (j %3 == 0) fernLeng = fernLeng1;
    else if (j %3 == 1) fernLeng = fernLeng2;
    else fernLeng = fernLeng3;
    line(-fernLeng, fernLeng+i, 0,i); 
    line(0,i, fernLeng, fernLeng+i); 
    j++;
  }

}

function saveFlake(){
  saveCanvas(canvas, 'mySnowflake', 'jpg');
}